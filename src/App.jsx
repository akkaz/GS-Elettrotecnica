import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import SkipLink from './components/SkipLink';
import CookieConsent from './components/CookieConsent';
import WhatsAppButton from './components/WhatsAppButton';
import { AnimatePresence } from 'framer-motion';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ChiSiamoPage = lazy(() => import('./pages/ChiSiamoPage'));
const ServiziPage = lazy(() => import('./pages/ServiziPage'));
const ContattiPage = lazy(() => import('./pages/ContattiPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ImpiantiElettriciPage = lazy(() => import('./pages/services/ImpiantiElettriciPage'));
const AutomazionePage = lazy(() => import('./pages/services/AutomazionePage'));
const QuadriElettriciPage = lazy(() => import('./pages/services/QuadriElettriciPage'));
const EnergieRinnovabiliPage = lazy(() => import('./pages/services/EnergieRinnovabiliPage'));
const RevampingPage = lazy(() => import('./pages/services/RevampingPage'));
const ServiziAggiuntiviPage = lazy(() => import('./pages/services/ServiziAggiuntiviPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamoPage />} />
          <Route path="/servizi" element={<ServiziPage />} />
          <Route path="/contatti" element={<ContattiPage />} />
          <Route path="/faq" element={<FAQPage />} />

          {/* Service Routes */}
          <Route path="/servizi/impianti-elettrici" element={<ImpiantiElettriciPage />} />
          <Route path="/servizi/automazione-industriale" element={<AutomazionePage />} />
          <Route path="/servizi/quadri-elettrici" element={<QuadriElettriciPage />} />
          <Route path="/servizi/energie-rinnovabili" element={<EnergieRinnovabiliPage />} />
          <Route path="/servizi/revamping" element={<RevampingPage />} />
          <Route path="/servizi/servizi-aggiuntivi" element={<ServiziAggiuntiviPage />} />

          {/* Legal Routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand selection:text-white">
          <SkipLink />
          <ScrollToTop />
          <Navigation />
          <main id="main-content">
            <AnimatedRoutes />
          </main>
          <Footer />
          <CookieConsent />
          <WhatsAppButton />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
