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
  description: 'Learn how Symoura builds custom AI automation workflows - from discovery to deployment in 2-3 weeks.',
};

export default function HowItWorksPage() {
  const implementationSteps = [
    {
      number: '01',
      title: 'Discovery Call',
      duration: '30 minutes',
      description: 'We map your current workflows, identify bottlenecks and repetitive tasks, and confirm integration points with your existing systems.',
      deliverables: ['Process map of current workflow', 'List of integration requirements', 'Initial automation scope'],
    },
    {
      number: '02',
      title: 'Solution Design',
      duration: '1 week',
      description: 'Custom automation workflow connecting your tools and systems. AI logic, routing rules, and integration architecture tailored to your operations.',
      deliverables: ['Custom-built automation workflow', 'Integration setup', 'Business rules configuration'],
    },
    {
      number: '03',
      title: 'Testing & Handoff',
      duration: '1 week',
      description: 'Run real data through the system, train your team on monitoring and exception handling, and deploy to production.',
      deliverables: ['Tested workflow', 'Team training session', 'Documentation and guides'],
    },
    {
      number: '04',
      title: 'Ongoing Support',
      duration: 'Optional',
      description: 'Adjust rules as your process evolves, add new integrations or automation steps, and monthly performance check-ins.',
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
        headline="From manual process to automated workflow - seamlessly"
        subheadline="See exactly how we build custom AI automation solutions that fit your team's process."
        primaryCTA={{ text: 'Book a Discovery Call', href: '/discovery-call' }}
        secondaryCTA={{ text: 'View Dashboard', href: '/dashboard' }}
      />

      {/* Workflow Diagram */}
      <section className="section-spacing section-band">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-6">The Automated Process</h2>
              <p className="text-lg text-neutral-medium-gray max-w-3xl mx-auto">
                Every task flows through the same reliable, transparent process
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
      <section className="py-16 section-band">
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
                        <span>Full control over your workflow - no vendor lock-in</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-navy mt-1">•</span>
                        <span>Easy modifications as your process changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-navy mt-1">•</span>
                        <span>Transparent processing - you can see exactly what happens at each step</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl text-navy mb-3">AI-Powered Intelligence</h3>
                    <p>
                      Modern AI models handle data extraction, classification, natural language understanding, and decision-making - adapting to your specific use case without extensive training.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-navy mb-3">System Integrations</h3>
                    <p>
                      Connect to your existing tools via APIs: CRMs, email, databases, spreadsheets, Slack, and more. No platform switching required.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing cta-band">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6">Ready to Automate Your Workflows?</h2>
            <p className="text-lg text-neutral-light-gray mb-10 max-w-3xl mx-auto">
              Book a discovery call to map your current process and see if AI automation is right for your team.
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
