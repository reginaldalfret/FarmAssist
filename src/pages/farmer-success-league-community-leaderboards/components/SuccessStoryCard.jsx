import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SuccessStoryCard = ({ story }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(amount);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={story?.image}
          alt={`${story?.farmerName}'s success story`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
              SUCCESS STORY
            </div>
            <div className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              {story?.category}
            </div>
          </div>
          <h3 className="text-white text-lg font-bold">{story?.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Image
            src={story?.farmerAvatar}
            alt={`${story?.farmerName} profile`}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-900">{story?.farmerName}</p>
            <p className="text-sm text-gray-500">{story?.location} • {story?.farmSize} hectares</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="TrendingUp" size={16} className="text-green-600" />
              <span className="text-sm font-medium text-green-800">Yield Increase</span>
            </div>
            <p className="text-xl font-bold text-green-600">+{story?.yieldIncrease}%</p>
            <p className="text-xs text-green-600">{story?.yieldBefore} → {story?.yieldAfter} kg/ha</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="IndianRupee" size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Profit Increase</span>
            </div>
            <p className="text-xl font-bold text-blue-600">+{story?.profitIncrease}%</p>
            <p className="text-xs text-blue-600">{formatCurrency(story?.additionalProfit)} more</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            {isExpanded ? story?.fullDescription : `${story?.description?.substring(0, 120)}...`}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary text-sm font-medium hover:text-primary/80 transition-colors mt-2"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">AgroYield AI Recommendations Used:</span>
            <span className="text-sm text-primary font-semibold">{story?.recommendationsUsed}/5</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {story?.recommendations?.map((rec, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
              >
                {rec}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={14} />
                <span>Season: {story?.season}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>{story?.timeframe}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="ThumbsUp" size={14} />
              <span>{story?.likes} likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
