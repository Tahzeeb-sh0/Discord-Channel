import React from 'react';

const PrivacyPage = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `Welcome to ChatRoom. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.`,
    },
    {
      id: 'data-collection',
      title: 'Information We Collect',
      content: `We collect several types of information from and about users of our website, including:`,
      list: [
        'Personal identifiers (name, email address, phone number)',
        'Account credentials (username, encrypted password)',
        'Profile information (profile picture, bio, preferences)',
        'Usage data (messages, chat history, feature interactions)',
        'Device information (IP address, browser type, operating system)',
        'Cookies and tracking technologies',
      ],
    },
    {
      id: 'usage',
      title: 'How We Use Your Information',
      content: `We use the information we collect about you for various purposes, including:`,
      list: [
        'Providing and maintaining our chat services',
        'Personalizing your experience and content',
        'Communicating with you about updates and security alerts',
        'Analyzing usage patterns to improve our platform',
        'Preventing fraud and ensuring platform security',
        'Complying with legal obligations',
      ],
    },
    {
      id: 'sharing',
      title: 'Information Sharing and Disclosure',
      content: `We do not sell your personal information. We may share your data with:`,
      list: [
        'Service providers who perform services on our behalf',
        'Business partners with your explicit consent',
        'Legal authorities when required by law',
        'Other users according to your privacy settings',
      ],
    },
    {
      id: 'security',
      title: 'Data Security',
      content: `We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.`,
    },
    {
      id: 'retention',
      title: 'Data Retention',
      content: `We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it.`,
    },
    {
      id: 'rights',
      title: 'Your Privacy Rights',
      content: `Depending on your location, you may have the following rights regarding your personal data:`,
      list: [
        'Right to access your personal information',
        'Right to rectification of inaccurate data',
        'Right to erasure ("right to be forgotten")',
        'Right to restrict processing',
        'Right to data portability',
        'Right to object to processing',
        'Right to withdraw consent',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      content: `We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.`,
    },
    {
      id: 'children',
      title: "Children's Privacy",
      content: `Our service is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.`,
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.`,
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: `If you have any questions about this Privacy Policy or our data practices, please contact us at:`,
      contact: {
        email: 'privacy@chatroom.com',
        address: '123 Chat Street, Tech City, TC 12345',
      },
    },
  ];

  const lastUpdated = 'February 9, 2026';

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-lg">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Table of Contents */}
          <nav className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Table of Contents
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-indigo-600 hover:text-indigo-800 text-sm transition-colors block py-1"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 scroll-mt-24"
              >
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {section.content}
                </p>
                
                {section.list && (
                  <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                    {section.list.map((item, index) => (
                      <li key={index} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.contact && (
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-slate-600 mb-2">
                      <span className="font-medium">Email:</span>{' '}
                      <a
                        href={`mailto:${section.contact.email}`}
                        className="text-indigo-600 hover:text-indigo-800 transition-colors"
                      >
                        {section.contact.email}
                      </a>
                    </p>
                    <p className="text-slate-600">
                      <span className="font-medium">Address:</span>{' '}
                      {section.contact.address}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Back to Top */}
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              Back to Top
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;