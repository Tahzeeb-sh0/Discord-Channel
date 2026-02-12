import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Instagram,
  ArrowUpRight,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Security', href: '/security' },
        { name: 'Integrations', href: '/integrations' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Help Center', href: '/help' },
        { name: 'Community', href: '/community' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '/privacy' },
        { name: 'Terms', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
      ],
    },
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/t.ahzeeb/' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/Tahzeeb-sh0' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/tahzeeb-shaikh/' },
    { name: 'Email', icon: Mail, href: 'mailto:taizibshaikh34@gmail.com' },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
            
                <img src="/speech-bubble.png" alt="ChatSonnet" className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity" />
          
              <div>
                <span className="text-white font-medium text-lg tracking-tight">ChatSonnet</span>
                
              </div>
            </Link>
            
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              Military-grade encrypted messaging. No tracking. No compromise. 
              Just pure, private communication.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-white/90 font-medium text-sm mb-5 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-1 text-white/40 hover:text-white text-sm transition-colors duration-200"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-10 border-t border-white/[0.06]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-medium mb-1">Stay in the loop</h3>
              <p className="text-white/40 text-sm">Get updates on new features and security tips.</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
              />
              <button className="px-6 py-3 bg-white text-black rounded-xl font-medium text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs flex items-center gap-1">
            © {currentYear} ChatSonnet. Crafted with 
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> 
            by 
            <a 
              href="https://github.com/Tahzeeb-sh0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              Tahzeeb
            </a>
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-white/20 uppercase tracking-widest">Secured by</span>
            <div className="flex items-center gap-3">
              {['AES-256', 'E2E', 'SOC2'].map((badge) => (
                <span key={badge} className="px-2 py-1 bg-white/[0.03] border border-white/[0.06] rounded text-[10px] text-white/40">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;