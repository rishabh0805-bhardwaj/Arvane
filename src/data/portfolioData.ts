import { PortfolioProject } from '../types';

export const HYPOTHETICAL_PROJECT_EXAMPLE = {
  title: "Hypothetical Project Example: DLF Phase 1, Gurgaon",
  location: "DLF Phase 1, Gurgaon",
  plotSizeSqYd: 500,
  landBenchmarkPerSqYd: "₹4.5 Lakh / sq yd",
  indicativeLandValueCr: 22.5,
  assumedSaleableFloors: 4,
  illustrativeFloorPlateSqYd: 420,
  illustrativeFloorPlateSqFt: 3780,
  totalSaleableAreaSqFt: 15120,
  ownershipAllocation: {
    ownerFloors: 3,
    arvaneFloors: 1,
    pentagramFloors: 1,
    ownerPercentage: "75%",
    arvanePercentage: "25%",
    pentagramPercentage: "25%",
  },
  financials: {
    estimatedSellingRatePerSqFt: "₹22,000 / sq ft",
    perFloorValueCr: 8.32,
    grossDevelopmentValueCr: 33.28,
    illustrativeCompanyRevenueCr: 8.32,
    constructionAndInteriorCostTotalCr: 6.74,
    illustrativeProjectContributionCr: 1.58,
    indicativeContributionMargin: "19.0%",
  },
  disclaimer: "ILLUSTRATIVE PROJECT ASSUMPTIONS — NOT A TRANSACTION. Permissible development and actual FAR must be verified against planning regulations."
};

export const FOUR_PROJECT_PORTFOLIO: PortfolioProject[] = [
  {
    id: "dlf-ph1",
    name: "DLF Phase 1, Gurgaon",
    location: "Gurgaon Prime",
    plotSizeSqYd: 500,
    tier: "Ultra-Premium",
    landBenchmarkPerSqYd: "₹4.5 Lakh",
    indicativeLandValue: "₹22.5 Cr",
    floors: 4,
    companyShare: "1 Floor (25%)",
    ownerShare: "3 Floors (75%)",
    saleableAreaSqFt: 15120,
    companyRevenue: 8.32,
    projectContribution: 1.58,
    marginPercent: 19.0,
    highlight: "High land value benchmark, ultra-luxury specification, prime capital recycling speed.",
    keyFactors: ["FAR: 2.64 equivalent", "Ultra-luxury fitments", "Target price: ₹22,000/sq ft", "Stilt + 4 config"]
  },
  {
    id: "new-gurgaon",
    name: "New Gurgaon (Sec 82-95)",
    location: "New Gurgaon Growth Corridor",
    plotSizeSqYd: 300,
    tier: "Premium",
    landBenchmarkPerSqYd: "₹1.8 Lakh",
    indicativeLandValue: "₹5.4 Cr",
    floors: 4,
    companyShare: "2 Floors (50%)",
    ownerShare: "2 Floors (50%)",
    saleableAreaSqFt: 8640,
    companyRevenue: 4.76,
    projectContribution: 1.42,
    marginPercent: 29.8,
    highlight: "Optimized construction BOQ, strong velocity among corporate professionals.",
    keyFactors: ["Balanced 2:2 floor sharing", "High velocity corridor", "Target price: ₹11,000/sq ft", "Fast execution cycle"]
  },
  {
    id: "sec-57",
    name: "Gurgaon Sector 57",
    location: "Golf Course Extension Adjacent",
    plotSizeSqYd: 250,
    tier: "Premium+",
    landBenchmarkPerSqYd: "₹2.8 Lakh",
    indicativeLandValue: "₹7.0 Cr",
    floors: 4,
    companyShare: "2 Floors (50%)",
    ownerShare: "2 Floors (50%)",
    saleableAreaSqFt: 7200,
    companyRevenue: 5.48,
    projectContribution: 2.29,
    marginPercent: 41.8,
    highlight: "High demand micro-market, superior margin profile due to premium pricing.",
    keyFactors: ["2:2 floor allocation", "Close to Genpact / GCER", "Target price: ₹15,200/sq ft", "High margin absorption"]
  },
  {
    id: "noida-sec50",
    name: "Noida Sector 50",
    location: "Central Noida Established Sector",
    plotSizeSqYd: 200,
    tier: "Premium",
    landBenchmarkPerSqYd: "₹2.2 Lakh",
    indicativeLandValue: "₹4.4 Cr",
    floors: 4,
    companyShare: "2 Floors (50%)",
    ownerShare: "2 Floors (50%)",
    saleableAreaSqFt: 5760,
    companyRevenue: 4.38,
    projectContribution: 2.05,
    marginPercent: 46.8,
    highlight: "Strong appetite for independent floors replacing aging standalone bungalows.",
    keyFactors: ["Location-specific premium finishes", "Low vendor friction", "Target price: ₹15,200/sq ft", "Turnkey buyer demand"]
  }
];

