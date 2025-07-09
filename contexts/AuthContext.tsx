'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User, AuthContextType } from '@/types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hardcoded credentials for testing
const DEMO_CREDENTIALS = {
  username: '1',
  password: '1',
  user: {
    id: '1',
    email: '1',
    name: 'Demo User'
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('taskflow_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem('taskflow_user');
      }
    }
    setLoading(false);
  }, []);
  const signIn = async (username: string, password: string) => {
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password) {
      setUser(DEMO_CREDENTIALS.user);
      localStorage.setItem('taskflow_user', JSON.stringify(DEMO_CREDENTIALS.user));
      
      // Set cookie for middleware
      document.cookie = `taskflow_user=${JSON.stringify(DEMO_CREDENTIALS.user)}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days
      
      setLoading(false);
    } else {
      setLoading(false);
      throw new Error('Invalid credentials');
    }
  };
  const signOut = async () => {
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setUser(null);
    localStorage.removeItem('taskflow_user');
    
    // Clear cookie
    document.cookie = 'taskflow_user=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    
    setLoading(false);
  };

  const value: AuthContextType = {
    user,
    loading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
