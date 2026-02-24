import { useState, useMemo } from 'react';
import { PlantSubcategory, SUBCATEGORY_META } from '../types/plants';
import { allSpecies, searchSpecies, uniqueSubcategories } from '../data';
import SearchBar from '../components/SearchBar';
import SubcategoryFilter from '../components/SubcategoryFilter';
import SpeciesCard from '../components/SpeciesCard';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<PlantSubcategory | 'all'>('all');

  const subcategories = useMemo(() => uniqueSubcategories(allSpecies), []);

  const filtered = useMemo(() => {
    let results = query ? searchSpecies(query) : allSpecies;
    if (activeFilter !== 'all') {
      results = results.filter((s) => s.subcategory === activeFilter);
    }
    return results;
  }, [query, activeFilter]);

  const grouped = useMemo(() => {
    const order = activeFilter === 'all' ? subcategories : [activeFilter];
    return order
      .map((sub) => ({
        subcategory: sub,
        species: filtered.filter((s) => s.subcategory === sub),
      }))
      .filter((g) => g.species.length > 0);
  }, [filtered, activeFilter, subcategories]);

  const treeCount = allSpecies.length;

  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <section className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-forest-900 mb-2">
          Trees of Sjælland
        </h2>
        <p className="text-forest-600 max-w-xl mx-auto">
          A field guide to {treeCount} tree species commonly found on Sjælland, Denmark.
          Browse by category or search by name.
        </p>
      </section>

      <div className="space-y-4 mb-8">
        <SearchBar value={query} onChange={setQuery} />
        <SubcategoryFilter
          subcategories={subcategories}
          active={activeFilter}
          onChange={setActiveFilter}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-forest-500">
          <p className="text-lg">No species found matching "{query}"</p>
          <button
            onClick={() => {
              setQuery('');
              setActiveFilter('all');
            }}
            className="mt-4 text-forest-700 underline hover:text-forest-900"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {grouped.map((group) => {
            const meta = SUBCATEGORY_META[group.subcategory];
            return (
              <section key={group.subcategory}>
                <h3 className="text-lg font-semibold text-forest-800 mb-4 border-b border-forest-200 pb-2">
                  {meta?.label ?? group.subcategory}
                  <span className="text-forest-400 font-normal text-sm ml-2">
                    ({group.species.length})
                  </span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.species.map((sp) => (
                    <SpeciesCard key={sp.id} species={sp} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </main>
  );
}
