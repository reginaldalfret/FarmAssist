import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import LanguageSelector from '../LanguageSelector';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
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
              className="text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
            >
              Sign In
            </Button>
            <Button 
              variant="default" 
              size="sm"
              iconName="Zap"
              iconPosition="left"
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
                  className="justify-center text-gray-600 border-gray-300"
                >
                  Sign In
                </Button>
                <Button 
                  variant="default" 
                  fullWidth
                  iconName="Zap"
                  iconPosition="left"
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
    </header>
  );
};

export default Header;
