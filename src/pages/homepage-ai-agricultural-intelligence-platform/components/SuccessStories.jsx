import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const successStories = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Ludhiana, Punjab",
      crop: "Mustard",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      beforeYield: "₹1,20,000",
      afterYield: "₹1,85,000",
      improvement: "54%",
      timeframe: "2023-24 Season",
      story: `Following AgroYield AI's mustard recommendations transformed my farming completely. The AI suggested optimal seeding time and fertilizer combinations that I never considered before.\n\nThe confidence score of 94% gave me the courage to invest in better seeds and follow the treatment schedule exactly as recommended.`,
      achievements: ["Best Yield in District", "54% Profit Increase", "Reduced Input Costs by 15%"],
      ranking: "#1 Mustard Farmer - Punjab Region"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Nashik, Maharashtra",
      crop: "Sunflower",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      beforeYield: "₹1,45,000",
      afterYield: "₹2,15,000",
      improvement: "48%",
      timeframe: "2023 Kharif Season",
      story: `As a woman farmer, I was initially skeptical about AI recommendations. But the transparent ranking system and scientific backing convinced me to try.\n\nThe pest management schedule and irrigation timing suggestions were game-changers. My sunflower oil yield improved significantly, fetching premium prices in the market.`,
      achievements: ["Premium Sunflower Oil", "48% Revenue Growth", "Community Recognition"],
      ranking: "#2 Sunflower Farmer - Maharashtra Region"
    },
    {
      id: 3,
      name: "Suresh Patel",
      location: "Anand, Gujarat",
      crop: "Groundnut",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      beforeYield: "₹2,80,000",
      afterYield: "₹3,25,000",
      improvement: "16%",
      timeframe: "2023-24 Annual Cycle",
      story: `AgroYield AI's groundnut recommendations helped me optimize my 15-acre farm like never before. The soil analysis integration and weather-based scheduling were incredibly accurate.\n\nWhat impressed me most was the market price predictions that helped me time my harvest perfectly for maximum profit.`,
      achievements: ["Highest Oil Content", "16% Yield Increase", "Early Harvest Bonus"],
      ranking: "#1 Groundnut Farmer - Gujarat Region"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories?.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories?.length) % successStories?.length);
  };

  const currentData = successStories?.[currentStory];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Users" size={16} />
            <span>Real Farmer Success Stories</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Farmers Who Transformed
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Their Lives with AI
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real farmers who trusted our AI rankings and achieved remarkable results.
          </p>
        </div>

        {/* Main Story Display */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 mb-12 border border-green-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Farmer Profile */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image 
                    src={currentData?.avatar}
                    alt={currentData?.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-1">
                    <Icon name="Award" size={16} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{currentData?.name}</h3>
                  <p className="text-gray-600 flex items-center space-x-1">
                    <Icon name="MapPin" size={16} />
                    <span>{currentData?.location}</span>
                  </p>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mt-2 inline-block">
                    {currentData?.ranking}
                  </div>
                </div>
              </div>

              {/* Story */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="Quote" size={20} className="text-primary" />
                  <span className="font-semibold text-gray-900">Success Story</span>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {currentData?.story}
                </p>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <Icon name="Trophy" size={18} className="text-primary" />
                  <span>Key Achievements</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentData?.achievements?.map((achievement, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                      <div className="text-sm font-medium text-gray-700">{achievement}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Results */}
            <div className="space-y-6">
              {/* Crop Info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">Crop Performance</h4>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {currentData?.crop}
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">{currentData?.timeframe}</div>
                
                {/* Before/After Comparison */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">Before AI</div>
                    <div className="text-2xl font-bold text-gray-400">{currentData?.beforeYield}</div>
                    <div className="text-xs text-gray-500">per acre</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">After AI</div>
                    <div className="text-2xl font-bold text-primary">{currentData?.afterYield}</div>
                    <div className="text-xs text-gray-500">per acre</div>
                  </div>
                </div>

                {/* Improvement Badge */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">+{currentData?.improvement}</div>
                  <div className="text-sm opacity-90">Profit Improvement</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prevStory}
                  className="flex items-center space-x-2 bg-white text-gray-600 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                >
                  <Icon name="ChevronLeft" size={20} />
                  <span>Previous</span>
                </button>

                <div className="flex space-x-2">
                  {successStories?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStory(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentStory ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextStory}
                  className="flex items-center space-x-2 bg-white text-gray-600 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                >
                  <span>Next</span>
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-primary mb-2">15,000+</div>
            <div className="text-gray-600">Successful Farmers</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-primary mb-2">34%</div>
            <div className="text-gray-600">Avg Yield Increase</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-primary mb-2">₹2.5Cr</div>
            <div className="text-gray-600">Additional Income Generated</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-primary mb-2">92%</div>
            <div className="text-gray-600">Recommendation Accuracy</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join thousands of farmers who have transformed their lives with AI-powered farming intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="Zap" size={20} />
                <span>Start Your Journey</span>
              </button>
              <Link to="/farmer-success-league-community-leaderboards">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center justify-center space-x-2 w-full sm:w-auto">
                  <Icon name="Users" size={20} />
                  <span>Join Success League</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
