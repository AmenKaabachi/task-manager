'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TaskCard } from '@/components/TaskCard';
import { useTasks } from '@/contexts/TaskContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus } from 'lucide-react';
import Link from 'next/link';

export function TaskOverview() {
  const { tasks } = useTasks();
  
  const recentTasks = tasks.slice(0, 3);
  const urgentTasks = tasks.filter(task => 
    !task.completed && 
    task.priority === 'high' &&
    task.dueDate && 
    new Date(task.dueDate) <= new Date(Date.now() + 24 * 60 * 60 * 1000)
  );

  return (    <div className="space-y-4">
      {/* Recent Tasks */}
      <Card className="bg-white border-0 shadow-lg">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-900">
              Recent Tasks
            </CardTitle>
            <Link href="/tasks">
              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                View all
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {recentTasks.length > 0 ? (
            recentTasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))
          ) : (
            <div className="text-center py-6">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                <Plus className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-gray-500 mb-3 text-sm">No tasks yet. Create your first task!</p>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Create Task
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Urgent Tasks */}
      {urgentTasks.length > 0 && (
        <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-red-800 flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" />
              Urgent Tasks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {urgentTasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
