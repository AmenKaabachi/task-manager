'use client';

import { useEffect, useRef, useState, memo, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Calendar, AlertCircle, Clock, Star, Check } from 'lucide-react';
import { Task } from '@/types';
import { useTasks } from '@/contexts/TaskContext';
import { cn } from '@/lib/utils';

interface TaskCardProps {
  task: Task;
}

function TaskCardComponent({ task }: TaskCardProps) {
  const { toggleTask, deleteTask } = useTasks();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleToggle = useCallback(() => {
    toggleTask(task.id);
  }, [toggleTask, task.id]);

  const handleDelete = useCallback(() => {
    if (isDeleting) return;
    setIsDeleting(true);
    
    // Simple fade out animation
    if (cardRef.current) {
      cardRef.current.style.transition = 'opacity 0.2s ease-out';
      cardRef.current.style.opacity = '0';
      setTimeout(() => deleteTask(task.id), 200);
    } else {
      deleteTask(task.id);
    }
  }, [deleteTask, task.id, isDeleting]);

  const getPriorityStyles = useCallback((priority: string) => {
    switch (priority) {
      case 'high': 
        return {
          color: 'text-red-700',
          bg: 'bg-red-50',
          border: 'border-red-200',
          icon: 'text-red-600'
        };
      case 'medium': 
        return {
          color: 'text-amber-700',
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          icon: 'text-amber-600'
        };
      case 'low': 
        return {
          color: 'text-green-700',
          bg: 'bg-green-50',
          border: 'border-green-200',
          icon: 'text-green-600'
        };
      default: 
        return {
          color: 'text-gray-700',
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          icon: 'text-gray-600'
        };
    }
  }, []);

  const priorityStyles = getPriorityStyles(task.priority);
  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;
  const isDueToday = task.dueDate && new Date(task.dueDate).toDateString() === new Date().toDateString();

  return (
    <Card 
      ref={cardRef} 
      className={cn(
        "group border-l-4 transition-all duration-200 ease-out cursor-pointer card-hover-subtle",
        task.completed 
          ? "opacity-75 bg-green-50 border-l-green-400" 
          : "bg-white hover:bg-slate-50 border-l-slate-200",
        isOverdue && "border-l-red-400 bg-red-50",
        isDueToday && !task.completed && "border-l-orange-400 bg-orange-50"
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          {/* Custom Checkbox */}
          <div className="pt-0.5">
            <button
              onClick={handleToggle}
              className={cn(
                "h-5 w-5 rounded border-2 flex items-center justify-center transition-all duration-200",
                task.completed
                  ? "bg-green-500 border-green-500 text-white"
                  : "border-gray-300 hover:border-green-400 bg-white"
              )}
            >
              {task.completed && (
                <Check className="w-3 h-3" />
              )}
            </button>
          </div>

          {/* Task Content */}
          <div className="flex-1 min-w-0 space-y-2">
            {/* Title */}
            <div className="flex items-center gap-2">
              <h3 className={cn(
                "font-semibold text-base leading-tight",
                task.completed 
                  ? "line-through text-gray-500" 
                  : "text-slate-800"
              )}>
                {task.title}
              </h3>
              {task.priority === 'high' && !task.completed && (
                <Star className="w-4 h-4 text-yellow-500" />
              )}
            </div>

            {/* Description */}
            {task.description && (
              <p className={cn(
                "text-sm leading-relaxed",
                task.completed ? "text-gray-400" : "text-slate-600"
              )}>
                {task.description}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {/* Priority Badge */}
              <div className={cn(
                "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
                priorityStyles.bg,
                priorityStyles.border,
                priorityStyles.color
              )}>
                <AlertCircle className={cn("w-3 h-3", priorityStyles.icon)} />
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </div>

              {/* Due Date */}
              {task.dueDate && (
                <div className={cn(
                  "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
                  isOverdue 
                    ? "bg-red-100 text-red-700 border border-red-200"
                    : isDueToday
                    ? "bg-orange-100 text-orange-700 border border-orange-200"
                    : "bg-slate-100 text-slate-600 border border-slate-200"
                )}>
                  {isOverdue ? (
                    <Clock className="w-3 h-3" />
                  ) : (
                    <Calendar className="w-3 h-3" />
                  )}
                  {isOverdue ? 'Overdue' : new Date(task.dueDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              )}

              {/* Created time */}
              <span className="text-xs text-gray-500">
                Created {new Date(task.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Delete Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDelete}
            disabled={isDeleting}
            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-50 hover:text-red-600 text-slate-400"
          >
            <Trash2 className="w-4 h-4" />
            <span className="sr-only">Delete task</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export const TaskCard = memo(TaskCardComponent);
