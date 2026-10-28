import React from 'react';
import { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AssessmentForm from '@/components/assessment/AssessmentForm';

export const metadata: Metadata = {
  title: 'Free Business Efficiency Assessment - Symoura',
  description:
    'Answer a few quick questions about your most manual tasks and see how many hours a week automation could give back to your team.',
};

export default function EfficiencyAssessmentPage() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-hero md:text-hero-lg mb-6">Business Efficiency Assessment</h1>
            <p className="text-lg md:text-xl text-neutral-medium-gray leading-relaxed">
              Find out where your team is losing time to manual work, and how much of it automation could give back.
              Takes about 3 minutes.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <AssessmentForm />
        </AnimatedSection>
      </div>
    </section>
  );
}
