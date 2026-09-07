export type SlideChapter = 
  | 'Executive Vision'
  | 'The Opportunity & Problem'
  | 'The Arvane Platform'
  | 'The Pentagram Platform'
  | 'Project Economics & Portfolio'
  | 'Capital Architecture & GTM'
  | 'The Evolution of Arvane'
  | 'Scale & Township Partnerships'
  | 'The Investment Proposition';

export interface SlideData {
  id: number;
  slug: string;
  chapter: SlideChapter;
  title: string;
  tagline?: string;
  subtitle?: string;
  categoryBadge: string;
  highlightText?: string;
  disclaimerRequired?: boolean;
  speakerNotes: {
    keyPoint: string;
    talkingPoints: string[];
    investorQAndA?: string;
  };
}

export interface PortfolioProject {
  id: string;
  name: string;
  location: string;
  plotSizeSqYd: number;
  tier: 'Ultra-Premium' | 'Premium+' | 'Premium';
  landBenchmarkPerSqYd: string;
  indicativeLandValue: string;
  floors: number;
  companyShare: string;
  ownerShare: string;
  saleableAreaSqFt: number;
  companyRevenue: number; // in Crores
  projectContribution: number; // in Crores
  marginPercent: number;
  highlight: string;
  keyFactors: string[];
}

export interface PropertyEngineInput {
  microMarket: string;
  plotSizeSqYd: number;
  landBenchmarkPerSqYd: number; // in Lakhs
  historicalPurchasePricePerSqYd?: number; // in Lakhs
  acquisitionYear?: number;
  ownerDesiredLandValueCr?: number;
  productTier: 'Premium' | 'Luxury' | 'Ultra-Luxury';
  permissibleFloors: number;
  estimatedSalePricePerSqFt: number;
  constructionCostPerSqFt: number;
  interiorCostPerSqFt: number;
  otherCostsPercent?: number;
  pentagramFloorShare: number;
  arvaneFloorShare?: number;
}

export interface PropertyEngineOutput {
  totalLandValueCr: number;
  historicalCostBasisCr?: number;
  ownerDesiredValueCr?: number;
  marketSupportedLandValueCr?: number;
  maxViableLandConsiderationCr?: number;
  grossSaleableAreaSqFt: number;
  floorPlateSqFt: number;
  grossDevelopmentValueCr: number;
  totalConstructionAndInteriorCostCr: number;
  otherProjectCostsCr?: number;
  totalProjectCostCr?: number;
  pentagramRevenueCr: number;
  pentagramContributionCr: number;
  arvaneRevenueCr?: number;
  arvaneContributionCr?: number;
  projectMarginPercent: number;
  minRequiredSellingPricePerSqFt?: number;
  capitalRequirementCr: number;
  indicativeIRRPercent: number;
  indicativeROCEPercent?: number;
  estimatedSalesVelocityMonths?: number;
  dealScore?: number;
  verdict: 'GO' | 'NEGOTIATE' | 'REJECT';
  verdictReason: string;
  riskScore: 'Low' | 'Moderate' | 'High';
}

export interface DealStructureOption {
  id: 'option-a' | 'option-b' | 'option-c' | 'option-d' | 'option-e';
  name: string;
  category: string;
  ownerAllocation: string;
  arvaneAllocation: string;
  projectContributionMargin: number;
  arvaneRevenueCr: number;
  capitalRequiredCr: number;
  verdict: 'GO' | 'NEGOTIATE' | 'REJECT';
  rationale: string;
  tradeoffs: string;
}

export interface DealScoreBreakdown {
  category: string;
  score: number;
  maxScore: number;
  metric: string;
  status: 'optimal' | 'moderate' | 'critical';
}
