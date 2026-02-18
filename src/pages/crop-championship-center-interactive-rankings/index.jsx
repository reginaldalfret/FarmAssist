import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import SeasonalTournament from './components/SeasonalTournament';
import CropRankingTable from './components/CropRankingTable';
import FilterPanel from './components/FilterPanel';
import CropComparisonModal from './components/CropComparisonModal';
import SuccessProbabilityCalculator from './components/SuccessProbabilityCalculator';
import RegionalLeaderboard from './components/RegionalLeaderboard';
import MobileCropCards from './components/MobileCropCards';

const CropChampionshipCenter = () => {
  const [selectedSeason, setSelectedSeason] = useState('Kharif');
  const [selectedCrops, setSelectedCrops] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(false);
  const [filters, setFilters] = useState({
    region: 'all',
    farmSize: 'all',
    cropType: 'all',
    cultivationType: 'all',
    waterRequirement: 'all',
    marketDemand: 'all',
    minSuccessRate: 0,
    minROI: 0
  });

  // Mock crop data
  const mockCrops = [
    {
      id: 1,
      rank: 1,
      name: 'Mustard',
      variety: 'Pusa Bold',
      successProbability: 89,
      expectedYield: 18.9,
      yieldRange: '17-21 Q/Ha',
      investment: 35000,
      roi: 165,
      trend: 'up',
      trendValue: '+12%',
      waterRequirement: 300,
      growthPeriod: 130,
      laborRequirement: 28,
      marketPrice: 4800,
      pros: ['High oil content', 'Low water requirement', 'Winter crop advantage'],
      cons: ['Pest susceptibility', 'Weather dependent', 'Limited market reach']
    },
    {
      id: 2,
      rank: 2,
      name: 'Soybean',
      variety: 'JS 335',
      successProbability: 85,
      expectedYield: 12.5,
      yieldRange: '11-14 Q/Ha',
      investment: 45000,
      roi: 145,
      trend: 'up',
      trendValue: '+8%',
      waterRequirement: 450,
      growthPeriod: 95,
      laborRequirement: 25,
      marketPrice: 4200,
      pros: ['Nitrogen fixation', 'Export demand', 'Oil extraction value'],
      cons: ['Disease susceptible', 'Monsoon dependent', 'Processing required']
    },
    {
      id: 3,
      rank: 3,
      name: 'Groundnut',
      variety: 'TAG 24',
      successProbability: 78,
      expectedYield: 18.7,
      yieldRange: '16-21 Q/Ha',
      investment: 52000,
      roi: 135,
      trend: 'stable',
      trendValue: '+2%',
      waterRequirement: 500,
      growthPeriod: 120,
      laborRequirement: 40,
      marketPrice: 5500,
      pros: ['High protein content', 'Soil improvement', 'Dual purpose crop'],
      cons: ['Aflatoxin risk', 'Harvesting labor intensive', 'Market volatility']
    },
    {
      id: 4,
      rank: 4,
      name: 'Sunflower',
      variety: 'KBSH 44',
      successProbability: 82,
      expectedYield: 22.5,
      yieldRange: '20-25 Q/Ha',
      investment: 48000,
      roi: 125,
      trend: 'up',
      trendValue: '+15%',
      waterRequirement: 550,
      growthPeriod: 105,
      laborRequirement: 32,
      marketPrice: 5000,
      pros: ['Oil crop potential', 'Drought tolerant', 'Quick maturity'],
      cons: ['Bird damage risk', 'Herbicide management', 'Storage requirements']
    },
    {
      id: 5,
      rank: 5,
      name: 'Sesame',
      variety: 'GT 10',
      successProbability: 76,
      expectedYield: 8.5,
      yieldRange: '7-10 Q/Ha',
      investment: 38000,
      roi: 140,
      trend: 'up',
      trendValue: '+10%',
      waterRequirement: 400,
      growthPeriod: 90,
      laborRequirement: 28,
      marketPrice: 6500,
      pros: ['Premium pricing', 'Short duration crop', 'High value oil'],
      cons: ['Low yield potential', 'Complex harvesting', 'Market fluctuation']
    },
    {
      id: 6,
      rank: 6,
      name: 'Castor',
      variety: 'GCH 7',
      successProbability: 74,
      expectedYield: 16.2,
      yieldRange: '14-18 Q/Ha',
      investment: 42000,
      roi: 130,
      trend: 'stable',
      trendValue: '+5%',
      waterRequirement: 600,
      growthPeriod: 180,
      laborRequirement: 22,
      marketPrice: 4700,
      pros: ['Medicinal oil value', 'Perennial crop', 'Low input requirements'],
      cons: ['Long maturity period', 'Weather sensitive', 'Processing needed']
    },
    {
      id: 7,
      rank: 7,
      name: 'Linseed',
      variety: 'Gaurav',
      successProbability: 71,
      expectedYield: 10.2,
      yieldRange: '9-12 Q/Ha',
      investment: 32000,
      roi: 120,
      trend: 'down',
      trendValue: '-3%',
      waterRequirement: 350,
      growthPeriod: 110,
      laborRequirement: 24,
      marketPrice: 5200,
      pros: ['Nutritional value', 'Low water need', 'Winter crop option'],
      cons: ['Disease prone', 'Market niche', 'Processing complexity']
    },
    {
      id: 8,
      rank: 8,
      name: 'Safflower',
      variety: 'PBNS 12',
      successProbability: 69,
      expectedYield: 12.8,
      yieldRange: '11-14 Q/Ha',
      investment: 40000,
      roi: 115,
      trend: 'stable',
      trendValue: '+1%',
      waterRequirement: 450,
      growthPeriod: 140,
      laborRequirement: 26,
      marketPrice: 4900,
      pros: ['Oil crop value', 'Drought resistant', 'Industrial demand'],
      cons: ['Long growing period', 'Pest management', 'Limited market awareness']
    }
  ];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      region: 'all',
      farmSize: 'all',
      cropType: 'all',
      cultivationType: 'all',
      waterRequirement: 'all',
      marketDemand: 'all',
      minSuccessRate: 0,
      minROI: 0
    });
  };

  const handleCropSelect = (cropId) => {
    if (selectedCrops?.includes(cropId)) {
      setSelectedCrops(selectedCrops?.filter(id => id !== cropId));
    } else if (selectedCrops?.length < 3) {
      setSelectedCrops([...selectedCrops, cropId]);
    }
  };

  useEffect(() => {
    if (selectedCrops?.length >= 2) {
      const timer = setTimeout(() => {
        setShowComparison(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [selectedCrops]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Icon name="Trophy" size={32} className="text-primary" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Crop Championship Center
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the winning crops for your farm with AI-powered rankings, 
                interactive comparisons, and real-time success predictions
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-gray-600">Ranked Crops</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">28</div>
                <div className="text-sm text-gray-600">States Covered</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">92%</div>
                <div className="text-sm text-gray-600">Prediction Accuracy</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2.5M+</div>
                <div className="text-sm text-gray-600">Farmers Helped</div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            {/* Seasonal Tournament */}
            <SeasonalTournament 
              selectedSeason={selectedSeason}
              onSeasonChange={setSelectedSeason}
            />

            {/* Filter Panel */}
            <FilterPanel
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              isCollapsed={isFilterCollapsed}
              onToggleCollapse={() => setIsFilterCollapsed(!isFilterCollapsed)}
            />

            {/* Success Probability Calculator */}
            <SuccessProbabilityCalculator />

            {/* Mobile Crop Cards */}
            <MobileCropCards
              crops={mockCrops}
              onCropSelect={handleCropSelect}
              selectedCrops={selectedCrops}
            />

            {/* Desktop Crop Ranking Table */}
            <div className="hidden lg:block">
              <CropRankingTable
                crops={mockCrops}
                selectedSeason={selectedSeason}
                selectedRegion={filters?.region === 'all' ? 'All Regions' : filters?.region}
                selectedFarmSize={filters?.farmSize === 'all' ? 'All Farm Sizes' : filters?.farmSize}
              />
            </div>

            {/* Regional Leaderboard */}
            <RegionalLeaderboard />

            {/* Comparison CTA */}
            {selectedCrops?.length > 0 && (
              <div className="fixed bottom-6 right-6 z-40">
                <button
                  onClick={() => setShowComparison(true)}
                  className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-200 flex items-center space-x-2"
                >
                  <Icon name="GitCompare" size={20} />
                  <span>Compare {selectedCrops?.length} Crops</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Comparison Modal */}
        <CropComparisonModal
          isOpen={showComparison}
          onClose={() => setShowComparison(false)}
          selectedCrops={selectedCrops}
          allCrops={mockCrops}
        />
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
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
                      d="M9 22V13l3-3h6l3 3v9M13 16h6M16 10v12" 
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
              <p className="text-gray-400 text-sm">
                Transforming agriculture through AI-powered crop rankings and data-driven farming decisions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Rankings</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Crop Rankings</a></li>
                <li><a href="#" className="hover:text-white">Treatment Rankings</a></li>
                <li><a href="#" className="hover:text-white">Regional Analysis</a></li>
                <li><a href="#" className="hover:text-white">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Success Calculator</a></li>
                <li><a href="#" className="hover:text-white">Crop Comparison</a></li>
                <li><a href="#" className="hover:text-white">AI Recommendations</a></li>
                <li><a href="#" className="hover:text-white">Market Analysis</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">API Documentation</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date()?.getFullYear()} AgroYield AI. All rights reserved. Empowering farmers with intelligent oilseed rankings.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CropChampionshipCenter;
