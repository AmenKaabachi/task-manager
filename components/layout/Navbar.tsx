'use client';

import { useState, useEffect, memo, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  CheckSquare, 
  User, 
  LogOut, 
  Settings, 
  ChevronDown,
  BarChart3,
  Calendar,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

function NavbarComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { user, signOut } = useAuth();
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const toggleProfileDropdown = useCallback(() => {
    setProfileDropdownOpen(prev => !prev);
  }, []);

  const handleSignOut = useCallback(async () => {
    await signOut();
    setProfileDropdownOpen(false);
  }, [signOut]);

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300 ease-out",
      scrolled 
        ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/60 shadow-xl" 
        : "bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className={cn(
              "relative p-2.5 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-2xl shadow-lg",
              "group-hover:shadow-2xl group-hover:shadow-blue-500/30",
              "transition-all duration-500 ease-out",
              "group-hover:scale-110 group-hover:rotate-3 transform-gpu"
            )}>
              <CheckSquare className="w-6 h-6 text-white drop-shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500"></div>
            </div>
            <span className={cn(
              "text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent",
              "group-hover:scale-105 transition-transform duration-300"
            )}>
              TaskFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative flex items-center px-4 py-2.5 rounded-xl text-sm font-medium",
                  "transition-all duration-300 ease-out transform-gpu",
                  "hover:scale-105 hover:-translate-y-0.5",
                  "text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-100 hover:to-blue-50"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <div className="relative" ref={profileDropdownRef}>
                {/* Profile Button */}
                <Button
                  variant="ghost"
                  onClick={toggleProfileDropdown}
                  className="flex items-center space-x-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 max-w-32 truncate">
                    {user.name || user.email}
                  </span>
                  <ChevronDown className={cn(
                    "w-4 h-4 text-gray-500 transition-transform duration-200",
                    profileDropdownOpen ? "rotate-180" : "rotate-0"
                  )} />
                </Button>

                {/* Profile Dropdown */}
                <div className={cn(
                  "absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50",
                  "transform transition-all duration-200 origin-top-right",
                  profileDropdownOpen 
                    ? "opacity-100 scale-100 translate-y-0" 
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                )}>
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {user.name || 'User'}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-1">
                    <Link
                      href="/dashboard"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <BarChart3 className="w-4 h-4 mr-3 text-blue-500" />
                      Dashboard
                    </Link>
                    <Link
                      href="/tasks"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <CheckSquare className="w-4 h-4 mr-3 text-green-500" />
                      My Tasks
                    </Link>
                    <Link
                      href="/analytics"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <Calendar className="w-4 h-4 mr-3 text-purple-500" />
                      Analytics
                    </Link>
                    <button
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <Bell className="w-4 h-4 mr-3 text-orange-500" />
                      Notifications
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 my-1"></div>

                  {/* Bottom Actions */}
                  <div className="py-1">
                    <button
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <Settings className="w-4 h-4 mr-3 text-gray-500" />
                      Settings
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                    Sign In
                  </Button>
                </Link>
                <Link href="/login">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="transition-transform duration-200"
            >
              <div className="relative w-6 h-6">
                <Menu className={cn(
                  "absolute inset-0 w-6 h-6 transition-all duration-300",
                  mobileMenuOpen ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100"
                )} />
                <X className={cn(
                  "absolute inset-0 w-6 h-6 transition-all duration-300",
                  mobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-180 scale-0"
                )} />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-500 ease-out",
        "bg-white/95 backdrop-blur-xl border-t border-gray-200/50",
        mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
              className={cn(
                "flex items-center px-4 py-3 rounded-xl text-base font-medium",
                "transition-all duration-300 ease-out transform-gpu",
                "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              )}
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              {item.name}
            </a>
          ))}
            {!user && (
            <div className="pt-4 space-y-2">
              <Link href="/login" onClick={closeMobileMenu}>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/login" onClick={closeMobileMenu}>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
                  Get Started
                </Button>
              </Link>
            </div>
          )}

          {user && (
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-3 px-4 py-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {user.name || 'User'}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user.email}
                  </p>
                </div>
              </div>
              
              <div className="space-y-1 px-2">
                <Link
                  href="/dashboard"
                  onClick={closeMobileMenu}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <BarChart3 className="w-4 h-4 mr-3 text-blue-500" />
                  Dashboard
                </Link>
                <Link
                  href="/tasks"
                  onClick={closeMobileMenu}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <CheckSquare className="w-4 h-4 mr-3 text-green-500" />
                  My Tasks
                </Link>
                <Link
                  href="/analytics"
                  onClick={closeMobileMenu}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Calendar className="w-4 h-4 mr-3 text-purple-500" />
                  Analytics
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export const Navbar = memo(NavbarComponent);
