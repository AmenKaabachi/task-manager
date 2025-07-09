'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export function ProductivityChart() {
  const weeklyData = [
    { day: 'Mon', completed: 8, target: 10 },
    { day: 'Tue', completed: 12, target: 10 },
    { day: 'Wed', completed: 6, target: 10 },
    { day: 'Thu', completed: 15, target: 10 },
    { day: 'Fri', completed: 10, target: 10 },
    { day: 'Sat', completed: 4, target: 10 },
    { day: 'Sun', completed: 3, target: 10 },
  ];

  const maxValue = Math.max(...weeklyData.map(d => Math.max(d.completed, d.target)));

  return (
    <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <CardTitle className="text-xl font-semibold text-gray-900">
              Weekly Productivity
            </CardTitle>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-gray-600">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-300 rounded"></div>
              <span className="text-gray-600">Target</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {weeklyData.map((data, index) => {
            const completedPercentage = (data.completed / maxValue) * 100;
            const targetPercentage = (data.target / maxValue) * 100;
            const isAboveTarget = data.completed > data.target;
            
            return (
              <div key={data.day} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">{data.day}</span>
                  <div className="flex items-center gap-2 text-xs">
                    <span className={`font-semibold ${
                      isAboveTarget ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {data.completed}/{data.target}
                    </span>
                    {isAboveTarget && (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        +{data.completed - data.target}
                      </span>
                    )}
                  </div>
                </div>
                <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                  {/* Target line */}
                  <div 
                    className="absolute top-0 h-full bg-gray-300 rounded-lg transition-all duration-700 ease-out"
                    style={{ 
                      width: `${targetPercentage}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  ></div>
                  {/* Completed bar */}
                  <div 
                    className={`absolute top-0 h-full rounded-lg transition-all duration-700 ease-out ${
                      isAboveTarget 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-600'
                    }`}
                    style={{ 
                      width: `${completedPercentage}%`,
                      animationDelay: `${index * 100 + 200}ms`
                    }}
                  ></div>
                  {/* Numbers overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-semibold text-white drop-shadow">
                      {data.completed}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">This Week's Performance</p>
              <p className="text-xs text-gray-600">Total: 58/70 tasks completed</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">83%</p>
              <p className="text-xs text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
