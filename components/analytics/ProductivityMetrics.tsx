'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Clock, Zap } from 'lucide-react';

export function ProductivityMetrics() {
  const metrics = [
    {
      label: 'High Priority',
      value: 24,
      total: 30,
      color: 'bg-red-500',
      textColor: 'text-red-600'
    },
    {
      label: 'Medium Priority',
      value: 18,
      total: 25,
      color: 'bg-yellow-500',
      textColor: 'text-yellow-600'
    },
    {
      label: 'Low Priority',
      value: 32,
      total: 35,
      color: 'bg-green-500',
      textColor: 'text-green-600'
    }
  ];

  const averageTime = [
    { period: 'This Week', time: '2.3 days', change: -15 },
    { period: 'Last Week', time: '2.7 days', change: 8 },
    { period: 'This Month', time: '2.5 days', change: -5 }
  ];

  return (
    <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-purple-600" />
          <CardTitle className="text-xl font-semibold text-gray-900">
            Productivity Insights
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Priority Completion Rates */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Completion by Priority
          </h4>
          <div className="space-y-4">
            {metrics.map((metric, index) => {
              const percentage = Math.round((metric.value / metric.total) * 100);
              return (
                <div key={metric.label} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                    <span className={`text-sm font-semibold ${metric.textColor}`}>
                      {metric.value}/{metric.total} ({percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${metric.color} h-2 rounded-full transition-all duration-700 ease-out`}
                      style={{ 
                        width: `${percentage}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Average Completion Time */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Average Completion Time
          </h4>
          <div className="space-y-3">
            {averageTime.map((item, index) => (
              <div key={item.period} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">{item.period}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900">{item.time}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.change > 0 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-green-100 text-green-600'
                  }`}>
                    {item.change > 0 ? '+' : ''}{item.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
