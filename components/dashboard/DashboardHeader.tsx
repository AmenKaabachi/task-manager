'use client';

import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';

export function DashboardHeader() {
  const { user } = useAuth();
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="flex flex-col space-y-4">
      {/* Greeting - More Compact */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {greeting}, {user?.name || 'there'}! 👋
          </h1>
          <p className="text-gray-600 mt-1 text-sm">
            Here's what's happening with your tasks today.
          </p>
        </div>
      </div>

      {/* Search and Filters - Compact */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex flex-1 max-w-md gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search tasks, projects..."
              className="pl-10 bg-white/80 backdrop-blur-sm border-gray-200 focus:border-blue-500 h-10"
            />
          </div>
          <Button variant="outline" size="icon" className="border-gray-200 bg-white/80 backdrop-blur-sm h-10 w-10">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Quick Stats - Compact */}
        <div className="flex items-center gap-6 text-sm">
          <div className="text-center">
            <p className="font-semibold text-gray-900">12</p>
            <p className="text-gray-500 text-xs">Due Today</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-green-600">8</p>
            <p className="text-gray-500 text-xs">Completed</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-orange-600">4</p>
            <p className="text-gray-500 text-xs">In Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
}
