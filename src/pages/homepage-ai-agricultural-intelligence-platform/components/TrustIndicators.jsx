import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustIndicators = () => {
  const partnerships = [
    {
      name: "Indian Agricultural Research Institute",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=80&fit=crop",
      type: "Research Partner",
      description: "Validating AI algorithms with field research data"
    },
    {
      name: "Punjab Agricultural University",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=120&h=80&fit=crop",
      type: "Academic Partner",
      description: "Collaborative research on crop optimization"
    },
    {
      name: "Ministry of Agriculture",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=120&h=80&fit=crop",
      type: "Government Partner",
      description: "Official endorsement for farmer welfare programs"
    },
    {
      name: "ICRISAT",
      logo: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=120&h=80&fit=crop",
      type: "Research Institute",
      description: "Dryland agriculture research collaboration"
    }
  ];

  const certifications = [
    {
      icon: "Shield",
      title: "ISO 27001 Certified",
      description: "Information security management standards"
    },
    {
      icon: "Award",
      title: "NASSCOM Recognized",
      description: "Excellence in agricultural technology"
    },
    {
      icon: "CheckCircle",
      title: "GDPR Compliant",
      description: "Data privacy and protection standards"
    },
    {
      icon: "Star",
      title: "5-Star Rated",
      description: "By agricultural extension officers"
    }
  ];

  const expertEndorsements = [
    {
      name: "Dr. Rajesh Aggarwal",
      title: "Former Director, IARI",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop&crop=face",
      quote: "AgroYield AI's methodology represents a significant advancement in oilseed crop optimization. Their ranking system is scientifically sound and practically applicable.",
      expertise: "Crop Science & Agricultural Research"
    },
    {
      name: "Dr. Priya Krishnan",
      title: "Agricultural Economist, ICRISAT",
      avatar: "https://images.unsplash.com/photo-1594824388853-e4d2b2b5b2b5?w=80&h=80&fit=crop&crop=face",
      quote: "The economic impact analysis and market integration in their AI models is impressive. This platform can truly transform farmer decision-making.",
      expertise: "Agricultural Economics & Market Analysis"
    },
    {
      name: "Prof. Suresh Kumar",
      title: "Dean, College of Agriculture",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face",
      quote: "As an educator, I'm impressed by how AgroYield AI makes complex oilseed science accessible to farmers. The transparency in their ranking methodology is commendable.",
      expertise: "Agricultural Education & Extension"
    }
  ];

  const mediaRecognition = [
    {
      publication: "The Hindu BusinessLine",
      headline: "AI Startup Revolutionizes Indian Agriculture",
      date: "March 2024"
    },
    {
      publication: "Economic Times",
      headline: "AgroYield AI Wins Best Oilseed AgTech Innovation Award",
      date: "February 2024"
    },
    {
      publication: "Indian Express",
      headline: "How AI is Helping Farmers Make Better Decisions",
      date: "January 2024"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Shield" size={16} />
            <span>Trusted by Experts & Institutions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Scientific Validation &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Expert Endorsements
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI algorithms are validated by leading agricultural institutions and endorsed by renowned experts in the field.
          </p>
        </div>

        {/* Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Institutional Partnerships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships?.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center hover-lift transition-all duration-300">
                <div className="mb-4">
                  <Image 
                    src={partner?.logo}
                    alt={partner?.name}
                    className="w-full h-16 object-cover rounded-lg"
                  />
                </div>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                  {partner?.type}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{partner?.name}</h4>
                <p className="text-sm text-gray-600">{partner?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Endorsements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Expert Endorsements</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {expertEndorsements?.map((expert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover-lift transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <Image 
                    src={expert?.avatar}
                    alt={expert?.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{expert?.name}</h4>
                    <p className="text-sm text-primary font-medium">{expert?.title}</p>
                    <p className="text-xs text-gray-500">{expert?.expertise}</p>
                  </div>
                </div>
                <div className="relative">
                  <Icon name="Quote" size={24} className="text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic leading-relaxed pl-6">
                    {expert?.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Certifications & Recognition</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200 hover-lift transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={32} className="text-primary" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{cert?.title}</h4>
                <p className="text-sm text-gray-600">{cert?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Recognition */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Media Recognition</h3>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="grid lg:grid-cols-3 gap-6">
              {mediaRecognition?.map((media, index) => (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <div className="text-sm font-medium text-primary mb-1">{media?.publication}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{media?.headline}</h4>
                  <div className="text-sm text-gray-500">{media?.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Trusted by the Agricultural Community</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">92%</div>
              <div className="text-green-100 text-sm">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <div className="text-green-100 text-sm">Active Farmers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-green-100 text-sm">Research Papers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-green-100 text-sm">Awards Won</div>
            </div>
          </div>
          
          <div className="mt-8">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto">
              <Icon name="FileText" size={20} />
              <span>View Research Publications</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
