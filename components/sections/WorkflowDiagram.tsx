'use client';

import React from 'react';
import {
  EnvelopeIcon,
  CpuChipIcon,
  CheckCircleIcon,
  UserCircleIcon,
  ServerIcon,
  BellAlertIcon,
  ArrowRightIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';

export default function WorkflowDiagram() {
  const steps = [
    {
      title: 'Task Received',
      description: 'Data arrives via API, email, or webhook',
      icon: EnvelopeIcon,
    },
    {
      title: 'AI Processes',
      description: 'Extraction, classification, or decision-making',
      icon: CpuChipIcon,
    },
    {
      title: 'Validation',
      description: 'Rules check for accuracy and completeness',
      icon: CheckCircleIcon,
    },
    {
      title: 'Notification',
      description: 'Team alerted on completion or exceptions',
      icon: BellAlertIcon,
    },
    {
      title: 'System Sync',
      description: 'Data pushed to your connected tools',
      icon: ServerIcon,
    },
    {
      title: 'Human Review',
      description: 'Exceptions routed for team decision',
      icon: UserCircleIcon,
    },
  ];

  return (
    <div className="bg-white/90 rounded-2xl p-8 md:p-12 border border-neutral-light-gray/80 shadow-soft">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div key={index} className="relative">
              <div className="group flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gold-pale/70 ring-1 ring-gold/20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-navy group-hover:ring-navy group-hover:scale-105">
                  <IconComponent className="w-8 h-8 text-navy transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-medium-gray">{step.description}</p>
              </div>
              {/* Right arrows for first row (0→1, 1→2) */}
              {(index === 0 || index === 1) && (
                <div className="hidden lg:flex absolute top-8 left-full items-center justify-center w-10 -ml-5">
                  <ArrowRightIcon className="w-8 h-8 text-gold animate-nudge-x" />
                </div>
              )}
              {/* Down arrow from Validation to Approval (2→5) */}
              {index === 2 && (
                <div className="hidden lg:flex absolute top-full left-1/2 items-center justify-center w-10 h-10 -ml-5 mt-4">
                  <ArrowDownIcon className="w-8 h-8 text-gold animate-nudge-y" />
                </div>
              )}
              {/* Left arrows for second row (5→4, 4→3) */}
              {(index === 5 || index === 4) && (
                <div className="hidden lg:flex absolute top-8 right-full items-center justify-center w-10 -mr-5">
                  <ArrowLeftIcon className="w-8 h-8 text-gold animate-nudge-x [animation-direction:reverse]" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
