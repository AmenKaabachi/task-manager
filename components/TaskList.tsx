'use client';

import { useTasks } from '@/contexts/TaskContext';
import { TaskCard } from './TaskCard';
import { AddTaskDialog } from './AddTaskDialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Circle, Clock, TrendingUp } from 'lucide-react';

export function TaskList() {
  const { tasks } = useTasks();
  
  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);
  const todayTasks = tasks.filter(task => {
    if (!task.dueDate) return false;
    const today = new Date().toDateString();
    return new Date(task.dueDate).toDateString() === today;
  });

  const completionRate = tasks.length > 0 ? Math.round((completedTasks.length / tasks.length) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Pending Tasks */}
        <Card className="card-hover border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50 to-blue-100/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600 mb-1">Pending Tasks</p>
                <p className="text-3xl font-bold text-blue-700">{pendingTasks.length}</p>
              </div>
              <div className="bg-blue-500 p-3 rounded-full">
                <Circle className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Completed Tasks */}
        <Card className="card-hover border-l-4 border-l-green-500 bg-gradient-to-br from-green-50 to-green-100/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 mb-1">Completed</p>
                <p className="text-3xl font-bold text-green-700">{completedTasks.length}</p>
              </div>
              <div className="bg-green-500 p-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Due Today */}
        <Card className="card-hover border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-orange-100/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600 mb-1">Due Today</p>
                <p className="text-3xl font-bold text-orange-700">{todayTasks.length}</p>
              </div>
              <div className="bg-orange-500 p-3 rounded-full">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Completion Rate */}
        <Card className="card-hover border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50 to-purple-100/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600 mb-1">Completion Rate</p>
                <p className="text-3xl font-bold text-purple-700">{completionRate}%</p>
              </div>
              <div className="bg-purple-500 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Task Management Section */}
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 border-b">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-2xl font-bold text-slate-800">
                Your Tasks
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Manage and track your daily tasks
              </p>
            </div>
            <AddTaskDialog />
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {/* Task List */}
          <div className="space-y-4">
            {tasks.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  No tasks yet
                </h3>
                <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                  Create your first task to get started with organizing your work
                </p>
                <AddTaskDialog />
              </div>
            ) : (
              <>
                {/* Pending Tasks */}
                {pendingTasks.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-700 flex items-center gap-2">
                      <Circle className="w-4 h-4 text-blue-500" />
                      Pending Tasks ({pendingTasks.length})
                    </h4>
                    {pendingTasks.map((task, index) => (
                      <div 
                        key={task.id} 
                        className="animate-slideInRight"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <TaskCard task={task} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Completed Tasks */}
                {completedTasks.length > 0 && (
                  <div className="space-y-3 pt-6">
                    <h4 className="font-semibold text-slate-700 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Completed Tasks ({completedTasks.length})
                    </h4>
                    {completedTasks.map((task, index) => (
                      <div 
                        key={task.id} 
                        className="animate-slideInRight"
                        style={{ animationDelay: `${(pendingTasks.length + index) * 100}ms` }}
                      >
                        <TaskCard task={task} />
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
