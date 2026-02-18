import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const RegionalMap = ({ selectedRegion, onRegionSelect }) => {
  const [mapView, setMapView] = useState('state'); // state, district, village

  const stateData = [
    {
      id: 'punjab',
      name: 'Punjab',
      coordinates: { x: 25, y: 15 },
      cropScore: 94,
      farmers: 1250000,
      avgYield: 4.8,
      topCrop: 'Mustard'
    },
    {
      id: 'haryana',
      name: 'Haryana',
      coordinates: { x: 28, y: 20 },
      cropScore: 91,
      farmers: 890000,
      avgYield: 4.5,
      topCrop: 'Mustard'
    },
    {
      id: 'uttar-pradesh',
      name: 'Uttar Pradesh',
      coordinates: { x: 35, y: 25 },
      cropScore: 88,
      farmers: 2340000,
      avgYield: 4.2,
      topCrop: 'Linseed'
    },
    {
      id: 'maharashtra',
      name: 'Maharashtra',
      coordinates: { x: 30, y: 45 },
      cropScore: 86,
      farmers: 1890000,
      avgYield: 3.9,
      topCrop: 'Soybean'
    },
    {
      id: 'karnataka',
      name: 'Karnataka',
      coordinates: { x: 28, y: 55 },
      cropScore: 84,
      farmers: 1120000,
      avgYield: 3.7,
      topCrop: 'Sunflower'
    },
    {
      id: 'gujarat',
      name: 'Gujarat',
      coordinates: { x: 20, y: 35 },
      cropScore: 89,
      farmers: 980000,
      avgYield: 4.1,
      topCrop: 'Groundnut'
    }
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Interactive Regional Map</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setMapView('state')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                mapView === 'state' ?'bg-primary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              State
            </button>
            <button
              onClick={() => setMapView('district')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                mapView === 'district' ?'bg-primary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              District
            </button>
            <button
              onClick={() => setMapView('village')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                mapView === 'village' ?'bg-primary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Village
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>High Performance (90+)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>Good Performance (80-89)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>Needs Improvement (&lt;80)</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="relative">
          {/* Map Container */}
          <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-gray-200 overflow-hidden">
            {/* India Map Outline */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            >
              <path
                d="M20 10 L80 10 L85 20 L80 30 L85 40 L80 50 L85 60 L75 70 L65 75 L50 80 L35 75 L25 70 L15 60 L20 50 L15 40 L20 30 L15 20 Z"
                fill="rgba(34, 197, 94, 0.1)"
                stroke="rgba(34, 197, 94, 0.3)"
                strokeWidth="0.5"
              />
            </svg>

            {/* State Markers */}
            {stateData?.map((state) => (
              <div
                key={state?.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 ${
                  selectedRegion?.id === state?.id ? 'scale-125 z-10' : ''
                }`}
                style={{
                  left: `${state?.coordinates?.x}%`,
                  top: `${state?.coordinates?.y}%`
                }}
                onClick={() => onRegionSelect(state)}
              >
                <div className={`relative group`}>
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                    state?.cropScore >= 90 ? 'bg-green-500' :
                    state?.cropScore >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                    <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                      <div className="font-semibold">{state?.name}</div>
                      <div>Score: {state?.cropScore}</div>
                      <div>Top Crop: {state?.topCrop}</div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* GPS Location Button */}
            <button className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <Icon name="MapPin" size={20} className="text-primary" />
            </button>
          </div>

          {/* Selected Region Info */}
          {selectedRegion && (
            <div className="mt-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 border border-primary/20">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-gray-900">{selectedRegion?.name}</h4>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(selectedRegion?.cropScore)}`}>
                  Score: {selectedRegion?.cropScore}
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{(selectedRegion?.farmers / 1000000)?.toFixed(1)}M</div>
                  <div className="text-sm text-gray-600">Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">{selectedRegion?.avgYield}</div>
                  <div className="text-sm text-gray-600">Avg Yield (t/ha)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{selectedRegion?.topCrop}</div>
                  <div className="text-sm text-gray-600">Top Crop</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">₹{(selectedRegion?.avgYield * 25000)?.toLocaleString('en-IN')}</div>
                  <div className="text-sm text-gray-600">Avg Income/ha</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegionalMap;
