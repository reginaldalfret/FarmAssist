import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentRanking, setCurrentRanking] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    yieldIncrease: 0,
    farmers: 0,
    accuracy: 0
  });

  const liveRankings = [
    {
      region: "Rajasthan",
      crop: "Mustard",
      confidence: 94,
      expectedYield: "₹1,95,000/acre",
      trend: "up"
    },
    {
      region: "Madhya Pradesh",
      crop: "Soybean",
      confidence: 91,
      expectedYield: "₹1,75,000/acre",
      trend: "up"
    },
    {
      region: "Gujarat",
      crop: "Groundnut",
      confidence: 88,
      expectedYield: "₹2,10,000/acre",
      trend: "stable"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRanking((prev) => (prev + 1) % liveRankings?.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateNumbers = () => {
      const targets = { yieldIncrease: 34, farmers: 15000, accuracy: 92 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setAnimatedNumbers({
          yieldIncrease: Math.floor(targets?.yieldIncrease * easeOut),
          farmers: Math.floor(targets?.farmers * easeOut),
          accuracy: Math.floor(targets?.accuracy * easeOut)
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  const currentData = liveRankings?.[currentRanking];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              <Icon name="Zap" size={16} />
              <span>India's #1 AI Oilseed Yield Optimizer</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Turn Farming
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Uncertainty
                </span>
                Into Confident
                <span className="block text-primary">Decisions</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Data-driven oilseed crop rankings, treatment recommendations, and yield optimization — purpose-built for India's oilseed farmers.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary animate-number-count">
                  {animatedNumbers?.yieldIncrease}%
                </div>
                <div className="text-sm text-gray-600">Avg Yield Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary animate-number-count">
                  {animatedNumbers?.farmers?.toLocaleString('en-IN')}+
                </div>
                <div className="text-sm text-gray-600">Farmers Trust Us</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary animate-number-count">
                  {animatedNumbers?.accuracy}%
                </div>
                <div className="text-sm text-gray-600">Prediction Accuracy</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                iconName="TrendingUp"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold"
              >
                Get Free Farm Assessment
              </Button>
              
              <Link to="/ai-ranking-engine-methodology-showcase">
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  className="border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
                >
                  See How AI Works
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon name="Shield" size={16} className="text-primary" />
                <span>Government Approved</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon name="Award" size={16} className="text-primary" />
                <span>University Validated</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Live Rankings</h3>
                    <p className="text-green-100 text-sm">Updated every 15 minutes</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <span className="text-sm">Live</span>
                  </div>
                </div>
              </div>

              {/* Ranking Card */}
              <div className="p-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="Trophy" size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">#{currentRanking + 1} Recommended</h4>
                        <p className="text-sm text-gray-600">{currentData?.region} Region</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Icon 
                          name={currentData?.trend === 'up' ? 'TrendingUp' : 'Minus'} 
                          size={16} 
                          className="text-primary" 
                        />
                        <span className="text-sm font-medium text-primary">
                          {currentData?.confidence}% Confidence
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-gray-900">{currentData?.crop}</span>
                      <span className="text-xl font-bold text-primary">{currentData?.expectedYield}</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${currentData?.confidence}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Success Probability</span>
                      <span>{currentData?.confidence}%</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Link to="/crop-championship-center-interactive-rankings">
                    <Button 
                      variant="outline" 
                      size="sm"
                      iconName="BarChart3"
                      iconPosition="left"
                      className="w-full justify-center text-primary border-primary/30 hover:bg-primary/5"
                    >
                      View Rankings
                    </Button>
                  </Link>
                  <Link to="/treatment-rankings-fertilizer-pesticide-intelligence">
                    <Button 
                      variant="outline" 
                      size="sm"
                      iconName="Beaker"
                      iconPosition="left"
                      className="w-full justify-center text-primary border-primary/30 hover:bg-primary/5"
                    >
                      Treatments
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Icon name="Zap" size={16} className="inline mr-1" />
              AI Powered
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-gray-200">
              <Icon name="Users" size={16} className="inline mr-1 text-primary" />
              15,000+ Farmers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
