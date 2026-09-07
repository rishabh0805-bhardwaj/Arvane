import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Briefcase, 
  Cpu, 
  Coins, 
  Repeat, 
  Users, 
  Target, 
  Sparkles, 
  Award, 
  FileText, 
  Sliders, 
  PieChart, 
  BarChart3, 
  ChevronRight,
  AlertCircle,
  Clock,
  Landmark,
  Scale,
  Shield,
  HelpCircle,
  ExternalLink,
  MapPin,
  Flame,
  Check,
  Building
} from 'lucide-react';
import { SlideData } from '../types';
import { 
  FOUR_PROJECT_PORTFOLIO, 
  HYPOTHETICAL_PROJECT_EXAMPLE, 
  PORTFOLIO_TOTALS, 
  FUNDING_DETAILS, 
  RISKS_AND_MITIGATIONS 
} from '../data/portfolioData';
import PropertyEngineSimulator from './PropertyEngineSimulator';
import DevelopmentIntelligenceEngine from './DevelopmentIntelligenceEngine';
import FinancialModelExplorer from './FinancialModelExplorer';
import { 
  InteractiveWorkingModelDiagram, 
  BuildingIsometricVector, 
  JoyfulSkylineVector, 
  FlourishingTreeVector,
  GrowthSunburstVector 
} from './VectorIllustrations';
import { ArvaneLogo } from './ArvaneLogo';
import { 
  EvolutionRoadmapMaster,
  MultipleStructuresView,
  CapitalFlywheelView,
  StrategicMoatView,
  TownshipOpportunityView,
  EconomicLogicView,
  FiveYearEvolutionView,
  PlatformManifestoView
} from './EvolutionRoadmap';

interface SlideRendererProps {
  slide: SlideData;
  onNavigateSlide?: (slideId: number) => void;
}

