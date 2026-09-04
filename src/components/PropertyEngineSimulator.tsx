import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Layers, 
  Calculator, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Sliders, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Scale
} from 'lucide-react';
import { PropertyEngineInput, PropertyEngineOutput } from '../types';

interface PresetMarket {
  name: string;
  location: string;
  defaultPlotSqYd: number;
  landBenchmarkLakh: number;
  productTier: 'Premium' | 'Luxury' | 'Ultra-Luxury';
  salePricePerSqFt: number;
  constructionCostPerSqFt: number;
  interiorCostPerSqFt: number;
  defaultArvaneFloors: number;
}

const PRESET_MARKETS: PresetMarket[] = [
  {
    name: 'DLF Phase 1, Gurgaon',
    location: 'Prime Gurgaon Core',
    defaultPlotSqYd: 500,
    landBenchmarkLakh: 4.5,
    productTier: 'Ultra-Luxury',
    salePricePerSqFt: 22000,
    constructionCostPerSqFt: 2800,
    interiorCostPerSqFt: 1650,
    defaultArvaneFloors: 1, // 3:1 split
  },
  {
    name: 'Gurgaon Sector 57',
    location: 'Golf Course Extension Corridor',
    defaultPlotSqYd: 250,
    landBenchmarkLakh: 2.8,
    productTier: 'Luxury',
    salePricePerSqFt: 15200,
    constructionCostPerSqFt: 2500,
    interiorCostPerSqFt: 1200,
    defaultArvaneFloors: 2, // 2:2 split
  },
  {
    name: 'New Gurgaon (Sec 82-95)',
    location: 'Dwarka Expressway / NH-8 Growth Belt',
    defaultPlotSqYd: 300,
    landBenchmarkLakh: 1.8,
    productTier: 'Premium',
    salePricePerSqFt: 11000,
    constructionCostPerSqFt: 2200,
    interiorCostPerSqFt: 900,
    defaultArvaneFloors: 2, // 2:2 split
  },
  {
    name: 'Noida Sector 50',
    location: 'Central Noida Established Enclave',
    defaultPlotSqYd: 200,
    landBenchmarkLakh: 2.2,
    productTier: 'Premium',
    salePricePerSqFt: 15200,
    constructionCostPerSqFt: 2400,
    interiorCostPerSqFt: 1100,
    defaultArvaneFloors: 2, // 2:2 split
  }
];

