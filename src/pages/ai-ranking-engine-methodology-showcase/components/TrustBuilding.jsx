import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustBuilding = () => {
  const trustElements = [
    {
      id: 'transparency',
      title: 'Complete Transparency',
      icon: 'Eye',
      description: 'Every ranking decision is explainable with clear reasoning and confidence scores',
      features: [
        'Open-source algorithm documentation',
        'Real-time confidence scoring',
        'Detailed factor explanations',
        'Historical accuracy tracking'
      ],
      metric: '100%',
      metricLabel: 'Explainable Decisions'
    },
    {
      id: 'validation',
      title: 'Peer-Reviewed Research',
      icon: 'BookOpen',
      description: 'Our methodology is validated through rigorous scientific research and publications',
      features: [
        '15+ published research papers',
        'Peer review by agricultural experts',
        'University collaboration studies',
        'Independent algorithm audits'
      ],
      metric: '15+',
      metricLabel: 'Research Publications'
    },
    {
      id: 'government',
      title: 'Government Collaboration',
      icon: 'Shield',
      description: 'Official partnerships with agricultural departments and research institutions',
      features: [
        'ICAR (Indian Council of Agricultural Research) approval',
        'State agriculture department partnerships',
        'Ministry of Agriculture collaboration',
        'Krishi Vigyan Kendra integration'
      ],
      metric: '25+',
      metricLabel: 'Official Partnerships'
    }
  ];

  const confidenceScoring = [
    {
      level: 'Very High',
      range: '90-100%',
      color: 'bg-green-500',
      description: 'Strong data support, high historical accuracy, multiple validation sources',
      example: 'Mustard (Pusa Bold) recommendation during optimal rabi winter season'
    },
    {
      level: 'High',
      range: '80-89%',
      color: 'bg-blue-500',
      description: 'Good data quality, proven track record, some uncertainty factors',
      example: 'Soybean cultivation with favorable kharif rainfall forecasts'
    },
    {
      level: 'Moderate',
      range: '70-79%',
      color: 'bg-yellow-500',
      description: 'Adequate data, mixed historical results, moderate risk factors',
      example: 'New crop variety with limited regional data'
    },
    {
      level: 'Low',
      range: '60-69%',
      color: 'bg-orange-500',
      description: 'Limited data availability, higher uncertainty, experimental recommendations',
      example: 'Crop recommendations during unusual weather patterns'
    }
  ];

  const researchCitations = [
    {
      title: 'Machine Learning Approaches for Crop Yield Prediction in Indian Agriculture',
      journal: 'Journal of Agricultural Informatics',
      year: '2024',
      authors: 'Kumar, R., Sharma, P., et al.',
      impact: 'Cited 127 times'
    },
    {
      title: 'AI-Driven Decision Support Systems for Sustainable Farming Practices',
      journal: 'Agricultural Systems',
      year: '2023',
      authors: 'Patel, S., Singh, A., et al.',
      impact: 'Cited 89 times'
    },
    {
      title: 'Validation of Algorithmic Crop Recommendations in Indian Farming Contexts',
      journal: 'Precision Agriculture',
      year: '2023',
      authors: 'Gupta, M., Reddy, K., et al.',
      impact: 'Cited 156 times'
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Shield" size={16} />
            <span>Trust & Transparency</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Building <span className="text-brand-gradient">Farmer Confidence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to transparency, scientific rigor, and continuous validation ensures farmers can trust our AI-powered recommendations.
          </p>
        </div>

        {/* Trust Elements */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {trustElements?.map((element) => (
            <div key={element?.id} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name={element?.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{element?.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{element?.description}</p>
              
              <div className="space-y-3 mb-6">
                {element?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center pt-4 border-t border-gray-200">
                <div className="text-2xl font-bold text-primary mb-1">{element?.metric}</div>
                <div className="text-sm text-gray-600">{element?.metricLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Confidence Scoring System */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Confidence Scoring System
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every recommendation comes with a transparent confidence score, helping farmers understand the reliability of our suggestions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {confidenceScoring?.map((level, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-4 h-4 rounded-full ${level?.color}`} />
                  <div>
                    <h4 className="font-semibold text-gray-900">{level?.level}</h4>
                    <p className="text-sm text-gray-600">{level?.range}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mb-4">{level?.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 font-medium mb-1">Example:</p>
                  <p className="text-xs text-gray-700">{level?.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Citations */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Peer-Reviewed Research
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our methodology is backed by extensive research published in leading agricultural and technology journals.
            </p>
          </div>

          <div className="space-y-6">
            {researchCitations?.map((paper, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <Icon name="FileText" size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">{paper?.title}</h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                    <span className="flex items-center space-x-1">
                      <Icon name="Book" size={14} />
                      <span>{paper?.journal}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} />
                      <span>{paper?.year}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Users" size={14} />
                      <span>{paper?.authors}</span>
                    </span>
                  </div>
                  <div className="inline-flex items-center space-x-1 text-primary text-sm font-medium">
                    <Icon name="TrendingUp" size={14} />
                    <span>{paper?.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium">
              <span>View All Research Publications</span>
              <Icon name="ExternalLink" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBuilding;
