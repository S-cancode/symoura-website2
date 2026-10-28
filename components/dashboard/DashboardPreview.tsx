import React from 'react';
import Card from '@/components/ui/Card';

export default function DashboardPreview() {
  const statusCards = [
    { title: 'Tasks Processed', value: '1,247', subtitle: 'This month' },
    { title: 'Time Saved', value: '62h', subtitle: 'Estimated' },
    { title: 'Awaiting Review', value: '5', subtitle: 'Requires action' },
    { title: 'Success Rate', value: '97.8%', subtitle: 'Above target' },
  ];

  const recentActivity = [
    { source: 'Support Chatbot', detail: 'Order status query resolved', status: 'Completed', time: '2 min ago', statusColor: 'text-success' },
    { source: 'Document Processing', detail: 'Contract #4821 extracted', status: 'Processing', time: '5 min ago', statusColor: 'text-navy' },
    { source: 'CRM Automation', detail: 'Lead score updated - Acme Corp', status: 'Completed', time: '12 min ago', statusColor: 'text-success' },
    { source: 'Data Pipeline', detail: 'Daily warehouse sync complete', status: 'Synced', time: '18 min ago', statusColor: 'text-neutral-medium-gray' },
  ];

  const pipelineStages = [
    { name: 'Received', count: 12, color: 'bg-navy' },
    { name: 'Processing', count: 5, color: 'bg-brown' },
    { name: 'Awaiting Review', count: 5, color: 'bg-warning' },
    { name: 'Completed', count: 83, color: 'bg-success' },
    { name: 'Synced', count: 1247, color: 'bg-neutral-medium-gray' },
  ];

  const exceptions = [
    { issue: 'Low confidence score on extracted field', item: 'DOC-2024-0892', action: 'Review' },
    { issue: 'CRM record merge conflict detected', item: 'CRM-2024-0341', action: 'Review' },
    { issue: 'Data pipeline source timeout - retry scheduled', item: 'PIPE-2024-0156', action: 'Review' },
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
                <div className="font-medium text-navy">{activity.source}</div>
                <div className="text-sm text-neutral-medium-gray">{activity.detail}</div>
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
                <div className="text-sm text-neutral-medium-gray">{exception.item}</div>
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
