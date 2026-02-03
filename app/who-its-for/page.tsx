import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Who It's For - Symoura",
  description: 'See if Symoura invoice automation fits your business. Real scenarios from UK SMEs with 10-100 employees.',
};

export default function WhoItsForPage() {
  const useCases = [
    {
      title: 'Growing E-commerce Business',
      companySize: '25 employees',
      invoiceVolume: '100+ invoices/month',
      problem: 'Processing supplier invoices manually was consuming 10+ hours per week. Finance manager spending most of their time on data entry instead of strategic work.',
      painPoints: [
        'Manual data entry from PDF attachments',
        'No standardized approval process',
        'Frequent payment delays due to lost invoices',
        'Month-end reconciliation taking 2-3 days',
      ],
      solution: 'Automated workflow extracts invoice data from emails, validates against purchase orders, routes to department heads for approval, and syncs to Xero.',
      results: [
        '80% reduction in processing time',
        'Zero lost invoices',
        'Month-end reconciliation cut to 4 hours',
        'Finance manager freed up for cashflow planning',
      ],
    },
    {
      title: 'Professional Services Firm',
      companySize: '45 employees',
      invoiceVolume: '75 invoices/month',
      problem: 'Approval bottlenecks causing payment delays. Partners traveling frequently, invoices sitting in email inboxes for weeks.',
      painPoints: [
        'Approval delays causing supplier relationship issues',
        'No visibility into pending approvals',
        'Manual forwarding of invoices between partners',
        'Missing invoices discovered only when suppliers chase payment',
      ],
      solution: 'Smart routing based on project codes and amounts. Escalation rules kick in after 48 hours. Mobile-friendly approval interface.',
      results: [
        'Average approval time reduced from 12 days to 2 days',
        'Real-time visibility into approval pipeline',
        'Supplier complaints eliminated',
        'Early payment discounts now achievable',
      ],
    },
    {
      title: 'Manufacturing SME',
      companySize: '60 employees',
      invoiceVolume: '150+ invoices/month',
      problem: 'Mix of email, paper, and PDF invoices creating data inconsistency. Multiple suppliers, multiple formats, high error rate.',
      painPoints: [
        'Invoices received via email, post, and supplier portals',
        'Different data formats causing entry errors',
        'Duplicate invoice processing',
        'Supplier disputes due to payment errors',
      ],
      solution: 'Unified workflow handles all formats. OCR for scanned documents. Duplicate detection. Three-way matching with purchase orders.',
      results: [
        'Single point of entry for all invoice types',
        'Error rate reduced from 8% to under 2%',
        'Zero duplicate payments in 6 months',
        'Audit trail satisfies compliance requirements',
      ],
    },
    {
      title: 'Tech Startup (Scale-up Phase)',
      companySize: '35 employees',
      invoiceVolume: '50 invoices/month (growing fast)',
      problem: 'Rapid growth breaking manual processes. Founder still approving all invoices despite having finance manager.',
      painPoints: [
        'Founder bottleneck as company scales',
        'No approval delegation structure',
        'Finance manager lacking tools to own AP process',
        'Manual process won\'t scale to 100+ invoices/month',
      ],
      solution: 'Tiered approval rules based on amount thresholds. Finance manager handles <£500, department heads <£2,000, founder only >£2,000.',
      results: [
        'Founder approval workload reduced by 85%',
        'Finance manager empowered to own process',
        'Scalable system ready for growth',
        'Clear audit trail for investor reporting',
      ],
    },
    {
      title: 'Multi-Site Retail Business',
      companySize: '80 employees across 5 locations',
      invoiceVolume: '200+ invoices/month',
      problem: 'Centralized finance team processing invoices from multiple sites. No visibility into which location incurred costs.',
      painPoints: [
        'Site managers forwarding invoices via email',
        'No cost center tracking at invoice level',
        'Finance team chasing site managers for approval',
        'Budget reporting delayed and manual',
      ],
      solution: 'Invoices tagged by site automatically. Site-specific approval workflows. Real-time cost center reporting.',
      results: [
        'Automated cost center allocation',
        'Site managers approve via dashboard',
        'Budget tracking now real-time',
        'Month-end reporting automated',
      ],
    },
    {
      title: 'Construction Company',
      companySize: '50 employees',
      invoiceVolume: '120 invoices/month',
      problem: 'Project-based invoicing requiring matching to specific jobs. Manual allocation error-prone and time-consuming.',
      painPoints: [
        'Invoices must be allocated to project codes',
        'Manual matching of invoices to purchase orders',
        'Project cost tracking always out of date',
        'Client billing delays due to missing invoice data',
      ],
      solution: 'Workflow extracts project codes from invoices. Matches to purchase orders. Updates project cost tracking in real-time.',
      results: [
        'Automated project cost allocation',
        'Real-time project profitability tracking',
        'Faster client billing (invoices no longer waiting for cost data)',
        'Reduced disputes with subcontractors',
      ],
    },
  ];

  const idealProfile = {
    companySize: [
      '10-100 employees',
      'Growth-stage or scaling SME',
      'Multiple departments or locations',
    ],
    invoiceVolume: [
      '50+ invoices per month',
      'Multiple suppliers',
      'Mix of formats (email, PDF, paper)',
    ],
    currentProcess: [
      'Manual data entry into Excel or accounting system',
      'Email-based approval processes',
      'Disconnected systems requiring duplicate entry',
    ],
    painPoints: [
      'Finance team stretched thin',
      'High error rates or reconciliation issues',
      'Approval bottlenecks causing delays',
      'Lack of visibility into invoice status',
      'Manual processes breaking down as company grows',
    ],
  };

  return (
    <>
      <Hero
        headline="Is invoice automation right for your business?"
        subheadline="Common scenarios where UK SMEs struggle with manual invoice processing—and how custom automation can help."
        primaryCTA={{ text: 'Book a Discovery Call', href: '/discovery-call' }}
        secondaryCTA={{ text: 'See How It Works', href: '/how-it-works' }}
      />

      {/* Ideal Profile */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-6">Who We Work With</h2>
              <p className="text-lg text-neutral-medium-gray max-w-3xl mx-auto">
                Symoura is built for UK SMEs where manual invoice processing is consuming too much time
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
                  <p className="text-sm font-semibold text-navy mb-2">Invoice Volume:</p>
                  <ul className="space-y-1">
                    {idealProfile.invoiceVolume.map((item, idx) => (
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
                Examples of businesses that would benefit from automated invoice processing
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
                      {useCase.invoiceVolume}
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
                    <h4 className="font-semibold text-navy mb-3">How We'd Help</h4>
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
      <section className="section-spacing bg-navy">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6">Does This Sound Familiar?</h2>
            <p className="text-lg text-neutral-light-gray mb-10 max-w-3xl mx-auto">
              If your finance team is spending hours each week on manual invoice processing, and your current process is struggling to keep up with growth, let&apos;s talk.
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
