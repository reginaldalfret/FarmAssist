import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const AccuracyComparison = () => {
  const [selectedMetric, setSelectedMetric] = useState('yield');

  const comparisonMetrics = {
    yield: {
      title: 'Yield Prediction Accuracy',
      description: 'Comparing crop yield predictions vs actual harvest results',
      rankfarmAI: 94.2,
      traditional: 71.5,
      improvement: 22.7,
      unit: '%',
      details: {
        sampleSize: '10,000+ farms',
        timeframe: '2020-2024',
        methodology: 'Machine learning vs traditional advisory'
      }
    },
    weather: {
      title: 'Weather Impact Assessment',
      description: 'Accuracy in predicting weather-related crop performance',
      rankfarmAI: 91.8,
      traditional: 68.3,
      improvement: 23.5,
      unit: '%',
      details: {
        sampleSize: '5,000+ weather events',
        timeframe: '2021-2024',
        methodology: 'AI weather models vs farmer experience'
      }
    },
    market: {
      title: 'Market Price Forecasting',
      description: 'Predicting optimal selling times and price trends',
      rankfarmAI: 89.5,
      traditional: 62.1,
      improvement: 27.4,
      unit: '%',
      details: {
        sampleSize: '2,000+ market transactions',
        timeframe: '2022-2024',
        methodology: 'AI price models vs traditional market wisdom'
      }
    },
    pest: {
      title: 'Pest & Disease Prevention',
      description: 'Early warning accuracy for crop protection',
      rankfarmAI: 92.7,
      traditional: 59.8,
      improvement: 32.9,
      unit: '%',
      details: {
        sampleSize: '8,000+ pest incidents',
        timeframe: '2021-2024',
        methodology: 'AI detection vs visual inspection'
      }
    }
  };

  const successStories = [
    {
      id: 1,
      farmer: 'Rajesh Patel',
      location: 'Gujarat',
      crop: 'Groundnut',
      improvement: '+38% yield',
      story: 'Followed AgroYield AI pest management and irrigation timing for groundnut',
      beforeAfter: {
        before: '14 quintals/acre',
        after: '19.3 quintals/acre'
      }
    },
    {
      id: 2,
      farmer: 'Sunita Devi',
      location: 'Rajasthan',
      crop: 'Mustard',
      improvement: '+31% profit',
      story: 'Used AI-powered market timing recommendations for optimal oil seed selling',
      beforeAfter: {
        before: '₹55,000/acre',
        after: '₹72,000/acre'
      }
    },
    {
      id: 3,
      farmer: 'Kumar Reddy',
      location: 'Andhra Pradesh',
      crop: 'Sesame',
      improvement: '+45% water savings',
      story: 'Implemented precision drip irrigation based on AI soil moisture predictions',
      beforeAfter: {
        before: '1,800 liters/kg',
        after: '990 liters/kg'
      }
    }
  ];

  const methodologyComparison = [
    {
      aspect: 'Data Sources',
      traditional: 'Local experience, basic weather',
      rankfarmAI: '50+ data sources, satellite imagery, IoT sensors',
      advantage: 'comprehensive'
    },
    {
      aspect: 'Analysis Method',
      traditional: 'Rule-based, seasonal patterns',
      rankfarmAI: 'Machine learning, pattern recognition',
      advantage: 'advanced'
    },
    {
      aspect: 'Update Frequency',
      traditional: 'Seasonal or annual',
      rankfarmAI: 'Real-time, continuous learning',
      advantage: 'dynamic'
    },
    {
      aspect: 'Personalization',
      traditional: 'Generic regional advice',
      rankfarmAI: 'Farm-specific recommendations',
      advantage: 'personalized'
    },
    {
      aspect: 'Validation',
      traditional: 'Anecdotal evidence',
      rankfarmAI: 'Scientific validation, peer review',
      advantage: 'scientific'
    }
  ];

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="BarChart3" size={16} />
            <span>Accuracy Comparison</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-brand-gradient">Proven Superior</span> Performance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Independent studies show AgroYield AI consistently outperforms traditional farming advice across all key metrics.
          </p>
        </div>

        {/* Metric Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(comparisonMetrics)?.map(([key, metric]) => (
            <button
              key={key}
              onClick={() => setSelectedMetric(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedMetric === key
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {metric?.title}
            </button>
          ))}
        </div>

        {/* Selected Metric Comparison */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-200 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {comparisonMetrics?.[selectedMetric]?.title}
            </h3>
            <p className="text-gray-600">
              {comparisonMetrics?.[selectedMetric]?.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Traditional Method */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-xl p-8 mb-4">
                <Icon name="User" size={48} className="text-gray-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Traditional Advice</h4>
                <div className="text-3xl font-bold text-gray-600 mb-2">
                  {comparisonMetrics?.[selectedMetric]?.traditional}{comparisonMetrics?.[selectedMetric]?.unit}
                </div>
                <p className="text-sm text-gray-500">Based on experience & basic data</p>
              </div>
            </div>

            {/* VS Indicator */}
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">VS</span>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  +{comparisonMetrics?.[selectedMetric]?.improvement}{comparisonMetrics?.[selectedMetric]?.unit}
                </div>
                <p className="text-sm text-gray-600">Improvement</p>
              </div>
            </div>

            {/* AgroYield AI */}
            <div className="text-center">
              <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8 mb-4">
                <Icon name="Brain" size={48} className="text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">AgroYield AI</h4>
                <div className="text-3xl font-bold text-primary mb-2">
                  {comparisonMetrics?.[selectedMetric]?.rankfarmAI}{comparisonMetrics?.[selectedMetric]?.unit}
                </div>
                <p className="text-sm text-gray-600">AI-powered analysis & prediction</p>
              </div>
            </div>
          </div>

          {/* Study Details */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {Object.entries(comparisonMetrics?.[selectedMetric]?.details)?.map(([key, value]) => (
                <div key={key}>
                  <div className="text-sm text-gray-600 capitalize mb-1">
                    {key?.replace(/([A-Z])/g, ' $1')}
                  </div>
                  <div className="font-semibold text-gray-900">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Real Farmer Success Stories
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {successStories?.map((story) => (
              <div key={story?.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{story?.farmer}</h4>
                    <p className="text-sm text-gray-600">{story?.location} • {story?.crop}</p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">{story?.improvement}</div>
                    <p className="text-sm text-green-700">Improvement Achieved</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4">{story?.story}</p>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600 mb-1">Before</div>
                    <div className="font-semibold text-gray-900">{story?.beforeAfter?.before}</div>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-3">
                    <div className="text-xs text-primary mb-1">After</div>
                    <div className="font-semibold text-primary">{story?.beforeAfter?.after}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Comparison Table */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Methodology Comparison
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Aspect</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-600">Traditional Approach</th>
                  <th className="text-left py-4 px-6 font-semibold text-primary">AgroYield AI</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Advantage</th>
                </tr>
              </thead>
              <tbody>
                {methodologyComparison?.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">{row?.aspect}</td>
                    <td className="py-4 px-6 text-gray-600">{row?.traditional}</td>
                    <td className="py-4 px-6 text-gray-900">{row?.rankfarmAI}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        row?.advantage === 'comprehensive' ? 'bg-blue-100 text-blue-800' :
                        row?.advantage === 'advanced' ? 'bg-purple-100 text-purple-800' :
                        row?.advantage === 'dynamic' ? 'bg-green-100 text-green-800' :
                        row?.advantage === 'personalized'? 'bg-amber-100 text-amber-800' : 'bg-primary/10 text-primary'
                      }`}>
                        {row?.advantage}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccuracyComparison;
