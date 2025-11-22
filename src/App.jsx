import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ChiSiamoPage from './pages/ChiSiamoPage';
import ServiziPage from './pages/ServiziPage';
import ContattiPage from './pages/ContattiPage';
import ImpiantiElettriciPage from './pages/services/ImpiantiElettriciPage';
import AutomazionePage from './pages/services/AutomazionePage';
import QuadriElettriciPage from './pages/services/QuadriElettriciPage';
import EnergieRinnovabiliPage from './pages/services/EnergieRinnovabiliPage';
import RevampingPage from './pages/services/RevampingPage';
import ServiziAggiuntiviPage from './pages/services/ServiziAggiuntiviPage';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<ChiSiamoPage />} />
        <Route path="/servizi" element={<ServiziPage />} />
        <Route path="/contatti" element={<ContattiPage />} />

        {/* Service Routes */}
        <Route path="/servizi/impianti-elettrici" element={<ImpiantiElettriciPage />} />
        <Route path="/servizi/automazione-industriale" element={<AutomazionePage />} />
        <Route path="/servizi/quadri-elettrici" element={<QuadriElettriciPage />} />
        <Route path="/servizi/energie-rinnovabili" element={<EnergieRinnovabiliPage />} />
        <Route path="/servizi/revamping" element={<RevampingPage />} />
        <Route path="/servizi/servizi-aggiuntivi" element={<ServiziAggiuntiviPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand selection:text-white">
        <ScrollToTop />
        <Navigation />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
