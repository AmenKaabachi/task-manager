'use client';

import { Sidebar } from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Moon, 
  Sun,
  Smartphone,
  Monitor,
  Save
} from 'lucide-react';
import { useState } from 'react';

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    desktop: false,
  });

  const settingsCategories = [
    {
      title: 'Profile Settings',
      icon: User,
      items: [
        { label: 'Full Name', type: 'input', value: 'Demo User' },
        { label: 'Email Address', type: 'input', value: 'demo@taskflow.com' },
        { label: 'Job Title', type: 'input', value: 'Product Manager' },
        { label: 'Time Zone', type: 'select', value: 'UTC-5 (Eastern Time)' },
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { label: 'Email Notifications', type: 'toggle', checked: notifications.email },
        { label: 'Push Notifications', type: 'toggle', checked: notifications.push },
        { label: 'Desktop Notifications', type: 'toggle', checked: notifications.desktop },
        { label: 'Weekly Summary', type: 'toggle', checked: true },
      ]
    },
    {
      title: 'Appearance',
      icon: Palette,
      items: [
        { label: 'Dark Mode', type: 'toggle', checked: darkMode },
        { label: 'Compact View', type: 'toggle', checked: false },
        { label: 'Theme Color', type: 'color', value: 'Blue' },
        { label: 'Font Size', type: 'select', value: 'Medium' },
      ]
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      items: [
        { label: 'Two-Factor Authentication', type: 'toggle', checked: false },
        { label: 'Session Timeout', type: 'select', value: '30 minutes' },
        { label: 'Data Export', type: 'button', value: 'Export Data' },
        { label: 'Delete Account', type: 'button', value: 'Delete Account', danger: true },
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar />
      
      <div className="flex-1 lg:pl-64">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-gray-900">Settings</h1>
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Configuration</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-6 space-y-6">
          {/* Header */}
          <div className="animate-fadeInUp">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Settings</h2>
            <p className="text-gray-600 text-sm">
              Customize your TaskFlow experience with these preferences and settings.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 animate-fadeInUp stagger-1">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <Monitor className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="font-medium text-gray-900 text-sm">Display</p>
                <p className="text-xs text-gray-500">Theme & Layout</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <Bell className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <p className="font-medium text-gray-900 text-sm">Notifications</p>
                <p className="text-xs text-gray-500">Alerts & Updates</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="font-medium text-gray-900 text-sm">Security</p>
                <p className="text-xs text-gray-500">Privacy & Access</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <Smartphone className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                <p className="font-medium text-gray-900 text-sm">Mobile</p>
                <p className="text-xs text-gray-500">App Settings</p>
              </CardContent>
            </Card>
          </div>

          {/* Settings Categories */}
          <div className="space-y-6 animate-fadeInUp stagger-2">
            {settingsCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="shadow-lg border-0">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <Icon className="w-5 h-5 text-blue-600" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between py-2">
                          <div className="flex-1">
                            <label className="text-sm font-medium text-gray-900 block">
                              {item.label}
                            </label>
                          </div>
                          
                          <div className="flex-shrink-0 ml-4">
                            {item.type === 'input' && (
                              <Input 
                                defaultValue={item.value} 
                                className="w-48 h-8 text-sm"
                              />
                            )}
                            
                            {item.type === 'toggle' && (
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  defaultChecked={item.checked}
                                  className="sr-only"
                                />
                                <div className={`w-10 h-6 rounded-full transition-colors ${
                                  item.checked ? 'bg-blue-600' : 'bg-gray-200'
                                }`}>
                                  <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform mt-1 ${
                                    item.checked ? 'translate-x-5' : 'translate-x-1'
                                  }`}></div>
                                </div>
                              </div>
                            )}
                            
                            {item.type === 'select' && (
                              <select className="border rounded px-3 py-1 text-sm w-48">
                                <option>{item.value}</option>
                              </select>
                            )}
                            
                            {item.type === 'button' && (
                              <Button 
                                variant={item.danger ? "destructive" : "outline"} 
                                size="sm"
                              >
                                {item.value}
                              </Button>
                            )}
                            
                            {item.type === 'color' && (
                              <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 bg-blue-600 rounded border"></div>
                                <span className="text-sm text-gray-600">{item.value}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Last saved: Never
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                Reset to Defaults
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Save className="w-4 h-4 mr-2" />
                Save All Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
