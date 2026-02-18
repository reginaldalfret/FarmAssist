import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RegionalSuccessStories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const successStories = [
    {
      id: 1,
      farmerName: 'Rajesh Kumar Sharma',
      location: 'Ludhiana, Punjab',
      region: 'punjab',
      category: 'crop-optimization',
      cropType: 'Mustard',
      beforeYield: '1.1 t/ha',
      afterYield: '1.9 t/ha',
      improvement: '73%',
      profitIncrease: '₹45,000',
      totalProfit: '₹1,25,000',
      year: '2024',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      farmImage: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop',
      testimonial: `Following AgroYield AI's soil-specific fertilizer schedule and optimal sowing time recommendations, I achieved the highest mustard yield in my 20-year farming career. The rabi climate-adapted rankings helped me choose Pusa Bold variety perfectly suited to our region's winter patterns.`,
      techniques: ['Precision Fertilization', 'Climate-Timed Planting', 'Water Management'],
      verified: true
    },
    {
      id: 2,
      farmerName: 'Priya Devi Patel',
      location: 'Anand, Gujarat',
      region: 'gujarat',
      category: 'sustainable-farming',
      cropType: 'Groundnut',
      beforeYield: '1.5 t/ha',
      afterYield: '2.2 t/ha',
      improvement: '47%',
      profitIncrease: '₹38,000',
      totalProfit: '₹95,000',
      year: '2024',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      farmImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=250&fit=crop',
      testimonial: `The AI's integrated pest management and organic fertilizer recommendations transformed my groundnut farming. I reduced input costs by 25% and achieved record oil content of 48%, fetching premium prices.`,
      techniques: ['Organic Fertilizers', 'IPM Strategies', 'Soil Health Management'],
      verified: true
    },
    {
      id: 3,
      farmerName: 'Suresh Reddy',
      location: 'Warangal, Telangana',
      region: 'telangana',
      category: 'water-management',
      cropType: 'Sesame',
      beforeYield: '0.6 t/ha',
      afterYield: '1.1 t/ha',
      improvement: '83%',
      profitIncrease: '₹52,000',
      totalProfit: '₹1,15,000',
      year: '2024',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      farmImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop',
      testimonial: `Using AgroYield AI's drip irrigation scheduling and drought-resistant sesame variety recommendations, I maximized yield even during water-scarce seasons. The soil moisture predictions were incredibly accurate.`,
      techniques: ['Drip Irrigation', 'Water Scheduling', 'Drought-Resistant Varieties'],
      verified: true
    },
    {
      id: 4,
      farmerName: 'Kavita Singh',
      location: 'Meerut, Uttar Pradesh',
      region: 'uttar-pradesh',
      category: 'market-optimization',
      cropType: 'Linseed',
      beforeYield: '0.8 t/ha',
      afterYield: '1.2 t/ha',
      improvement: '50%',
      profitIncrease: '₹68,000',
      totalProfit: '₹1,85,000',
      year: '2024',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      farmImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop',
      testimonial: `The market timing analysis helped me sell my linseed harvest at peak oil prices. Combined with the AI fertilizer schedule, I achieved record-breaking profits and reduced my soil preparation costs.`,
      techniques: ['Market Timing', 'Mill Selection', 'Harvest Optimization'],
      verified: true
    },
    {
      id: 5,
      farmerName: 'Arjun Patil',location: 'Pune, Maharashtra',region: 'maharashtra',category: 'technology-adoption',cropType: 'Grapes',
      beforeYield: '18 t/ha',afterYield: '25 t/ha',improvement: '39%',profitIncrease: '₹1,25,000',totalProfit: '₹3,50,000',year: '2024',avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',farmImage: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=250&fit=crop',
      testimonial: `Implementing the AI-recommended precision agriculture techniques and climate-controlled growing methods revolutionized my grape production. The regional expert network connected me with the right technology partners.`,
      techniques: ['Precision Agriculture', 'Climate Control', 'Quality Enhancement'],
      verified: true
    },
    {
      id: 6,
      farmerName: 'Lakshmi Narayanan',location: 'Coimbatore, Tamil Nadu',region: 'tamil-nadu',category: 'organic-transition',cropType: 'Coconut',
      beforeYield: '12,000 nuts/ha',afterYield: '16,500 nuts/ha',improvement: '38%',profitIncrease: '₹85,000',totalProfit: '₹2,25,000',year: '2024',avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',farmImage: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=250&fit=crop',
      testimonial: `The transition to organic coconut farming using regional soil-specific recommendations increased both yield and market value. The cultural integration features helped me combine traditional methods with modern science.`,
      techniques: ['Organic Certification', 'Traditional Methods', 'Value Addition'],
      verified: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Stories', icon: 'Star' },
    { id: 'crop-optimization', name: 'Crop Optimization', icon: 'Leaf' },
    { id: 'sustainable-farming', name: 'Sustainable Farming', icon: 'Leaf' },
    { id: 'water-management', name: 'Water Management', icon: 'Droplets' },
    { id: 'market-optimization', name: 'Market Optimization', icon: 'TrendingUp' },
    { id: 'technology-adoption', name: 'Technology Adoption', icon: 'Zap' },
    { id: 'organic-transition', name: 'Organic Transition', icon: 'Sprout' }
  ];

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'punjab', name: 'Punjab' },
    { id: 'gujarat', name: 'Gujarat' },
    { id: 'telangana', name: 'Telangana' },
    { id: 'uttar-pradesh', name: 'Uttar Pradesh' },
    { id: 'maharashtra', name: 'Maharashtra' },
    { id: 'tamil-nadu', name: 'Tamil Nadu' }
  ];

  const filteredStories = successStories?.filter(story => {
    const categoryMatch = selectedCategory === 'all' || story?.category === selectedCategory;
    const regionMatch = selectedRegion === 'all' || story?.region === selectedRegion;
    return categoryMatch && regionMatch;
  });

  const getImprovementColor = (improvement) => {
    const value = parseInt(improvement);
    if (value >= 50) return 'text-green-600 bg-green-100';
    if (value >= 30) return 'text-blue-600 bg-blue-100';
    return 'text-yellow-600 bg-yellow-100';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Regional Success Stories</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Icon name="Shield" size={16} className="text-green-600" />
            <span>Verified Results</span>
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-4">
          {/* Category Filter */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => setSelectedCategory(category?.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category?.id
                      ? 'bg-primary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon name={category?.icon} size={14} />
                  <span>{category?.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Region Filter */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Region</label>
            <div className="flex flex-wrap gap-2">
              {regions?.map((region) => (
                <button
                  key={region?.id}
                  onClick={() => setSelectedRegion(region?.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedRegion === region?.id
                      ? 'bg-secondary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {region?.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredStories?.map((story) => (
            <div key={story?.id} className="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Image
                    src={story?.avatar}
                    alt={story?.farmerName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-bold text-gray-900">{story?.farmerName}</h4>
                      {story?.verified && (
                        <Icon name="BadgeCheck" size={16} className="text-green-600" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{story?.location}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getImprovementColor(story?.improvement)}`}>
                    +{story?.improvement}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-primary">{story?.cropType}</span>
                  <span className="text-gray-500">{story?.year}</span>
                </div>
              </div>

              {/* Farm Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={story?.farmImage}
                  alt={`${story?.farmerName}'s farm`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-xs font-medium text-gray-700">{story?.cropType}</span>
                </div>
              </div>

              {/* Results */}
              <div className="p-4">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">{story?.beforeYield}</div>
                    <div className="text-xs text-gray-600">Before</div>
                  </div>
                  <div className="text-center">
                    <Icon name="ArrowRight" size={20} className="text-gray-400 mx-auto" />
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{story?.afterYield}</div>
                    <div className="text-xs text-gray-600">After</div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-800">Profit Increase</span>
                    <span className="text-lg font-bold text-green-600">{story?.profitIncrease}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-green-700">Total Profit</span>
                    <span className="text-sm font-semibold text-green-600">{story?.totalProfit}</span>
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="text-sm text-gray-700 italic mb-4 line-clamp-3">
                  "{story?.testimonial}"
                </blockquote>

                {/* Techniques */}
                <div className="flex flex-wrap gap-2">
                  {story?.techniques?.map((technique, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {technique}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStories?.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="text-gray-300 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">No Success Stories Found</h4>
            <p className="text-gray-600">Try adjusting your filters to see more results.</p>
          </div>
        )}

        {/* Summary Stats */}
        {filteredStories?.length > 0 && (
          <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/20">
            <h4 className="font-bold text-gray-900 mb-4">Success Summary</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{filteredStories?.length}</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {Math.round(filteredStories?.reduce((acc, story) => acc + parseInt(story?.improvement), 0) / filteredStories?.length)}%
                </div>
                <div className="text-sm text-gray-600">Avg Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">
                  ₹{Math.round(filteredStories?.reduce((acc, story) => acc + parseInt(story?.profitIncrease?.replace(/[₹,]/g, '')), 0) / filteredStories?.length / 1000)}K
                </div>
                <div className="text-sm text-gray-600">Avg Profit Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-gray-600">Verified Results</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegionalSuccessStories;
