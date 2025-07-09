import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TaskProvider } from '@/contexts/TaskContext';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://taskflow.com'),
  title: 'TaskFlow - AI-Powered Task Management Platform',
  description: 'Transform chaos into clarity with TaskFlow\'s intelligent task management. Beautiful design meets powerful productivity with AI-powered automation.',
  keywords: ['task management', 'productivity', 'AI', 'collaboration', 'analytics', 'scheduling'],
  authors: [{ name: 'TaskFlow Team' }],
  creator: 'TaskFlow',
  publisher: 'TaskFlow',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://taskflow.com',
    title: 'TaskFlow - AI-Powered Task Management Platform',
    description: 'Transform chaos into clarity with TaskFlow\'s intelligent task management. Beautiful design meets powerful productivity.',
    siteName: 'TaskFlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaskFlow - AI-Powered Task Management Platform',
    description: 'Transform chaos into clarity with TaskFlow\'s intelligent task management.',
    creator: '@TaskFlowApp',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3B82F6',
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
