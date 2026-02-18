import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import TreatmentCategoryTabs from './components/TreatmentCategoryTabs';
import TreatmentRankingCard from './components/TreatmentRankingCard';
import ComparisonModal from './components/ComparisonModal';
import ROICalculator from './components/ROICalculator';
import ExpertRecommendations from './components/ExpertRecommendations';
import PriceTracker from './components/PriceTracker';

const TreatmentRankingsPage = () => {
  const [activeCategory, setActiveCategory] = useState('fertilizers');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('effectiveness');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [comparisonTreatments, setComparisonTreatments] = useState([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('rankings');

  const categories = [
    { id: 'fertilizers', name: 'Fertilizers', icon: 'Leaf', count: 45 },
    { id: 'pesticides', name: 'Pesticides', icon: 'Bug', count: 32 },
    { id: 'fungicides', name: 'Fungicides', icon: 'Shield', count: 28 },
    { id: 'herbicides', name: 'Herbicides', icon: 'Zap', count: 24 }
  ];

  const sortOptions = [
    { value: 'effectiveness', label: 'Effectiveness Score' },
    { value: 'safety', label: 'Safety Rating' },
    { value: 'price', label: 'Price (Low to High)' },
    { value: 'roi', label: 'ROI Percentage' },
    { value: 'popularity', label: 'Popularity' }
  ];

  const regionOptions = [
    { value: '', label: 'All Regions' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
    { value: 'karnataka', label: 'Karnataka' }
  ];

  const treatmentData = {
    fertilizers: [
      {
        id: 1,
        name: "NPK 19:19:19 Complex Fertilizer",
        brand: "Coromandel International",
        type: "Complex Fertilizer",
        effectiveness: 94,
        safetyRating: "A",
        pricePerHectare: 1250,
        roiPercentage: 145,
        environmentalImpact: "Low",
        applicationMethod: "Soil Application",
        features: ["Balanced Nutrition", "Water Soluble", "Quick Release", "Organic Certified"],
        topRegions: ["Punjab", "Haryana", "UP"]
      },
      {
        id: 2,
        name: "Urea 46% Nitrogen",
        brand: "IFFCO",
        type: "Nitrogen Fertilizer",
        effectiveness: 91,
        safetyRating: "A",
        pricePerHectare: 980,
        roiPercentage: 132,
        environmentalImpact: "Medium",
        applicationMethod: "Broadcasting",
        features: ["High Nitrogen", "Cost Effective", "Quick Acting", "Widely Available"],
        topRegions: ["Maharashtra", "Gujarat", "MP"]
      },
      {
        id: 3,
        name: "DAP (Diammonium Phosphate)",
        brand: "Krishak Bharati",
        type: "Phosphorus Fertilizer",
        effectiveness: 89,
        safetyRating: "A",
        pricePerHectare: 1180,
        roiPercentage: 128,
        environmentalImpact: "Low",
        applicationMethod: "Basal Application",
        features: ["High Phosphorus", "Root Development", "Early Growth", "Soil Friendly"],
        topRegions: ["Rajasthan", "Karnataka", "AP"]
      },
      {
        id: 4,
        name: "Potash (Muriate of Potash)",
        brand: "Nagarjuna Fertilizers",
        type: "Potassium Fertilizer",
        effectiveness: 87,
        safetyRating: "A",
        pricePerHectare: 1350,
        roiPercentage: 125,
        environmentalImpact: "Low",
        applicationMethod: "Side Dressing",
        features: ["High Potassium", "Disease Resistance", "Quality Improvement", "Storage Friendly"],
        topRegions: ["Tamil Nadu", "Kerala", "Odisha"]
      }
    ],
    pesticides: [
      {
        id: 5,
        name: "Chlorpyrifos 20% EC",
        brand: "Bayer CropScience",
        type: "Insecticide",
        effectiveness: 92,
        safetyRating: "B",
        pricePerHectare: 850,
        roiPercentage: 138,
        environmentalImpact: "Medium",
        applicationMethod: "Foliar Spray",
        features: ["Broad Spectrum", "Long Lasting", "Systemic Action", "Cost Effective"],
        topRegions: ["Punjab", "Haryana", "Gujarat"]
      },
      {
        id: 6,
        name: "Imidacloprid 17.8% SL",
        brand: "Syngenta India",
        type: "Insecticide",
        effectiveness: 90,
        safetyRating: "B",
        pricePerHectare: 920,
        roiPercentage: 135,
        environmentalImpact: "Medium",
        applicationMethod: "Seed Treatment",
        features: ["Systemic", "Sucking Pest Control", "Long Duration", "Seed Safe"],
        topRegions: ["Maharashtra", "Karnataka", "AP"]
      },
      {
        id: 7,
        name: "Lambda Cyhalothrin 5% EC",
        brand: "UPL Limited",
        type: "Insecticide",
        effectiveness: 88,
        safetyRating: "B",
        pricePerHectare: 780,
        roiPercentage: 130,
        environmentalImpact: "Medium",
        applicationMethod: "Foliar Spray",
        features: ["Fast Acting", "Knockdown Effect", "Broad Spectrum", "Weather Resistant"],
        topRegions: ["UP", "Bihar", "West Bengal"]
      }
    ],
    fungicides: [
      {
        id: 8,
        name: "Propiconazole 25% EC",
        brand: "Dow AgroSciences",
        type: "Fungicide",
        effectiveness: 93,
        safetyRating: "A",
        pricePerHectare: 1150,
        roiPercentage: 142,
        environmentalImpact: "Low",
        applicationMethod: "Foliar Spray",
        features: ["Systemic Action", "Preventive & Curative", "Long Duration", "Rain Fastness"],
        topRegions: ["Punjab", "Haryana", "UP"]
      },
      {
        id: 9,
        name: "Mancozeb 75% WP",
        brand: "BASF India",
        type: "Fungicide",
        effectiveness: 86,
        safetyRating: "A",
        pricePerHectare: 680,
        roiPercentage: 125,
        environmentalImpact: "Low",
        applicationMethod: "Foliar Spray",
        features: ["Contact Action", "Multi-site Activity", "Resistance Management", "Cost Effective"],
        topRegions: ["Maharashtra", "Gujarat", "MP"]
      }
    ],
    herbicides: [
      {
        id: 10,
        name: "Glyphosate 41% SL",
        brand: "Monsanto India",
        type: "Herbicide",
        effectiveness: 91,
        safetyRating: "B",
        pricePerHectare: 950,
        roiPercentage: 140,
        environmentalImpact: "Medium",
        applicationMethod: "Post-emergence",
        features: ["Non-selective", "Systemic", "Broad Spectrum", "No Soil Activity"],
        topRegions: ["Punjab", "Haryana", "Gujarat"]
      },
      {
        id: 11,
        name: "2,4-D Amine Salt 58% SL",
        brand: "Rallis India",
        type: "Herbicide",
        effectiveness: 84,
        safetyRating: "C",
        pricePerHectare: 420,
        roiPercentage: 118,
        environmentalImpact: "Medium",
        applicationMethod: "Post-emergence",
        features: ["Selective", "Broadleaf Control", "Economical", "Fast Acting"],
        topRegions: ["UP", "Bihar", "West Bengal"]
      }
    ]
  };

  const currentTreatments = treatmentData?.[activeCategory] || [];

  const filteredTreatments = currentTreatments?.filter(treatment => {
    const matchesSearch = treatment?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         treatment?.brand?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    const matchesRegion = !selectedRegion || 
                         treatment?.topRegions?.some(region => 
                           region?.toLowerCase()?.includes(selectedRegion?.replace('-', ' '))
                         );
    return matchesSearch && matchesRegion;
  });

  const sortedTreatments = [...filteredTreatments]?.sort((a, b) => {
    switch (sortBy) {
      case 'effectiveness':
        return b?.effectiveness - a?.effectiveness;
      case 'safety':
        return a?.safetyRating?.localeCompare(b?.safetyRating);
      case 'price':
        return a?.pricePerHectare - b?.pricePerHectare;
      case 'roi':
        return b?.roiPercentage - a?.roiPercentage;
      default:
        return 0;
    }
  });

  const handleCompare = (treatment) => {
    if (comparisonTreatments?.length < 4 && !comparisonTreatments?.find(t => t?.id === treatment?.id)) {
      setComparisonTreatments([...comparisonTreatments, treatment]);
    }
    setIsComparisonOpen(true);
  };

  const handleRemoveFromComparison = (treatmentId) => {
    setComparisonTreatments(comparisonTreatments?.filter(t => t?.id !== treatmentId));
  };

  const handleViewDetails = (treatment) => {
    console.log('View details for:', treatment?.name);
  };

  const tabItems = [
    { id: 'rankings', name: 'Treatment Rankings', icon: 'Trophy' },
    { id: 'calculator', name: 'ROI Calculator', icon: 'Calculator' },
    { id: 'experts', name: 'Expert Recommendations', icon: 'UserCheck' },
    { id: 'prices', name: 'Price Tracker', icon: 'TrendingUp' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Treatment Rankings - Fertilizer & Pesticide Intelligence | AgroYield AI</title>
        <meta name="description" content="Data-driven rankings of fertilizers, pesticides, fungicides, and herbicides. Compare treatments, calculate ROI, and get expert recommendations for optimal crop protection and nutrition." />
        <meta name="keywords" content="fertilizer rankings, pesticide intelligence, crop treatment, agricultural inputs, ROI calculator, expert recommendations" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Icon name="Beaker" size={32} className="text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Treatment Rankings
                </h1>
              </div>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Transform complex agricultural input decisions into clear, data-driven recommendations. 
                Compare fertilizers, pesticides, and treatments with scientific precision.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">129</div>
                <p className="text-green-100 text-sm">Treatments Ranked</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">94%</div>
                <p className="text-green-100 text-sm">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">₹45K</div>
                <p className="text-green-100 text-sm">Avg. Profit Increase</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15K+</div>
                <p className="text-green-100 text-sm">Farmers Helped</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Navigation */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 bg-white rounded-xl shadow-sm border border-gray-200 p-2">
                {tabItems?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeTab === tab?.id
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    <Icon name={tab?.icon} size={18} />
                    <span>{tab?.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Rankings Tab */}
            {activeTab === 'rankings' && (
              <div className="space-y-8">
                {/* Category Tabs */}
                <TreatmentCategoryTabs
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                  categories={categories}
                />

                {/* Filters and Search */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      type="search"
                      placeholder="Search treatments..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e?.target?.value)}
                      className="w-full"
                    />
                    
                    <Select
                      options={sortOptions}
                      value={sortBy}
                      onChange={setSortBy}
                      placeholder="Sort by..."
                    />
                    
                    <Select
                      options={regionOptions}
                      value={selectedRegion}
                      onChange={setSelectedRegion}
                      placeholder="Filter by region..."
                    />
                  </div>

                  {comparisonTreatments?.length > 0 && (
                    <div className="mt-4 flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center space-x-2">
                        <Icon name="GitCompare" size={16} className="text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">
                          {comparisonTreatments?.length} treatment(s) selected for comparison
                        </span>
                      </div>
                      <Button
                        variant="default"
                        size="sm"
                        iconName="Eye"
                        iconPosition="left"
                        onClick={() => setIsComparisonOpen(true)}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Compare Now
                      </Button>
                    </div>
                  )}
                </div>

                {/* Treatment Rankings */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {categories?.find(c => c?.id === activeCategory)?.name} Rankings
                    </h2>
                    <p className="text-sm text-gray-600">
                      Showing {sortedTreatments?.length} of {currentTreatments?.length} treatments
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {sortedTreatments?.map((treatment, index) => (
                      <TreatmentRankingCard
                        key={treatment?.id}
                        treatment={treatment}
                        rank={index + 1}
                        onCompare={handleCompare}
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>

                  {sortedTreatments?.length === 0 && (
                    <div className="text-center py-12">
                      <Icon name="Search" size={48} className="text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No treatments found</h3>
                      <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ROI Calculator Tab */}
            {activeTab === 'calculator' && <ROICalculator />}

            {/* Expert Recommendations Tab */}
            {activeTab === 'experts' && <ExpertRecommendations />}

            {/* Price Tracker Tab */}
            {activeTab === 'prices' && <PriceTracker />}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 p-3 rounded-xl inline-block mb-6">
              <Icon name="Zap" size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your Treatment Strategy?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Get personalized treatment recommendations based on your crop, soil, and regional conditions. 
              Start making data-driven decisions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Target"
                iconPosition="left"
                className="bg-white text-primary hover:bg-gray-50"
              >
                Get Personalized Recommendations
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white/10"
              >
                Speak with Expert
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Comparison Modal */}
      <ComparisonModal
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        treatments={comparisonTreatments}
        onRemoveTreatment={handleRemoveFromComparison}
      />
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary p-2 rounded-lg">
                  <Icon name="Beaker" size={24} className="text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">AgroYield AI</span>
                  <p className="text-sm text-gray-400">Treatment Intelligence</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Empowering farmers with data-driven treatment recommendations and scientific insights 
                for optimal crop protection and nutrition management.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Treatment Database</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ROI Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Expert Network</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Price Alerts</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date()?.getFullYear()} AgroYield AI. All rights reserved. | Transforming agriculture through intelligent oilseed rankings.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TreatmentRankingsPage;
