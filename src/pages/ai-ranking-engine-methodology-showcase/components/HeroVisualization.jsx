import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const HeroVisualization = () => {
  const [activeDataSource, setActiveDataSource] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);

  const dataSources = [
    {
      id: 'weather',
      name: 'Weather Patterns',
      icon: 'Cloud',
      color: 'bg-blue-500',
      description: 'Real-time weather data and 30-day forecasts',
      metrics: '15,000+ weather stations'
    },
    {
      id: 'soil',
      name: 'Soil Conditions',
      icon: 'Mountain',
      color: 'bg-amber-600',
      description: 'Soil pH, nutrients, and moisture levels',
      metrics: '500+ soil parameters'
    },
    {
      id: 'market',
      name: 'Market Prices',
      icon: 'TrendingUp',
      color: 'bg-green-600',
      description: 'Live commodity prices and demand trends',
      metrics: '2,000+ market centers'
    },
    {
      id: 'yield',
      name: 'Historical Yields',
      icon: 'BarChart3',
      color: 'bg-purple-600',
      description: 'Past performance data and success rates',
      metrics: '10+ years of data'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDataSource((prev) => (prev + 1) % dataSources?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(stepInterval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Zap" size={16} />
              <span>AI-Powered Intelligence</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              How Our <span className="text-brand-gradient">AI Rankings</span> Work
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover the science behind AgroYield AI's sophisticated algorithms that transform complex agricultural data into simple, actionable rankings.
            </p>
          </div>

          {/* Data Sources */}
          <div className="grid grid-cols-2 gap-4">
            {dataSources?.map((source, index) => (
              <div
                key={source?.id}
                className={`p-4 rounded-xl border-2 transition-all duration-500 cursor-pointer ${
                  activeDataSource === index
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-primary/30'
                }`}
                onClick={() => setActiveDataSource(index)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${source?.color} text-white`}>
                    <Icon name={source?.icon} size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm">{source?.name}</h3>
                    <p className="text-xs text-gray-500 truncate">{source?.metrics}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Data Source Details */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-3 mb-3">
              <div className={`p-2 rounded-lg ${dataSources?.[activeDataSource]?.color} text-white`}>
                <Icon name={dataSources?.[activeDataSource]?.icon} size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {dataSources?.[activeDataSource]?.name}
              </h3>
            </div>
            <p className="text-gray-600">{dataSources?.[activeDataSource]?.description}</p>
            <div className="mt-3 text-sm text-primary font-medium">
              {dataSources?.[activeDataSource]?.metrics}
            </div>
          </div>
        </div>

        {/* Right Visualization */}
        <div className="relative">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            {/* AI Brain Visualization */}
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                <Icon name="Brain" size={48} className="text-white" />
              </div>
              
              {/* Data Flow Animation */}
              {dataSources?.map((source, index) => {
                const angle = (index * 90) - 45;
                const isActive = activeDataSource === index;
                return (
                  <div
                    key={source?.id}
                    className={`absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive ? source?.color + ' scale-110 shadow-lg' : 'bg-gray-200'
                    }`}
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-80px) rotate(-${angle}deg)`,
                    }}
                  >
                    <Icon name={source?.icon} size={20} className="text-white" />
                  </div>
                );
              })}

              {/* Animated Connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {dataSources?.map((_, index) => {
                  const angle = (index * 90) - 45;
                  const isActive = activeDataSource === index;
                  return (
                    <line
                      key={index}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + 25 * Math.cos((angle * Math.PI) / 180)}%`}
                      y2={`${50 + 25 * Math.sin((angle * Math.PI) / 180)}%`}
                      stroke={isActive ? '#16a34a' : '#e5e7eb'}
                      strokeWidth={isActive ? '3' : '2'}
                      className="transition-all duration-500"
                      strokeDasharray={isActive ? '0' : '5,5'}
                    />
                  );
                })}
              </svg>
            </div>

            {/* Process Steps */}
            <div className="space-y-4">
              {['Collect', 'Analyze', 'Rank', 'Validate']?.map((step, index) => (
                <div
                  key={step}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ${
                    animationStep === index
                      ? 'bg-primary/10 border-2 border-primary/20' :'bg-gray-50 border-2 border-transparent'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    animationStep >= index ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`font-medium ${
                    animationStep === index ? 'text-primary' : 'text-gray-600'
                  }`}>
                    {step} Data
                  </span>
                  {animationStep === index && (
                    <div className="flex-1 flex justify-end">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisualization;
