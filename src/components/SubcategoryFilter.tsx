import { PlantSubcategory, SUBCATEGORY_META } from '../types/plants';

interface SubcategoryFilterProps {
  subcategories: PlantSubcategory[];
  active: PlantSubcategory | 'all';
  onChange: (value: PlantSubcategory | 'all') => void;
}

export default function SubcategoryFilter({ subcategories, active, onChange }: SubcategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          active === 'all'
            ? 'bg-forest-700 text-white shadow-sm'
            : 'bg-white text-forest-700 border border-forest-200 hover:bg-forest-50'
        }`}
      >
        All ({subcategories.length > 0 ? 'Show all' : '–'})
      </button>
      {subcategories.map((sub) => {
        const meta = SUBCATEGORY_META[sub];
        return (
          <button
            key={sub}
            onClick={() => onChange(sub)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === sub
                ? 'bg-forest-700 text-white shadow-sm'
                : 'bg-white text-forest-700 border border-forest-200 hover:bg-forest-50'
            }`}
          >
            {meta?.label ?? sub}
          </button>
        );
      })}
    </div>
  );
}
