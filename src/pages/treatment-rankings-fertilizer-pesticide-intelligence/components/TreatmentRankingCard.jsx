import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TreatmentRankingCard = ({ treatment, rank, onCompare, onViewDetails }) => {
  const getRankingBadge = (position) => {
    if (position === 1) return { color: 'bg-yellow-500', icon: 'Trophy', text: 'Gold' };
    if (position === 2) return { color: 'bg-gray-400', icon: 'Medal', text: 'Silver' };
    if (position === 3) return { color: 'bg-amber-600', icon: 'Award', text: 'Bronze' };
    return { color: 'bg-gray-200', icon: 'Hash', text: `#${position}` };
  };

  const badge = getRankingBadge(rank);

  const getEffectivenessColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 80) return 'text-blue-600 bg-blue-50';
    if (score >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getSafetyColor = (rating) => {
    if (rating === 'A') return 'text-green-600 bg-green-50';
    if (rating === 'B') return 'text-blue-600 bg-blue-50';
    if (rating === 'C') return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Header with Ranking Badge */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`${badge?.color} p-2 rounded-lg text-white`}>
              <Icon name={badge?.icon} size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{treatment?.name}</h3>
              <p className="text-sm text-gray-600">{treatment?.brand} • {treatment?.type}</p>
            </div>
          </div>
          <div className="text-right">
            <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${badge?.color} text-white`}>
              {badge?.text}
            </div>
            <p className="text-sm text-gray-500 mt-1">Rank #{rank}</p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="text-center">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getEffectivenessColor(treatment?.effectiveness)}`}>
              {treatment?.effectiveness}%
            </div>
            <p className="text-xs text-gray-500 mt-1">Effectiveness</p>
          </div>
          <div className="text-center">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getSafetyColor(treatment?.safetyRating)}`}>
              Grade {treatment?.safetyRating}
            </div>
            <p className="text-xs text-gray-500 mt-1">Safety</p>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">₹{treatment?.pricePerHectare}</div>
            <p className="text-xs text-gray-500">per hectare</p>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">{treatment?.roiPercentage}%</div>
            <p className="text-xs text-gray-500">Expected ROI</p>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {treatment?.features?.map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Regional Performance */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Best Performance Regions:</p>
          <div className="flex flex-wrap gap-2">
            {treatment?.topRegions?.map((region, index) => (
              <span
                key={index}
                className="inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700"
              >
                <Icon name="MapPin" size={12} />
                <span>{region}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="default"
            size="sm"
            iconName="Eye"
            iconPosition="left"
            onClick={() => onViewDetails(treatment)}
            className="flex-1"
          >
            View Details
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="GitCompare"
            iconPosition="left"
            onClick={() => onCompare(treatment)}
            className="flex-1"
          >
            Compare
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentRankingCard;