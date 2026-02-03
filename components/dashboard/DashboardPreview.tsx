import React from 'react';
import Card from '@/components/ui/Card';

export default function DashboardPreview() {
  const statusCards = [
    { title: 'Invoices Processed', value: '142', subtitle: 'This month' },
    { title: 'Time Saved', value: '28h', subtitle: 'Estimated' },
    { title: 'Pending Approval', value: '3', subtitle: 'Requires action' },
    { title: 'Exception Rate', value: '2.1%', subtitle: 'Below target' },
  ];

  const recentActivity = [
    { supplier: 'Acme Supplies Ltd', amount: '£1,250', status: 'Received', time: '2 min ago', statusColor: 'text-navy' },
    { supplier: 'TechCorp Solutions', amount: '£850', status: 'Validated', time: '5 min ago', statusColor: 'text-success' },
    { supplier: 'Office Essentials', amount: '£2,100', status: 'Approved', time: '12 min ago', statusColor: 'text-success' },
    { supplier: 'Cloud Services Inc', amount: '£450', status: 'Synced to Xero', time: '18 min ago', statusColor: 'text-neutral-medium-gray' },
  ];

  const pipelineStages = [
    { name: 'Received', count: 5, color: 'bg-navy' },
    { name: 'Validating', count: 2, color: 'bg-brown' },
    { name: 'Awaiting Approval', count: 3, color: 'bg-warning' },
    { name: 'Approved', count: 8, color: 'bg-success' },
    { name: 'Synced', count: 142, color: 'bg-neutral-medium-gray' },
  ];

  const exceptions = [
    { issue: 'Supplier name doesn\'t match records', invoice: 'INV-2024-0156', action: 'Review' },
    { issue: 'Invoice amount exceeds approval threshold', invoice: 'INV-2024-0157', action: 'Review' },
    { issue: 'Missing purchase order number', invoice: 'INV-2024-0158', action: 'Review' },
  ];

  return (
    <div className="space-y-8">
      {/* Status Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statusCards.map((card, index) => (
          <Card key={index}>
            <div className="text-sm text-neutral-medium-gray mb-2">{card.title}</div>
            <div className="text-3xl font-bold text-navy mb-1">{card.value}</div>
            <div className="text-xs text-neutral-medium-gray">{card.subtitle}</div>
          </Card>
        ))}
      </div>

      {/* Recent Activity Feed */}
      <Card>
        <h3 className="text-xl font-semibold text-navy mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-neutral-light-gray last:border-0">
              <div className="flex-1">
                <div className="font-medium text-navy">{activity.supplier}</div>
                <div className="text-sm text-neutral-medium-gray">{activity.amount}</div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-sm font-medium ${activity.statusColor}`}>{activity.status}</span>
                <span className="text-xs text-neutral-medium-gray">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Processing Pipeline */}
      <Card>
        <h3 className="text-xl font-semibold text-navy mb-6">Processing Pipeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {pipelineStages.map((stage, index) => (
            <div key={index} className="text-center">
              <div className={`${stage.color} text-white rounded-lg py-4 mb-2`}>
                <div className="text-2xl font-bold">{stage.count}</div>
              </div>
              <div className="text-sm text-neutral-medium-gray">{stage.name}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Exception Handling */}
      <Card>
        <h3 className="text-xl font-semibold text-navy mb-6">Flagged Items</h3>
        <div className="space-y-4">
          {exceptions.map((exception, index) => (
            <div key={index} className="flex items-start justify-between py-3 border-b border-neutral-light-gray last:border-0">
              <div className="flex-1">
                <div className="font-medium text-navy mb-1">{exception.issue}</div>
                <div className="text-sm text-neutral-medium-gray">{exception.invoice}</div>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-navy border border-navy rounded-lg hover:bg-navy hover:text-white transition-colors">
                {exception.action}
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
