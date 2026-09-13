import { useState, useMemo } from 'react'
import Icon from './Icon'

// Lucide icon mapping for better compatibility
const iconMap = {
  'hVAC': 'settings',
  'window': 'windows',
  'door': 'door-open',
  'light': 'lightbulb',
  'wall': 'share-2',
  'roof': 'home',
  'weather': 'cloud',
  'temperature': 'thermometer-high',
  'efficiency': 'check-circle',
  'cost': 'dollar-sign',
  'estimate': 'calculator',
  'recommendation': 'award'
}

/**
 * Enhanced HVAC & Glazing Calculator for Abu Dhabi
 * Comprehensive AC sizing, glass model selection, and wall system recommendation
 * Based on ASHRAE Gulf Climatic Design Conditions and Estidama requirements
 */
const EnhancedCalculator = ({ setQuoteModalOpen }) => {
  const [formData, setFormData] = useState({
    // Room Specifications
    facilityType: 'commercial',
    areaSqFt: 3500,
    ceilingHeight: 3.5,
    roomCount: 1,
    
    // Roof Specifications
    roofType: 'flat',
    roofInsulation: 'medium',
    roofColor: 'light',
    
    // Weather Conditions
    weatherCondition: 'summer-extreme',
    
    // Glass Specifications
    glassType: 'double',
    glassLowE: true,
    glassTinted: true,
    glassWarmEdge: true,
    
    // Additional Factors
    occupancy: 'medium',
    equipmentHeat: false,
    internalHeatGain: 'moderate',
    ventilationRate: 'standard'
  })

  // Abu Dhabi Climate Constants
  const climateConstants = {
    summerDesignTemp: 50, // °C
    winterDesignTemp: 17, // °C
    humidityRatio: 0.28,
    solarHeatGain: 850, // W/m² for Abu Dhabi
    windPressure: 1.8 // kPa
  }

  // Glass Model Database with specifications
  const glassModels = {
    'single': { uValue: 5.8, solarGain: 0.7, cost: 'low', lifespan: 15 },
    'double': { uValue: 3.0, solarGain: 0.35, cost: 'medium', lifespan: 20 },
    'triple': { uValue: 1.8, solarGain: 0.20, cost: 'high', lifespan: 25 },
    'low-e-double': { uValue: 2.5, solarGain: 0.25, cost: 'premium', lifespan: 25 },
    'tinted-triple': { uValue: 1.5, solarGain: 0.15, cost: 'luxury', lifespan: 30 }
  }

  // Wall System Types
  const wallSystems = {
    'external-wall': { 
      rValue: 2.5, 
      cost: 'medium', 
      acousticRating: 'medium',
      fireRating: 'standard',
      description: 'External insulated wall system with cladding' 
    },
    'external-insulated': { 
      rValue: 3.5, 
      cost: 'high', 
      acousticRating: 'high',
      fireRating: 'enhanced',
      description: 'Insulated sandwich panel system' 
    },
    'thermal-break': { 
      rValue: 3.0, 
      cost: 'premium', 
      acousticRating: 'very-high',
      fireRating: 'premium',
      description: 'Thermal break aluminum system with insulation' 
    }
  }

  // AC Type Recommendations based on tonnage and climate
  const getACRecommendation = (tons) => {
    if (tons < 5) {
      return {
        type: 'Packaged Unit',
        models: ['DAIKIN FTXS-...K', 'PANASONIC CS-A4YK'],
        capacityRange: '1.5-3.5 TR',
        efficiency: '3.5-4.0 EER',
        suitableFor: 'Small villas, apartments'
      }
    } else if (tons < 20) {
      return {
        type: 'VRF Multi-Split',
        models: ['DAIKIN VRTX-...K', 'MITSUBISHI ZUBACOLD'],
        capacityRange: '5-18 TR',
        efficiency: '4.0-4.5 EER',
        suitableFor: 'Commercial towers, offices'
      }
    } else if (tons < 50) {
      return {
        type: 'Chilled Water System',
        models: ['CARRIER CHC-...TR', 'GIELLINGER CHW-...'],
        capacityRange: '20-45 TR',
        efficiency: '5.5-6.5 EER',
        suitableFor: 'Large commercial, district cooling'
      }
    } else {
      return {
        type: 'District ETS/Plant Room',
        models: ['LIQUICOOL-...TR', 'THERMAWAVE-...'],
        capacityRange: '45-100+ TR',
        efficiency: '6.5-7.5 EER',
        suitableFor: 'Industrial plants, large complexes'
      }
    }
  }

  // Main calculation logic
  const results = useMemo(() => {
    const {
      areaSqFt, ceilingHeight, roomCount,
      roofType, roofInsulation, roofColor,
      weatherCondition, glassType, glassLowE, glassTinted,
      occupancy, equipmentHeat, internalHeatGain
    } = formData

    // Calculate base load based on Abu Dhabi extreme summer conditions
    let baseLoad = areaSqFt * 65 // BTU per sq.ft (Abu Dhabi adjusted)
    
    // Adjust for ceiling height
    const heightMultiplier = ceilingHeight > 3 ? (ceilingHeight / 3) * 1.1 : 1
    baseLoad *= heightMultiplier
    
    // Adjust for weather conditions
    const weatherMultipliers = {
      'summer-extreme': 1.3,
      'summer-normal': 1.15,
      'winter-comfort': 0.85,
      'monsoon': 1.25
    }
    const weatherMultiplier = weatherMultipliers[weatherCondition] || 1.0
    baseLoad *= weatherMultiplier
    
    // Adjust for roof insulation
    const roofInsulationMultipliers = {
      'poor': 1.3,
      'medium': 1.1,
      'excellent': 0.9,
      'estidama-premium': 0.8
    }
    const roofInsMultiplier = roofInsulationMultipliers[roofInsulation] || 1.0
    baseLoad *= roofInsMultiplier
    
    // Adjust for roof color
    const roofColorMultipliers = {
      'dark': 1.2,
      'medium': 1.0,
      'light': 0.8
    }
    const roofColorMultiplier = roofColorMultipliers[roofColor] || 1.0
    baseLoad *= roofColorMultiplier
    
    // Adjust for glass type
    const glassKey = glassLowE && glassTinted ? 'low-e-double' : 
                    glassTinted ? 'tinted-triple' : glassType
    const glassSpec = glassModels[glassKey] || glassModels['double']
    const glassMultiplier = 1 + (glassSpec.solarGain * 0.5)
    baseLoad *= glassMultiplier
    
    // Adjust for occupancy
    const occupancyMultipliers = {
      'low': 0.9,
      'medium': 1.0,
      'high': 1.2
    }
    const occupancyMultiplier = occupancyMultipliers[occupancy] || 1.0
    baseLoad *= occupancyMultiplier
    
    // Adjust for equipment heat
    if (equipmentHeat) baseLoad *= 1.15
    
    // Adjust for internal heat gain
    const internalHeatMultipliers = {
      'low': 0.9,
      'moderate': 1.0,
      'high': 1.2,
      'very-high': 1.4
    }
    const internalHeatMultiplier = internalHeatMultipliers[internalHeatGain] || 1.0
    baseLoad *= internalHeatMultiplier
    
    // Adjust for multiple rooms
    const roomCountMultiplier = Math.sqrt(roomCount)
    baseLoad *= roomCountMultiplier

    // Calculate final values
    const totalBTU = Math.round(baseLoad * roomCount)
    const tons = (totalBTU / 12000).toFixed(1)
    const estKW = (Number(tons) * 3.517).toFixed(1)
    const acType = getACRecommendation(Number(tons))
    const selectedGlass = glassModels[glassKey] || glassModels['double']

    // Determine appropriate wall system
    let wallSystem = 'external-wall'
    if (Number(tons) > 30) {
      wallSystem = 'external-insulated'
    } else if (Number(tons) > 10 || glassType === 'triple') {
      wallSystem = 'thermal-break'
    }

    return {
      totalBTU: totalBTU.toLocaleString(),
      tons: tons,
      estKW: estKW,
      selectedGlass,
      selectedWall: wallSystems[wallSystem],
      acRecommendation: acType,
      efficiencyClass: Number(tons) > 30 ? 'Premium' : 'Standard',
      estidamaReady: Number(tons) > 20 || glassLowE,
      estimatedCost: {
        glass: selectedGlass.cost,
        wall: wallSystems[wallSystem].cost,
        installation: 'Standard',
        estimatedTotal: `$${(Number(tons) * 12000).toLocaleString()} - $${(Number(tons) * 18000).toLocaleString()} ($${(Number(tons) * 1200).toLocaleString()}-${(Number(tons) * 1800).toLocaleString()} per ton)`
      }
    }
  }, [formData])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section
      id="enhanced-calculator"
      className="py-20 relative z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
            <Icon name="calculator" size={14} />
            Abu Dhabi HVAC & Glazing Solution Designer
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Professional AC & Glass Specification Tool
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Calculate precise cooling requirements and select optimal glass and wall systems for Abu Dhabi extreme climate conditions using ASHRAE Gulf standards and Estidama certification requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="xl:col-span-1 space-y-6">
            <div className="glass-card rounded-2xl p-6 border-brand-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Icon name="home" size={20} className="text-brand-400" />
                Room Specifications
              </h3>
              
              <div className="space-y-4">
                {/* Facility Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Facility Type</label>
                  <select
                    value={formData.facilityType}
                    onChange={(e) => handleInputChange('facilityType', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-400"
                  >
                    <option value="residential">Luxury Villa / Penthouse</option>
                    <option value="commercial">Commercial Tower / Office</option>
                    <option value="industrial">Industrial Factory / Warehouse</option>
                  </select>
                </div>

                {/* Area */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-300">Total Area (sq.ft)</label>
                    <span className="text-xs font-mono text-brand-400">{formData.areaSqFt.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="250"
                    value={formData.areaSqFt}
                    onChange={(e) => handleInputChange('areaSqFt', Number(e.target.value))}
                    className="w-full accent-brand-400"
                  />
                </div>

                {/* Ceiling Height */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-300">Ceiling Height (meters)</label>
                    <span className="text-xs font-mono text-brand-400">{formData.ceilingHeight}</span>
                  </div>
                  <input
                    type="range"
                    min="2.5"
                    max="8.0"
                    step="0.1"
                    value={formData.ceilingHeight}
                    onChange={(e) => handleInputChange('ceilingHeight', Number(e.target.value))}
                    className="w-full accent-brand-400"
                  />
                </div>

                {/* Room Count */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Number of Rooms</label>
                  <select
                    value={formData.roomCount}
                    onChange={(e) => handleInputChange('roomCount', Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-400"
                  >
                    <option value="1">Single Room</option>
                    <option value="2">2 Rooms</option>
                    <option value="4">4 Rooms</option>
                    <option value="8">8 Rooms</option>
                    <option value="16">16+ Rooms</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Roof Specifications */}
            <div className="glass-card rounded-2xl p-6 border-brand-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Icon name="home" size={20} className="text-cyan-400" />
                Roof System
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Roof Type</label>
                  <select
                    value={formData.roofType}
                    onChange={(e) => handleInputChange('roofType', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="flat">Flat Roof (Most Common)</option>
                    <option value="pitched">Pitched Roof</option>
                    <option value="green">Green Roof</option>
                    <option value="metal">Metal Roofing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Insulation Level</label>
                  <select
                    value={formData.roofInsulation}
                    onChange={(e) => handleInputChange('roofInsulation', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="poor">Poor (Standard Insulation)</option>
                    <option value="medium">Medium (Estidama Standard)</option>
                    <option value="excellent">Excellent (Premium)</option>
                    <option value="estidama-premium">Estidama Premium</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Roof Color</label>
                  <select
                    value={formData.roofColor}
                    onChange={(e) => handleInputChange('roofColor', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="dark">Dark (High Heat Gain)</option>
                    <option value="medium">Medium (Balanced)</option>
                    <option value="light">Light (Cool Roof)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Glass Selection */}
            <div className="glass-card rounded-2xl p-6 border-brand-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Icon name="grid" size={20} className="text-purple-400" />
                Glass System
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Glass Type</label>
                  <select
                    value={formData.glassType}
                    onChange={(e) => handleInputChange('glassType', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="double">Double Glazed (Standard)</option>
                    <option value="triple">Triple Glazed (High Performance)</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.glassLowE}
                      onChange={(e) => handleInputChange('glassLowE', e.target.checked)}
                      className="w-4 h-4 bg-slate-900 border-slate-600 rounded focus:ring-brand-400"
                    />
                    <span className="text-sm text-slate-300">Low-E Coating (UV Protection)</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.glassTinted}
                      onChange={(e) => handleInputChange('glassTinted', e.target.checked)}
                      className="w-4 h-4 bg-slate-900 border-slate-600 rounded focus:ring-brand-400"
                    />
                    <span className="text-sm text-slate-300">Tinted Glass (Heat Rejection)</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.glassWarmEdge}
                      onChange={(e) => handleInputChange('glassWarmEdge', e.target.checked)}
                      className="w-4 h-4 bg-slate-900 border-slate-600 rounded focus:ring-brand-400"
                    />
                    <span className="text-sm text-slate-300">Warm Edge Technology</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Weather & Occupancy */}
            <div className="glass-card rounded-2xl p-6 border-brand-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Icon name="cloud" size={20} className="text-orange-400" />
                Climate & Occupancy
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Weather Condition</label>
                  <select
                    value={formData.weatherCondition}
                    onChange={(e) => handleInputChange('weatherCondition', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-orange-400"
                  >
                    <option value="summer-extreme">Summer Extreme (50°C+)</option>
                    <option value="summer-normal">Summer Normal (45°C)</option>
                    <option value="winter-comfort">Winter Comfort (17°C)</option>
                    <option value="monsoon">Monsoon/Humidity (45°C+70%RH)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Occupancy Level</label>
                  <select
                    value={formData.occupancy}
                    onChange={(e) => handleInputChange('occupancy', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-orange-400"
                  >
                    <option value="low">Low (2-3 persons)</option>
                    <option value="medium">Medium (5-10 persons)</option>
                    <option value="high">High (15+ persons)</option>
                  </select>
                </div>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={formData.equipmentHeat}
                    onChange={(e) => handleInputChange('equipmentHeat', e.target.checked)}
                    className="w-4 h-4 bg-slate-900 border-slate-600 rounded focus:ring-brand-400"
                  />
                  <span className="text-sm text-slate-300">Heat-generating Equipment Present</span>
                </label>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="xl:col-span-2 space-y-6">
            {/* Main Results */}
            <div className="glass-card rounded-2xl p-8 border-brand-500/30 bg-gradient-to-br from-slate-950 to-slate-900">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mb-2">Required Cooling</p>
                  <p className="text-4xl font-extrabold text-brand-400 font-mono">
                    {results.tons} <span className="text-xl text-slate-300">TR</span>
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">Tons of Refrigeration</p>
                </div>

                <div className="text-center border-t md:border-t-0 md:border-r border-slate-800 pt-6 md:pt-0 md:pr-6">
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mb-2">Mechanical Capacity</p>
                  <p className="text-4xl font-extrabold text-cyan-300 font-mono">
                    {results.estKW} <span className="text-xl text-slate-300">kW</span>
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">Peak Load at 50°C</p>
                </div>

                <div className="text-center border-t md:border-t-0 md:border-r border-slate-800 pt-6 md:pr-6">
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mb-2">Total BTU/Hour</p>
                  <p className="text-3xl font-extrabold text-white font-mono">
                    {results.totalBTU}
                  </p>
                  <p className="text-[10px] text-emerald-400 mt-1">
                    Abu Dhabi {climateConstants.summerDesignTemp}°C Design Conditions
                  </p>
                </div>
              </div>

              {/* AC Recommendation */}
              <div className="bg-slate-950/50 rounded-xl p-6 mb-6 border border-slate-800">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Icon name="cpu" size={18} className="text-green-400" />
                  Recommended AC System & Models
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-400 font-semibold mb-1">System Type</p>
                    <p className="text-base font-bold text-green-300">{results.acRecommendation.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold mb-1">Capacity Range</p>
                    <p className="text-base font-bold text-green-300">{results.acRecommendation.capacityRange}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-slate-400 font-semibold mb-2">Recommended Models</p>
                    <div className="flex flex-wrap gap-2">
                      {results.acRecommendation.models.map((model, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-xs font-mono text-brand-300">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-slate-400 font-semibold mb-1">Suitable For</p>
                    <p className="text-sm text-slate-300">{results.acRecommendation.suitableFor}</p>
                  </div>
                </div>
              </div>

              {/* Glass & Wall Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Glass System */}
                <div className="bg-slate-950/50 rounded-xl p-5 border border-slate-800">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Icon name="grid" size={16} className="text-purple-400" />
                    Glass System Selected
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">Type:</span>
                      <span className="text-sm font-semibold text-white">{Object.keys(glassModels).find(k => glassModels[k].uValue === results.selectedGlass.uValue)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">U-Value:</span>
                      <span className="text-sm font-semibold text-brand-300">{results.selectedGlass.uValue} W/m²K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">Solar Gain:</span>
                      <span className="text-sm font-semibold text-brand-300">{results.selectedGlass.solarGain}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">Cost Class:</span>
                      <span className="text-sm font-semibold text-purple-300">{results.selectedGlass.cost}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">Lifespan:</span>
                      <span className="text-sm font-semibold text-purple-300">{results.selectedGlass.lifespan} years</span>
                    </div>
                  </div>
                </div>

                {/* Wall System */}
                <div className="bg-slate-950/50 rounded-xl p-5 border border-slate-800">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Icon name="layers" size={16} className="text-orange-400" />
                    Wall System
                  </h4>
                  <div className="space-y-3">
                    <p className="text-xs text-slate-300">{results.selectedWall.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">R-Value:</span>
                      <span className="text-sm font-semibold text-brand-300">{results.selectedWall.rValue}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">Acoustic Rating:</span>
                      <span className="text-sm font-semibold text-orange-300">{results.selectedWall.acousticRating}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">Fire Rating:</span>
                      <span className="text-sm font-semibold text-orange-300">{results.selectedWall.fireRating}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">Cost Class:</span>
                      <span className="text-sm font-semibold text-orange-300">{results.selectedWall.cost}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Efficiency & Estidama Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
                  Efficiency Class: {results.efficiencyClass}
                </div>
                {results.estidamaReady && (
                  <div className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold">
                    ✅ Estidama Pearl Certified Ready
                  </div>
                )}
                <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                  Abu Dhabi Optimized
                </div>
              </div>

              {/* Cost Estimate */}
              <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-xl p-5 border border-brand-500/30">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Icon name="dollar-sign" size={16} className="text-emerald-400" />
                  Estimated Cost Breakdown
                </h4>
                <p className="text-sm text-slate-300 font-mono leading-relaxed">
                  {results.estimatedCost.estimatedTotal}
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Glass: {results.estimatedCost.glass} | Wall: {results.estimatedCost.wall} | Installation: {results.estimatedCost.installation}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-300 text-center sm:text-left">
                  <span className="font-bold text-white">Professional Engineering Review:</span> Share this specification with our Abu Dhabi engineers for detailed load calculations and permit compliance.
                </div>
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-400 text-slate-950 text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-brand-500/30"
                >
                  📋 Request Engineering Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnhancedCalculator