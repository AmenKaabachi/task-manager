import { Sidebar } from '@/components/layout/Sidebar';
import { AnalyticsCharts } from '@/components/analytics/AnalyticsCharts';
import { ProductivityMetrics } from '@/components/analytics/ProductivityMetrics';
import { TimeAnalysis } from '@/components/analytics/TimeAnalysis';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Clock, Target, Calendar } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar />
      
      <div className="flex-1 lg:pl-64">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-gray-900">Analytics</h1>
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Live insights</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">92%</div>
                  <div className="text-xs text-gray-500">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">2.3d</div>
                  <div className="text-xs text-gray-500">Avg. Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-6 space-y-6">
          {/* Header */}
          <div className="animate-fadeInUp">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Productivity Insights</h2>
            <p className="text-gray-600 text-sm">
              Track your productivity and gain insights into your task management patterns.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 animate-fadeInUp stagger-1">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600 mb-1">Avg. Completion Time</p>
                    <p className="text-2xl font-bold text-blue-700">2.3 days</p>
                    <p className="text-xs text-blue-600 mt-1">↓ 15% from last week</p>
                  </div>
                  <div className="bg-blue-500 p-2.5 rounded-full">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-600 mb-1">Success Rate</p>
                    <p className="text-2xl font-bold text-green-700">92%</p>
                    <p className="text-xs text-green-600 mt-1">↑ 8% from last week</p>
                  </div>
                  <div className="bg-green-500 p-2.5 rounded-full">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600 mb-1">Weekly Streak</p>
                    <p className="text-2xl font-bold text-purple-700">12 days</p>
                    <p className="text-xs text-purple-600 mt-1">Personal best!</p>
                  </div>
                  <div className="bg-purple-500 p-2.5 rounded-full">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-orange-600 mb-1">Peak Hours</p>
                    <p className="text-2xl font-bold text-orange-700">9-11 AM</p>
                    <p className="text-xs text-orange-600 mt-1">Most productive time</p>
                  </div>
                  <div className="bg-orange-500 p-2.5 rounded-full">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 animate-fadeInUp stagger-2">
            <AnalyticsCharts />
            <ProductivityMetrics />
          </div>

          {/* Time Analysis */}
          <div className="animate-fadeInUp stagger-3">
            <TimeAnalysis />
          </div>
        </div>
      </div>
    </div>
  );
}
