import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComparisonModal = ({ isOpen, onClose, treatments, onRemoveTreatment }) => {
  if (!isOpen) return null;

  const getEffectivenessColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getSafetyColor = (rating) => {
    if (rating === 'A') return 'text-green-600';
    if (rating === 'B') return 'text-blue-600';
    if (rating === 'C') return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Icon name="GitCompare" size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Treatment Comparison</h2>
              <p className="text-sm text-gray-600">Compare {treatments?.length} treatments side by side</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            onClick={onClose}
          />
        </div>

        {/* Comparison Content */}
        <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
          {treatments?.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="GitCompare" size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No treatments selected</h3>
              <p className="text-gray-600">Select treatments from the ranking list to compare them here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700 sticky left-0 bg-white">
                      Treatment
                    </th>
                    {treatments?.map((treatment, index) => (
                      <th key={index} className="text-center py-3 px-4 min-w-[200px]">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="font-medium text-gray-900">{treatment?.name}</span>
                          <Button
                            variant="ghost"
                            size="xs"
                            iconName="X"
                            onClick={() => onRemoveTreatment(treatment?.id)}
                            className="text-gray-400 hover:text-red-500"
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{treatment?.brand}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {/* Effectiveness */}
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700 sticky left-0 bg-white">
                      Effectiveness
                    </td>
                    {treatments?.map((treatment, index) => (
                      <td key={index} className="py-3 px-4 text-center">
                        <span className={`text-lg font-bold ${getEffectivenessColor(treatment?.effectiveness)}`}>
                          {treatment?.effectiveness}%
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Safety Rating */}
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700 sticky left-0 bg-white">
                      Safety Rating
                    </td>
                    {treatments?.map((treatment, index) => (
                      <td key={index} className="py-3 px-4 text-center">
                        <span className={`text-lg font-bold ${getSafetyColor(treatment?.safetyRating)}`}>
                          Grade {treatment?.safetyRating}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Price per Hectare */}
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700 sticky left-0 bg-white">
                      Price per Hectare
                    </td>
                    {treatments?.map((treatment, index) => (
                      <td key={index} className="py-3 px-4 text-center">
                        <span className="text-lg font-bold text-gray-900">
                          ₹{treatment?.pricePerHectare}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Expected ROI */}
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700 sticky left-0 bg-white">
                      Expected ROI
                    </td>
                    {treatments?.map((treatment, index) => (
                      <td key={index} className="py-3 px-4 text-center">
                        <span className="text-lg font-bold text-green-600">
                          {treatment?.roiPercentage}%
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Environmental Impact */}
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700 sticky left-0 bg-white">
                      Environmental Impact
                    </td>
                    {treatments?.map((treatment, index) => (
                      <td key={index} className="py-3 px-4 text-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          treatment?.environmentalImpact === 'Low' ? 'bg-green-100 text-green-800' :
                          treatment?.environmentalImpact === 'Medium'? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {treatment?.environmentalImpact}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Application Method */}
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700 sticky left-0 bg-white">
                      Application Method
                    </td>
                    {treatments?.map((treatment, index) => (
                      <td key={index} className="py-3 px-4 text-center">
                        <span className="text-sm text-gray-600">
                          {treatment?.applicationMethod}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Top Regions */}
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700 sticky left-0 bg-white">
                      Best Regions
                    </td>
                    {treatments?.map((treatment, index) => (
                      <td key={index} className="py-3 px-4">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {treatment?.topRegions?.slice(0, 2)?.map((region, regionIndex) => (
                            <span
                              key={regionIndex}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700"
                            >
                              {region}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-600">
            Compare up to 4 treatments to make informed decisions
          </p>
          <Button
            variant="default"
            onClick={onClose}
          >
            Close Comparison
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;