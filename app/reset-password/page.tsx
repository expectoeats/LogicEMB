'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Lock, Eye, EyeOff, CheckCircle } from 'lucide-react'

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isReset, setIsReset] = useState(false)
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password reset logic here
    console.log('Password reset:', formData)
    setIsReset(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F9F9] to-[#FFFFFF] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/only logo.png"
              alt="LogicEMB"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
          </Link>
          <h1 className="text-3xl font-bold text-[#071A30] mb-2">Reset Password</h1>
          <p className="text-gray-600">Create a new secure password for your account</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          {!isReset ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* New Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-11 pr-11 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65100] focus:border-transparent"
                    placeholder="Create a strong password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-11 pr-11 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65100] focus:border-transparent"
                    placeholder="Confirm your new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs font-semibold text-gray-700 mb-2">Password must contain:</p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    At least 8 characters
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    One uppercase letter
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    One lowercase letter
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    One number or special character
                  </li>
                </ul>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#F4511E] via-[#E65100] to-[#BF360C] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:brightness-105 transition-all"
              >
                Reset Password
              </button>
            </form>
          ) : (
            /* Success Message */
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h2 className="text-xl font-bold text-[#071A30] mb-2">Password Reset Successful!</h2>
              <p className="text-gray-600 mb-6">
                Your password has been reset successfully. You can now login with your new password.
              </p>
              <Link
                href="/login"
                className="inline-block w-full py-3 bg-gradient-to-r from-[#F4511E] via-[#E65100] to-[#BF360C] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:brightness-105 transition-all"
              >
                Continue to Login
              </Link>
            </div>
          )}
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Remember your password?{' '}
            <Link href="/login" className="font-medium text-[#E65100] hover:text-[#BF360C] transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
