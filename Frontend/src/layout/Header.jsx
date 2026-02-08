import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Explore', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Community', href: '#' },
  ];

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-transparent backdrop-blur-md border border-slate-700/50 rounded-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="/speech-bubble.png" alt="Logo" className="w-6 h-6" />
              </div>
              <span className="text-white font-semibold text-lg">ChatSonnet</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="text-slate-300 hover:text-white transition-colors text-sm font-medium px-3 py-1.5">
                Sign In
              </button>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1.5 rounded-xl text-sm font-medium transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Also rounded and transparent */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl px-4 py-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors text-sm font-medium py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2 pt-3 mt-3 border-t border-slate-700/50">
              <button className="text-slate-300 hover:text-white transition-colors text-sm font-medium text-left py-1">
                Sign In
              </button>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;