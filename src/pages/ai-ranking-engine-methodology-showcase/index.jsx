import React from 'react';
import Header from '../../components/ui/Header';
import HeroVisualization from './components/HeroVisualization';
import ProcessBreakdown from './components/ProcessBreakdown';
import ScientificValidation from './components/ScientificValidation';
import AlgorithmInAction from './components/AlgorithmInAction';
import InteractiveSliders from './components/InteractiveSliders';
import TrustBuilding from './components/TrustBuilding';
import AccuracyComparison from './components/AccuracyComparison';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const AIRankingEngineMethodologyShowcase = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section with Interactive Visualization */}
      <section className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroVisualization />
        </div>
      </section>
      {/* Step-by-Step Process Breakdown */}
      <ProcessBreakdown />
      {/* Scientific Validation Section */}
      <ScientificValidation />
      {/* Algorithm in Action */}
      <AlgorithmInAction />
      {/* Interactive Customization Sliders */}
      <InteractiveSliders />
      {/* Trust Building Elements */}
      <TrustBuilding />
      {/* Accuracy Comparison */}
      <AccuracyComparison />
      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <Icon name="Zap" size={48} className="text-white mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Experience AI-Powered Agriculture
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of farmers who have transformed their agricultural decisions with AgroYield AI's scientifically-backed recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="secondary" 
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="bg-white text-primary hover:bg-gray-50 font-semibold"
              >
                Start Free Assessment
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="BookOpen"
                iconPosition="left"
                className="border-white text-white hover:bg-white/10 font-semibold"
              >
                View Research Papers
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">94.2%</div>
                <div className="text-sm text-white/80">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">50,000+</div>
                <div className="text-sm text-white/80">Farmers Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">25+</div>
                <div className="text-sm text-white/80">Research Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <svg width="32" height="32" viewBox="0 0 40 40" className="text-primary">
                    <defs>
                      <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-primary)" />
                        <stop offset="100%" stopColor="var(--color-secondary)" />
                      </linearGradient>
                    </defs>
                    <rect width="32" height="32" rx="6" fill="url(#footerLogoGradient)" />
                    <path 
                      d="M10 22V13l3-3h6l3 3v9M13 16h6M16 10v12" 
                      stroke="white" 
                      strokeWidth="1.5" 
                      fill="none"
                    />
                    <circle cx="26" cy="6" r="2" fill="var(--color-accent)" />
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-bold">AgroYield AI</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Transforming agriculture through AI-powered ranking intelligence. Making data-driven farming decisions accessible to every farmer.
              </p>
              <div className="flex space-x-4">
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Linkedin" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Youtube" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">AI Rankings</a></li>
                <li><a href="#" className="hover:text-white">Crop Championship</a></li>
                <li><a href="#" className="hover:text-white">Treatment Rankings</a></li>
                <li><a href="#" className="hover:text-white">Success League</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Research</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Methodology</a></li>
                <li><a href="#" className="hover:text-white">Publications</a></li>
                <li><a href="#" className="hover:text-white">Partnerships</a></li>
                <li><a href="#" className="hover:text-white">Validation</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date()?.getFullYear()} AgroYield AI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIRankingEngineMethodologyShowcase;
