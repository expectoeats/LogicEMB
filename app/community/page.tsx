import Link from 'next/link'
import { Users, MessageSquare, TrendingUp, Award, Calendar, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react'

export default function CommunityPage() {
  const features = [
    {
      icon: <MessageSquare className="text-[#E65100]" size={40} />,
      title: 'Discussion Forums',
      description: 'Join active discussions on programming, electronics, and embedded systems. Ask questions and help others.',
      link: '/community/forums',
    },
    {
      icon: <Users className="text-[#E65100]" size={40} />,
      title: 'Study Groups',
      description: 'Connect with learners worldwide. Form study groups and learn together through collaborative projects.',
      link: '/community/groups',
    },
    {
      icon: <TrendingUp className="text-[#E65100]" size={40} />,
      title: 'Weekly Challenges',
      description: 'Participate in coding and hardware challenges. Test your skills and learn from others.',
      link: '/community/challenges',
    },
    {
      icon: <Award className="text-[#E65100]" size={40} />,
      title: 'Show Your Work',
      description: 'Share your projects, circuits, and code. Get feedback and inspire others with your creations.',
      link: '/community/showcase',
    },
  ]

  const stats = [
    { label: 'Active Members', value: '50K+', icon: <Users size={24} /> },
    { label: 'Discussions', value: '12K+', icon: <MessageSquare size={24} /> },
    { label: 'Projects Shared', value: '3.5K+', icon: <Award size={24} /> },
    { label: 'Events', value: '200+', icon: <Calendar size={24} /> },
  ]

  const recentDiscussions = [
    {
      title: 'Best practices for PCB ground plane design',
      author: 'TechEngineer92',
      category: 'PCB Design',
      replies: 24,
      views: 1200,
      time: '2 hours ago',
    },
    {
      title: 'Understanding Python async/await with real examples',
      author: 'CodeMaster',
      category: 'Python',
      replies: 18,
      views: 850,
      time: '5 hours ago',
    },
    {
      title: 'STM32 DMA configuration for high-speed UART',
      author: 'EmbeddedPro',
      category: 'Embedded',
      replies: 32,
      views: 1500,
      time: '1 day ago',
    },
    {
      title: 'JavaScript closure explained with examples',
      author: 'WebDevGuru',
      category: 'JavaScript',
      replies: 15,
      views: 920,
      time: '1 day ago',
    },
  ]

  const upcomingEvents = [
    {
      title: 'Live Q&A: Advanced PCB Design Techniques',
      date: 'Nov 25, 2026',
      time: '10:00 AM EST',
      type: 'Webinar',
    },
    {
      title: 'Weekly Coding Challenge: Algorithm Optimization',
      date: 'Nov 27, 2026',
      time: 'All Day',
      type: 'Challenge',
    },
    {
      title: 'Hardware Meetup: ESP32 IoT Projects',
      date: 'Nov 30, 2026',
      time: '2:00 PM EST',
      type: 'Meetup',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#071A30] to-[#0D2847] text-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join the LogicEMB Community
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Connect with engineers, programmers, and makers worldwide. Share knowledge, collaborate on projects, and grow together.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/community/forums"
                className="px-6 py-3 bg-[#E65100] text-white font-semibold rounded-lg hover:bg-[#BF360C] transition-colors"
              >
                Join Forums
              </Link>
              <Link
                href="/community/showcase"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFF3E0] text-[#E65100] mb-3">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-[#071A30] mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Community Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <Link
                key={idx}
                href={feature.link}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#E65100] hover:shadow-lg transition-all group"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#071A30] mb-2 group-hover:text-[#E65100] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#071A30]">Recent Discussions</h2>
            <Link
              href="/community/forums"
              className="text-sm font-medium text-[#E65100] hover:underline flex items-center gap-1"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-4">
            {recentDiscussions.map((discussion, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[#E65100] hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#E65100] bg-[#E65100]/10 px-2 py-0.5 rounded">
                        {discussion.category}
                      </span>
                      <span className="text-xs text-gray-500">by {discussion.author}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{discussion.time}</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#071A30] mb-2">
                      {discussion.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                      <span>💬 {discussion.replies} replies</span>
                      <span>👁️ {discussion.views} views</span>
                    </div>
                  </div>
                  <MessageSquare className="text-gray-400" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#E65100] hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E65100]/10 text-[#E65100] text-xs font-semibold mb-4">
                  <Calendar size={12} />
                  {event.type}
                </div>
                <h3 className="text-lg font-bold text-[#071A30] mb-3 leading-snug">
                  {event.title}
                </h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>📅 {event.date}</p>
                  <p>⏰ {event.time}</p>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-[#E65100] text-white text-sm font-semibold rounded-lg hover:bg-[#BF360C] transition-colors">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-14 bg-white border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[#071A30] mb-4">Follow Us</h2>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest news, tutorials, and community updates.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#E65100] hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#E65100] hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#E65100] hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
