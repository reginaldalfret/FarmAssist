import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ScientificValidation = () => {
  const partnerships = [
    {
      id: 1,
      name: 'Indian Agricultural Research Institute (IARI)',
      location: 'New Delhi',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
      endorsement: `"AgroYield AI's methodology represents a significant advancement in agricultural decision support systems. Their multi-criteria ranking approach aligns perfectly with scientific agricultural practices."`,
      scientist: 'Dr. Rajesh Kumar',
      designation: 'Director, Crop Science Division',
      collaboration: 'Algorithm Validation Partner'
    },
    {
      id: 2,
      name: 'Punjab Agricultural University',
      location: 'Ludhiana',
      logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop&crop=center',
      endorsement: `"The AI ranking system has shown remarkable accuracy in our field trials. We've observed 23% improvement in yield predictions compared to traditional methods."`,
      scientist: 'Dr. Priya Sharma',
      designation: 'Head, Agricultural Technology',
      collaboration: 'Field Testing Partner'
    },
    {
      id: 3,
      name: 'Tamil Nadu Agricultural University',
      location: 'Coimbatore',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center',
      endorsement: `"AgroYield AI's transparent approach to algorithm explanation builds trust among farmers. The confidence scoring system is particularly innovative."`,
      scientist: 'Dr. Suresh Babu',
      designation: 'Professor, Agricultural Informatics',
      collaboration: 'Research Validation Partner'
    }
  ];

  const accuracyMetrics = [
    {
      metric: 'Crop Yield Prediction',
      accuracy: '94.2%',
      improvement: '+23%',
      icon: 'TrendingUp',
      color: 'text-green-600'
    },
    {
      metric: 'Weather Impact Assessment',
      accuracy: '91.8%',
      improvement: '+18%',
      icon: 'Cloud',
      color: 'text-blue-600'
    },
    {
      metric: 'Market Price Forecasting',
      accuracy: '89.5%',
      improvement: '+15%',
      icon: 'DollarSign',
      color: 'text-amber-600'
    },
    {
      metric: 'Pest Risk Evaluation',
      accuracy: '92.7%',
      improvement: '+20%',
      icon: 'Shield',
      color: 'text-purple-600'
    }
  ];

  const validationBadges = [
    {
      name: 'ISO 27001 Certified',
      icon: 'Shield',
      description: 'Information Security Management'
    },
    {
      name: 'ICAR Approved',
      icon: 'Award',
      description: 'Indian Council of Agricultural Research'
    },
    {
      name: 'Peer Reviewed',
      icon: 'Users',
      description: '15+ Published Research Papers'
    },
    {
      name: 'Third-Party Audited',
      icon: 'CheckCircle',
      description: 'Independent Algorithm Verification'
    }
  ];

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Award" size={16} />
            <span>Scientific Validation</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Backed by <span className="text-brand-gradient">Leading Institutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI ranking methodology is validated by India's premier agricultural research institutions and endorsed by leading scientists.
          </p>
        </div>

        {/* Accuracy Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {accuracyMetrics?.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-4`}>
                <Icon name={metric?.icon} size={24} className={metric?.color} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric?.accuracy}</div>
              <div className="text-sm text-gray-600 mb-2">{metric?.metric}</div>
              <div className="inline-flex items-center space-x-1 text-green-600 text-sm font-medium">
                <Icon name="ArrowUp" size={14} />
                <span>{metric?.improvement}</span>
              </div>
            </div>
          ))}
        </div>

        {/* University Partnerships */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            University Partnerships & Endorsements
          </h3>
          {partnerships?.map((partnership, index) => (
            <div key={partnership?.id} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="flex items-center space-x-4">
                  <Image
                    src={partnership?.logo}
                    alt={partnership?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{partnership?.name}</h4>
                    <p className="text-gray-600">{partnership?.location}</p>
                    <div className="inline-flex items-center space-x-1 text-primary text-sm font-medium mt-1">
                      <Icon name="CheckCircle" size={14} />
                      <span>{partnership?.collaboration}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <blockquote className="text-gray-700 italic mb-4">
                    {partnership?.endorsement}
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{partnership?.scientist}</div>
                      <div className="text-sm text-gray-600">{partnership?.designation}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Validation Badges */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Certifications & Validations
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {validationBadges?.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon name={badge?.icon} size={28} className="text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{badge?.name}</h4>
                <p className="text-sm text-gray-600">{badge?.description}</p>
              </div>
            ))}
          </div>

          {/* Third-party Verification */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">98.5%</div>
                <div className="text-sm text-gray-600">Algorithm Accuracy</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-gray-600">Research Institutions</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-gray-600">Expert Validators</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScientificValidation;
