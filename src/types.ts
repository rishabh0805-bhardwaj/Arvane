export type SlideChapter = 
  | 'Executive Vision'
  | 'The Opportunity & Problem'
  | 'The Arvane Platform'
  | 'The Pentagram Platform'
  | 'Project Economics & Portfolio'
  | 'Capital Architecture & GTM'
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
  productTier: 'Premium' | 'Luxury' | 'Ultra-Luxury';
  permissibleFloors: number;
  estimatedSalePricePerSqFt: number;
  constructionCostPerSqFt: number;
  interiorCostPerSqFt: number;
  pentagramFloorShare: number;
  arvaneFloorShare?: number;
}

export interface PropertyEngineOutput {
  totalLandValueCr: number;
  grossSaleableAreaSqFt: number;
  floorPlateSqFt: number;
  grossDevelopmentValueCr: number;
  totalConstructionAndInteriorCostCr: number;
  pentagramRevenueCr: number;
  pentagramContributionCr: number;
  arvaneRevenueCr?: number;
  arvaneContributionCr?: number;
  projectMarginPercent: number;
  capitalRequirementCr: number;
  indicativeIRRPercent: number;
  verdict: 'GO' | 'NEGOTIATE' | 'REJECT';
  verdictReason: string;
  riskScore: 'Low' | 'Moderate' | 'High';
}
