import React from 'react';
import { Metadata } from 'next';
import Card from '@/components/ui/Card';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Book Discovery Call - Symoura',
  description: '30-minute conversation to map your invoice workflow and explore if automation makes sense for your team.',
};

export default function DiscoveryCallPage() {
  const whatToExpect = [
    {
      title: 'Map Your Current Process',
      description: 'Walk through how invoices flow through your organization today—from receipt to payment.',
    },
    {
      title: 'Identify Pain Points',
      description: 'Pinpoint where the manual work creates bottlenecks, errors, or consumes too much time.',
    },
    {
      title: 'Explore Integration Points',
      description: 'Discuss your existing systems (email, accounting software, spreadsheets) and how they could connect.',
    },
    {
      title: 'Assess Fit',
      description: 'Determine if custom automation makes sense for your volume, team size, and budget.',
    },
  ];

  const whoShouldAttend = [
    {
      role: 'Finance Manager',
      why: 'Day-to-day owner of invoice processing, understands current pain points',
    },
    {
      role: 'Financial Controller',
      why: 'Oversees finance operations, can evaluate process improvements',
    },
    {
      role: 'CFO / Finance Director',
      why: 'Budget holder, strategic decision maker on finance tooling',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-hero md:text-hero-lg mb-6">Book a Discovery Call</h1>
              <p className="text-lg md:text-xl text-neutral-medium-gray leading-relaxed">
                30-minute conversation to map your current invoice workflow and explore if automation makes sense for your team.
              </p>
            </div>
          </AnimatedSection>

          {/* Email Contact */}
          <AnimatedSection delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Card>
                <div className="text-center py-12">
                  <h2 className="mb-4">Get in Touch</h2>
                  <p className="text-neutral-medium-gray mb-8">
                    Email us to schedule a 30-minute discovery call. We&apos;ll discuss your invoice workflow and explore how automation could help your team.
                  </p>
                  <a
                    href="mailto:team@symoura.com?subject=Discovery Call Request&body=Hi, I'd like to schedule a discovery call to discuss invoice automation.%0D%0A%0D%0ACompany:%0D%0AMonthly invoice volume:%0D%0APreferred time:%0D%0A"
                    className="inline-flex items-center justify-center px-8 py-3 bg-navy text-white rounded-lg font-medium hover:bg-navy-dark transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Email Us to Schedule
                  </a>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-center mb-12">What to Expect on the Call</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whatToExpect.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{item.title}</h3>
                      <p className="text-neutral-medium-gray">{item.description}</p>
                    </div>
                  </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-center mb-12">Who Should Attend?</h2>
            </AnimatedSection>
            <div className="space-y-6">
              {whoShouldAttend.map((person, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-1/3">
                      <h3 className="text-xl text-navy">{person.role}</h3>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-neutral-medium-gray">{person.why}</p>
                    </div>
                  </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={0.4}>
              <div className="mt-8 text-center">
                <p className="text-neutral-medium-gray">
                  Ideally, bring 1-2 people who understand your current invoice process and can make decisions about automation investments.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* No Pressure Promise */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <Card>
              <h2 className="text-center mb-6">No Sales Pressure</h2>
              <div className="space-y-4 text-neutral-medium-gray text-center">
                <p>
                  This call is about understanding your process and seeing if automation is a good fit. If it&apos;s not, I&apos;ll tell you.
                </p>
                <p>
                  You&apos;ll walk away with a clear picture of what custom automation could look like for your team—whether you work with Symoura or not.
                </p>
              </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-center mb-12">How to Prepare</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Card>
              <div className="space-y-6 text-neutral-medium-gray">
                <div>
                  <h3 className="text-xl text-navy mb-3">Before the Call</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-brown mt-1">•</span>
                      <span>Estimate your monthly invoice volume (rough number is fine)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brown mt-1">•</span>
                      <span>Think about where invoices get stuck in your current process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brown mt-1">•</span>
                      <span>Note what accounting system you use (Xero, QuickBooks, Sage, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brown mt-1">•</span>
                      <span>Consider who currently approves invoices and at what thresholds</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl text-navy mb-3">Don&apos;t Worry About</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-brown mt-1">•</span>
                      <span>Having exact numbers or documentation ready</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brown mt-1">•</span>
                      <span>Understanding technical requirements—we&apos;ll figure that out together</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brown mt-1">•</span>
                      <span>Having a budget decided—we&apos;ll discuss pricing after understanding your needs</span>
                    </li>
                  </ul>
                </div>
              </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