export default function PropertyEngineSimulator({ inline = false }: { inline?: boolean }) {
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  
  const [params, setParams] = useState<PropertyEngineInput>({
    microMarket: PRESET_MARKETS[0].name,
    plotSizeSqYd: PRESET_MARKETS[0].defaultPlotSqYd,
    landBenchmarkPerSqYd: PRESET_MARKETS[0].landBenchmarkLakh,
    productTier: PRESET_MARKETS[0].productTier,
    permissibleFloors: 4,
    estimatedSalePricePerSqFt: PRESET_MARKETS[0].salePricePerSqFt,
    constructionCostPerSqFt: PRESET_MARKETS[0].constructionCostPerSqFt,
    interiorCostPerSqFt: PRESET_MARKETS[0].interiorCostPerSqFt,
    pentagramFloorShare: PRESET_MARKETS[0].defaultArvaneFloors,
    arvaneFloorShare: PRESET_MARKETS[0].defaultArvaneFloors,
  });

  const handleSelectPreset = (index: number) => {
    setSelectedPreset(index);
    const p = PRESET_MARKETS[index];
    setParams({
      microMarket: p.name,
      plotSizeSqYd: p.defaultPlotSqYd,
      landBenchmarkPerSqYd: p.landBenchmarkLakh,
      productTier: p.productTier,
      permissibleFloors: 4,
      estimatedSalePricePerSqFt: p.salePricePerSqFt,
      constructionCostPerSqFt: p.constructionCostPerSqFt,
      interiorCostPerSqFt: p.interiorCostPerSqFt,
      pentagramFloorShare: p.defaultArvaneFloors,
      arvaneFloorShare: p.defaultArvaneFloors,
    });
  };

  const calculation = useMemo<PropertyEngineOutput>(() => {
    const totalLandValueCr = (params.plotSizeSqYd * params.landBenchmarkPerSqYd * 100000) / 10000000;
    
    // In Haryana/NCR, ground coverage is ~66-75% for builder floors, multiplied by 9 sq ft/sq yd
    const floorPlateSqYd = Math.round(params.plotSizeSqYd * 0.84);
    const floorPlateSqFt = floorPlateSqYd * 9;
    const grossSaleableAreaSqFt = floorPlateSqFt * params.permissibleFloors;
    
    const floorValueCr = (floorPlateSqFt * params.estimatedSalePricePerSqFt) / 10000000;
    const grossDevelopmentValueCr = floorValueCr * params.permissibleFloors;
    
    // Total construction + interior cost across all floors (built by Arvane)
    const costPerSqFt = params.constructionCostPerSqFt + params.interiorCostPerSqFt;
    // Adding 12% for MEP, lifts, stilt parking, architecture, sanctions & overheads
    const totalDevelopmentCostCr = (grossSaleableAreaSqFt * costPerSqFt * 1.12) / 10000000;
    
    const arvaneShare = params.arvaneFloorShare ?? params.pentagramFloorShare ?? 1;
    const arvaneRevenueCr = floorValueCr * arvaneShare;
    const arvaneContributionCr = arvaneRevenueCr - totalDevelopmentCostCr;
    const projectMarginPercent = (arvaneContributionCr / arvaneRevenueCr) * 100;
    
    // Working capital needed is ~60% of total construction cost (since pre-sales and milestone receipts fund the rest)
    const capitalRequirementCr = totalDevelopmentCostCr * 0.65;
    
    // Indicative annualized Project IRR assuming 14-month completion cycle
    const indicativeIRRPercent = Math.max(12, Math.round((arvaneContributionCr / capitalRequirementCr) * (12 / 14) * 100));

    let verdict: 'GO' | 'NEGOTIATE' | 'REJECT' = 'GO';
    let verdictReason = 'Strong margin profile & robust capital return exceeding 25% hurdle.';
    let riskScore: 'Low' | 'Moderate' | 'High' = 'Low';

    if (projectMarginPercent >= 24 && indicativeIRRPercent >= 26) {
      verdict = 'GO';
      verdictReason = 'Project fundamentals meet target 25%+ contribution margin and healthy IRR.';
      riskScore = totalLandValueCr > 15 ? 'Moderate' : 'Low';
    } else if (projectMarginPercent >= 15 && projectMarginPercent < 24) {
      verdict = 'NEGOTIATE';
      verdictReason = 'Underwriting indicates marginal buffer. Propose higher floor share (e.g. 2:2) or value engineering.';
      riskScore = 'Moderate';
    } else {
      verdict = 'REJECT';
      verdictReason = 'Project economics do not satisfy minimum margin hurdles. High land cost or unfavorable sharing structure.';
      riskScore = 'High';
    }

    return {
      totalLandValueCr: Number(totalLandValueCr.toFixed(2)),
      grossSaleableAreaSqFt,
      floorPlateSqFt,
      grossDevelopmentValueCr: Number(grossDevelopmentValueCr.toFixed(2)),
      totalConstructionAndInteriorCostCr: Number(totalDevelopmentCostCr.toFixed(2)),
      arvaneRevenueCr: Number(arvaneRevenueCr.toFixed(2)),
      arvaneContributionCr: Number(arvaneContributionCr.toFixed(2)),
      pentagramRevenueCr: Number(arvaneRevenueCr.toFixed(2)),
      pentagramContributionCr: Number(arvaneContributionCr.toFixed(2)),
      projectMarginPercent: Number(projectMarginPercent.toFixed(1)),
      capitalRequirementCr: Number(capitalRequirementCr.toFixed(2)),
      indicativeIRRPercent,
      verdict,
      verdictReason,
      riskScore
    };
  }, [params]);

  return (
    <div className={`w-full ${inline ? '' : 'p-6 lg:p-8 bg-white border-2 border-amber-200/80 rounded-3xl shadow-xl'}`}>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-amber-100">
        <div>
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-amber-100 text-amber-800 border border-amber-300 shadow-2xs">
              <Calculator className="w-5 h-5 text-amber-700" />
            </span>
            <h3 className="text-xl font-serif font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span>Property Intelligence Engine™</span>
              <span className="text-sm">✨</span>
            </h3>
          </div>
          <p className="text-xs text-stone-600 mt-1">
            Algorithmic micro-market underwriting & deal-triage simulator.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          <span className="text-xs font-mono uppercase font-bold text-stone-500 whitespace-nowrap">Market Preset:</span>
          {PRESET_MARKETS.map((market, idx) => (
            <button
              key={market.name}
              onClick={() => handleSelectPreset(idx)}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-all border ${
                selectedPreset === idx
                  ? 'bg-amber-500 text-white border-amber-500 font-bold shadow-sm'
                  : 'bg-stone-50 text-stone-700 hover:bg-amber-50 hover:text-amber-900 border-stone-200'
              }`}
            >
              {market.name.split(',')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Controls on Left, Live Underwriting on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
        
        {/* Controls Column (5 cols) */}
        <div className="lg:col-span-5 space-y-5 bg-stone-50/80 p-5 rounded-2xl border border-stone-200 shadow-2xs">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <span className="text-xs font-mono uppercase text-amber-800 font-bold flex items-center gap-1.5 tracking-wider">
              <Sliders className="w-3.5 h-3.5 text-amber-600" /> Input Parameters
            </span>
            <span className="text-xs font-semibold bg-white text-stone-700 px-2.5 py-0.5 rounded-full border border-stone-200 shadow-2xs">
              {params.productTier} Tier
            </span>
          </div>

          {/* Plot Size */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-stone-600">Plot Dimension</span>
              <span className="text-amber-800 font-mono font-bold">{params.plotSizeSqYd} sq yd ({params.plotSizeSqYd * 9} sq ft)</span>
            </div>
            <input
              type="range"
              min="160"
              max="1000"
              step="20"
              value={params.plotSizeSqYd}
              onChange={(e) => setParams(prev => ({ ...prev, plotSizeSqYd: Number(e.target.value) }))}
              className="w-full h-2 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[10px] text-stone-400 font-mono">
              <span>180 sq yd</span>
              <span>250 sq yd</span>
              <span>500 sq yd</span>
              <span>1000 sq yd</span>
            </div>
          </div>

          {/* Land Benchmark Price */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-stone-600">Land Benchmark Value</span>
              <span className="text-amber-800 font-mono font-bold">₹{params.landBenchmarkPerSqYd.toFixed(2)} Lakh / sq yd</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="6.0"
              step="0.1"
              value={params.landBenchmarkPerSqYd}
              onChange={(e) => setParams(prev => ({ ...prev, landBenchmarkPerSqYd: Number(e.target.value) }))}
              className="w-full h-2 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="text-[10px] text-stone-500 flex justify-between font-mono">
              <span>Underlying Land: <strong className="text-stone-800">₹{calculation.totalLandValueCr} Cr</strong></span>
              <span>Plot Value</span>
            </div>
          </div>

          {/* Target Sale Price */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-stone-600">Target Unit Realization</span>
              <span className="text-amber-800 font-mono font-bold">₹{params.estimatedSalePricePerSqFt.toLocaleString()} / sq ft</span>
            </div>
            <input
              type="range"
              min="9000"
              max="35000"
              step="500"
              value={params.estimatedSalePricePerSqFt}
              onChange={(e) => setParams(prev => ({ ...prev, estimatedSalePricePerSqFt: Number(e.target.value) }))}
              className="w-full h-2 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Arvane Floor Allocation */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-stone-600">Arvane Floor Allocation</span>
              <span className="text-amber-800 font-bold font-mono">
                {params.arvaneFloorShare ?? params.pentagramFloorShare} of 4 Floors ({(params.arvaneFloorShare ?? params.pentagramFloorShare) === 1 ? '3:1 Structure' : (params.arvaneFloorShare ?? params.pentagramFloorShare) === 2 ? '2:2 Structure' : `${params.arvaneFloorShare ?? params.pentagramFloorShare} Floors`})
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((f) => (
                <button
                  key={f}
                  onClick={() => setParams(prev => ({ ...prev, pentagramFloorShare: f, arvaneFloorShare: f }))}
                  className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                    (params.arvaneFloorShare ?? params.pentagramFloorShare) === f
                      ? 'bg-amber-500 text-white border-amber-500 font-bold shadow-2xs'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {f === 1 ? '1 Floor (3:1)' : f === 2 ? '2 Floors (2:2)' : '3 Floors (1:3)'}
                </button>
              ))}
            </div>
          </div>

          {/* Construction & Interior Budget */}
          <div className="pt-2 border-t border-stone-200 grid grid-cols-2 gap-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-stone-200">
              <span className="text-stone-500 block text-[10px] uppercase font-mono font-bold">Civil & MEP</span>
              <span className="text-stone-900 font-mono font-bold text-sm">₹{params.constructionCostPerSqFt}/sq ft</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200">
              <span className="text-stone-500 block text-[10px] uppercase font-mono font-bold">Interior Fitout</span>
              <span className="text-stone-900 font-mono font-bold text-sm">₹{params.interiorCostPerSqFt}/sq ft</span>
            </div>
          </div>
        </div>

        {/* Live Output & Verdict Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          
          {/* Top Verdict Banner */}
          <div className={`p-5 rounded-2xl border transition-all flex items-start justify-between gap-4 shadow-sm ${
            calculation.verdict === 'GO' 
              ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
              : calculation.verdict === 'NEGOTIATE'
              ? 'bg-amber-50/90 border-amber-300 text-amber-950'
              : 'bg-rose-50/90 border-rose-300 text-rose-950'
          }`}>
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  calculation.verdict === 'GO' ? 'bg-emerald-600 text-white shadow-xs' :
                  calculation.verdict === 'NEGOTIATE' ? 'bg-amber-500 text-white shadow-xs' :
                  'bg-rose-600 text-white shadow-xs'
                }`}>
                  Triage Decision: {calculation.verdict}
                </span>
                <span className="text-xs text-stone-600 flex items-center gap-1 font-mono font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Risk Index: <strong className="text-stone-900">{calculation.riskScore}</strong>
                </span>
              </div>
              <p className="text-xs text-stone-700 font-medium pt-1">
                {calculation.verdictReason}
              </p>
            </div>

            <div className="text-right shrink-0">
              <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 block font-bold">Indicative Project IRR</span>
              <span className="text-3xl font-serif font-extrabold text-amber-600">
                ~{calculation.indicativeIRRPercent}%
              </span>
            </div>
          </div>

          {/* Metric Dashboard Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 shadow-2xs">
              <span className="text-[10px] uppercase tracking-wider text-stone-500 block font-mono font-bold">Saleable Area</span>
              <span className="text-lg font-bold text-stone-900 font-mono">{calculation.grossSaleableAreaSqFt.toLocaleString()}</span>
              <span className="text-[11px] text-stone-500 block">sq ft in 4 floors</span>
            </div>

            <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200 shadow-2xs">
              <span className="text-[10px] uppercase tracking-wider text-amber-800 block font-mono font-bold">Gross Dev Value</span>
              <span className="text-lg font-bold text-amber-700 font-mono">₹{calculation.grossDevelopmentValueCr} Cr</span>
              <span className="text-[11px] text-stone-500 block">100% project GDV</span>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 shadow-2xs">
              <span className="text-[10px] uppercase tracking-wider text-stone-500 block font-mono font-bold">Total Dev Cost</span>
              <span className="text-lg font-bold text-stone-900 font-mono">₹{calculation.totalConstructionAndInteriorCostCr} Cr</span>
              <span className="text-[11px] text-stone-500 block">Civil + Fitout</span>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 shadow-2xs">
              <span className="text-[10px] uppercase tracking-wider text-stone-500 block font-mono font-bold">Working Capital</span>
              <span className="text-lg font-bold text-stone-900 font-mono">₹{calculation.capitalRequirementCr} Cr</span>
              <span className="text-[11px] text-stone-500 block">Peak equity bridge</span>
            </div>
          </div>

          {/* Arvane Economics Breakdown */}
          <div className="bg-white p-5 rounded-2xl border-2 border-amber-200/80 space-y-3 shadow-md">
            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-stone-100">
              <span className="uppercase tracking-wider text-stone-600 font-bold">Arvane Share Economics</span>
              <span className="text-amber-800 font-bold bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">Allocated: {params.arvaneFloorShare ?? params.pentagramFloorShare} Floor(s)</span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="text-[10px] text-stone-500 block uppercase font-mono font-bold">Arvane Revenue</span>
                <span className="text-xl font-serif font-bold text-stone-900">₹{calculation.arvaneRevenueCr ?? calculation.pentagramRevenueCr} Cr</span>
              </div>
              <div className="bg-amber-50 p-3 rounded-xl border border-amber-200">
                <span className="text-[10px] text-amber-800 block uppercase font-mono font-bold">Contribution</span>
                <span className="text-xl font-serif font-bold text-amber-700">
                  ₹{calculation.arvaneContributionCr ?? calculation.pentagramContributionCr} Cr
                </span>
              </div>
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                <span className="text-[10px] text-emerald-800 block uppercase font-mono font-bold">Margin</span>
                <span className="text-xl font-serif font-bold text-emerald-700">
                  {calculation.projectMarginPercent}%
                </span>
              </div>
            </div>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 flex flex-wrap items-center justify-between gap-2">
              <span>Landowner Retains: <strong>{4 - (params.arvaneFloorShare ?? params.pentagramFloorShare)} Floors</strong> (~₹{((4 - (params.arvaneFloorShare ?? params.pentagramFloorShare)) * (calculation.grossDevelopmentValueCr / 4)).toFixed(2)} Cr completed asset value)</span>
              <span className="text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full border border-emerald-200 font-mono text-[11px] font-bold">Zero Land Debt</span>
            </div>
          </div>

          {/* Disclaimer text */}
          <p className="text-[10px] text-stone-400 uppercase tracking-wider font-mono">
            * Illustrative simulation based on mathematical model assumptions. Zoning and FAR validated prior to execution.
          </p>
        </div>
      </div>
    </div>
  );
}
