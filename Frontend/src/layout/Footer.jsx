import React from 'react';
import { MessageSquare, Twitter, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: {
      title: 'Product',
      links: [
        { name: 'Features', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Integrations', href: '#' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Community', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
    },
  };

  const socialLinks = [
    { name: 'Twitter', icon: Instagram, href: 'https://www.instagram.com/t.ahzeeb/' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/Tahzeeb-sh0' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/tahzeeb-shaikh/' },
    { name: 'Email', icon: Mail, href: 'mailto:taizibshaikh34@gmail.com' },
  ];

  return (
    <footer className="bg-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-11 h-11 rounded-lg flex items-center justify-center">
                 <img src="/speech-bubble.png" alt="" srcset="" />
              </div>
              <span className="text-white font-semibold text-lg">ChatSonnet</span>
            </div>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              Connect, collaborate, and communicate seamlessly with your team in real-time.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-sm mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} ChatSonnet. All rights reserved and developed by <span className='hover:text-slate-600'><a href="https://github.com/Tahzeeb-sh0">Tahzeeb.</a></span> 
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;