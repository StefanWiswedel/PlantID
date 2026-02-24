import { Link } from 'react-router-dom';
import type { PlantSpecies } from '../types/plants';
import { SUBCATEGORY_META } from '../types/plants';

interface SpeciesCardProps {
  species: PlantSpecies;
}

/** Colour mappings for subcategory badges */
const BADGE_COLOURS: Record<string, string> = {
  native_broadleaf: 'bg-green-100 text-green-800',
  introduced_broadleaf: 'bg-amber-100 text-amber-800',
  conifer: 'bg-emerald-100 text-emerald-800',
};

export default function SpeciesCard({ species }: SpeciesCardProps) {
  const meta = SUBCATEGORY_META[species.subcategory];
  const badgeColour = BADGE_COLOURS[species.subcategory] ?? 'bg-gray-100 text-gray-800';

  return (
    <Link
      to={`/species/${species.id}`}
      className="block bg-white rounded-xl shadow-sm border border-forest-100
                 hover:shadow-md hover:border-forest-300 transition-all
                 no-underline text-forest-900"
    >
      {/* Placeholder image area */}
      <div className="h-36 bg-gradient-to-br from-forest-100 to-forest-200 rounded-t-xl flex items-center justify-center">
        <span className="text-5xl opacity-60">
          {species.subcategory === 'conifer' ? '🌲' : '🌳'}
        </span>
      </div>

      <div className="p-4">
        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 ${badgeColour}`}>
          {meta?.label ?? species.subcategory}
        </span>

        <h3 className="font-bold text-base leading-tight">{species.commonNameEn}</h3>
        <p className="text-sm text-forest-600 italic">{species.scientificName}</p>
        <p className="text-sm text-forest-500 mt-1">{species.commonNameDa}</p>

        <p className="text-sm text-forest-600 mt-2 line-clamp-2">{species.description}</p>
      </div>
    </Link>
  );
}
