import React from 'react';
import Hero from '@/components/sections/Hero';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/solid';
import {
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  DocumentCurrencyPoundIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  const features = [
    {
      title: 'AI Agents & Chatbots',
      description: 'Custom AI agents that handle customer queries, qualify leads, and automate support - trained on your data and integrated with your tools.',
      icon: ChatBubbleLeftRightIcon,
    },
    {
      title: 'Document Processing',
      description: 'AI extracts, classifies, and routes data from documents, emails, and forms - eliminating manual data entry across your business.',
      icon: DocumentTextIcon,
    },
    {
      title: 'Workflow Automation',
      description: 'End-to-end automation of repetitive business processes, from approvals and notifications to multi-step task orchestration.',
      icon: ArrowPathIcon,
    },
    {
      title: 'Invoice Processing Automation',
      description: 'AI reads incoming invoices, extracts suppliers, amounts, and line items, matches them to purchase orders, and posts them straight into your accounting software - with exceptions flagged for review.',
      icon: DocumentCurrencyPoundIcon,
    },
    {
      title: 'CRM Automation',
      description: 'Automate lead routing, follow-ups, data enrichment, and reporting inside your existing CRM. No platform switching required.',
      icon: UserGroupIcon,
    },
  ];

  const before = [
    'Manual data entry between disconnected systems',
    'Chasing updates across email, Slack, and spreadsheets',
    'Errors discovered days or weeks after they happen',
    'No visibility into process bottlenecks',
    'Hours spent on repetitive, low-value tasks',
  ];

  const after = [
    'AI handles data extraction and transfer automatically',
    'Updates and notifications routed based on your rules',
    'Validation catches errors in real time',
    'Real-time dashboard shows all activity and status',
    'Time returned to strategic, high-value work',
  ];

  const useCases = [
    {
      title: 'Healthcare Provider',
      problem: 'Staff spending 15+ hours per week manually processing patient intake forms and updating records across three systems.',
      solution: 'AI document processing extracts form data and syncs records automatically, cutting processing time by 85%.',
    },
    {
      title: 'E-commerce Company',
      problem: 'Customer support team overwhelmed with repetitive order status and return queries, causing response times to spike.',
      solution: 'AI chatbot handles 70% of routine queries instantly, routing complex issues to the right team member.',
    },
    {
      title: 'Professional Services Firm',
      problem: 'CRM data decaying fast - reps not logging activities, leads slipping through the cracks, pipeline reports unreliable.',
      solution: 'Automated CRM workflows capture activities, enrich lead data, and trigger follow-ups without manual input.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        eyebrow="Custom AI Automation"
        headline={`Smarter Systems. Less Busywork.
Full Control.`}
        highlightWord="Full Control."
        subheadline="Custom AI automation workflows built around your existing systems - without the enterprise price tag."
        primaryCTA={{ text: 'Book a Discovery Call', href: '/discovery-call' }}
        secondaryCTA={{ text: 'See How It Works', href: '/how-it-works' }}
        tertiaryLink={{ text: 'Or take the free 3-minute efficiency assessment', href: '/efficiency-assessment' }}
      />

      {/* Problem Statement */}
      <section className="pb-24">
        <AnimatedSection className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mx-auto mb-10 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="text-2xl md:text-3xl text-navy leading-snug font-medium tracking-tight">
              Your team copies data between systems. You chase updates across tools. You fix errors manually. You spend
              hours on work that should take minutes.
            </p>
            <p className="mt-8 text-3xl md:text-4xl font-semibold text-gold-gradient inline-block">
              This doesn&apos;t scale.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* What We Build */}
      <section className="section-spacing section-band">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="eyebrow">Services</span>
            <h2 className="mt-6 mb-6">What We Build</h2>
            <p className="text-lg text-neutral-medium-gray max-w-3xl mx-auto">
              Custom workflows that automate the repetitive work while keeping your team in control
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection
                  key={feature.title}
                  delay={index * 0.08}
                  className={`lg:col-span-2 ${index === 3 ? 'lg:col-start-2' : ''} ${index === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                >
                  <Card className="h-full">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-pale/70 text-gold-dark ring-1 ring-gold/20 transition-colors duration-300 group-hover/card:bg-navy group-hover/card:text-white group-hover/card:ring-navy">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl mb-3">{feature.title}</h3>
                    <p className="text-neutral-medium-gray">{feature.description}</p>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="section-spacing">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2>The Difference Automation Makes</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <AnimatedSection>
              <Card interactive={false} className="h-full bg-white/60">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-medium-gray mb-6">
                  Before Automation
                </p>
                <ul className="space-y-4">
                  {before.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-medium-gray">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-error/10">
                        <XMarkIcon className="h-3.5 w-3.5 text-error" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <Card className="h-full border-gold/40 shadow-gold">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark mb-6">After Automation</p>
                <ul className="space-y-4">
                  {after.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-navy">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-success/10">
                        <CheckIcon className="h-3.5 w-3.5 text-success" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-spacing section-band">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="eyebrow">Use cases</span>
            <h2 className="mt-6 mb-6">Who This Is For</h2>
            <p className="text-lg text-neutral-medium-gray max-w-3xl mx-auto">
              Real scenarios where manual processes hold businesses back
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={useCase.title} delay={index * 0.12}>
                <Card className="h-full">
                  <h3 className="text-xl mb-6">{useCase.title}</h3>
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-medium-gray mb-2">
                      The Problem
                    </p>
                    <p className="text-[15px] text-neutral-medium-gray">{useCase.problem}</p>
                  </div>
                  <div className="border-t border-neutral-light-gray pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark mb-2">The Solution</p>
                    <p className="text-[15px] text-navy">{useCase.solution}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12" delay={0.4}>
            <Button href="/who-its-for" variant="secondary" arrow>
              See More Use Cases
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing cta-band">
        <span
          aria-hidden="true"
          className="logo-mark pointer-events-none absolute -right-24 top-1/2 h-[140%] aspect-square -translate-y-1/2 text-gold-light opacity-[0.08]"
        />
        <AnimatedSection className="container-custom relative text-center">
          <h2 className="text-white mb-6">Let&apos;s map your automation opportunity</h2>
          <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto">
            30-minute discovery call to understand your process and explore if AI automation makes sense for your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/discovery-call" variant="gold" arrow>
              Book a 30-Minute Discovery Call
            </Button>
            <Button href="/efficiency-assessment" variant="outline">
              Take the Free Assessment
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
