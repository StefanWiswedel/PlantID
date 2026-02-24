import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SpeciesPage from './pages/SpeciesPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-forest-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/species/:id" element={<SpeciesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
