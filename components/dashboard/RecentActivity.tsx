'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Plus, Edit, Trash } from 'lucide-react';

const activities = [
  {
    id: 1,
    action: 'Completed',
    task: 'Review project proposal',
    time: '2 minutes ago',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    id: 2,
    action: 'Created',
    task: 'Design new homepage',
    time: '1 hour ago',
    icon: Plus,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    id: 3,
    action: 'Updated',
    task: 'Fix navigation bug',
    time: '3 hours ago',
    icon: Edit,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  {
    id: 4,
    action: 'Deleted',
    task: 'Old backup files',
    time: '1 day ago',
    icon: Trash,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
];

export function RecentActivity() {
  return (
    <Card className="bg-white border-0 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-900">
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start space-x-3 group">
                <div className={`p-1.5 rounded-lg ${activity.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-3 h-3 ${activity.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action} task
                  </p>
                  <p className="text-sm text-gray-600 truncate">
                    {activity.task}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-100">
          <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium">
            View all activity
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
