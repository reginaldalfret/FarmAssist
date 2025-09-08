import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadge = ({ achievement, size = 'default', showDetails = true }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    default: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const iconSizes = {
    small: 14,
    default: 20,
    large: 24
  };

  const getAchievementStyle = (type) => {
    switch (type) {
      case 'gold':
        return {
          bg: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
          border: 'border-yellow-300',
          glow: 'shadow-yellow-200'
        };
      case 'silver':
        return {
          bg: 'bg-gradient-to-br from-gray-300 to-gray-500',
          border: 'border-gray-200',
          glow: 'shadow-gray-200'
        };
      case 'bronze':
        return {
          bg: 'bg-gradient-to-br from-amber-600 to-amber-800',
          border: 'border-amber-300',
          glow: 'shadow-amber-200'
        };
      case 'platinum':
        return {
          bg: 'bg-gradient-to-br from-purple-500 to-purple-700',
          border: 'border-purple-300',
          glow: 'shadow-purple-200'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-primary to-secondary',
          border: 'border-primary/30',
          glow: 'shadow-primary/20'
        };
    }
  };

  const style = getAchievementStyle(achievement?.type);

  if (!showDetails) {
    return (
      <div
        className={`${sizeClasses?.[size]} ${style?.bg} ${style?.border} border-2 rounded-full flex items-center justify-center shadow-lg ${style?.glow}`}
        title={achievement?.name}
      >
        <Icon name={achievement?.icon} size={iconSizes?.[size]} className="text-white" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className={`${sizeClasses?.large} ${style?.bg} ${style?.border} border-2 rounded-full flex items-center justify-center shadow-lg ${style?.glow} flex-shrink-0`}>
          <Icon name={achievement?.icon} size={iconSizes?.large} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900 truncate">{achievement?.name}</h3>
            {achievement?.isNew && (
              <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                NEW
              </span>
            )}
          </div>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{achievement?.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={14} />
                <span>Earned {achievement?.earnedDate}</span>
              </div>
              {achievement?.rarity && (
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} />
                  <span>{achievement?.rarity}% of farmers</span>
                </div>
              )}
            </div>
            {achievement?.points && (
              <div className="flex items-center space-x-1 text-primary font-semibold">
                <Icon name="Zap" size={14} />
                <span>{achievement?.points} pts</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementBadge;