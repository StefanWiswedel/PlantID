import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="bg-forest-800 text-white shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline text-white">
          <span className="text-2xl" role="img" aria-label="leaf">
            🌿
          </span>
          <div>
            <h1 className="text-xl font-bold leading-tight">PlantID</h1>
            <p className="text-forest-200 text-xs leading-tight">Sjælland Field Guide</p>
          </div>
        </Link>

        {!isHome && (
          <Link
            to="/"
            className="text-forest-200 hover:text-white text-sm no-underline transition-colors"
          >
            ← All Species
          </Link>
        )}
      </div>
    </header>
  );
}
