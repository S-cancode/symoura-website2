import React from 'react';
import Hero from '@/components/sections/Hero';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const features = [
    {
      title: 'Automated Data Extraction',
      description: 'AI extracts invoice data (supplier, amount, line items) with high accuracy, eliminating manual entry.',
    },
    {
      title: 'Smart Approval Routing',
      description: 'Invoices automatically routed to the right approvers based on your custom rules and thresholds.',
    },
    {
      title: 'System Integration',
      description: 'Direct integration with Xero, QuickBooks, or your existing accounting system.',
    },
    {
      title: 'Audit-Ready Trails',
      description: 'Every transaction logged with timestamps and full visibility into the processing pipeline.',
    },
  ];

  const useCases = [
    {
      title: 'Growing E-commerce Business',
      problem: 'Processing 100+ supplier invoices monthly, team spending 10+ hours on manual data entry.',
      solution: 'Automated extraction and routing reduced processing time by 80%.',
    },
    {
      title: 'Professional Services Firm',
      problem: 'Approval bottlenecks causing payment delays and supplier relationship issues.',
      solution: 'Smart routing based on project codes and amounts eliminated delays.',
    },
    {
      title: 'Manufacturing SME',
      problem: 'Mix of email, paper, and PDF invoices creating data inconsistency and errors.',
      solution: 'Unified workflow handles all formats with validation rules catching errors before entry.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        headline={`Faster\u00A0Finance.\u00A0Fewer\u00A0Errors.
Full Control.`}
        highlightWord="Full Control."
        subheadline="Custom automation workflows for SMEs—built around your existing systems, without the enterprise price tag."
        primaryCTA={{ text: 'Book a Discovery Call', href: '/discovery-call' }}
        secondaryCTA={{ text: 'See How It Works', href: '/how-it-works' }}
      />

      {/* Problem Statement */}
      <section className="py-16 bg-neutral-bg">
        <AnimatedSection className="container-custom max-w-4xl mx-auto">
          <Card>
            <div className="text-center">
              <p className="text-xl text-navy leading-relaxed mb-4">
                Your invoices arrive by email. You copy data into spreadsheets. You chase approvals. You fix errors during month-end.
              </p>
              <p className="text-2xl font-semibold text-brown">
                This doesn&apos;t scale.
              </p>
            </div>
          </Card>
        </AnimatedSection>
      </section>

      {/* What We Build */}
      <section className="section-spacing">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="mb-6">What We Build</h2>
            <p className="text-lg text-neutral-medium-gray max-w-3xl mx-auto">
              Custom workflows that automate the repetitive work while keeping your team in control
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card>
                  <h3 className="mb-3">{feature.title}</h3>
                  <p className="text-neutral-medium-gray">{feature.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-16 bg-neutral-bg">
        <div className="container-custom">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="mb-6 text-error">Before Automation</h3>
              <ul className="space-y-3 text-neutral-medium-gray">
                <li className="flex items-center gap-3">
                  <XMarkIcon className="w-5 h-5 text-error flex-shrink-0" />
                  <span>Manual data entry from email attachments</span>
                </li>
                <li className="flex items-center gap-3">
                  <XMarkIcon className="w-5 h-5 text-error flex-shrink-0" />
                  <span>Chasing approvals via email threads</span>
                </li>
                <li className="flex items-center gap-3">
                  <XMarkIcon className="w-5 h-5 text-error flex-shrink-0" />
                  <span>Reconciliation errors discovered at month-end</span>
                </li>
                <li className="flex items-center gap-3">
                  <XMarkIcon className="w-5 h-5 text-error flex-shrink-0" />
                  <span>No visibility into processing status</span>
                </li>
                <li className="flex items-center gap-3">
                  <XMarkIcon className="w-5 h-5 text-error flex-shrink-0" />
                  <span>Hours spent on repetitive tasks</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-success">After Automation</h3>
              <ul className="space-y-3 text-neutral-medium-gray">
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
                  <span>AI extracts data automatically</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Approvals routed based on your rules</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Validation catches errors immediately</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Real-time dashboard shows all activity</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Time returned to strategic work</span>
                </li>
              </ul>
            </div>
          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-spacing">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="mb-6">Who This Is For</h2>
            <p className="text-lg text-neutral-medium-gray max-w-3xl mx-auto">
              Real scenarios where manual invoice processing breaks down
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <Card>
                  <h3 className="text-xl mb-4">{useCase.title}</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-navy mb-2">The Problem:</p>
                    <p className="text-sm text-neutral-medium-gray">{useCase.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-2">The Solution:</p>
                    <p className="text-sm text-neutral-medium-gray">{useCase.solution}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12" delay={0.5}>
            <Button href="/who-its-for" variant="secondary">
              See More Use Cases
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-navy">
        <AnimatedSection className="container-custom text-center">
          <h2 className="text-white mb-6">Let&apos;s map your invoice workflow</h2>
          <p className="text-lg text-neutral-light-gray mb-10 max-w-3xl mx-auto">
            30-minute discovery call to understand your process and explore if automation makes sense for your team.
          </p>
          <Button href="/discovery-call" variant="outline">
            Book a 30-Minute Discovery Call
          </Button>
        </AnimatedSection>
      </section>
    </>
  );
}
