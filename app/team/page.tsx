'use client';

import { Sidebar } from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, UserPlus, Mail, MoreHorizontal, Crown, Shield } from 'lucide-react';

export default function TeamPage() {
  const teamMembers = [
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      role: 'Project Manager', 
      email: 'sarah@company.com',
      avatar: 'SJ',
      status: 'online',
      tasksCompleted: 24,
      role_type: 'admin'
    },
    { 
      id: 2, 
      name: 'Mike Chen', 
      role: 'Senior Developer', 
      email: 'mike@company.com',
      avatar: 'MC',
      status: 'away',
      tasksCompleted: 18,
      role_type: 'member'
    },
    { 
      id: 3, 
      name: 'Emily Davis', 
      role: 'UI/UX Designer', 
      email: 'emily@company.com',
      avatar: 'ED',
      status: 'online',
      tasksCompleted: 15,
      role_type: 'member'
    },
    { 
      id: 4, 
      name: 'James Wilson', 
      role: 'DevOps Engineer', 
      email: 'james@company.com',
      avatar: 'JW',
      status: 'offline',
      tasksCompleted: 12,
      role_type: 'member'
    },
  ];

  const teamStats = [
    { label: 'Total Members', value: '4', icon: Users, color: 'blue' },
    { label: 'Active Today', value: '3', icon: Users, color: 'green' },
    { label: 'Tasks Completed', value: '69', icon: Crown, color: 'purple' },
    { label: 'Team Efficiency', value: '94%', icon: Shield, color: 'orange' },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar />
      
      <div className="flex-1 lg:pl-64">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-gray-900">Team</h1>
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">4 members online</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">4</div>
                  <div className="text-xs text-gray-500">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">94%</div>
                  <div className="text-xs text-gray-500">Efficiency</div>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <UserPlus className="w-4 h-4 mr-2" />
                Invite Member
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-6 space-y-6">
          {/* Header */}
          <div className="animate-fadeInUp">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Team Management</h2>
            <p className="text-gray-600 text-sm">
              Manage your team members, track performance, and collaborate effectively.
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 animate-fadeInUp stagger-1">
            {teamStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="shadow-lg border-0">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 text-${stat.color}-600`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Team Members */}
          <Card className="shadow-lg border-0 animate-fadeInUp stagger-2">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Team Members
                </CardTitle>
                <Button variant="outline" size="sm">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Member
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {member.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                          member.status === 'online' ? 'bg-green-500' : 
                          member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                        }`}></div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{member.name}</h3>
                          {member.role_type === 'admin' && (
                            <Crown className="w-4 h-4 text-yellow-500" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{member.role}</p>
                        <p className="text-xs text-gray-500">{member.email}</p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">{member.tasksCompleted} tasks</p>
                        <p className="text-xs text-gray-500">This month</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
