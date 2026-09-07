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
  ArrowRight,
  ShieldCheck,
  Scale,
  Compass,
  Cpu,
  Database,
  GitBranch,
  Target,
  FileCheck,
  DollarSign,
  PieChart,
  RefreshCw,
  Sparkles,
  Info,
  ChevronRight,
  Award,
  Lock,
  BarChart4,
  Flame,
  Search,
  ExternalLink,
  HelpCircle,
  Clock,
  MapPin,
  Maximize2
} from 'lucide-react';
import { PropertyEngineInput, PropertyEngineOutput, DealStructureOption, DealScoreBreakdown } from '../types';

/* ----------------------------------------------------
   PRESET NCR MARKETS FOR UNDERWRITING ENGINE
---------------------------------------------------- */
export interface PresetMarketIntelligence {
  id: string;
  name: string;
  location: string;
  authority: string;
  zoning: string;
  defaultPlotSqYd: number;
  historicalPurchasePriceLakh: number;
  acquisitionYear: number;
  landBenchmarkLakh: number;
  ownerDesiredLandValueCr: number;
  productTier: 'Premium' | 'Luxury' | 'Ultra-Luxury';
  salePriceCases: {
    conservative: number;
    base: number;
    upside: number;
  };
  constructionCostPerSqFt: number;
  interiorCostPerSqFt: number;
  otherCostsPercent: number;
  defaultArvaneFloors: number;
  rationale: string;
}

export const PRESET_INTELLIGENCE_MARKETS: PresetMarketIntelligence[] = [
  {
    id: 'dlf-1',
    name: 'DLF Phase 1, Gurgaon',
    location: 'Prime Golf Course Corridor',
    authority: 'DTCP Haryana / HSVP Zoned',
    zoning: 'Plotted Residential (Stilt + 4 Floors)',
    defaultPlotSqYd: 500,
    historicalPurchasePriceLakh: 1.8, // ₹1.8L/sq yd in 2014
    acquisitionYear: 2014,
    landBenchmarkLakh: 4.5, // Current market: ₹4.5L/sq yd (₹22.5 Cr)
    ownerDesiredLandValueCr: 24.0, // Owner wants ₹24.0 Cr
    productTier: 'Ultra-Luxury',
    salePriceCases: {
      conservative: 20500,
      base: 22000,
      upside: 23500,
    },
    constructionCostPerSqFt: 2800,
    interiorCostPerSqFt: 1650,
    otherCostsPercent: 8,
    defaultArvaneFloors: 1, // 3:1 split
    rationale: 'High land value makes 3:1 mandatory for landowner parity while delivering ultra-luxury specifications.',
  },
  {
    id: 'sec-57',
    name: 'Gurgaon Sector 57',
    location: 'Golf Course Extension Road',
    authority: 'HSVP Haryana',
    zoning: 'Plotted Residential (Stilt + 4 Floors)',
    defaultPlotSqYd: 250,
    historicalPurchasePriceLakh: 1.2,
    acquisitionYear: 2016,
    landBenchmarkLakh: 2.8,
    ownerDesiredLandValueCr: 7.5,
    productTier: 'Luxury',
    salePriceCases: {
      conservative: 14200,
      base: 15200,
      upside: 16500,
    },
    constructionCostPerSqFt: 2500,
    interiorCostPerSqFt: 1200,
    otherCostsPercent: 7,
    defaultArvaneFloors: 2, // 2:2 split
    rationale: 'Moderate land benchmark enables balanced 2:2 floor allocation with strong 30%+ project contribution.',
  },
  {
    id: 'new-gurgaon',
    name: 'New Gurgaon (Sec 82-95)',
    location: 'Dwarka Expressway Growth Corridor',
    authority: 'DTCP Haryana',
    zoning: 'Plotted Gated Township (Stilt + 4 Floors)',
    defaultPlotSqYd: 300,
    historicalPurchasePriceLakh: 0.75,
    acquisitionYear: 2017,
    landBenchmarkLakh: 1.8,
    ownerDesiredLandValueCr: 5.8,
    productTier: 'Premium',
    salePriceCases: {
      conservative: 10200,
      base: 11000,
      upside: 12200,
    },
    constructionCostPerSqFt: 2200,
    interiorCostPerSqFt: 900,
    otherCostsPercent: 7,
    defaultArvaneFloors: 2, // 2:2 split
    rationale: 'High sales velocity market; value engineered construction delivers institutional margins.',
  },
  {
    id: 'noida-50',
    name: 'Noida Sector 50',
    location: 'Central Noida Established Enclave',
    authority: 'Noida Authority (NOIDA)',
    zoning: 'Plotted Sectoral Residential',
    defaultPlotSqYd: 200,
    historicalPurchasePriceLakh: 0.9,
    acquisitionYear: 2015,
    landBenchmarkLakh: 2.2,
    ownerDesiredLandValueCr: 4.8,
    productTier: 'Premium',
    salePriceCases: {
      conservative: 14000,
      base: 15200,
      upside: 16400,
    },
    constructionCostPerSqFt: 2400,
    interiorCostPerSqFt: 1100,
    otherCostsPercent: 8,
    defaultArvaneFloors: 2, // 2:2 split
    rationale: 'Strong end-user demand for turnkey redevelopment with institutional transparent documentation.',
  },
  {
    id: 'gcer-villas',
    name: 'Golf Course Extn Luxury Cluster',
    location: 'Bespoke Plotted Enclave',
    authority: 'DTCP Haryana',
    zoning: 'Low-Density Plotted Residential',
    defaultPlotSqYd: 400,
    historicalPurchasePriceLakh: 1.5,
    acquisitionYear: 2015,
    landBenchmarkLakh: 3.6,
    ownerDesiredLandValueCr: 15.0,
    productTier: 'Ultra-Luxury',
    salePriceCases: {
      conservative: 17500,
      base: 18800,
      upside: 20500,
    },
    constructionCostPerSqFt: 2700,
    interiorCostPerSqFt: 1500,
    otherCostsPercent: 8,
    defaultArvaneFloors: 2, // 2:2 split
    rationale: 'High realization potential; requires premium architectural execution and Italian marble finishes.',
  }
];

