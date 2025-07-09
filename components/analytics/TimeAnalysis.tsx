'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

export function TimeAnalysis() {
  const hourlyData = [
    { hour: '6 AM', tasks: 1 },
    { hour: '7 AM', tasks: 3 },
    { hour: '8 AM', tasks: 7 },
    { hour: '9 AM', tasks: 12 },
    { hour: '10 AM', tasks: 15 },
    { hour: '11 AM', tasks: 14 },
    { hour: '12 PM', tasks: 8 },
    { hour: '1 PM', tasks: 6 },
    { hour: '2 PM', tasks: 9 },
    { hour: '3 PM', tasks: 11 },
    { hour: '4 PM', tasks: 8 },
    { hour: '5 PM', tasks: 5 },
    { hour: '6 PM', tasks: 3 },
    { hour: '7 PM', tasks: 2 },
  ];

  const maxTasks = Math.max(...hourlyData.map(d => d.tasks));

  const monthlyProgress = [
    { week: 'Week 1', completed: 25, target: 30 },
    { week: 'Week 2', completed: 28, target: 30 },
    { week: 'Week 3', completed: 32, target: 30 },
    { week: 'Week 4', completed: 27, target: 30 },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      {/* Hourly Activity */}
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <CardTitle className="text-xl font-semibold text-gray-900">
              Daily Activity Pattern
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {hourlyData.map((data, index) => {
              const height = (data.tasks / maxTasks) * 100;
              const isActive = data.tasks > 10;
              
              return (
                <div key={data.hour} className="flex items-center gap-3">
                  <span className="text-xs font-medium text-gray-600 w-12">
                    {data.hour}
                  </span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ease-out ${
                        isActive ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-400'
                      }`}
                      style={{ 
                        width: `${height}%`,
                        animationDelay: `${index * 50}ms`
                      }}
                    ></div>
                  </div>
                  <span className="text-xs font-semibold text-gray-700 w-6">
                    {data.tasks}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Peak hours:</strong> 9 AM - 11 AM (Most productive time)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Progress */}
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-green-600" />
            <CardTitle className="text-xl font-semibold text-gray-900">
              Monthly Progress
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {monthlyProgress.map((week, index) => {
              const percentage = Math.round((week.completed / week.target) * 100);
              const isAhead = week.completed > week.target;
              
              return (
                <div key={week.week} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{week.week}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">
                        {week.completed}/{week.target}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        isAhead 
                          ? 'bg-green-100 text-green-700' 
                          : percentage >= 90 
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-700 ease-out ${
                        isAhead 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                          : percentage >= 90
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                          : 'bg-gradient-to-r from-red-500 to-red-600'
                      }`}
                      style={{ 
                        width: `${Math.min(percentage, 100)}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-700">112</div>
              <div className="text-sm text-green-600">Tasks Completed</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-700">93%</div>
              <div className="text-sm text-blue-600">Target Achievement</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
