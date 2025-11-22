import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Head } from '@unhead/react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 pt-20">
      <Head>
        <title>404 - Pagina non trovata | GS Elettrotecnica</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <div className="text-9xl font-bold text-brand-600 dark:text-brand-400 mb-4">404</div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Pagina non trovata
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition"
          >
            <Home className="w-5 h-5" />
            Torna alla Home
          </Link>
          <Link
            to="/contatti"
            className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition border border-slate-200 dark:border-slate-700"
          >
            Contattaci
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Link utili:</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link to="/servizi" className="text-brand-600 dark:text-brand-400 hover:underline">Servizi</Link>
            <Link to="/chi-siamo" className="text-brand-600 dark:text-brand-400 hover:underline">Chi Siamo</Link>
            <Link to="/contatti" className="text-brand-600 dark:text-brand-400 hover:underline">Contatti</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
