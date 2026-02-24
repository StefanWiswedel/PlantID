import { PlantSpecies, PlantCategory, PlantSubcategory } from '../types/plants';
import { trees } from './trees';

/** All species from every category */
export const allSpecies: PlantSpecies[] = [...trees];

/** Get all species for a given category */
export function speciesByCategory(category: PlantCategory): PlantSpecies[] {
  return allSpecies.filter((s) => s.category === category);
}

/** Get all species for a given subcategory */
export function speciesBySubcategory(subcategory: PlantSubcategory): PlantSpecies[] {
  return allSpecies.filter((s) => s.subcategory === subcategory);
}

/** Get a single species by slug id */
export function speciesById(id: string): PlantSpecies | undefined {
  return allSpecies.find((s) => s.id === id);
}

/** Get the unique subcategories present in a list of species (preserving order of first appearance) */
export function uniqueSubcategories(species: PlantSpecies[]): PlantSubcategory[] {
  const seen = new Set<PlantSubcategory>();
  const result: PlantSubcategory[] = [];
  for (const s of species) {
    if (!seen.has(s.subcategory)) {
      seen.add(s.subcategory);
      result.push(s.subcategory);
    }
  }
  return result;
}

/** Simple text search across common names, scientific name, and description */
export function searchSpecies(query: string): PlantSpecies[] {
  const q = query.toLowerCase().trim();
  if (!q) return allSpecies;
  return allSpecies.filter(
    (s) =>
      s.commonNameEn.toLowerCase().includes(q) ||
      s.commonNameDa.toLowerCase().includes(q) ||
      s.scientificName.toLowerCase().includes(q) ||
      s.family.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q),
  );
}
