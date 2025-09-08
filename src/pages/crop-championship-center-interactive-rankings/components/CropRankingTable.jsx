import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CropRankingTable = ({ crops, selectedSeason, selectedRegion, selectedFarmSize }) => {
  const [sortBy, setSortBy] = useState('rank');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCrops, setSelectedCrops] = useState([]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const handleCropSelect = (cropId) => {
    if (selectedCrops?.includes(cropId)) {
      setSelectedCrops(selectedCrops?.filter(id => id !== cropId));
    } else if (selectedCrops?.length < 3) {
      setSelectedCrops([...selectedCrops, cropId]);
    }
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return { icon: 'Crown', color: 'text-yellow-500' };
    if (rank === 2) return { icon: 'Medal', color: 'text-gray-400' };
    if (rank === 3) return { icon: 'Award', color: 'text-orange-600' };
    return { icon: 'Hash', color: 'text-gray-400' };
  };

  const getSuccessProbabilityColor = (probability) => {
    if (probability >= 80) return 'text-green-600 bg-green-50';
    if (probability >= 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getROIColor = (roi) => {
    if (roi >= 150) return 'text-green-600';
    if (roi >= 100) return 'text-yellow-600';
    return 'text-red-600';
  };

  const sortedCrops = [...crops]?.sort((a, b) => {
    let aValue = a?.[sortBy];
    let bValue = b?.[sortBy];
    
    if (typeof aValue === 'string') {
      aValue = aValue?.toLowerCase();
      bValue = bValue?.toLowerCase();
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="BarChart3" size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Crop Rankings</h2>
              <p className="text-sm text-gray-600">
                {selectedSeason} • {selectedRegion} • {selectedFarmSize}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-sm text-gray-500">
              {selectedCrops?.length}/3 selected for comparison
            </div>
            {selectedCrops?.length > 0 && (
              <button
                onClick={() => setSelectedCrops([])}
                className="text-sm text-primary hover:text-primary/80 font-medium"
              >
                Clear Selection
              </button>
            )}
          </div>
        </div>

        {selectedCrops?.length > 0 && (
          <div className="flex items-center space-x-2 p-3 bg-primary/5 rounded-lg border border-primary/20">
            <Icon name="GitCompare" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              {selectedCrops?.length} crops selected for comparison
            </span>
            <button className="ml-auto text-sm text-primary hover:text-primary/80 font-medium">
              Compare Now →
            </button>
          </div>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    onChange={(e) => {
                      if (e?.target?.checked) {
                        setSelectedCrops(crops?.slice(0, 3)?.map(crop => crop?.id));
                      } else {
                        setSelectedCrops([]);
                      }
                    }}
                  />
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Select
                  </span>
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('rank')}
              >
                <div className="flex items-center space-x-1">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </span>
                  <Icon name="ArrowUpDown" size={12} className="text-gray-400" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center space-x-1">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Crop
                  </span>
                  <Icon name="ArrowUpDown" size={12} className="text-gray-400" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('successProbability')}
              >
                <div className="flex items-center space-x-1">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Success Rate
                  </span>
                  <Icon name="ArrowUpDown" size={12} className="text-gray-400" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('expectedYield')}
              >
                <div className="flex items-center space-x-1">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expected Yield
                  </span>
                  <Icon name="ArrowUpDown" size={12} className="text-gray-400" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('investment')}
              >
                <div className="flex items-center space-x-1">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Investment
                  </span>
                  <Icon name="ArrowUpDown" size={12} className="text-gray-400" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('roi')}
              >
                <div className="flex items-center space-x-1">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ROI
                  </span>
                  <Icon name="ArrowUpDown" size={12} className="text-gray-400" />
                </div>
              </th>
              <th className="px-6 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trend
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedCrops?.map((crop, index) => {
              const rankIcon = getRankIcon(crop?.rank);
              const isSelected = selectedCrops?.includes(crop?.id);
              
              return (
                <tr 
                  key={crop?.id} 
                  className={`hover:bg-gray-50 transition-colors duration-150 ${
                    isSelected ? 'bg-primary/5 border-l-4 border-primary' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleCropSelect(crop?.id)}
                      disabled={!isSelected && selectedCrops?.length >= 3}
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name={rankIcon?.icon} 
                        size={20} 
                        className={rankIcon?.color} 
                      />
                      <span className="text-lg font-bold text-gray-900">
                        {crop?.rank}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Icon name="Wheat" size={20} className="text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {crop?.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {crop?.variety}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        getSuccessProbabilityColor(crop?.successProbability)
                      }`}>
                        {crop?.successProbability}%
                      </div>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${crop?.successProbability}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {crop?.expectedYield} Q/Ha
                    </div>
                    <div className="text-xs text-gray-500">
                      Range: {crop?.yieldRange}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      ₹{crop?.investment?.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      per hectare
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`text-sm font-medium ${getROIColor(crop?.roi)}`}>
                      {crop?.roi}%
                    </div>
                    <div className="text-xs text-gray-500">
                      Expected return
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <Icon 
                        name={crop?.trend === 'up' ? 'TrendingUp' : crop?.trend === 'down' ? 'TrendingDown' : 'Minus'} 
                        size={16} 
                        className={
                          crop?.trend === 'up' ? 'text-green-500' : 
                          crop?.trend === 'down' ? 'text-red-500' : 'text-gray-400'
                        } 
                      />
                      <span className="text-xs text-gray-500">
                        {crop?.trendValue}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing {crops?.length} crops for {selectedSeason} season
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">
              Previous
            </button>
            <div className="flex space-x-1">
              <button className="px-3 py-1 text-sm bg-primary text-white rounded">1</button>
              <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">2</button>
              <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">3</button>
            </div>
            <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropRankingTable;