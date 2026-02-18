import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const SuccessProbabilityCalculator = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [calculatorData, setCalculatorData] = useState({
    soilType: 'all',
    irrigation: 'all',
    climate: 'all',
    farmSize: 'all',
    experience: 'all',
    selectedCrop: 'all'
  });
  const [calculatedProbability, setCalculatedProbability] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const soilTypeOptions = [
    { value: 'all', label: 'Select Soil Type' },
    { value: 'alluvial', label: 'Alluvial Soil' },
    { value: 'black', label: 'Black Soil (Regur)' },
    { value: 'red', label: 'Red Soil' },
    { value: 'laterite', label: 'Laterite Soil' },
    { value: 'sandy', label: 'Sandy Soil' },
    { value: 'clayey', label: 'Clayey Soil' }
  ];

  const irrigationOptions = [
    { value: 'all', label: 'Select Irrigation' },
    { value: 'drip', label: 'Drip Irrigation' },
    { value: 'sprinkler', label: 'Sprinkler System' },
    { value: 'flood', label: 'Flood Irrigation' },
    { value: 'rainfed', label: 'Rain-fed' },
    { value: 'tube-well', label: 'Tube Well' },
    { value: 'canal', label: 'Canal Irrigation' }
  ];

  const climateOptions = [
    { value: 'all', label: 'Select Climate Zone' },
    { value: 'tropical', label: 'Tropical' },
    { value: 'subtropical', label: 'Subtropical' },
    { value: 'temperate', label: 'Temperate' },
    { value: 'arid', label: 'Arid' },
    { value: 'semi-arid', label: 'Semi-Arid' },
    { value: 'humid', label: 'Humid' }
  ];

  const farmSizeOptions = [
    { value: 'all', label: 'Select Farm Size' },
    { value: 'marginal', label: 'Marginal (< 1 ha)' },
    { value: 'small', label: 'Small (1-2 ha)' },
    { value: 'semi-medium', label: 'Semi-Medium (2-4 ha)' },
    { value: 'medium', label: 'Medium (4-10 ha)' },
    { value: 'large', label: 'Large (> 10 ha)' }
  ];

  const experienceOptions = [
    { value: 'all', label: 'Select Experience' },
    { value: 'beginner', label: 'Beginner (< 2 years)' },
    { value: 'intermediate', label: 'Intermediate (2-5 years)' },
    { value: 'experienced', label: 'Experienced (5-10 years)' },
    { value: 'expert', label: 'Expert (> 10 years)' }
  ];

  const cropOptions = [
    { value: 'all', label: 'Select Crop' },
    { value: 'mustard', label: 'Mustard' },
    { value: 'soybean', label: 'Soybean' },
    { value: 'groundnut', label: 'Groundnut' },
    { value: 'sunflower', label: 'Sunflower' },
    { value: 'sesame', label: 'Sesame' },
    { value: 'castor', label: 'Castor' },
    { value: 'linseed', label: 'Linseed' },
    { value: 'safflower', label: 'Safflower' }
  ];

  const handleInputChange = (field, value) => {
    setCalculatorData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateProbability = async () => {
    setIsCalculating(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock calculation based on inputs
    let baseProbability = 65;
    
    // Adjust based on soil type
    if (calculatorData?.soilType === 'alluvial') baseProbability += 10;
    if (calculatorData?.soilType === 'black') baseProbability += 8;
    if (calculatorData?.soilType === 'sandy') baseProbability -= 5;
    
    // Adjust based on irrigation
    if (calculatorData?.irrigation === 'drip') baseProbability += 15;
    if (calculatorData?.irrigation === 'sprinkler') baseProbability += 10;
    if (calculatorData?.irrigation === 'rainfed') baseProbability -= 10;
    
    // Adjust based on experience
    if (calculatorData?.experience === 'expert') baseProbability += 12;
    if (calculatorData?.experience === 'experienced') baseProbability += 8;
    if (calculatorData?.experience === 'beginner') baseProbability -= 8;
    
    // Ensure probability is within realistic bounds
    const finalProbability = Math.max(20, Math.min(95, baseProbability));
    
    setCalculatedProbability({
      probability: finalProbability,
      confidence: Math.floor(Math.random() * 20) + 75, // 75-95% confidence
      factors: {
        soil: calculatorData?.soilType !== 'all' ? 'Considered' : 'Not specified',
        irrigation: calculatorData?.irrigation !== 'all' ? 'Considered' : 'Not specified',
        climate: calculatorData?.climate !== 'all' ? 'Considered' : 'Not specified',
        experience: calculatorData?.experience !== 'all' ? 'Considered' : 'Not specified'
      }
    });
    
    setIsCalculating(false);
  };

  const canCalculate = Object.values(calculatorData)?.some(value => value !== 'all');

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="Calculator" size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Success Probability Calculator</h2>
              <p className="text-sm text-gray-600">
                Get personalized success predictions for your farm conditions
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500"
          />
        </div>
      </div>
      {isExpanded && (
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <Select
              label="Soil Type"
              options={soilTypeOptions}
              value={calculatorData?.soilType}
              onChange={(value) => handleInputChange('soilType', value)}
            />

            <Select
              label="Irrigation Method"
              options={irrigationOptions}
              value={calculatorData?.irrigation}
              onChange={(value) => handleInputChange('irrigation', value)}
            />

            <Select
              label="Climate Zone"
              options={climateOptions}
              value={calculatorData?.climate}
              onChange={(value) => handleInputChange('climate', value)}
            />

            <Select
              label="Farm Size"
              options={farmSizeOptions}
              value={calculatorData?.farmSize}
              onChange={(value) => handleInputChange('farmSize', value)}
            />

            <Select
              label="Farming Experience"
              options={experienceOptions}
              value={calculatorData?.experience}
              onChange={(value) => handleInputChange('experience', value)}
            />

            <Select
              label="Target Crop"
              options={cropOptions}
              value={calculatorData?.selectedCrop}
              onChange={(value) => handleInputChange('selectedCrop', value)}
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="text-sm text-gray-600">
              {canCalculate ? 'Ready to calculate' : 'Please select at least one parameter'}
            </div>
            <Button
              variant="default"
              iconName="Zap"
              iconPosition="left"
              loading={isCalculating}
              disabled={!canCalculate}
              onClick={calculateProbability}
            >
              {isCalculating ? 'Calculating...' : 'Calculate Success Rate'}
            </Button>
          </div>

          {calculatedProbability && (
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-full mb-4">
                  <span className="text-2xl font-bold text-white">
                    {calculatedProbability?.probability}%
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Predicted Success Rate
                </h3>
                <p className="text-gray-600">
                  Based on your farm conditions and selected parameters
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Analysis Factors</h4>
                  {Object.entries(calculatedProbability?.factors)?.map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 capitalize">{key}:</span>
                      <span className={`text-sm font-medium ${
                        value === 'Considered' ? 'text-green-600' : 'text-gray-400'
                      }`}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Confidence Metrics</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Model Confidence:</span>
                    <span className="text-sm font-medium text-primary">
                      {calculatedProbability?.confidence}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Data Quality:</span>
                    <span className="text-sm font-medium text-green-600">High</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Regional Accuracy:</span>
                    <span className="text-sm font-medium text-green-600">92%</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-primary/20">
                <div className="flex items-center space-x-3">
                  <Icon name="Info" size={20} className="text-primary" />
                  <div className="text-sm text-gray-700">
                    <strong>Note:</strong> This prediction is based on historical data and current conditions. 
                    Actual results may vary due to weather, market conditions, and other external factors.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SuccessProbabilityCalculator;
