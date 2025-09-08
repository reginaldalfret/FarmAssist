import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProcessBreakdown = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 'collection',
      title: 'Data Collection',
      icon: 'Database',
      color: 'bg-blue-500',
      description: 'Gathering comprehensive agricultural data from multiple verified sources',
      details: [
        'Real-time weather monitoring from 15,000+ stations',
        'Soil analysis from certified laboratories',
        'Market price feeds from 2,000+ mandis',
        'Satellite imagery for crop health assessment',
        'Historical yield data spanning 10+ years'
      ],
      metrics: {
        sources: '50+',
        dataPoints: '1M+',
        updateFreq: 'Every 15 min'
      }
    },
    {
      id: 'analysis',
      title: 'AI Analysis',
      icon: 'Brain',
      color: 'bg-purple-500',
      description: 'Advanced machine learning algorithms process and correlate data patterns',
      details: [
        'Deep learning models trained on 10+ years of data',
        'Pattern recognition for seasonal variations',
        'Risk assessment algorithms',
        'Yield prediction models with 94% accuracy',
        'Market trend analysis and forecasting'
      ],
      metrics: {
        algorithms: '25+',
        accuracy: '94%',
        processing: '< 2 sec'
      }
    },
    {
      id: 'ranking',
      title: 'Ranking Generation',
      icon: 'Trophy',
      color: 'bg-amber-500',
      description: 'Converting complex analysis into simple, actionable rankings',
      details: [
        'Multi-criteria decision analysis',
        'Weighted scoring based on regional factors',
        'Confidence intervals for each recommendation',
        'Personalized rankings based on farm profile',
        'Dynamic updates based on changing conditions'
      ],
      metrics: {
        criteria: '15+',
        rankings: '1000+',
        confidence: '92%'
      }
    },
    {
      id: 'validation',
      title: 'Validation & Updates',
      icon: 'Shield',
      color: 'bg-green-500',
      description: 'Continuous validation and refinement through expert review and field results',
      details: [
        'Expert review by agricultural scientists',
        'Field validation through farmer feedback',
        'Peer review by research institutions',
        'Continuous model improvement',
        'Real-time accuracy monitoring'
      ],
      metrics: {
        experts: '100+',
        institutions: '25+',
        validation: '98%'
      }
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Cog" size={16} />
            <span>Step-by-Step Process</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            From Raw Data to <span className="text-brand-gradient">Smart Rankings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our sophisticated AI pipeline transforms complex agricultural data into simple, actionable recommendations through a proven 4-step process.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-16">
          <div className="flex justify-between items-center mb-8">
            {processSteps?.map((step, index) => (
              <div key={step?.id} className="flex flex-col items-center flex-1">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 mb-3 ${
                    activeStep === index
                      ? step?.color + ' text-white shadow-lg scale-110'
                      : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                  }`}
                >
                  <Icon name={step?.icon} size={24} />
                </button>
                <h3 className={`text-sm font-semibold text-center transition-colors duration-300 ${
                  activeStep === index ? 'text-primary' : 'text-gray-600'
                }`}>
                  {step?.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Progress Line */}
          <div className="absolute top-8 left-8 right-8 h-0.5 bg-gray-200 -z-10">
            <div 
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${(activeStep / (processSteps?.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Active Step Details */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${processSteps?.[activeStep]?.color} text-white`}>
                  <Icon name={processSteps?.[activeStep]?.icon} size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {processSteps?.[activeStep]?.title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {processSteps?.[activeStep]?.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {processSteps?.[activeStep]?.details?.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Key Metrics</h4>
              <div className="grid grid-cols-3 gap-6">
                {Object.entries(processSteps?.[activeStep]?.metrics)?.map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{key?.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>

              {/* Animation Visualization */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex space-x-2">
                    {[...Array(3)]?.map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${processSteps?.[activeStep]?.color} animate-pulse`}
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-gray-400" />
                  <div className={`p-2 rounded-lg ${processSteps?.[activeStep]?.color} text-white`}>
                    <Icon name={processSteps?.[activeStep]?.icon} size={20} />
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600 mt-3">
                  Processing in real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessBreakdown;