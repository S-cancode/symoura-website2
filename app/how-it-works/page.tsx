import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import WorkflowDiagram from '@/components/sections/WorkflowDiagram';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { CheckIcon } from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: 'How It Works - Symoura',
  description: 'Learn how Symoura automates invoice processing from email to accounting system with custom workflows.',
};

export default function HowItWorksPage() {
  const implementationSteps = [
    {
      number: '01',
      title: 'Discovery Call',
      duration: '30 minutes',
      description: 'We map your current invoice flow, identify bottlenecks and requirements, and confirm integration points with your existing systems.',
      deliverables: ['Process map of current workflow', 'List of integration requirements', 'Initial automation scope'],
    },
    {
      number: '02',
      title: 'Workflow Design',
      duration: '1 week',
      description: 'Custom workflow that connects your email, spreadsheets, and accounting system. Approval logic tailored to your org structure.',
      deliverables: ['Custom-built workflow', 'Integration setup', 'Approval rules configuration'],
    },
    {
      number: '03',
      title: 'Testing & Handoff',
      duration: '1 week',
      description: 'Run test invoices through the system, train your team on monitoring and exceptions, and deploy to production.',
      deliverables: ['Tested workflow', 'Team training session', 'Documentation and guides'],
    },
    {
      number: '04',
      title: 'Ongoing Support',
      duration: 'Optional',
      description: 'Adjust rules as your process evolves, add integrations or new approval steps, and monthly check-ins.',
      deliverables: ['Rule adjustments', 'New integrations', 'Performance monitoring'],
    },
  ];

  const deliverables = [
    'Custom-built workflow (not a template)',
    'Full documentation of the process',
    'Access to your workflow dashboard',
    'Support during rollout',
    'Training for your team',
  ];

  return (
    <>
      <Hero
        headline="From invoice email to accounting system—automatically"
        subheadline="See exactly how we build custom automation workflows that fit your finance team's process."
        primaryCTA={{ text: 'Book a Discovery Call', href: '/discovery-call' }}
        secondaryCTA={{ text: 'View Dashboard', href: '/dashboard' }}
      />

      {/* Workflow Diagram */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-6">The Automated Process</h2>
              <p className="text-lg text-neutral-medium-gray max-w-3xl mx-auto">
                Every invoice flows through the same reliable, transparent process
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <WorkflowDiagram />
          </AnimatedSection>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="section-spacing">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-6">What Working with Symoura Looks Like</h2>
              <p className="text-lg text-neutral-medium-gray max-w-3xl mx-auto">
                From discovery to deployment in 2-3 weeks
              </p>
            </div>
          </AnimatedSection>
          <div className="space-y-8 max-w-4xl mx-auto">
            {implementationSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-navy text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl">{step.title}</h3>
                        <span className="text-sm text-brown font-medium bg-neutral-bg px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-neutral-medium-gray mb-4">{step.description}</p>
                      <div>
                        <p className="text-sm font-semibold text-navy mb-2">Deliverables:</p>
                        <ul className="space-y-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="text-sm text-neutral-medium-gray flex items-start gap-2">
                              <CheckIcon className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-center mb-12">What You Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-success text-white rounded-full flex items-center justify-center">
                      <CheckIcon className="w-4 h-4" />
                    </div>
                    <p className="text-neutral-medium-gray">{deliverable}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technical Details */}
      <section className="section-spacing">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <Card>
                <h2 className="mb-6">Built on Proven Technology</h2>
                <div className="space-y-6 text-neutral-medium-gray">
                  <div>
                    <h3 className="text-xl text-navy mb-3">Custom Workflow Platform</h3>
                    <p className="mb-2">
                      All workflows are built using modern automation technology that gives you:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <span className="text-navy mt-1">•</span>
                        <span>Full control over your workflow—no vendor lock-in</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-navy mt-1">•</span>
                        <span>Easy modifications as your process changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-navy mt-1">•</span>
                        <span>Transparent processing—you can see exactly what happens at each step</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl text-navy mb-3">AI Data Extraction</h3>
                    <p>
                      Modern AI models extract invoice data with high accuracy, handling various formats and layouts without training.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-navy mb-3">System Integrations</h3>
                    <p>
                      Connect to your existing tools via APIs: Gmail, Xero, QuickBooks, Google Sheets, and more. No platform switching required.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-navy">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6">Ready to Automate Your Invoices?</h2>
            <p className="text-lg text-neutral-light-gray mb-10 max-w-3xl mx-auto">
              Book a discovery call to map your current process and see if automation is right for your team.
            </p>
            <Button href="/discovery-call" variant="outline">
              Book a Discovery Call
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
