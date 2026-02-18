import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const ValuePropositions = () => {
  const propositions = [
    {
      icon: "Brain",
      title: "Netflix-Level AI for Farming",
      description: "Sophisticated recommendation algorithms analyze millions of data points to suggest the perfect crops, treatments, and timing for your specific farm conditions.",
      features: ["Machine Learning Models", "Real-time Data Processing", "Personalized Recommendations"],
      link: "/ai-ranking-engine-methodology-showcase",
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: "BarChart3",
      title: "Data-Driven Crop Rankings",
      description: "Every crop recommendation comes with transparent rankings based on yield potential, market prices, weather patterns, and soil compatibility for your region.",
      features: ["Scientific Validation", "Regional Optimization", "Success Probability Scores"],
      link: "/crop-championship-center-interactive-rankings",
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: "Trophy",
      title: "Community Success Leaderboards",
      description: "Join India's farming community where success is celebrated, knowledge is shared, and farmers compete to achieve the highest yields and profits.",
      features: ["Peer Comparisons", "Achievement Badges", "Success Stories"],
      link: "/farmer-success-league-community-leaderboards",
      gradient: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Sparkles" size={16} />
            <span>Why Choose AgroYield AI</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Farming with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Intelligent Rankings
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the power of AI-driven agricultural intelligence that turns complex farming decisions into simple, confident choices.
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {propositions?.map((prop, index) => (
            <div 
              key={index}
              className={`${prop?.bgColor} ${prop?.borderColor} border rounded-2xl p-8 hover-lift transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className={`w-full h-full bg-gradient-to-br ${prop?.gradient} rounded-full blur-2xl`}></div>
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${prop?.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={prop?.icon} size={32} className="text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {prop?.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {prop?.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {prop?.features?.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link 
                  to={prop?.link}
                  className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors duration-200 group/link"
                >
                  <span>Learn More</span>
                  <Icon 
                    name="ArrowRight" 
                    size={16} 
                    className="group-hover/link:translate-x-1 transition-transform duration-200" 
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience AI-Powered Farming?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join thousands of farmers who have already transformed their operations with our intelligent ranking system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="Zap" size={20} />
                <span>Start Free Assessment</span>
              </button>
              <Link to="/ai-ranking-engine-methodology-showcase">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center justify-center space-x-2 w-full sm:w-auto">
                  <Icon name="Play" size={20} />
                  <span>Watch Demo</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
