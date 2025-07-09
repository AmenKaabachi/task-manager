import { TaskList } from '@/components/TaskList';
import { Sidebar } from '@/components/layout/Sidebar';

export default function TasksPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar />
      
      <div className="flex-1 lg:pl-64">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-gray-900">All Tasks</h1>
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Task manager</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">15</div>
                  <div className="text-xs text-gray-500">Total Tasks</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">8</div>
                  <div className="text-xs text-gray-500">Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-6">
          <div className="mb-6 animate-fadeInUp">
            <h2 className="text-2xl font-bold text-gray-900">Manage Your Tasks</h2>
            <p className="text-gray-600 mt-1 text-sm">Organize and track all your tasks in one place.</p>
          </div>
          
          <div className="animate-fadeInUp stagger-1">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}
