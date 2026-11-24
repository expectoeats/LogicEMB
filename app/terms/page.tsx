import { FileText, CheckCircle, AlertTriangle, Scale, Users, Shield } from 'lucide-react'

export default function TermsPage() {
  const highlights = [
    {
      icon: <CheckCircle className="text-[#E65100]" size={32} />,
      title: 'Acceptance of Terms',
      description: 'By accessing and using LogicEMB, you accept and agree to be bound by these Terms of Service.',
    },
    {
      icon: <Users className="text-[#E65100]" size={32} />,
      title: 'User Accounts',
      description: 'You are responsible for maintaining the confidentiality of your account and all activities under it.',
    },
    {
      icon: <Shield className="text-[#E65100]" size={32} />,
      title: 'Content Rights',
      description: 'All course materials and content are protected by intellectual property laws and owned by LogicEMB.',
    },
    {
      icon: <AlertTriangle className="text-[#E65100]" size={32} />,
      title: 'User Conduct',
      description: 'You agree not to engage in any activity that disrupts or interferes with our services.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#071A30] to-[#0D2847] text-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <Scale size={16} />
              <span>Legal Information</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Last updated: November 19, 2026
            </p>
            <p className="text-gray-300 mt-4">
              These Terms of Service govern your use of LogicEMB's website and services. Please read them carefully 
              before using our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#E65100] hover:shadow-lg transition-all"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#071A30] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Complete Terms */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#071A30] mb-6">Complete Terms of Service</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">1. Agreement to Terms</h3>
                <p className="text-gray-600">
                  By accessing or using LogicEMB's services, you agree to be bound by these Terms of Service and all 
                  applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from 
                  using or accessing this site.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">2. Use License</h3>
                <p className="text-gray-600 mb-3">
                  Subject to your compliance with these Terms, LogicEMB grants you a limited, non-exclusive, 
                  non-transferable license to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Access and use our educational content for personal learning purposes</li>
                  <li>Download course materials for offline viewing where permitted</li>
                  <li>Participate in community forums and discussions</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  This license shall automatically terminate if you violate any of these restrictions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">3. User Accounts</h3>
                <p className="text-gray-600 mb-3">
                  When you create an account with us, you must provide accurate and complete information. You are 
                  responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Maintaining the security of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring your account information is current and accurate</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">4. Intellectual Property Rights</h3>
                <p className="text-gray-600 mb-3">
                  All content on LogicEMB, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Course materials, videos, and documentation</li>
                  <li>Text, graphics, logos, and images</li>
                  <li>Software and source code examples</li>
                  <li>Trademarks and service marks</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  are owned by or licensed to LogicEMB and are protected by international copyright, trademark, and 
                  other intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">5. User Content</h3>
                <p className="text-gray-600 mb-3">
                  By posting content on LogicEMB (forum posts, comments, projects), you grant us a worldwide, 
                  non-exclusive, royalty-free license to use, reproduce, and display your content. You represent that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>You own or have rights to the content you post</li>
                  <li>Your content does not violate any laws or third-party rights</li>
                  <li>Your content does not contain malicious code or viruses</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">6. Prohibited Uses</h3>
                <p className="text-gray-600 mb-3">
                  You agree not to use LogicEMB for any of the following:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Illegal activities or to promote illegal conduct</li>
                  <li>Sharing or distributing copyrighted course materials</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Harassing, abusing, or harming other users</li>
                  <li>Scraping or copying content without permission</li>
                  <li>Creating multiple accounts to abuse our services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">7. Payment Terms</h3>
                <p className="text-gray-600 mb-3">
                  For premium courses and services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>All prices are in USD unless otherwise stated</li>
                  <li>Payment is required before accessing premium content</li>
                  <li>Refunds are available within 30 days of purchase</li>
                  <li>Subscription renewals are automatic unless cancelled</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">8. Disclaimers</h3>
                <p className="text-gray-600">
                  LogicEMB's services are provided "as is" without warranties of any kind. We do not guarantee that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-3">
                  <li>Our services will be uninterrupted or error-free</li>
                  <li>Content will be accurate, complete, or current</li>
                  <li>Results from using our services will meet your expectations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">9. Limitation of Liability</h3>
                <p className="text-gray-600">
                  To the maximum extent permitted by law, LogicEMB shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">10. Termination</h3>
                <p className="text-gray-600">
                  We may terminate or suspend your account and access to our services immediately, without prior notice, 
                  for any breach of these Terms. Upon termination, your right to use the services will immediately cease.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">11. Changes to Terms</h3>
                <p className="text-gray-600">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes 
                  by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our 
                  services after changes constitutes acceptance of the new Terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">12. Governing Law</h3>
                <p className="text-gray-600">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, 
                  United States, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071A30] mb-3">13. Contact Information</h3>
                <p className="text-gray-600 mb-3">
                  If you have any questions about these Terms, please contact us:
                </p>
                <ul className="list-none space-y-2 text-gray-600">
                  <li>Email: legal@logicemb.com</li>
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
              Questions About Our Terms?
            </h2>
            <p className="text-gray-600 mb-6">
              Our legal team is available to answer any questions you may have.
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
