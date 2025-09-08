import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ExpertRecommendations = () => {
  const expertRecommendations = [
    {
      id: 1,
      expert: {
        name: "Dr. Rajesh Kumar",
        title: "Senior Agricultural Extension Officer",
        organization: "Indian Council of Agricultural Research",
        avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
        experience: "15+ years"
      },
      recommendation: {
        treatment: "NPK 19:19:19 Complex Fertilizer",
        category: "Fertilizer",
        rating: 5,
        testimonial: `After extensive field trials across multiple districts, NPK 19:19:19 has consistently shown 25-30% yield improvement in wheat crops. The balanced nutrient composition makes it ideal for Indian soil conditions, especially in Punjab and Haryana regions.`
      },
      metrics: {
        farmsRecommended: 450,
        successRate: 92,
        avgYieldIncrease: 28
      }
    },
    {
      id: 2,
      expert: {
        name: "Dr. Priya Sharma",
        title: "Plant Protection Specialist",
        organization: "Agricultural University, Ludhiana",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
        experience: "12+ years"
      },
      recommendation: {
        treatment: "Chlorpyrifos 20% EC",
        category: "Pesticide",
        rating: 4,
        testimonial: `Chlorpyrifos remains one of the most effective broad-spectrum insecticides for cotton and vegetable crops. When used as per recommended dosage, it provides excellent control against bollworm and aphids with minimal environmental impact.`
      },
      metrics: {
        farmsRecommended: 320,
        successRate: 88,
        avgYieldIncrease: 22
      }
    },
    {
      id: 3,
      expert: {
        name: "Prof. Suresh Patel",
        title: "Soil Science Expert",
        organization: "Gujarat Agricultural University",
        avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
        experience: "20+ years"
      },
      recommendation: {
        treatment: "Propiconazole 25% EC",
        category: "Fungicide",
        rating: 5,
        testimonial: `Propiconazole has proven exceptional efficacy against rust diseases in wheat and powdery mildew in various crops. Its systemic action and long-lasting protection make it a top choice for preventive fungal disease management.`
      },
      metrics: {
        farmsRecommended: 280,
        successRate: 94,
        avgYieldIncrease: 18
      }
    }
  ];

  const farmerTestimonials = [
    {
      id: 1,
      farmer: {
        name: "Ramesh Singh",
        location: "Meerut, Uttar Pradesh",
        farmSize: "5 hectares",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      treatment: "NPK 19:19:19 Complex Fertilizer",
      results: {
        yieldIncrease: 32,
        profitIncrease: 45000,
        season: "Rabi 2023-24"
      },
      testimonial: `Following Dr. Kumar's recommendation, I switched to NPK 19:19:19 for my wheat crop. The results were amazing - 32% increase in yield and ₹45,000 additional profit. The plants were healthier and more resistant to diseases.`
    },
    {
      id: 2,
      farmer: {
        name: "Kavita Devi",
        location: "Sirsa, Haryana",
        farmSize: "8 hectares",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616c9c9b8d4?w=150&h=150&fit=crop&crop=face"
      },
      treatment: "Chlorpyrifos 20% EC",
      results: {
        yieldIncrease: 28,
        profitIncrease: 38000,
        season: "Kharif 2023"
      },
      testimonial: `The bollworm infestation was completely controlled after using Chlorpyrifos as recommended by Dr. Sharma. My cotton yield increased by 28% and I saved thousands on additional pest control measures.`
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="space-y-8">
      {/* Expert Recommendations Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Icon name="UserCheck" size={24} className="text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Expert Recommendations</h3>
            <p className="text-sm text-gray-600">Endorsed by agricultural scientists and extension officers</p>
          </div>
        </div>

        <div className="space-y-6">
          {expertRecommendations?.map((item) => (
            <div key={item?.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              {/* Expert Info */}
              <div className="flex items-start space-x-4 mb-4">
                <Image
                  src={item?.expert?.avatar}
                  alt={item?.expert?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{item?.expert?.name}</h4>
                      <p className="text-sm text-gray-600">{item?.expert?.title}</p>
                      <p className="text-sm text-blue-600">{item?.expert?.organization}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        {renderStars(item?.recommendation?.rating)}
                      </div>
                      <p className="text-xs text-gray-500">{item?.expert?.experience}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendation Details */}
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-blue-900">{item?.recommendation?.treatment}</h5>
                  <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs font-medium rounded-full">
                    {item?.recommendation?.category}
                  </span>
                </div>
                <p className="text-sm text-blue-800 leading-relaxed">
                  {item?.recommendation?.testimonial}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{item?.metrics?.farmsRecommended}</div>
                  <p className="text-xs text-gray-500">Farms Recommended</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{item?.metrics?.successRate}%</div>
                  <p className="text-xs text-gray-500">Success Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{item?.metrics?.avgYieldIncrease}%</div>
                  <p className="text-xs text-gray-500">Avg. Yield Increase</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Farmer Success Stories */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-green-100 p-2 rounded-lg">
            <Icon name="Users" size={24} className="text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Farmer Success Stories</h3>
            <p className="text-sm text-gray-600">Real results from farmers who followed expert recommendations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {farmerTestimonials?.map((testimonial) => (
            <div key={testimonial?.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              {/* Farmer Info */}
              <div className="flex items-start space-x-4 mb-4">
                <Image
                  src={testimonial?.farmer?.avatar}
                  alt={testimonial?.farmer?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial?.farmer?.name}</h4>
                  <p className="text-sm text-gray-600 flex items-center space-x-1">
                    <Icon name="MapPin" size={14} />
                    <span>{testimonial?.farmer?.location}</span>
                  </p>
                  <p className="text-sm text-gray-500">{testimonial?.farmer?.farmSize} farm</p>
                </div>
              </div>

              {/* Treatment Used */}
              <div className="bg-green-50 rounded-lg p-3 mb-4">
                <p className="text-sm font-medium text-green-800 mb-1">Treatment Used:</p>
                <p className="text-sm text-green-700">{testimonial?.treatment}</p>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center bg-gray-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-green-600">+{testimonial?.results?.yieldIncrease}%</div>
                  <p className="text-xs text-gray-500">Yield Increase</p>
                </div>
                <div className="text-center bg-gray-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-blue-600">₹{testimonial?.results?.profitIncrease?.toLocaleString('en-IN')}</div>
                  <p className="text-xs text-gray-500">Additional Profit</p>
                </div>
              </div>

              {/* Testimonial */}
              <blockquote className="text-sm text-gray-700 italic leading-relaxed">
                "{testimonial?.testimonial}"
              </blockquote>

              <div className="mt-3 text-xs text-gray-500">
                Season: {testimonial?.results?.season}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertRecommendations;