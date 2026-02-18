import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import LanguageSelector from '../LanguageSelector';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAssessmentToast, setShowAssessmentToast] = useState(false);
  const location = useLocation();

  const primaryNavItems = [
    {
      name: 'Home',
      path: '/homepage-ai-agricultural-intelligence-platform',
      icon: 'Home'
    },
    {
      name: 'AI Rankings',
      path: '/ai-ranking-engine-methodology-showcase',
      icon: 'TrendingUp'
    },
    {
      name: 'Crop Championship',
      path: '/crop-championship-center-interactive-rankings',
      icon: 'Trophy'
    },
    {
      name: 'Treatment Rankings',
      path: '/treatment-rankings-fertilizer-pesticide-intelligence',
      icon: 'Beaker'
    }
  ];

  const secondaryNavItems = [
    {
      name: 'Success League',
      path: '/farmer-success-league-community-leaderboards',
      icon: 'Users'
    },
    {
      name: 'Regional Intelligence',
      path: '/regional-intelligence-center-location-specific-insights',
      icon: 'MapPin'
    }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo */}
          <Link 
            to="/homepage-ai-agricultural-intelligence-platform" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
          >
            <div className="relative">
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-primary)" />
                    <stop offset="100%" stopColor="var(--color-secondary)" />
                  </linearGradient>
                </defs>
                <rect width="40" height="40" rx="8" fill="url(#logoGradient)" />
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
              <span className="text-xl font-bold text-gray-900">AgroYield</span>
              <span className="text-xs font-bold text-primary -mt-1 tracking-widest">AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {primaryNavItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary border border-primary/20' :'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative">
              <button
                onClick={toggleMoreMenu}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  secondaryNavItems?.some(item => isActivePath(item?.path))
                    ? 'bg-primary/10 text-primary border border-primary/20' :'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
                <Icon 
                  name="ChevronDown" 
                  size={14} 
                  className={`transition-transform duration-200 ${isMoreMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {isMoreMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {secondaryNavItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      onClick={() => setIsMoreMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 text-sm transition-colors duration-200 ${
                        isActivePath(item?.path)
                          ? 'bg-primary/10 text-primary border-r-2 border-primary' :'text-gray-600 hover:text-primary hover:bg-gray-50'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span className="font-medium">{item?.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <LanguageSelector />
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowAuthModal(true)}
              className="text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
            >
              Sign In
            </Button>
            <Button 
              variant="default" 
              size="sm"
              iconName="Zap"
              iconPosition="left"
              onClick={() => { 
                setShowAssessmentToast(true); 
                setTimeout(() => setShowAssessmentToast(false), 4000);
                window.location.href = '/crop-championship-center-interactive-rankings';
              }}
              className="bg-primary hover:bg-primary/90"
            >
              Get Free Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-2">
              {[...primaryNavItems, ...secondaryNavItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary/10 text-primary border border-primary/20' :'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                <Button 
                  variant="outline" 
                  fullWidth
                  onClick={() => setShowAuthModal(true)}
                  className="justify-center text-gray-600 border-gray-300"
                >
                  Sign In
                </Button>
                <Button 
                  variant="default" 
                  fullWidth
                  iconName="Zap"
                  iconPosition="left"
                  onClick={() => { 
                    setShowAssessmentToast(true); 
                    setTimeout(() => setShowAssessmentToast(false), 4000);
                    window.location.href = '/crop-championship-center-interactive-rankings';
                  }}
                  className="justify-center bg-primary hover:bg-primary/90"
                >
                  Get Free Assessment
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
      {/* Overlay for more menu */}
      {isMoreMenuOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsMoreMenuOpen(false)}
        />
      )}

      {/* Simple Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <button onClick={() => setShowAuthModal(false)} 
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600">
              <Icon name="X" size={20} />
            </button>
            <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="User" size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold">Welcome to AgroYield AI</h2>
              <p className="text-white/80 text-sm mt-1">Sign in to save your farm data and track progress</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email or Phone</label>
                <input type="text" placeholder="Enter email or 10-digit mobile number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm" />
              </div>
              <button 
                onClick={() => { setShowAuthModal(false); }}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Sign In
              </button>
              <div className="relative text-center">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                <span className="relative bg-white px-3 text-sm text-gray-500">or continue with</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center space-x-2 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
                  <Icon name="Phone" size={16} className="text-green-600" />
                  <span>OTP Login</span>
                </button>
                <button className="flex items-center justify-center space-x-2 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
                  <Icon name="Mail" size={16} className="text-blue-600" />
                  <span>Google</span>
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
                New farmer? <button className="text-primary font-semibold hover:underline">Create Free Account</button>
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
