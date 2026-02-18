import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const AlgorithmInAction = () => {
  const [selectedScenario, setSelectedScenario] = useState('seasonal');
  const [sliderValues, setSliderValues] = useState({
    weather: 25,
    soil: 20,
    market: 30,
    yield: 25
  });

  const scenarios = [
    {
      id: 'seasonal',
      name: 'Seasonal Changes',
      icon: 'Calendar',
      description: 'How rankings adapt to monsoon and harvest seasons'
    },
    {
      id: 'regional',
      name: 'Regional Variations',
      icon: 'MapPin',
      description: 'Location-specific ranking adjustments'
    },
    {
      id: 'market',
      name: 'Market Conditions',
      icon: 'TrendingUp',
      description: 'Price fluctuation impact on recommendations'
    }
  ];

  const cropRankings = [
    {
      id: 1,
      name: 'Mustard (Pusa Bold)',
      currentRank: 1,
      previousRank: 3,
      score: 94.2,
      change: '+2',
      factors: {
        weather: 'Optimal cool-dry winter forecast',
        market: 'Edible oil import prices rising',
        soil: 'Perfect sandy-loam pH levels',
        yield: 'High success rate in Rajasthan/Haryana'
      }
    },
    {
      id: 2,
      name: 'Soybean (JS 335)',
      currentRank: 2,
      previousRank: 1,
      score: 91.8,
      change: '-1',
      factors: {
        weather: 'Good kharif rainfall predicted',
        market: 'Protein meal export demand stable',
        soil: 'Excellent black soil nutrient levels',
        yield: 'Consistent performance in MP/Maharashtra'
      }
    },
    {
      id: 3,
      name: 'Groundnut (TAG 24)',
      currentRank: 3,
      previousRank: 4,
      score: 89.5,
      change: '+1',
      factors: {
        weather: 'Sandy soil moisture optimized',
        market: 'Cold-pressed oil premium demand rising',
        soil: 'Sandy loam drainage ideal in Gujarat',
        yield: '18-21 Q/Ha achievable this season'
      }
    }
  ];

  const handleSliderChange = (factor, value) => {
    setSliderValues(prev => ({
      ...prev,
      [factor]: value
    }));
  };

  const getUpdatedRankings = () => {
    const total = Object.values(sliderValues)?.reduce((sum, val) => sum + val, 0);
    return cropRankings?.map(crop => ({
      ...crop,
      adjustedScore: ((crop?.score * sliderValues?.weather / 100 * 0.25) +
      (crop?.score * sliderValues?.soil / 100 * 0.20) +
      (crop?.score * sliderValues?.market / 100 * 0.30) + (crop?.score * sliderValues?.yield / 100 * 0.25))?.toFixed(1)
    }))?.sort((a, b) => b?.adjustedScore - a?.adjustedScore);
  };

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Play" size={16} />
            <span>Algorithm in Action</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            See Rankings <span className="text-brand-gradient">Adapt in Real-Time</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how our AI algorithms dynamically adjust crop rankings based on changing conditions and your custom preferences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Controls */}
          <div className="space-y-8">
            {/* Scenario Selection */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Scenario</h3>
              <div className="space-y-3">
                {scenarios?.map(scenario => (
                  <button
                    key={scenario?.id}
                    onClick={() => setSelectedScenario(scenario?.id)}
                    className={`w-full flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedScenario === scenario?.id
                        ? 'border-primary bg-primary/5 text-primary' :'border-gray-200 bg-white hover:border-primary/30'
                    }`}
                  >
                    <Icon name={scenario?.icon} size={20} />
                    <div className="text-left">
                      <div className="font-medium">{scenario?.name}</div>
                      <div className="text-sm opacity-70">{scenario?.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Weight Sliders */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Customize Ranking Criteria
              </h3>
              <div className="space-y-6">
                {Object.entries(sliderValues)?.map(([factor, value]) => (
                  <div key={factor}>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-700 capitalize">
                        {factor === 'yield' ? 'Historical Yield' : factor} Weight
                      </label>
                      <span className="text-sm font-semibold text-primary">{value}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={value}
                      onChange={(e) => handleSliderChange(factor, parseInt(e?.target?.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #16a34a 0%, #16a34a ${value * 2}%, #e5e7eb ${value * 2}%, #e5e7eb 100%)`
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 text-blue-700 text-sm">
                  <Icon name="Info" size={16} />
                  <span>Total weight: {Object.values(sliderValues)?.reduce((sum, val) => sum + val, 0)}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Rankings Display */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Updated Rankings</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon name="RefreshCw" size={16} />
                <span>Live Updates</span>
              </div>
            </div>

            <div className="space-y-4">
              {getUpdatedRankings()?.map((crop, index) => (
                <div
                  key={crop?.id}
                  className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-yellow-100 text-yellow-800' :
                        index === 1 ? 'bg-gray-100 text-gray-800': 'bg-amber-100 text-amber-800'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{crop?.name}</h4>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-gray-600">Score:</span>
                          <span className="font-semibold text-primary">{crop?.adjustedScore}</span>
                          {crop?.change && (
                            <span className={`flex items-center space-x-1 ${
                              crop?.change?.startsWith('+') ? 'text-green-600' : 'text-red-600'
                            }`}>
                              <Icon 
                                name={crop?.change?.startsWith('+') ? 'ArrowUp' : 'ArrowDown'} 
                                size={12} 
                              />
                              <span>{crop?.change}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ranking Factors */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(crop?.factors)?.map(([factor, description]) => (
                      <div key={factor} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          factor === 'weather' ? 'bg-blue-500' :
                          factor === 'soil' ? 'bg-amber-600' :
                          factor === 'market'? 'bg-green-600' : 'bg-purple-600'
                        }`} />
                        <span className="text-gray-600 truncate">{description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Confidence Indicator */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Shield" size={16} className="text-green-600" />
                <span className="text-sm font-medium text-green-800">Confidence Level</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-1 bg-green-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }} />
                </div>
                <span className="text-sm font-semibold text-green-800">92%</span>
              </div>
              <p className="text-xs text-green-700 mt-1">
                High confidence based on current data quality and historical accuracy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmInAction;
