import { useParams, Link } from 'react-router-dom';
import { speciesById } from '../data';
import { SUBCATEGORY_META } from '../types/plants';

const BADGE_COLOURS: Record<string, string> = {
  native_broadleaf: 'bg-green-100 text-green-800',
  introduced_broadleaf: 'bg-amber-100 text-amber-800',
  conifer: 'bg-emerald-100 text-emerald-800',
};

export default function SpeciesPage() {
  const { id } = useParams<{ id: string }>();
  const species = id ? speciesById(id) : undefined;

  if (!species) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-forest-900 mb-4">Species not found</h2>
        <Link to="/" className="text-forest-700 underline hover:text-forest-900">
          ← Back to all species
        </Link>
      </main>
    );
  }

  const meta = SUBCATEGORY_META[species.subcategory];
  const badgeColour = BADGE_COLOURS[species.subcategory] ?? 'bg-gray-100 text-gray-800';
  const ident = species.identification;

  return (
    <main className="max-w-3xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-forest-500 mb-4">
        <Link to="/" className="hover:text-forest-700 no-underline">All Species</Link>
        <span className="mx-2">/</span>
        <span className="text-forest-700">{species.commonNameEn}</span>
      </nav>

      {/* Hero area */}
      <div className="bg-gradient-to-br from-forest-100 to-forest-200 rounded-2xl h-48 flex items-center justify-center mb-6">
        <span className="text-7xl opacity-50">
          {species.subcategory === 'conifer' ? '🌲' : '🌳'}
        </span>
      </div>

      {/* Title block */}
      <div className="mb-6">
        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 ${badgeColour}`}>
          {meta?.label ?? species.subcategory}
        </span>
        <h2 className="text-3xl font-bold text-forest-900">{species.commonNameEn}</h2>
        <p className="text-lg text-forest-600 italic">{species.scientificName}</p>
        <p className="text-base text-forest-500">
          {species.commonNameDa} · {species.family}
        </p>
      </div>

      {/* Description */}
      <p className="text-forest-700 leading-relaxed mb-8">{species.description}</p>

      {/* Notes callout */}
      {species.notes && (
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4 mb-8">
          <p className="text-sm font-semibold text-amber-800 mb-1">Note</p>
          <p className="text-sm text-amber-900">{species.notes}</p>
        </div>
      )}

      {/* Identification */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-forest-900 mb-4">Identification</h3>
        <div className="space-y-4">
          <IdField icon="🍃" label="Leaves" text={ident.leaves} />
          <IdField icon="🪵" label="Bark" text={ident.bark} />
          <IdField icon="🌸" label="Flowers" text={ident.flowers} />
          <IdField icon="🫐" label="Fruit / Seeds" text={ident.fruit} />
          <IdField icon="📏" label="Size" text={ident.size} />
          <IdField icon="🔍" label="Distinguishing Features" text={ident.distinguishingFeatures} />
        </div>
      </section>

      {/* Habitat */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-forest-900 mb-2">Habitat on Sjælland</h3>
        <p className="text-forest-700 leading-relaxed">{species.habitat}</p>
      </section>

      {/* Ecology */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-forest-900 mb-2">Ecology</h3>
        <p className="text-forest-700 leading-relaxed">{species.ecology}</p>
      </section>

      {/* Back link */}
      <div className="pt-4 border-t border-forest-200">
        <Link
          to="/"
          className="text-forest-700 hover:text-forest-900 no-underline font-medium"
        >
          ← Back to all species
        </Link>
      </div>
    </main>
  );
}

function IdField({ icon, label, text }: { icon: string; label: string; text: string }) {
  return (
    <div className="bg-white rounded-lg border border-forest-100 p-4">
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
        <div>
          <p className="font-semibold text-forest-800 text-sm mb-1">{label}</p>
          <p className="text-forest-600 text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}
