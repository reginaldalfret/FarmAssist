import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CropComparisonModal = ({ isOpen, onClose, selectedCrops, allCrops }) => {
  if (!isOpen) return null;

  const cropsToCompare = allCrops?.filter(crop => selectedCrops?.includes(crop?.id));

  const comparisonMetrics = [
    { key: 'successProbability', label: 'Success Rate', unit: '%', format: (val) => `${val}%` },
    { key: 'expectedYield', label: 'Expected Yield', unit: 'Q/Ha', format: (val) => `${val} Q/Ha` },
    { key: 'investment', label: 'Investment', unit: '₹', format: (val) => `₹${val?.toLocaleString()}` },
    { key: 'roi', label: 'ROI', unit: '%', format: (val) => `${val}%` },
    { key: 'waterRequirement', label: 'Water Need', unit: 'mm', format: (val) => `${val}mm` },
    { key: 'growthPeriod', label: 'Growth Period', unit: 'days', format: (val) => `${val} days` },
    { key: 'laborRequirement', label: 'Labor Need', unit: 'days', format: (val) => `${val} days/ha` },
    { key: 'marketPrice', label: 'Market Price', unit: '₹', format: (val) => `₹${val}/quintal` }
  ];

  const getBestValue = (metric, crops) => {
    const values = crops?.map(crop => crop?.[metric?.key]);
    if (metric?.key === 'investment' || metric?.key === 'waterRequirement' || metric?.key === 'laborRequirement') {
      return Math.min(...values);
    }
    return Math.max(...values);
  };

  const isHighlighted = (crop, metric) => {
    const bestValue = getBestValue(metric, cropsToCompare);
    return crop?.[metric?.key] === bestValue;
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="GitCompare" size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Crop Comparison</h2>
              <p className="text-sm text-gray-600">
                Comparing {cropsToCompare?.length} selected crops
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          />
        </div>

        <div className="overflow-auto max-h-[calc(90vh-120px)]">
          <div className="p-6">
            {/* Crop Headers */}
            <div className="grid grid-cols-4 gap-6 mb-6">
              <div className="font-medium text-gray-500">Metrics</div>
              {cropsToCompare?.map((crop) => (
                <div key={crop?.id} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon name="Wheat" size={24} className="text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{crop?.name}</h3>
                  <p className="text-sm text-gray-500">{crop?.variety}</p>
                  <div className="mt-2 flex items-center justify-center space-x-1">
                    <Icon name="Hash" size={16} className="text-gray-400" />
                    <span className="text-sm font-medium text-gray-600">Rank {crop?.rank}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="space-y-4">
              {comparisonMetrics?.map((metric) => (
                <div key={metric?.key} className="grid grid-cols-4 gap-6 py-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-700">{metric?.label}</span>
                    <span className="text-xs text-gray-500">({metric?.unit})</span>
                  </div>
                  {cropsToCompare?.map((crop) => (
                    <div key={crop?.id} className="text-center">
                      <div className={`inline-flex items-center px-3 py-2 rounded-lg font-medium ${
                        isHighlighted(crop, metric)
                          ? 'bg-green-100 text-green-800 border border-green-200' :'bg-gray-50 text-gray-700'
                      }`}>
                        {isHighlighted(crop, metric) && (
                          <Icon name="Crown" size={16} className="text-green-600 mr-1" />
                        )}
                        {metric?.format(crop?.[metric?.key])}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Pros and Cons */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {cropsToCompare?.map((crop) => (
                <div key={crop?.id} className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">{crop?.name} Analysis</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="TrendingUp" size={16} className="text-green-600" />
                        <span className="text-sm font-medium text-green-700">Strengths</span>
                      </div>
                      <ul className="text-xs text-gray-600 space-y-1 ml-6">
                        {crop?.pros?.map((pro, index) => (
                          <li key={index} className="flex items-start space-x-1">
                            <span>•</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="AlertTriangle" size={16} className="text-orange-600" />
                        <span className="text-sm font-medium text-orange-700">Considerations</span>
                      </div>
                      <ul className="text-xs text-gray-600 space-y-1 ml-6">
                        {crop?.cons?.map((con, index) => (
                          <li key={index} className="flex items-start space-x-1">
                            <span>•</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendation */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20">
              <div className="flex items-start space-x-3">
                <Icon name="Lightbulb" size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Recommendation</h4>
                  <p className="text-gray-700 mb-3">
                    Based on your comparison, <strong>{cropsToCompare?.[0]?.name}</strong> shows the highest 
                    overall potential with {cropsToCompare?.[0]?.successProbability}% success rate and 
                    {cropsToCompare?.[0]?.roi}% ROI. However, consider your specific farm conditions and 
                    local market demand before making the final decision.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="default" size="sm" iconName="Download">
                      Download Report
                    </Button>
                    <Button variant="outline" size="sm" iconName="Share">
                      Share Comparison
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropComparisonModal;