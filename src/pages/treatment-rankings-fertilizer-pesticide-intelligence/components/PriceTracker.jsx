import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PriceTracker = () => {
  const [selectedTreatment, setSelectedTreatment] = useState('npk-19-19-19');

  const treatmentPrices = {
    'npk-19-19-19': {
      name: 'NPK 19:19:19 Complex Fertilizer',
      category: 'Fertilizer',
      currentPrice: 1250,
      priceHistory: [
        { date: '2024-01-01', price: 1180 },
        { date: '2024-02-01', price: 1200 },
        { date: '2024-03-01', price: 1220 },
        { date: '2024-04-01', price: 1240 },
        { date: '2024-05-01', price: 1250 }
      ],
      suppliers: [
        { name: 'Coromandel International', price: 1250, location: 'Delhi', rating: 4.5, stock: 'In Stock' },
        { name: 'IFFCO', price: 1240, location: 'Mumbai', rating: 4.7, stock: 'In Stock' },
        { name: 'Krishak Bharati', price: 1260, location: 'Pune', rating: 4.3, stock: 'Limited Stock' },
        { name: 'Nagarjuna Fertilizers', price: 1255, location: 'Hyderabad', rating: 4.4, stock: 'In Stock' }
      ]
    },
    'chlorpyrifos-20': {
      name: 'Chlorpyrifos 20% EC',
      category: 'Pesticide',
      currentPrice: 850,
      priceHistory: [
        { date: '2024-01-01', price: 820 },
        { date: '2024-02-01', price: 830 },
        { date: '2024-03-01', price: 840 },
        { date: '2024-04-01', price: 845 },
        { date: '2024-05-01', price: 850 }
      ],
      suppliers: [
        { name: 'Bayer CropScience', price: 850, location: 'Bangalore', rating: 4.6, stock: 'In Stock' },
        { name: 'Syngenta India', price: 845, location: 'Chennai', rating: 4.5, stock: 'In Stock' },
        { name: 'UPL Limited', price: 860, location: 'Ahmedabad', rating: 4.4, stock: 'In Stock' },
        { name: 'PI Industries', price: 855, location: 'Gurgaon', rating: 4.3, stock: 'Limited Stock' }
      ]
    },
    'propiconazole-25': {
      name: 'Propiconazole 25% EC',
      category: 'Fungicide',
      currentPrice: 1150,
      priceHistory: [
        { date: '2024-01-01', price: 1100 },
        { date: '2024-02-01', price: 1120 },
        { date: '2024-03-01', price: 1130 },
        { date: '2024-04-01', price: 1140 },
        { date: '2024-05-01', price: 1150 }
      ],
      suppliers: [
        { name: 'Dow AgroSciences', price: 1150, location: 'Mumbai', rating: 4.7, stock: 'In Stock' },
        { name: 'BASF India', price: 1145, location: 'Delhi', rating: 4.6, stock: 'In Stock' },
        { name: 'Monsanto India', price: 1160, location: 'Pune', rating: 4.5, stock: 'In Stock' },
        { name: 'Rallis India', price: 1155, location: 'Bangalore', rating: 4.4, stock: 'Limited Stock' }
      ]
    }
  };

  const treatmentOptions = Object.keys(treatmentPrices)?.map(key => ({
    value: key,
    label: treatmentPrices?.[key]?.name
  }));

  const currentTreatment = treatmentPrices?.[selectedTreatment];
  const priceChange = currentTreatment?.priceHistory?.length > 1 
    ? currentTreatment?.currentPrice - currentTreatment?.priceHistory?.[currentTreatment?.priceHistory?.length - 2]?.price
    : 0;
  const priceChangePercent = currentTreatment?.priceHistory?.length > 1
    ? ((priceChange / currentTreatment?.priceHistory?.[currentTreatment?.priceHistory?.length - 2]?.price) * 100)?.toFixed(1)
    : 0;

  const getStockStatusColor = (status) => {
    switch (status) {
      case 'In Stock': return 'text-green-600 bg-green-50';
      case 'Limited Stock': return 'text-yellow-600 bg-yellow-50';
      case 'Out of Stock': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center space-x-1">
        {Array.from({ length: fullStars }, (_, index) => (
          <Icon key={index} name="Star" size={14} className="text-yellow-400 fill-current" />
        ))}
        {hasHalfStar && <Icon name="Star" size={14} className="text-yellow-400 fill-current opacity-50" />}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-orange-100 p-2 rounded-lg">
          <Icon name="TrendingUp" size={24} className="text-orange-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Real-Time Price Tracker</h3>
          <p className="text-sm text-gray-600">Current market rates across different suppliers</p>
        </div>
      </div>
      {/* Treatment Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Treatment</label>
        <div className="flex flex-wrap gap-2">
          {treatmentOptions?.map((option) => (
            <button
              key={option?.value}
              onClick={() => setSelectedTreatment(option?.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedTreatment === option?.value
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option?.label}
            </button>
          ))}
        </div>
      </div>
      {/* Current Price Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-xl font-bold text-gray-900">{currentTreatment?.name}</h4>
            <p className="text-sm text-gray-600">{currentTreatment?.category}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-gray-900">₹{currentTreatment?.currentPrice}</div>
            <div className={`flex items-center space-x-1 text-sm ${
              priceChange >= 0 ? 'text-red-600' : 'text-green-600'
            }`}>
              <Icon name={priceChange >= 0 ? 'TrendingUp' : 'TrendingDown'} size={16} />
              <span>₹{Math.abs(priceChange)} ({Math.abs(priceChangePercent)}%)</span>
            </div>
          </div>
        </div>

        {/* Price History Chart (Simplified) */}
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Price Trend (Last 5 months)</p>
          <div className="flex items-end space-x-2 h-20">
            {currentTreatment?.priceHistory?.map((point, index) => {
              const maxPrice = Math.max(...currentTreatment?.priceHistory?.map(p => p?.price));
              const minPrice = Math.min(...currentTreatment?.priceHistory?.map(p => p?.price));
              const height = ((point?.price - minPrice) / (maxPrice - minPrice)) * 60 + 10;
              
              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="bg-blue-500 rounded-t w-full transition-all duration-300 hover:bg-blue-600"
                    style={{ height: `${height}px` }}
                    title={`₹${point?.price} - ${new Date(point.date)?.toLocaleDateString('en-IN', { month: 'short' })}`}
                  />
                  <span className="text-xs text-gray-500 mt-1">
                    {new Date(point.date)?.toLocaleDateString('en-IN', { month: 'short' })}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Supplier Comparison */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Supplier Comparison</h4>
        <div className="space-y-3">
          {currentTreatment?.suppliers?.map((supplier, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow duration-200">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-gray-900">{supplier?.name}</h5>
                  <div className="text-xl font-bold text-gray-900">₹{supplier?.price}</div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={14} />
                    <span>{supplier?.location}</span>
                  </div>
                  {renderStars(supplier?.rating)}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStockStatusColor(supplier?.stock)}`}>
                    {supplier?.stock}
                  </span>
                </div>
              </div>
              <div className="ml-4">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="right"
                  disabled={supplier?.stock === 'Out of Stock'}
                >
                  Contact
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Price Alert */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Bell" size={16} className="text-yellow-600" />
          <span className="text-sm font-medium text-yellow-800">Price Alert</span>
        </div>
        <p className="text-sm text-yellow-700">
          Set up price alerts to get notified when prices drop below your target. 
          <Button variant="link" size="sm" className="text-yellow-700 underline p-0 ml-1">
            Set Alert
          </Button>
        </p>
      </div>
    </div>
  );
};

export default PriceTracker;