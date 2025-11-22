import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
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
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const pages = {
    home: <HomePage setCurrentPage={setCurrentPage} />,
    'chi-siamo': <ChiSiamoPage setCurrentPage={setCurrentPage} />,
    servizi: <ServiziPage setCurrentPage={setCurrentPage} />,
    contatti: <ContattiPage />,
    'impianti-elettrici': <ImpiantiElettriciPage setCurrentPage={setCurrentPage} />,
    'automazione-industriale': <AutomazionePage setCurrentPage={setCurrentPage} />,
    'quadri-elettrici': <QuadriElettriciPage setCurrentPage={setCurrentPage} />,
    'energie-rinnovabili': <EnergieRinnovabiliPage setCurrentPage={setCurrentPage} />,
    'revamping': <RevampingPage setCurrentPage={setCurrentPage} />,
    'servizi-aggiuntivi': <ServiziAggiuntiviPage setCurrentPage={setCurrentPage} />
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand selection:text-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {pages[currentPage]}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
