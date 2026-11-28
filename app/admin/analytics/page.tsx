'use client'

import { useEffect, useState } from 'react'
import { Users, BookOpen, FileText, Folder, TrendingUp } from 'lucide-react'
import { StatsCard } from '@/components/admin/StatsCard'
import { getCourses, getTutorials, getProjects, getUsers } from '@/lib/admin/data-manager'

export default function AnalyticsPage() {
  const [stats, setStats] = useState({
    totalContent: 0,
    totalUsers: 0,
    totalViews: 0,
    engagementRate: '0%',
  })

  const [topTutorials, setTopTutorials] = useState<{ title: string; views: number }[]>([])

  useEffect(() => {
    const courses = getCourses()
    const tutorials = getTutorials()
    const projects = getProjects()
    const users = getUsers()

    setStats({
      totalContent: courses.length + tutorials.length + projects.length,
      totalUsers: users.length,
      totalViews: 12450, // Mock data
      engagementRate: '68%',
    })

    // Mock top tutorials
    setTopTutorials([
      { title: 'PCB Design Fundamentals', views: 2340 },
      { title: 'ESP32 WiFi Programming', views: 1890 },
      { title: 'STM32 DMA Tutorial', views: 1560 },
      { title: 'Python for Automation', views: 1340 },
      { title: 'Advanced Signal Integrity', views: 1120 },
    ])
  }, [])

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Content"
          value={stats.totalContent}
          icon={Folder}
          color="bg-blue-500"
        />
        <StatsCard
          title="Total Users"
          value={stats.totalUsers}
          icon={Users}
          color="bg-green-500"
        />
        <StatsCard
          title="Total Views"
          value={stats.totalViews.toLocaleString()}
          change="+24.5%"
          icon={TrendingUp}
          color="bg-purple-500"
        />
        <StatsCard
          title="Engagement Rate"
          value={stats.engagementRate}
          change="+5.2%"
          icon={BookOpen}
          color="bg-orange-500"
        />
      </div>

      {/* Top Tutorials by Views */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-[#071A30] mb-6">Top Tutorials by Views</h3>
        <div className="space-y-4">
          {topTutorials.map((tutorial, index) => {
            const maxViews = topTutorials[0].views
            const percentage = (tutorial.views / maxViews) * 100
            return (
              <div key={index}>
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="font-medium text-gray-900">{tutorial.title}</span>
                  <span className="text-gray-600">{tutorial.views.toLocaleString()} views</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#E65100] h-2 rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Content by Category */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-[#071A30] mb-6">Content by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { category: 'PCB Design', count: 12, color: 'bg-blue-500' },
            { category: 'Embedded Systems', count: 18, color: 'bg-green-500' },
            { category: 'Python', count: 8, color: 'bg-yellow-500' },
            { category: 'Electronics', count: 15, color: 'bg-purple-500' },
            { category: 'Microcontrollers', count: 11, color: 'bg-red-500' },
            { category: 'IoT', count: 7, color: 'bg-pink-500' },
          ].map((item) => (
            <div key={item.category} className="p-4 border border-gray-200 rounded-lg">
              <div className={`w-10 h-10 ${item.color} rounded-lg mb-3`} />
              <p className="text-sm font-medium text-gray-900">{item.category}</p>
              <p className="text-2xl font-bold text-[#071A30]">{item.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
