'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle forgot password logic here
    console.log('Reset email sent to:', email)
    setIsSubmitted(true)
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
          <h1 className="text-3xl font-bold text-[#071A30] mb-2">Forgot Password?</h1>
          <p className="text-gray-600">No worries, we'll send you reset instructions</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          {!isSubmitted ? (
            <>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65100] focus:border-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Enter the email address associated with your account
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#F4511E] via-[#E65100] to-[#BF360C] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:brightness-105 transition-all"
                >
                  Send Reset Instructions
                </button>
              </form>

              {/* Back to Login */}
              <Link
                href="/login"
                className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:text-[#E65100] transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Login
              </Link>
            </>
          ) : (
            /* Success Message */
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h2 className="text-xl font-bold text-[#071A30] mb-2">Check Your Email</h2>
              <p className="text-gray-600 mb-6">
                We've sent password reset instructions to <span className="font-semibold text-[#071A30]">{email}</span>
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 mb-3">
                  Didn't receive the email? Check your spam folder or:
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm font-medium text-[#E65100] hover:text-[#BF360C] transition-colors"
                >
                  Try another email address
                </button>
              </div>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#E65100] transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Login
              </Link>
            </div>
          )}
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Need help?{' '}
            <Link href="/contact" className="font-medium text-[#E65100] hover:text-[#BF360C] transition-colors">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
