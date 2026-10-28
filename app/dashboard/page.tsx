'use client';

import React from 'react';
import Hero from '@/components/sections/Hero';
import DashboardPreview from '@/components/dashboard/DashboardPreview';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  ClipboardDocumentCheckIcon,
  BellAlertIcon,
  AdjustmentsHorizontalIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export default function DashboardPage() {
  const benefits = [
    {
      title: 'Full Audit Trail',
      description: 'Every action timestamped and logged. See exactly what happened, when, and why.',
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: 'Proactive Alerts',
      description: 'Get notified when tasks need attention or are stuck in the pipeline.',
      icon: BellAlertIcon,
    },
    {
      title: 'Control at Your Fingertips',
      description: 'Override automation decisions when needed. Your team stays in control.',
      icon: AdjustmentsHorizontalIcon,
    },
    {
      title: 'Real-Time Visibility',
      description: 'See the status of every automated process in real-time. No more chasing updates.',
      icon: EyeIcon,
    },
    {
      title: 'Exception Management',
      description: 'Flagged items surface automatically with clear action items for your team.',
      icon: ExclamationTriangleIcon,
    },
    {
      title: 'Performance Metrics',
      description: 'Track time saved, processing volume, and success rates month over month.',
      icon: ChartBarIcon,
    },
  ];

  return (
    <>
      <Hero
        headline="Complete visibility into your automated workflows"
        subheadline="Every client gets access to a real-time dashboard showing exactly what's happening with their automation - no black box, no guesswork."
        primaryCTA={{ text: 'Book a Discovery Call', href: '/discovery-call' }}
        secondaryCTA={{ text: 'Learn How It Works', href: '/how-it-works' }}
      />

      {/* Dashboard Preview */}
      <section className="section-spacing section-band">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-6">Your Control Center</h2>
              <p className="text-lg text-neutral-medium-gray max-w-3xl mx-auto">
                This is what you&apos;ll see every day - a live view of your automated workflows
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <DashboardPreview />
          </AnimatedSection>
        </div>
      </section>

      {/* What This Means */}
      <section className="section-spacing">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-6">What This Means for Your Team</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card>
                    <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-navy" />
                    </div>
                    <h3 className="text-xl mb-3">{benefit.title}</h3>
                    <p className="text-neutral-medium-gray">{benefit.description}</p>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Features Deep Dive */}
      <section className="py-16 section-band">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection>
              <div>
                <h2 className="mb-6">Dashboard Features Explained</h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div>
                <h3 className="text-2xl mb-4">Status Overview</h3>
                <p className="text-neutral-medium-gray mb-4">
                  At-a-glance metrics show you the health of your automation. Track monthly volume, time saved, items needing review, and success rates.
                </p>
                <p className="text-neutral-medium-gray">
                  These numbers update in real-time, so you always know where things stand without digging through emails or spreadsheets.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h3 className="text-2xl mb-4">Recent Activity Feed</h3>
                <p className="text-neutral-medium-gray mb-4">
                  See every task as it moves through the system. Each entry shows the source, type, current status, and how long ago the action occurred.
                </p>
                <p className="text-neutral-medium-gray">
                  This feed acts as your audit trail - click any entry to see full details including what was processed, what decisions were made, and where data was routed.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div>
                <h3 className="text-2xl mb-4">Processing Pipeline</h3>
                <p className="text-neutral-medium-gray mb-4">
                  Visual funnel shows how many items are at each stage: received, processing, awaiting review, completed, and synced.
                </p>
                <p className="text-neutral-medium-gray">
                  Spot bottlenecks immediately - if tasks are piling up at any stage, you know where to focus attention.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div>
                <h3 className="text-2xl mb-4">Exception Handling</h3>
                <p className="text-neutral-medium-gray mb-4">
                  Items that require human review surface automatically with clear explanations: confidence score below threshold, data format mismatch, missing required field, etc.
                </p>
                <p className="text-neutral-medium-gray">
                  Each exception includes a &quot;Review&quot; button that takes you to the item details where you can approve, adjust, or update the automation rules.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Transparency Promise */}
      <section className="section-spacing">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <Card>
                <h2 className="mb-6">No Black Box</h2>
                <div className="space-y-4 text-neutral-medium-gray">
                  <p>
                    Unlike opaque automation platforms, you can see exactly how your workflows operate. The dashboard isn&apos;t just reporting - it&apos;s the control interface.
                  </p>
                  <p>
                    Want to see why an item was flagged? Click it and see the rule that triggered. Need to override an automation decision? You can do it directly from the dashboard.
                  </p>
                  <p className="font-medium text-navy">
                    Your team stays in control. The automation handles the repetitive work, but you make the decisions.
                  </p>
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
            <h2 className="text-white mb-6">See This for Your Workflows</h2>
            <p className="text-lg text-neutral-light-gray mb-10 max-w-3xl mx-auto">
              Book a discovery call to map your current workflow and see how a custom dashboard would work for your team.
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
