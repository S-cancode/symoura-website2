import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Who It's For - Symoura",
  description: 'See if Symoura AI automation fits your business. Real scenarios from companies across industries.',
};

export default function WhoItsForPage() {
  const useCases = [
    {
      title: 'Healthcare Provider',
      companySize: '40 employees',
      processVolume: '500+ patient forms/month',
      problem: 'Staff spending 15+ hours per week manually processing patient intake forms, updating EHR systems, and coordinating referrals across departments.',
      painPoints: [
        'Manual transcription of paper and PDF forms into digital records',
        'Referral coordination via email and phone calls',
        'Delayed patient onboarding due to data entry backlog',
        'Compliance documentation assembled manually for audits',
      ],
      solution: 'AI document processing extracts patient data from intake forms automatically. Referral workflows route to the correct department with all required context. Compliance reports generated on schedule.',
      results: [
        '85% reduction in form processing time',
        'Patient onboarding cut from 3 days to same-day',
        'Zero missed referrals in 6 months',
        'Audit-ready compliance documentation generated automatically',
      ],
    },
    {
      title: 'E-commerce Company',
      companySize: '30 employees',
      processVolume: '2,000+ customer interactions/month',
      problem: 'Support team overwhelmed with repetitive order status queries, return requests, and product questions. Average response time exceeding 8 hours.',
      painPoints: [
        'Support agents answering the same questions repeatedly',
        'No after-hours customer support coverage',
        'Complex queries not routed to the right specialist',
        'Customer satisfaction scores declining as volume grows',
      ],
      solution: 'AI chatbot handles routine queries (order status, returns, FAQs) instantly, 24/7. Complex issues routed to the right team member with full context. CRM updated automatically after every interaction.',
      results: [
        '70% of routine queries resolved without human intervention',
        'Average response time reduced from 8 hours to under 2 minutes',
        'Support team freed to handle complex, high-value interactions',
        'Customer satisfaction scores increased by 35%',
      ],
    },
    {
      title: 'Professional Services Firm',
      companySize: '50 employees',
      processVolume: '200+ active client engagements',
      problem: 'CRM data decaying fast. Consultants not logging activities, leads falling through the cracks, pipeline reports unreliable for forecasting.',
      painPoints: [
        'Sales reps not updating CRM after meetings and calls',
        'Lead follow-ups missed or delayed',
        'Pipeline reporting requires manual data gathering',
        'No automated lead scoring or prioritization',
      ],
      solution: 'Automated CRM workflows capture activities from email and calendar. AI scores and prioritizes leads. Follow-up sequences triggered automatically based on engagement signals.',
      results: [
        'CRM data accuracy improved from 40% to 95%',
        'Lead response time cut from 2 days to 30 minutes',
        'Pipeline forecasting now real-time and reliable',
        '25% increase in conversion rate from automated follow-ups',
      ],
    },
    {
      title: 'Logistics Company',
      companySize: '75 employees',
      processVolume: '10,000+ data records/week',
      problem: 'Operations team spending hours each day manually pulling data from carrier systems, warehouse tools, and spreadsheets to build status reports and update dashboards.',
      painPoints: [
        'Data scattered across 6+ disconnected systems',
        'Manual CSV exports and spreadsheet consolidation',
        'Reports always out of date by the time they are compiled',
        'No single source of truth for operational metrics',
      ],
      solution: 'Automated data pipelines pull from all source systems on schedule, transform and normalize the data, and push to a unified dashboard. Alerts trigger when KPIs cross thresholds.',
      results: [
        'Real-time operational dashboard replacing manual reports',
        '15 hours per week freed from manual data compilation',
        'Anomalies detected automatically instead of days later',
        'Single source of truth for all operational metrics',
      ],
    },
    {
      title: 'Legal Practice',
      companySize: '25 employees',
      processVolume: '300+ documents/month',
      problem: 'Paralegals spending most of their time on document intake, classification, and extracting key terms from contracts instead of substantive legal work.',
      painPoints: [
        'Manual review and classification of incoming documents',
        'Key clause extraction done by reading every page',
        'Version control issues across document drafts',
        'Client intake forms processed manually into case management system',
      ],
      solution: 'AI classifies incoming documents and extracts key data points (dates, parties, clauses, amounts). Client intake forms auto-populate the case management system. Document routing based on case type and urgency.',
      results: [
        'Document processing time reduced by 75%',
        'Paralegal time redirected to substantive legal research',
        'Zero missed deadlines from automated date extraction and alerts',
        'Client onboarding time cut in half',
      ],
    },
    {
      title: 'Marketing Agency',
      companySize: '20 employees',
      processVolume: '50+ active client campaigns',
      problem: 'Account managers juggling manual reporting, client onboarding workflows, and campaign status updates across multiple platforms with no central coordination.',
      painPoints: [
        'Weekly client reports assembled manually from 4+ platforms',
        'New client onboarding checklist managed via spreadsheet',
        'Campaign approvals and feedback loops via email chains',
        'No automated alerting when campaign metrics drop',
      ],
      solution: 'Workflow automation orchestrates client onboarding with automated task creation and notifications. Data pipelines aggregate campaign metrics for auto-generated reports. AI monitors performance and alerts the team when action is needed.',
      results: [
        'Client reporting time reduced from 5 hours to 30 minutes per week',
        'Onboarding time cut from 2 weeks to 3 days',
        'Campaign issues flagged automatically, not discovered in weekly reviews',
        'Account managers handle 40% more clients without additional headcount',
      ],
    },
  ];

  const idealProfile = {
    companySize: [
      'Businesses of any size with operational bottlenecks',
      'Growth-stage or scaling companies',
      'Teams with repetitive, high-volume processes',
    ],
    processVolume: [
      'High-volume repetitive tasks (data entry, routing, reporting)',
      'Multiple disconnected tools and systems',
      'Manual handoffs between teams or departments',
    ],
    currentProcess: [
      'Manual data entry between systems',
      'Email-based approvals and task routing',
      'Disconnected tools requiring duplicate work',
    ],
    painPoints: [
      'Teams stretched thin on low-value work',
      'High error rates from manual processes',
      'Bottlenecks slowing down operations',
      'No visibility into process status or performance',
      'Manual processes breaking down as the business grows',
    ],
  };

  return (
    <>
      <Hero
        headline="Is AI automation right for your business?"
        subheadline="Common scenarios where businesses struggle with manual processes - and how custom AI automation solves them."
        primaryCTA={{ text: 'Book a Discovery Call', href: '/discovery-call' }}
        secondaryCTA={{ text: 'See How It Works', href: '/how-it-works' }}
      />

      {/* Ideal Profile */}
      <section className="section-spacing section-band">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-6">Who We Work With</h2>
              <p className="text-lg text-neutral-medium-gray max-w-3xl mx-auto">
                Symoura is built for businesses where manual processes are consuming too much time and holding back growth
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Card>
                <h3 className="mb-4">Company Profile</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-navy mb-2">Company Size:</p>
                  <ul className="space-y-1">
                    {idealProfile.companySize.map((item, idx) => (
                      <li key={idx} className="text-sm text-neutral-medium-gray flex items-start gap-2">
                        <span className="text-brown mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy mb-2">Process Volume:</p>
                  <ul className="space-y-1">
                    {idealProfile.processVolume.map((item, idx) => (
                      <li key={idx} className="text-sm text-neutral-medium-gray flex items-start gap-2">
                        <span className="text-brown mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Card>
                <h3 className="mb-4">Typical Pain Points</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-navy mb-2">Current Process:</p>
                  <ul className="space-y-1">
                    {idealProfile.currentProcess.map((item, idx) => (
                      <li key={idx} className="text-sm text-neutral-medium-gray flex items-start gap-2">
                        <XMarkIcon className="w-4 h-4 text-error mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy mb-2">Common Issues:</p>
                  <ul className="space-y-1">
                    {idealProfile.painPoints.map((item, idx) => (
                      <li key={idx} className="text-sm text-neutral-medium-gray flex items-start gap-2">
                        <XMarkIcon className="w-4 h-4 text-error mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-spacing">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-6">Common Scenarios We Solve</h2>
              <p className="text-lg text-neutral-medium-gray max-w-3xl mx-auto">
                Real examples of businesses that benefit from custom AI automation
              </p>
            </div>
          </AnimatedSection>
          <div className="space-y-12 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card>
                <div className="mb-6">
                  <h3 className="text-2xl mb-3">{useCase.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-neutral-bg text-navy px-3 py-1 rounded-full font-medium">
                      {useCase.companySize}
                    </span>
                    <span className="bg-neutral-bg text-navy px-3 py-1 rounded-full font-medium">
                      {useCase.processVolume}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Common Challenges</h4>
                    <p className="text-neutral-medium-gray mb-4">{useCase.problem}</p>
                    <ul className="space-y-2">
                      {useCase.painPoints.map((point, idx) => (
                        <li key={idx} className="text-sm text-neutral-medium-gray flex items-start gap-2">
                          <XMarkIcon className="w-4 h-4 text-error mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy mb-3">How We&apos;d Help</h4>
                    <p className="text-neutral-medium-gray mb-4">{useCase.solution}</p>
                    <h4 className="font-semibold text-navy mb-3 mt-6">Expected Benefits</h4>
                    <ul className="space-y-2">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-neutral-medium-gray flex items-start gap-2">
                          <CheckIcon className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing cta-band">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6">Does This Sound Familiar?</h2>
            <p className="text-lg text-neutral-light-gray mb-10 max-w-3xl mx-auto">
              If your team is spending hours on manual processes that should be automated, and those processes are struggling to keep up with growth, let&apos;s talk.
            </p>
            <Button href="/discovery-call" variant="outline">
              Get Started
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
