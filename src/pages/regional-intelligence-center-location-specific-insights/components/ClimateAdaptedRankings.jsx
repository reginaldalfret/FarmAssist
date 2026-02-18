import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ClimateAdaptedRankings = () => {
  const [selectedSeason, setSelectedSeason] = useState('kharif');
  const [selectedClimate, setSelectedClimate] = useState('monsoon');

  const climateData = {
    monsoon: {
      name: 'Monsoon Season',
      icon: 'CloudRain',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'High rainfall, humid conditions'
    },
    winter: {
      name: 'Winter Season',
      icon: 'Snowflake',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      description: 'Cool, dry conditions'
    },
    summer: {
      name: 'Summer Season',
      icon: 'Sun',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Hot, dry conditions'
    }
  };

  const cropRankings = {
    kharif: {
      monsoon: [
        {
          rank: 1,
          crop: 'Soybean',
          adaptationScore: 96,
          expectedYield: '1.8 t/ha',
          profitability: '₹78,000/ha',
          riskLevel: 'Low',
          waterRequirement: 'Medium',
          climateMatch: 98
        },
        {
          rank: 2,
          crop: 'Groundnut',
          adaptationScore: 94,
          expectedYield: '2.1 t/ha',
          profitability: '₹1,05,000/ha',
          riskLevel: 'Medium',
          waterRequirement: 'Low',
          climateMatch: 95
        },
        {
          rank: 3,
          crop: 'Sesame',
          adaptationScore: 89,
          expectedYield: '0.9 t/ha',
          profitability: '₹95,000/ha',
          riskLevel: 'Medium',
          waterRequirement: 'Low',
          climateMatch: 92
        },
        {
          rank: 4,
          crop: 'Sunflower',
          adaptationScore: 87,
          expectedYield: '2.2 t/ha',
          profitability: '₹85,000/ha',
          riskLevel: 'Low',
          waterRequirement: 'Medium',
          climateMatch: 89
        },
        {
          rank: 5,
          crop: 'Castor',
          adaptationScore: 84,
          expectedYield: '1.8 t/ha',
          profitability: '₹72,000/ha',
          riskLevel: 'Medium',
          waterRequirement: 'Low',
          climateMatch: 86
        }
      ]
    },
    rabi: {
      winter: [
        {
          rank: 1,
          crop: 'Mustard',
          adaptationScore: 97,
          expectedYield: '1.9 t/ha',
          profitability: '₹88,000/ha',
          riskLevel: 'Low',
          waterRequirement: 'Low',
          climateMatch: 98
        },
        {
          rank: 2,
          crop: 'Linseed',
          adaptationScore: 91,
          expectedYield: '1.1 t/ha',
          profitability: '₹62,000/ha',
          riskLevel: 'Low',
          waterRequirement: 'Low',
          climateMatch: 93
        },
        {
          rank: 3,
          crop: 'Safflower',
          adaptationScore: 88,
          expectedYield: '1.3 t/ha',
          profitability: '₹70,000/ha',
          riskLevel: 'Low',
          waterRequirement: 'Low',
          climateMatch: 90
        },
        {
          rank: 4,
          crop: 'Sunflower',
          adaptationScore: 85,
          expectedYield: '2.0 t/ha',
          profitability: '₹80,000/ha',
          riskLevel: 'Low',
          waterRequirement: 'Medium',
          climateMatch: 87
        },
        {
          rank: 5,
          crop: 'Soybean',
          adaptationScore: 82,
          expectedYield: '1.5 t/ha',
          profitability: '₹65,000/ha',
          riskLevel: 'Medium',
          waterRequirement: 'Medium',
          climateMatch: 84
        }
      ]
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return 'text-yellow-600 bg-yellow-100 border-yellow-300';
      case 2: return 'text-gray-600 bg-gray-100 border-gray-300';
      case 3: return 'text-orange-600 bg-orange-100 border-orange-300';
      default: return 'text-blue-600 bg-blue-100 border-blue-300';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const currentRankings = cropRankings?.[selectedSeason]?.[selectedClimate] || cropRankings?.kharif?.monsoon;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Climate-Adapted Rankings</h3>
          <div className="flex items-center space-x-2">
            <Icon name="Thermometer" size={20} className="text-primary" />
            <span className="text-sm font-medium text-gray-600">Real-time Climate Data</span>
          </div>
        </div>

        {/* Season Selection */}
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-sm font-medium text-gray-700">Season:</span>
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedSeason('kharif')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSeason === 'kharif'
                  ? 'bg-primary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Kharif
            </button>
            <button
              onClick={() => setSelectedSeason('rabi')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSeason === 'rabi' ?'bg-primary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Rabi
            </button>
          </div>
        </div>

        {/* Climate Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {Object.entries(climateData)?.map(([key, climate]) => (
            <button
              key={key}
              onClick={() => setSelectedClimate(key)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                selectedClimate === key
                  ? `${climate?.bgColor} border-current ${climate?.color}`
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon name={climate?.icon} size={20} className={selectedClimate === key ? climate?.color : 'text-gray-500'} />
                <div className="text-left">
                  <div className={`font-medium ${selectedClimate === key ? climate?.color : 'text-gray-700'}`}>
                    {climate?.name}
                  </div>
                  <div className="text-xs text-gray-500">{climate?.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {currentRankings?.map((crop) => (
            <div key={crop?.rank} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold ${getRankColor(crop?.rank)}`}>
                    {crop?.rank}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{crop?.crop}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>Adaptation Score:</span>
                      <span className="font-semibold text-primary">{crop?.adaptationScore}/100</span>
                    </div>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(crop?.riskLevel)}`}>
                  {crop?.riskLevel} Risk
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{crop?.expectedYield}</div>
                  <div className="text-xs text-gray-600">Expected Yield</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">{crop?.profitability}</div>
                  <div className="text-xs text-gray-600">Profitability</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">{crop?.waterRequirement}</div>
                  <div className="text-xs text-gray-600">Water Need</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-secondary">{crop?.climateMatch}%</div>
                  <div className="text-xs text-gray-600">Climate Match</div>
                </div>
              </div>

              {/* Climate Match Progress Bar */}
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                  <span>Climate Compatibility</span>
                  <span>{crop?.climateMatch}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${crop?.climateMatch}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weather Forecast Integration */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="CloudRain" size={20} className="text-blue-600" />
            <h4 className="font-bold text-blue-900">7-Day Weather Forecast Impact</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Droplets" size={16} className="text-blue-500" />
              <span className="text-gray-700">Expected Rainfall: <strong>45mm</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Thermometer" size={16} className="text-orange-500" />
              <span className="text-gray-700">Avg Temperature: <strong>28°C</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Wind" size={16} className="text-gray-500" />
              <span className="text-gray-700">Humidity: <strong>75%</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateAdaptedRankings;
