'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Filter, Calendar, Users, BarChart3, Settings } from 'lucide-react';
import { AddTaskDialog } from '@/components/AddTaskDialog';
import Link from 'next/link';

export function QuickActions() {
  const actions = [
    {
      icon: Plus,
      label: 'New Task',
      description: 'Create a new task',
      color: 'from-blue-500 to-purple-600',
      component: 'dialog'
    },
    {
      icon: Calendar,
      label: 'Schedule',
      description: 'View calendar',
      color: 'from-green-500 to-emerald-600',
      href: '/calendar'
    },
    {
      icon: BarChart3,
      label: 'Analytics',
      description: 'View insights',
      color: 'from-orange-500 to-red-600',
      href: '/analytics'
    },
    {
      icon: Users,
      label: 'Team',
      description: 'Manage team',
      color: 'from-purple-500 to-pink-600',
      href: '/team'
    },
    {
      icon: Filter,
      label: 'Filter',
      description: 'Filter tasks',
      color: 'from-teal-500 to-cyan-600',
      action: 'filter'
    },
    {
      icon: Settings,
      label: 'Settings',
      description: 'App settings',
      color: 'from-gray-500 to-slate-600',
      href: '/settings'
    }
  ];  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-base font-semibold text-gray-900">Quick Actions</h3>
            <p className="text-xs text-gray-600">Shortcuts to common tasks</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {actions.map((action, index) => {
            const Icon = action.icon;
            
            if (action.component === 'dialog') {
              return (
                <AddTaskDialog key={action.label}>
                  <Button
                    variant="ghost"
                    className="h-auto p-2 flex flex-col items-center gap-1 hover:bg-gray-50 transition-all duration-200 group card-hover-subtle"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-medium text-gray-900 text-xs">{action.label}</p>
                  </Button>
                </AddTaskDialog>
              );
            }
            
            const ActionButton = (
              <Button
                variant="ghost"
                className="h-auto p-2 flex flex-col items-center gap-1 hover:bg-gray-50 transition-all duration-200 group card-hover-subtle"
                onClick={action.action === 'filter' ? () => console.log('Filter clicked') : undefined}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <p className="font-medium text-gray-900 text-xs">{action.label}</p>
              </Button>
            );
            
            if (action.href) {
              return (
                <Link key={action.label} href={action.href}>
                  {ActionButton}
                </Link>
              );
            }
            
            return <div key={action.label}>{ActionButton}</div>;
          })}
        </div>
      </CardContent>
    </Card>
  );
}
