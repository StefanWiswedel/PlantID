/** Top-level category — designed to expand beyond trees */
export type PlantCategory = 'tree' | 'shrub' | 'herbaceous' | 'annual';

/** Subcategories within trees */
export type TreeSubcategory =
  | 'native_broadleaf'
  | 'introduced_broadleaf'
  | 'conifer';

/** Generic subcategory string allows future categories to define their own */
export type PlantSubcategory = TreeSubcategory | string;

export interface IdentificationDetails {
  /** Leaf shape, arrangement, margin, colour */
  leaves: string;
  /** Bark colour, texture, how it changes with age */
  bark: string;
  /** Flower description and timing */
  flowers: string;
  /** Fruit/seed description */
  fruit: string;
  /** Typical height and spread */
  size: string;
  /** Key features that distinguish from similar species */
  distinguishingFeatures: string;
}

export interface PlantSpecies {
  /** URL-safe slug, e.g. "fagus-sylvatica" */
  id: string;
  /** English common name */
  commonNameEn: string;
  /** Danish common name */
  commonNameDa: string;
  /** Full binomial, e.g. "Fagus sylvatica" */
  scientificName: string;
  /** Taxonomic family */
  family: string;
  category: PlantCategory;
  subcategory: PlantSubcategory;
  description: string;
  identification: IdentificationDetails;
  /** Where to find it on Sjælland */
  habitat: string;
  /** Ecological role and interactions */
  ecology: string;
  /** Extra notes — e.g. "often a large shrub", "hard to distinguish from…" */
  notes?: string;
  /** Placeholder for future image paths */
  images?: string[];
}

/** Display metadata for subcategories */
export const SUBCATEGORY_META: Record<string, { label: string; labelDa: string; description: string }> = {
  native_broadleaf: {
    label: 'Native Broadleaves',
    labelDa: 'Hjemmehørende løvtræer',
    description: 'Broadleaved trees native to Denmark and Sjælland',
  },
  introduced_broadleaf: {
    label: 'Introduced Broadleaves',
    labelDa: 'Indførte løvtræer',
    description: 'Broadleaved trees introduced and now common in the landscape',
  },
  conifer: {
    label: 'Conifers',
    labelDa: 'Nåletræer',
    description: 'Cone-bearing trees, mostly introduced for forestry',
  },
};

export const CATEGORY_META: Record<PlantCategory, { label: string; labelDa: string }> = {
  tree: { label: 'Trees', labelDa: 'Træer' },
  shrub: { label: 'Shrubs', labelDa: 'Buske' },
  herbaceous: { label: 'Herbaceous', labelDa: 'Urteagtige planter' },
  annual: { label: 'Annuals', labelDa: 'Enårige planter' },
};
