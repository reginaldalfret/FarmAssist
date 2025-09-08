import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const MobileCropCards = ({ crops, onCropSelect, selectedCrops }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % crops?.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + crops?.length) % crops?.length);
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return { icon: 'Crown', color: 'text-yellow-500' };
    if (rank === 2) return { icon: 'Medal', color: 'text-gray-400' };
    if (rank === 3) return { icon: 'Award', color: 'text-orange-600' };
    return { icon: 'Hash', color: 'text-gray-400' };
  };

  const getSuccessProbabilityColor = (probability) => {
    if (probability >= 80) return 'text-green-600 bg-green-50';
    if (probability >= 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getROIColor = (roi) => {
    if (roi >= 150) return 'text-green-600';
    if (roi >= 100) return 'text-yellow-600';
    return 'text-red-600';
  };

  const currentCrop = crops?.[currentIndex];
  const rankIcon = getRankIcon(currentCrop?.rank);
  const isSelected = selectedCrops?.includes(currentCrop?.id);

  return (
    <div className="lg:hidden bg-white rounded-xl shadow-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Crop Rankings</h3>
        <div className="text-sm text-gray-500">
          {currentIndex + 1} of {crops?.length}
        </div>
      </div>
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevCard}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 z-10 w-8 h-8 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary"
        >
          <Icon name="ChevronLeft" size={16} />
        </button>
        
        <button
          onClick={nextCard}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 z-10 w-8 h-8 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary"
        >
          <Icon name="ChevronRight" size={16} />
        </button>

        {/* Crop Card */}
        <div className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 transition-all duration-300 ${
          isSelected ? 'border-primary bg-primary/5' : 'border-gray-200'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Icon 
                name={rankIcon?.icon} 
                size={24} 
                className={rankIcon?.color} 
              />
              <div>
                <h4 className="text-lg font-bold text-gray-900">{currentCrop?.name}</h4>
                <p className="text-sm text-gray-600">{currentCrop?.variety}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">#{currentCrop?.rank}</div>
              <button
                onClick={() => onCropSelect(currentCrop?.id)}
                className={`mt-1 w-6 h-6 rounded border-2 flex items-center justify-center ${
                  isSelected 
                    ? 'bg-primary border-primary' :'border-gray-300 hover:border-primary'
                }`}
              >
                {isSelected && <Icon name="Check" size={14} className="text-white" />}
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                getSuccessProbabilityColor(currentCrop?.successProbability)
              }`}>
                {currentCrop?.successProbability}%
              </div>
              <div className="text-xs text-gray-500 mt-1">Success Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">
                {currentCrop?.expectedYield} Q/Ha
              </div>
              <div className="text-xs text-gray-500">Expected Yield</div>
            </div>
          </div>

          {/* Investment & ROI */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">
                ₹{(currentCrop?.investment / 1000)?.toFixed(0)}K
              </div>
              <div className="text-xs text-gray-500">Investment</div>
            </div>
            
            <div className="text-center">
              <div className={`text-lg font-bold ${getROIColor(currentCrop?.roi)}`}>
                {currentCrop?.roi}%
              </div>
              <div className="text-xs text-gray-500">ROI</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-600">Success Probability</span>
              <span className="text-xs font-medium text-gray-900">{currentCrop?.successProbability}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${currentCrop?.successProbability}%` }}
              ></div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Yield Range:</span>
              <span className="text-xs font-medium text-gray-900">{currentCrop?.yieldRange}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Water Need:</span>
              <span className="text-xs font-medium text-gray-900">{currentCrop?.waterRequirement}mm</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Growth Period:</span>
              <span className="text-xs font-medium text-gray-900">{currentCrop?.growthPeriod} days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Market Price:</span>
              <span className="text-xs font-medium text-gray-900">₹{currentCrop?.marketPrice}/Q</span>
            </div>
          </div>

          {/* Trend Indicator */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon 
                  name={currentCrop?.trend === 'up' ? 'TrendingUp' : currentCrop?.trend === 'down' ? 'TrendingDown' : 'Minus'} 
                  size={16} 
                  className={
                    currentCrop?.trend === 'up' ? 'text-green-500' : 
                    currentCrop?.trend === 'down' ? 'text-red-500' : 'text-gray-400'
                  } 
                />
                <span className="text-sm text-gray-600">Market Trend</span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                {currentCrop?.trendValue}
              </span>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-4">
          {crops?.slice(0, 5)?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
          {crops?.length > 5 && (
            <span className="text-xs text-gray-500 ml-2">
              +{crops?.length - 5} more
            </span>
          )}
        </div>
      </div>
      {/* Quick Actions */}
      <div className="mt-4 flex space-x-2">
        <button className="flex-1 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">
          View Details
        </button>
        <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
          Compare
        </button>
      </div>
    </div>
  );
};

export default MobileCropCards;