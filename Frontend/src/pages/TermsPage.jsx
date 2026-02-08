import React from 'react';

const TermsPage = () => {
  const sections = [
    {
      id: 'agreement',
      title: 'Agreement to Terms',
      content: `By accessing or using ChatRoom, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service. The materials contained in this service are protected by applicable copyright and trademark law.`,
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.`,
    },
    {
      id: 'eligibility',
      title: 'Eligibility and Accounts',
      content: `You must be at least 13 years old to use ChatRoom. By using the service, you represent and warrant that:`,
      list: [
        'You are at least 13 years of age',
        'You have the legal capacity to enter into these Terms',
        'You will provide accurate and complete registration information',
        'You will maintain the security of your account credentials',
        'You are responsible for all activities that occur under your account',
        'You will notify us immediately of any unauthorized access',
      ],
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable Use',
      content: `You agree not to use the service to:`,
      list: [
        'Violate any applicable laws or regulations',
        'Infringe upon the rights of others',
        'Upload or transmit viruses, malware, or malicious code',
        'Interfere with or disrupt the integrity of the service',
        'Harvest or collect user information without consent',
        'Send spam, unsolicited messages, or harass other users',
        'Impersonate any person or entity',
        'Share illegal, harmful, or offensive content',
        'Attempt to gain unauthorized access to the service',
      ],
    },
    {
      id: 'content',
      title: 'User Content',
      content: `You retain all rights to the content you post, upload, or share through ChatRoom. By providing content to the service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content solely for the purpose of operating and improving the service. You represent that you own or have the necessary rights to all content you submit, and that your content does not violate any third-party rights.`,
    },
    {
      id: 'termination',
      title: 'Termination',
      content: `We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service or contact us to request account deletion.`,
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer of Warranties',
      content: `The service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. We do not warrant that the service will be uninterrupted, timely, secure, or error-free.`,
    },
    {
      id: 'limitation',
      title: 'Limitation of Liability',
      content: `In no event shall ChatRoom, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service; any conduct or content of any third party on the service; any content obtained from the service; or unauthorized access, use, or alteration of your transmissions or content.`,
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      content: `You agree to defend, indemnify, and hold harmless ChatRoom and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of your use and access of the service, or a breach of these Terms.`,
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      content: `These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.`,
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: `If you have any questions about these Terms, please contact us at:`,
      contact: {
        email: 'legal@chatroom.com',
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
            Terms of Service
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

          {/* Terms Sections */}
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
export default TermsPage;