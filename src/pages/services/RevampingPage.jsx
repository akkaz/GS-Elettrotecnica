import React from 'react';
import { Wrench, CheckCircle, ArrowRight, RefreshCw, Shield, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Head } from '@unhead/react';

export default function RevampingPage() {
    const features = [
        {
            title: 'Aggiornamento Tecnologico',
            description: 'Sostituzione di PLC, azionamenti e componenti obsoleti con tecnologie di ultima generazione per garantire reperibilità e assistenza.',
            icon: <RefreshCw className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Messa a Norma',
            description: 'Adeguamento dei macchinari alle attuali normative di sicurezza (Direttiva Macchine), con installazione di ripari e dispositivi di sicurezza.',
            icon: <Shield className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Ottimizzazione Performance',
            description: 'Miglioramento delle prestazioni della macchina, riduzione dei tempi ciclo e aumento della qualità del prodotto finito.',
            icon: <TrendingUp className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Diagnostica Avanzata',
            description: 'Implementazione di sistemi di diagnostica per facilitare la ricerca guasti e ridurre i tempi di fermo macchina.',
            icon: <Zap className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        }
    ];

    return (
        <div className="overflow-hidden bg-white dark:bg-slate-950">
            <Head>
                <title>Revamping Macchinari - GS Elettrotecnica | Ammodernamento Impianti</title>
                <meta name="description" content="Revamping e ammodernamento di macchinari industriali. Adeguamento normativo CE, ottimizzazione performance, efficienza energetica. Nuova vita ai tuoi impianti." />
                <link rel="canonical" href="https://www.elettrotecnicags.it/servizi/revamping" />
            </Head>
            {/* Header */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/machinery-maintenance.webp"
                        alt="Revamping Macchinari"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/50" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-sm font-medium mb-6 backdrop-blur-sm">
                            <Wrench className="w-4 h-4" />
                            <span>Nuova Vita ai Macchinari</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Revamping Macchinari
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
                            Modernizza i tuoi impianti esistenti: aumenta la produttività e la sicurezza senza acquistare nuove macchine.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                Perché sostituire se puoi rinnovare?
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Il revamping (o retrofitting) è una soluzione economica e sostenibile per estendere la vita utile dei macchinari industriali. GS Elettrotecnica interviene sulla parte elettrica ed elettronica, portando i tuoi impianti nel futuro.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Grazie alla nostra esperienza, siamo in grado di intervenire su macchinari di ogni tipo e marca, garantendo risultati eccellenti in termini di affidabilità e performance.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Analisi di fattibilità e costi/benefici',
                                    'Rifacimento completo bordo macchina',
                                    'Nuovo quadro elettrico e software',
                                    'Certificazione CE del nuovo insieme'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
                                    alt="Machinery Maintenance"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs hidden md:block">
                                <div className="text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">-40%</div>
                                <div className="text-slate-600 dark:text-slate-400 font-medium">Costo rispetto al nuovo</div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-800 transition-all group">
                                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/machinery-maintenance.webp')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Valuta il revamping dei tuoi impianti</h2>
                    <p className="text-xl text-slate-300 mb-10">
                        Inviaci i dettagli del tuo macchinario per una valutazione preliminare gratuita.
                    </p>
                    <Link
                        to="/contatti"
                        className="px-10 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 mx-auto group"
                    >
                        Richiedi Valutazione
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
