import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import RegionalMap from './components/RegionalMap';
import ClimateAdaptedRankings from './components/ClimateAdaptedRankings';
import RegionalSuccessStories from './components/RegionalSuccessStories';
import SoilSpecificGuidance from './components/SoilSpecificGuidance';
import LocalExpertNetwork from './components/LocalExpertNetwork';
import GovernmentSchemeIntegration from './components/GovernmentSchemeIntegration';

const RegionalIntelligenceCenter = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'overview', name: 'Regional Overview', icon: 'Map' },
    { id: 'climate', name: 'Climate Rankings', icon: 'CloudRain' },
    { id: 'soil', name: 'Soil Guidance', icon: 'TestTube' },
    { id: 'success', name: 'Success Stories', icon: 'Award' },
    { id: 'experts', name: 'Expert Network', icon: 'Users' },
    { id: 'schemes', name: 'Gov Schemes', icon: 'Building' }
  ];

  const regionalStats = [
    {
      title: 'Active Regions',
      value: '28',
      subtitle: 'States & UTs',
      icon: 'MapPin',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Success Stories',
      value: '2,450',
      subtitle: 'Verified Results',
      icon: 'TrendingUp',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Local Experts',
      value: '1,250',
      subtitle: 'Available Now',
      icon: 'Users',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Avg Improvement',
      value: '42%',
      subtitle: 'Yield Increase',
      icon: 'BarChart3',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const quickInsights = [
    {
      region: 'Rajasthan',
      insight: 'Mustard yields up 38% using AI-recommended Pusa Bold variety',
      confidence: 94,
      icon: 'Leaf'
    },
    {
      region: 'Madhya Pradesh',
      insight: 'Soybean farmers saved ₹28,000/ha with AI pest management',
      confidence: 91,
      icon: 'Leaf'
    },
    {
      region: 'Gujarat',
      insight: 'Drip irrigation adoption led to 40% water savings in groundnut',
      confidence: 89,
      icon: 'Droplets'
    },
    {
      region: 'Karnataka',
      insight: 'Sunflower oil premium certification increased income by 55%',
      confidence: 87,
      icon: 'Award'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-16">
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Loading regional intelligence data...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Regional Intelligence Center - Location-Specific Agricultural Insights | AgroYield AI</title>
        <meta name="description" content="Get hyper-local agricultural recommendations tailored to India's diverse farming regions. Interactive maps, climate-adapted rankings, and regional success stories." />
        <meta name="keywords" content="regional agriculture, location-specific farming, climate adaptation, soil guidance, local experts, government schemes" />
      </Helmet>
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary via-secondary to-primary/80 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Regional Intelligence Center
                </h1>
              </div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Hyper-local agricultural recommendations tailored to India's diverse farming regions. 
                Get location-specific insights, climate-adapted rankings, and connect with local experts.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {regionalStats?.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Icon name={stat?.icon} size={24} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat?.value}</div>
                    <div className="text-sm text-white/80">{stat?.title}</div>
                    <div className="text-xs text-white/60">{stat?.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Insights */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <Icon name="Zap" size={20} />
                <span>Latest Regional Insights</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickInsights?.map((insight, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <Icon name={insight?.icon} size={16} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-white">{insight?.region}</span>
                          <span className="text-xs text-white/80">{insight?.confidence}% confidence</span>
                        </div>
                        <p className="text-sm text-white/90">{insight?.insight}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-1 overflow-x-auto py-4">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab?.id
                      ? 'bg-primary text-white' :'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <RegionalMap 
                selectedRegion={selectedRegion} 
                onRegionSelect={setSelectedRegion} 
              />
              
              {/* Location Services */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Location Services</h3>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    <Icon name="MapPin" size={16} />
                    <span>Use My Location</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Icon name="Satellite" size={32} className="text-blue-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">GPS Integration</h4>
                    <p className="text-sm text-gray-600">Automatic location detection for personalized recommendations</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Icon name="Layers" size={32} className="text-green-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Multi-Level Data</h4>
                    <p className="text-sm text-gray-600">State, district, and village-level agricultural insights</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Icon name="Smartphone" size={32} className="text-purple-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Mobile Optimized</h4>
                    <p className="text-sm text-gray-600">Perfect for field use with offline capabilities</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'climate' && <ClimateAdaptedRankings />}
          {activeTab === 'soil' && <SoilSpecificGuidance />}
          {activeTab === 'success' && <RegionalSuccessStories />}
          {activeTab === 'experts' && <LocalExpertNetwork />}
          {activeTab === 'schemes' && <GovernmentSchemeIntegration />}
        </div>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Location-Specific Insights?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of farmers who are making data-driven decisions with our regional intelligence platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center space-x-2 px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                <Icon name="MapPin" size={20} />
                <span>Find My Region</span>
              </button>
              <button className="flex items-center space-x-2 px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors">
                <Icon name="Phone" size={20} />
                <span>Contact Expert</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <svg width="32" height="32" viewBox="0 0 40 40" className="text-primary">
                      <defs>
                        <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="var(--color-primary)" />
                          <stop offset="100%" stopColor="var(--color-secondary)" />
                        </linearGradient>
                      </defs>
                      <rect width="40" height="40" rx="8" fill="url(#footerLogoGradient)" />
                      <path 
                        d="M12 28V16l4-4h8l4 4v12M16 20h8M20 12v16" 
                        stroke="white" 
                        strokeWidth="2" 
                        fill="none"
                      />
                      <circle cx="32" cy="8" r="3" fill="var(--color-accent)" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold">AgroYield AI</div>
                    <div className="text-xs text-gray-400">Regional Intelligence</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Empowering farmers with location-specific agricultural intelligence and data-driven insights.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Regional Map</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Climate Rankings</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Expert Network</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                    <Icon name="Twitter" size={16} />
                  </a>
                  <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                    <Icon name="Facebook" size={16} />
                  </a>
                  <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                    <Icon name="Instagram" size={16} />
                  </a>
                  <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                    <Icon name="Youtube" size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; {new Date()?.getFullYear()} AgroYield AI. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RegionalIntelligenceCenter;
