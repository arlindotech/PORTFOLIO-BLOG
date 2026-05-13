import { useState } from 'react';
import { BarChart3, FileText, Users, MessageSquare, Settings, TrendingUp, Eye, MessageCircle, ArrowUp, ArrowDown, Clock, Bell, LayoutDashboard, FolderOpen, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { blogPosts, projects } from '../data/portfolioData';

type AdminTab = 'dashboard' | 'posts' | 'projects' | 'messages' | 'settings';

export default function Admin() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [messages] = useState([
    { id: 1, name: 'Dr. Francisco M.', email: 'francisco@cmn.gov.mz', subject: 'Systems Analysis Consultation', message: 'We need your expertise on...', date: '2025-01-15', read: false },
    { id: 2, name: 'Prof. Ana R.', email: 'ana@ua-isclosed.ac.mz', subject: 'Thesis Discussion', message: 'Regarding your research on IT impact...', date: '2025-01-14', read: false },
    { id: 3, name: 'Carlos N.', email: 'carlos@cmn.gov.mz', subject: 'Network Configuration', message: 'Need help with DHCP setup...', date: '2025-01-13', read: true },
    { id: 4, name: 'Maria T.', email: 'maria@cmn.gov.mz', subject: 'Database Design Request', message: 'We need a new database for...', date: '2025-01-12', read: true },
  ]);

  const tabs = [
    { id: 'dashboard' as AdminTab, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'posts' as AdminTab, label: 'Blog Posts', icon: FileText },
    { id: 'projects' as AdminTab, label: 'Projects', icon: FolderOpen },
    { id: 'messages' as AdminTab, label: 'Messages', icon: MessageSquare },
    { id: 'settings' as AdminTab, label: 'Settings', icon: Settings },
  ];

  const analyticsData = [
    { label: 'Page Views', value: '12,450', change: '+12.5%', up: true, icon: Eye, color: 'text-blue-400' },
    { label: 'Blog Reads', value: '3,280', change: '+8.2%', up: true, icon: FileText, color: 'text-emerald-400' },
    { label: 'Messages', value: '48', change: '+23.1%', up: true, icon: MessageCircle, color: 'text-purple-400' },
    { label: 'Followers', value: '1,250', change: '+5.4%', up: true, icon: Users, color: 'text-pink-400' },
  ];

  const recentActivity = [
    { text: 'New comment on "Building Scalable React"', time: '2 hours ago', icon: MessageCircle },
    { text: 'Portfolio viewed by recruiter from Google', time: '4 hours ago', icon: Eye },
    { text: 'New blog post published', time: '1 day ago', icon: FileText },
    { text: 'Project "E-Commerce Platform" updated', time: '2 days ago', icon: FolderOpen },
    { text: 'New certification added: AWS Cloud Practitioner', time: '3 days ago', icon: Award },
    { text: 'Message from Sarah Chen', time: '3 days ago', icon: MessageSquare },
  ];

  const chartBars = [40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className={`text-2xl md:text-3xl font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Admin Dashboard
            </h1>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Welcome back, ArlindoTech! Here's your overview.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className={`p-2 rounded-lg relative ${isDark ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold">AT</div>
              <span className={`text-sm font-medium hidden sm:block ${isDark ? 'text-white' : 'text-gray-900'}`}>ArlindoTech</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-56 flex-shrink-0">
            <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === id
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                      : isDark ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Analytics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {analyticsData.map(({ label, value, change, up, icon: Icon, color }) => (
                    <div key={label} className="glass-card rounded-xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <Icon size={20} className={color} />
                        <span className={`text-xs font-medium flex items-center gap-1 ${up ? 'text-emerald-400' : 'text-red-400'}`}>
                          {up ? <ArrowUp size={10} /> : <ArrowDown size={10} />} {change}
                        </span>
                      </div>
                      <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{value}</div>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</p>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      <BarChart3 size={18} className="inline mr-2 text-primary-400" />
                      Visitor Analytics
                    </h2>
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Last 12 months</span>
                  </div>
                  <div className="flex items-end gap-2 h-48">
                    {chartBars.map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full rounded-t-md bg-gradient-to-t from-primary-500 to-accent-500 transition-all hover:opacity-80"
                          style={{ height: `${height}%` }}
                        />
                        <span className={`text-[10px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{months[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="glass-card rounded-xl p-6">
                  <h2 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <TrendingUp size={18} className="inline mr-2 text-primary-400" />
                    Recent Activity
                  </h2>
                  <div className="space-y-3">
                    {recentActivity.map((activity, i) => (
                      <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'} transition-colors`}>
                        <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                          <activity.icon size={14} className="text-primary-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm truncate ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{activity.text}</p>
                          <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'posts' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <FileText size={18} className="inline mr-2 text-primary-400" />
                    Blog Posts ({blogPosts.length})
                  </h2>
                  <button className="btn-primary text-sm">+ New Post</button>
                </div>
                <div className="glass-card rounded-xl overflow-hidden">
                  {blogPosts.map((post, i) => (
                    <div key={post.id} className={`flex items-center gap-4 p-4 ${i > 0 ? `border-t ${isDark ? 'border-white/5' : 'border-gray-100'}` : ''}`}>
                      <span className="text-2xl">{post.image}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-medium text-sm truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>{post.title}</h3>
                        <div className={`flex items-center gap-3 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                          <span>{post.category}</span>
                          <span className="flex items-center gap-1"><Clock size={10} />{post.readingTime} min</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {post.featured && <span className="text-xs px-2 py-1 rounded-full bg-yellow-400/20 text-yellow-400">⭐ Featured</span>}
                        <button className={`text-xs px-3 py-1.5 rounded-lg ${isDark ? 'bg-white/5 text-gray-400 hover:bg-white/10' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>Edit</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <FolderOpen size={18} className="inline mr-2 text-primary-400" />
                    Projects ({projects.length})
                  </h2>
                  <button className="btn-primary text-sm">+ New Project</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project) => (
                    <div key={project.id} className="glass-card rounded-xl p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{project.image}</span>
                          <div>
                            <h3 className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                            <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{project.category} • {project.date}</span>
                          </div>
                        </div>
                        {project.featured && <span className="text-xs text-yellow-400">⭐</span>}
                      </div>
                      <p className={`text-xs mb-3 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map(t => (
                          <span key={t} className={`text-[10px] px-1.5 py-0.5 rounded ${isDark ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>{t}</span>
                        ))}
                      </div>
                      <button className={`text-xs px-3 py-1.5 rounded-lg ${isDark ? 'bg-white/5 text-gray-400 hover:bg-white/10' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>Edit Project</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="space-y-6">
                <h2 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <MessageSquare size={18} className="inline mr-2 text-primary-400" />
                  Recruiter Messages ({messages.length})
                </h2>
                <div className="glass-card rounded-xl overflow-hidden">
                  {messages.map((msg, i) => (
                    <div key={msg.id} className={`flex items-center gap-4 p-4 ${i > 0 ? `border-t ${isDark ? 'border-white/5' : 'border-gray-100'}` : ''} ${!msg.read ? (isDark ? 'bg-primary-500/5' : 'bg-primary-50') : ''}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${isDark ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-700'}`}>
                        {msg.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{msg.name}</h3>
                          {!msg.read && <span className="w-2 h-2 rounded-full bg-primary-400" />}
                        </div>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{msg.subject}</p>
                        <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{msg.email} • {msg.date}</p>
                      </div>
                      <button className={`text-xs px-3 py-1.5 rounded-lg ${isDark ? 'bg-white/5 text-gray-400 hover:bg-white/10' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>View</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <Settings size={18} className="inline mr-2 text-primary-400" />
                  Settings
                </h2>
                <div className="glass-card rounded-xl p-6 space-y-6">
                  {[
                    { label: 'Profile Name', value: 'ArlindoTech', type: 'text' },
                    { label: 'Email', value: 'hello@arlindotech.dev', type: 'email' },
                    { label: 'Location', value: 'Maputo, Mozambique', type: 'text' },
                    { label: 'Website', value: 'https://arlindotech.dev', type: 'url' },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className={`text-sm font-medium mb-1.5 block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{field.label}</label>
                      <input
                        type={field.type}
                        defaultValue={field.value}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none ${
                          isDark ? 'bg-white/5 border border-white/10 text-white' : 'bg-white border border-gray-200 text-gray-900'
                        }`}
                      />
                    </div>
                  ))}
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Available for Hire</span>
                    <div className="w-12 h-6 bg-emerald-400 rounded-full relative cursor-pointer">
                      <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email Notifications</span>
                    <div className="w-12 h-6 bg-emerald-400 rounded-full relative cursor-pointer">
                      <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full" />
                    </div>
                  </div>
                  <button className="btn-primary text-sm">Save Changes</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
