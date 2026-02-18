import React, { useState } from 'react';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import Header from '../../components/ui/Header';
import LeaderboardCard from './components/LeaderboardCard';
import AchievementBadge from './components/AchievementBadge';
import SuccessStoryCard from './components/SuccessStoryCard';
import ChallengeCard from './components/ChallengeCard';
import ComparisonTool from './components/ComparisonTool';
import ProgressTracker from './components/ProgressTracker';

const FarmerSuccessLeague = () => {
  const [activeTab, setActiveTab] = useState('leaderboards');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('overall');
  const [leaderboardView, setLeaderboardView] = useState('regional');

  // Mock data for leaderboards
  const mockFarmers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Pune, Maharashtra",
      farmSize: 5.2,
      primaryCrop: "Mustard",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      overallScore: 94,
      yieldPerHectare: 5200,
      profitMargin: 35,
      sustainabilityScore: 88,
      improvement: 12,
      badges: [
        { name: "Yield Champion", icon: "Trophy", type: "gold" },
        { name: "Sustainability Leader", icon: "Leaf", type: "silver" },
        { name: "Innovation Pioneer", icon: "Lightbulb", type: "bronze" }
      ]
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Ludhiana, Punjab",
      farmSize: 3.8,
      primaryCrop: "Soybean",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      overallScore: 91,
      yieldPerHectare: 4800,
      profitMargin: 32,
      sustainabilityScore: 85,
      improvement: 18,
      badges: [
        { name: "Profit Master", icon: "IndianRupee", type: "gold" },
        { name: "Tech Adopter", icon: "Smartphone", type: "silver" }
      ]
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Ahmedabad, Gujarat",
      farmSize: 7.1,
      primaryCrop: "Sunflower",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      overallScore: 89,
      yieldPerHectare: 4600,
      profitMargin: 29,
      sustainabilityScore: 82,
      improvement: 8,
      badges: [
        { name: "Consistent Performer", icon: "Target", type: "silver" },
        { name: "Community Helper", icon: "Users", type: "bronze" }
      ]
    },
    {
      id: 4,
      name: "Sunita Devi",
      location: "Jaipur, Rajasthan",
      farmSize: 2.5,
      primaryCrop: "Mustard",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      overallScore: 87,
      yieldPerHectare: 4400,
      profitMargin: 28,
      sustainabilityScore: 79,
      improvement: 15,
      badges: [
        { name: "Rising Star", icon: "Star", type: "gold" },
        { name: "Water Saver", icon: "Droplets", type: "silver" }
      ]
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Chandigarh, Punjab",
      farmSize: 4.3,
      primaryCrop: "Mustard",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      overallScore: 85,
      yieldPerHectare: 4200,
      profitMargin: 26,
      sustainabilityScore: 76,
      improvement: 10,
      badges: [
        { name: "Quality Focus", icon: "Award", type: "bronze" }
      ]
    }
  ];

  // Mock achievements data
  const mockAchievements = [
    {
      id: 1,
      name: "First Season Success",
      description: "Successfully completed your first season using AgroYield AI recommendations with positive results",
      icon: "Seedling",
      type: "gold",
      earnedDate: "March 2024",
      rarity: 15,
      points: 100,
      isNew: false
    },
    {
      id: 2,
      name: "Yield Champion",
      description: "Achieved top 10% yield performance in your region for consecutive seasons",
      icon: "Trophy",
      type: "platinum",
      earnedDate: "December 2024",
      rarity: 5,
      points: 500,
      isNew: true
    },
    {
      id: 3,
      name: "Sustainable Farming Leader",
      description: "Maintained sustainability score above 80 for 6 consecutive months",
      icon: "Leaf",
      type: "silver",
      earnedDate: "November 2024",
      rarity: 12,
      points: 250,
      isNew: false
    },
    {
      id: 4,
      name: "Community Mentor",
      description: "Helped 5+ farmers improve their performance through knowledge sharing",
      icon: "Users",
      type: "bronze",
      earnedDate: "October 2024",
      rarity: 8,
      points: 150,
      isNew: false
    }
  ];

  // Mock success stories data
  const mockSuccessStories = [
    {
      id: 1,
      title: "From Traditional to Tech-Driven: A 40% Soybean Yield Increase Journey",
      farmerName: "Ramesh Gupta",
      location: "Indore, Madhya Pradesh",
      farmSize: 6.2,
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
      farmerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      category: "Yield Improvement",
      yieldIncrease: 40,
      yieldBefore: 8.2,
      yieldAfter: 11.5,
      profitIncrease: 55,
      additionalProfit: 180000,
      season: "Kharif 2024",
      timeframe: "6 months",
      likes: 234,
      description: "Ramesh transformed his traditional farming approach by adopting AgroYield AI recommendations for oilseed crops, focusing on precision agriculture and data-driven decisions.",
      fullDescription: `Ramesh Gupta's journey from traditional farming to tech-driven agriculture is a testament to the power of data-driven decisions. Starting with skepticism about AI recommendations, Ramesh gradually adopted AgroYield AI suggestions for oilseed crop selection, fertilizer application, and pest management.\n\nThe transformation began with small changes - switching to recommended soybean varieties and adjusting planting schedules based on weather predictions. Within the first season, he noticed improved germination rates and healthier crop growth.\n\nBy the second season, Ramesh had fully embraced the platform's recommendations, including precision fertilizer application and integrated pest management strategies for oilseeds. The results were remarkable - a 40% increase in yield and 55% improvement in profit margins.\n\nToday, Ramesh is not just a successful farmer but also a community leader, sharing his knowledge with neighboring farmers and encouraging them to adopt technology-driven oilseed farming practices.`,
      recommendationsUsed: 5,
      recommendations: ["High-yield soybean variety", "Precision fertilizer timing", "IPM pest control", "Weather-based irrigation", "Soil health monitoring"]
    },
    {
      id: 2,
      title: "Sustainable Sunflower Farming: Balancing Profit and Environment",
      farmerName: "Kavita Desai",
      location: "Nagpur, Maharashtra",
      farmSize: 4.8,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
      farmerAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      category: "Sustainability",
      yieldIncrease: 25,
      yieldBefore: 16.2,
      yieldAfter: 20.3,
      profitIncrease: 35,
      additionalProfit: 125000,
      season: "Kharif 2024",
      timeframe: "8 months",
      likes: 189,
      description: "Kavita successfully balanced environmental sustainability with profitability using AgroYield AI\'s eco-friendly oilseed recommendations.",
      fullDescription: `Kavita Desai's sunflower farm in Nagpur faced the challenge of maintaining profitability while adopting sustainable practices. With increasing environmental concerns and market demand for sustainable oilseed crops, she turned to AgroYield AI for guidance.\n\nThe platform recommended organic fertilizers, biological pest control methods, and water-efficient irrigation techniques for sunflower cultivation. Initially concerned about potential yield losses, Kavita was pleasantly surprised by the results.\n\nNot only did her sunflower yield increase by 25%, but she also achieved premium pricing for her sustainably grown oilseed. The reduced chemical inputs lowered her costs while improving soil health for future seasons.\n\nKavita's success story demonstrates that sustainability and profitability can go hand in hand with the right guidance and technology in oilseed farming.`,
      recommendationsUsed: 4,
      recommendations: ["Organic fertilizer blend", "Biological pest control", "Drip irrigation system", "Cover crop rotation"]
    }
  ];

  // Mock challenges data
  const mockChallenges = [
    {
      id: 1,
      title: "Winter Crop Optimization Challenge",
      description: "Maximize your Rabi season yield using AI-recommended practices. Focus on mustard, linseed, or safflower oilseed cultivation with sustainable methods.",
      icon: "Snowflake",
      status: "active",
      difficulty: "Medium",
      duration: "4 months",
      timeLeft: "2 months 15 days",
      reward: 50000,
      currentParticipants: 1247,
      maxParticipants: 2000,
      category: "Seasonal Optimization",
      leaderCount: 156,
      requirements: ["Rabi crop cultivation", "AI recommendation adoption", "Sustainability score >70", "Yield tracking"]
    },
    {
      id: 2,
      title: "Sustainable Farming Pioneer",
      description: "Achieve and maintain a sustainability score above 85 while improving profitability. Focus on organic practices and resource conservation.",
      icon: "Leaf",
      status: "active",
      difficulty: "Hard",
      duration: "6 months",
      timeLeft: "4 months 8 days",
      reward: 100000,
      currentParticipants: 892,
      maxParticipants: 1500,
      category: "Sustainability",
      leaderCount: 89,
      requirements: ["Sustainability score >85", "Organic certification", "Water conservation", "Soil health improvement"]
    },
    {
      id: 3,
      title: "Tech Adoption Accelerator",
      description: "Implement at least 5 different AI recommendations and track their impact on your farm performance.",
      icon: "Smartphone",
      status: "upcoming",
      difficulty: "Easy",
      duration: "3 months",
      timeLeft: "Starts in 15 days",
      reward: 25000,
      currentParticipants: 0,
      maxParticipants: 3000,
      category: "Technology",
      leaderCount: 0,
      requirements: ["5+ AI recommendations", "Performance tracking", "Community sharing", "Feedback submission"]
    }
  ];

  const regionOptions = [
    { value: 'all', label: 'All Regions' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'madhya-pradesh', label: 'Madhya Pradesh' }
  ];

  const categoryOptions = [
    { value: 'overall', label: 'Overall Performance' },
    { value: 'yield', label: 'Yield per Hectare' },
    { value: 'profit', label: 'Profit Margin' },
    { value: 'sustainability', label: 'Sustainability Score' }
  ];

  const tabs = [
    { id: 'leaderboards', label: 'Leaderboards', icon: 'Trophy' },
    { id: 'achievements', label: 'Achievements', icon: 'Award' },
    { id: 'success-stories', label: 'Success Stories', icon: 'Star' },
    { id: 'challenges', label: 'Challenges', icon: 'Target' },
    { id: 'comparison', label: 'Peer Comparison', icon: 'BarChart3' },
    { id: 'progress', label: 'Progress Tracker', icon: 'Activity' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'leaderboards':
        return (
          <div className="space-y-6">
            {/* Leaderboard Controls */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setLeaderboardView('regional')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        leaderboardView === 'regional' ?'bg-primary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      Regional
                    </button>
                    <button
                      onClick={() => setLeaderboardView('national')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        leaderboardView === 'national' ?'bg-primary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      National
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <Select
                    options={regionOptions}
                    value={selectedRegion}
                    onChange={setSelectedRegion}
                    placeholder="Select Region"
                    className="min-w-[150px]"
                  />
                  <Select
                    options={categoryOptions}
                    value={selectedCategory}
                    onChange={setSelectedCategory}
                    placeholder="Select Category"
                    className="min-w-[180px]"
                  />
                </div>
              </div>
            </div>
            {/* Top Performers Highlight */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Crown" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Top 3 Champions</h3>
                  <p className="text-gray-600">Leading farmers in {categoryOptions?.find(c => c?.value === selectedCategory)?.label}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mockFarmers?.slice(0, 3)?.map((farmer, index) => (
                  <LeaderboardCard
                    key={farmer?.id}
                    farmer={farmer}
                    rank={index + 1}
                    category={selectedCategory}
                  />
                ))}
              </div>
            </div>
            {/* Full Leaderboard */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="List" size={20} className="text-primary" />
                <h3 className="text-xl font-bold text-gray-900">Complete Rankings</h3>
              </div>
              <div className="space-y-4">
                {mockFarmers?.map((farmer, index) => (
                  <LeaderboardCard
                    key={farmer?.id}
                    farmer={farmer}
                    rank={index + 1}
                    category={selectedCategory}
                  />
                ))}
              </div>
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="space-y-6">
            {/* Achievement Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-6 text-white">
                <div className="flex items-center space-x-3">
                  <Icon name="Trophy" size={24} />
                  <div>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-sm opacity-90">Total Achievements</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-6 text-white">
                <div className="flex items-center space-x-3">
                  <Icon name="Star" size={24} />
                  <div>
                    <p className="text-2xl font-bold">2,450</p>
                    <p className="text-sm opacity-90">Total Points</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-6 text-white">
                <div className="flex items-center space-x-3">
                  <Icon name="TrendingUp" size={24} />
                  <div>
                    <p className="text-2xl font-bold">Top 5%</p>
                    <p className="text-sm opacity-90">Regional Rank</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 text-white">
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={24} />
                  <div>
                    <p className="text-2xl font-bold">18</p>
                    <p className="text-sm opacity-90">Months Active</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Recent Achievements */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Award" size={20} className="text-primary" />
                <h3 className="text-xl font-bold text-gray-900">Your Achievements</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockAchievements?.map((achievement) => (
                  <AchievementBadge
                    key={achievement?.id}
                    achievement={achievement}
                    size="default"
                    showDetails={true}
                  />
                ))}
              </div>
            </div>
            {/* Achievement Categories */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Grid3x3" size={20} className="text-primary" />
                <h3 className="text-xl font-bold text-gray-900">Achievement Categories</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Yield Mastery', icon: 'TrendingUp', count: 3, total: 5, color: 'bg-green-500' },
                  { name: 'Sustainability', icon: 'Leaf', count: 2, total: 4, color: 'bg-emerald-500' },
                  { name: 'Innovation', icon: 'Lightbulb', count: 4, total: 6, color: 'bg-yellow-500' },
                  { name: 'Community', icon: 'Users', count: 3, total: 4, color: 'bg-blue-500' }
                ]?.map((category) => (
                  <div key={category?.name} className="bg-gray-50 rounded-lg p-4">
                    <div className={`w-10 h-10 ${category?.color} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon name={category?.icon} size={18} className="text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{category?.name}</h4>
                    <p className="text-sm text-gray-600">{category?.count}/{category?.total} unlocked</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className={`${category?.color} h-2 rounded-full`}
                        style={{ width: `${(category?.count / category?.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'success-stories':
        return (
          <div className="space-y-6">
            {/* Success Stories Header */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Star" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Farmer Success Stories</h3>
                    <p className="text-gray-600">Real transformations powered by AgroYield AI</p>
                  </div>
                </div>
                <Button variant="outline" iconName="Plus" iconPosition="left">
                  Share Your Story
                </Button>
              </div>
            </div>
            {/* Featured Success Stories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockSuccessStories?.map((story) => (
                <SuccessStoryCard key={story?.id} story={story} />
              ))}
            </div>
            {/* Success Metrics */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="BarChart3" size={20} className="text-primary" />
                <h3 className="text-xl font-bold text-gray-900">Community Impact</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">2,847</p>
                  <p className="text-sm text-gray-600">Success Stories</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">₹45.2Cr</p>
                  <p className="text-sm text-gray-600">Additional Income</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">32%</p>
                  <p className="text-sm text-gray-600">Avg Yield Increase</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">89%</p>
                  <p className="text-sm text-gray-600">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'challenges':
        return (
          <div className="space-y-6">
            {/* Challenges Header */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Target" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Community Challenges</h3>
                    <p className="text-gray-600">Compete with fellow farmers and win exciting rewards</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" iconName="Filter" iconPosition="left">
                    Filter
                  </Button>
                  <Button variant="default" iconName="Plus" iconPosition="left">
                    Create Challenge
                  </Button>
                </div>
              </div>
            </div>
            {/* Active Challenges */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockChallenges?.map((challenge) => (
                <ChallengeCard key={challenge?.id} challenge={challenge} />
              ))}
            </div>
            {/* Challenge Stats */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Award" size={20} className="text-primary" />
                <h3 className="text-xl font-bold text-gray-900">Your Challenge Performance</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="CheckCircle" size={18} className="text-green-600" />
                    <span className="text-sm font-medium text-green-800">Completed</span>
                  </div>
                  <p className="text-2xl font-bold text-green-600">7</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Play" size={18} className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Active</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">3</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Trophy" size={18} className="text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-800">Won</span>
                  </div>
                  <p className="text-2xl font-bold text-yellow-600">4</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Gift" size={18} className="text-purple-600" />
                    <span className="text-sm font-medium text-purple-800">Rewards</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-600">₹1.2L</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'comparison':
        return <ComparisonTool />;

      case 'progress':
        return <ProgressTracker />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Farmer Success League
                </h1>
              </div>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join India's largest community of data-driven farmers. Compete, learn, and grow together 
                while celebrating agricultural excellence and innovation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="Users" size={20} />
                  <span className="font-semibold">25,847 Active Farmers</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="Trophy" size={20} />
                  <span className="font-semibold">₹12.5Cr Total Rewards</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="TrendingUp" size={20} />
                  <span className="font-semibold">38% Avg Improvement</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-1 overflow-x-auto py-4">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab?.id
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {renderTabContent()}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">AgroYield AI</h3>
                    <p className="text-sm text-gray-400">Success League</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  Empowering farmers through community-driven competition, peer learning, 
                  and data-driven agricultural excellence.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} className="text-green-400" />
                    <span className="text-sm text-gray-300">Privacy Protected</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} className="text-yellow-400" />
                    <span className="text-sm text-gray-300">Verified Results</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Community</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">Leaderboards</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Challenges</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Forums</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-gray-400">
                © {new Date()?.getFullYear()} AgroYield AI. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default FarmerSuccessLeague;
