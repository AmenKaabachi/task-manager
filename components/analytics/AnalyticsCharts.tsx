'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';

export function AnalyticsCharts() {
  // Mock data for demonstration
  const weeklyData = [
    { day: 'Mon', completed: 8, created: 10 },
    { day: 'Tue', completed: 12, created: 15 },
    { day: 'Wed', completed: 6, created: 8 },
    { day: 'Thu', completed: 15, created: 18 },
    { day: 'Fri', completed: 10, created: 12 },
    { day: 'Sat', completed: 4, created: 5 },
    { day: 'Sun', completed: 3, created: 4 },
  ];

  const maxValue = Math.max(...weeklyData.map(d => Math.max(d.completed, d.created)));

  return (
    <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          <CardTitle className="text-xl font-semibold text-gray-900">
            Weekly Task Activity
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Legend */}
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-gray-600">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded"></div>
              <span className="text-gray-600">Created</span>
            </div>
          </div>

          {/* Chart */}
          <div className="space-y-4">
            {weeklyData.map((data, index) => (
              <div key={data.day} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">{data.day}</span>
                  <div className="flex gap-2 text-xs text-gray-500">
                    <span>{data.completed} completed</span>
                    <span>•</span>
                    <span>{data.created} created</span>
                  </div>
                </div>
                <div className="flex gap-1 h-6">
                  <div 
                    className="bg-blue-500 rounded-sm transition-all duration-500 ease-out"
                    style={{ 
                      width: `${(data.completed / maxValue) * 100}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  ></div>
                  <div 
                    className="bg-purple-500 rounded-sm transition-all duration-500 ease-out"
                    style={{ 
                      width: `${(data.created / maxValue) * 100}%`,
                      animationDelay: `${index * 100 + 50}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
