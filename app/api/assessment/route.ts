import { NextResponse } from 'next/server';
import { steps } from '@/components/assessment/questions';

// Receives efficiency assessment submissions and emails them to the team via Resend.
//
// Env vars (set in Netlify → Site configuration → Environment variables):
//   RESEND_API_KEY          required in production
//   ASSESSMENT_TO_EMAIL     defaults to shivan@symoura.co.uk
//   ASSESSMENT_FROM_EMAIL   defaults to Resend's test sender; switch to e.g.
//                           "Symoura Website <assessment@symoura.com>" once the domain is verified in Resend
//
// Without RESEND_API_KEY in local dev, submissions are logged to the console instead.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TO_EMAIL = process.env.ASSESSMENT_TO_EMAIL || 'shivan@symoura.co.uk';
const FROM_EMAIL = process.env.ASSESSMENT_FROM_EMAIL || 'Symoura Website <onboarding@resend.dev>';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatAnswer(value: unknown) {
  if (Array.isArray(value)) return value.map(String).join(', ');
  return value === undefined || value === null || value === '' ? '-' : String(value);
}

function buildEmail(answers: Record<string, unknown>) {
  const sections = steps.map((step) => {
    const rows = step.questions
      .map(
        (q) => `
          <tr>
            <td style="padding:8px 12px;border-bottom:1px solid #E8E6E3;color:#6B7280;vertical-align:top;width:40%">${escapeHtml(q.label)}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #E8E6E3;color:#1F2937;white-space:pre-wrap">${escapeHtml(formatAnswer(answers[q.id]))}</td>
          </tr>`
      )
      .join('');
    return `
      <h3 style="color:#1A3D5C;margin:24px 0 8px">${escapeHtml(step.title)}</h3>
      <table style="border-collapse:collapse;width:100%;font-size:14px">${rows}</table>`;
  });

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:680px">
      <h2 style="color:#1A3D5C">New efficiency assessment</h2>
      <p style="color:#6B7280">Reply to this email to respond directly to ${escapeHtml(formatAnswer(answers.name))}.</p>
      ${sections.join('')}
    </div>`;

  const text = steps
    .map(
      (step) =>
        `== ${step.title} ==\n` + step.questions.map((q) => `${q.label}\n  ${formatAnswer(answers[q.id])}`).join('\n')
    )
    .join('\n\n');

  return { html, text };
}

export async function POST(request: Request) {
  let body: { answers?: Record<string, unknown>; consent?: boolean; website?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot filled in: pretend success so bots don't retry.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const answers = body.answers ?? {};
  const email = typeof answers.email === 'string' ? answers.email.trim() : '';
  const name = typeof answers.name === 'string' ? answers.name.trim() : '';
  const company = typeof answers.company === 'string' ? answers.company.trim() : '';

  if (!name || !EMAIL_PATTERN.test(email) || body.consent !== true) {
    return NextResponse.json({ error: 'Missing name, email or consent' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === 'production') {
      console.error('[assessment] RESEND_API_KEY is not set - submission not delivered');
      return NextResponse.json({ error: 'Email is not configured' }, { status: 500 });
    }
    console.log('[assessment] new submission (RESEND_API_KEY not set, not emailed)', JSON.stringify(answers, null, 2));
    return NextResponse.json({ ok: true });
  }

  const { html, text } = buildEmail(answers);
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `New efficiency assessment: ${name}${company ? ` (${company})` : ''}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error('[assessment] Resend failed', res.status, await res.text());
    return NextResponse.json({ error: 'Could not send submission' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
