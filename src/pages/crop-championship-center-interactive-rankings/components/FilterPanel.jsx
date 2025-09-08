import React from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';

const FilterPanel = ({ 
  filters, 
  onFilterChange, 
  onResetFilters,
  isCollapsed,
  onToggleCollapse 
}) => {
  const regionOptions = [
    { value: 'all', label: 'All Regions' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
    { value: 'tamil-nadu', label: 'Tamil Nadu' },
    { value: 'west-bengal', label: 'West Bengal' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'madhya-pradesh', label: 'Madhya Pradesh' }
  ];

  const farmSizeOptions = [
    { value: 'all', label: 'All Farm Sizes' },
    { value: 'small', label: 'Small (< 2 hectares)' },
    { value: 'medium', label: 'Medium (2-10 hectares)' },
    { value: 'large', label: 'Large (> 10 hectares)' }
  ];

  const cropTypeOptions = [
    { value: 'all', label: 'All Crop Types' },
    { value: 'cereals', label: 'Cereals' },
    { value: 'pulses', label: 'Pulses' },
    { value: 'oilseeds', label: 'Oilseeds' },
    { value: 'vegetables', label: 'Vegetables' },
    { value: 'fruits', label: 'Fruits' },
    { value: 'spices', label: 'Spices' },
    { value: 'cash-crops', label: 'Cash Crops' }
  ];

  const cultivationTypeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'organic', label: 'Organic' },
    { value: 'conventional', label: 'Conventional' },
    { value: 'integrated', label: 'Integrated' }
  ];

  const waterRequirementOptions = [
    { value: 'all', label: 'All Water Requirements' },
    { value: 'low', label: 'Low (< 400mm)' },
    { value: 'medium', label: 'Medium (400-800mm)' },
    { value: 'high', label: 'High (> 800mm)' }
  ];

  const marketDemandOptions = [
    { value: 'all', label: 'All Demand Levels' },
    { value: 'high', label: 'High Demand' },
    { value: 'medium', label: 'Medium Demand' },
    { value: 'low', label: 'Low Demand' }
  ];

  const activeFiltersCount = Object.values(filters)?.filter(value => value !== 'all')?.length;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="Filter" size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Advanced Filters</h3>
              <p className="text-sm text-gray-600">
                {activeFiltersCount > 0 ? `${activeFiltersCount} filters active` : 'No filters applied'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {activeFiltersCount > 0 && (
              <button
                onClick={onResetFilters}
                className="text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Reset All
              </button>
            )}
            <button
              onClick={onToggleCollapse}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <Icon 
                name={isCollapsed ? "ChevronDown" : "ChevronUp"} 
                size={20} 
              />
            </button>
          </div>
        </div>
      </div>
      {!isCollapsed && (
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Select
              label="Region"
              options={regionOptions}
              value={filters?.region}
              onChange={(value) => onFilterChange('region', value)}
              className="w-full"
            />

            <Select
              label="Farm Size"
              options={farmSizeOptions}
              value={filters?.farmSize}
              onChange={(value) => onFilterChange('farmSize', value)}
              className="w-full"
            />

            <Select
              label="Crop Type"
              options={cropTypeOptions}
              value={filters?.cropType}
              onChange={(value) => onFilterChange('cropType', value)}
              className="w-full"
            />

            <Select
              label="Cultivation Type"
              options={cultivationTypeOptions}
              value={filters?.cultivationType}
              onChange={(value) => onFilterChange('cultivationType', value)}
              className="w-full"
            />

            <Select
              label="Water Requirement"
              options={waterRequirementOptions}
              value={filters?.waterRequirement}
              onChange={(value) => onFilterChange('waterRequirement', value)}
              className="w-full"
            />

            <Select
              label="Market Demand"
              options={marketDemandOptions}
              value={filters?.marketDemand}
              onChange={(value) => onFilterChange('marketDemand', value)}
              className="w-full"
            />
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Success Rate (%)
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters?.minSuccessRate}
                    onChange={(e) => onFilterChange('minSuccessRate', parseInt(e?.target?.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-900 min-w-[3rem]">
                    {filters?.minSuccessRate}%
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum ROI (%)
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    min="0"
                    max="300"
                    value={filters?.minROI}
                    onChange={(e) => onFilterChange('minROI', parseInt(e?.target?.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-900 min-w-[3rem]">
                    {filters?.minROI}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {Object.entries(filters)?.map(([key, value]) => {
                if (value === 'all' || (typeof value === 'number' && value === 0)) return null;
                
                let displayValue = value;
                if (key === 'minSuccessRate') displayValue = `Success ≥ ${value}%`;
                if (key === 'minROI') displayValue = `ROI ≥ ${value}%`;
                
                return (
                  <div
                    key={key}
                    className="flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    <span>{displayValue}</span>
                    <button
                      onClick={() => onFilterChange(key, key?.startsWith('min') ? 0 : 'all')}
                      className="hover:text-primary/70"
                    >
                      <Icon name="X" size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;