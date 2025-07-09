'use client';

import { Sidebar } from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CalendarPage() {
  const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
  
  const upcomingEvents = [
    { id: 1, title: 'Review project proposal', date: 'Today', time: '2:00 PM', priority: 'high' },
    { id: 2, title: 'Team standup meeting', date: 'Tomorrow', time: '9:00 AM', priority: 'medium' },
    { id: 3, title: 'Client presentation', date: 'Friday', time: '3:00 PM', priority: 'high' },
    { id: 4, title: 'Code review session', date: 'Next Monday', time: '10:00 AM', priority: 'low' },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar />
      
      <div className="flex-1 lg:pl-64">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-gray-900">Calendar</h1>
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Schedule view</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">4</div>
                  <div className="text-xs text-gray-500">This Week</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-600">2</div>
                  <div className="text-xs text-gray-500">Due Today</div>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Event
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-6 space-y-6">
          {/* Header */}
          <div className="animate-fadeInUp">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Schedule</h2>
            <p className="text-gray-600 text-sm">
              Manage your tasks and events in one unified calendar view.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar Widget */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      {currentMonth}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-gray-500 mb-4">Calendar component coming soon</p>
                    <p className="text-sm text-gray-400">Full calendar integration with task scheduling</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Events */}
            <div className="lg:col-span-1">
              <Card className="shadow-lg border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-600" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className={`w-3 h-3 rounded-full mt-1 ${
                          event.priority === 'high' ? 'bg-red-500' : 
                          event.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                        }`}></div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 text-sm truncate">{event.title}</p>
                          <p className="text-xs text-gray-500">{event.date} • {event.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700">
                      View all events
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
