export interface ServicePackage {
  id: string;
  name: string;
  kw: number;
  suitableFor: string;
  monthlyBillRange: string;
  priceFrom: number;
  panelBrand: string;
  inverterBrand: string;
  warrantyYears: number;
  highlights: string[];
}

export type SystemType = "on-grid" | "off-grid" | "hybrid";

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export type ProductCategory =
  | "panel"
  | "inverter"
  | "battery"
  | "mounting"
  | "kit";

export interface Product {
  id: string;
  category: ProductCategory;
  name: string;
  brand: string;
  spec: string;
  priceLabel: string;
}

export type ProjectType = "residential" | "factory" | "office" | "agriculture";

export interface PortfolioProject {
  id: string;
  title: string;
  type: ProjectType;
  location: string;
  systemKw: number;
  systemType: SystemType;
  savingsPerMonth: string;
  description: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  publishedAt: string;
  readMinutes: number;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  result: string;
}
