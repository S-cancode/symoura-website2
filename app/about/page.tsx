import React from 'react';
import { Metadata } from 'next';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'About - Symoura',
  description: 'Learn about Symoura and our founder. Expert in finance automation and practical problem-solving for UK SMEs.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-hero md:text-hero-lg mb-6">About Symoura</h1>
              <p className="text-lg md:text-xl text-neutral-medium-gray leading-relaxed">
                Custom finance automation for UK SMEs that actually fits how your team works
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <Card>
                <h2 className="mb-6">Why Symoura Exists</h2>
                <div className="space-y-4 text-neutral-medium-gray">
                  <p>
                    Most invoice automation solutions are built for enterprises—complex, expensive, and require months of implementation. Small and mid-sized businesses get left with manual processes that break down as they grow.
                  </p>
                  <p>
                    Symoura fills that gap. We build custom automation workflows tailored to how your finance team actually works, using tools that give you control and transparency.
                  </p>
                  <p className="font-medium text-navy">
                    No bloated software. No vendor lock-in. Just automation that solves your specific pain points.
                  </p>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Approach */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="text-center mb-12">How We&apos;re Different</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection delay={0.1}>
                <Card>
                  <h3 className="text-xl mb-4">Custom, Not Templates</h3>
                  <p className="text-neutral-medium-gray">
                    Every workflow is built from scratch around your process—not forcing you into a pre-built template that doesn&apos;t quite fit.
                  </p>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <Card>
                  <h3 className="text-xl mb-4">Your Systems, Connected</h3>
                  <p className="text-neutral-medium-gray">
                    We integrate with what you already use: Gmail, Xero, QuickBooks, Google Sheets. No platform switching required.
                  </p>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <Card>
                  <h3 className="text-xl mb-4">You Stay in Control</h3>
                  <p className="text-neutral-medium-gray">
                    Built on open-source automation tools, so you own the workflow. Full visibility into how it works, no black box.
                  </p>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-12">The Team</h2>
              <Card>
                <div className="space-y-6 text-neutral-medium-gray">
                  <p>
                    Symoura is built by a team of founders who understand both finance operations and the practical side of automation.
                  </p>
                  <p>
                    After seeing too many businesses struggle with manual invoice processing—not because solutions don&apos;t exist, but because existing solutions are either too complex or too expensive—we decided to build something different.
                  </p>
                  <p>
                    We specialize in workflow automation, AI-powered data extraction, and connecting systems that weren&apos;t designed to talk to each other. The focus is on practical, maintainable solutions that your finance team can actually use.
                  </p>
                  <p className="font-medium text-navy">
                    No sales team, no account managers—just direct work with a team who will build and support your workflow.
                  </p>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-center mb-12">Technical Approach</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.1}>
                <Card>
                <h3 className="mb-4">Custom Workflow Automation</h3>
                <p className="text-neutral-medium-gray mb-4">
                  All workflows are built using modern open-source automation technology. This means:
                </p>
                <ul className="space-y-2 text-sm text-neutral-medium-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-brown mt-0.5">•</span>
                    <span>You own the workflow, no vendor lock-in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brown mt-0.5">•</span>
                    <span>Full transparency into how it works</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brown mt-0.5">•</span>
                    <span>Easy to modify as your process changes</span>
                  </li>
                </ul>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <Card>
                  <h3 className="mb-4">AI Data Extraction</h3>
                <p className="text-neutral-medium-gray mb-4">
                  Modern AI models extract invoice data with high accuracy:
                </p>
                <ul className="space-y-2 text-sm text-neutral-medium-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-brown mt-0.5">•</span>
                    <span>Handles various invoice formats without training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brown mt-0.5">•</span>
                    <span>Learns from corrections to improve over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brown mt-0.5">•</span>
                    <span>Validation rules catch errors before entry</span>
                  </li>
                </ul>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <Card>
                  <h3 className="mb-4">System Integrations</h3>
                <p className="text-neutral-medium-gray mb-4">
                  Connect to your existing tools via APIs:
                </p>
                <ul className="space-y-2 text-sm text-neutral-medium-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-brown mt-0.5">•</span>
                    <span>Email providers (Gmail, Outlook)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brown mt-0.5">•</span>
                    <span>Accounting systems (Xero, QuickBooks, Sage)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brown mt-0.5">•</span>
                    <span>Spreadsheets (Google Sheets, Excel)</span>
                  </li>
                </ul>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <Card>
                  <h3 className="mb-4">Audit & Compliance</h3>
                <p className="text-neutral-medium-gray mb-4">
                  Every workflow includes built-in audit trails:
                </p>
                <ul className="space-y-2 text-sm text-neutral-medium-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-brown mt-0.5">•</span>
                    <span>Timestamped logs of every action</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brown mt-0.5">•</span>
                    <span>Who approved what and when</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brown mt-0.5">•</span>
                    <span>Full history of invoice processing</span>
                  </li>
                </ul>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-center mb-12">Core Principles</h2>
            </AnimatedSection>
            <div className="space-y-6">
              <AnimatedSection delay={0.1}>
                <Card>
                  <h3 className="text-xl mb-3">Transparency</h3>
                  <p className="text-neutral-medium-gray">
                    You should understand how your automation works. No black boxes, no hidden complexity.
                  </p>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <Card>
                  <h3 className="text-xl mb-3">Practical Solutions</h3>
                  <p className="text-neutral-medium-gray">
                    Automation should solve real problems, not create new ones. We build what you need, not what&apos;s trendy.
                  </p>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <Card>
                  <h3 className="text-xl mb-3">Control Stays With You</h3>
                  <p className="text-neutral-medium-gray">
                    Your finance team makes the decisions. Automation handles the repetitive work, but humans stay in charge.
                  </p>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-spacing bg-navy">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6">Get in Touch</h2>
            <p className="text-lg text-neutral-light-gray mb-10 max-w-3xl mx-auto">
              Have questions about how custom automation could work for your team? Let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/discovery-call" variant="outline">
                Book a Discovery Call
              </Button>
              <a
                href="mailto:team@symoura.com"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-navy rounded-lg font-medium transition-all duration-200"
              >
                Email Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
