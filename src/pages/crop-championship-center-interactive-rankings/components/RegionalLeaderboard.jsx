import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const RegionalLeaderboard = () => {
  const [selectedRegion, setSelectedRegion] = useState('punjab');

  const regionalData = {
    punjab: {
      name: 'Punjab',
      totalFarmers: 1250000,
      avgYield: 18.5,
      topCrops: [
        {
          rank: 1,
          name: 'Mustard',
          farmers: 450000,
          avgYield: 18.9,
          successRate: 89,
          topFarmer: 'Harpreet Singh',
          location: 'Amritsar',
          yield: 21.2,
          story: 'Achieved record oilseed yield using precision farming techniques'
        },
        {
          rank: 2,
          name: 'Linseed',
          farmers: 380000,
          avgYield: 10.8,
          successRate: 85,
          topFarmer: 'Kuldeep Kaur',
          location: 'Ludhiana',
          yield: 12.9,
          story: 'Implemented sustainable oilseed farming practices'
        },
        {
          rank: 3,
          name: 'Sunflower',
          farmers: 220000,
          avgYield: 20.2,
          successRate: 78,
          topFarmer: 'Manjit Singh',
          location: 'Bathinda',
          yield: 23.7,
          story: 'Used integrated pest management for oilseed crops effectively'
        }
      ]
    },
    haryana: {
      name: 'Haryana',
      totalFarmers: 890000,
      avgYield: 17.3,
      topCrops: [
        {
          rank: 1,
          name: 'Soybean',
          farmers: 420000,
          avgYield: 12.5,
          successRate: 87,
          topFarmer: 'Rajesh Kumar',
          location: 'Karnal',
          yield: 14.1,
          story: 'Pioneer in precision oilseed cultivation methods'
        },
        {
          rank: 2,
          name: 'Groundnut',
          farmers: 280000,
          avgYield: 17.9,
          successRate: 82,
          topFarmer: 'Sunita Devi',
          location: 'Kurukshetra',
          yield: 21.5,
          story: 'Expert in water-efficient oilseed cultivation'
        },
        {
          rank: 3,
          name: 'Safflower',
          farmers: 190000,
          avgYield: 12.7,
          successRate: 79,
          topFarmer: 'Vikram Singh',
          location: 'Hisar',
          yield: 15.3,
          story: 'Mastered drought-resistant oilseed varieties'
        }
      ]
    },
    maharashtra: {
      name: 'Maharashtra',
      totalFarmers: 1580000,
      avgYield: 16.8,
      topCrops: [
        {
          rank: 1,
          name: 'Soybean',
          farmers: 320000,
          avgYield: 12.5,
          successRate: 84,
          topFarmer: 'Prakash Patil',
          location: 'Kolhapur',
          yield: 15.0,
          story: 'Innovative drip irrigation for oilseed farming'
        },
        {
          rank: 2,
          name: 'Sunflower',
          farmers: 450000,
          avgYield: 20.2,
          successRate: 76,
          topFarmer: 'Anita Deshmukh',
          location: 'Nagpur',
          yield: 23.9,
          story: 'Organic oilseed farming success story'
        },
        {
          rank: 3,
          name: 'Groundnut',
          farmers: 380000,
          avgYield: 18.5,
          successRate: 73,
          topFarmer: 'Ramesh Jadhav',
          location: 'Aurangabad',
          yield: 21.8,
          story: 'Climate-smart oilseed agriculture advocate'
        }
      ]
    }
  };

  const regions = Object.keys(regionalData);
  const currentData = regionalData?.[selectedRegion];

  const getRankIcon = (rank) => {
    if (rank === 1) return { icon: 'Crown', color: 'text-yellow-500' };
    if (rank === 2) return { icon: 'Medal', color: 'text-gray-400' };
    if (rank === 3) return { icon: 'Award', color: 'text-orange-600' };
    return { icon: 'Hash', color: 'text-gray-400' };
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="MapPin" size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Regional Leaderboard</h2>
              <p className="text-sm text-gray-600">Top performing crops and farmers by region</p>
            </div>
          </div>
        </div>

        {/* Region Selector */}
        <div className="flex flex-wrap gap-2">
          {regions?.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedRegion === region
                  ? 'bg-primary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {regionalData?.[region]?.name}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        {/* Regional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Icon name="Users" size={20} className="text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-blue-900">
                  {(currentData?.totalFarmers / 1000000)?.toFixed(1)}M
                </div>
                <div className="text-sm text-blue-600">Total Farmers</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Icon name="TrendingUp" size={20} className="text-green-600" />
              <div>
                <div className="text-2xl font-bold text-green-900">
                  {currentData?.avgYield} Q/Ha
                </div>
                <div className="text-sm text-green-600">Avg Regional Yield</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Icon name="Trophy" size={20} className="text-purple-600" />
              <div>
                <div className="text-2xl font-bold text-purple-900">
                  {currentData?.topCrops?.length}
                </div>
                <div className="text-sm text-purple-600">Leading Crops</div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Crops Leaderboard */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Performing Crops in {currentData?.name}
          </h3>
          
          {currentData?.topCrops?.map((crop) => {
            const rankIcon = getRankIcon(crop?.rank);
            
            return (
              <div
                key={crop?.rank}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name={rankIcon?.icon} 
                        size={24} 
                        className={rankIcon?.color} 
                      />
                      <span className="text-2xl font-bold text-gray-900">
                        {crop?.rank}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{crop?.name}</h4>
                      <p className="text-sm text-gray-600">
                        {(crop?.farmers / 1000)?.toFixed(0)}K farmers • {crop?.avgYield} Q/Ha avg yield
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">
                      {crop?.successRate}% Success Rate
                    </div>
                    <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${crop?.successRate}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* Top Farmer Spotlight */}
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">{crop?.topFarmer}</h5>
                        <p className="text-sm text-gray-600">{crop?.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        {crop?.yield} Q/Ha
                      </div>
                      <div className="text-xs text-gray-500">Top Yield</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Quote" size={16} className="text-gray-400" />
                    <p className="text-sm text-gray-700 italic">{crop?.story}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
          <div className="flex items-center space-x-3">
            <Icon name="Target" size={20} className="text-primary" />
            <div>
              <h4 className="font-medium text-gray-900">Join the Regional Champions</h4>
              <p className="text-sm text-gray-600">
                Follow top-ranked crops and connect with successful farmers in {currentData?.name}
              </p>
            </div>
            <button className="ml-auto px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalLeaderboard;
