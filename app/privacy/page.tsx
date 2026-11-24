import { Shield, Eye, Lock, Database, UserCheck, Bell } from 'lucide-react'

export default function PrivacyPage() {
  const sections = [
    {
      icon: <Database className="text-[#E65100]" size={32} />,
      title: 'Information We Collect',
      content: `We collect information you provide directly to us, such as when you create an account, enroll in courses, 
      participate in forums, or contact us for support. This includes your name, email address, password, profile information, 
      and any other information you choose to provide.`,
    },
    {
      icon: <Eye className="text-[#E65100]" size={32} />,
      title: 'How We Use Your Information',
      content: `We use the information we collect to provide, maintain, and improve our services, including to process 
      transactions, send you technical notices and support messages, respond to your comments and questions, and develop 
      new features and services.`,
    },
    {
      icon: <Lock className="text-[#E65100]" size={32} />,
      title: 'Information Security',
      content: `We take reasonable measures to help protect your personal information from loss, theft, misuse, 
      unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption technologies 
      and secure servers to protect your data.`,
    },
    {
      icon: <UserCheck className="text-[#E65100]" size={32} />,
      title: 'Your Rights and Choices',
      content: `You have the right to access, update, or delete your personal information at any time. You can also 
      opt out of receiving promotional emails from us by following the unsubscribe instructions in those emails. You 
      may also request data portability or deletion of your account.`,
    },
    {
      icon: <Bell className="text-[#E65100]" size={32} />,
      title: 'Cookies and Tracking',
      content: `We use cookies and similar tracking technologies to track activity on our service and hold certain 
      information. Cookies help us understand your preferences and improve your experience. You can instruct your 
      browser to refuse all cookies or indicate when a cookie is being sent.`,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#071A30] to-[#0D2847] text-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <Shield size={16} />
              <span>Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Last updated: November 19, 2026
            </p>
            <p className="text-gray-300 mt-4">
              At LogicEMB, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you use our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#E65100] hover:shadow-lg transition-all"
                >
                  <div className="mb-4">{section.icon}</div>
                  <h3 className="text-xl font-bold text-[#071A30] mb-3">{section.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <h2 className="text-2xl font-bold text-[#071A30] mb-6">Complete Privacy Policy</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">1. Information Collection</h3>
                <p className="text-gray-600 mb-3">
                  We collect several types of information from and about users of our services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Personal identification information (Name, email address, phone number)</li>
                  <li>Account credentials and profile information</li>
                  <li>Course enrollment and progress data</li>
                  <li>Payment and billing information</li>
                  <li>Usage data and analytics</li>
                  <li>Device and browser information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">2. How We Use Information</h3>
                <p className="text-gray-600 mb-3">
                  We use the collected information for various purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>To provide and maintain our services</li>
                  <li>To process your transactions and manage your account</li>
                  <li>To send you course updates and educational content</li>
                  <li>To improve and personalize your learning experience</li>
                  <li>To communicate with you about our services</li>
                  <li>To detect, prevent, and address technical issues</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">3. Information Sharing</h3>
                <p className="text-gray-600 mb-3">
                  We do not sell your personal information. We may share your information only in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>With your consent or at your direction</li>
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">4. Data Retention</h3>
                <p className="text-gray-600">
                  We retain your personal information for as long as necessary to provide our services and fulfill the 
                  purposes outlined in this policy. When you delete your account, we will delete or anonymize your 
                  personal information within 90 days, unless we are required to retain it for legal purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">5. Your Rights</h3>
                <p className="text-gray-600 mb-3">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Access: Request a copy of your personal data</li>
                  <li>Correction: Update or correct inaccurate information</li>
                  <li>Deletion: Request deletion of your personal data</li>
                  <li>Portability: Receive your data in a structured format</li>
                  <li>Objection: Object to processing of your personal data</li>
                  <li>Withdrawal: Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">6. Children's Privacy</h3>
                <p className="text-gray-600">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal 
                  information from children under 13. If you are a parent or guardian and believe your child has provided 
                  us with personal information, please contact us.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">7. Changes to Privacy Policy</h3>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                  new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this 
                  Privacy Policy periodically for any changes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">8. Contact Us</h3>
                <p className="text-gray-600 mb-3">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-none space-y-2 text-gray-600">
                  <li>Email: privacy@logicemb.com</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Address: 123 Tech Street, Silicon Valley, CA 94025</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#071A30] mb-4">
              Have Questions About Your Privacy?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help you understand how we protect your data.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#F4511E] via-[#E65100] to-[#BF360C] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:brightness-105 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
