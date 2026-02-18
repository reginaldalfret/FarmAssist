import React from 'react';
import Icon from '../../../components/AppIcon';

const SeasonalTournament = ({ selectedSeason, onSeasonChange }) => {
  const tournaments = [
    {
      season: 'Kharif',
      period: 'Jun - Oct 2024',
      icon: 'CloudRain',
      color: 'bg-blue-500',
      description: 'Monsoon season oilseed crops',
      activeRegions: 28,
      totalCrops: 45,
      leadingCrop: 'Soybean',
      leadingYield: '12.5 Q/Ha'
    },
    {
      season: 'Rabi',
      period: 'Nov - Apr 2025',
      icon: 'Sun',
      color: 'bg-orange-500',
      description: 'Winter season oilseed crops',
      activeRegions: 32,
      totalCrops: 38,
      leadingCrop: 'Mustard',
      leadingYield: '18.9 Q/Ha'
    },
    {
      season: 'Zaid',
      period: 'May - Aug 2024',
      icon: 'Thermometer',
      color: 'bg-red-500',
      description: 'Summer season oilseed crops',
      activeRegions: 18,
      totalCrops: 22,
      leadingCrop: 'Groundnut',
      leadingYield: '18.7 Q/Ha'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name="Trophy" size={24} className="text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Seasonal Tournament</h2>
            <p className="text-sm text-gray-600">Live crop performance rankings</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Icon name="Clock" size={16} />
          <span>Updated 2 hours ago</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tournaments?.map((tournament) => (
          <div
            key={tournament?.season}
            onClick={() => onSeasonChange(tournament?.season)}
            className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedSeason === tournament?.season
                ? 'border-primary bg-primary/5' :'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`p-2 ${tournament?.color} rounded-lg`}>
                  <Icon name={tournament?.icon} size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{tournament?.season}</h3>
                  <p className="text-xs text-gray-500">{tournament?.period}</p>
                </div>
              </div>
              {selectedSeason === tournament?.season && (
                <div className="p-1 bg-primary rounded-full">
                  <Icon name="Check" size={16} className="text-white" />
                </div>
              )}
            </div>

            <p className="text-sm text-gray-600 mb-3">{tournament?.description}</p>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Active Regions</span>
                <span className="text-sm font-medium text-gray-900">{tournament?.activeRegions}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Total Crops</span>
                <span className="text-sm font-medium text-gray-900">{tournament?.totalCrops}</span>
              </div>
              <div className="pt-2 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Crown" size={16} className="text-yellow-500" />
                    <span className="text-sm font-medium text-gray-900">{tournament?.leadingCrop}</span>
                  </div>
                  <span className="text-sm text-primary font-medium">{tournament?.leadingYield}</span>
                </div>
              </div>
            </div>

            {selectedSeason === tournament?.season && (
              <div className="absolute -top-1 -right-1">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
        <div className="flex items-center space-x-3">
          <Icon name="Zap" size={20} className="text-primary" />
          <div>
            <h4 className="font-medium text-gray-900">Live Tournament Updates</h4>
            <p className="text-sm text-gray-600">Rankings update every 6 hours based on real-time field data and market conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalTournament;
