'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { steps, weeklyHoursMidpoints, savingsRange, type Question } from './questions';

type Answers = Record<string, string | string[]>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isAnswered(question: Question, value: string | string[] | undefined) {
  if (Array.isArray(value)) return value.length > 0;
  if (!value || !value.trim()) return false;
  if (question.type === 'email') return EMAIL_PATTERN.test(value.trim());
  return true;
}

export default function AssessmentForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showErrors, setShowErrors] = useState(false);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  const step = steps[stepIndex];
  const isLastStep = stepIndex === steps.length - 1;
  const progress = ((stepIndex + (status === 'done' ? 1 : 0)) / steps.length) * 100;

  const missing = step.questions.filter((q) => q.required && !isAnswered(q, answers[q.id]));
  const stepValid = missing.length === 0 && (!isLastStep || consent);

  const setValue = (id: string, value: string | string[]) =>
    setAnswers((prev) => ({ ...prev, [id]: value }));

  const toggleOption = (question: Question, option: string) => {
    const current = (answers[question.id] as string[] | undefined) ?? [];
    if (current.includes(option)) {
      setValue(question.id, current.filter((o) => o !== option));
    } else if (!question.maxSelections || current.length < question.maxSelections) {
      setValue(question.id, [...current, option]);
    }
  };

  const goNext = async () => {
    if (!stepValid) {
      setShowErrors(true);
      return;
    }
    setShowErrors(false);

    if (!isLastStep) {
      setStepIndex((i) => i + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, consent, website: honeypot }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus('done');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setStatus('error');
    }
  };

  const goBack = () => {
    setShowErrors(false);
    setStepIndex((i) => Math.max(0, i - 1));
  };

  if (status === 'done') {
    return <Results answers={answers} />;
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-neutral-medium-gray mb-2">
          <span>
            Step {stepIndex + 1} of {steps.length}
          </span>
          <span>{step.title}</span>
        </div>
        <div className="h-2 bg-neutral-light-gray rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-navy rounded-full"
            initial={false}
            animate={{ width: `${Math.max(progress, 4)}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>

      <Card interactive={false}>
        <AnimatePresence mode="wait">
          <motion.div
            key={stepIndex}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl mb-2">{step.title}</h2>
            <p className="mb-10">{step.description}</p>

            <div className="space-y-10">
              {step.questions.map((question) => (
                <QuestionField
                  key={question.id}
                  question={question}
                  value={answers[question.id]}
                  error={showErrors && question.required && !isAnswered(question, answers[question.id])}
                  onChange={(v) => setValue(question.id, v)}
                  onToggle={(o) => toggleOption(question, o)}
                />
              ))}

              {isLastStep && (
                <>
                  {/* Honeypot - hidden from people, filled in by bots */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    aria-hidden="true"
                  />
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-5 w-5 rounded border-neutral-light-gray accent-navy"
                    />
                    <span className="text-sm text-neutral-medium-gray">
                      I&apos;m happy for Symoura to contact me about my results. We&apos;ll never share your details with
                      anyone else.
                    </span>
                  </label>
                  {showErrors && !consent && (
                    <p className="text-sm text-error -mt-8">Please tick the box so we can send your results.</p>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {status === 'error' && (
          <p className="mt-8 text-sm text-error">
            Something went wrong sending your answers. Please try again, or email us at{' '}
            <a href="mailto:shivan@symoura.co.uk">shivan@symoura.co.uk</a>.
          </p>
        )}

        <div className="mt-12 flex items-center justify-between gap-4">
          {stepIndex > 0 ? (
            <Button variant="secondary" onClick={goBack}>
              Back
            </Button>
          ) : (
            <span />
          )}
          <Button onClick={goNext} className={status === 'submitting' ? 'opacity-60 pointer-events-none' : ''}>
            {isLastStep ? (status === 'submitting' ? 'Sending…' : 'See my results') : 'Next'}
          </Button>
        </div>
      </Card>

      <p className="text-center text-sm text-neutral-medium-gray mt-6">Takes about 3 minutes. No sales pressure.</p>
    </div>
  );
}

interface QuestionFieldProps {
  question: Question;
  value: string | string[] | undefined;
  error: boolean | undefined;
  onChange: (value: string) => void;
  onToggle: (option: string) => void;
}

function QuestionField({ question, value, error, onChange, onToggle }: QuestionFieldProps) {
  const selected = Array.isArray(value) ? value : value ? [value] : [];
  const atMax = question.maxSelections !== undefined && selected.length >= question.maxSelections;
  const inputClasses =
    'w-full rounded-lg border bg-white px-4 py-3 text-neutral-dark-gray placeholder:text-neutral-medium-gray/60 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors';

  return (
    <fieldset>
      <legend className="text-lg font-semibold text-navy mb-1">
        {question.label}
        {!question.required && <span className="font-normal text-neutral-medium-gray text-base"> (optional)</span>}
      </legend>
      {question.help && <p className="text-sm mb-4">{question.help}</p>}
      {!question.help && <div className="mb-4" />}

      {(question.type === 'single' || question.type === 'multi') && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {question.options!.map((option) => {
            const isSelected = selected.includes(option);
            const disabled = question.type === 'multi' && atMax && !isSelected;
            return (
              <button
                key={option}
                type="button"
                disabled={disabled}
                onClick={() => (question.type === 'multi' ? onToggle(option) : onChange(option))}
                aria-pressed={isSelected}
                className={`flex items-center gap-3 text-left rounded-lg border-2 px-4 py-3 transition-all duration-150 ${
                  isSelected
                    ? 'border-navy bg-navy/5 text-navy'
                    : 'border-neutral-light-gray bg-white text-neutral-dark-gray hover:border-navy-light'
                } ${disabled ? 'opacity-40 cursor-not-allowed hover:border-neutral-light-gray' : ''}`}
              >
                <span
                  className={`flex-shrink-0 flex items-center justify-center h-5 w-5 border-2 ${
                    question.type === 'multi' ? 'rounded' : 'rounded-full'
                  } ${isSelected ? 'border-navy bg-navy text-white' : 'border-neutral-medium-gray/50'}`}
                >
                  {isSelected && <CheckIcon className="h-3.5 w-3.5" />}
                </span>
                <span className="text-sm md:text-base">{option}</span>
              </button>
            );
          })}
        </div>
      )}

      {question.type === 'textarea' && (
        <textarea
          rows={4}
          value={(value as string) ?? ''}
          placeholder={question.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClasses} ${error ? 'border-error' : 'border-neutral-light-gray'}`}
        />
      )}

      {(question.type === 'text' || question.type === 'email' || question.type === 'tel') && (
        <input
          type={question.type}
          value={(value as string) ?? ''}
          placeholder={question.placeholder}
          autoComplete={question.type === 'email' ? 'email' : question.type === 'tel' ? 'tel' : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClasses} ${error ? 'border-error' : 'border-neutral-light-gray'}`}
        />
      )}

      {error && (
        <p className="mt-2 text-sm text-error">
          {question.type === 'email' ? 'Please enter a valid email address.' : 'Please answer this question.'}
        </p>
      )}
    </fieldset>
  );
}

function Results({ answers }: { answers: Answers }) {
  const hours = weeklyHoursMidpoints[answers.weeklyHours as string] ?? 0;
  const low = Math.round(hours * savingsRange.low);
  const high = Math.round(hours * savingsRange.high);
  const focusAreas = (answers.focusAreas as string[]) ?? [];
  const firstName = ((answers.name as string) ?? '').trim().split(' ')[0];

  return (
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Card interactive={false}>
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
            <CheckIcon className="h-7 w-7 text-success" />
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">Thanks{firstName ? `, ${firstName}` : ''}!</h2>
          <p className="text-lg mb-10">
            Here&apos;s a first look at your results. We&apos;ll review your answers and email you a short summary within
            two working days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-xl bg-neutral-bg p-6 text-center">
            <p className="text-sm uppercase tracking-wide mb-2">Estimated time you could reclaim</p>
            <p className="text-4xl font-semibold text-navy">
              {low} - {high} hrs
            </p>
            <p className="text-sm mt-1">per week</p>
          </div>
          <div className="rounded-xl bg-neutral-bg p-6 text-center">
            <p className="text-sm uppercase tracking-wide mb-2">That&apos;s up to</p>
            <p className="text-4xl font-semibold text-navy">{(high * 46).toLocaleString()} hrs</p>
            <p className="text-sm mt-1">per year</p>
          </div>
        </div>

        {focusAreas.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xl mb-4">Your priority areas</h3>
            <ul className="space-y-2">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-brown flex-shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-sm mb-10">
          This is a rough estimate based on businesses that automate 30-60% of their repetitive admin. Your real number
          depends on your processes and tools; that&apos;s what we&apos;d map out on a discovery call.
        </p>

        <div className="text-center">
          <Button href="/discovery-call">Book a Free Discovery Call</Button>
        </div>
      </Card>
    </motion.div>
  );
}
