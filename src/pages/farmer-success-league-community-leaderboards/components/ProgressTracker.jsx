import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ProgressTracker = () => {
  const [selectedMetric, setSelectedMetric] = useState('yield');
  const [timeframe, setTimeframe] = useState('yearly');

  // Mock progress data
  const progressData = {
    yearly: [
      { period: '2020', yield: 3200, profit: 18, sustainability: 58, cost: 52000 },
      { period: '2021', yield: 3600, profit: 22, sustainability: 65, cost: 49000 },
      { period: '2022', yield: 3900, profit: 25, sustainability: 70, cost: 47000 },
      { period: '2023', yield: 4200, profit: 28, sustainability: 75, cost: 45000 },
      { period: '2024', yield: 4400, profit: 32, sustainability: 78, cost: 44000 }
    ],
    seasonal: [
      { period: 'Kharif 2023', yield: 4100, profit: 26, sustainability: 73, cost: 46000 },
      { period: 'Rabi 2023-24', yield: 4300, profit: 30, sustainability: 77, cost: 44000 },
      { period: 'Kharif 2024', yield: 4400, profit: 32, sustainability: 78, cost: 44000 },
      { period: 'Rabi 2024-25', yield: 4600, profit: 35, sustainability: 80, cost: 43000 }
    ]
  };

  const currentData = progressData?.[timeframe];

  const getMetricConfig = (metric) => {
    switch (metric) {
      case 'yield':
        return {
          title: 'Yield per Hectare',
          dataKey: 'yield',
          color: '#22c55e',
          unit: 'kg/ha',
          icon: 'TrendingUp'
        };
      case 'profit':
        return {
          title: 'Profit Margin',
          dataKey: 'profit',
          color: '#3b82f6',
          unit: '%',
          icon: 'Percent'
        };
      case 'sustainability':
        return {
          title: 'Sustainability Score',
          dataKey: 'sustainability',
          color: '#10b981',
          unit: '/100',
          icon: 'Leaf'
        };
      case 'cost':
        return {
          title: 'Cost per Hectare',
          dataKey: 'cost',
          color: '#f59e0b',
          unit: '₹',
          icon: 'IndianRupee'
        };
      default:
        return {
          title: 'Yield per Hectare',
          dataKey: 'yield',
          color: '#22c55e',
          unit: 'kg/ha',
          icon: 'TrendingUp'
        };
    }
  };

  const metricConfig = getMetricConfig(selectedMetric);

  const calculateImprovement = () => {
    if (currentData?.length < 2) return 0;
    const latest = currentData?.[currentData?.length - 1]?.[metricConfig?.dataKey];
    const previous = currentData?.[currentData?.length - 2]?.[metricConfig?.dataKey];
    return ((latest - previous) / previous * 100)?.toFixed(1);
  };

  const calculateTotalImprovement = () => {
    if (currentData?.length < 2) return 0;
    const latest = currentData?.[currentData?.length - 1]?.[metricConfig?.dataKey];
    const first = currentData?.[0]?.[metricConfig?.dataKey];
    return ((latest - first) / first * 100)?.toFixed(1);
  };

  const milestones = [
    {
      id: 1,
      title: "First AgroYield AI Recommendation",
      date: "March 2021",
      description: "Started using AI-recommended mustard (Pusa Bold) variety",
      icon: "Lightbulb",
      achieved: true
    },
    {
      id: 2,
      title: "Yield Improvement Milestone",
      date: "October 2021",
      description: "Achieved 15% yield increase over previous year",
      icon: "TrendingUp",
      achieved: true
    },
    {
      id: 3,
      title: "Sustainability Champion",
      date: "June 2022",
      description: "Reached 70+ sustainability score",
      icon: "Leaf",
      achieved: true
    },
    {
      id: 4,
      title: "Cost Optimization Expert",
      date: "December 2023",
      description: "Reduced input costs by 20% while maintaining yield",
      icon: "Target",
      achieved: true
    },
    {
      id: 5,
      title: "Regional Top 100",
      date: "In Progress",
      description: "Currently ranked #156, targeting top 100",
      icon: "Trophy",
      achieved: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Activity" size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Progress Tracker</h3>
            <p className="text-gray-600">Track your farm's improvement journey over time</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setTimeframe('yearly')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              timeframe === 'yearly' ?'bg-primary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Yearly
          </button>
          <button
            onClick={() => setTimeframe('seasonal')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              timeframe === 'seasonal' ?'bg-primary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Seasonal
          </button>
        </div>
      </div>
      {/* Metric Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {['yield', 'profit', 'sustainability', 'cost']?.map((metric) => {
          const config = getMetricConfig(metric);
          const isSelected = selectedMetric === metric;
          return (
            <button
              key={metric}
              onClick={() => setSelectedMetric(metric)}
              className={`p-4 rounded-lg border-2 transition-all ${
                isSelected
                  ? 'border-primary bg-primary/5' :'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <Icon 
                  name={config?.icon} 
                  size={18} 
                  className={isSelected ? 'text-primary' : 'text-gray-600'} 
                />
                <span className={`text-sm font-medium ${isSelected ? 'text-primary' : 'text-gray-600'}`}>
                  {config?.title}
                </span>
              </div>
              <p className={`text-lg font-bold ${isSelected ? 'text-primary' : 'text-gray-900'}`}>
                {currentData?.[currentData?.length - 1]?.[config?.dataKey]}{config?.unit}
              </p>
            </button>
          );
        })}
      </div>
      {/* Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Icon name={metricConfig?.icon} size={20} className="text-primary" />
            <h4 className="text-lg font-bold text-gray-900">{metricConfig?.title} Trend</h4>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-gray-600">Your Progress</span>
            </div>
            <div className="text-gray-500">
              Latest Change: <span className={`font-semibold ${parseFloat(calculateImprovement()) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {parseFloat(calculateImprovement()) >= 0 ? '+' : ''}{calculateImprovement()}%
              </span>
            </div>
          </div>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="period" 
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value) => [`${value}${metricConfig?.unit}`, metricConfig?.title]}
              />
              <Line
                type="monotone"
                dataKey={metricConfig?.dataKey}
                stroke={metricConfig?.color}
                strokeWidth={3}
                dot={{ fill: metricConfig?.color, strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: metricConfig?.color, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="TrendingUp" size={18} className="text-green-600" />
            <span className="text-sm font-medium text-green-800">Total Improvement</span>
          </div>
          <p className="text-2xl font-bold text-green-600">+{calculateTotalImprovement()}%</p>
          <p className="text-xs text-green-600">Since {currentData?.[0]?.period}</p>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Calendar" size={18} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Tracking Period</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">{currentData?.length}</p>
          <p className="text-xs text-blue-600">{timeframe === 'yearly' ? 'Years' : 'Seasons'} of data</p>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Award" size={18} className="text-purple-600" />
            <span className="text-sm font-medium text-purple-800">Milestones</span>
          </div>
          <p className="text-2xl font-bold text-purple-600">{milestones?.filter(m => m?.achieved)?.length}/{milestones?.length}</p>
          <p className="text-xs text-purple-600">Achievements unlocked</p>
        </div>
      </div>
      {/* Milestones */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Icon name="Flag" size={20} className="text-primary" />
          <h4 className="text-lg font-bold text-gray-900">Achievement Milestones</h4>
        </div>
        
        <div className="space-y-4">
          {milestones?.map((milestone, index) => (
            <div key={milestone?.id} className="flex items-start space-x-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                milestone?.achieved 
                  ? 'bg-primary text-white' :'bg-gray-100 text-gray-400'
              }`}>
                <Icon name={milestone?.icon} size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h5 className={`font-semibold ${milestone?.achieved ? 'text-gray-900' : 'text-gray-500'}`}>
                    {milestone?.title}
                  </h5>
                  {milestone?.achieved && (
                    <Icon name="CheckCircle" size={16} className="text-green-500" />
                  )}
                </div>
                <p className={`text-sm mb-1 ${milestone?.achieved ? 'text-gray-600' : 'text-gray-400'}`}>
                  {milestone?.description}
                </p>
                <p className={`text-xs ${milestone?.achieved ? 'text-gray-500' : 'text-gray-400'}`}>
                  {milestone?.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