export default function SlideRenderer({ slide, onNavigateSlide }: SlideRendererProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeTier, setActiveTier] = useState<'ultra' | 'luxury' | 'premium'>('ultra');

  // Tagline text reveal animation variants
  const taglineWords = ["LAND.", "DEVELOPED", "DIFFERENTLY."];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.15,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Render dedicated view for each of the 31 slides
  switch (slide.id) {
    /* ----------------------------------------------------
       SLIDE 1: COVER SLIDE
    ---------------------------------------------------- */
    case 1:
      return (
        <div className="h-full flex flex-col justify-between py-6 px-4 md:px-12 relative overflow-hidden bg-gradient-to-b from-white via-[#FAF8F5] to-[#F4EDE0]/40">
          {/* Subtle joyful background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Top Category Badge */}
          <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-4">
            <div className="flex items-center gap-4">
              <ArvaneLogo variant="compact" />
              <div className="border-l border-[#E8E2D5] pl-4 hidden sm:block">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-800 block">
                  Institutional Investor Presentation
                </span>
                <span className="text-xs font-semibold text-stone-600">
                  Confidential Strategic Growth Capital
                </span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-xs text-emerald-900 font-mono font-bold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Series Seed • NCR Expansion
            </div>
          </div>

          {/* Center Hero Statement */}
          <div className="my-auto py-8 space-y-6 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-bold tracking-wide shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              Technology-Enabled Asset-Light Development
            </motion.div>

            <div className="space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-tight font-serif"
              >
                ARVANE
              </motion.h1>

              {/* Tagline Text-Reveal Animation Effect */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap items-center gap-x-3 text-2xl sm:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-amber-700 to-orange-600 font-serif"
              >
                {taglineWords.map((word, i) => (
                  <motion.span 
                    key={i} 
                    variants={wordVariants}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-base sm:text-xl text-stone-700 font-normal leading-relaxed max-w-3xl"
            >
              A technology-enabled residential development platform transforming underutilized land into professionally developed luxury homes across the National Capital Region (NCR).
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="pt-2 flex flex-wrap items-center gap-3.5"
            >
              <div className="px-5 py-2.5 rounded-2xl bg-amber-50/90 border border-amber-300 flex items-center gap-2.5 shadow-2xs">
                <span className="text-xs text-amber-800 font-mono uppercase font-bold">Strategic Capital Ask:</span>
                <span className="text-base font-extrabold text-amber-950 font-mono">₹7 Crore</span>
              </div>
              <div className="px-5 py-2.5 rounded-2xl bg-emerald-50/90 border border-emerald-300 flex items-center gap-2.5 shadow-2xs">
                <span className="text-xs text-emerald-800 font-mono uppercase font-bold">Target Equity:</span>
                <span className="text-base font-extrabold text-emerald-950 font-mono">5% Equity</span>
              </div>
              <div className="px-4 py-2.5 rounded-2xl bg-sky-50/90 border border-sky-300 flex items-center gap-2.5 shadow-2xs">
                <span className="text-xs text-sky-800 font-mono uppercase font-bold">Profit Sharing:</span>
                <span className="text-xs sm:text-sm font-bold text-sky-950 font-mono">10% until 200% Return <span className="font-sans font-semibold text-[11px] text-sky-700 bg-sky-100/80 px-2 py-0.5 rounded-full ml-1">(Open to Structure)</span></span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Highlights Row */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#E8E2D5] text-xs"
          >
            <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
              <span className="text-stone-500 block">Core Geography</span>
              <span className="font-bold text-stone-900 mt-0.5 block">Gurgaon • Delhi • Noida</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
              <span className="text-stone-500 block">Development Model</span>
              <span className="font-bold text-stone-900 mt-0.5 block">Asset-Light Joint Dev (JDA)</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
              <span className="text-stone-500 block">Decision Engine</span>
              <span className="font-bold text-stone-900 mt-0.5 block">Property Intelligence™</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
              <span className="text-stone-500 block">Platform Target</span>
              <span className="font-bold text-stone-900 mt-0.5 block">Township Developer Scale</span>
            </div>
          </motion.div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 2: THE OPPORTUNITY
    ---------------------------------------------------- */
    case 2:
      return (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif">
              A Massive Disconnect in NCR Residential Real Estate
            </h2>
            <p className="text-sm text-stone-600">
              High-value residential plots sit dormant due to operational paralysis, while affluent homebuyers face a severe shortage of turnkey, professionally delivered luxury floors.
            </p>
          </div>

          {/* 3-Step Opportunity Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {/* Box 1: Idle Land */}
            <div className="bg-white p-5 rounded-2xl border-2 border-rose-200 shadow-sm space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-xl bg-rose-50 text-rose-700 border border-rose-200">
                  <Landmark className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono font-bold text-rose-700">SUPPLY DILEMMA</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-serif">Idle & Underutilized Land</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Hundreds of prime residential plots across Gurgaon, Delhi, and Noida are held by investors and families who lack the capital, construction expertise, time, or appetite to self-develop.
              </p>
              <div className="pt-2 text-[11px] text-stone-700 space-y-1">
                <div className="flex items-center gap-1.5 text-rose-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Locked capital value
                </div>
                <div className="flex items-center gap-1.5 text-rose-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Fear of contractor fraud & delays
                </div>
              </div>
            </div>

            {/* Box 2: Arvane Platform */}
            <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50/40 p-5 rounded-2xl border-2 border-amber-400 shadow-md space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-xl bg-amber-100 text-amber-800 border border-amber-300">
                  <Cpu className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-amber-800 font-bold">THE CATALYST</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-serif">Arvane Development Platform</h3>
              <p className="text-xs text-stone-700 leading-relaxed">
                An institutional operating bridge. We evaluate site zoning, provide construction capital, manage architecture & BIM, execute bespoke interiors, and monetize inventory.
              </p>
              <div className="pt-2 text-[11px] text-stone-800 space-y-1 font-mono font-semibold">
                <div className="flex items-center gap-1.5 text-amber-900">
                  <Check className="w-3.5 h-3.5 text-amber-600" /> Asset-light JDA structuring
                </div>
                <div className="flex items-center gap-1.5 text-amber-900">
                  <Check className="w-3.5 h-3.5 text-amber-600" /> Zero upfront land debt
                </div>
              </div>
            </div>

            {/* Box 3: Premium Residential Assets */}
            <div className="bg-white p-5 rounded-2xl border-2 border-emerald-200 shadow-sm space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <Building2 className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono font-bold text-emerald-800">DEMAND REALIZATION</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-serif">Completed Turnkey Homes</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Affluent homebuyers receive architecturally refined, fully finished residential floors with premium MEP, curated interiors, structural warranties, and pristine documentation.
              </p>
              <div className="pt-2 text-[11px] text-stone-700 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Premium price realization
                </div>
                <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Rapid sales velocity
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Opportunity Synthesis */}
          <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E2D5] text-center shadow-2xs">
            <span className="text-xs uppercase font-mono text-stone-500 font-bold tracking-wider block">Strategic Positioning</span>
            <p className="text-sm font-semibold text-stone-900 mt-1 font-serif">
              "Arvane does not speculate on land prices. We unlock trapped equity by acting as the institutional development operator between plot owners and discerning homebuyers."
            </p>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 3: THE PROBLEM — FOR PLOT OWNERS
    ---------------------------------------------------- */
    case 3:
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: The 10 Friction Points */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-rose-700 font-bold">
                  Independent Development Paralysis
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1 font-serif">
                  Why Landowners Avoid Self-Development
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  A high-value plot owner attempting to build independently must coordinate 10 distinct, high-friction operational domains:
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { title: "1. Massive Capital", desc: "₹3–6 Cr direct cash required for construction" },
                  { title: "2. Regulatory Sanctions", desc: "Zoning, FAR approvals, environmental clearances" },
                  { title: "3. Architecture & BIM", desc: "Structural, MEP, and elevation coordination" },
                  { title: "4. Subcontractor Chaos", desc: "Managing 15+ unorganized labor contractors" },
                  { title: "5. Material Procurement", desc: "Cement, steel, Italian marble price volatility" },
                  { title: "6. Quality Supervision", desc: "Daily site engineering & structural audits" },
                  { title: "7. Interior Execution", desc: "Bespoke carpentry, modular kitchens, VRV HVAC" },
                  { title: "8. Sales & Marketing", desc: "Broker management and retail buyer qualification" },
                  { title: "9. Legal Documentation", desc: "Deeds, buyer agreements, occupancy certs" },
                  { title: "10. Time Commitment", desc: "18–24 months of full-time operational stress" }
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-white border border-stone-200 hover:border-amber-300 transition-colors shadow-2xs">
                    <span className="font-semibold text-stone-900 block text-xs">{item.title}</span>
                    <span className="text-[10px] text-stone-600">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: The 2 Binary Choices vs Arvane's Third Option */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] space-y-4 shadow-sm">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-600 block font-bold">
                  Traditional Landowner Options
                </span>

                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs">
                    <span className="font-bold text-stone-800 block">Option A: Hold Idle</span>
                    <p className="text-[11px] text-stone-600 mt-0.5">Zero cashflow, property tax liability, encroaching risks, no value addition.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs">
                    <span className="font-bold text-stone-800 block">Option B: Outright Sale</span>
                    <p className="text-[11px] text-stone-600 mt-0.5">Relinquishes 40–60% development upside and incurs heavy capital gains tax.</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E8E2D5]">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-300 shadow-md">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-amber-800 font-bold block">
                      The Arvane Third Option
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-stone-900 mt-1 leading-tight font-serif">
                      DON'T SELL YOUR PLOT. DEVELOP IT.
                    </h3>
                    <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                      Retain majority ownership in premier completed floors without investing capital, managing contractors, or enduring operational stress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 4: THE PROBLEM — FOR PROPERTY BUYERS
    ---------------------------------------------------- */
    case 4:
      return (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              The Homebuyer Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              Buying an Independent Floor in NCR is Fraught with Risk
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Affluent homebuyers want privacy and independence, but traditional local builder floors present major construction compromises and operational opacity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Unorganized Local Builder Reality */}
            <div className="p-5 rounded-2xl bg-white border-2 border-rose-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-rose-700">
                <AlertCircle className="w-5 h-5" />
                <h3 className="font-bold text-base text-stone-900 font-serif">Conventional Unorganized Builder Floor</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span><strong>Subpar MEP & Waterproofing:</strong> Persistent seepage, low water pressure, and inadequate electrical load calculations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span><strong>Generic Catalogue Interiors:</strong> Low-grade veneer, cheap sanitary fittings, and uncoordinated woodwork.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span><strong>Uncertain Timelines & Approvals:</strong> OCs delayed for years, unclear stilt parking rights, and ambiguous terrace titles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span><strong>Zero Post-Handover Warranty:</strong> Builder disappears immediately after final registry payout.</span>
                </li>
              </ul>
            </div>

            {/* The Arvane Integrated Proposition */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/50 border-2 border-emerald-300 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-emerald-800">
                <CheckCircle2 className="w-5 h-5" />
                <h3 className="font-bold text-base text-stone-900 font-serif">The Arvane Integrated Solution</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-stone-800">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Architect-Led Design:</strong> Curated spatial layouts, high ceilings, natural ventilation, and private lift foyers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Turnkey Designer Interiors:</strong> Italian marble flooring, imported modular kitchens, VRV air conditioning, and smart lighting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Crystal-Clear Ownership:</strong> Sanctioned building plans, clear parking demarcations, and dedicated registry assistance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Institutional Handover:</strong> 12-month defect liability warranty and dedicated customer relationship management.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-300 text-center shadow-2xs">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-800 font-bold">
              Buyer Value Proposition
            </span>
            <div className="text-lg sm:text-xl font-bold text-stone-900 mt-1 font-serif">
              NOT JUST A FLOOR. A PROFESSIONALLY DEVELOPED HOME.
            </div>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 5: ABOUT ARVANE
    ---------------------------------------------------- */
    case 5:
      return (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white border-2 border-amber-200/80 space-y-4 shadow-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Institutional Development Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif pt-1">
              About Arvane: A Specialized Residential Development Operator
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed max-w-4xl">
              Arvane (a brand of Pentagram Housing Promoters Pvt. Ltd.) is being conceived as an NCR-focused residential development company built around an asset-light joint-development model. We identify suitable plots, evaluate zoning potential, structure project-specific partnerships, deploy development capital, execute bespoke construction & interiors, and monetize our allocated inventory.
            </p>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-amber-300 text-amber-950 font-serif text-xs sm:text-sm text-center leading-relaxed font-semibold">
              "We don't buy land blindly. We don't build blindly. We underwrite every property individually."
            </div>
          </div>

          {/* 4 Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
              <span className="text-xs font-mono text-stone-500 font-bold">PILLAR 01</span>
              <h3 className="font-bold text-stone-900 text-sm font-serif">Asset-Light Structure</h3>
              <p className="text-xs text-stone-600">Zero capital locked in speculative land acquisition. 100% capital efficiency.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
              <span className="text-xs font-mono text-stone-500 font-bold">PILLAR 02</span>
              <h3 className="font-bold text-stone-900 text-sm font-serif">Individual Underwriting</h3>
              <p className="text-xs text-stone-600">Every plot treated as an independent investment with customized BOQ and hurdle rates.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
              <span className="text-xs font-mono text-stone-500 font-bold">PILLAR 03</span>
              <h3 className="font-bold text-stone-900 text-sm font-serif">Full-Stack Execution</h3>
              <p className="text-xs text-stone-600">In-house architectural oversight, structural engineering, and curated interior fitments.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
              <span className="text-xs font-mono text-stone-500 font-bold">PILLAR 04</span>
              <h3 className="font-bold text-stone-900 text-sm font-serif">Rapid Capital Rotation</h3>
              <p className="text-xs text-stone-600">12–15 month development and sales cycles enabling rapid compounding of equity.</p>
            </div>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 6: WHAT WE DO
    ---------------------------------------------------- */
    case 6:
      const steps = [
        { num: "01", name: "Land Sourcing", desc: "Algorithmic screening of prime NCR plotted sectors" },
        { num: "02", name: "Property Intelligence", desc: "Zoning, road width, FAR & setback verification" },
        { num: "03", name: "Feasibility", desc: "Cost estimation, margin modeling, IRR hurdle test" },
        { num: "04", name: "Deal Structuring", desc: "Registered Joint Development Agreement (JDA)" },
        { num: "05", name: "Architecture", desc: "Bespoke spatial design, municipal sanction drawings" },
        { num: "06", name: "Construction", desc: "Civil, structural, and MEP execution with daily QC" },
        { num: "07", name: "Interiors", desc: "Italian marble, modular kitchen, smart automation" },
        { num: "08", name: "Marketing", desc: "High-end collateral, digital targeting & CP network" },
        { num: "09", name: "Sales", desc: "Qualified buyer acquisition & legal conveyance" },
        { num: "10", name: "Handover", desc: "OC delivery, registry, & 12-month defect warranty" }
      ];

      return (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                Integrated Development Operator
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1 font-serif">
                The 10-Step Full Development Chain
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-mono">
              Click any step to inspect operational controls
            </span>
          </div>

          {/* Stepper Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {steps.map((step, idx) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  activeStep === idx
                    ? 'bg-amber-500 text-white border-amber-600 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-amber-300 hover:bg-amber-50/50'
                }`}
              >
                <span className="text-[10px] font-mono block opacity-80">{step.num}</span>
                <span className="text-xs font-semibold block leading-tight mt-0.5">{step.name}</span>
              </button>
            ))}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="p-6 rounded-2xl bg-white border-2 border-stone-200/90 shadow-sm flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300 text-xs font-mono font-bold">
                  Phase {steps[activeStep].num} of 10
                </span>
                <h3 className="text-lg font-bold text-stone-900 font-serif">
                  {steps[activeStep].name}
                </h3>
              </div>
              <p className="text-sm text-stone-700">
                {steps[activeStep].desc}
              </p>
              <div className="pt-2 text-xs text-stone-600 space-y-1">
                <p>• Institutional PMO controls enforce milestone sign-offs before proceeding to next phase.</p>
                <p>• Zero reliance on generic third-party main contractors; direct vendor procurement locks in cost savings.</p>
              </div>
            </div>

            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-stone-200 w-full md:w-72 shrink-0 text-xs space-y-2">
              <span className="text-stone-500 block font-mono uppercase text-[10px]">Developer Role</span>
              <div className="font-bold text-amber-800 text-sm">Integrated Operator</div>
              <span className="text-stone-600 block text-[11px]">
                Eliminating layers of contractor margins to capture full-chain development value.
              </span>
            </div>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 7: OUR WORKING MODEL
    ---------------------------------------------------- */
    case 7:
      return (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 shadow-2xs">
              Joint Development Agreement (JDA) Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight font-serif pt-1">
              Our Asset-Light Partnership Structure
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              A collaborative model where the landowner contributes development rights and Arvane delivers capital, execution, and sales.
            </p>
          </div>

          {/* Interactive SVG Working Model Diagram with Hover / Tap highlights */}
          <InteractiveWorkingModelDiagram />

          {/* Allocation Philosophy Notice */}
          <div className="p-5 rounded-2xl bg-white border-2 border-amber-200/80 shadow-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-mono tracking-wider text-amber-800 font-bold flex items-center gap-1.5">
                <span>⚡</span> Flexible Entitlement Structuring
              </span>
              <span className="text-xs text-stone-600 font-mono font-semibold bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                3:1 • 2:2 • Revenue Sharing
              </span>
            </div>
            <p className="text-sm font-bold text-stone-900 font-serif">
              "3:1 is NOT a universal formula. Every plot is negotiated based on individual financial underwriting."
            </p>
            <p className="text-xs text-stone-600 leading-relaxed">
              Allocations adapt based on: Land benchmark value, plot size, road width, permissible FAR, construction specification, target sales price, financing cost, and required developer IRR hurdles.
            </p>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 8: WHY EVERY PROJECT IS DIFFERENT
    ---------------------------------------------------- */
    case 8:
      return (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              NCR Micro-Market Dynamics
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              Why Every Project Is Underwritten Individually
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              A 180 sq yd plot in Noida has completely different economics from 500 sq yd in DLF Phase 1.
            </p>
          </div>

          {/* 4 Micro-Market Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white border-2 border-amber-200 space-y-2 shadow-2xs">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-amber-800 font-bold">DLF Phase 1</span>
                <span className="text-[10px] bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded text-amber-900 font-semibold">500 sq yd</span>
              </div>
              <div className="text-xs space-y-1 pt-1 text-stone-700">
                <p>• Land Benchmark: <strong>₹4.5L/sq yd</strong></p>
                <p>• Target Price: <strong>₹22,000/sq ft</strong></p>
                <p>• Structure: <strong>3:1 (Owner 3 : Arvane 1)</strong></p>
                <p>• Focus: <strong>Ultra-Luxury Specifications</strong></p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-stone-800 font-bold">Gurgaon Sec 57</span>
                <span className="text-[10px] bg-stone-100 border border-stone-200 px-1.5 py-0.5 rounded text-stone-700 font-semibold">250 sq yd</span>
              </div>
              <div className="text-xs space-y-1 pt-1 text-stone-700">
                <p>• Land Benchmark: <strong>₹2.8L/sq yd</strong></p>
                <p>• Target Price: <strong>₹15,200/sq ft</strong></p>
                <p>• Structure: <strong>2:2 (Owner 2 : Arvane 2)</strong></p>
                <p>• Focus: <strong>Premium+ Modern Aesthetics</strong></p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-stone-800 font-bold">New Gurgaon</span>
                <span className="text-[10px] bg-stone-100 border border-stone-200 px-1.5 py-0.5 rounded text-stone-700 font-semibold">300 sq yd</span>
              </div>
              <div className="text-xs space-y-1 pt-1 text-stone-700">
                <p>• Land Benchmark: <strong>₹1.8L/sq yd</strong></p>
                <p>• Target Price: <strong>₹11,000/sq ft</strong></p>
                <p>• Structure: <strong>2:2 (Owner 2 : Arvane 2)</strong></p>
                <p>• Focus: <strong>Optimized Construction BOQ</strong></p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-stone-800 font-bold">Noida Sector 50</span>
                <span className="text-[10px] bg-stone-100 border border-stone-200 px-1.5 py-0.5 rounded text-stone-700 font-semibold">200 sq yd</span>
              </div>
              <div className="text-xs space-y-1 pt-1 text-stone-700">
                <p>• Land Benchmark: <strong>₹2.2L/sq yd</strong></p>
                <p>• Target Price: <strong>₹15,200/sq ft</strong></p>
                <p>• Structure: <strong>2:2 (Owner 2 : Arvane 2)</strong></p>
                <p>• Focus: <strong>Turnkey Redevelopment</strong></p>
              </div>
            </div>
          </div>

          {/* 16 Variables Matrix */}
          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] text-center shadow-2xs">
            <span className="text-xs uppercase font-mono text-stone-600 font-bold block">16 Site-Specific Project Variables</span>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-[11px] text-stone-700">
              {["Plot Size", "Location", "Road Width", "Authority Bylaws", "FAR/FRA", "Ground Coverage", "Setbacks", "Permissible Height", "Parking Ratio", "Permissible Floors", "Floor Plate", "Total Dev Area", "Market Selling Price", "Construction Spec", "Finance Cost", "Sales Velocity"].map((v, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-white border border-stone-200 text-stone-800 shadow-2xs">
                  {v}
                </span>
              ))}
            </div>
            <div className="text-base sm:text-lg font-bold text-amber-900 mt-3 font-serif">
              ONE COMPANY MODEL. INDIVIDUAL PROJECT ECONOMICS.
            </div>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 9: ARVANE DEVELOPMENT INTELLIGENCE ENGINE™
    ---------------------------------------------------- */
    case 9:
      return (
        <div className="space-y-4">
          <DevelopmentIntelligenceEngine inline={true} onNavigateSlide={onNavigateSlide} />
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 10: OUR PRODUCT
    ---------------------------------------------------- */
    case 10:
      return (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Product Segmentation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              Build for the Market, Not for a Standard BOQ
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              We engineer three distinct product tiers calibrated to the demographic affluence and resale velocity of each micro-market.
            </p>
          </div>

          {/* Tier Switcher Buttons */}
          <div className="flex justify-center gap-3">
            {[
              { id: 'ultra', name: 'Ultra-Luxury Residences', loc: 'DLF Ph 1 / Golf Course Rd' },
              { id: 'luxury', name: 'Luxury Builder Floors', loc: 'Sec 57 / Sushant Lok' },
              { id: 'premium', name: 'Premium Builder Floors', loc: 'New Gurgaon / Noida' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTier(t.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  activeTier === t.id
                    ? 'bg-amber-500 text-white border-amber-600 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                <div>{t.name}</div>
                <div className="text-[10px] opacity-80">{t.loc}</div>
              </button>
            ))}
          </div>

          {/* Tier Details Card */}
          <div className="p-6 rounded-2xl bg-white border-2 border-stone-200/90 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-stone-500 uppercase font-bold">Architecture & Elevation</span>
              <h4 className="font-bold text-stone-900 text-base font-serif">
                {activeTier === 'ultra' ? 'Modern Minimalist Stone & Glass' : activeTier === 'luxury' ? 'Contemporary Louvered Facade' : 'Clean Modernist Brick & Render'}
              </h4>
              <p className="text-xs text-stone-600">
                {activeTier === 'ultra' 
                  ? 'Double-height entrance lobby, high-performance DGU glass, bespoke metal jaalis, and private elevator landing.'
                  : activeTier === 'luxury'
                  ? 'Curated texture paint, aluminum fins, double-glazed windows, and automated garage access.'
                  : 'Durable weather-proof finishes, wide balconies, and designated stilt parking bays.'}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-stone-500 uppercase font-bold">Interior Specifications</span>
              <h4 className="font-bold text-stone-900 text-base font-serif">
                {activeTier === 'ultra' ? 'Imported Italian Marble & VRV' : activeTier === 'luxury' ? 'Engineered Wood & Large Format GVT' : 'Premium Vitrified & Branded Joinery'}
              </h4>
              <p className="text-xs text-stone-600">
                {activeTier === 'ultra'
                  ? 'Imported Statuario marble, German hardware (Hafele/Blum), fully ducted VRV AC, and modular German kitchen.'
                  : activeTier === 'luxury'
                  ? 'Italian marble in living, wooden flooring in master bed, split AC provisions, and sleek modular joinery.'
                  : 'Large format tiles, high-grade UPVC sliding doors, branded sanitary ware, and false ceilings.'}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-stone-500 uppercase font-bold">Target Economics</span>
              <h4 className="font-bold text-amber-800 text-base font-mono">
                {activeTier === 'ultra' ? '₹20,000 – 26,000 / sq ft' : activeTier === 'luxury' ? '₹14,000 – 18,000 / sq ft' : '₹10,000 – 13,000 / sq ft'}
              </h4>
              <p className="text-xs text-stone-600">
                {activeTier === 'ultra'
                  ? 'Targeting HNIs, founders, and CXOs. Construction + interior budget: ~₹4,500/sq ft.'
                  : activeTier === 'luxury'
                  ? 'Targeting senior corporate executives. Construction + interior budget: ~₹3,700/sq ft.'
                  : 'Targeting upwardly mobile professionals. Construction + interior budget: ~₹3,100/sq ft.'}
              </p>
            </div>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 11: REVENUE MODEL
    ---------------------------------------------------- */
    case 11:
      return (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Multi-Tier Monetization
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              Diversified Revenue Architecture
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Capturing value across developer inventory sales, construction management margins, and institutional co-development platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary Revenue */}
            <div className="p-5 rounded-2xl bg-white border-2 border-amber-200 space-y-3 shadow-sm">
              <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 border border-amber-300 text-xs font-mono font-bold">
                PRIMARY REVENUE
              </span>
              <h3 className="text-base font-bold text-stone-900 font-serif">Developer's Share of Inventory</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Arvane monetizes the floors allocated to the company under the JDA (e.g. 1 floor in DLF Phase 1 = ~₹8.32 Cr revenue; 2 floors in Sec 57 = ~₹5.48 Cr).
              </p>
              <div className="pt-2 text-[11px] text-amber-900 font-mono font-semibold">
                • 100% direct capture of development margin
              </div>
            </div>

            {/* Secondary Revenue */}
            <div className="p-5 rounded-2xl bg-white border-2 border-emerald-200 space-y-3 shadow-sm">
              <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-mono font-bold">
                SECONDARY REVENUE
              </span>
              <h3 className="text-base font-bold text-stone-900 font-serif">Execution & Management Margins</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                In-house architectural, MEP, and interior execution captures integrated contractor margins that would otherwise leak to external third parties.
              </p>
              <div className="pt-2 text-[11px] text-emerald-900 font-mono font-semibold">
                • 10–15% integrated procurement savings
              </div>
            </div>

            {/* Future Revenue */}
            <div className="p-5 rounded-2xl bg-white border-2 border-purple-200 space-y-3 shadow-sm">
              <span className="px-2.5 py-1 rounded bg-purple-100 text-purple-800 border border-purple-300 text-xs font-mono font-bold">
                FUTURE REVENUE
              </span>
              <h3 className="text-base font-bold text-stone-900 font-serif">Institutional Co-Development</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                As scale increases, Arvane acts as a dedicated development operator for township developers and institutional capital partners on fee + promote structures.
              </p>
              <div className="pt-2 text-[11px] text-purple-900 font-mono font-semibold">
                • Asset-management & promote economics
              </div>
            </div>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 12: HYPOTHETICAL PROJECT EXAMPLE (DLF PH 1)
    ---------------------------------------------------- */
    case 12:
      return (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Unit Economics Deep-Dive
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1 font-serif">
                Hypothetical Project Example: DLF Phase 1, Gurgaon
              </h2>
            </div>
            <span className="text-[11px] text-amber-900 font-mono font-bold px-3 py-1 rounded-full bg-amber-100 border border-amber-300">
              500 sq yd • 3:1 Floor Structure
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Table & Assumptions (7 cols) */}
            <div className="lg:col-span-7 bg-white p-5 rounded-2xl border-2 border-stone-200/90 space-y-3 shadow-sm">
              <div className="flex justify-between items-center text-xs pb-2 border-b border-stone-200">
                <span className="font-mono text-stone-500 uppercase font-bold">Underwriting Assumption</span>
                <span className="font-mono text-amber-800 font-bold">Metric / Value</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">Plot Size</span>
                  <span className="font-mono text-stone-900 font-semibold">500 sq yd (4,500 sq ft land)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">Illustrative Land Benchmark</span>
                  <span className="font-mono text-stone-900 font-semibold">₹4.5 Lakh / sq yd</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">Indicative Plot Value</span>
                  <span className="font-mono text-amber-800 font-bold">₹22.50 Crore</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">Assumed Saleable Floors</span>
                  <span className="font-mono text-stone-900 font-semibold">4 Floors (Stilt + 4 Configuration)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">Illustrative Floor Plate</span>
                  <span className="font-mono text-stone-900 font-semibold">420 sq yd / 3,780 sq ft per floor</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">Total Illustrative Saleable Area</span>
                  <span className="font-mono text-stone-900 font-bold">15,120 sq ft</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">Ownership Entitlement</span>
                  <span className="font-mono text-emerald-800 font-bold">Landowner: 3 Floors (75%) | Arvane: 1 Floor (25%)</span>
                </div>
              </div>
            </div>

            {/* Financial Output (5 cols) */}
            <div className="lg:col-span-5 bg-white p-5 rounded-2xl border-2 border-stone-200/90 space-y-4 shadow-sm">
              <span className="text-xs uppercase font-mono tracking-wider text-stone-600 block font-bold">
                Project Financial Economics
              </span>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Target Selling Price</span>
                    <span className="font-mono text-stone-900 font-bold">₹22,000 / sq ft</span>
                  </div>
                  <div className="flex justify-between mt-1 text-[11px]">
                    <span className="text-stone-600">Per Floor Market Value</span>
                    <span className="font-mono text-emerald-800 font-bold">₹8.32 Crore</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Arvane Company Revenue (1 Floor)</span>
                    <span className="font-mono text-stone-900 font-bold">₹8.32 Crore</span>
                  </div>
                  <div className="flex justify-between mt-1 text-[11px]">
                    <span className="text-stone-600">Total 4-Floor Construction & Fitout Cost</span>
                    <span className="font-mono text-rose-700 font-bold">-₹6.74 Crore</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 border-2 border-amber-300 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-amber-950 font-bold">Illustrative Project Contribution</span>
                    <span className="font-mono text-amber-900 font-bold text-base">₹1.58 Crore</span>
                  </div>
                  <span className="text-[10px] text-amber-800 block mt-1 font-semibold">
                    ~19.0% Project Contribution Margin on 1st project tier
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200 text-[10px] text-stone-600 italic">
            <strong>MANDATORY DISCLAIMER:</strong> {HYPOTHETICAL_PROJECT_EXAMPLE.disclaimer}
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 13: FOUR-PROJECT HYPOTHETICAL PORTFOLIO
    ---------------------------------------------------- */
    case 13:
      return (
        <div className="space-y-4">
          <FinancialModelExplorer />
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 14: MARGIN PHILOSOPHY
    ---------------------------------------------------- */
    case 14:
      return (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Underwriting Hurdle Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              Project Margin Philosophy: Quality Over Volume
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Arvane targets strict project-level economic hurdles rather than chasing reckless top-line expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border-2 border-amber-200 space-y-2 shadow-sm">
              <span className="text-xs font-mono text-amber-800 uppercase font-bold">Target Contribution</span>
              <div className="text-3xl font-bold text-amber-900 font-mono">25% – 35%</div>
              <p className="text-xs text-stone-600">
                Blended project-level contribution margin required across all approved JDA acquisitions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border-2 border-emerald-200 space-y-2 shadow-sm">
              <span className="text-xs font-mono text-emerald-800 uppercase font-bold">Target Project IRR</span>
              <div className="text-3xl font-bold text-emerald-800 font-mono">28% – 36%</div>
              <p className="text-xs text-stone-600">
                Annualized project IRR achieved through 12–15 month rapid construction & sales cycles.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border-2 border-sky-200 space-y-2 shadow-sm">
              <span className="text-xs font-mono text-sky-800 uppercase font-bold">Downside Protection</span>
              <div className="text-3xl font-bold text-sky-800 font-mono">15% Cushion</div>
              <p className="text-xs text-stone-600">
                Stress-tested against 15% market price softening to ensure capital safety.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 text-center space-y-2 shadow-md">
            <h3 className="text-xl sm:text-2xl font-extrabold text-amber-950 font-serif tracking-wide">
              WE DON'T TAKE EVERY PROJECT. WE TAKE THE RIGHT PROJECTS.
            </h3>
            <p className="text-xs text-stone-700 max-w-2xl mx-auto">
              If a plot cannot generate our minimum 20% contribution margin under conservative sales price benchmarks, we negotiate a higher floor allocation (e.g. 2:2) or reject the deal.
            </p>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 15: EBITDA MODEL
    ---------------------------------------------------- */
    case 15:
      return (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Hypothetical Corporate P&L Waterfall
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              EBITDA Model: Lean Corporate Architecture
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              How project-level contribution scales into institutional operating profit with centralized overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white border border-stone-200 text-center shadow-2xs">
              <span className="text-[10px] uppercase font-mono text-stone-500 font-bold block">Company Revenue</span>
              <span className="text-2xl font-bold text-stone-900 font-mono">₹22.95 Cr</span>
              <span className="text-[10px] text-stone-500 block font-semibold">4 Projects Combined</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-emerald-300 text-center shadow-2xs">
              <span className="text-[10px] uppercase font-mono text-emerald-800 font-bold block">Project Contribution</span>
              <span className="text-2xl font-bold text-emerald-800 font-mono">₹7.34 Cr</span>
              <span className="text-[10px] text-emerald-700 block font-semibold">32.0% Blended Margin</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-rose-300 text-center shadow-2xs">
              <span className="text-[10px] uppercase font-mono text-rose-800 font-bold block">Corporate Overhead</span>
              <span className="text-2xl font-bold text-rose-700 font-mono">-₹1.75 Cr</span>
              <span className="text-[10px] text-stone-500 block font-semibold">PMO, Tech, Legal & Ops</span>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border-2 border-amber-400 text-center shadow-2xs">
              <span className="text-[10px] uppercase font-mono text-amber-800 font-bold block">Illustrative EBITDA</span>
              <span className="text-2xl font-bold text-amber-900 font-mono">₹5.59 Cr</span>
              <span className="text-[10px] text-amber-800 font-mono block font-bold">~24.4% EBITDA Margin</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs space-y-2 shadow-2xs">
            <span className="font-bold text-stone-900 block font-serif">Operational EBITDA Drivers:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-700 text-[11px]">
              <div>• Centralized architecture & BIM models reduce per-project design overhead.</div>
              <div>• Direct vendor bulk-supply agreements eliminate contractor markups.</div>
              <div>• Digital landowner acquisition engine lowers customer acquisition cost (CAC).</div>
              <div>• Agile PMO structure ensures zero project administrative bloat.</div>
            </div>
          </div>

          <p className="text-[10px] text-stone-500 italic">
            * HYPOTHETICAL MANAGEMENT PROJECTIONS — NOT HISTORICAL FINANCIAL PERFORMANCE. Actual results will vary based on project velocity, cash collections, and market absorption.
          </p>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 16: WHY THE MODEL CAN BE CAPITAL EFFICIENT
    ---------------------------------------------------- */
    case 16:
      return (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Capital Structure Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              Why the Arvane Model is Capital Efficient
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Deploying capital exclusively into high-velocity value creation rather than illiquid land banks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditional Developer */}
            <div className="p-5 rounded-2xl bg-white border-2 border-rose-200 space-y-4 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-800 font-bold block">
                Traditional Developer Architecture
              </span>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-200 flex justify-between">
                  <span className="text-stone-800 font-medium">1. Buy Land Outright</span>
                  <span className="text-rose-800 font-mono font-bold">Locks 70–80% Capital</span>
                </div>
                <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-200 flex justify-between">
                  <span className="text-stone-800 font-medium">2. Incur Heavy Debt</span>
                  <span className="text-rose-800 font-mono font-bold">High Interest Drag</span>
                </div>
                <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-200 flex justify-between">
                  <span className="text-stone-800 font-medium">3. Slow Approvals</span>
                  <span className="text-rose-800 font-mono font-bold">Trapped Illiquidity</span>
                </div>
                <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-200 flex justify-between">
                  <span className="text-stone-800 font-medium">4. High Leverage Risk</span>
                  <span className="text-rose-800 font-mono font-bold">Vulnerable to Downturn</span>
                </div>
              </div>
            </div>

            {/* Arvane Model */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/50 border-2 border-emerald-300 space-y-4 shadow-md">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold block">
                Arvane Asset-Light Platform
              </span>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white border border-emerald-200 flex justify-between shadow-2xs">
                  <span className="text-stone-900 font-medium">1. Partner with Landowner</span>
                  <span className="text-emerald-800 font-mono font-bold">Zero Land Debt</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-emerald-200 flex justify-between shadow-2xs">
                  <span className="text-stone-900 font-medium">2. Deploy into Construction</span>
                  <span className="text-emerald-800 font-mono font-bold">100% Value Creation</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-emerald-200 flex justify-between shadow-2xs">
                  <span className="text-stone-900 font-medium">3. Pre-Sales & Monetization</span>
                  <span className="text-emerald-800 font-mono font-bold">Fast Capital Inflow</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-emerald-200 flex justify-between shadow-2xs">
                  <span className="text-stone-900 font-medium">4. Recycle Capital</span>
                  <span className="text-amber-800 font-mono font-bold">Compounding Growth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border-2 border-amber-300 text-center font-serif text-base sm:text-lg font-bold text-amber-950 shadow-2xs">
            "WE SEEK TO DEPLOY CAPITAL INTO VALUE CREATION, NOT JUST LAND ACQUISITION."
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 17: GTM: DUAL ACQUISITION ENGINE
    ---------------------------------------------------- */
    case 17:
      return (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Go-To-Market Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              Dual Acquisition Engine: Landowners & Homebuyers
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Connecting non-developing prime plot owners with affluent homebuyers looking for turnkey luxury living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Supply-Side Engine */}
            <div className="p-5 rounded-2xl bg-white border-2 border-amber-200/80 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-800 uppercase font-bold bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  Supply-Side Engine
                </span>
                <span className="text-xs font-serif font-bold text-stone-800">Plot Owners</span>
              </div>
              <h3 className="text-base font-bold text-stone-900 font-serif">
                "Don't Sell Your Plot. Develop It."
              </h3>
              <div className="space-y-2.5 text-xs text-stone-700">
                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
                  <strong className="text-stone-900 block font-serif">1. Direct Plot Registry Outreach:</strong>
                  Targeting vacant plot titles across DLF Phases, Sushant Lok, South City, and prime Noida sectors with bespoke feasibility sheets.
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
                  <strong className="text-stone-900 block font-serif">2. Channel Partner Alliances:</strong>
                  Incentivizing top-tier NCR land brokers with attractive deal-origination fees and exclusive mandates.
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
                  <strong className="text-stone-900 block font-serif">3. High-Conversion Proposition:</strong>
                  Delivers 1.5x–2.0x higher financial value to landowners vs outright distress land sale, with zero construction hassle.
                </div>
              </div>
            </div>

            {/* Demand-Side Engine */}
            <div className="p-5 rounded-2xl bg-white border-2 border-emerald-200/80 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-800 uppercase font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  Demand-Side Engine
                </span>
                <span className="text-xs font-serif font-bold text-stone-800">Luxury Homebuyers</span>
              </div>
              <h3 className="text-base font-bold text-stone-900 font-serif">
                "Arvane Curated Living"
              </h3>
              <div className="space-y-2.5 text-xs text-stone-700">
                <div className="p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <strong className="text-stone-900 block font-serif">1. Curated Architecture & Interiors:</strong>
                  High-ceiling floor plates, Italian marble, VRV air conditioning, smart home automation, and private lift lobbies.
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <strong className="text-stone-900 block font-serif">2. Institutional Transparency:</strong>
                  RERA-aligned contracts, clear OC documentation, and 12-month post-handover builder maintenance warranty.
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <strong className="text-stone-900 block font-serif">3. Affluent Target Segment:</strong>
                  CXOs, doctors, entrepreneurs seeking privacy and independence without builder-floor quality risks (Ticket: ₹4–9 Cr).
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-300 text-center shadow-2xs">
            <span className="text-xs font-mono text-stone-600 uppercase font-bold block">Integrated Network Advantage</span>
            <p className="text-sm font-semibold text-stone-900 mt-0.5 font-serif">
              Landowner trust feeds prime location inventory; homeowner delight accelerates sales velocity and referral capital.
            </p>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 18: THE EVOLUTION OF ARVANE (MASTER ROADMAP)
    ---------------------------------------------------- */
    case 18:
      return <EvolutionRoadmapMaster onNavigateSlide={onNavigateSlide} />;

    /* ----------------------------------------------------
       SLIDE 19: ONE PLATFORM. MULTIPLE STRUCTURES.
    ---------------------------------------------------- */
    case 19:
      return <MultipleStructuresView />;

    /* ----------------------------------------------------
       SLIDE 20: THE CAPITAL FLYWHEEL
    ---------------------------------------------------- */
    case 20:
      return <CapitalFlywheelView />;

    /* ----------------------------------------------------
       SLIDE 21: THE STRATEGIC MOAT
    ---------------------------------------------------- */
    case 21:
      return <StrategicMoatView />;

    /* ----------------------------------------------------
       SLIDE 22: THE TOWNSHIP PARTNERSHIP OPPORTUNITY
    ---------------------------------------------------- */
    case 22:
      return <TownshipOpportunityView />;

    /* ----------------------------------------------------
       SLIDE 23: THE ECONOMIC LOGIC
    ---------------------------------------------------- */
    case 23:
      return <EconomicLogicView />;

    /* ----------------------------------------------------
       SLIDE 24: THE 5-YEAR STRATEGIC EVOLUTION
    ---------------------------------------------------- */
    case 24:
      return <FiveYearEvolutionView />;

    /* ----------------------------------------------------
       SLIDE 25: PLATFORM MANIFESTO
    ---------------------------------------------------- */
    case 25:
      return <PlatformManifestoView onNavigateSlide={onNavigateSlide} />;

    /* ----------------------------------------------------
       SLIDE 26: THE INVESTMENT THESIS
    ---------------------------------------------------- */
    case 26:
      return (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Core Rationale
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              The Arvane Investment Thesis
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Five fundamental market realities supporting our platform investment case.
            </p>
          </div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {[
              { num: "01", statement: "Large land value does not always require land acquisition.", desc: "Asset-light JDA structures unlock development rights on high-value plots without debt burdens." },
              { num: "02", statement: "Underutilized plots can be converted into higher-value residential inventory.", desc: "Unlocking ₹5–15 Cr incremental development value per residential plot across NCR." },
              { num: "03", statement: "Every project can be underwritten independently.", desc: "Rigorous feasibility engines protect capital by guaranteeing 25–35% contribution hurdles." },
              { num: "04", statement: "Integrated construction + interiors captures more of the value chain.", desc: "Eliminating general contractor markups captures full-stack operating margins." },
              { num: "05", statement: "A proven model evolves from individual landowners to institutional township partnerships.", desc: "Scaling from single plots to multi-plot developer mandates creates institutional exit potential." }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-4 hover:border-amber-400 transition-colors shadow-2xs">
                <span className="text-base font-bold font-mono text-amber-800 shrink-0 mt-0.5">{item.num}</span>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-stone-900 font-serif">{item.statement}</h4>
                  <p className="text-xs text-stone-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <div className="text-lg sm:text-xl font-bold text-amber-900 font-serif">
              FROM INDIVIDUAL PLOTS TO A DEVELOPMENT PLATFORM.
            </div>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 27: FUNDING ASK
    ---------------------------------------------------- */
    case 27:
      return (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Strategic Capital Call
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              Funding Ask: ₹7.0 Crore Strategic Growth Capital
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Primary growth equity to scale development working capital, accelerate plot acquisitions, and expand the technology engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 via-amber-100/40 to-orange-50 border-2 border-amber-400 text-center space-y-3 shadow-md">
              <span className="text-xs font-mono text-amber-900 uppercase font-bold tracking-wider">Total Capital Requirement</span>
              <div className="text-4xl sm:text-5xl font-extrabold text-amber-950 font-mono">
                ₹7.0 CR
              </div>
              <div className="inline-block px-3 py-1 bg-amber-200/80 rounded-full text-xs font-bold text-amber-900">
                Asset-Light NCR Development Deployment
              </div>
              <p className="text-xs text-stone-700 leading-relaxed pt-1">
                Progressively deployed across initial NCR boutique luxury projects and continuously recycled as 12–14 month floor sales mature.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-stone-200/90 space-y-3 text-xs shadow-sm">
              <span className="font-bold text-stone-900 text-sm block font-serif">Core Capital Deployment Mandates:</span>
              <ul className="space-y-2.5 text-stone-700">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Development Working Capital (₹3.50 Cr / 50%):</strong> Direct project cashflow bridging & MEP advances.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Construction Mobilisation (₹1.05 Cr / 15%):</strong> Bulk steel/cement contracts & site infrastructure.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Deal Acquisition & Diligence (₹0.55 Cr / 8%):</strong> 30-year title diligence, soil tests & sanctions.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>PMO, Tech, Sales & Reserves (₹1.90 Cr / 27%):</strong> Senior PM team, GIS engine & liquidity cushion.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs text-stone-600 text-center flex flex-wrap items-center justify-center gap-2">
            <span className="font-bold text-amber-900 font-mono">TRANCHE-LINKED DISCIPLINE:</span>
            <span>Capital is drawn in structured tranches linked to verified JDA title registrations and construction milestones.</span>
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 28: INVESTMENT OPPORTUNITY
    ---------------------------------------------------- */
    case 28:
      return (
        <div className="space-y-5">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Proposed Transaction Structure
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              Investment Opportunity: ₹7 Cr for 5% Equity
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              ₹7.0 Crore Growth Capital for 5% Strategic Platform Equity + 10% Priority Profit Sharing until 200% Return (₹14.0 Cr).
            </p>
          </div>

          {/* 3 Core Term Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border-2 border-emerald-400 text-center space-y-2 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-bl-lg">
                PRIMARY ASK
              </div>
              <span className="text-xs font-mono text-emerald-800 uppercase font-bold">Growth Capital Ask</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-mono">₹7.0 CR</div>
              <p className="text-[11px] text-stone-600 font-medium">Deployed into asset-light project working capital, mobilization & pipeline</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border-2 border-amber-400 text-center space-y-2 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-bl-lg">
                PERMANENT
              </div>
              <span className="text-xs font-mono text-amber-800 uppercase font-bold">Strategic Platform Equity</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-950 font-mono">5.0%</div>
              <p className="text-[11px] text-stone-600 font-medium">Permanent platform equity + board observer rights & compounding enterprise upside</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border-2 border-sky-400 text-center space-y-2 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-sky-500 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-bl-lg">
                ACCELERATED PAYBACK
              </div>
              <span className="text-xs font-mono text-sky-800 uppercase font-bold">Profit Sharing Waterfall</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-950 font-mono">10.0%</div>
              <p className="text-[11px] text-stone-600 font-medium">Distributed until 200% return (₹14.0 Cr cash returned) • <strong className="text-sky-900">Open to Structure</strong></p>
            </div>
          </div>

          {/* Open to Profit Sharing Banner */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-sky-50 via-emerald-50/60 to-amber-50 border border-sky-300 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-600 animate-pulse shrink-0"></span>
              <span className="text-xs font-bold text-stone-900 font-serif">
                Open & Flexible on Profit-Sharing Structuring:
              </span>
              <span className="text-xs text-stone-700">
                While our base model proposes 10% profit sharing up to 200% return (₹14 Cr), we are actively open to calibrating the profit-sharing percentage, cashflow waterfall speed, and payback hurdles to align with investor preferences.
              </span>
            </div>
          </div>

          {/* Detailed Dual-Layer Payback & Compounding Framework */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border-2 border-stone-200/90 space-y-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
              <span className="text-xs font-bold font-serif text-stone-900 uppercase tracking-wide">
                Two-Phase Return Architecture: Accelerated Cash Recovery + Perpetual Platform Ownership
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">
                Target MoIC: 2.0x Cash Payout + 5% Platform Equity In Perpetuity
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Phase 1 */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sky-900 font-serif text-sm">PHASE 1: Priority Cash Payback</span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-50 text-sky-800 font-bold border border-sky-200">
                    Up to ₹14.0 Cr (200% Return)
                  </span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Investor receives an ongoing <strong>10% share of net project profits</strong> across active development completions.
                </p>
                <div className="p-2.5 rounded-lg bg-sky-50/70 border border-sky-200 space-y-1 text-[11px] text-stone-700">
                  <div className="flex justify-between">
                    <span>Initial Capital Deployed:</span>
                    <strong className="font-mono text-stone-900">₹7.00 Cr</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>200% Return Milestone:</span>
                    <strong className="font-mono text-emerald-800">₹14.00 Cr Total Cash Payout</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Profit Sharing Status:</span>
                    <span className="text-sky-800 font-semibold">Active until ₹14 Cr payout is achieved</span>
                  </div>
                  <div className="flex justify-between border-t border-sky-200/60 pt-1 mt-1 text-[10px] text-stone-500">
                    <span>Investor Flexibility:</span>
                    <span className="text-sky-900 font-bold">Open to custom waterfall rates</span>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-900 font-serif text-sm">PHASE 2: Perpetual Platform Equity</span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-bold border border-amber-200">
                    5.0% In Perpetuity
                  </span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Once the 200% return (₹14.0 Cr) is returned, the 10% profit sharing concludes. The investor <strong>permanently retains 5.0% equity</strong> in the platform.
                </p>
                <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200 space-y-1 text-[11px] text-stone-700">
                  <div className="flex justify-between">
                    <span>Post-Payback Equity:</span>
                    <strong className="font-mono text-amber-900">5.0% Permanent Holding</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Enterprise Upside:</span>
                    <span className="text-stone-800 font-semibold">Scale-up valuation, dividends & strategic exit</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Investor Governance:</span>
                    <span className="text-stone-800 font-semibold">Board observer seat & audit transparency</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Win-Win Highlights */}
            <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-700 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div>
                <span className="text-emerald-700 font-bold block">1. Early Downside De-Risking</span>
                <span className="text-[11px] text-stone-500">Cashflow distributions return 2.0x capital early</span>
              </div>
              <div className="sm:border-x border-stone-200 sm:px-2">
                <span className="text-amber-700 font-bold block">2. Compounding Upside</span>
                <span className="text-[11px] text-stone-500">5% equity participates in NCR platform expansion</span>
              </div>
              <div>
                <span className="text-sky-700 font-bold block">3. Founder & Investor Alignment</span>
                <span className="text-[11px] text-stone-500">Open & aligned structure based on actual project profit</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-[11px] text-stone-500 text-center">
            <strong>Structuring Note:</strong> Terms are indicative and subject to formal legal due diligence, definitive Shareholders' Agreement (SHA), Share Subscription Agreement (SSA), and board-approved governance charters.
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 29: USE OF FUNDS
    ---------------------------------------------------- */
    case 29:
      return (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Capital Allocation (₹7.0 Cr)
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              Use of Funds: Disciplined Deployment Plan
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Over 65% of capital is deployed directly into income-generating development working capital, subcontractor advances, and material procurement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FUNDING_DETAILS.keyUseBuckets.map((bucket, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border-2 border-stone-200/90 space-y-2 shadow-2xs">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-stone-900 font-serif">{bucket.label}</span>
                  <span className="font-mono text-amber-800 font-bold">{bucket.share}%</span>
                </div>
                <div className="text-base font-bold text-emerald-800 font-mono">{bucket.range}</div>
                <p className="text-[11px] text-stone-600">{bucket.description}</p>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-stone-500 italic text-center">
            * Illustrative allocation across ₹7.0 Crore total round — subject to final project acquisition pipeline and board-approved deployment schedule.
          </p>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 30: KEY RISKS & MITIGATION
    ---------------------------------------------------- */
    case 30:
      return (
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-rose-800 font-bold bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Institutional Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
              Comprehensive Risk Management & Mitigations
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Proactive institutional mitigation frameworks covering regulatory, cost, market, and title risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {RISKS_AND_MITIGATIONS.slice(0, 6).map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border-2 border-stone-200/90 space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-900 text-sm font-serif">{item.risk}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-900 font-semibold">
                    {item.category}
                  </span>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  <strong className="text-emerald-800">Mitigation:</strong> {item.mitigation}
                </p>
              </div>
            ))}
          </div>
        </div>
      );

    /* ----------------------------------------------------
       SLIDE 31: CLOSING SLIDE
    ---------------------------------------------------- */
    case 31:
      return (
        <div className="h-full flex flex-col justify-between py-6 px-4 md:px-12 text-center space-y-8 bg-gradient-to-b from-white via-[#FAF8F5] to-[#F4EDE0]/50 rounded-3xl">
          <div className="space-y-5 my-auto max-w-3xl mx-auto">
            <div className="flex justify-center pb-2">
              <ArvaneLogo variant="full" />
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight font-serif">
                YOUR LAND. OUR DEVELOPMENT. SHARED VALUE.
              </h1>
              <div className="text-lg sm:text-xl font-semibold text-[#C5A265] font-mono tracking-wider">
                PENTAGRAM HOUSING PROMOTERS PVT. LTD.
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 font-mono">
              NCR • Residential Development • Builder Floors • Strategic Partnerships
            </p>

            <div className="p-4 rounded-2xl bg-white border-2 border-amber-300 inline-block shadow-md space-y-1">
              <span className="text-xs text-stone-500 uppercase font-mono font-bold block">Strategic Investment Summary</span>
              <div className="text-lg sm:text-2xl font-extrabold text-amber-950 font-mono">
                ₹7.0 Cr Growth Capital
              </div>
              <div className="text-xs font-semibold text-emerald-800 font-mono">
                5% Strategic Equity + 10% Profit Sharing (Until 200% / ₹14 Cr Return)
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E8E2D5] text-xs text-stone-500 flex flex-wrap items-center justify-between gap-4">
            <span>Confidential & Proprietary • Pentagram Housing Promoters Pvt. Ltd.</span>
            <span>Gurgaon, National Capital Region (NCR), India</span>
          </div>
        </div>
      );

    default:
      return <div className="text-stone-800">Slide {slide.id} Content</div>;
  }
}
