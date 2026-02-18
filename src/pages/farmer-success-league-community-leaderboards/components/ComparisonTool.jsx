import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';

const ComparisonTool = () => {
  const [selectedRegion, setSelectedRegion] = useState('maharashtra');
  const [selectedFarmSize, setSelectedFarmSize] = useState('2-5');
  const [selectedCrop, setSelectedCrop] = useState('mustard');

  const regionOptions = [
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'rajasthan', label: 'Rajasthan' }
  ];

  const farmSizeOptions = [
    { value: '0-2', label: '0-2 hectares' },
    { value: '2-5', label: '2-5 hectares' },
    { value: '5-10', label: '5-10 hectares' },
    { value: '10+', label: '10+ hectares' }
  ];

  const cropOptions = [
    { value: 'mustard', label: 'Mustard' },
    { value: 'soybean', label: 'Soybean' },
    { value: 'groundnut', label: 'Groundnut' },
    { value: 'sunflower', label: 'Sunflower' },
    { value: 'sesame', label: 'Sesame' }
  ];

  // Mock comparison data
  const comparisonData = {
    yourFarm: {
      yieldPerHectare: 4200,
      profitMargin: 28,
      sustainabilityScore: 75,
      costPerHectare: 45000,
      rank: 156
    },
    regionAverage: {
      yieldPerHectare: 3800,
      profitMargin: 22,
      sustainabilityScore: 68,
      costPerHectare: 48000,
      totalFarms: 2847
    },
    topPerformers: {
      yieldPerHectare: 5200,
      profitMargin: 35,
      sustainabilityScore: 88,
      costPerHectare: 42000
    }
  };

  const getComparisonIcon = (yourValue, avgValue) => {
    if (yourValue > avgValue) return { icon: 'TrendingUp', color: 'text-green-500' };
    if (yourValue < avgValue) return { icon: 'TrendingDown', color: 'text-red-500' };
    return { icon: 'Minus', color: 'text-gray-500' };
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const ComparisonMetric = ({ title, icon, yourValue, avgValue, topValue, unit = '', isCurrency = false }) => {
    const compIcon = getComparisonIcon(yourValue, avgValue);
    const formatValue = (value) => {
      if (isCurrency) return formatCurrency(value);
      return `${value}${unit}`;
    };

    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Icon name={icon} size={18} className="text-gray-600" />
          <h4 className="font-semibold text-gray-900">{title}</h4>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Your Farm</span>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-gray-900">{formatValue(yourValue)}</span>
              <Icon name={compIcon?.icon} size={16} className={compIcon?.color} />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Region Average</span>
            <span className="font-medium text-gray-700">{formatValue(avgValue)}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Top 10%</span>
            <span className="font-medium text-primary">{formatValue(topValue)}</span>
          </div>
          
          <div className="pt-2 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">vs Average</span>
              <span className={`font-semibold ${compIcon?.color}`}>
                {yourValue > avgValue ? '+' : ''}{((yourValue - avgValue) / avgValue * 100)?.toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Icon name="BarChart3" size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Peer Comparison Tool</h3>
          <p className="text-gray-600">Compare your farm performance with similar farms in your region</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Select
          label="Region"
          options={regionOptions}
          value={selectedRegion}
          onChange={setSelectedRegion}
        />
        <Select
          label="Farm Size"
          options={farmSizeOptions}
          value={selectedFarmSize}
          onChange={setSelectedFarmSize}
        />
        <Select
          label="Primary Crop"
          options={cropOptions}
          value={selectedCrop}
          onChange={setSelectedCrop}
        />
      </div>
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Info" size={16} className="text-blue-600" />
          <span className="text-sm font-semibold text-blue-800">Your Position</span>
        </div>
        <p className="text-blue-700">
          You rank <span className="font-bold">#{comparisonData?.yourFarm?.rank}</span> out of{' '}
          <span className="font-bold">{comparisonData?.regionAverage?.totalFarms}</span> similar farms in{' '}
          {regionOptions?.find(r => r?.value === selectedRegion)?.label}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ComparisonMetric
          title="Yield per Hectare"
          icon="TrendingUp"
          yourValue={comparisonData?.yourFarm?.yieldPerHectare}
          avgValue={comparisonData?.regionAverage?.yieldPerHectare}
          topValue={comparisonData?.topPerformers?.yieldPerHectare}
          unit=" kg/ha"
        />
        
        <ComparisonMetric
          title="Profit Margin"
          icon="Percent"
          yourValue={comparisonData?.yourFarm?.profitMargin}
          avgValue={comparisonData?.regionAverage?.profitMargin}
          topValue={comparisonData?.topPerformers?.profitMargin}
          unit="%"
        />
        
        <ComparisonMetric
          title="Sustainability Score"
          icon="Leaf"
          yourValue={comparisonData?.yourFarm?.sustainabilityScore}
          avgValue={comparisonData?.regionAverage?.sustainabilityScore}
          topValue={comparisonData?.topPerformers?.sustainabilityScore}
          unit="/100"
        />
        
        <ComparisonMetric
          title="Cost per Hectare"
          icon="IndianRupee"
          yourValue={comparisonData?.yourFarm?.costPerHectare}
          avgValue={comparisonData?.regionAverage?.costPerHectare}
          topValue={comparisonData?.topPerformers?.costPerHectare}
          isCurrency={true}
        />
      </div>
      <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
        <div className="flex items-center space-x-2 mb-3">
          <Icon name="Lightbulb" size={18} className="text-yellow-500" />
          <h4 className="font-semibold text-gray-900">Improvement Opportunities</h4>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="ArrowRight" size={14} className="text-primary" />
            <span className="text-gray-700">Focus on sustainable practices to improve your sustainability score by 13 points</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="ArrowRight" size={14} className="text-primary" />
            <span className="text-gray-700">Optimize input costs to potentially save ₹3,000 per hectare</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="ArrowRight" size={14} className="text-primary" />
            <span className="text-gray-700">Your yield is above average - maintain current practices</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTool;