export default function DevelopmentIntelligenceEngine({ 
  initialTab = 'overview',
  inline = false,
  onNavigateSlide
}: { 
  initialTab?: 'overview' | 'underwriting' | 'negotiation' | 'reverse' | 'dealScore' | 'flywheel' | 'investor';
  inline?: boolean;
  onNavigateSlide?: (id: number) => void;
}) {
  const [activeTab, setActiveTab] = useState<'overview' | 'underwriting' | 'negotiation' | 'reverse' | 'dealScore' | 'flywheel' | 'investor'>(initialTab);
  const [selectedPresetIdx, setSelectedPresetIdx] = useState<number>(0);
  const [activeCase, setActiveCase] = useState<'conservative' | 'base' | 'upside'>('base');

  // Input states initialized to Preset 0 (DLF Phase 1)
  const currentPreset = PRESET_INTELLIGENCE_MARKETS[selectedPresetIdx];

  const [plotSizeSqYd, setPlotSizeSqYd] = useState<number>(currentPreset.defaultPlotSqYd);
  const [historicalCostLakhPerSqYd, setHistoricalCostLakhPerSqYd] = useState<number>(currentPreset.historicalPurchasePriceLakh);
  const [acquisitionYear, setAcquisitionYear] = useState<number>(currentPreset.acquisitionYear);
  const [landBenchmarkLakhPerSqYd, setLandBenchmarkLakhPerSqYd] = useState<number>(currentPreset.landBenchmarkLakh);
  const [ownerDesiredValueCr, setOwnerDesiredValueCr] = useState<number>(currentPreset.ownerDesiredLandValueCr);
  
  const [productTier, setProductTier] = useState<'Premium' | 'Luxury' | 'Ultra-Luxury'>(currentPreset.productTier);
  const [permissibleFloors, setPermissibleFloors] = useState<number>(4);
  const [arvaneFloors, setArvaneFloors] = useState<number>(currentPreset.defaultArvaneFloors);
  
  const [constructionCostPerSqFt, setConstructionCostPerSqFt] = useState<number>(currentPreset.constructionCostPerSqFt);
  const [interiorCostPerSqFt, setInteriorCostPerSqFt] = useState<number>(currentPreset.interiorCostPerSqFt);
  const [otherCostsPercent, setOtherCostsPercent] = useState<number>(currentPreset.otherCostsPercent);
  const [salePricePerSqFt, setSalePricePerSqFt] = useState<number>(currentPreset.salePriceCases.base);

  // Reverse Engineering interactive inputs
  const [revOwnerExpectationCr, setRevOwnerExpectationCr] = useState<number>(22.5);
  const [revTargetMarginPct, setRevTargetMarginPct] = useState<number>(30);

  // When preset changes
  const handleSelectPreset = (idx: number) => {
    setSelectedPresetIdx(idx);
    const p = PRESET_INTELLIGENCE_MARKETS[idx];
    setPlotSizeSqYd(p.defaultPlotSqYd);
    setHistoricalCostLakhPerSqYd(p.historicalPurchasePriceLakh);
    setAcquisitionYear(p.acquisitionYear);
    setLandBenchmarkLakhPerSqYd(p.landBenchmarkLakh);
    setOwnerDesiredValueCr(p.ownerDesiredLandValueCr);
    setProductTier(p.productTier);
    setConstructionCostPerSqFt(p.constructionCostPerSqFt);
    setInteriorCostPerSqFt(p.interiorCostPerSqFt);
    setOtherCostsPercent(p.otherCostsPercent);
    setSalePricePerSqFt(p.salePriceCases[activeCase]);
    setArvaneFloors(p.defaultArvaneFloors);
    setRevOwnerExpectationCr(p.landBenchmarkLakh * p.defaultPlotSqYd / 100);
  };

  const handleCaseChange = (c: 'conservative' | 'base' | 'upside') => {
    setActiveCase(c);
    setSalePricePerSqFt(currentPreset.salePriceCases[c]);
  };

  /* ----------------------------------------------------
     THE 16 ENGINE OUTPUT CALCULATIONS (PRECISE MATH)
  ---------------------------------------------------- */
  const calculations = useMemo(() => {
    // 1. Land & Cost Basis
    const historicalCostBasisCr = (plotSizeSqYd * historicalCostLakhPerSqYd) / 100;
    const currentYear = 2026;
    const yearsHeld = Math.max(1, currentYear - acquisitionYear);
    const marketSupportedLandValueCr = (plotSizeSqYd * landBenchmarkLakhPerSqYd) / 100;

    // 2. Spatial & Development Area (NCR FAR approx 2.64 - 3.0 on plotted sites)
    // 1 sq yd = 9 sq ft. Floor plate ~ 75-80% plot footprint, gross saleable area with balconies ~ 8.4x plot size
    const floorPlateSqFt = Math.round(plotSizeSqYd * 7.56);
    const grossSaleableAreaSqFt = floorPlateSqFt * permissibleFloors;
    const ownerFloors = Math.max(0, permissibleFloors - arvaneFloors);

    // 3. Project GDV (Gross Development Value)
    const grossDevelopmentValueCr = (grossSaleableAreaSqFt * salePricePerSqFt) / 10000000;

    // 4. Hard Costs (Civil Construction + Turnkey Interiors)
    const totalCivilConstructionCr = (grossSaleableAreaSqFt * constructionCostPerSqFt) / 10000000;
    const totalInteriorInvestmentCr = (grossSaleableAreaSqFt * interiorCostPerSqFt) / 10000000;
    const directHardCostCr = totalCivilConstructionCr + totalInteriorInvestmentCr;

    // 5. Other Project Costs (Architecture, Structural, MEP, Approvals, PM, Sales/Marketing, Contingency)
    const otherProjectCostsCr = directHardCostCr * (otherCostsPercent / 100);
    const totalProjectCostCr = directHardCostCr + otherProjectCostsCr;

    // 6. Revenue & Split
    const arvaneShareRatio = arvaneFloors / permissibleFloors;
    const arvaneAttributableRevenueCr = grossDevelopmentValueCr * arvaneShareRatio;
    const ownerAttributableRevenueCr = grossDevelopmentValueCr * (1 - arvaneShareRatio);

    // 7. ARVANE Investment & Contribution
    // Arvane funds 100% of the project execution (Construction + Interiors + Other costs)
    const arvaneInvestmentRequirementCr = totalProjectCostCr;
    const arvaneContributionCr = arvaneAttributableRevenueCr - arvaneInvestmentRequirementCr;
    const projectContributionMarginPercent = arvaneAttributableRevenueCr > 0 
      ? (arvaneContributionCr / arvaneAttributableRevenueCr) * 100 
      : 0;

    // 8. Breakeven & Minimum Required Selling Price (to achieve 30% margin)
    // Req Revenue = Cost / (1 - 0.30)
    const requiredRevenueAt30MarginCr = totalProjectCostCr / 0.70;
    const arvaneSaleableAreaSqFt = floorPlateSqFt * arvaneFloors;
    const minRequiredSellingPricePerSqFt = arvaneSaleableAreaSqFt > 0 
      ? Math.round((requiredRevenueAt30MarginCr * 10000000) / arvaneSaleableAreaSqFt)
      : 0;

    // 9. Max Viable Land Consideration (Reverse calculation if land were to be bought outright)
    // Max Land = GDV - Total Costs - Required 30% Margin
    const maxViableLandConsiderationCr = Math.max(0, grossDevelopmentValueCr * 0.70 - totalProjectCostCr);

    // 10. Financial Returns (IRR & ROCE)
    // Cycle assumption: 12-14 months build + sell
    const projectCycleMonths = 13;
    const capitalRequirementCr = totalProjectCostCr * 0.75; // Peak working capital (with staged collections)
    const indicativeROCEPercent = capitalRequirementCr > 0 ? (arvaneContributionCr / capitalRequirementCr) * 100 : 0;
    const indicativeIRRPercent = capitalRequirementCr > 0 
      ? (indicativeROCEPercent * (12 / projectCycleMonths)) + 4.5 
      : 0;

    // 11. Estimated Sales Velocity
    const estimatedSalesVelocityMonths = productTier === 'Ultra-Luxury' ? 8 : productTier === 'Luxury' ? 6 : 5;

    // 12. Decision Verdict Logic
    let verdict: 'GO' | 'NEGOTIATE' | 'REJECT' = 'REJECT';
    let verdictReason = '';
    let riskScore: 'Low' | 'Moderate' | 'High' = 'Moderate';

    if (projectContributionMarginPercent >= 30.0) {
      verdict = 'GO';
      verdictReason = `Robust ${projectContributionMarginPercent.toFixed(1)}% Project Contribution Margin exceeds management 30% floor. Strong unit economics.`;
      riskScore = 'Low';
    } else if (projectContributionMarginPercent >= 22.0) {
      verdict = 'NEGOTIATE';
      verdictReason = `Project Contribution Margin is ${projectContributionMarginPercent.toFixed(1)}% (below 30% floor). Restructure floor split (e.g. 2:2) or negotiate owner cost share.`;
      riskScore = 'Moderate';
    } else {
      verdict = 'REJECT';
      verdictReason = `Unviable economics: ${projectContributionMarginPercent.toFixed(1)}% margin is severely compressed. Required selling price exceeds market benchmark.`;
      riskScore = 'High';
    }

    // 13. Deal Score (/100)
    let score = 0;
    // Location & Demand (max 20)
    score += (landBenchmarkLakhPerSqYd >= 3.0 ? 20 : landBenchmarkLakhPerSqYd >= 2.0 ? 17 : 14);
    // Margin (max 25)
    score += Math.min(25, Math.max(0, Math.round((projectContributionMarginPercent / 35) * 25)));
    // Realization Cushion (max 20)
    const priceCushionPct = ((salePricePerSqFt - minRequiredSellingPricePerSqFt) / salePricePerSqFt) * 100;
    score += priceCushionPct > 10 ? 20 : priceCushionPct > 0 ? 14 : 5;
    // Execution & Capital Efficiency (max 20)
    score += indicativeROCEPercent > 35 ? 20 : indicativeROCEPercent > 20 ? 15 : 8;
    // Regulatory Clarity & Title (max 15)
    score += 15;
    const dealScore = Math.min(100, Math.max(20, score));

    return {
      historicalCostBasisCr,
      yearsHeld,
      marketSupportedLandValueCr,
      ownerDesiredValueCr,
      floorPlateSqFt,
      grossSaleableAreaSqFt,
      grossDevelopmentValueCr,
      totalCivilConstructionCr,
      totalInteriorInvestmentCr,
      otherProjectCostsCr,
      totalProjectCostCr,
      arvaneAttributableRevenueCr,
      ownerAttributableRevenueCr,
      arvaneInvestmentRequirementCr,
      arvaneContributionCr,
      projectContributionMarginPercent,
      minRequiredSellingPricePerSqFt,
      maxViableLandConsiderationCr,
      capitalRequirementCr,
      indicativeROCEPercent,
      indicativeIRRPercent,
      estimatedSalesVelocityMonths,
      dealScore,
      verdict,
      verdictReason,
      riskScore
    };
  }, [
    plotSizeSqYd, 
    historicalCostLakhPerSqYd, 
    acquisitionYear, 
    landBenchmarkLakhPerSqYd, 
    ownerDesiredValueCr, 
    productTier, 
    permissibleFloors, 
    arvaneFloors, 
    constructionCostPerSqFt, 
    interiorCostPerSqFt, 
    otherCostsPercent, 
    salePricePerSqFt
  ]);

  /* ----------------------------------------------------
     REVERSE ENGINEERING CALCULATOR
  ---------------------------------------------------- */
  const reverseEngineOutput = useMemo(() => {
    const floorPlate = Math.round(plotSizeSqYd * 7.56);
    const grossSaleable = floorPlate * 4;
    const totalHardAndSoftCostCr = calculations.totalProjectCostCr;
    
    // In a 3:1 allocation: Arvane gets 1 floor (25% area)
    const arvaneAreaSqFt = floorPlate * 1;
    const reqRevenueCr = totalHardAndSoftCostCr / (1 - (revTargetMarginPct / 100));
    const reqSellingPrice3to1 = arvaneAreaSqFt > 0 ? Math.round((reqRevenueCr * 10000000) / arvaneAreaSqFt) : 0;
    
    // In a 2:2 allocation: Arvane gets 2 floors (50% area)
    const arvaneAreaSqFt2to2 = floorPlate * 2;
    const reqSellingPrice2to2 = arvaneAreaSqFt2to2 > 0 ? Math.round((reqRevenueCr * 10000000) / arvaneAreaSqFt2to2) : 0;
    
    const marketCompPrice = salePricePerSqFt;
    const is3to1Viable = reqSellingPrice3to1 <= marketCompPrice;
    const is2to2Viable = reqSellingPrice2to2 <= marketCompPrice;

    return {
      totalHardAndSoftCostCr,
      reqSellingPrice3to1,
      reqSellingPrice2to2,
      marketCompPrice,
      is3to1Viable,
      is2to2Viable,
      premiumOverMarket3to1Pct: ((reqSellingPrice3to1 - marketCompPrice) / marketCompPrice) * 100,
      discountUnderMarket2to2Pct: ((marketCompPrice - reqSellingPrice2to2) / marketCompPrice) * 100
    };
  }, [plotSizeSqYd, calculations.totalProjectCostCr, revTargetMarginPct, salePricePerSqFt]);

  return (
    <div className={`w-full ${inline ? '' : 'p-2 sm:p-4'} space-y-6 text-stone-900`}>
      {/* ====================================================
          MASTER HEADER & BRANDING
      ==================================================== */}
      <div className="bg-gradient-to-br from-[#1E293B] via-[#243B53] to-[#0F172A] text-white p-6 sm:p-8 rounded-2xl border border-amber-500/30 shadow-xl relative overflow-hidden">
        {/* Architectural Blueprint Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A265_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-amber-400" />
                Proprietary Underwriting Framework
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-[11px] font-semibold">
                Internal Management Model
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-serif text-white">
              ARVANE DEVELOPMENT INTELLIGENCE ENGINE™
            </h1>

            <p className="text-amber-200/90 font-serif text-base sm:text-lg font-medium italic">
              “Every Plot. Underwritten Before We Build.”
            </p>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-1">
              Data-driven feasibility. Disciplined negotiations. Better development decisions.
              Systematically converting plot-level parameters into institutional investment economics.
            </p>
          </div>

          {/* Core Philosophy Badges */}
          <div className="flex flex-col gap-2.5 shrink-0 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-xs text-amber-300 font-mono">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>“Don't negotiate first. Underwrite first.”</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-300 font-mono">
              <Scale className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>“Structure follows the economics.”</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-300 font-mono">
              <Lock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Hard 30% Contribution Margin Floor</span>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================
          TOP NAVIGATION TABS
      ==================================================== */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-stone-200 text-xs font-semibold scrollbar-none">
        {[
          { id: 'overview', label: '1. Architecture & 9 Inputs', icon: Layers },
          { id: 'underwriting', label: '2. Live Underwriting Sandbox', icon: Calculator },
          { id: 'negotiation', label: '3. Negotiation Engine & Structures', icon: Scale },
          { id: 'reverse', label: '4. Reverse Engineering & Logic', icon: GitBranch },
          { id: 'dealScore', label: '5. ARVANE Deal Score /100', icon: Award },
          { id: 'flywheel', label: '6. Data Flywheel & Moat', icon: RefreshCw },
          { id: 'investor', label: '7. Ecosystem & Investor Rationale', icon: Target },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all text-xs font-bold ${
                isActive
                  ? 'bg-amber-800 text-white shadow-md shadow-amber-900/20'
                  : 'bg-white hover:bg-amber-50/80 text-stone-700 border border-stone-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-amber-700'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ====================================================
          TAB 1: ARCHITECTURE & THE 9 ENGINE INPUTS
      ==================================================== */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Visual Input -> Engine -> Output Flow */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-50/80 via-white to-stone-50 border-2 border-amber-200 shadow-sm">
            <div className="text-center max-w-3xl mx-auto space-y-1 mb-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-3 py-0.5 rounded-full border border-amber-300">
                End-to-End System Logic
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
                The Input → Engine → Output Architecture
              </h3>
              <p className="text-xs text-stone-600">
                How raw plot attributes and owner expectations are transformed into an institutional GO / NEGOTIATE / REJECT verdict.
              </p>
            </div>

            {/* Pipeline Step Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              {/* Box 1: 9 Structured Inputs */}
              <div className="p-4 rounded-xl bg-white border-2 border-stone-200/90 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-800 uppercase">STEP 01</span>
                  <span className="text-[10px] font-mono bg-amber-50 text-amber-900 px-2 py-0.5 rounded font-bold border border-amber-200">
                    9 Data Inputs
                  </span>
                </div>
                <h4 className="font-bold text-stone-900 text-sm font-serif">Site & Market Intake</h4>
                <p className="text-xs text-stone-600">
                  Land acquisition cost, holding period, owner expectations, zoning bylaws, civil BOQ, interior fit-out, other soft costs, market realization cases, and 30% margin floor.
                </p>
              </div>

              {/* Box 2: Central Engine */}
              <div className="p-4 rounded-xl bg-[#1E293B] text-white border-2 border-amber-500/50 space-y-2 shadow-md relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-300 uppercase">STEP 02</span>
                  <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-bold border border-amber-400/40">
                    Core Algorithm
                  </span>
                </div>
                <h4 className="font-bold text-white text-sm font-serif">ARVANE Intelligence Engine™</h4>
                <p className="text-xs text-stone-300">
                  Spatial optimization, cost matrix synthesis, reverse engineering, margin stress testing, and deal structure option evaluation.
                </p>
              </div>

              {/* Box 3: Commercial Outputs */}
              <div className="p-4 rounded-xl bg-white border-2 border-emerald-300 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-800 uppercase">STEP 03</span>
                  <span className="text-[10px] font-mono bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded font-bold border border-emerald-200">
                    16 Outputs
                  </span>
                </div>
                <h4 className="font-bold text-stone-900 text-sm font-serif">Commercial Decision</h4>
                <p className="text-xs text-stone-600">
                  Project GDV, ARVANE revenue, required selling price, 30%+ margin verification, Deal Score /100, and definitive GO / NEGOTIATE / REJECT decision.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed 9 Inputs Grid */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-serif text-stone-900">
                The 9 Core Engine Input Modules
              </h3>
              <span className="text-xs text-stone-500 font-mono">
                Systematic data collection protocol
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Input 1 */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-800">INPUT 01</span>
                  <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-mono">Land Cost Basis</span>
                </div>
                <h4 className="text-sm font-bold text-stone-900 font-serif">Land Acquisition Cost</h4>
                <p className="text-xs text-stone-600">
                  Captures historical purchase price / sq yd, total plot area, original investment value, and acquisition date.
                </p>
                <div className="p-2 rounded bg-stone-50 border border-stone-200 text-[11px] font-mono text-stone-800">
                  <strong>Formula:</strong> Area × Orig. Price/sq yd
                  <span className="block text-[10px] text-amber-800 mt-0.5 font-sans font-medium">
                    *Distinguishes historical cost basis from current market value.
                  </span>
                </div>
              </div>

              {/* Input 2 */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-800">INPUT 02</span>
                  <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-mono">Horizon</span>
                </div>
                <h4 className="text-sm font-bold text-stone-900 font-serif">Holding Period</h4>
                <p className="text-xs text-stone-600">
                  Calculates exact years held to model the landowner's implied CAGR and appreciation expectations.
                </p>
                <div className="p-2 rounded bg-stone-50 border border-stone-200 text-[11px] font-mono text-stone-800">
                  <strong>Insight:</strong> Helps understand whether owner seeks liquidity, intergenerational wealth, or cash flows.
                </div>
              </div>

              {/* Input 3 */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-800">INPUT 03</span>
                  <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-mono">Expectation vs Reality</span>
                </div>
                <h4 className="text-sm font-bold text-stone-900 font-serif">Owner Expectation</h4>
                <p className="text-xs text-stone-600">
                  Evaluates owner's requested value against market reality:
                </p>
                <div className="p-2 rounded bg-amber-50/70 border border-amber-200 text-[11px] space-y-1 text-stone-800 font-sans">
                  <div>• <strong>A:</strong> Original acquisition cost</div>
                  <div>• <strong>B:</strong> Owner's desired value</div>
                  <div>• <strong>C:</strong> Market-supported value</div>
                  <div>• <strong>D:</strong> ARVANE max viable consideration</div>
                </div>
              </div>

              {/* Input 4 */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-800">INPUT 04</span>
                  <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-mono">Zoning & Bylaws</span>
                </div>
                <h4 className="text-sm font-bold text-stone-900 font-serif">Development Potential</h4>
                <p className="text-xs text-stone-600">
                  Calculates permissible FAR, setbacks, stilt parking, permissible floors (4 floors), floor plate, and net saleable area.
                </p>
                <div className="p-2 rounded bg-stone-50 border border-stone-200 text-[10px] text-stone-600 italic">
                  *All regulatory assumptions verified against current DTCP/HSVP/NOIDA sanction plans.
                </div>
              </div>

              {/* Input 5 */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-800">INPUT 05</span>
                  <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-mono">Hard Civil BOQ</span>
                </div>
                <h4 className="text-sm font-bold text-stone-900 font-serif">Construction Cost</h4>
                <p className="text-xs text-stone-600">
                  Itemized civil structure, seismic-resistant RCC, waterproofing, masonry, MEP lines, and stilt lift infrastructure.
                </p>
                <div className="p-2 rounded bg-stone-50 border border-stone-200 text-[11px] font-mono text-stone-800">
                  <strong>Formula:</strong> Gross Saleable × Construction ₹/sq ft
                </div>
              </div>

              {/* Input 6 */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-800">INPUT 06</span>
                  <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-mono font-bold">Product Moat</span>
                </div>
                <h4 className="text-sm font-bold text-stone-900 font-serif">Interior Fit-Out Investment</h4>
                <p className="text-xs text-stone-600">
                  Italian marble flooring, German joinery, VRV air conditioning, automated lighting, designer kitchens & bathrooms.
                </p>
                <div className="p-2 rounded bg-amber-50/70 border border-amber-200 text-[11px] text-stone-800">
                  <strong>Differentiator:</strong> Creating turnkey designer living rather than bare-shell builder floors.
                </div>
              </div>

              {/* Input 7 */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-800">INPUT 07</span>
                  <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-mono">Soft & PM Costs</span>
                </div>
                <h4 className="text-sm font-bold text-stone-900 font-serif">Other Project Costs</h4>
                <p className="text-xs text-stone-600">
                  Architecture, structural/MEP consultants, statutory fees, legal title diligence, PMO, brokerage, insurance, and 5% contingency.
                </p>
                <div className="p-2 rounded bg-stone-50 border border-stone-200 text-[11px] font-mono text-stone-800">
                  Calculates comprehensive TOTAL PROJECT COST.
                </div>
              </div>

              {/* Input 8 */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-800">INPUT 08</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded font-mono font-bold">3-Case Comps</span>
                </div>
                <h4 className="text-sm font-bold text-stone-900 font-serif">Market Realization</h4>
                <p className="text-xs text-stone-600">
                  Underwrites 3 realization scenarios based on verified registry transactions:
                </p>
                <div className="p-2 rounded bg-emerald-50/60 border border-emerald-200 text-[11px] space-y-0.5 text-stone-800">
                  <div>• <strong>Conservative Case:</strong> -7% market stress</div>
                  <div>• <strong>Base Case:</strong> Market clearing price</div>
                  <div>• <strong>Upside Case:</strong> Brand premium realization</div>
                </div>
              </div>

              {/* Input 9 */}
              <div className="p-4 rounded-xl bg-white border-2 border-amber-300 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-800">INPUT 09</span>
                  <span className="text-[10px] bg-amber-500 text-white px-2 py-0.5 rounded font-mono font-bold">Hard Hurdle</span>
                </div>
                <h4 className="text-sm font-bold text-stone-900 font-serif">ARVANE Margin Floor (30%)</h4>
                <p className="text-xs text-stone-600">
                  Non-negotiable hurdle: Every development must generate at least <strong>30% Project Contribution Margin</strong>.
                </p>
                <div className="p-2 rounded bg-amber-50 border border-amber-300 text-[11px] text-amber-950 font-semibold">
                  Management underwriting discipline protecting investor capital against downside risk.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================
          TAB 2: LIVE UNDERWRITING SANDBOX & 16-OUTPUT DASHBOARD
      ==================================================== */}
      {activeTab === 'underwriting' && (
        <div className="space-y-6">
          {/* Preset Selector */}
          <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-mono font-bold uppercase text-stone-500">
                Select Tested NCR Micro-Market Underwriting Preset:
              </span>
              <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-lg text-[11px] font-semibold">
                <span className="text-stone-500 px-1">Case:</span>
                {(['conservative', 'base', 'upside'] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => handleCaseChange(c)}
                    className={`px-2.5 py-1 rounded capitalize transition-all ${
                      activeCase === c 
                        ? 'bg-amber-800 text-white shadow-xs font-bold' 
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {PRESET_INTELLIGENCE_MARKETS.map((preset, idx) => {
                const isSelected = selectedPresetIdx === idx;
                return (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPreset(idx)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      isSelected
                        ? 'bg-amber-50/80 border-amber-400 shadow-2xs ring-1 ring-amber-400/40'
                        : 'bg-white hover:bg-stone-50 border-stone-200'
                    }`}
                  >
                    <div className="text-[10px] font-mono text-stone-500">{preset.location}</div>
                    <div className="text-xs font-bold text-stone-900 truncate font-serif">{preset.name}</div>
                    <div className="text-[10px] text-amber-800 font-mono font-semibold mt-1">
                      {preset.defaultPlotSqYd} sq yd • {preset.productTier}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Parameters Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Input Controls Form */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <h3 className="text-sm font-bold font-serif text-stone-900 flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-amber-700" />
                  Live Plot Inputs
                </h3>
                <span className="text-[11px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {currentPreset.authority}
                </span>
              </div>

              {/* Slider 1: Plot Size */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <label className="text-stone-600">Plot Size (sq yd)</label>
                  <span className="font-mono font-bold text-stone-900">{plotSizeSqYd} sq yd</span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="1000"
                  step="25"
                  value={plotSizeSqYd}
                  onChange={(e) => setPlotSizeSqYd(Number(e.target.value))}
                  className="w-full accent-amber-600"
                />
              </div>

              {/* Slider 2: Current Land Benchmark */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <label className="text-stone-600">Land Benchmark (₹ Lakh/sq yd)</label>
                  <span className="font-mono font-bold text-stone-900">₹{landBenchmarkLakhPerSqYd.toFixed(1)} L</span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="7.0"
                  step="0.1"
                  value={landBenchmarkLakhPerSqYd}
                  onChange={(e) => setLandBenchmarkLakhPerSqYd(Number(e.target.value))}
                  className="w-full accent-amber-600"
                />
              </div>

              {/* Slider 3: Target Selling Price */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <label className="text-stone-600">Sale Price (₹/sq ft)</label>
                  <span className="font-mono font-bold text-emerald-800">₹{salePricePerSqFt.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="8000"
                  max="35000"
                  step="500"
                  value={salePricePerSqFt}
                  onChange={(e) => setSalePricePerSqFt(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
              </div>

              {/* Slider 4: Arvane Floor Allocation */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <label className="text-stone-600">ARVANE Floor Allocation</label>
                  <span className="font-mono font-bold text-amber-800">
                    {arvaneFloors} of {permissibleFloors} Floors ({permissibleFloors - arvaneFloors}:{arvaneFloors})
                  </span>
                </div>
                <div className="flex gap-2 pt-1">
                  {[1, 2, 3].map((f) => (
                    <button
                      key={f}
                      onClick={() => setArvaneFloors(f)}
                      className={`flex-1 py-1.5 rounded-lg border text-xs font-mono font-bold ${
                        arvaneFloors === f
                          ? 'bg-amber-800 text-white border-amber-900'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {f} Floor{f > 1 ? 's' : ''} ({permissibleFloors - f}:{f})
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 5: Construction + Interior BOQ */}
              <div className="pt-2 border-t border-stone-100 space-y-2 text-xs">
                <div className="flex justify-between text-[11px] text-stone-500 font-mono">
                  <span>Civil: ₹{constructionCostPerSqFt}/sq ft</span>
                  <span>Interiors: ₹{interiorCostPerSqFt}/sq ft</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-stone-200 space-y-1 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Effective Floor Plate:</span>
                    <span className="font-mono font-bold">{calculations.floorPlateSqFt} sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Total Saleable Area:</span>
                    <span className="font-mono font-bold">{calculations.grossSaleableAreaSqFt.toLocaleString()} sq ft</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The 16 Outputs Master Dashboard */}
            <div className="lg:col-span-2 p-5 rounded-2xl bg-white border-2 border-amber-200/90 shadow-sm space-y-5">
              {/* Verdict Header Banner */}
              <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                calculations.verdict === 'GO' 
                  ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                  : calculations.verdict === 'NEGOTIATE'
                  ? 'bg-amber-50/80 border-amber-300 text-amber-950'
                  : 'bg-rose-50/80 border-rose-300 text-rose-950'
              }`}>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full font-mono text-xs font-extrabold uppercase tracking-wider text-white ${
                      calculations.verdict === 'GO' ? 'bg-emerald-600' : calculations.verdict === 'NEGOTIATE' ? 'bg-amber-600' : 'bg-rose-600'
                    }`}>
                      DECISION: {calculations.verdict}
                    </span>
                    <span className="text-xs font-mono font-bold">
                      Deal Score: {calculations.dealScore}/100
                    </span>
                  </div>
                  <p className="text-xs font-medium pt-1">
                    {calculations.verdictReason}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-[10px] font-mono uppercase text-stone-500">Contribution Margin</div>
                  <div className={`text-2xl font-extrabold font-mono ${
                    calculations.projectContributionMarginPercent >= 30 ? 'text-emerald-700' : 'text-amber-700'
                  }`}>
                    {calculations.projectContributionMarginPercent.toFixed(1)}%
                  </div>
                  <div className="text-[10px] font-mono text-stone-500">(Hurdle Floor: 30%)</div>
                </div>
              </div>

              {/* The 16 Outputs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {/* 1 */}
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">1. Total GDV</span>
                  <span className="text-base font-bold text-stone-900 font-mono">₹{calculations.grossDevelopmentValueCr.toFixed(2)} Cr</span>
                </div>
                {/* 2 */}
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">2. Total Project Cost</span>
                  <span className="text-base font-bold text-stone-900 font-mono">₹{calculations.totalProjectCostCr.toFixed(2)} Cr</span>
                </div>
                {/* 3 */}
                <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
                  <span className="text-[10px] font-mono text-amber-800 uppercase block font-semibold">3. ARVANE Revenue</span>
                  <span className="text-base font-bold text-amber-900 font-mono">₹{calculations.arvaneAttributableRevenueCr.toFixed(2)} Cr</span>
                </div>
                {/* 4 */}
                <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
                  <span className="text-[10px] font-mono text-amber-800 uppercase block font-semibold">4. ARVANE Investment</span>
                  <span className="text-base font-bold text-amber-900 font-mono">₹{calculations.arvaneInvestmentRequirementCr.toFixed(2)} Cr</span>
                </div>

                {/* 5 */}
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">5. Min Required Price</span>
                  <span className="text-base font-bold text-stone-900 font-mono">₹{calculations.minRequiredSellingPricePerSqFt.toLocaleString()}</span>
                  <span className="text-[9px] text-stone-400 block font-mono">For 30% margin</span>
                </div>
                {/* 6 */}
                <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-200">
                  <span className="text-[10px] font-mono text-emerald-800 uppercase block font-semibold">6. ARVANE Contribution</span>
                  <span className="text-base font-bold text-emerald-900 font-mono">₹{calculations.arvaneContributionCr.toFixed(2)} Cr</span>
                </div>
                {/* 7 */}
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">7. Owner Value</span>
                  <span className="text-base font-bold text-stone-900 font-mono">₹{calculations.marketSupportedLandValueCr.toFixed(2)} Cr</span>
                </div>
                {/* 8 */}
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">8. Max Viable Land</span>
                  <span className="text-base font-bold text-stone-900 font-mono">₹{calculations.maxViableLandConsiderationCr.toFixed(2)} Cr</span>
                </div>

                {/* 9 */}
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">9. Split Structure</span>
                  <span className="text-sm font-bold text-stone-900 font-mono">
                    {permissibleFloors - arvaneFloors}:{arvaneFloors} ({arvaneFloors} Flr ARVANE)
                  </span>
                </div>
                {/* 10 */}
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">10. Indicative IRR</span>
                  <span className="text-base font-bold text-emerald-700 font-mono">{calculations.indicativeIRRPercent.toFixed(1)}%</span>
                </div>
                {/* 11 */}
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">11. Expected ROCE</span>
                  <span className="text-base font-bold text-stone-900 font-mono">{calculations.indicativeROCEPercent.toFixed(1)}%</span>
                </div>
                {/* 12 */}
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">12. Peak Working Capital</span>
                  <span className="text-base font-bold text-stone-900 font-mono">₹{calculations.capitalRequirementCr.toFixed(2)} Cr</span>
                </div>

                {/* 13 */}
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">13. Sales Velocity</span>
                  <span className="text-base font-bold text-stone-900 font-mono">~{calculations.estimatedSalesVelocityMonths} Months</span>
                </div>
                {/* 14 */}
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">14. Risk Rating</span>
                  <span className="text-sm font-bold text-stone-900 font-mono">{calculations.riskScore} Risk</span>
                </div>
                {/* 15 */}
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">15. Historical Cost Basis</span>
                  <span className="text-base font-bold text-stone-900 font-mono">₹{calculations.historicalCostBasisCr.toFixed(2)} Cr</span>
                </div>
                {/* 16 */}
                <div className="p-3 rounded-xl bg-amber-100/60 border border-amber-300">
                  <span className="text-[10px] font-mono text-amber-900 uppercase block font-bold">16. Deal Score</span>
                  <span className="text-base font-extrabold text-amber-950 font-mono">{calculations.dealScore} / 100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================
          TAB 3: THE NEGOTIATION ENGINE & DEAL STRUCTURES
      ==================================================== */}
      {activeTab === 'negotiation' && (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Structuring Flexibility
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              From Negotiation to Structured Deal-Making
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              The engine doesn't merely tell ARVANE whether a plot works; it reveals which commercial structure makes it viable.
            </p>
          </div>

          {/* Illustrative Negotiation Scenario Box */}
          <div className="p-6 rounded-2xl bg-white border-2 border-stone-200/90 shadow-sm space-y-4">
            <span className="text-xs font-mono text-amber-800 uppercase font-bold block">
              Illustrative Negotiation Case Study: 250 sq yd in Gurgaon Sector 57
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Test Case A: Owner asks 3 floors */}
              <div className="p-4 rounded-xl bg-rose-50/60 border-2 border-rose-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-rose-800 font-bold">OWNER PROPOSAL</span>
                  <span className="text-xs font-mono bg-rose-600 text-white px-2 py-0.5 rounded font-bold">REJECT / RENEGOTIATE</span>
                </div>
                <h4 className="font-bold text-stone-900 text-sm font-serif">Option 1: Owner Retains 3 Floors • ARVANE 1 Floor</h4>
                <div className="space-y-1 text-xs text-stone-700">
                  <div className="flex justify-between">
                    <span>ARVANE Attributable Revenue:</span>
                    <span className="font-mono font-bold">₹2.88 Cr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Project Development Cost:</span>
                    <span className="font-mono font-bold">₹2.34 Cr</span>
                  </div>
                  <div className="flex justify-between text-rose-700 font-bold pt-1 border-t border-rose-200">
                    <span>Project Contribution Margin:</span>
                    <span className="font-mono">18.6% (Below 30% Hurdle)</span>
                  </div>
                </div>
                <p className="text-[11px] text-rose-800 italic pt-1">
                  *Engine flags margin compression. Capital risk too high for 18.6% margin.
                </p>
              </div>

              {/* Test Case B: ARVANE Counter 2:2 */}
              <div className="p-4 rounded-xl bg-emerald-50/60 border-2 border-emerald-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-800 font-bold">ARVANE COUNTER-STRUCTURE</span>
                  <span className="text-xs font-mono bg-emerald-600 text-white px-2 py-0.5 rounded font-bold">GO (VIABLE)</span>
                </div>
                <h4 className="font-bold text-stone-900 text-sm font-serif">Option 2: Owner 2 Floors • ARVANE 2 Floors</h4>
                <div className="space-y-1 text-xs text-stone-700">
                  <div className="flex justify-between">
                    <span>ARVANE Attributable Revenue:</span>
                    <span className="font-mono font-bold">₹5.76 Cr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Project Development Cost:</span>
                    <span className="font-mono font-bold">₹2.34 Cr</span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-bold pt-1 border-t border-emerald-200">
                    <span>Project Contribution Margin:</span>
                    <span className="font-mono">31.4% (Exceeds 30% Hurdle)</span>
                  </div>
                </div>
                <p className="text-[11px] text-emerald-800 italic pt-1">
                  *Owner receives 2 luxury turnkey floors (₹5.76 Cr value) with zero construction hassle.
                </p>
              </div>
            </div>

            {/* Negotiation Step Logic Flow */}
            <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-300 text-center text-xs font-mono text-stone-800 flex flex-wrap items-center justify-center gap-2">
              <span className="font-bold text-amber-900">OWNER EXPECTATION</span>
              <span>→</span>
              <span className="font-bold text-amber-900">ECONOMIC MODEL</span>
              <span>→</span>
              <span className="font-bold text-amber-900">PROJECT MARGIN TEST (30%)</span>
              <span>→</span>
              <span className="font-bold text-amber-900">STRUCTURE OPTIONS</span>
              <span>→</span>
              <span className="font-bold text-emerald-800">RECOMMENDED DEAL</span>
            </div>
          </div>

          {/* 5 Possible Deal Structure Cards */}
          <div className="space-y-3">
            <h3 className="text-base font-bold font-serif text-stone-900">
              The 5 Primary Deal Structuring Archetypes Tested by the Engine
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              {/* Option A */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono font-bold text-[10px]">OPTION A</span>
                <h4 className="font-bold text-stone-900 text-sm font-serif">Floor Allocation (3:1)</h4>
                <p className="text-stone-600">
                  Landowner retains 3 floors; ARVANE retains 1 floor. Best suited for ultra-prime locations (DLF Phase 1, Golf Course Road) where land benchmark exceeds ₹4.5L/sq yd.
                </p>
              </div>

              {/* Option B */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono font-bold text-[10px]">OPTION B</span>
                <h4 className="font-bold text-stone-900 text-sm font-serif">Balanced Allocation (2:2)</h4>
                <p className="text-stone-600">
                  Landowner retains 2 floors; ARVANE retains 2 floors. Optimal for mid-tier growth corridors (Sector 57, New Gurgaon, Noida 50) where land benchmark is ₹1.8–3.0L/sq yd.
                </p>
              </div>

              {/* Option C */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono font-bold text-[10px]">OPTION C</span>
                <h4 className="font-bold text-stone-900 text-sm font-serif">Profit Sharing JV</h4>
                <p className="text-stone-600">
                  Landowner contributes plot; ARVANE manages development, capital, and sales. Net profits after audited cost recovery are split based on agreed percentages.
                </p>
              </div>

              {/* Option D */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono font-bold text-[10px]">OPTION D</span>
                <h4 className="font-bold text-stone-900 text-sm font-serif">Fixed Land Consideration</h4>
                <p className="text-stone-600">
                  Landowner receives agreed staged consideration; ARVANE assumes development, construction, and sales absorption risk.
                </p>
              </div>

              {/* Option E */}
              <div className="p-4 rounded-xl bg-rose-50/80 border-2 border-rose-300 space-y-2 shadow-2xs">
                <span className="px-2 py-0.5 rounded bg-rose-200 text-rose-900 font-mono font-bold text-[10px]">OPTION E</span>
                <h4 className="font-bold text-stone-900 text-sm font-serif">Disciplined Rejection</h4>
                <p className="text-stone-700 font-medium">
                  If no commercially viable structure maintains ARVANE's 30% contribution margin requirement, the plot is rejected without exception.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================
          TAB 4: REVERSE ENGINEERING & DECISION TREE
      ==================================================== */}
      {activeTab === 'reverse' && (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Downside Risk Defense
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              Reverse Engineering & Core Decision Logic
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Working backwards from required return hurdles to determine if a landowner's expectation is commercially feasible.
            </p>
          </div>

          {/* Reverse Engineering Interactive Demonstration */}
          <div className="p-6 rounded-2xl bg-white border-2 border-amber-200 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
              <div>
                <h3 className="text-base font-bold font-serif text-stone-900">
                  The Reverse Realization Stress Test
                </h3>
                <p className="text-xs text-stone-600">
                  Calculates the exact selling price per sq ft required to support the owner's demand at a 30% contribution margin.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Prevents Speculative Pricing
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left: Interactive Sliders */}
              <div className="space-y-3 text-xs">
                <div className="space-y-1">
                  <label className="text-stone-600 block">Owner Desired Land Valuation (₹ Cr)</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="3.0"
                      max="30.0"
                      step="0.5"
                      value={revOwnerExpectationCr}
                      onChange={(e) => setRevOwnerExpectationCr(Number(e.target.value))}
                      className="w-full accent-amber-600"
                    />
                    <span className="font-mono font-bold text-stone-900 w-16 text-right">₹{revOwnerExpectationCr} Cr</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-stone-600 block">Required ARVANE Contribution Margin (%)</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="20"
                      max="40"
                      step="1"
                      value={revTargetMarginPct}
                      onChange={(e) => setRevTargetMarginPct(Number(e.target.value))}
                      className="w-full accent-amber-600"
                    />
                    <span className="font-mono font-bold text-amber-800 w-12 text-right">{revTargetMarginPct}%</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200 text-[11px] text-stone-700 space-y-1">
                  <div>• Total Hard & Soft Costs: <strong>₹{reverseEngineOutput.totalHardAndSoftCostCr.toFixed(2)} Cr</strong></div>
                  <div>• Current Market Benchmark: <strong>₹{reverseEngineOutput.marketCompPrice.toLocaleString()}/sq ft</strong></div>
                </div>
              </div>

              {/* Right: Comparative Reverse Analysis */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 3:1 Structure Result */}
                <div className={`p-4 rounded-xl border-2 space-y-2 ${
                  reverseEngineOutput.is3to1Viable
                    ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                    : 'bg-rose-50/70 border-rose-300 text-rose-950'
                }`}>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono font-bold">STRUCTURE: 3:1</span>
                    <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                      reverseEngineOutput.is3to1Viable ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                    }`}>
                      {reverseEngineOutput.is3to1Viable ? 'PASS' : 'RED FLAG'}
                    </span>
                  </div>
                  <div className="text-xl font-mono font-extrabold">
                    ₹{reverseEngineOutput.reqSellingPrice3to1.toLocaleString()} <span className="text-xs font-normal">/ sq ft</span>
                  </div>
                  <p className="text-xs">
                    {reverseEngineOutput.is3to1Viable
                      ? `Within market price (₹${reverseEngineOutput.marketCompPrice.toLocaleString()}). Viable deal.`
                      : `Requires ₹${reverseEngineOutput.reqSellingPrice3to1.toLocaleString()}/sq ft (${reverseEngineOutput.premiumOverMarket3to1Pct.toFixed(1)}% above market). Unsupportable.`}
                  </p>
                </div>

                {/* 2:2 Structure Result */}
                <div className={`p-4 rounded-xl border-2 space-y-2 ${
                  reverseEngineOutput.is2to2Viable
                    ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                    : 'bg-rose-50/70 border-rose-300 text-rose-950'
                }`}>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono font-bold">STRUCTURE: 2:2</span>
                    <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                      reverseEngineOutput.is2to2Viable ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                    }`}>
                      {reverseEngineOutput.is2to2Viable ? 'PASS' : 'RED FLAG'}
                    </span>
                  </div>
                  <div className="text-xl font-mono font-extrabold">
                    ₹{reverseEngineOutput.reqSellingPrice2to2.toLocaleString()} <span className="text-xs font-normal">/ sq ft</span>
                  </div>
                  <p className="text-xs">
                    {reverseEngineOutput.is2to2Viable
                      ? `Requires only ₹${reverseEngineOutput.reqSellingPrice2to2.toLocaleString()}/sq ft (${reverseEngineOutput.discountUnderMarket2to2Pct.toFixed(1)}% buffer below market). Highly viable.`
                      : `Requires ₹${reverseEngineOutput.reqSellingPrice2to2.toLocaleString()}/sq ft. Unviable.`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Decision Tree */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white space-y-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-xs font-mono text-amber-300 uppercase font-bold">Formal Decision Protocol</span>
                <h3 className="text-lg font-bold font-serif text-white">The ARVANE Underwriting Decision Tree</h3>
              </div>
              <span className="text-xs font-serif text-stone-300 italic">“We'd rather reject a bad plot than negotiate into a bad project.”</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">GATE 01</span>
                <div className="font-bold text-white font-serif">Support Required Margin?</div>
                <p className="text-stone-300 text-[11px]">Does the proposed deal yield ≥30% project contribution margin?</p>
                <div className="text-[10px] font-mono text-emerald-400 pt-1">YES → Proceed to Gate 02</div>
                <div className="text-[10px] font-mono text-amber-400">NO → Test Restructuring</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">GATE 02</span>
                <div className="font-bold text-white font-serif">Accommodate Owner?</div>
                <p className="text-stone-300 text-[11px]">Can owner expectations be satisfied without eroding margin?</p>
                <div className="text-[10px] font-mono text-emerald-400 pt-1">YES → GO (Issue Term Sheet)</div>
                <div className="text-[10px] font-mono text-amber-400">NO → Proceed to Gate 03</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">GATE 03</span>
                <div className="font-bold text-white font-serif">Renegotiate Structure?</div>
                <p className="text-stone-300 text-[11px]">Can we shift to 2:2, Profit Share, or Staged Consideration?</p>
                <div className="text-[10px] font-mono text-emerald-400 pt-1">YES → NEGOTIATE</div>
                <div className="text-[10px] font-mono text-rose-400">NO → Proceed to Gate 04</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">GATE 04</span>
                <div className="font-bold text-white font-serif">Market Realization?</div>
                <p className="text-stone-300 text-[11px]">Can market pricing realistically bridge the gap with evidence?</p>
                <div className="text-[10px] font-mono text-rose-400 font-bold pt-1">NO → REJECT THE PLOT</div>
                <div className="text-[10px] text-stone-400 font-sans">Protects capital & avoids dead deals.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================
          TAB 5: THE ARVANE DEAL SCORE (/100)
      ==================================================== */}
      {activeTab === 'dealScore' && (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Composite Risk Index
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              The ARVANE Deal Score™ (0–100)
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              A 12-factor institutional scoring engine establishing objective underwriting hurdles before committing capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left: Overall Score Summary */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 flex flex-col justify-between space-y-4 shadow-sm">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">
                  Composite Underwriting Score
                </span>
                <div className="text-5xl font-extrabold font-mono text-amber-950">
                  {calculations.dealScore} <span className="text-xl font-normal text-amber-700">/ 100</span>
                </div>
                <div className="text-xs text-stone-700">
                  Plot: <strong>{currentPreset.name}</strong> ({plotSizeSqYd} sq yd)
                </div>
              </div>

              {/* Classification Ladder */}
              <div className="space-y-2 text-xs">
                <div className={`p-2.5 rounded-lg border flex justify-between items-center ${
                  calculations.dealScore >= 80 ? 'bg-emerald-600 text-white font-bold' : 'bg-white border-stone-200 text-stone-600'
                }`}>
                  <span>80–100: GO (Definitive Agreements)</span>
                  {calculations.dealScore >= 80 && <CheckCircle2 className="w-4 h-4" />}
                </div>

                <div className={`p-2.5 rounded-lg border flex justify-between items-center ${
                  calculations.dealScore >= 65 && calculations.dealScore < 80 ? 'bg-amber-600 text-white font-bold' : 'bg-white border-stone-200 text-stone-600'
                }`}>
                  <span>65–79: NEGOTIATE (Restructure)</span>
                  {calculations.dealScore >= 65 && calculations.dealScore < 80 && <AlertTriangle className="w-4 h-4" />}
                </div>

                <div className={`p-2.5 rounded-lg border flex justify-between items-center ${
                  calculations.dealScore < 65 ? 'bg-rose-600 text-white font-bold' : 'bg-white border-stone-200 text-stone-600'
                }`}>
                  <span>Below 65: REJECT (Unviable)</span>
                  {calculations.dealScore < 65 && <XCircle className="w-4 h-4" />}
                </div>
              </div>

              <div className="text-[10px] text-stone-500 italic">
                *Internal management scoring framework; calibrated to NCR micro-market parameters.
              </div>
            </div>

            {/* Right: 12 Scoring Dimensions Breakdown */}
            <div className="md:col-span-2 p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold font-serif text-stone-900 border-b border-stone-200 pb-2">
                12 Underwriting Dimensions Evaluated
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  { cat: '1. Location & Micro-Market', pts: '10/10', metric: 'Prime corridor density & frontage' },
                  { cat: '2. Regulatory Feasibility', pts: '10/10', metric: 'Zoned residential Stilt + 4 bylaws' },
                  { cat: '3. Development Potential', pts: '9/10', metric: 'Floor plate efficiency > 78%' },
                  { cat: '4. Market Demand & Comps', pts: '9/10', metric: 'High affluent buyer absorption' },
                  { cat: '5. Product-Market Fit', pts: '8/8', metric: 'Ultra-Luxury Italian marble tier' },
                  { cat: '6. Owner Alignment', pts: '7/8', metric: 'Realistic appreciation expectations' },
                  { cat: '7. Cost & BOQ Certainty', pts: '7/8', metric: 'Pre-negotiated vendor pricing' },
                  { cat: '8. Capital Intensity', pts: '7/8', metric: 'Peak working capital < ₹5.0 Cr' },
                  { cat: '9. Sales Velocity', pts: '7/8', metric: 'Estimated cycle ~6-8 months' },
                  { cat: '10. Contribution Margin', pts: `${calculations.projectContributionMarginPercent >= 30 ? '10' : '5'}/10`, metric: 'Hard 30% hurdle floor test' },
                  { cat: '11. Project IRR', pts: `${calculations.indicativeIRRPercent > 35 ? '5' : '3'}/5`, metric: `${calculations.indicativeIRRPercent.toFixed(1)}% indicative annualized IRR` },
                  { cat: '12. Risk Management', pts: '4/5', metric: '30-yr title search + escrow safety' }
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-stone-900">{item.cat}</div>
                      <div className="text-[10px] text-stone-500">{item.metric}</div>
                    </div>
                    <span className="font-mono font-bold text-amber-800 text-xs">{item.pts}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================
          TAB 6: DATA FLYWHEEL & STRATEGIC MOAT
      ==================================================== */}
      {activeTab === 'flywheel' && (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Compounding Intelligence
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              Every Project Makes the Engine Smarter
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              The Engine Becomes the Moat: Accumulating proprietary underwriting data across NCR residential real estate.
            </p>
          </div>

          {/* 10-Step Flywheel Flow */}
          <div className="p-6 rounded-2xl bg-white border-2 border-stone-200/90 shadow-sm space-y-4">
            <span className="text-xs font-mono text-amber-800 uppercase font-bold block text-center">
              The Self-Reinforcing Intelligence Loop
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
              {[
                { step: '01', title: 'Plot Sourced', desc: 'Registry data' },
                { step: '02', title: 'Feasibility Run', desc: 'Engine triage' },
                { step: '03', title: 'Deal Structured', desc: 'Bespoke JDA' },
                { step: '04', title: 'Development', desc: 'BOQ locked' },
                { step: '05', title: 'Turnkey Sales', desc: 'Premium price' },
                { step: '06', title: 'Actual Data Logged', desc: 'Cost & velocity' },
                { step: '07', title: 'Engine Learns', desc: 'Tighter models' },
                { step: '08', title: 'Better Underwriting', desc: 'Less risk' },
                { step: '09', title: 'Better Structures', desc: 'Margin defense' },
                { step: '10', title: 'Higher Returns', desc: 'Scale with confidence' }
              ].map((n, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-amber-800">{n.step}</span>
                  <div className="font-bold text-stone-900">{n.title}</div>
                  <div className="text-[10px] text-stone-500">{n.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* The 3-Layer Moat */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border-2 border-amber-200 space-y-2 shadow-2xs">
              <span className="text-xs font-mono text-amber-800 font-bold uppercase">LAYER 01</span>
              <h3 className="text-base font-bold text-stone-900 font-serif">Data Accumulation</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Hundreds of plots evaluated across DLF, Sushant Lok, South City, and Noida. Realized cost BOQs and micro-market clearing prices.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border-2 border-sky-200 space-y-2 shadow-2xs">
              <span className="text-xs font-mono text-sky-800 font-bold uppercase">LAYER 02</span>
              <h3 className="text-base font-bold text-stone-900 font-serif">Pattern Intelligence</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Identifying high-margin spatial configurations, optimal floor plate layouts, owner psychology patterns, and material procurement pricing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border-2 border-purple-200 space-y-2 shadow-2xs">
              <span className="text-xs font-mono text-purple-800 font-bold uppercase">LAYER 03</span>
              <h3 className="text-base font-bold text-stone-900 font-serif">Decision Advantage</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Faster plot closing, superior risk-adjusted margins, optimized capital deployment, and unmatched negotiating leverage.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center font-serif text-sm sm:text-base font-bold shadow-md">
            “Over time, ARVANE does not simply build more projects. It becomes better at deciding which projects should be built.”
          </div>
        </div>
      )}

      {/* ====================================================
          TAB 7: OPERATING ECOSYSTEM & INVESTOR RATIONALE
      ==================================================== */}
      {activeTab === 'investor' && (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Institutional Discipline
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              Capital Discipline Begins Before the Project Begins
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Why the Development Intelligence Engine protects investor equity and creates scalable development value.
            </p>
          </div>

          {/* With vs Without Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-rose-50/70 border-2 border-rose-300 space-y-3 shadow-2xs">
              <span className="text-xs font-mono font-bold text-rose-800 uppercase">WITHOUT THE ENGINE</span>
              <div className="space-y-2 text-xs text-stone-700">
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>Subjective land acquisitions based on builder intuition</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>Inconsistent underwriting and unhedged cost creep</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>Negotiation compromises leading to severe margin leakage</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>Capital locked in slow-moving or unviable developments</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/70 border-2 border-emerald-300 space-y-3 shadow-2xs">
              <span className="text-xs font-mono font-bold text-emerald-800 uppercase">WITH THE ARVANE ENGINE</span>
              <div className="space-y-2 text-xs text-stone-800 font-medium">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Quantified plot feasibility before committing any capital</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Structured negotiations with clear 30% margin boundaries</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Disciplined project selection and reverse-engineered pricing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Rapid 12–14 month capital rotation and compounding returns</span>
                </div>
              </div>
            </div>
          </div>

          {/* Credible 5-Phase Technology Roadmap */}
          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
            <h3 className="text-sm font-bold font-serif text-stone-900 border-b border-stone-200 pb-2">
              Credible Technology Evolution Roadmap
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 space-y-1">
                <span className="text-[10px] font-mono text-amber-800 font-bold block">PHASE 1 (ACTIVE)</span>
                <div className="font-bold text-stone-900 font-serif">Structured Underwriting</div>
                <p className="text-[11px] text-stone-600">Internal economic & feasibility framework.</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                <span className="text-[10px] font-mono text-stone-500 font-bold block">PHASE 2</span>
                <div className="font-bold text-stone-900 font-serif">Digital Engine UI</div>
                <p className="text-[11px] text-stone-600">Automated multi-variable deal calculations.</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                <span className="text-[10px] font-mono text-stone-500 font-bold block">PHASE 3</span>
                <div className="font-bold text-stone-900 font-serif">Project Data Lake</div>
                <p className="text-[11px] text-stone-600">Historical cost & sales velocity registry.</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                <span className="text-[10px] font-mono text-stone-500 font-bold block">PHASE 4</span>
                <div className="font-bold text-stone-900 font-serif">Predictive Intelligence</div>
                <p className="text-[11px] text-stone-600">Algorithmic micro-market pricing trends.</p>
              </div>

              <div className="p-3 rounded-xl bg-purple-50 border border-purple-300 space-y-1">
                <span className="text-[10px] font-mono text-purple-800 font-bold block">PHASE 5</span>
                <div className="font-bold text-stone-900 font-serif">Platform OS</div>
                <p className="text-[11px] text-stone-600">Scaled multi-city development operating system.</p>
              </div>
            </div>
          </div>

          {/* Final Investor Manifesto & Action Grid */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white text-center space-y-4 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold">
              ARVANE DEVELOPMENT INTELLIGENCE ENGINE™
            </span>

            <h3 className="text-lg sm:text-xl font-bold font-serif max-w-3xl mx-auto leading-relaxed text-stone-100">
              “An internal decision system designed to ensure that every plot, every rupee of development capital, and every owner negotiation is evaluated against a disciplined economic framework.”
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-mono font-bold text-amber-300">
              <span className="px-3 py-1 rounded bg-white/10 border border-white/20">SELECT BETTER LAND</span>
              <span>•</span>
              <span className="px-3 py-1 rounded bg-white/10 border border-white/20">STRUCTURE BETTER DEALS</span>
              <span>•</span>
              <span className="px-3 py-1 rounded bg-white/10 border border-white/20">BUILD BETTER PRODUCTS</span>
              <span>•</span>
              <span className="px-3 py-1 rounded bg-white/10 border border-white/20">PROTECT MARGINS</span>
              <span>•</span>
              <span className="px-3 py-1 rounded bg-white/10 border border-white/20">RECYCLE CAPITAL</span>
              <span>•</span>
              <span className="px-3 py-1 rounded bg-white/10 border border-white/20">SCALE WITH DISCIPLINE</span>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================
          MANDATORY FINANCIAL DISCLAIMER
      ==================================================== */}
      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-[10px] text-stone-500 leading-relaxed">
        <strong>FINANCIAL DISCLAIMER:</strong> Any numerical examples, margins, scores, selling prices, costs, returns or project outcomes shown in this section are illustrative management assumptions only and must not be presented as historical performance, guaranteed returns, market forecasts or commitments.
      </div>
    </div>
  );
}
