'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Plus, Users, BookOpen, FileText, Folder, Eye, Clock } from 'lucide-react'
import { StatsCard } from '@/components/admin/StatsCard'
import { getCourses, getTutorials, getProjects, getUsers } from '@/lib/admin/data-manager'
import type { UserItem, TutorialItem } from '@/lib/admin/data-manager'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    tutorials: 0,
    courses: 0,
    projects: 0,
  })
  const [recentUsers, setRecentUsers] = useState<UserItem[]>([])
  const [recentTutorials, setRecentTutorials] = useState<TutorialItem[]>([])

  useEffect(() => {
    // Load stats
    const courses = getCourses()
    const tutorials = getTutorials()
    const projects = getProjects()
    const users = getUsers()

    setStats({
      users: users.length,
      tutorials: tutorials.length,
      courses: courses.length,
      projects: projects.length,
    })

    // Load recent users (last 5)
    const sortedUsers = [...users].sort(
      (a, b) => new Date(b.joinedAt).getTime() - new Date(a.joinedAt).getTime()
    )
    setRecentUsers(sortedUsers.slice(0, 5))

    // Load recent tutorials (last 5)
    const sortedTutorials = [...tutorials].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    setRecentTutorials(sortedTutorials.slice(0, 5))
  }, [])

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value={stats.users}
          change="+12.5%"
          icon={Users}
          color="bg-blue-500"
        />
        <StatsCard
          title="Total Tutorials"
          value={stats.tutorials}
          change="+8.2%"
          icon={BookOpen}
          color="bg-green-500"
        />
        <StatsCard
          title="Total Courses"
          value={stats.courses}
          change="+5.1%"
          icon={FileText}
          color="bg-purple-500"
        />
        <StatsCard
          title="Active Projects"
          value={stats.projects}
          change="+15.3%"
          icon={Folder}
          color="bg-orange-500"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-[#071A30] mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/admin/courses/add"
            className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:border-[#E65100] hover:bg-orange-50 transition-colors"
          >
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Plus className="text-purple-600" size={20} />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">Add Course</p>
              <p className="text-xs text-gray-500">Create new course</p>
            </div>
          </Link>
          <Link
            href="/admin/tutorials/add"
            className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:border-[#E65100] hover:bg-orange-50 transition-colors"
          >
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Plus className="text-green-600" size={20} />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">Add Tutorial</p>
              <p className="text-xs text-gray-500">Create new tutorial</p>
            </div>
          </Link>
          <Link
            href="/admin/projects/add"
            className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:border-[#E65100] hover:bg-orange-50 transition-colors"
          >
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Plus className="text-orange-600" size={20} />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">Add Project</p>
              <p className="text-xs text-gray-500">Create new project</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#071A30]">Recent Users</h3>
            <Link
              href="/admin/users"
              className="text-[#E65100] text-sm font-medium hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    user.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : user.status === 'Blocked'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {user.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Tutorials */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#071A30]">Recent Tutorials</h3>
            <Link
              href="/admin/tutorials"
              className="text-[#E65100] text-sm font-medium hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentTutorials.map((tutorial) => (
              <div key={tutorial.id} className="py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm text-gray-900 line-clamp-1">
                    {tutorial.title}
                  </h4>
                  <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 font-medium whitespace-nowrap ml-2">
                    {tutorial.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {tutorial.readTime}
                  </span>
                  <span>{tutorial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
