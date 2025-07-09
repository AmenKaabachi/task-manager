'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  Home, 
  CheckSquare, 
  BarChart3, 
  Settings, 
  Plus, 
  Filter, 
  Calendar,
  Users,
  Target,
  TrendingUp,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'My Tasks', href: '/tasks', icon: CheckSquare },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Settings', href: '/settings', icon: Settings },
];

const quickFilters = [
  { name: 'Due Today', count: 3, color: 'bg-red-500', icon: Clock },
  { name: 'High Priority', count: 5, color: 'bg-orange-500', icon: Target },
  { name: 'In Progress', count: 8, color: 'bg-blue-500', icon: TrendingUp },
  { name: 'Completed', count: 12, color: 'bg-green-500', icon: CheckSquare },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200/50 lg:bg-white/90 lg:backdrop-blur-xl lg:shadow-xl">
      {/* Sidebar Header */}
      <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-200/50 bg-white/50">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
          <CheckSquare className="w-4 h-4 text-white" />
        </div>
        <div>
          <h2 className="text-base font-bold text-gray-900">TaskFlow</h2>
          <p className="text-xs text-gray-500">Productivity Hub</p>
        </div>
      </div>      <div className="flex flex-col flex-1 overflow-y-auto">          <div className="flex flex-col px-3 py-4 space-y-6 scrollbar-thin overflow-y-auto">
            {/* Quick Actions */}
            <div>
              <Button className="w-full justify-start gap-2 h-10 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-sm">
                <Plus className="w-4 h-4" />
                New Task
              </Button>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                Navigation
              </h3>
              <nav className="space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02]",
                        isActive
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 hover:shadow-md"
                      )}
                    >
                      <Icon className={cn(
                        "mr-2.5 h-4 w-4 flex-shrink-0 transition-transform duration-200",
                        isActive ? "text-white" : "text-gray-500 group-hover:text-gray-700",
                        "group-hover:scale-110"
                      )} />
                      <span className="truncate">{item.name}</span>
                      {isActive && (
                        <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>{/* Quick Filters */}
          <div>
            <div className="flex items-center justify-between mb-3 px-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Quick Filters</h3>
              <Filter className="w-3 h-3 text-gray-400" />
            </div>
            <div className="space-y-1">
              {quickFilters.map((filter) => {
                const Icon = filter.icon;
                return (
                  <div
                    key={filter.name}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-100/80 transition-all duration-200 cursor-pointer group transform hover:scale-[1.02] hover:shadow-md"
                  >
                    <div className="flex items-center min-w-0 flex-1">
                      <div className={cn(
                        "w-6 h-6 rounded-md mr-2.5 flex items-center justify-center shadow-sm flex-shrink-0",
                        filter.color
                      )}>
                        <Icon className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 truncate">
                        {filter.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <span className="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full group-hover:bg-white group-hover:shadow-sm transition-all duration-200">
                        {filter.count}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compact Progress Card */}
          <Card className="p-4 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">Weekly Progress</h3>
              <p className="text-xs text-gray-600 mb-3">12 of 15 tasks completed</p>
              
              {/* Compact Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out shadow-sm" 
                    style={{ width: '80%' }}
                  >
                    <div className="w-full h-full bg-white/20 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute -top-0.5 left-[80%] transform -translate-x-1/2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full shadow-lg animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <p className="text-xs font-bold text-purple-600">80%</p>
                <p className="text-xs text-gray-500">3 left</p>
              </div>
              
              {/* Compact Achievement Badge */}
              <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                <Target className="w-3 h-3" />
                On Track!
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
