import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ChallengeCard = ({ challenge }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' };
      case 'upcoming':
        return { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' };
      case 'completed':
        return { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' };
      default:
        return { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' };
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-600 bg-green-50';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'Hard':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const statusStyle = getStatusColor(challenge?.status);
  const progressPercentage = (challenge?.currentParticipants / challenge?.maxParticipants) * 100;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
            <Icon name={challenge?.icon} size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{challenge?.title}</h3>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusStyle?.bg} ${statusStyle?.text} ${statusStyle?.border} border`}>
                {challenge?.status?.toUpperCase()}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge?.difficulty)}`}>
                {challenge?.difficulty}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-1 text-primary mb-1">
            <Icon name="Gift" size={16} />
            <span className="text-sm font-semibold">₹{challenge?.reward?.toLocaleString('en-IN')}</span>
          </div>
          <p className="text-xs text-gray-500">Prize Pool</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{challenge?.description}</p>
      <div className="space-y-4 mb-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Participants</span>
            <span className="text-sm text-gray-500">
              {challenge?.currentParticipants}/{challenge?.maxParticipants}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={16} className="text-gray-400" />
            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="text-sm font-semibold text-gray-900">{challenge?.duration}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-gray-400" />
            <div>
              <p className="text-xs text-gray-500">Time Left</p>
              <p className="text-sm font-semibold text-gray-900">{challenge?.timeLeft}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Icon name="Target" size={16} className="text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Requirements:</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {challenge?.requirements?.map((req, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
            >
              {req}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={14} />
              <span>{challenge?.category}</span>
            </div>
            {challenge?.leaderCount > 0 && (
              <div className="flex items-center space-x-1">
                <Icon name="Crown" size={14} />
                <span>{challenge?.leaderCount} leaders</span>
              </div>
            )}
          </div>
          <Button
            variant={challenge?.status === 'active' ? 'default' : 'outline'}
            size="sm"
            disabled={challenge?.status === 'completed' || challenge?.currentParticipants >= challenge?.maxParticipants}
            iconName={challenge?.status === 'active' ? 'Play' : challenge?.status === 'upcoming' ? 'Bell' : 'Check'}
            iconPosition="left"
          >
            {challenge?.status === 'active' ? 'Join Challenge' : 
             challenge?.status === 'upcoming' ? 'Notify Me' : 'Completed'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;