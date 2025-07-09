import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckSquare, 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Zap, 
  Calendar, 
  Shield,
  Play,
  Github,
  Twitter,
  Linkedin,
  Award,
  Clock,
  Target,
  BarChart3,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {  const features = [
    {
      icon: CheckSquare,
      title: 'Smart Task Management',
      description: 'Organize, prioritize, and track your tasks with AI-powered automation and intelligent suggestions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into your productivity patterns with beautiful charts and actionable recommendations.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Never miss a deadline with AI-powered scheduling and intelligent due date predictions.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless teamwork with real-time collaboration, shared workspaces, and instant notifications.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Blazing fast experience with instant sync, offline support, and sub-second response times.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption, SOC 2 compliance, and advanced privacy controls for your peace of mind.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Users', icon: Users },
    { number: '1M+', label: 'Tasks Completed', icon: CheckSquare },
    { number: '99.9%', label: 'Uptime', icon: Clock },
    { number: '4.9/5', label: 'User Rating', icon: Star }
  ];
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager at TechCorp',
      content: 'TaskFlow has completely transformed how I manage my daily tasks. The AI suggestions are incredibly accurate and the interface is absolutely beautiful.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      role: 'Software Developer',
      content: 'The analytics features help me understand my productivity patterns better than any other tool. The team collaboration features are a game-changer.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Davis',
      role: 'Freelance Designer',
      content: 'Perfect for managing multiple client projects. The priority system and smart scheduling keep me focused on what matters most. Highly recommended!',
      rating: 5,
      avatar: 'ED'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50 overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Enhanced Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-400/30 to-orange-600/30 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/20 to-blue-600/20 rounded-full blur-2xl animate-pulse [animation-delay:2s]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce [animation-delay:0.5s]"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:1.5s]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-pink-400 rounded-full animate-bounce [animation-delay:2.5s]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 mb-6 animate-fadeInUp border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              New: AI-Powered Task Suggestions
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 mb-8 animate-fadeInUp leading-tight">
              Master Your
              <span className="block text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Productivity
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2">
                Like Never Before
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto animate-fadeInUp stagger-1 leading-relaxed">
              Transform chaos into clarity with TaskFlow's intelligent task management. 
              <span className="block mt-2 font-medium text-gray-700">
                Beautiful design meets powerful productivity.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp stagger-2 mb-16">
              <Link href="/login">
                <Button size="lg" className="px-10 py-5 text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-xl">
                  Start Your Journey
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-10 py-5 text-lg font-semibold border-2 border-gray-300 hover:bg-white hover:border-gray-400 rounded-xl group">
                <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fadeInUp stagger-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>          {/* Interactive Dashboard Preview */}
          <div className="mt-24 animate-fadeInUp stagger-4">
            <div className="relative mx-auto max-w-6xl">
              <div className="relative rounded-3xl shadow-4xl overflow-hidden bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-lg border border-white/30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5"></div>
                
                {/* Mock Dashboard Interface */}
                <div className="relative p-8">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <CheckSquare className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">TaskFlow Dashboard</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Live Preview</span>
                    </div>
                  </div>

                  {/* Stats Cards Row */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200/50">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckSquare className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-medium text-blue-600">Tasks</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">24</div>
                      <div className="text-xs text-gray-600">+3 today</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border border-green-200/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-green-600" />
                        <span className="text-xs font-medium text-green-600">Completed</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">18</div>
                      <div className="text-xs text-gray-600">75% rate</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-purple-600" />
                        <span className="text-xs font-medium text-purple-600">Time</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">6.5h</div>
                      <div className="text-xs text-gray-600">Today</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200/50">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-orange-600" />
                        <span className="text-xs font-medium text-orange-600">Productivity</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">92%</div>
                      <div className="text-xs text-gray-600">+8% week</div>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="grid grid-cols-3 gap-6">
                    {/* Task List */}
                    <div className="col-span-2 bg-white/70 rounded-xl p-5 border border-gray-200/50">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">Recent Tasks</h4>
                        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View all</button>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-gray-50/70 rounded-lg border border-gray-100">
                          <div className="w-4 h-4 bg-green-500 rounded border-2 border-white shadow-sm"></div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">Review Q4 Marketing Strategy</div>
                            <div className="text-xs text-gray-500">Due: Tomorrow</div>
                          </div>
                          <div className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">High</div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-gray-50/70 rounded-lg border border-gray-100">
                          <div className="w-4 h-4 bg-blue-500 rounded border-2 border-white shadow-sm"></div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">Update project documentation</div>
                            <div className="text-xs text-gray-500">Due: Friday</div>
                          </div>
                          <div className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Medium</div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-gray-50/70 rounded-lg border border-gray-100">
                          <div className="w-4 h-4 border-2 border-gray-300 rounded bg-white"></div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">Team standup meeting</div>
                            <div className="text-xs text-gray-500">Due: Next week</div>
                          </div>
                          <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Low</div>
                        </div>
                      </div>
                    </div>

                    {/* Analytics Panel */}
                    <div className="bg-white/70 rounded-xl p-5 border border-gray-200/50">
                      <h4 className="font-semibold text-gray-900 mb-4">Weekly Progress</h4>
                      
                      {/* Mini Chart */}
                      <div className="mb-4">
                        <div className="flex items-end gap-1 h-20">
                          <div className="w-4 bg-blue-200 rounded-t" style={{height: '40%'}}></div>
                          <div className="w-4 bg-blue-300 rounded-t" style={{height: '60%'}}></div>
                          <div className="w-4 bg-blue-400 rounded-t" style={{height: '80%'}}></div>
                          <div className="w-4 bg-blue-500 rounded-t" style={{height: '100%'}}></div>
                          <div className="w-4 bg-blue-600 rounded-t" style={{height: '75%'}}></div>
                          <div className="w-4 bg-blue-400 rounded-t" style={{height: '90%'}}></div>
                          <div className="w-4 bg-blue-300 rounded-t" style={{height: '65%'}}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                          <span>Mon</span>
                          <span>Sun</span>
                        </div>
                      </div>
                      
                      {/* Quick Stats */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Completion Rate</span>
                          <span className="text-sm font-semibold text-green-600">87%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Avg. Task Time</span>
                          <span className="text-sm font-semibold text-blue-600">2.3h</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Focus Score</span>
                          <span className="text-sm font-semibold text-purple-600">94/100</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Elements */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                        <CheckSquare className="w-4 h-4" />
                        Add Task
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                        <BarChart3 className="w-4 h-4" />
                        Analytics
                      </button>
                    </div>
                    
                    <div className="text-center">
                      <Link href="/dashboard" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium transform hover:scale-105 shadow-lg">
                        <Play className="w-4 h-4" />
                        Try Live Demo
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Features Section */}
      <section id="features" className="py-32 bg-gradient-to-b from-white/50 to-gray-50/50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
              <Award className="w-4 h-4" />
              Award-Winning Features
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to
              <span className="block text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                supercharge productivity
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Powerful features designed to help you focus on what matters most, 
              with intelligent automation that learns from your habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="group p-8 card-hover bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl animate-scaleIn rounded-2xl relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <CardContent className="p-0 relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Feature highlight */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium">
              <Target className="w-5 h-5" />
              <span>Join 50,000+ productivity enthusiasts</span>
            </div>
          </div>
        </div>
      </section>      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-gradient-to-b from-gray-50/50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full text-sm font-medium text-yellow-800 mb-6">
              <Star className="w-4 h-4 fill-current" />
              4.9/5 Customer Rating
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Loved by thousands of
              <span className="block text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                productivity enthusiasts
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our community has to say about their TaskFlow experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group p-8 card-hover bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl animate-slideInRight rounded-2xl relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="absolute inset-[1px] bg-white rounded-2xl"></div>
                
                <CardContent className="p-0 relative">
                  {/* Avatar and Rating */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-20 text-center">
            <p className="text-sm text-gray-500 mb-6">Trusted by teams at</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-bold text-gray-400">TechCorp</div>
              <div className="text-lg font-bold text-gray-400">StartupXYZ</div>
              <div className="text-lg font-bold text-gray-400">DesignCo</div>
              <div className="text-lg font-bold text-gray-400">DevStudio</div>
            </div>
          </div>
        </div>
      </section>      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 md:p-16 border border-white/20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white mb-8">
              <Sparkles className="w-4 h-4" />
              Limited Time: 50% Off Premium
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to transform
              <span className="block">your productivity?</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join over 50,000 professionals who have revolutionized their workflow with TaskFlow. 
              <span className="block mt-2 font-medium">Start your productivity journey today.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link href="/login">
                <Button size="lg" className="px-12 py-6 text-xl font-bold bg-white text-blue-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-xl">
                  Start Free Trial
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-12 py-6 text-xl font-bold border-2 border-white text-white hover:bg-white/10 rounded-xl">
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex justify-center items-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-5 h-5" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <CheckSquare className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">TaskFlow</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
                The modern way to manage tasks and boost productivity. 
                Trusted by professionals worldwide.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Product */}
            <div>
              <h4 className="font-bold mb-6 text-lg">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link href="/tasks" className="hover:text-white transition-colors">Tasks</Link></li>
                <li><Link href="/analytics" className="hover:text-white transition-colors">Analytics</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="font-bold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <p>&copy; 2025 TaskFlow. All rights reserved.</p>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">Made with</span>
              <span className="text-red-400">❤️</span>
              <span className="text-sm text-gray-400">for productivity enthusiasts</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
