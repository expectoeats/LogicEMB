'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, AlertCircle } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Default admin credentials (for demo)
  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123',
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (
        formData.username === ADMIN_CREDENTIALS.username &&
        formData.password === ADMIN_CREDENTIALS.password
      ) {
        // Set admin logged in flag
        localStorage.setItem('admin_logged_in', 'true')
        localStorage.setItem('admin_user', JSON.stringify({
          username: formData.username,
          name: 'Admin User',
          role: 'Administrator',
        }))
        
        // Redirect to admin dashboard
        router.push('/admin')
      } else {
        setError('Incorrect username or password')
        setLoading(false)
      }
    }, 400)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#071A30] p-12 flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-[#E65100] rounded flex items-center justify-center font-bold">
              L
            </div>
            <span className="text-xl font-semibold">LogicEMB</span>
          </div>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white leading-tight">
            Admin Dashboard
          </h1>
          <p className="text-gray-400 text-lg">
            Manage courses, tutorials, projects and users from one place.
          </p>
        </div>

        <div className="text-gray-500 text-sm">
          © 2026 LogicEMB. All rights reserved.
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Back to website</span>
          </button>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Sign in to admin
            </h2>
            <p className="text-gray-600">
              Enter your credentials to continue
            </p>
          </div>

          {/* Demo Badge */}
          <div className="mb-6 p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Demo credentials</p>
            <div className="flex items-center justify-between">
              <code className="text-sm text-gray-900">admin / admin123</code>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertCircle className="text-red-600" size={16} />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1.5">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E65100] focus:border-transparent transition-shadow"
                placeholder="admin"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E65100] focus:border-transparent transition-shadow"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-[#E65100] hover:bg-[#D84315] text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          {/* Mobile Footer */}
          <div className="lg:hidden mt-12 text-center text-sm text-gray-500">
            © 2026 LogicEMB
          </div>
        </div>
      </div>
    </div>
  )
}
