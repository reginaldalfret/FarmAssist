import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    platform: [
      { name: 'AI Rankings', path: '/ai-ranking-engine-methodology-showcase' },
      { name: 'Crop Championship', path: '/crop-championship-center-interactive-rankings' },
      { name: 'Treatment Rankings', path: '/treatment-rankings-fertilizer-pesticide-intelligence' },
      { name: 'Success League', path: '/farmer-success-league-community-leaderboards' }
    ],
    resources: [
      { name: 'Regional Intelligence', path: '/regional-intelligence-center-location-specific-insights' },
      { name: 'Research Papers', path: '#' },
      { name: 'Success Stories', path: '#' },
      { name: 'API Documentation', path: '#' }
    ],
    support: [
      { name: 'Help Center', path: '#' },
      { name: 'Contact Us', path: '#' },
      { name: 'Farmer Support', path: '#' },
      { name: 'Technical Support', path: '#' }
    ],
    company: [
      { name: 'About Us', path: '#' },
      { name: 'Careers', path: '#' },
      { name: 'Press Kit', path: '#' },
      { name: 'Partners', path: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <Link to="/homepage-ai-agricultural-intelligence-platform" className="flex items-center space-x-3">
              <div className="relative">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-primary)" />
                      <stop offset="100%" stopColor="var(--color-secondary)" />
                    </linearGradient>
                  </defs>
                  <rect width="40" height="40" rx="8" fill="url(#footerLogoGradient)" />
                  {/* Oil droplet shape */}
                  <path 
                    d="M20 10C20 10 16 14 16 18C16 21 17.9 23 20 23C22.1 23 24 21 24 18C24 14 20 10 20 10Z" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    fill="white" 
                    opacity="0.9"
                  />
                  {/* Leaf shape */}
                  <path 
                    d="M24 12L26 10C27 10 28 11 28 12L26 14C25 15 24 15 23 14Z" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    fill="none"
                  />
                  <circle cx="32" cy="8" r="3" fill="var(--color-accent)" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">AgroYield</span>
                <span className="text-sm font-bold text-primary -mt-1 tracking-widest">AI</span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed max-w-md">
              India's most advanced AI platform for oilseed crop yield optimization. Transform farming uncertainty into confident decisions with data-driven rankings and oilseed-specific insights.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Icon name="Mail" size={18} className="text-primary" />
                <span>support@agroyield.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Icon name="Phone" size={18} className="text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Icon name="MapPin" size={18} className="text-primary" />
                <span>New Delhi, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200 group"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} className="text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Platform</h3>
            <ul className="space-y-3">
              {footerLinks?.platform?.map((link) => (
                <li key={link?.name}>
                  <Link
                    to={link?.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span>{link?.name}</span>
                    <Icon name="ArrowRight" size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks?.resources?.map((link) => (
                <li key={link?.name}>
                  <Link
                    to={link?.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span>{link?.name}</span>
                    <Icon name="ArrowRight" size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks?.support?.map((link) => (
                <li key={link?.name}>
                  <Link
                    to={link?.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span>{link?.name}</span>
                    <Icon name="ArrowRight" size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks?.company?.map((link) => (
                <li key={link?.name}>
                  <Link
                    to={link?.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span>{link?.name}</span>
                    <Icon name="ArrowRight" size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Stay Updated with AI Agriculture Insights</h3>
              <p className="text-gray-300">Get weekly ranking updates, success stories, and expert farming tips.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-200"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="Send" size={18} />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 text-sm">
              <span>© {currentYear} AgroYield AI. All rights reserved. Empowering farmers with intelligent oilseed crop rankings.</span>
              <div className="flex items-center space-x-6">
                <Link to="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</Link>
                <Link to="#" className="hover:text-primary transition-colors duration-200">Terms of Service</Link>
                <Link to="#" className="hover:text-primary transition-colors duration-200">Cookie Policy</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-primary" />
                <span>Secure & Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-primary" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
