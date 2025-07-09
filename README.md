# TaskFlow - AI-Powered Task Management Platform

<div align="center">

![TaskFlow Logo](https://img.shields.io/badge/TaskFlow-Productivity%20Platform-blue?style=for-the-badge&logo=task&logoColor=white)

A modern, intelligent task management platform built with Next.js 14, featuring AI-powered automation, beautiful UI, and comprehensive analytics.

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.9-2D3748?style=flat&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Supabase](https://img.shields.io/badge/Supabase-Latest-3FCF8E?style=flat&logo=supabase&logoColor=white)](https://supabase.com/)

</div>

## 🌟 Overview

TaskFlow is a comprehensive task management platform designed to supercharge productivity through intelligent automation and beautiful design. Built with modern web technologies, it offers a seamless experience for individuals and teams to organize, prioritize, and track their tasks effectively.

### ✨ Key Features

- **🤖 AI-Powered Task Suggestions** - Intelligent automation that learns from your habits
- **📊 Advanced Analytics** - Deep insights into productivity patterns with beautiful charts
- **📅 Smart Scheduling** - AI-powered scheduling with intelligent due date predictions
- **👥 Team Collaboration** - Real-time collaboration with shared workspaces
- **⚡ Lightning Performance** - Blazing fast with instant sync and offline support
- **🔒 Enterprise Security** - Bank-grade encryption and SOC 2 compliance
- **🎨 Beautiful UI** - Modern, responsive design with smooth animations
- **📱 Mobile-First** - Fully responsive across all devices

## 🏗️ Architecture

### Tech Stack

**Frontend:**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **GSAP** - Advanced animations
- **Zustand** - Lightweight state management

**Backend:**
- **Next.js API Routes** - Serverless API endpoints
- **Prisma** - Type-safe database ORM
- **PostgreSQL** - Primary database
- **Supabase** - Authentication and real-time features

**Development Tools:**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Project Structure

```
task-manager/
├── app/                    # Next.js 14 App Router
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Landing page
│   ├── analytics/          # Analytics dashboard
│   ├── api/                # API routes
│   │   └── tasks/          # Task-related endpoints
│   ├── calendar/           # Calendar view
│   ├── dashboard/          # Main dashboard
│   ├── login/              # Authentication pages
│   ├── settings/           # User settings
│   ├── tasks/              # Task management
│   └── team/               # Team collaboration
├── components/             # Reusable React components
│   ├── AddTaskDialog.tsx   # Task creation modal
│   ├── TaskCard.tsx        # Individual task display
│   ├── TaskList.tsx        # Task list container
│   ├── analytics/          # Analytics components
│   ├── dashboard/          # Dashboard components
│   ├── layout/             # Layout components
│   └── ui/                 # Base UI components
├── contexts/               # React contexts
│   ├── AuthContext.tsx     # Authentication state
│   └── TaskContext.tsx     # Task management state
├── hooks/                  # Custom React hooks
│   ├── useAuth.ts          # Authentication hook
│   └── useTasks.ts         # Task management hook
├── lib/                    # Utility libraries
│   ├── prisma.ts           # Prisma client
│   ├── supabase.ts         # Supabase client
│   └── utils.ts            # Helper functions
├── prisma/                 # Database schema
├── types/                  # TypeScript definitions
└── db/                     # Database configurations
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or later
- **npm** or **yarn** package manager
- **PostgreSQL** database
- **Supabase** account (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/taskflow"
   
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
   
   # NextAuth (if using)
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma db push
   
   # (Optional) Seed the database
   npx prisma db seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗃️ Database Schema

### User Model
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  tasks     Task[]
}
```

### Task Model
```prisma
model Task {
  id          String   @id @default(cuid())
  title       String
  description String?
  completed   Boolean  @default(false)
  priority    Priority @default(MEDIUM)
  dueDate     DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  userId      String
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

enum Priority {
  LOW
  MEDIUM
  HIGH
}
```

## 🎨 UI Components

The project uses a modular component architecture with:

### Core Components
- **Layout Components**: Navbar, Sidebar for navigation
- **Task Components**: TaskCard, TaskList, AddTaskDialog
- **Dashboard Components**: StatsCards, ProductivityChart, QuickActions
- **Analytics Components**: AnalyticsCharts, ProductivityMetrics, TimeAnalysis

### UI System
Built on Radix UI primitives with custom styling:
- **Button** - Multiple variants and sizes
- **Card** - Container component with hover effects
- **Dialog** - Modal dialogs for forms
- **Input** - Form input components
- **Checkbox** - Task completion toggles

## 📊 Features Deep Dive

### Dashboard
- **Real-time Statistics** - Task completion rates, productivity metrics
- **Interactive Charts** - Weekly progress visualization
- **Quick Actions** - Fast task creation and management
- **Recent Activity** - Timeline of recent changes

### Task Management
- **Priority System** - Low, Medium, High priority levels
- **Due Date Tracking** - Smart scheduling with overdue notifications
- **Categories & Tags** - Flexible organization system
- **Search & Filters** - Advanced task filtering capabilities

### Analytics
- **Productivity Insights** - Weekly and monthly productivity trends
- **Time Analysis** - Time spent on different task categories
- **Completion Patterns** - Analysis of task completion behaviors
- **Goal Tracking** - Progress towards productivity goals

### Team Collaboration
- **Shared Workspaces** - Collaborative task management
- **Real-time Updates** - Live synchronization across team members
- **Assignment System** - Task delegation and ownership
- **Activity Feeds** - Team activity notifications

## 🔧 Configuration

### Tailwind CSS Configuration
The project uses extensive Tailwind customization:
- **Custom Color Palette** - Brand-specific color scheme
- **Animation Classes** - Smooth transitions and effects
- **Component Variants** - Utility classes for consistent styling
- **Responsive Breakpoints** - Mobile-first design approach

### Next.js Configuration
- **Image Optimization** - Automatic image optimization
- **Performance Settings** - Code splitting and caching strategies
- **Webpack Optimization** - Custom build optimizations
- **API Route Handlers** - RESTful API endpoints

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** - Automatic deployments on push to main branch

### Manual Deployment
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

### Database Deployment
- **PostgreSQL** on services like Railway, Supabase, or PlanetScale
- **Environment variables** configuration for production
- **Database migrations** using Prisma

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Testing Strategy
- **Unit Tests** - Component and utility function testing
- **Integration Tests** - API endpoint testing
- **E2E Tests** - Full user journey testing
- **Performance Tests** - Core Web Vitals monitoring

## 🤝 Contributing

We welcome contributions to TaskFlow! Here's how you can help:

### Development Workflow
1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Write tests** for new functionality
5. **Run the test suite** (`npm test`)
6. **Commit your changes** (`git commit -m 'Add amazing feature'`)
7. **Push to the branch** (`git push origin feature/amazing-feature`)
8. **Open a Pull Request**

### Code Style
- **ESLint** configuration for consistent code style
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Conventional Commits** for commit messages

### Areas for Contribution
- 🐛 **Bug Fixes** - Help us squash bugs
- ✨ **New Features** - Add exciting new functionality
- 📚 **Documentation** - Improve docs and examples
- 🎨 **UI/UX** - Enhance the user experience
- ⚡ **Performance** - Optimize for speed and efficiency

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For seamless deployment platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Radix UI** - For accessible component primitives
- **Prisma** - For the excellent ORM
- **Supabase** - For backend-as-a-service platform

## 📞 Support

### Documentation
- **API Documentation** - [/docs/api](./docs/api.md)
- **Component Guide** - [/docs/components](./docs/components.md)
- **Deployment Guide** - [/docs/deployment](./docs/deployment.md)

### Community
- **GitHub Issues** - Report bugs and request features
- **Discussions** - Community discussions and Q&A
- **Discord** - Real-time community chat

### Contact
- **Email**: support@taskflow.com
- **Twitter**: [@TaskFlowApp](https://twitter.com/TaskFlowApp)
- **Website**: [https://taskflow.com](https://taskflow.com)

---

<div align="center">

**Built with ❤️ for productivity enthusiasts**

[🌟 Star this repo](https://github.com/yourusername/task-manager) • [🐛 Report Bug](https://github.com/yourusername/task-manager/issues) • [✨ Request Feature](https://github.com/yourusername/task-manager/issues)

</div>
