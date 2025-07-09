'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';
import { Task, TaskContextType } from '@/types';

const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Mock data
const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Complete project proposal',
    description: 'Write and submit the Q4 project proposal',
    completed: false,
    priority: 'high',
    dueDate: '2024-01-15',
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z',
  },
  {
    id: '2',
    title: 'Review code changes',
    description: 'Review pull requests from the team',
    completed: true,
    priority: 'medium',
    createdAt: '2024-01-02T09:00:00Z',
    updatedAt: '2024-01-02T15:00:00Z',
  },
];

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const addTask = useCallback((taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTasks(prev => [newTask, ...prev]);
  }, []);

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(task => 
      task.id === id 
        ? { ...task, ...updates, updatedAt: new Date().toISOString() }
        : task
    ));
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks(prev => prev.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed, updatedAt: new Date().toISOString() }
        : task
    ));
  }, []);

  const value = useMemo<TaskContextType>(() => ({
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
  }), [tasks, addTask, updateTask, deleteTask, toggleTask]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}
