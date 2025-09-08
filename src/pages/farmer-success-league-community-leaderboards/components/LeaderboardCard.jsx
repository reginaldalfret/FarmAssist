import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LeaderboardCard = ({ farmer, rank, category = 'overall' }) => {
  const getRankIcon = (position) => {
    if (position === 1) return { icon: 'Trophy', color: 'text-yellow-500', bg: 'bg-yellow-50' };
    if (position === 2) return { icon: 'Medal', color: 'text-gray-400', bg: 'bg-gray-50' };
    if (position === 3) return { icon: 'Award', color: 'text-amber-600', bg: 'bg-amber-50' };
    return { icon: 'User', color: 'text-gray-500', bg: 'bg-gray-50' };
  };

  const rankStyle = getRankIcon(rank);

  const getCategoryMetric = () => {
    switch (category) {
      case 'yield':
        return { label: 'Yield', value: `${farmer?.yieldPerHectare} kg/ha`, icon: 'TrendingUp' };
      case 'profit':
        return { label: 'Profit Margin', value: `${farmer?.profitMargin}%`, icon: 'IndianRupee' };
      case 'sustainability':
        return { label: 'Sustainability Score', value: `${farmer?.sustainabilityScore}/100`, icon: 'Leaf' };
      default:
        return { label: 'Overall Score', value: `${farmer?.overallScore}/100`, icon: 'Star' };
    }
  };

  const metric = getCategoryMetric();

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 rounded-full ${rankStyle?.bg} flex items-center justify-center`}>
            <Icon name={rankStyle?.icon} size={20} className={rankStyle?.color} />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">#{rank}</span>
              {rank <= 3 && (
                <div className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  TOP {rank}
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500">{farmer?.location}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-1 text-gray-600 mb-1">
            <Icon name={metric?.icon} size={16} />
            <span className="text-sm font-medium">{metric?.label}</span>
          </div>
          <p className="text-xl font-bold text-primary">{metric?.value}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src={farmer?.avatar}
            alt={`${farmer?.name} profile`}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-900">{farmer?.name}</p>
            <p className="text-sm text-gray-500">{farmer?.farmSize} hectares • {farmer?.primaryCrop}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {farmer?.badges?.slice(0, 2)?.map((badge, index) => (
            <div
              key={index}
              className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
              title={badge?.name}
            >
              <Icon name={badge?.icon} size={14} className="text-white" />
            </div>
          ))}
          {farmer?.badges?.length > 2 && (
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-semibold text-gray-600">
              +{farmer?.badges?.length - 2}
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Improvement this season</span>
          <div className="flex items-center space-x-1">
            <Icon 
              name={farmer?.improvement >= 0 ? 'TrendingUp' : 'TrendingDown'} 
              size={14} 
              className={farmer?.improvement >= 0 ? 'text-green-500' : 'text-red-500'} 
            />
            <span className={`font-semibold ${farmer?.improvement >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {farmer?.improvement >= 0 ? '+' : ''}{farmer?.improvement}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardCard;