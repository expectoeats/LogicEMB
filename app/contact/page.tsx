'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form:', formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', category: 'general', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: <Mail className="text-[#E65100]" size={24} />,
      title: 'Email Us',
      info: 'support@logicemb.com',
      description: 'Send us an email anytime!',
    },
    {
      icon: <Phone className="text-[#E65100]" size={24} />,
      title: 'Call Us',
      info: '82330 82230',
      description: 'Mon-Fri from 9am to 6pm EST',
    },
    {
      icon: <MapPin className="text-[#E65100]" size={24} />,
      title: 'Visit Us',
      info: 'Noida, Uttar Pradesh',
      description: 'India',
    },
    {
      icon: <Clock className="text-[#E65100]" size={24} />,
      title: 'Response Time',
      info: 'Within 24 hours',
      description: 'We reply to all inquiries',
    },
  ]

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'courses', label: 'Course Related' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'feedback', label: 'Feedback' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#071A30] to-[#0D2847] text-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <MessageSquare size={16} />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Have a question or need help? We're here to assist you. Reach out to us through any of the channels below or fill out the contact form.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#E65100] hover:shadow-lg transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FFF3E0] mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#071A30] mb-2">{item.title}</h3>
                <p className="text-sm font-semibold text-[#E65100] mb-1">{item.info}</p>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#071A30] mb-3">Send Us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Category & Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                        Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65100] focus:border-transparent"
                        required
                      >
                        {categories.map((cat) => (
                          <option key={cat.value} value={cat.value}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65100] focus:border-transparent"
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65100] focus:border-transparent resize-none"
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-[#F4511E] via-[#E65100] to-[#BF360C] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:brightness-105 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              ) : (
                /* Success Message */
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#071A30] mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#071A30] mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How long does it take to get a response?',
                a: 'We typically respond within 24 hours during business days. For urgent matters, please call us directly.',
              },
              {
                q: 'Are the courses really free?',
                a: 'Yes! All our basic courses and tutorials are completely free. We also offer premium courses with advanced content.',
              },
              {
                q: 'Can I get a certificate after completing courses?',
                a: 'Yes, certificates are available for completed courses. You can download them from your dashboard.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'We offer a 30-day money-back guarantee on all premium courses. No questions asked.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-[#071A30] mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
