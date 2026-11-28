'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Mail, Calendar, Clock, Shield } from 'lucide-react'
import { getUser, type UserItem } from '@/lib/admin/data-manager'

export default function UserDetailPage() {
  const router = useRouter()
  const params = useParams()
  const [user, setUser] = useState<UserItem | null>(null)

  useEffect(() => {
    const userData = getUser(params.id as string)
    if (userData) setUser(userData)
  }, [params.id])

  if (!user) {
    return <div className="text-center py-12">Loading...</div>
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* User Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center font-bold text-3xl text-gray-600">
            {user.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#071A30] mb-2">{user.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Mail size={16} />
                {user.email}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                Joined {user.joinedAt}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                Last login {user.lastLogin}
              </span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <span
                className={`inline-block px-3 py-1 text-sm rounded ${
                  user.role === 'Admin'
                    ? 'bg-purple-100 text-purple-800'
                    : user.role === 'Editor'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <Shield size={14} className="inline mr-1" />
                {user.role}
              </span>
              <span
                className={`inline-block px-3 py-1 text-sm rounded ${
                  user.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : user.status === 'Blocked'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {user.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Activity */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-[#071A30] mb-4">Recent Activity</h2>
        <div className="space-y-3 text-sm text-gray-600">
          <p>No activity recorded yet.</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Back to Users
        </button>
      </div>
    </div>
  )
}
