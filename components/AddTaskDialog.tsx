'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Calendar, AlertCircle, FileText } from 'lucide-react';
import { useTasks } from '@/contexts/TaskContext';
import { cn } from '@/lib/utils';

export function AddTaskDialog({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [dueDate, setDueDate] = useState('');
  
  const { addTask } = useTasks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({
      title: title.trim(),
      description: description.trim() || undefined,
      completed: false,
      priority,
      dueDate: dueDate || undefined,
    });

    // Reset form
    setTitle('');
    setDescription('');
    setPriority('medium');
    setDueDate('');
    setOpen(false);
  };

  const priorityOptions = [
    { value: 'low', label: 'Low Priority', color: 'text-green-600', bg: 'bg-green-50' },
    { value: 'medium', label: 'Medium Priority', color: 'text-amber-600', bg: 'bg-amber-50' },
    { value: 'high', label: 'High Priority', color: 'text-red-600', bg: 'bg-red-50' },
  ];
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button className="gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200">
            <Plus className="w-4 h-4" />
            Add New Task
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
        <DialogHeader className="space-y-3 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <DialogTitle className="text-xl font-semibold text-slate-800">
              Create New Task
            </DialogTitle>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Field */}
          <div className="space-y-2">
            <label htmlFor="title" className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <FileText className="w-4 h-4" />
              Task Title *
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs to be done?"
              required
              className="h-11 border-2 focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Description Field */}
          <div className="space-y-2">
            <label htmlFor="description" className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <FileText className="w-4 h-4" />
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add more details about this task..."
              rows={3}
              className="flex w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-none"
            />
          </div>

          {/* Priority Field */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <AlertCircle className="w-4 h-4" />
              Priority Level
            </label>
            <div className="grid grid-cols-3 gap-2">
              {priorityOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPriority(option.value as 'low' | 'medium' | 'high')}
                  className={cn(
                    "p-3 rounded-lg border-2 text-xs font-medium transition-all duration-200",
                    priority === option.value
                      ? `${option.bg} ${option.color} border-current shadow-sm`
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Due Date Field */}
          <div className="space-y-2">
            <label htmlFor="dueDate" className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Calendar className="w-4 h-4" />
              Due Date
            </label>
            <Input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="h-11 border-2 focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="flex-1 h-11 border-2"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1 h-11 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg"
              disabled={!title.trim()}
            >
              Create Task
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
