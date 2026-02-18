import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ROICalculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    cropType: '',
    farmSize: '',
    currentYield: '',
    treatmentCost: '',
    expectedImprovement: ''
  });
  const [results, setResults] = useState(null);

  const cropOptions = [
    { value: 'mustard', label: 'Mustard' },
    { value: 'soybean', label: 'Soybean' },
    { value: 'groundnut', label: 'Groundnut' },
    { value: 'sunflower', label: 'Sunflower' },
    { value: 'sesame', label: 'Sesame' },
    { value: 'linseed', label: 'Linseed' }
  ];

  const handleInputChange = (field, value) => {
    setCalculatorData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateROI = () => {
    const farmSize = parseFloat(calculatorData?.farmSize) || 0;
    const currentYield = parseFloat(calculatorData?.currentYield) || 0;
    const treatmentCost = parseFloat(calculatorData?.treatmentCost) || 0;
    const expectedImprovement = parseFloat(calculatorData?.expectedImprovement) || 0;

    // Mock price per quintal based on crop type
    const cropPrices = {
      mustard: 4800,
      soybean: 4200,
      groundnut: 5500,
      sunflower: 5000,
      sesame: 6500,
      linseed: 5200
    };

    const pricePerQuintal = cropPrices?.[calculatorData?.cropType] || 2000;
    const totalCurrentYield = currentYield * farmSize;
    const improvedYield = totalCurrentYield * (1 + expectedImprovement / 100);
    const additionalYield = improvedYield - totalCurrentYield;
    const additionalRevenue = additionalYield * pricePerQuintal;
    const totalTreatmentCost = treatmentCost * farmSize;
    const netProfit = additionalRevenue - totalTreatmentCost;
    const roiPercentage = totalTreatmentCost > 0 ? (netProfit / totalTreatmentCost) * 100 : 0;

    setResults({
      currentRevenue: totalCurrentYield * pricePerQuintal,
      improvedRevenue: improvedYield * pricePerQuintal,
      additionalRevenue,
      totalTreatmentCost,
      netProfit,
      roiPercentage,
      paybackMonths: roiPercentage > 0 ? Math.ceil(12 / (roiPercentage / 100)) : 0
    });
  };

  const resetCalculator = () => {
    setCalculatorData({
      cropType: '',
      farmSize: '',
      currentYield: '',
      treatmentCost: '',
      expectedImprovement: ''
    });
    setResults(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-green-100 p-2 rounded-lg">
          <Icon name="Calculator" size={24} className="text-green-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">ROI Calculator</h3>
          <p className="text-sm text-gray-600">Calculate expected returns from treatment investment</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Select
          label="Crop Type"
          options={cropOptions}
          value={calculatorData?.cropType}
          onChange={(value) => handleInputChange('cropType', value)}
          placeholder="Select your crop"
        />

        <Input
          label="Farm Size (Hectares)"
          type="number"
          placeholder="Enter farm size"
          value={calculatorData?.farmSize}
          onChange={(e) => handleInputChange('farmSize', e?.target?.value)}
        />

        <Input
          label="Current Yield (Quintals/Hectare)"
          type="number"
          placeholder="Enter current yield"
          value={calculatorData?.currentYield}
          onChange={(e) => handleInputChange('currentYield', e?.target?.value)}
        />

        <Input
          label="Treatment Cost (₹/Hectare)"
          type="number"
          placeholder="Enter treatment cost"
          value={calculatorData?.treatmentCost}
          onChange={(e) => handleInputChange('treatmentCost', e?.target?.value)}
        />

        <div className="md:col-span-2">
          <Input
            label="Expected Yield Improvement (%)"
            type="number"
            placeholder="Enter expected improvement percentage"
            value={calculatorData?.expectedImprovement}
            onChange={(e) => handleInputChange('expectedImprovement', e?.target?.value)}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <Button
          variant="default"
          iconName="Calculator"
          iconPosition="left"
          onClick={calculateROI}
          disabled={!calculatorData?.cropType || !calculatorData?.farmSize || !calculatorData?.currentYield}
          className="flex-1"
        >
          Calculate ROI
        </Button>
        <Button
          variant="outline"
          iconName="RotateCcw"
          iconPosition="left"
          onClick={resetCalculator}
        >
          Reset
        </Button>
      </div>
      {results && (
        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Calculation Results</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="TrendingUp" size={16} className="text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Current Revenue</span>
              </div>
              <p className="text-2xl font-bold text-blue-900">₹{results?.currentRevenue?.toLocaleString('en-IN')}</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="ArrowUp" size={16} className="text-green-600" />
                <span className="text-sm font-medium text-green-800">Improved Revenue</span>
              </div>
              <p className="text-2xl font-bold text-green-900">₹{results?.improvedRevenue?.toLocaleString('en-IN')}</p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Plus" size={16} className="text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">Additional Revenue</span>
              </div>
              <p className="text-2xl font-bold text-yellow-900">₹{results?.additionalRevenue?.toLocaleString('en-IN')}</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Minus" size={16} className="text-red-600" />
                <span className="text-sm font-medium text-red-800">Treatment Cost</span>
              </div>
              <p className="text-2xl font-bold text-red-900">₹{results?.totalTreatmentCost?.toLocaleString('en-IN')}</p>
            </div>

            <div className={`p-4 rounded-lg ${results?.netProfit >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="DollarSign" size={16} className={results?.netProfit >= 0 ? 'text-green-600' : 'text-red-600'} />
                <span className={`text-sm font-medium ${results?.netProfit >= 0 ? 'text-green-800' : 'text-red-800'}`}>
                  Net Profit
                </span>
              </div>
              <p className={`text-2xl font-bold ${results?.netProfit >= 0 ? 'text-green-900' : 'text-red-900'}`}>
                ₹{results?.netProfit?.toLocaleString('en-IN')}
              </p>
            </div>

            <div className={`p-4 rounded-lg ${results?.roiPercentage >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Percent" size={16} className={results?.roiPercentage >= 0 ? 'text-green-600' : 'text-red-600'} />
                <span className={`text-sm font-medium ${results?.roiPercentage >= 0 ? 'text-green-800' : 'text-red-800'}`}>
                  ROI Percentage
                </span>
              </div>
              <p className={`text-2xl font-bold ${results?.roiPercentage >= 0 ? 'text-green-900' : 'text-red-900'}`}>
                {results?.roiPercentage?.toFixed(1)}%
              </p>
            </div>
          </div>

          {results?.roiPercentage > 0 && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Clock" size={16} className="text-green-600" />
                <span className="text-sm font-medium text-green-800">Investment Recovery</span>
              </div>
              <p className="text-sm text-green-700">
                Your investment will be recovered in approximately <strong>{results?.paybackMonths} months</strong> based on the calculated ROI.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ROICalculator;
