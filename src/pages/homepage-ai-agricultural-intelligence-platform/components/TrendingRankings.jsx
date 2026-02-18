import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const TrendingRankings = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedSeason, setSelectedSeason] = useState('rabi');

  const regions = [
    { id: 'all', name: 'All India', icon: 'Globe' },
    { id: 'north', name: 'North India', icon: 'Mountain' },
    { id: 'south', name: 'South India', icon: 'Palmtree' },
    { id: 'west', name: 'West India', icon: 'Waves' },
    { id: 'east', name: 'East India', icon: 'TreePine' }
  ];

  const seasons = [
    { id: 'rabi', name: 'Rabi Season', period: 'Oct - Mar' },
    { id: 'kharif', name: 'Kharif Season', period: 'Jun - Sep' },
    { id: 'zaid', name: 'Zaid Season', period: 'Mar - Jun' }
  ];

  const trendingCrops = [
    {
      rank: 1,
      crop: "Mustard",
      region: "Rajasthan",
      confidence: 94,
      expectedYield: "₹1,95,000",
      trend: "up",
      trendValue: "+14%",
      season: "rabi",
      area: "per acre",
      riskLevel: "Low",
      marketDemand: "High"
    },
    {
      rank: 2,
      crop: "Soybean",
      region: "Madhya Pradesh",
      confidence: 91,
      expectedYield: "₹1,75,000",
      trend: "up",
      trendValue: "+9%",
      season: "kharif",
      area: "per acre",
      riskLevel: "Medium",
      marketDemand: "High"
    },
    {
      rank: 3,
      crop: "Groundnut",
      region: "Gujarat",
      confidence: 88,
      expectedYield: "₹2,10,000",
      trend: "stable",
      trendValue: "0%",
      season: "kharif",
      area: "per acre",
      riskLevel: "Low",
      marketDemand: "High"
    },
    {
      rank: 4,
      crop: "Sunflower",
      region: "Karnataka",
      confidence: 85,
      expectedYield: "₹1,90,000",
      trend: "up",
      trendValue: "+6%",
      season: "rabi",
      area: "per acre",
      riskLevel: "Low",
      marketDemand: "Medium"
    },
    {
      rank: 5,
      crop: "Sesame",
      region: "Uttar Pradesh",
      confidence: 82,
      expectedYield: "₹2,50,000",
      trend: "up",
      trendValue: "+11%",
      season: "kharif",
      area: "per acre",
      riskLevel: "Medium",
      marketDemand: "High"
    }
  ];

  const filteredCrops = trendingCrops?.filter(crop => 
    selectedSeason === 'all' || crop?.season === selectedSeason
  );

  const getRankingColor = (rank) => {
    if (rank === 1) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    if (rank === 2) return "text-gray-600 bg-gray-50 border-gray-200";
    if (rank === 3) return "text-amber-600 bg-amber-50 border-amber-200";
    return "text-primary bg-primary/5 border-primary/20";
  };

  const getRankingIcon = (rank) => {
    if (rank === 1) return "Crown";
    if (rank === 2) return "Medal";
    if (rank === 3) return "Award";
    return "TrendingUp";
  };

  const getTrendIcon = (trend) => {
    if (trend === 'up') return "TrendingUp";
    if (trend === 'down') return "TrendingDown";
    return "Minus";
  };

  const getTrendColor = (trend) => {
    if (trend === 'up') return "text-green-600";
    if (trend === 'down') return "text-red-600";
    return "text-gray-600";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="TrendingUp" size={16} />
            <span>Live Rankings Update</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trending Crop Rankings
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Across India
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real-time rankings updated every 15 minutes based on weather, market prices, and success data from thousands of farmers.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Season Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-3">Season</label>
            <div className="grid grid-cols-3 gap-2">
              {seasons?.map((season) => (
                <button
                  key={season?.id}
                  onClick={() => setSelectedSeason(season?.id)}
                  className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedSeason === season?.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className="font-semibold">{season?.name}</div>
                  <div className="text-xs opacity-80">{season?.period}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Region Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-3">Region</label>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
              {regions?.map((region) => (
                <button
                  key={region?.id}
                  onClick={() => setSelectedRegion(region?.id)}
                  className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                    selectedRegion === region?.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <Icon name={region?.icon} size={16} />
                  <span className="hidden sm:inline">{region?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Rankings Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {filteredCrops?.map((crop, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover-lift transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center ${getRankingColor(crop?.rank)}`}>
                    <Icon name={getRankingIcon(crop?.rank)} size={24} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">#{crop?.rank}</span>
                      <span className="text-lg font-semibold text-gray-700">{crop?.crop}</span>
                    </div>
                    <p className="text-sm text-gray-500">{crop?.region}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`flex items-center space-x-1 ${getTrendColor(crop?.trend)}`}>
                    <Icon name={getTrendIcon(crop?.trend)} size={16} />
                    <span className="text-sm font-medium">{crop?.trendValue}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">vs last week</div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary">{crop?.expectedYield}</div>
                  <div className="text-sm text-gray-600">{crop?.area}</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-600">{crop?.confidence}%</div>
                  <div className="text-sm text-gray-600">Confidence</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Success Probability</span>
                  <span>{crop?.confidence}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${crop?.confidence}%` }}
                  ></div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  crop?.riskLevel === 'Low' ? 'bg-green-100 text-green-700' :
                  crop?.riskLevel === 'Medium'? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                }`}>
                  {crop?.riskLevel} Risk
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  crop?.marketDemand === 'High' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {crop?.marketDemand} Demand
                </span>
              </div>

              {/* Action */}
              <Link to="/crop-championship-center-interactive-rankings">
                <button className="w-full bg-primary/5 text-primary py-2 rounded-lg font-medium hover:bg-primary/10 transition-colors duration-200 flex items-center justify-center space-x-2 group-hover:bg-primary group-hover:text-white">
                  <span>View Detailed Analysis</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want Personalized Rankings for Your Farm?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get customized crop recommendations based on your specific soil, climate, and market conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="Target" size={20} />
                <span>Get Personal Rankings</span>
              </button>
              <Link to="/crop-championship-center-interactive-rankings">
                <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors duration-200 flex items-center justify-center space-x-2 w-full sm:w-auto">
                  <Icon name="BarChart3" size={20} />
                  <span>Explore All Rankings</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingRankings;
