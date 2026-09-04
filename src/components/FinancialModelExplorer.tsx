import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Building, 
  PieChart, 
  Sliders, 
  ArrowUpRight, 
  ShieldAlert, 
  DollarSign,
  ChevronRight,
  Info,
  Sparkles
} from 'lucide-react';
import { FOUR_PROJECT_PORTFOLIO, PORTFOLIO_TOTALS, HYPOTHETICAL_PROJECT_EXAMPLE } from '../data/portfolioData';

export default function FinancialModelExplorer() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('dlf-ph1');
  const [overheadMultiplier, setOverheadMultiplier] = useState<number>(1.75);
  const [salesPriceDelta, setSalesPriceDelta] = useState<number>(0); // -10% to +10%

  const selectedProject = FOUR_PROJECT_PORTFOLIO.find(p => p.id === selectedProjectId) || FOUR_PROJECT_PORTFOLIO[0];

  // Recalculated portfolio totals based on sensitivity
  const adjustedPortfolio = FOUR_PROJECT_PORTFOLIO.map(proj => {
    const rev = proj.companyRevenue * (1 + salesPriceDelta / 100);
    // Cost remains largely fixed
    const cost = proj.companyRevenue - proj.projectContribution;
    const cont = rev - cost;
    const margin = (cont / rev) * 100;
    return {
      ...proj,
      adjustedRev: Number(rev.toFixed(2)),
      adjustedCont: Number(cont.toFixed(2)),
      adjustedMargin: Number(margin.toFixed(1))
    };
  });

  const totalAdjustedRevenue = adjustedPortfolio.reduce((acc, p) => acc + p.adjustedRev, 0);
  const totalAdjustedContribution = adjustedPortfolio.reduce((acc, p) => acc + p.adjustedCont, 0);
  const adjustedEBITDA = totalAdjustedContribution - overheadMultiplier;
  const adjustedEBITDAMargin = (adjustedEBITDA / totalAdjustedRevenue) * 100;

  return (
    <div className="w-full bg-white border-2 border-amber-200/80 rounded-3xl p-6 lg:p-8 space-y-6 shadow-xl text-stone-800">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-amber-100">
        <div>
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-amber-100 text-amber-800 border border-amber-300 shadow-2xs">
              <BarChart3 className="w-5 h-5 text-amber-700" />
            </span>
            <h3 className="text-xl font-serif font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span>Portfolio & EBITDA Waterfall</span>
              <span className="text-sm">✨</span>
            </h3>
          </div>
          <p className="text-xs text-stone-600 mt-1">
            Hypothetical 4-project pipeline financial model and corporate operating leverage.
          </p>
        </div>

        {/* Sensitivity slider */}
        <div className="flex items-center gap-3 bg-stone-50 p-2 rounded-2xl border border-stone-200 text-xs shadow-2xs">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-500 whitespace-nowrap">Price Sensitivity:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSalesPriceDelta(-5)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all ${salesPriceDelta === -5 ? 'bg-rose-500 text-white border-rose-500 shadow-xs' : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-100'}`}
            >
              -5% Stress
            </button>
            <button
              onClick={() => setSalesPriceDelta(0)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all ${salesPriceDelta === 0 ? 'bg-amber-500 text-white border-amber-500 shadow-xs' : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-100'}`}
            >
              Base Case
            </button>
            <button
              onClick={() => setSalesPriceDelta(5)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all ${salesPriceDelta === 5 ? 'bg-emerald-500 text-white border-emerald-500 shadow-xs' : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-100'}`}
            >
              +5% Bull
            </button>
          </div>
        </div>
      </div>

      {/* Top 4 Project Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {adjustedPortfolio.map((proj) => {
          const isSelected = proj.id === selectedProjectId;
          return (
            <button
              key={proj.id}
              onClick={() => setSelectedProjectId(proj.id)}
              className={`p-4 rounded-2xl border-2 text-left transition-all ${
                isSelected 
                  ? 'bg-amber-50/90 border-amber-400 shadow-md ring-2 ring-amber-300/40' 
                  : 'bg-stone-50/70 border-stone-200 hover:border-amber-200 hover:bg-amber-50/30'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-mono text-amber-800 font-bold text-[11px]">{proj.plotSizeSqYd} sq yd</span>
                <span className="px-2 py-0.5 bg-white text-stone-700 text-[10px] uppercase font-mono font-bold tracking-wider rounded-md border border-stone-200 shadow-2xs">
                  {proj.tier}
                </span>
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-sm truncate">{proj.name}</h4>
              <p className="text-xs text-stone-600 mt-0.5">{proj.location}</p>

              <div className="mt-3 pt-2.5 border-t border-stone-200/80 grid grid-cols-2 gap-2 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-stone-500 block uppercase font-bold">Revenue</span>
                  <span className="font-bold text-stone-900">₹{proj.adjustedRev} Cr</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 block uppercase font-bold">Contribution</span>
                  <span className="font-bold text-amber-700">₹{proj.adjustedCont} Cr</span>
                </div>
              </div>

              <div className="mt-2 text-[11px] text-stone-600 flex items-center justify-between font-mono">
                <span>Share: {proj.companyShare}</span>
                <span className="text-amber-800 font-bold bg-amber-100/70 px-1.5 py-0.5 rounded text-[10px]">{proj.adjustedMargin}% Mgn</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Project Deep Dive vs Macro Waterfall */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Selected Project Specs (5 cols) */}
        <div className="lg:col-span-5 bg-stone-50/80 p-5 rounded-2xl border border-stone-200 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <span className="text-xs uppercase font-mono text-amber-800 font-bold tracking-wider">
              Project Underwriting
            </span>
            <span className="text-xs font-mono uppercase text-stone-500 font-medium">4-Floor Model</span>
          </div>

          <div>
            <h4 className="text-base font-serif font-bold text-stone-900">{selectedProject.name}</h4>
            <p className="text-xs text-stone-600 mt-1">{selectedProject.highlight}</p>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between py-1.5 border-b border-stone-200">
              <span className="text-stone-600 font-medium">Plot Benchmark</span>
              <span className="font-mono text-stone-900">{selectedProject.plotSizeSqYd} sq yd • {selectedProject.landBenchmarkPerSqYd}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-stone-200">
              <span className="text-stone-600 font-medium">Plot Valuation</span>
              <span className="font-mono text-amber-800 font-bold">{selectedProject.indicativeLandValue}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-stone-200">
              <span className="text-stone-600 font-medium">Saleable Floor Area</span>
              <span className="font-mono text-stone-900">{selectedProject.saleableAreaSqFt.toLocaleString()} sq ft</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-stone-200">
              <span className="text-stone-600 font-medium">Floor Allocation</span>
              <span className="font-mono text-amber-800 font-bold">Owner {selectedProject.ownerShare} / Arvane {selectedProject.companyShare}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-stone-200">
              <span className="text-stone-600 font-medium">Allocated Revenue</span>
              <span className="font-mono text-stone-900 font-bold">₹{selectedProject.companyRevenue} Cr</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-stone-600 font-medium">Project Contribution</span>
              <span className="font-mono text-amber-700 font-bold">₹{selectedProject.projectContribution} Cr ({selectedProject.marginPercent}%)</span>
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 text-xs text-stone-700 space-y-1 shadow-2xs">
            <span className="font-mono uppercase text-[10px] text-amber-800 block font-bold tracking-wider">Key Project Drivers:</span>
            <ul className="list-disc list-inside space-y-1 text-stone-600">
              {selectedProject.keyFactors.map((factor, i) => (
                <li key={i}>{factor}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Portfolio EBITDA Waterfall (7 cols) */}
        <div className="lg:col-span-7 bg-white p-5 rounded-2xl border-2 border-amber-200/80 flex flex-col justify-between space-y-4 shadow-md">
          <div className="flex items-center justify-between border-b border-stone-100 pb-2">
            <span className="text-xs uppercase font-mono text-amber-800 font-bold tracking-wider">
              Portfolio EBITDA Waterfall
            </span>
            <span className="text-xs text-stone-500 font-mono font-medium">
              Annualized Model
            </span>
          </div>

          {/* Waterfall Visualizer */}
          <div className="space-y-3">
            {/* Step 1: Gross Company Revenue */}
            <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-stone-700 font-medium">1. Aggregate Company Revenue (4 Projects)</span>
                <span className="font-mono text-stone-900 font-bold text-sm">₹{totalAdjustedRevenue.toFixed(2)} Cr</span>
              </div>
              <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full w-full rounded-full"></div>
              </div>
              <span className="text-[11px] text-stone-500 mt-1 block">Monetization of developer-allocated floors across DLF Ph1, New Gurgaon, Sec 57 & Noida Sec 50</span>
            </div>

            {/* Step 2: Project Level Contribution */}
            <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-stone-700 font-medium">2. Project-Level Gross Contribution</span>
                <span className="font-mono text-amber-700 font-bold text-sm">₹{totalAdjustedContribution.toFixed(2)} Cr</span>
              </div>
              <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-amber-500 h-full rounded-full transition-all"
                  style={{ width: `${(totalAdjustedContribution / totalAdjustedRevenue) * 100}%` }}
                ></div>
              </div>
              <span className="text-[11px] text-stone-500 mt-1 flex justify-between">
                <span>Net of Direct Construction, MEP, Interiors & Architect fees</span>
                <span className="text-amber-800 font-mono font-bold">{((totalAdjustedContribution / totalAdjustedRevenue) * 100).toFixed(1)}% Blended Margin</span>
              </span>
            </div>

            {/* Step 3: Corporate Overhead */}
            <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-stone-700 font-medium">3. Less: Annual Corporate Overhead</span>
                <span className="font-mono text-rose-600 font-bold text-sm">-₹{overheadMultiplier.toFixed(2)} Cr</span>
              </div>
              <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-rose-500 h-full rounded-full transition-all"
                  style={{ width: `${(overheadMultiplier / totalAdjustedRevenue) * 100}%` }}
                ></div>
              </div>
              <span className="text-[11px] text-stone-500 mt-1 block">Core PMO team, legal/title counsel, property intelligence R&D, corporate compliance</span>
            </div>

            {/* Final EBITDA */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50/60 p-4 rounded-2xl border-2 border-amber-300 flex items-center justify-between shadow-2xs">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-800 block font-bold">Portfolio Operating EBITDA</span>
                <span className="text-2xl font-serif font-extrabold text-stone-900">₹{adjustedEBITDA.toFixed(2)} Cr</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 block font-bold">Indicative EBITDA Margin</span>
                <span className="text-2xl font-serif font-extrabold text-amber-600">{adjustedEBITDAMargin.toFixed(1)}%</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-[11px] text-stone-500">
            <strong className="text-stone-700">Disclaimer:</strong> {PORTFOLIO_TOTALS.disclaimer} Actual EBITDA will vary based on municipal approval timelines, revenue recognition cycles, market liquidity, and project delivery schedules.
          </div>
        </div>
      </div>
    </div>
  );
}
