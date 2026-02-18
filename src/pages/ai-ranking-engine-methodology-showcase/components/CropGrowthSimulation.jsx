import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CropGrowthSimulation = () => {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [selectedCrop, setSelectedCrop] = useState('mustard');
  const [selectedTreatment, setSelectedTreatment] = useState('optimal');
  const [showComparison, setShowComparison] = useState(false);
  const animationRef = useRef(null);

  const crops = [
    { id: 'mustard', name: 'Mustard', color: '#E8C547', maxHeight: 60 },
    { id: 'soybean', name: 'Soybean', color: '#7CB342', maxHeight: 65 },
    { id: 'groundnut', name: 'Groundnut', color: '#D4A574', maxHeight: 40 },
    { id: 'sunflower', name: 'Sunflower', color: '#FDB913', maxHeight: 85 },
    { id: 'sesame', name: 'Sesame', color: '#C19A6B', maxHeight: 55 },
    { id: 'linseed', name: 'Linseed', color: '#8B7355', maxHeight: 45 }
  ];

  const treatments = [
    {
      id: 'optimal',
      name: 'Optimal Treatment',
      description: 'Fertilizer + Insecticide + Pesticide',
      growthMultiplier: 1.0,
      healthMultiplier: 1.0,
      color: '#4CAF50'
    },
    {
      id: 'fertilizer_only',
      name: 'Fertilizer Only',
      description: 'No pest management',
      growthMultiplier: 0.85,
      healthMultiplier: 0.65,
      color: '#8BC34A'
    },
    {
      id: 'no_treatment',
      name: 'No Treatment',
      description: 'Control group',
      growthMultiplier: 0.55,
      healthMultiplier: 0.40,
      color: '#FF6B6B'
    },
    {
      id: 'pesticide_only',
      name: 'Pesticide Only',
      description: 'No nutrients',
      growthMultiplier: 0.70,
      healthMultiplier: 0.85,
      color: '#FFC107'
    }
  ];

  const getCropData = (cropId, treatmentId, progress) => {
    const crop = crops.find(c => c.id === cropId);
    const treatment = treatments.find(t => t.id === treatmentId);
    
    const baseGrowth = (progress / 100) * crop.maxHeight;
    const adjustedHeight = baseGrowth * treatment.growthMultiplier;
    const health = Math.min(100, (progress * treatment.healthMultiplier));
    
    return { crop, treatment, height: adjustedHeight, health };
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setTimeProgress(prev => {
        if (prev >= 100) {
          setIsPlaying(false);
          return 100;
        }
        return prev + (0.5 * speed);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, width, height);

    // Draw soil
    ctx.fillStyle = '#8B7355';
    ctx.fillRect(0, height - 30, width, 30);

    // Draw grid
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) {
      const x = (i / 10) * width;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height - 30);
      ctx.stroke();
    }

    if (showComparison) {
      // Draw comparison of all treatments
      const treatmentsToShow = treatments;
      const spaceBetween = width / (treatmentsToShow.length + 1);

      treatmentsToShow.forEach((treatment, idx) => {
        const xPos = spaceBetween * (idx + 1);
        const data = getCropData(selectedCrop, treatment.id, timeProgress);

        // Draw plant
        drawPlant(ctx, xPos, height - 30, data.height, data.crop.color, data.health);

        // Draw label
        ctx.fillStyle = '#333';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(treatment.name, xPos, height - 5);

        // Draw health indicator
        ctx.fillStyle = treatment.color;
        ctx.fillRect(xPos - 20, 10, 40, 8);
        ctx.fillStyle = '#fff';
        ctx.font = '10px Arial';
        ctx.fillText(`${Math.round(data.health)}%`, xPos, 16);
      });
    } else {
      // Draw single crop with selected treatment
      const xPos = width / 2;
      const data = getCropData(selectedCrop, selectedTreatment, timeProgress);

      // Draw large plant
      drawPlant(ctx, xPos, height - 30, data.height * 1.5, data.crop.color, data.health);

      // Draw info panel
      const panelX = 20;
      const panelY = 20;
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.fillRect(panelX, panelY, 200, 120);
      ctx.strokeStyle = data.treatment.color;
      ctx.lineWidth = 2;
      ctx.strokeRect(panelX, panelY, 200, 120);

      ctx.fillStyle = '#333';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(data.crop.name, panelX + 10, panelY + 25);
      
      ctx.font = '12px Arial';
      ctx.fillStyle = '#666';
      ctx.fillText(`Treatment: ${data.treatment.name}`, panelX + 10, panelY + 45);
      ctx.fillText(`Day: ${Math.round((timeProgress / 100) * 150)}`, panelX + 10, panelY + 65);
      ctx.fillText(`Health: ${Math.round(data.health)}%`, panelX + 10, panelY + 85);
      ctx.fillText(`Height: ${Math.round(data.height * 10) / 10}cm`, panelX + 10, panelY + 105);
    }

    // Draw timeline at bottom
    const timelineY = height - 40;
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(40, timelineY);
    ctx.lineTo(width - 40, timelineY);
    ctx.stroke();

    // Draw progress indicator
    const progressX = 40 + ((timeProgress / 100) * (width - 80));
    ctx.fillStyle = '#4CAF50';
    ctx.beginPath();
    ctx.arc(progressX, timelineY, 6, 0, Math.PI * 2);
    ctx.fill();

    // Draw timeline labels
    ctx.fillStyle = '#999';
    ctx.font = '11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('0 days', 40, timelineY + 20);
    ctx.fillText('150 days', width - 40, timelineY + 20);

  }, [timeProgress, selectedCrop, selectedTreatment, showComparison]);

  const drawPlant = (ctx, x, groundY, height, color, health) => {
    const healthFactor = health / 100;

    // Stem
    ctx.strokeStyle = color;
    ctx.lineWidth = 3 + (healthFactor * 2);
    ctx.beginPath();
    ctx.moveTo(x, groundY);
    ctx.lineTo(x, groundY - height);
    ctx.stroke();

    // Leaves
    const leafCount = Math.round(4 + (height / 20));
    for (let i = 0; i < leafCount; i++) {
      const leafY = groundY - (height * (i / leafCount));
      const leafLength = 8 + (healthFactor * 8);
      const side = i % 2 === 0 ? 1 : -1;

      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.globalAlpha = healthFactor;
      ctx.beginPath();
      ctx.moveTo(x, leafY);
      ctx.lineTo(x + (leafLength * side), leafY - 4);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // Flower/head at top
    if (height > 20) {
      ctx.fillStyle = color;
      ctx.globalAlpha = healthFactor;
      ctx.beginPath();
      ctx.arc(x, groundY - height - 5, 5 + (healthFactor * 3), 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    // Health glow
    if (healthFactor > 0.7) {
      ctx.strokeStyle = `rgba(76, 175, 80, ${healthFactor * 0.3})`;
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.arc(x, groundY - height / 2, height * 0.6, 0, Math.PI * 2);
      ctx.stroke();
    } else if (healthFactor < 0.4) {
      ctx.strokeStyle = `rgba(255, 107, 107, ${(1 - healthFactor) * 0.3})`;
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.arc(x, groundY - height / 2, height * 0.6, 0, Math.PI * 2);
      ctx.stroke();
    }
  };

  const handleReset = () => {
    setTimeProgress(0);
    setIsPlaying(false);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Crop Growth Simulation</h2>
          <p className="text-xl text-gray-600">
            Visualize how different treatments affect crop health and yield over time
          </p>
        </div>

        {/* Canvas */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <canvas
            ref={canvasRef}
            width={900}
            height={400}
            className="w-full border-2 border-gray-200 rounded-lg"
          />
        </div>

        {/* Controls */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Crop Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Select Crop</label>
            <div className="space-y-2">
              {crops.map(crop => (
                <button
                  key={crop.id}
                  onClick={() => {
                    setSelectedCrop(crop.id);
                    handleReset();
                  }}
                  className={`w-full px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCrop === crop.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {crop.name}
                </button>
              ))}
            </div>
          </div>

          {/* Treatment Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Treatment Type</label>
            <div className="space-y-2">
              {!showComparison && treatments.map(treatment => (
                <button
                  key={treatment.id}
                  onClick={() => {
                    setSelectedTreatment(treatment.id);
                    handleReset();
                  }}
                  className={`w-full px-4 py-2 rounded-lg font-medium transition-all text-left ${
                    selectedTreatment === treatment.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{treatment.name}</span>
                    <span 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: treatment.color }}
                    />
                  </div>
                </button>
              ))}
              {showComparison && (
                <div className="bg-primary text-white px-4 py-2 rounded-lg font-medium">
                  Comparing All Treatments
                </div>
              )}
            </div>
          </div>

          {/* Simulation Controls */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Controls</label>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Button
                  variant={isPlaying ? 'secondary' : 'default'}
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  iconName={isPlaying ? 'Pause' : 'Play'}
                  iconPosition="left"
                  className="flex-1"
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  iconName="RotateCcw"
                  iconPosition="left"
                  className="flex-1"
                >
                  Reset
                </Button>
              </div>

              <div>
                <label className="text-xs text-gray-600">Speed: {speed}x</label>
                <input
                  type="range"
                  min="0.5"
                  max="3"
                  step="0.5"
                  value={speed}
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <Button
                variant={showComparison ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setShowComparison(!showComparison);
                  handleReset();
                }}
                iconName="Columns2"
                iconPosition="left"
                className="w-full"
              >
                {showComparison ? 'Hide' : 'Show'} Comparison
              </Button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-4">
          {treatments.map(treatment => {
            const data = getCropData(selectedCrop, treatment.id, timeProgress);
            return (
              <div key={treatment.id} className="bg-white rounded-lg p-4 border-2" style={{ borderColor: treatment.color }}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{treatment.name}</h4>
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: treatment.color }}
                  />
                </div>
                <p className="text-sm text-gray-600 mb-3">{treatment.description}</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Growth:</span>
                    <span className="font-semibold">{Math.round(treatment.growthMultiplier * 100)}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Health:</span>
                    <span className="font-semibold">{Math.round(data.health)}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CropGrowthSimulation;
