import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveSliders = () => {
  const [criteria, setCriteria] = useState({
    weather: 25,
    soil: 20,
    market: 30,
    yield: 15,
    sustainability: 10
  });

  const [selectedCrop, setSelectedCrop] = useState('mustard');

  const cropData = {
    mustard: {
      name: 'Mustard (Pusa Bold)',
      baseScore: 91,
      factors: {
        weather: { score: 88, description: 'Cool dry winters ideal for mustard growth' },
        soil: { score: 90, description: 'Sandy loam to loam soils of Rajasthan/Punjab' },
        market: { score: 95, description: 'High edible oil demand, strong MSP support' },
        yield: { score: 89, description: 'High oil content (42%), reliable yield' },
        sustainability: { score: 87, description: 'Low water requirement, nitrogen fixing' }
      }
    },
    soybean: {
      name: 'Soybean (JS 335)',
      baseScore: 86,
      factors: {
        weather: { score: 84, description: 'Kharif crop, medium rainfall requirement' },
        soil: { score: 88, description: 'Well-drained black/loamy soils of MP/Maharashtra' },
        market: { score: 85, description: 'Dual use: edible oil + protein meal export' },
        yield: { score: 83, description: 'Consistent 18-22 Q/Ha with good practices' },
        sustainability: { score: 90, description: 'Nitrogen-fixing legume, improves soil health' }
      }
    },
    sunflower: {
      name: 'Sunflower (KBSH 44)',
      baseScore: 83,
      factors: {
        weather: { score: 80, description: 'Adaptable, grows across rabi and kharif seasons' },
        soil: { score: 82, description: 'Well-drained deep soils, pH 6.0-8.0' },
        market: { score: 87, description: 'Premium edible oil, high consumer demand' },
        yield: { score: 85, description: 'High oil extraction rate ~40-42%' },
        sustainability: { score: 78, description: 'Moderate water use, drought tolerant' }
      }
    }
  };

  const handleCriteriaChange = (criterion, value) => {
    setCriteria(prev => ({
      ...prev,
      [criterion]: value
    }));
  };

  const calculateAdjustedScore = () => {
    const crop = cropData?.[selectedCrop];
    const totalWeight = Object.values(criteria)?.reduce((sum, weight) => sum + weight, 0);
    
    if (totalWeight === 0) return crop?.baseScore;
    
    let weightedScore = 0;
    Object.entries(criteria)?.forEach(([criterion, weight]) => {
      const normalizedWeight = weight / totalWeight;
      weightedScore += crop?.factors?.[criterion]?.score * normalizedWeight;
    });
    
    return Math.round(weightedScore * 10) / 10;
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    if (score >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreBg = (score) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 80) return 'bg-yellow-100';
    if (score >= 70) return 'bg-orange-100';
    return 'bg-red-100';
  };

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Sliders" size={16} />
            <span>Interactive Customization</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Customize Your <span className="text-brand-gradient">Ranking Criteria</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Adjust the importance of different factors and see how it affects crop rankings in real-time. This demonstrates our platform's personalization capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Controls Panel */}
          <div className="space-y-8">
            {/* Crop Selection */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Crop</h3>
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(cropData)?.map(([key, crop]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCrop(key)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
                      selectedCrop === key
                        ? 'border-primary bg-primary/5 text-primary' :'border-gray-200 bg-white hover:border-primary/30'
                    }`}
                  >
                    {crop?.name?.split(' ')?.[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Criteria Sliders */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Ranking Criteria Weights</h3>
                <button
                  onClick={() => setCriteria({ weather: 20, soil: 20, market: 20, yield: 20, sustainability: 20 })}
                  className="text-sm text-primary hover:text-primary/80 font-medium"
                >
                  Reset to Equal
                </button>
              </div>

              <div className="space-y-6">
                {Object.entries(criteria)?.map(([criterion, value]) => {
                  const crop = cropData?.[selectedCrop];
                  const factor = crop?.factors?.[criterion];
                  
                  return (
                    <div key={criterion}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <Icon 
                            name={
                              criterion === 'weather' ? 'Cloud' :
                              criterion === 'soil' ? 'Mountain' :
                              criterion === 'market' ? 'TrendingUp' :
                              criterion === 'yield'? 'BarChart3' : 'Leaf'
                            } 
                            size={16} 
                            className="text-gray-500" 
                          />
                          <label className="text-sm font-medium text-gray-700 capitalize">
                            {criterion === 'yield' ? 'Historical Yield' : criterion}
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-semibold text-primary">{value}%</span>
                          <span className={`text-xs px-2 py-1 rounded ${getScoreBg(factor?.score)} ${getScoreColor(factor?.score)}`}>
                            {factor?.score}
                          </span>
                        </div>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="50"
                        value={value}
                        onChange={(e) => handleCriteriaChange(criterion, parseInt(e?.target?.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #16a34a 0%, #16a34a ${value * 2}%, #e5e7eb ${value * 2}%, #e5e7eb 100%)`
                        }}
                      />
                      <p className="text-xs text-gray-500 mt-1">{factor?.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Total Weight Indicator */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Total Weight:</span>
                  <span className={`text-sm font-bold ${
                    Object.values(criteria)?.reduce((sum, val) => sum + val, 0) === 100 
                      ? 'text-green-600' :'text-amber-600'
                  }`}>
                    {Object.values(criteria)?.reduce((sum, val) => sum + val, 0)}%
                  </span>
                </div>
                {Object.values(criteria)?.reduce((sum, val) => sum + val, 0) !== 100 && (
                  <p className="text-xs text-amber-600 mt-1">
                    Weights don't need to total 100% - they'll be normalized automatically
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-8">
            {/* Adjusted Score Display */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cropData?.[selectedCrop]?.name}
                </h3>
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Base Score</div>
                    <div className="text-2xl font-bold text-gray-400">
                      {cropData?.[selectedCrop]?.baseScore}
                    </div>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-gray-400" />
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Adjusted Score</div>
                    <div className={`text-4xl font-bold ${getScoreColor(calculateAdjustedScore())}`}>
                      {calculateAdjustedScore()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Score Breakdown */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-900">Score Breakdown</h4>
                {Object.entries(criteria)?.map(([criterion, weight]) => {
                  const factor = cropData?.[selectedCrop]?.factors?.[criterion];
                  const totalWeight = Object.values(criteria)?.reduce((sum, val) => sum + val, 0);
                  const normalizedWeight = totalWeight > 0 ? (weight / totalWeight) * 100 : 0;
                  const contribution = (factor?.score * normalizedWeight / 100)?.toFixed(1);
                  
                  return (
                    <div key={criterion} className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Icon 
                          name={
                            criterion === 'weather' ? 'Cloud' :
                            criterion === 'soil' ? 'Mountain' :
                            criterion === 'market' ? 'TrendingUp' :
                            criterion === 'yield'? 'BarChart3' : 'Leaf'
                          } 
                          size={14} 
                          className="text-gray-500" 
                        />
                        <span className="capitalize text-gray-700">
                          {criterion === 'yield' ? 'Historical Yield' : criterion}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500">{normalizedWeight?.toFixed(0)}% ×</span>
                        <span className={getScoreColor(factor?.score)}>{factor?.score}</span>
                        <span className="text-gray-500">=</span>
                        <span className="font-semibold text-primary">{contribution}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Ranking Comparison */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                How This Affects Rankings
              </h3>
              
              <div className="space-y-4">
                {Object.entries(cropData)?.map(([key, crop]) => {
                  const totalWeight = Object.values(criteria)?.reduce((sum, val) => sum + val, 0);
                  let adjustedScore = crop?.baseScore;
                  
                  if (totalWeight > 0) {
                    adjustedScore = 0;
                    Object.entries(criteria)?.forEach(([criterion, weight]) => {
                      const normalizedWeight = weight / totalWeight;
                      adjustedScore += crop?.factors?.[criterion]?.score * normalizedWeight;
                    });
                  }
                  
                  return (
                    <div
                      key={key}
                      className={`flex items-center justify-between p-3 rounded-lg border-2 ${
                        selectedCrop === key
                          ? 'border-primary bg-primary/5' :'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          adjustedScore >= 85 ? 'bg-green-100 text-green-800' :
                          adjustedScore >= 80 ? 'bg-yellow-100 text-yellow-800': 'bg-orange-100 text-orange-800'
                        }`}>
                          {Object.values(cropData)?.map(c => {
                              let score = c?.baseScore;
                              if (totalWeight > 0) {
                                score = 0;
                                Object.entries(criteria)?.forEach(([criterion, weight]) => {
                                  const normalizedWeight = weight / totalWeight;
                                  score += c?.factors?.[criterion]?.score * normalizedWeight;
                                });
                              }
                              return { ...c, adjustedScore: score };
                            })?.sort((a, b) => b?.adjustedScore - a?.adjustedScore)?.findIndex(c => c?.name === crop?.name) + 1
                          }
                        </div>
                        <span className="font-medium text-gray-900">{crop?.name}</span>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${getScoreColor(adjustedScore)}`}>
                          {Math.round(adjustedScore * 10) / 10}
                        </div>
                        <div className="text-xs text-gray-500">
                          {adjustedScore > crop?.baseScore ? '+' : ''}
                          {Math.round((adjustedScore - crop?.baseScore) * 10) / 10}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveSliders;
