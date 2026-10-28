// Business efficiency assessment - edit questions and options here.

export type QuestionType = 'single' | 'multi' | 'text' | 'email' | 'tel' | 'textarea';

export interface Question {
  id: string;
  label: string;
  help?: string;
  type: QuestionType;
  options?: string[];
  maxSelections?: number;
  required?: boolean;
  placeholder?: string;
}

export interface Step {
  title: string;
  description: string;
  questions: Question[];
}

export const steps: Step[] = [
  {
    title: 'About your business',
    description: 'A little context so we can compare you with similar businesses.',
    questions: [
      {
        id: 'industry',
        label: 'Which industry best describes your business?',
        type: 'single',
        required: true,
        options: [
          'Professional services (legal, accounting, consulting)',
          'E-commerce & retail',
          'Real estate & property',
          'Healthcare & wellness',
          'Construction & trades',
          'Marketing & creative agency',
          'Hospitality & events',
          'Other',
        ],
      },
      {
        id: 'teamSize',
        label: 'How many people work in the business?',
        type: 'single',
        required: true,
        options: ['Just me', '2-10', '11-50', '51-200', '200+'],
      },
    ],
  },
  {
    title: 'Where your time goes',
    description: 'Tell us about the repetitive work that eats into your week.',
    questions: [
      {
        id: 'manualTasks',
        label: 'Which of these tasks are still mostly done by hand?',
        help: 'Select all that apply.',
        type: 'multi',
        required: true,
        options: [
          'Copying data between systems or spreadsheets',
          'Managing the inbox & replying to routine emails',
          'Invoicing, payments & chasing late payers',
          'Scheduling appointments & meetings',
          'Building reports & dashboards',
          'Following up with leads & updating the CRM',
          'Answering repetitive customer questions',
          'Processing documents (forms, contracts, receipts)',
          'Onboarding new clients or staff',
          'Posting social media & content',
        ],
      },
      {
        id: 'weeklyHours',
        label: 'Roughly how many hours per week does your team spend on repetitive admin?',
        help: 'Across everyone, a rough guess is fine.',
        type: 'single',
        required: true,
        options: ['Under 5 hours', '5-10 hours', '10-20 hours', '20-40 hours', '40+ hours'],
      },
      {
        id: 'mostFrustrating',
        label: 'What is the single most frustrating manual task in your business?',
        help: 'Describe it in a sentence or two: what happens, who does it, how often.',
        type: 'textarea',
        required: true,
        placeholder: 'e.g. Every Monday our office manager copies new orders from email into a spreadsheet, then re-types them into Xero…',
      },
    ],
  },
  {
    title: 'Your priorities',
    description: 'Where would saving time make the biggest difference?',
    questions: [
      {
        id: 'focusAreas',
        label: 'Which areas would you most like to save time in?',
        help: 'Pick up to 3.',
        type: 'multi',
        maxSelections: 3,
        required: true,
        options: [
          'Sales & lead management',
          'Customer service & support',
          'Finance & bookkeeping',
          'Operations & fulfilment',
          'Marketing & content',
          'HR & recruitment',
          'Reporting & analytics',
        ],
      },
      {
        id: 'costOfManualWork',
        label: 'What is manual work costing you today?',
        help: 'Select all that apply.',
        type: 'multi',
        required: true,
        options: [
          'Mistakes & re-work',
          'Slow response times to customers',
          'Missed or forgotten leads',
          'Staff stress or burnout',
          'Can’t grow without hiring more people',
          'Owner stuck doing admin instead of growing the business',
        ],
      },
      {
        id: 'timeBackUse',
        label: 'If you got 10 hours a week back, what would you do with it?',
        type: 'single',
        required: true,
        options: [
          'Win more customers',
          'Improve service for existing customers',
          'Work on strategy & new products',
          'Avoid hiring extra staff',
          'Get my evenings & weekends back',
        ],
      },
    ],
  },
  {
    title: 'Tools & timing',
    description: 'We build around the systems you already use.',
    questions: [
      {
        id: 'tools',
        label: 'Which tools does your business rely on?',
        help: 'Select all that apply.',
        type: 'multi',
        required: false,
        options: [
          'Google Workspace',
          'Microsoft 365 / Outlook',
          'Xero / QuickBooks / Sage',
          'HubSpot / Salesforce / Pipedrive',
          'Shopify / WooCommerce',
          'Slack / Teams',
          'Mostly spreadsheets',
          'Industry-specific software',
        ],
      },
      {
        id: 'timeline',
        label: 'How soon are you looking to make changes?',
        type: 'single',
        required: true,
        options: ['As soon as possible', 'In the next 1-3 months', 'In the next 3-6 months', 'Just exploring for now'],
      },
    ],
  },
  {
    title: 'Where should we send your results?',
    description: 'We’ll review your answers and send a short summary of where automation could help most.',
    questions: [
      { id: 'name', label: 'Your name', type: 'text', required: true, placeholder: 'Jane Smith' },
      { id: 'email', label: 'Work email', type: 'email', required: true, placeholder: 'jane@company.com' },
      { id: 'company', label: 'Company name', type: 'text', required: true, placeholder: 'Acme Ltd' },
      { id: 'phone', label: 'Phone (optional)', type: 'tel', required: false },
    ],
  },
];

// Midpoint hours for each weeklyHours option, used for the rough savings estimate.
export const weeklyHoursMidpoints: Record<string, number> = {
  'Under 5 hours': 3,
  '5-10 hours': 7.5,
  '10-20 hours': 15,
  '20-40 hours': 30,
  '40+ hours': 50,
};

// Conservative share of repetitive admin that automation typically removes.
export const savingsRange = { low: 0.3, high: 0.6 };
