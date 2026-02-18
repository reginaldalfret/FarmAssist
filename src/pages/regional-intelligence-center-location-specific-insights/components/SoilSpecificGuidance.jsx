import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SoilSpecificGuidance = () => {
  const [selectedSoilType, setSelectedSoilType] = useState('alluvial');
  const [selectedNutrient, setSelectedNutrient] = useState('all');

  const soilTypes = {
    alluvial: {
      name: 'Alluvial Soil',
      icon: 'Layers',
      color: 'text-brown-600',
      bgColor: 'bg-yellow-50',
      description: 'Rich in potash, phosphoric acid, and lime',
      regions: ['Punjab', 'Haryana', 'UP', 'Bihar'],
      ph: '6.0-7.5',
      drainage: 'Good',
      fertility: 'High'
    },
    black: {
      name: 'Black Clayey Soil (Vertisol)',
      icon: 'Circle',
      color: 'text-gray-800',
      bgColor: 'bg-gray-50',
      description: 'High clay content, rich in calcium and magnesium',
      regions: ['Maharashtra', 'Gujarat', 'MP', 'Karnataka'],
      ph: '7.2-8.5',
      drainage: 'Poor',
      fertility: 'High'
    },
    red: {
      name: 'Red Soil',
      icon: 'Hexagon',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      description: 'Rich in iron oxide, low in nitrogen and phosphorus',
      regions: ['Tamil Nadu', 'Karnataka', 'Andhra Pradesh'],
      ph: '5.5-6.5',
      drainage: 'Good',
      fertility: 'Medium'
    },
    laterite: {
      name: 'Laterite Soil',
      icon: 'Square',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'High in iron and aluminum, low in fertility',
      regions: ['Kerala', 'Karnataka', 'Odisha', 'West Bengal'],
      ph: '5.0-6.0',
      drainage: 'Excellent',
      fertility: 'Low'
    }
  };

  const fertilizerRecommendations = {
    alluvial: {
      all: [
        {
          rank: 1,
          name: 'NPK 20:20:0',
          suitabilityScore: 95,
          dosage: '250 kg/ha',
          timing: 'Basal application',
          cost: '₹18,500/ha',
          benefits: ['Balanced nutrition', 'High phosphorus for root development'],
          crops: ['Mustard', 'Linseed', 'Soybean']
        },
        {
          rank: 2,
          name: 'Urea + SSP',
          suitabilityScore: 92,
          dosage: '200kg + 150kg/ha',
          timing: 'Split application',
          cost: '₹15,200/ha',
          benefits: ['Cost effective', 'Gradual nutrient release'],
          crops: ['Sesame', 'Safflower', 'Soybean']
        },
        {
          rank: 3,
          name: 'Organic Compost',
          suitabilityScore: 88,
          dosage: '5-8 tons/ha',
          timing: 'Pre-sowing',
          cost: '₹12,000/ha',
          benefits: ['Soil health improvement', 'Long-term fertility'],
          crops: ['Groundnut', 'Sunflower', 'Castor']
        }
      ]
    },
    black: {
      all: [
        {
          rank: 1,
          name: 'Gypsum + NPK',
          suitabilityScore: 94,
          dosage: '500kg + 200kg/ha',
          timing: 'Pre-monsoon',
          cost: '₹22,000/ha',
          benefits: ['Improves drainage', 'Reduces alkalinity'],
          crops: ['Soybean', 'Safflower', 'Sunflower']
        },
        {
          rank: 2,
          name: 'Zinc Sulphate',
          suitabilityScore: 91,
          dosage: '25 kg/ha',
          timing: 'With basal fertilizer',
          cost: '₹8,500/ha',
          benefits: ['Corrects zinc deficiency', 'Better crop quality'],
          crops: ['Linseed', 'Mustard', 'Sesame']
        },
        {
          rank: 3,
          name: 'Vermicompost',
          suitabilityScore: 89,
          dosage: '3-5 tons/ha',
          timing: 'Before planting',
          cost: '₹15,000/ha',
          benefits: ['Improves soil structure', 'Enhances water retention'],
          crops: ['Groundnut', 'Castor', 'Oilseeds']
        }
      ]
    },
    red: {
      all: [
        {
          rank: 1,
          name: 'Lime + NPK',
          suitabilityScore: 93,
          dosage: '1000kg + 300kg/ha',
          timing: '2 weeks before sowing',
          cost: '₹19,500/ha',
          benefits: ['Corrects acidity', 'Improves nutrient availability'],
          crops: ['Groundnut', 'Sesame', 'Castor']
        },
        {
          rank: 2,
          name: 'Rock Phosphate',
          suitabilityScore: 90,
          dosage: '400 kg/ha',
          timing: 'Basal application',
          cost: '₹16,800/ha',
          benefits: ['Slow release phosphorus', 'Long-term availability'],
          crops: ['Sunflower', 'Linseed', 'Safflower']
        },
        {
          rank: 3,
          name: 'Green Manure',
          suitabilityScore: 87,
          dosage: 'Dhaincha/Sunhemp',
          timing: 'Pre-monsoon',
          cost: '₹8,000/ha',
          benefits: ['Nitrogen fixation', 'Organic matter addition'],
          crops: ['Mustard', 'Soybean', 'Oilseeds']
        }
      ]
    },
    laterite: {
      all: [
        {
          rank: 1,
          name: 'Organic Matter + Lime',
          suitabilityScore: 92,
          dosage: '8 tons + 2 tons/ha',
          timing: 'Pre-monsoon',
          cost: '₹25,000/ha',
          benefits: ['Improves fertility', 'Corrects acidity'],
          crops: ['Coconut', 'Cashew', 'Spices']
        },
        {
          rank: 2,
          name: 'Potash + Magnesium',
          suitabilityScore: 89,
          dosage: '150kg + 50kg/ha',
          timing: 'Split application',
          cost: '₹18,200/ha',
          benefits: ['Corrects K deficiency', 'Improves fruit quality'],
          crops: ['Banana', 'Pepper', 'Cardamom']
        },
        {
          rank: 3,
          name: 'Biofertilizers',
          suitabilityScore: 86,
          dosage: '5 kg/ha',
          timing: 'Seed treatment',
          cost: '₹3,500/ha',
          benefits: ['Biological nitrogen fixation', 'Eco-friendly'],
          crops: ['Legumes', 'Cereals', 'Vegetables']
        }
      ]
    }
  };

  const soilTestingCenters = [
    {
      name: 'Punjab Agricultural University',
      location: 'Ludhiana, Punjab',
      contact: '+91-161-2401960',
      services: ['NPK Analysis', 'Micronutrient Testing', 'pH Testing'],
      cost: '₹200-500',
      turnaround: '3-5 days'
    },
    {
      name: 'Indian Institute of Soil Science',
      location: 'Bhopal, Madhya Pradesh',
      contact: '+91-755-2730006',
      services: ['Complete Soil Analysis', 'Fertility Mapping', 'Consultation'],
      cost: '₹300-800',
      turnaround: '5-7 days'
    },
    {
      name: 'Tamil Nadu Agricultural University',
      location: 'Coimbatore, Tamil Nadu',
      contact: '+91-422-6611200',
      services: ['Soil Health Card', 'Nutrient Management', 'Organic Matter'],
      cost: '₹150-400',
      turnaround: '2-4 days'
    }
  ];

  const currentSoil = soilTypes?.[selectedSoilType];
  const currentRecommendations = fertilizerRecommendations?.[selectedSoilType]?.[selectedNutrient] || [];

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return 'text-yellow-600 bg-yellow-100 border-yellow-300';
      case 2: return 'text-gray-600 bg-gray-100 border-gray-300';
      case 3: return 'text-orange-600 bg-orange-100 border-orange-300';
      default: return 'text-blue-600 bg-blue-100 border-blue-300';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Soil-Specific Guidance</h3>
          <div className="flex items-center space-x-2">
            <Icon name="TestTube" size={20} className="text-primary" />
            <span className="text-sm font-medium text-gray-600">Lab-Tested Recommendations</span>
          </div>
        </div>

        {/* Soil Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {Object.entries(soilTypes)?.map(([key, soil]) => (
            <button
              key={key}
              onClick={() => setSelectedSoilType(key)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedSoilType === key
                  ? `${soil?.bgColor} border-current ${soil?.color}`
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Icon name={soil?.icon} size={20} className={selectedSoilType === key ? soil?.color : 'text-gray-500'} />
                <span className={`font-medium ${selectedSoilType === key ? soil?.color : 'text-gray-700'}`}>
                  {soil?.name}
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-2">{soil?.description}</p>
              <div className="flex flex-wrap gap-1">
                {soil?.regions?.slice(0, 2)?.map((region, index) => (
                  <span key={index} className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                    {region}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Soil Properties */}
        <div className={`${currentSoil?.bgColor} rounded-lg p-4 border border-gray-200`}>
          <h4 className={`font-bold mb-3 ${currentSoil?.color}`}>{currentSoil?.name} Properties</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{currentSoil?.ph}</div>
              <div className="text-sm text-gray-600">pH Range</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{currentSoil?.drainage}</div>
              <div className="text-sm text-gray-600">Drainage</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{currentSoil?.fertility}</div>
              <div className="text-sm text-gray-600">Fertility</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{currentSoil?.regions?.length}</div>
              <div className="text-sm text-gray-600">Major Regions</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Fertilizer Recommendations */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-gray-900 mb-4">Recommended Fertilizers</h4>
          <div className="space-y-4">
            {currentRecommendations?.map((fertilizer) => (
              <div key={fertilizer?.rank} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold ${getRankColor(fertilizer?.rank)}`}>
                      {fertilizer?.rank}
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">{fertilizer?.name}</h5>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>Suitability Score:</span>
                        <span className="font-semibold text-primary">{fertilizer?.suitabilityScore}/100</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{fertilizer?.cost}</div>
                    <div className="text-sm text-gray-600">Cost per hectare</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Dosage: </span>
                    <span className="text-sm text-gray-900">{fertilizer?.dosage}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Timing: </span>
                    <span className="text-sm text-gray-900">{fertilizer?.timing}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Suitable Crops: </span>
                    <span className="text-sm text-gray-900">{fertilizer?.crops?.join(', ')}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-sm font-medium text-gray-700">Benefits:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {fertilizer?.benefits?.map((benefit, index) => (
                      <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Suitability Progress Bar */}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                    <span>Soil Compatibility</span>
                    <span>{fertilizer?.suitabilityScore}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${fertilizer?.suitabilityScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soil Testing Centers */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-2 mb-4">
            <Icon name="MapPin" size={20} className="text-blue-600" />
            <h4 className="font-bold text-blue-900">Nearby Soil Testing Centers</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {soilTestingCenters?.map((center, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-blue-200">
                <h5 className="font-bold text-gray-900 mb-2">{center?.name}</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={14} className="text-gray-500" />
                    <span className="text-gray-700">{center?.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={14} className="text-gray-500" />
                    <span className="text-gray-700">{center?.contact}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="IndianRupee" size={14} className="text-gray-500" />
                    <span className="text-gray-700">{center?.cost}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-gray-500" />
                    <span className="text-gray-700">{center?.turnaround}</span>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="text-xs font-medium text-gray-700 mb-1">Services:</div>
                  <div className="flex flex-wrap gap-1">
                    {center?.services?.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-white/50 rounded-lg p-3">
            <div className="flex items-center space-x-2 text-sm text-blue-800">
              <Icon name="Info" size={16} />
              <span className="font-medium">Pro Tip:</span>
              <span>Get your soil tested every 2-3 years for optimal nutrient management and maximum yields.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilSpecificGuidance;
