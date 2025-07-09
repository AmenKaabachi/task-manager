import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TaskProvider } from '@/contexts/TaskContext';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TaskFlow - Modern Task Management',
  description: 'A beautiful and efficient task management application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50`}>
        <AuthProvider>
          <TaskProvider>
            <div className="min-h-full">
              {children}
            </div>
          </TaskProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
