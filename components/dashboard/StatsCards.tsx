'use client';

import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { useTasks } from '@/contexts/TaskContext';
import { memo, useMemo } from 'react';

function StatsCardsComponent() {
  const { tasks } = useTasks();
  
  const stats = useMemo(() => {
    const completedTasks = tasks.filter(task => task.completed);
    const pendingTasks = tasks.filter(task => !task.completed);
    const completionRate = tasks.length > 0 ? Math.round((completedTasks.length / tasks.length) * 100) : 0;

    return [
      {
        title: 'Total Tasks',
        value: tasks.length.toString(),
        change: '+12%',
        trend: 'up' as const,
        icon: CheckCircle,
        gradient: 'from-blue-500 to-blue-600',
        bgGradient: 'from-blue-50 to-blue-100',
      },
      {
        title: 'Completed',
        value: completedTasks.length.toString(),
        change: '+8%',
        trend: 'up' as const,
        icon: CheckCircle,
        gradient: 'from-green-500 to-green-600',
        bgGradient: 'from-green-50 to-green-100',
      },
      {
        title: 'In Progress',
        value: pendingTasks.length.toString(),
        change: '-5%',
        trend: 'down' as const,
        icon: Clock,
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-50 to-red-100',
      },
      {
        title: 'Productivity',
        value: `${completionRate}%`,
        change: '+3%',
        trend: 'up' as const,
        icon: TrendingUp,
        gradient: 'from-purple-500 to-purple-600',
        bgGradient: 'from-purple-50 to-purple-100',
      },
    ];
  }, [tasks]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card 
            key={stat.title} 
            className={`
              group bg-gradient-to-br ${stat.bgGradient} 
              shadow-lg border-0
              transition-all duration-200 ease-out
              hover:scale-102 hover:-translate-y-1
              cursor-pointer
            `}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <div className="flex items-center space-x-1">
                    <div className={`
                      flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-semibold
                      ${stat.trend === 'up' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                      }
                    `}>
                      <TrendingUp className={`w-3 h-3 ${
                        stat.trend === 'up' ? 'text-green-600' : 'text-red-600 rotate-180'
                      }`} />
                      <span>{stat.change}</span>
                    </div>
                  </div>
                </div>
                
                <div className={`
                  p-2.5 rounded-xl bg-gradient-to-br ${stat.gradient} 
                  shadow-lg transition-transform duration-200
                  group-hover:scale-110
                `}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export const StatsCards = memo(StatsCardsComponent);