export const PORTFOLIO_TOTALS = {
  totalGrossRevenueCr: 22.94,
  totalProjectContributionCr: 7.34,
  weightedMarginPercent: 32.0,
  annualCorporateOverheadCr: 1.75,
  ebitdaCr: 5.59,
  ebitdaMarginPercent: 24.4,
  disclaimer: "HYPOTHETICAL MANAGEMENT MODEL — NOT HISTORICAL PERFORMANCE. Illustrative management projections based on assumed project economics."
};

export const FUNDING_DETAILS = {
  initialCapitalRequirement: "₹7.0 CRORE",
  proposedEquity: "5.0%",
  equityType: "Permanent Strategic Equity",
  profitSharePercent: "10.0%",
  returnThreshold: "200% Return Cap (₹14.0 Cr Total Cash Payout)",
  dealStructureTitle: "5% Equity + 10% Profit Sharing (until 200% Return)",
  valuationNote: "Subject to legal due diligence, definitive SHA/SSA execution, and board governance agreements.",
  keyUseBuckets: [
    { label: "Development Working Capital", range: "₹3.50 Cr", share: 50, icon: "Wallet", description: "Direct project cashflow bridging, vendor & subcontractor advances, MEP mobilisation" },
    { label: "Construction Mobilisation", range: "₹1.05 Cr", share: 15, icon: "Hammer", description: "Long-lead material procurement (steel, cement, stone), site infrastructure" },
    { label: "Deal Execution / Acquisition", range: "₹0.55 Cr", share: 8, icon: "FileText", description: "30-year title diligence, soil/structural audits, JDA registration & statutory sanctions" },
    { label: "Corporate PMO & Operations", range: "₹0.55 Cr", share: 8, icon: "Users", description: "Senior civil engineers, quality assurance auditors, procurement specialists" },
    { label: "Sales, Marketing & Channels", range: "₹0.45 Cr", share: 6, icon: "TrendingUp", description: "Tier-1 broker channel activation, high-net-worth customer targeting & show floors" },
    { label: "Technology & Underwriting Platform", range: "₹0.35 Cr", share: 5, icon: "Cpu", description: "Proprietary Development Intelligence Engine, GIS plot mapping & cost indices" },
    { label: "Contingency & Liquidity Reserve", range: "₹0.55 Cr", share: 8, icon: "ShieldCheck", description: "Unforeseen price fluctuation buffer, approval delay cushion & liquidity hedge" }
  ]
};

export const RISKS_AND_MITIGATIONS = [
  {
    risk: "Regulatory & Planning Approvals",
    category: "Legal & Sanctions",
    severity: "Medium",
    mitigation: "Project-specific legal and planning due diligence before execution. Comprehensive title search and sanctioned FAR verification prior to signing."
  },
  {
    risk: "Construction Cost Overruns",
    category: "Operational",
    severity: "Medium-High",
    mitigation: "Itemized BOQ locking, milestone-linked contractor payments, centralized bulk procurement across NCR pipeline, and 8-10% built-in project contingencies."
  },
  {
    risk: "Sales Velocity & Absorption",
    category: "Market",
    severity: "Medium",
    mitigation: "Pre-launch market price testing, tier-1 channel partner distribution, targeted digital campaigns, and delivering ready-to-move curated luxury interiors."
  },
  {
    risk: "Land Title & Owner Default",
    category: "Structural",
    severity: "High",
    mitigation: "Rigorous 30-year title diligence by tier-1 real-estate legal counsel, registered irrevocable development agreements, and escrow mechanisms for proceeds."
  },
  {
    risk: "Capital & Liquidity Timing",
    category: "Financial",
    severity: "Medium",
    mitigation: "Staggered project acquisition, disciplined capital recycling cycles (12-15 month turnaround per floor), and conservative leverage."
  },
  {
    risk: "Market Price Correction",
    category: "Macro",
    severity: "Medium",
    mitigation: "Conservative underwriting with a 15% price cushion below peak comparables, and stress testing against minimum breakeven selling thresholds."
  },
  {
    risk: "Project Timeline Delays",
    category: "Execution",
    severity: "Medium",
    mitigation: "Centralized PMO oversight, critical path method (CPM) scheduling, penalized vendor SLAs, and weekly quality & progress audits."
  }
];
