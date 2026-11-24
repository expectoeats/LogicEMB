'use client'

import { useState } from 'react'
import { Mail, CheckCircle, TrendingUp, BookOpen, Zap, Users } from 'lucide-react'

export default function NewsletterPage() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    interests: [] as string[],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter subscription:', formData)
    setIsSubscribed(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleInterestToggle = (interest: string) => {
    const newInterests = formData.interests.includes(interest)
      ? formData.interests.filter((i) => i !== interest)
      : [...formData.interests, interest]
    setFormData({ ...formData, interests: newInterests })
  }

  const benefits = [
    {
      icon: <TrendingUp className="text-[#E65100]" size={32} />,
      title: 'Weekly Updates',
      description: 'Get the latest tutorials, courses, and tech news every week.',
    },
    {
      icon: <BookOpen className="text-[#E65100]" size={32} />,
      title: 'Exclusive Content',
      description: 'Access premium resources and early releases before anyone else.',
    },
    {
      icon: <Zap className="text-[#E65100]" size={32} />,
      title: 'Tips & Tricks',
      description: 'Learn productivity hacks and best practices from experts.',
    },
    {
      icon: <Users className="text-[#E65100]" size={32} />,
      title: 'Community Access',
      description: 'Join exclusive webinars and community events.',
    },
  ]

  const interests = [
    'Python Programming',
    'JavaScript & Web Dev',
    'C/C++ & Embedded',
    'Electronics & PCB',
    'Microcontrollers',
    'IoT & Hardware',
  ]

  const stats = [
    { value: '50K+', label: 'Subscribers' },
    { value: '98%', label: 'Open Rate' },
    { value: 'Weekly', label: 'Frequency' },
    { value: 'Free', label: 'Forever' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E65100] to-[#FF9418] text-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-6">
              <Mail size={16} />
              <span>Stay Connected</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our Newsletter
            </h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Get weekly updates on programming, electronics, and embedded systems. Join 50,000+ engineers and developers learning with LogicEMB.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#071A30] mb-3">Why Subscribe?</h2>
            <p className="text-gray-600">Here's what you'll get every week</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#E65100] hover:shadow-lg transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FFF3E0] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-[#071A30] mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {!isSubscribed ? (
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#071A30] mb-3">Subscribe Now</h2>
                  <p className="text-gray-600">Join our community and never miss an update</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65100] focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65100] focus:border-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Select Your Interests
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {interests.map((interest) => (
                        <label
                          key={interest}
                          className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-all ${
                            formData.interests.includes(interest)
                              ? 'border-[#E65100] bg-[#FFF3E0]'
                              : 'border-gray-300 hover:border-[#E65100]'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestToggle(interest)}
                            className="w-4 h-4 text-[#E65100] border-gray-300 rounded focus:ring-[#E65100]"
                          />
                          <span className="text-sm font-medium text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Privacy */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      By subscribing, you agree to receive weekly emails from LogicEMB. We respect your privacy and will never share your information. You can unsubscribe anytime.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-[#F4511E] via-[#E65100] to-[#BF360C] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:brightness-105 transition-all flex items-center justify-center gap-2"
                  >
                    <Mail size={20} />
                    Subscribe to Newsletter
                  </button>
                </form>
              </div>
            ) : (
              /* Success Message */
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h2 className="text-3xl font-bold text-[#071A30] mb-3">You're Subscribed!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for subscribing to our newsletter. Check your inbox for a confirmation email.
                </p>
                <div className="bg-[#FFF3E0] rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>What's next?</strong> You'll receive your first newsletter within 24 hours with handpicked tutorials, courses, and tech news.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recent Newsletters */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#071A30] mb-3">Recent Newsletters</h2>
            <p className="text-gray-600">See what our subscribers are reading</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Week 47: Advanced PCB Design Techniques',
                date: 'Nov 15, 2026',
                topics: ['PCB Design', 'Signal Integrity', 'Tools'],
              },
              {
                title: 'Week 46: Python for Data Analysis',
                date: 'Nov 8, 2026',
                topics: ['Python', 'Data Science', 'Libraries'],
              },
              {
                title: 'Week 45: STM32 DMA Deep Dive',
                date: 'Nov 1, 2026',
                topics: ['Embedded', 'STM32', 'Programming'],
              },
            ].map((newsletter, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#E65100] hover:shadow-lg transition-all"
              >
                <p className="text-xs text-gray-500 mb-2">{newsletter.date}</p>
                <h3 className="font-bold text-[#071A30] mb-3 leading-snug">{newsletter.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {newsletter.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-2 py-1 bg-[#FFF3E0] text-[#E65100] rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
