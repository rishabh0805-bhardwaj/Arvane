import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  RotateCw, 
  Network, 
  Layers, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Landmark, 
  Sparkles,
  ChevronRight,
  PieChart,
  Boxes,
  Users2,
  Calendar,
  Zap,
  Building,
  ArrowUpRight,
  BarChart4
} from 'lucide-react';

/* ------------------------------------------------------------------
   STAGE 1: LANDOWNER PARTNERSHIPS
------------------------------------------------------------------ */
export function StageOneInteractive() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Landowner Contribution", desc: "Contributes residential plot / development rights with zero upfront capital required.", role: "Landowner Asset", icon: Landmark },
    { title: "Arvane Full-Stack Capital & Execution", desc: "Architecture, regulatory underwriting, construction, curated interiors, PM, marketing & sales.", role: "Operator Engine", icon: Building2 },
    { title: "Completed Inventory & Shared Value", desc: "Turnkey luxury floors delivered and monetized at market premium; value split per agreed JDA.", role: "Shared Upside", icon: TrendingUp },
  ];

  return (
    <div className="space-y-4">
      {/* Visual Flowchart */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = activeStep === idx;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                isSelected 
                  ? 'bg-amber-50/90 border-amber-400 shadow-md shadow-amber-500/10' 
                  : 'bg-white border-stone-200 hover:border-amber-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">
                  STEP 0{idx + 1}
                </span>
                <span className="text-[10px] text-stone-500 font-medium">{step.role}</span>
              </div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-stone-900 font-serif">{step.title}</h4>
              </div>
              <p className="text-[11px] text-stone-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Value Engine Outputs Grid */}
      <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono uppercase font-bold text-stone-600">
            Primary Objective: "Prove the Development Engine"
          </span>
          <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
            Approx. Year 0–2 Focus
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-1 text-[11px]">
          {[
            { label: "Track Record", metric: "3–4+ Proof Deals" },
            { label: "Market Intel", metric: "Plot Underwriting" },
            { label: "Construction", metric: "BIM & Subcontractors" },
            { label: "Sales Velocity", metric: "Pre-Sales Cadence" },
            { label: "Landowner Net", metric: "High-Trust Referrals" },
            { label: "Capital Rels", metric: "Recycling Disciplines" },
          ].map((item, i) => (
            <div key={i} className="p-2.5 rounded-lg bg-white border border-stone-200/90 text-center shadow-2xs">
              <div className="text-[10px] text-stone-500 uppercase">{item.label}</div>
              <div className="text-xs font-bold text-stone-900 mt-0.5 font-serif">{item.metric}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   STAGE 2: REPEATABLE DEVELOPMENT ENGINE (~1 deal/month milestone)
------------------------------------------------------------------ */
export function StageTwoInteractive() {
  const [selectedMonth, setSelectedMonth] = useState(6);

  const months = [
    { m: "M1", project: "Golf Course Rd JDA", status: "Design / Regulatory" },
    { m: "M2", project: "Sushant Lok 1 Plot", status: "Underwriting / Title Lock" },
    { m: "M3", project: "DLF Phase 1 JDA", status: "Structure / RCC Launch" },
    { m: "M4", project: "Noida Sec 15A Plot", status: "JDA Registration" },
    { m: "M5", project: "Greater Kailash 2 JDA", status: "Interiors & Joinery" },
    { m: "M6", project: "DLF Phase 2 JDA", status: "Active Pre-Sales" },
    { m: "M7", project: "Golf Course Extn JDA", status: "Excavation & Shoring" },
    { m: "M8", project: "Vasant Vihar JDA", status: "Structure Elevation" },
    { m: "M9", project: "Sushant Lok 2 JDA", status: "Turnkey Finishing" },
    { m: "M10", project: "DLF Phase 4 JDA", status: "OC Ingestion" },
    { m: "M11", project: "South City 1 JDA", status: "Buyer Handover" },
    { m: "M12", project: "Sector 43 JDA", status: "Capital Recycled" },
  ];

  return (
    <div className="space-y-4">
      {/* Milestone Philosophy Banner */}
      <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
        <div>
          <span className="font-bold text-stone-900 font-serif">Operating Milestone: ~1 Quality Development Deal / Month</span>
          <p className="text-[11px] text-stone-600 mt-0.5">
            A strategic operating target representing repeatability, disciplined feasibility, and predictable sales velocity.
          </p>
        </div>
        <span className="text-[10px] font-mono text-amber-900 font-bold bg-white/90 border border-amber-300 px-2.5 py-1 rounded-full whitespace-nowrap shadow-2xs">
          Milestone, Not Rigid Calendar
        </span>
      </div>

      {/* 12-Month Circular Pipeline Visualizer */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
        {months.map((item, idx) => {
          const isSelected = selectedMonth === idx;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedMonth(idx)}
              className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${
                isSelected
                  ? 'bg-amber-100/90 border-amber-500 shadow-md ring-1 ring-amber-400'
                  : 'bg-white border-stone-200 hover:border-amber-300'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono font-bold text-amber-800 mb-1">
                <span>{item.m}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <div className="text-[11px] font-bold text-stone-900 truncate font-serif">{item.project}</div>
              <div className="text-[9px] text-stone-500 truncate mt-0.5">{item.status}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Discipline Attributes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs">
        {[
          { title: "Deal Sourcing", sub: "Proprietary Land Intel" },
          { title: "Feasibility Rigor", sub: "Instant Algorithmic ROI" },
          { title: "Repeatable Build", sub: "Itemized BOQ Locks" },
          { title: "Sales Cadence", sub: "Pre-Sales Pre-Launch" },
          { title: "Capital Velocity", sub: "12-Month Rotation" },
          { title: "Project Margins", sub: "25–35% Contribution" },
        ].map((item, i) => (
          <div key={i} className="p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200">
            <div className="text-[11px] font-bold text-stone-900 font-serif">{item.title}</div>
            <div className="text-[10px] text-stone-500 mt-0.5">{item.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   STAGE 3: SELECTIVE LAND OWNERSHIP / CONTROL
------------------------------------------------------------------ */
export function StageThreeInteractive() {
  const [activeModel, setActiveModel] = useState<'compare' | 'jv' | 'owned'>('compare');

  return (
    <div className="space-y-4">
      {/* Strategic Principle Callout */}
      <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-300 text-xs text-stone-800 text-center">
        <span className="font-bold text-stone-900 font-serif block">
          “ARVANE does not replace the asset-light model. It adds ownership where the economics are superior.”
        </span>
        <p className="text-[11px] text-stone-600 mt-0.5">
          Ownership is added selectively only when risk-adjusted returns justify the capital outlay.
        </p>
      </div>

      {/* Two-Column Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Model A */}
        <div className="p-4 rounded-2xl bg-white border-2 border-stone-200 space-y-3 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded">
              MODEL A • CORE FOUNDATION
            </span>
            <span className="text-xs text-stone-500 font-semibold">Low Balance Sheet</span>
          </div>
          <h3 className="text-sm font-bold text-stone-900 font-serif">Landowner Joint Venture (JDA)</h3>
          <ul className="space-y-1.5 text-xs text-stone-700">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Low upfront land capital requirement</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Shared economic value & floor allocation</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Minimal balance-sheet intensity</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Low downside exposure during market shifts</li>
          </ul>
          <div className="p-2.5 rounded-lg bg-stone-50 text-[11px] text-stone-600 font-mono">
            Best for: High-velocity expansion & rapid geographical diversification.
          </div>
        </div>

        {/* Model B */}
        <div className="p-4 rounded-2xl bg-white border-2 border-amber-300 space-y-3 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase font-bold text-purple-800 bg-purple-100 px-2.5 py-0.5 rounded">
              MODEL B • SELECTIVE EXPANSION
            </span>
            <span className="text-xs text-stone-500 font-semibold">Maximum Retained Upside</span>
          </div>
          <h3 className="text-sm font-bold text-stone-900 font-serif">ARVANE-Owned / Controlled Plot</h3>
          <ul className="space-y-1.5 text-xs text-stone-700">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Higher upfront capital requirement</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Capture 100% of finished development upside</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Greater architectural & timeline control</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Deployed only at highly accretive land prices</li>
          </ul>
          <div className="p-2.5 rounded-lg bg-amber-50/70 text-[11px] text-stone-700 font-mono">
            Best for: Distress acquisitions & prime flagship signature plots.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   STAGE 4: DIRECT TOWNSHIP DEVELOPER PARTNERSHIPS
------------------------------------------------------------------ */
export function StageFourInteractive() {
  const [selectedStructure, setSelectedStructure] = useState(0);

  const structures = [
    {
      code: "STRUCTURE A",
      name: "Preferential Plot Acquisition",
      summary: "Township developer provides selected plots to ARVANE at agreed partner / preferential commercial terms.",
      flow: "ARVANE: Acquire → Develop → Sell",
      counterparty: "Township Developer: Monetizes plot inventory and accelerates sales velocity.",
      badge: "Commercial Efficiency"
    },
    {
      code: "STRUCTURE B",
      name: "Profit-Sharing Development",
      summary: "Township developer contributes plot/land value. ARVANE contributes development capital, design, construction, interiors & sales.",
      flow: "After agreed project costs: Distributable profit shared between parties.",
      counterparty: "Zero operational burden for developer; enhanced yield on land bank.",
      badge: "Shared Upside"
    },
    {
      code: "STRUCTURE C",
      name: "Portfolio Development Partnership",
      summary: "Township developer provides access to a structured portfolio pipeline (10 → 25 → 50 → 100+ plots).",
      flow: "ARVANE becomes the specialized boutique development operator for the entire enclave.",
      counterparty: "Standardized luxury aesthetic lifting entire township valuation.",
      badge: "Institutional Scale"
    }
  ];

  return (
    <div className="space-y-4">
      {/* Top Headline Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs">
        <div>
          <span className="font-bold text-stone-900 font-serif">
            “From sourcing plots individually to accessing entire development pipelines.”
          </span>
          <p className="text-[11px] text-stone-600 mt-0.5">
            Future strategic partnership opportunities with master-planned township developers.
          </p>
        </div>
        <span className="text-[10px] font-mono text-purple-900 font-bold bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full whitespace-nowrap">
          Pipeline Expansion
        </span>
      </div>

      {/* 3 Strategic Partnership Models */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {structures.map((item, idx) => {
          const isSelected = selectedStructure === idx;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              onClick={() => setSelectedStructure(idx)}
              className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                isSelected
                  ? 'bg-purple-50/90 border-purple-400 shadow-md'
                  : 'bg-white border-stone-200 hover:border-purple-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono font-bold text-purple-800">{item.code}</span>
                <span className="text-[9px] bg-purple-100 text-purple-900 px-2 py-0.5 rounded font-medium">{item.badge}</span>
              </div>
              <h4 className="text-xs font-bold text-stone-900 font-serif mb-2">{item.name}</h4>
              <p className="text-[11px] text-stone-600 leading-relaxed mb-3">{item.summary}</p>
              <div className="p-2 rounded-lg bg-white border border-stone-200 text-[10px] font-mono text-stone-700">
                {item.flow}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pipeline Growth Indicator */}
      <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-xs shadow-2xs">
        <span className="text-stone-700 font-medium">Pipeline Progression Metric:</span>
        <div className="flex items-center gap-2 font-mono font-bold text-purple-900 text-xs">
          <span>10 Plots</span>
          <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
          <span>25 Plots</span>
          <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
          <span>50 Plots</span>
          <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="bg-purple-100 px-2 py-0.5 rounded text-purple-950">100+ Plot Pipeline</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   STAGE 5: LARGE-PARCEL / MULTI-PROJECT JVs
------------------------------------------------------------------ */
export function StageFiveInteractive() {
  return (
    <div className="space-y-4">
      <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-300 text-xs text-stone-800 text-center">
        <span className="font-bold text-stone-900 font-serif block">
          “Scale the platform without proportionally scaling land ownership.”
        </span>
        <p className="text-[11px] text-stone-600 mt-0.5">
          Leverage established track record, capital relationships, and execution systems to co-develop larger residential clusters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Visual Parcel Cluster Representation */}
        <div className="p-4 rounded-2xl bg-white border-2 border-stone-200 space-y-3 shadow-2xs">
          <span className="text-[10px] font-mono uppercase font-bold text-stone-500">
            Spatial Evolution: Plot → Cluster
          </span>
          <div className="grid grid-cols-3 gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
            {["Parcel A (12 Floors)", "Parcel B (16 Floors)", "Parcel C (20 Floors)", "Parcel D (12 Floors)", "Central Green Spine", "Parcel E (16 Floors)", "Parcel F (24 Floors)", "Parcel G (16 Floors)", "Parcel H (20 Floors)"].map((parcel, idx) => (
              <div 
                key={idx} 
                className={`p-2 rounded-lg text-[10px] font-mono font-medium border ${
                  idx === 4 
                    ? 'bg-emerald-100 border-emerald-300 text-emerald-900 font-bold' 
                    : 'bg-white border-stone-200 text-stone-700'
                }`}
              >
                {parcel}
              </div>
            ))}
          </div>
          <div className="text-[11px] text-stone-600 text-center">
            Unified architectural design language and shared infrastructure across multi-acre enclaves.
          </div>
        </div>

        {/* Consortium Formats */}
        <div className="p-4 rounded-2xl bg-white border-2 border-stone-200 space-y-2.5 shadow-2xs">
          <span className="text-[10px] font-mono uppercase font-bold text-emerald-800">
            Institutional Consortium Models
          </span>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200">
              <span className="font-bold text-stone-900 block font-serif">1. Landowner + ARVANE JV</span>
              <p className="text-[11px] text-stone-600 mt-0.5">Multi-acre continuous parcel aggregated by family office / institutional landowner.</p>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200">
              <span className="font-bold text-stone-900 block font-serif">2. Developer + ARVANE Co-Development</span>
              <p className="text-[11px] text-stone-600 mt-0.5">Master developer provides land infrastructure; ARVANE executes boutique residential products.</p>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200">
              <span className="font-bold text-stone-900 block font-serif">3. Institutional Capital + ARVANE + Landowner</span>
              <p className="text-[11px] text-stone-600 mt-0.5">Global or domestic real estate fund provides construction tranche; ARVANE manages platform execution.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   STAGE 6: HIGH-RISE / GROUP HOUSING / COMMUNITIES
------------------------------------------------------------------ */
export function StageSixInteractive() {
  return (
    <div className="space-y-4">
      {/* Vision Header */}
      <div className="p-3.5 rounded-xl bg-purple-50/80 border border-purple-300 text-xs text-stone-800 text-center">
        <span className="font-bold text-stone-900 font-serif block">
          “ARVANE becomes the development platform — not necessarily the sole source of project capital.”
        </span>
        <p className="text-[11px] text-stone-600 mt-0.5">
          Illustrative long-term vision: Evolving into group housing, high-rise residential towers, and integrated lifestyle communities.
        </p>
      </div>

      {/* Capital Architecture Equation */}
      <div className="p-4 rounded-2xl bg-white border-2 border-stone-200 shadow-2xs space-y-3">
        <span className="text-[10px] font-mono uppercase font-bold text-purple-800">
          The Capital Formula for Large-Scale Developments
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200">
            <span className="text-[10px] font-mono text-stone-500 block">01. ASSET</span>
            <span className="font-bold text-stone-900 font-serif">Land Contribution</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200">
            <span className="text-[10px] font-mono text-stone-500 block">02. EQUITY</span>
            <span className="font-bold text-stone-900 font-serif">Institutional Capital</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200">
            <span className="text-[10px] font-mono text-stone-500 block">03. LEVERAGE</span>
            <span className="font-bold text-stone-900 font-serif">Project Finance / Debt</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200">
            <span className="text-[10px] font-mono text-stone-500 block">04. CASH FLOW</span>
            <span className="font-bold text-stone-900 font-serif">Customer Collections</span>
          </div>
          <div className="p-2.5 rounded-lg bg-purple-100 border-2 border-purple-300 text-purple-950 font-bold">
            <span className="text-[10px] font-mono text-purple-800 block">05. OPERATOR</span>
            <span className="font-serif">ARVANE Platform</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-200 text-center">
          <span className="text-xs font-mono font-bold text-purple-900 uppercase">
            = SCALABLE LARGE-SCALE RESIDENTIAL COMMUNITY
          </span>
          <p className="text-[11px] text-stone-600 mt-1">
            Multi-tower residences, clubhouse, curated open greens, lifestyle amenities, and boutique retail.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   MAIN 6-STAGE HORIZONTAL ROADMAP COMPONENT (FOR SLIDE 18)
------------------------------------------------------------------ */
export function EvolutionRoadmapMaster() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    { num: "01", name: "Landowner Partnerships", subtitle: "Prove development engine (Year 0–2)", icon: Landmark },
    { num: "02", name: "Repeatable Engine", subtitle: "~1 deal/month milestone", icon: RotateCw },
    { num: "03", name: "Selective Ownership", subtitle: "Add owned plots where accretive", icon: ShieldCheck },
    { num: "04", name: "Township Partnerships", subtitle: "Access 10–100+ plot pipelines", icon: Network },
    { num: "05", name: "Large-Parcel JVs", subtitle: "Multi-project clusters", icon: Layers },
    { num: "06", name: "High-Rise Communities", subtitle: "Long-term platform scale", icon: Building },
  ];

  return (
    <div className="space-y-4">
      {/* 6-Stage Horizontal Stepper */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isSelected = activeStage === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`p-2.5 rounded-xl border text-left transition-all relative overflow-hidden ${
                isSelected
                  ? 'bg-amber-100/90 border-amber-500 shadow-md ring-1 ring-amber-400'
                  : 'bg-white border-stone-200 hover:border-amber-300 hover:bg-amber-50/40'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold text-amber-800">STAGE {stage.num}</span>
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-700' : 'text-stone-400'}`} />
              </div>
              <div className="text-[11px] font-bold text-stone-900 leading-tight font-serif truncate">{stage.name}</div>
              <div className="text-[9px] text-stone-500 truncate mt-0.5">{stage.subtitle}</div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Stage Content Body */}
      <div className="p-4 rounded-2xl bg-white border-2 border-stone-200/90 shadow-sm min-h-[300px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {activeStage === 0 && <StageOneInteractive />}
            {activeStage === 1 && <StageTwoInteractive />}
            {activeStage === 2 && <StageThreeInteractive />}
            {activeStage === 3 && <StageFourInteractive />}
            {activeStage === 4 && <StageFiveInteractive />}
            {activeStage === 5 && <StageSixInteractive />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Strategic Footer Line */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-3 py-2 rounded-xl bg-[#FAF8F5] border border-stone-200 text-[11px] text-stone-600">
        <span>Strategic Principle: <strong>Deal economics determine structure — not the calendar.</strong></span>
        <span className="text-amber-800 font-semibold font-serif">“Prove the engine. Recycle the capital. Expand the opportunity set.”</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   DEDICATED SLIDE 19: ONE PLATFORM. MULTIPLE DEVELOPMENT STRUCTURES.
------------------------------------------------------------------ */
export function MultipleStructuresView() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const structures = [
    {
      num: "01",
      title: "Landowner JV",
      input: "Landowner → Land / Development Rights",
      arvaneRole: "ARVANE → Full-Stack Development + Working Capital",
      salesRole: "ARVANE → Marketing, Pricing & End-Sales",
      economics: "Shared Floor / Revenue Allocation (Asset-Light)",
      badge: "Asset-Light Baseline",
      tagColor: "bg-amber-100 text-amber-900 border-amber-300"
    },
    {
      num: "02",
      title: "ARVANE-Owned Plot",
      input: "ARVANE → Selective Land Purchase / Direct Acquisition",
      arvaneRole: "ARVANE → Land + Full Development Capital",
      salesRole: "ARVANE → 100% Sales & Turnkey Inventory",
      economics: "High Retained Development Margin (Selective Accretive Plots)",
      badge: "Max Upside Capture",
      tagColor: "bg-purple-100 text-purple-900 border-purple-300"
    },
    {
      num: "03",
      title: "Township Partnership",
      input: "Township Developer → Preferential Plot Pipeline (10–100+)",
      arvaneRole: "ARVANE → Dedicated Specialized Development Partner",
      salesRole: "Co-Branded / ARVANE Turnkey Product Sales",
      economics: "Agreed Commercials / Partner Discount / Volume Margin",
      badge: "Pipeline Multiplier",
      tagColor: "bg-sky-100 text-sky-900 border-sky-300"
    },
    {
      num: "04",
      title: "Profit-Sharing JV",
      input: "Strategic Land Partner → Land Benchmark Value",
      arvaneRole: "ARVANE → Capital + Design + Construction + Delivery",
      salesRole: "Joint Marketing & Inventory Monetization",
      economics: "Post-Cost Distributable Net Profit Split",
      badge: "Shared Upside",
      tagColor: "bg-emerald-100 text-emerald-900 border-emerald-300"
    },
    {
      num: "05",
      title: "Large-Scale Consortium JV",
      input: "Landowner / Master Developer + Institutional Capital",
      arvaneRole: "ARVANE → Institutional Development Management Platform",
      salesRole: "Full Commercialization & Lifecycle Asset Management",
      economics: "Development Management Fee + Equity Carried Interest",
      badge: "Institutional Platform",
      tagColor: "bg-orange-100 text-orange-900 border-orange-300"
    }
  ];

  return (
    <div className="space-y-4">
      {/* 5-Structure Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {structures.map((item, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              onClick={() => setSelectedIdx(idx)}
              className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-50/90 border-amber-400 shadow-md ring-1 ring-amber-300'
                  : 'bg-white border-stone-200 hover:border-amber-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-stone-500">FORMAT {item.num}</span>
                  <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${item.tagColor}`}>
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-stone-900 font-serif mb-2">{item.title}</h4>
                <div className="space-y-1.5 text-[10px] text-stone-700">
                  <div className="p-1.5 rounded bg-stone-50 border border-stone-150">
                    <span className="text-stone-400 block font-mono">INPUT:</span>
                    <span className="font-medium text-stone-900">{item.input}</span>
                  </div>
                  <div className="p-1.5 rounded bg-stone-50 border border-stone-150">
                    <span className="text-stone-400 block font-mono">ROLE:</span>
                    <span className="font-medium text-stone-900">{item.arvaneRole}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-stone-200/80 text-[10px] font-mono font-bold text-amber-900">
                {item.economics}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Institutional Takeaway Callout */}
      <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-50 via-white to-amber-50 border-2 border-amber-300 text-center shadow-2xs">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 block">
          Core Operating Principle
        </span>
        <div className="text-base font-bold text-stone-900 mt-0.5 font-serif">
          “Structure follows the economics — not rigid dogma.”
        </div>
        <p className="text-xs text-stone-600 mt-1 max-w-2xl mx-auto">
          ARVANE deploys the optimal transaction structure for each specific asset, protecting balance-sheet agility while maximizing equity returns.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   DEDICATED SLIDE 20: THE CAPITAL FLYWHEEL
------------------------------------------------------------------ */
export function CapitalFlywheelView() {
  const [activeStep, setActiveStep] = useState(0);

  const flywheelSteps = [
    { num: "01", name: "Capital Inflow", desc: "Disciplined growth & working capital committed to pipeline." },
    { num: "02", name: "Project Acquisition", desc: "Underwritten via Property Intelligence Engine™ hurdles." },
    { num: "03", name: "Development & Build", desc: "Integrated design, architecture, BOQ locks & turnkey interiors." },
    { num: "04", name: "Rapid Sales Velocity", desc: "Pre-sales + turnkey handover at premium market rates." },
    { num: "05", name: "Capital Recovery", desc: "100% of deployed capital returned within ~12–14 months." },
    { num: "06", name: "Project Profit", desc: "25–35% contribution margin realized per project." },
    { num: "07", name: "Continuous Reinvestment", desc: "Profits + principal redeployed without idle drag." },
    { num: "08", name: "Larger Pipeline & Scale", desc: "Multi-plot township pipelines & institutional co-developments." }
  ];

  return (
    <div className="space-y-4">
      {/* Center Engine & Orbiting Nodes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
        {/* Left: Flywheel Steps list */}
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {flywheelSteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl border-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-100/90 border-amber-500 shadow-md ring-1 ring-amber-400'
                    : 'bg-white border-stone-200 hover:border-amber-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold text-amber-800">0{idx + 1}</span>
                  <RotateCw className={`w-3 h-3 ${isSelected ? 'text-amber-700 animate-spin' : 'text-stone-400'}`} />
                </div>
                <div className="text-xs font-bold text-stone-900 font-serif leading-tight">{step.name}</div>
                <div className="text-[10px] text-stone-600 mt-1 leading-snug">{step.desc}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Core Flywheel Centerpiece */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 text-white flex flex-col items-center justify-center text-center shadow-xl space-y-3 relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
            <Zap className="w-7 h-7 text-amber-200" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-200 font-bold block">
              Core Engine
            </span>
            <h3 className="text-lg font-bold font-serif">ARVANE DEVELOPMENT ENGINE</h3>
          </div>
          <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-mono font-bold tracking-wider">
            BUILD → SELL → RECYCLE → SCALE
          </div>
          <p className="text-[11px] text-amber-100 leading-relaxed max-w-xs">
            Accelerating capital velocity compounds returns without proportional balance-sheet inflation.
          </p>
        </div>
      </div>

      {/* Flywheel Progression Chain */}
      <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-between text-xs overflow-x-auto gap-2">
        <span className="font-mono text-stone-500 shrink-0 font-bold text-[10px]">THE CHAIN:</span>
        <div className="flex items-center gap-2 text-stone-700 font-mono text-[11px] shrink-0">
          <span>Capital</span> → <span>Acquisition</span> → <span>Development</span> → <span>Sales</span> → <span>Recovery</span> → <span>Reinvestment</span> → <span className="font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">Scaled Opportunities</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   DEDICATED SLIDE 21: THE STRATEGIC MOAT (4 Pillars Convergence)
------------------------------------------------------------------ */
export function StrategicMoatView() {
  const pillars = [
    {
      num: "01",
      title: "PROPERTY INTELLIGENCE",
      subtitle: "Plot-level Feasibility & Underwriting Engine",
      points: ["Algorithmic FAR, zoning & setbacks", "Instant Go / Reject valuation triage", "Margin floor protection (>25% hurdle)"],
      icon: Compass,
      color: "border-amber-300 bg-amber-50/50"
    },
    {
      num: "02",
      title: "EXECUTION ENGINE",
      subtitle: "Full Lifecycle Integrated Delivery",
      points: ["In-house architectural & MEP design", "Locked itemized BOQ contractor procurement", "Bespoke curated turnkey luxury interiors"],
      icon: Building2,
      color: "border-sky-300 bg-sky-50/50"
    },
    {
      num: "03",
      title: "CAPITAL RECYCLING",
      subtitle: "High-Velocity Capital Redeployment",
      points: ["12–14 month capital turnaround cycle", "Continuous profit reinvestment", "Zero debt-fueled land speculation"],
      icon: RotateCw,
      color: "border-emerald-300 bg-emerald-50/50"
    },
    {
      num: "04",
      title: "DEVELOPMENT NETWORK",
      subtitle: "Proprietary Ecosystem of Partners",
      points: ["Landowner referral trust network", "Township developer relationships", "Institutional investors & HNIs"],
      icon: Network,
      color: "border-purple-300 bg-purple-50/50"
    }
  ];

  return (
    <div className="space-y-4">
      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div key={idx} className={`p-4 rounded-2xl border-2 ${p.color} bg-white space-y-2.5 shadow-2xs`}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-stone-500">PILLAR {p.num}</span>
                <div className="w-7 h-7 rounded-lg bg-stone-100 flex items-center justify-center text-stone-700">
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <h4 className="text-xs font-bold text-stone-900 font-serif leading-tight">{p.title}</h4>
              <p className="text-[10px] text-stone-500 font-medium">{p.subtitle}</p>
              <ul className="space-y-1 text-[11px] text-stone-700 pt-1 border-t border-stone-100">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Convergence Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-stone-900 via-[#0B1B2B] to-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl">
        <div className="space-y-0.5 text-center sm:text-left">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
            CONVERGENCE OUTPUT
          </span>
          <h3 className="text-base font-bold font-serif">DEVELOPMENT OPPORTUNITY ACCESS</h3>
          <p className="text-xs text-stone-300">
            Turning fragmented land into a scalable, high-barrier-to-entry institutional development pipeline.
          </p>
        </div>
        <div className="px-4 py-2 bg-amber-500 text-stone-950 font-bold rounded-xl text-xs font-mono whitespace-nowrap shadow-md">
          PROPRIETARY MOAT
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   DEDICATED SLIDE 22: THE TOWNSHIP PARTNERSHIP OPPORTUNITY
------------------------------------------------------------------ */
export function TownshipOpportunityView() {
  const benefits = [
    { title: "Lower Acquisition Friction", desc: "Access clean institutional land without multi-party fragmented disputes." },
    { title: "Faster Project Sourcing", desc: "Underwrite multiple ready-zoned plots under standardized terms." },
    { title: "Prime Micro-Locations", desc: "Located inside secure, master-planned luxury gated communities." },
    { title: "Repeatable Pipeline", desc: "Continuous flow of 10–50+ plots as the developer launches sectors." },
    { title: "Lower CAC for Land", desc: "Eliminate one-off broker commissions and title search duplication." },
    { title: "Superior Planning Visibility", desc: "Standardized dimensions allow modular architectural optimization." },
    { title: "Institutional Credibility", desc: "Co-branding with Tier-1 developer elevates consumer trust." },
    { title: "Profit-Sharing Flexibility", desc: "Option to structure bespoke revenue share or fee-based models." }
  ];

  return (
    <div className="space-y-4">
      {/* Today vs Future Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-white border-2 border-stone-200 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
              TODAY • INDIVIDUAL PLOT SOURCING
            </span>
          </div>
          <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center space-y-1">
            <div className="text-xs font-mono font-bold text-stone-800">
              1 Plot → 1 Development → 1 Transaction
            </div>
            <p className="text-[11px] text-stone-500">
              High search friction, individual landowner negotiation, independent title diligence per deal.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border-2 border-purple-300 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded">
              FUTURE • TOWNSHIP DEVELOPER ALLIANCE
            </span>
          </div>
          <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-200 text-center space-y-1">
            <div className="text-xs font-mono font-bold text-purple-900">
              1 Developer → 10 / 25 / 50 / 100+ Plots → Multi-Project Pipeline
            </div>
            <p className="text-[11px] text-purple-800">
              Institutional relationship, repeatable execution, bulk procurement, and continuous inventory access.
            </p>
          </div>
        </div>
      </div>

      {/* 8 Strategic Benefits Grid */}
      <div className="p-4 rounded-2xl bg-white border-2 border-stone-200/90 space-y-2 shadow-2xs">
        <span className="text-[10px] font-mono uppercase font-bold text-stone-600 block">
          Strategic Advantages Beyond Preferential Pricing
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {benefits.map((b, idx) => (
            <div key={idx} className="p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200">
              <h5 className="text-[11px] font-bold text-stone-900 font-serif leading-tight">{b.title}</h5>
              <p className="text-[10px] text-stone-600 mt-0.5 leading-snug">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-[10px] text-stone-500 italic text-center">
        * Note: Framed as future strategic partnership opportunities; ARVANE does not claim formal active agreements with named developers.
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   DEDICATED SLIDE 23: THE ECONOMIC LOGIC (Three-Sided Value)
------------------------------------------------------------------ */
export function EconomicLogicView() {
  return (
    <div className="space-y-4">
      {/* 3-Sided Network Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Side 1: Township Developer */}
        <div className="p-4 rounded-2xl bg-white border-2 border-sky-200 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase text-sky-800 bg-sky-100 px-2 py-0.5 rounded">
              TOWNSHIP DEVELOPER
            </span>
            <Building2 className="w-4 h-4 text-sky-600" />
          </div>
          <h4 className="text-xs font-bold text-stone-900 font-serif">Monetization & Velocity</h4>
          <ul className="space-y-1.5 text-[11px] text-stone-700">
            <li className="flex items-start gap-1.5"><span className="text-sky-600 font-bold">✓</span> Faster monetization of unsold plot inventory</li>
            <li className="flex items-start gap-1.5"><span className="text-sky-600 font-bold">✓</span> Specialized boutique floor development capability</li>
            <li className="flex items-start gap-1.5"><span className="text-sky-600 font-bold">✓</span> Reduced construction & end-customer management burden</li>
            <li className="flex items-start gap-1.5"><span className="text-sky-600 font-bold">✓</span> Participation in premium finished floor value creation</li>
          </ul>
        </div>

        {/* Center: ARVANE */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-400 space-y-2 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase text-amber-900 bg-amber-200 px-2 py-0.5 rounded">
              ARVANE OPERATOR
            </span>
            <Zap className="w-4 h-4 text-amber-700" />
          </div>
          <h4 className="text-xs font-bold text-stone-900 font-serif">Predictable Land Pipeline</h4>
          <ul className="space-y-1.5 text-[11px] text-stone-800">
            <li className="flex items-start gap-1.5"><span className="text-amber-700 font-bold">✓</span> Scaled access to curated residential plot pipeline</li>
            <li className="flex items-start gap-1.5"><span className="text-amber-700 font-bold">✓</span> Preferential partner economics & zero land debt</li>
            <li className="flex items-start gap-1.5"><span className="text-amber-700 font-bold">✓</span> Drastically lower customer acquisition cost for land</li>
            <li className="flex items-start gap-1.5"><span className="text-amber-700 font-bold">✓</span> Ability to scale without buying land outright</li>
          </ul>
        </div>

        {/* Side 3: Home Buyer */}
        <div className="p-4 rounded-2xl bg-white border-2 border-emerald-200 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
              LUXURY HOMEBUYER
            </span>
            <Users2 className="w-4 h-4 text-emerald-600" />
          </div>
          <h4 className="text-xs font-bold text-stone-900 font-serif">Curated Turnkey Living</h4>
          <ul className="space-y-1.5 text-[11px] text-stone-700">
            <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">✓</span> Professionally designed & vastu-compliant floorplates</li>
            <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">✓</span> Superior structural engineering & curated Italian interiors</li>
            <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">✓</span> Transparent title, OC in hand & 12-month maintenance warranty</li>
            <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">✓</span> Trusted developer brand backed by institutional governance</li>
          </ul>
        </div>
      </div>

      {/* Symbiosis Formula Banner */}
      <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-center text-xs">
        <span className="font-mono text-amber-800 font-bold uppercase text-[10px]">Tripartite Symbiosis:</span>
        <div className="font-serif font-bold text-stone-900 text-sm mt-0.5">
          Township Developer (Plots) ↕ ARVANE (Platform Execution) ↕ Home Buyer (Premium Demand)
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   DEDICATED SLIDE 24: THE 5-YEAR STRATEGIC EVOLUTION
------------------------------------------------------------------ */
export function FiveYearEvolutionView() {
  const [selectedYear, setSelectedYear] = useState(1);

  const years = [
    {
      yr: "YEAR 1",
      deals: "1–2 Projects",
      focus: "Prove Model & Micro-Execution",
      details: ["Complete initial Gurgaon & Delhi proofs", "Establish subcontractor and vendor procurement locks", "Build seed capital and landowner referral relationships"],
      badge: "Proof of Concept"
    },
    {
      yr: "YEAR 2",
      deals: "3–4+ Projects",
      focus: "Repeatability & ~1 Deal/Month Milestone",
      details: ["Target ~1 quality development deal / month as operating milestone", "Standardize algorithmic feasibility triage", "Accelerate sales velocity & 12-month capital rotation"],
      badge: "Operating Cadence"
    },
    {
      yr: "YEAR 3",
      deals: "Selective Ownership",
      focus: "Owned Plots & Institutional Conversations",
      details: ["Add selective plot acquisition where economics are superior", "Maintain asset-light JVs as dominant engine", "Initiate township developer partnership discussions"],
      badge: "Dual-Engine Growth"
    },
    {
      yr: "YEAR 4",
      deals: "Multi-Plot Township Pipelines",
      focus: "Scaled Developer Alliances",
      details: ["Activate 10–25 plot township development mandates", "Establish institutional equity & project finance credit lines", "Expand brand leadership across NCR corridors"],
      badge: "Institutional Scale"
    },
    {
      yr: "YEAR 5+",
      deals: "Large-Parcel / High-Rise JVs",
      focus: "Diversified Residential Platform",
      details: ["Consortium development of multi-acre gated communities", "Illustrative expansion into group housing & high-rise towers", "Pan-India metro replication under the ARVANE platform"],
      badge: "Platform Maturity"
    }
  ];

  return (
    <div className="space-y-4">
      {/* 5-Year Horizontal Roadmap */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {years.map((item, idx) => {
          const isSelected = selectedYear === idx;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              onClick={() => setSelectedYear(idx)}
              className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-50/90 border-amber-400 shadow-md ring-1 ring-amber-300'
                  : 'bg-white border-stone-200 hover:border-amber-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-amber-800">{item.yr}</span>
                  <span className="text-[9px] bg-stone-100 text-stone-700 px-1.5 py-0.5 rounded font-medium">{item.badge}</span>
                </div>
                <div className="text-xs font-bold text-stone-900 font-serif leading-tight">{item.deals}</div>
                <div className="text-[10px] text-stone-600 mt-1 font-medium leading-snug">{item.focus}</div>
              </div>
              <ul className="space-y-1 text-[10px] text-stone-600 mt-3 pt-2 border-t border-stone-100">
                {item.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-1 leading-tight">
                    <span className="text-amber-600">•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200 text-center text-[10px] text-stone-500 italic">
        * Note: All numerical targets and timelines are illustrative strategic objectives rather than guarantees. Execution pace adapts dynamically to micro-market conditions and deal-level underwriting hurdles.
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   DEDICATED SLIDE 25: PLATFORM MANIFESTO
------------------------------------------------------------------ */
export function PlatformManifestoView() {
  const principles = [
    { title: "Start asset-light.", desc: "Partner with landowners to eliminate land acquisition debt." },
    { title: "Prove the model.", desc: "Deliver high-quality execution, rapid sales, and happy landowners." },
    { title: "Recycle capital.", desc: "Extract returns and redeploy capital at high compounding velocity." },
    { title: "Add ownership selectively.", desc: "Acquire land only where risk-adjusted margins are superior." },
    { title: "Partner with larger land platforms.", desc: "Scale through institutional township developer pipelines." },
    { title: "Scale into larger developments.", desc: "Evolve into large-parcel JVs and high-rise communities." }
  ];

  return (
    <div className="space-y-5 text-center max-w-4xl mx-auto">
      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
          Core Strategic Conviction
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif pt-1">
          “We are building a development platform, not a collection of projects.”
        </h2>
      </div>

      {/* 6 Core Statements */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
        {principles.map((item, idx) => (
          <div key={idx} className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1">
            <span className="text-[10px] font-mono text-amber-800 font-bold block">0{idx + 1}. PRINCIPLE</span>
            <h4 className="text-xs font-bold text-stone-900 font-serif">“{item.title}”</h4>
            <p className="text-[11px] text-stone-600 leading-snug">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Final Summary Box */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-stone-900 via-[#0B1B2B] to-stone-900 text-white shadow-xl space-y-2">
        <p className="text-sm sm:text-base font-serif italic text-amber-200 max-w-2xl mx-auto">
          “ARVANE’s long-term advantage is the ability to turn fragmented land opportunities into a repeatable, capital-efficient residential development engine.”
        </p>
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-stone-400 max-w-md mx-auto">
          <span className="font-bold text-white font-serif">ARVANE</span>
          <span className="text-amber-400 font-mono">LAND. DEVELOPED DIFFERENTLY.</span>
          <span>From plots to platform.</span>
        </div>
      </div>
    </div>
  );
}

