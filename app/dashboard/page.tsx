'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { TaskOverview } from '@/components/dashboard/TaskOverview';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { ProductivityChart } from '@/components/dashboard/ProductivityChart';
import { Sidebar } from '@/components/layout/Sidebar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar />
      
      <div className="flex-1 lg:pl-64">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Live updates</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Quick Stats */}
              <div className="hidden md:flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">24</div>
                  <div className="text-xs text-gray-500">Active Tasks</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">89%</div>
                  <div className="text-xs text-gray-500">Completion</div>
                </div>
              </div>
              
              {/* Notifications */}
              <Button variant="outline" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 lg:p-6 space-y-6">
          {/* Welcome Header */}
          <div className="animate-fadeInUp">
            <DashboardHeader />
          </div>
            {/* Key Metrics */}
          <div className="animate-fadeInUp stagger-1">
            <StatsCards />
          </div>

          {/* Quick Actions */}
          <div className="animate-fadeInUp stagger-2">
            <QuickActions />
          </div>          {/* Main Dashboard Grid - Optimized Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 animate-fadeInUp stagger-3">
            {/* Main Content - Tasks & Charts */}
            <div className="lg:col-span-3 space-y-6">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="xl:col-span-2">
                  <TaskOverview />
                </div>
              </div>
              <ProductivityChart />
            </div>
            
            {/* Sidebar Content - Activity & Insights */}
            <div className="lg:col-span-1 space-y-6">
              <RecentActivity />
              
              {/* Additional compact widgets */}
              <div className="grid grid-cols-1 gap-4">
                <Card className="bg-white border-0 shadow-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-900">Today's Focus</h3>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Tasks completed</span>
                      <span className="font-medium">8/12</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-white border-0 shadow-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Stats</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">This week</span>
                      <span className="font-medium text-green-600">+23%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Avg. daily</span>
                      <span className="font-medium">6.5 tasks</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Streak</span>
                      <span className="font-medium">12 days</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
