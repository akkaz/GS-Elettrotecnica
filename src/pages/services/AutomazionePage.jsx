import React from 'react';
import { Settings, CheckCircle, ArrowRight, Cpu, Monitor, Network, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function AutomazionePage() {
    const features = [
        {
            title: 'Programmazione PLC',
            description: 'Sviluppo software per PLC dei principali brand (Siemens, Allen Bradley, Omron) per il controllo di macchine e processi.',
            icon: <Cpu className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Sistemi HMI & SCADA',
            description: 'Interfacce uomo-macchina intuitive e sistemi di supervisione per il monitoraggio e la gestione degli impianti in tempo reale.',
            icon: <Monitor className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Motion Control',
            description: 'Controllo assi e movimentazione di precisione per macchine automatiche e linee robotizzate.',
            icon: <Settings className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Industria 4.0',
            description: 'Integrazione dei sistemi produttivi con i sistemi gestionali aziendali (MES/ERP) e interconnessione macchinari.',
            icon: <Network className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        }
    ];

    return (
        <div className="overflow-hidden bg-white dark:bg-slate-950">
            <Helmet>
                <title>Automazione Industriale - GS Elettrotecnica | PLC, HMI, SCADA</title>
                <meta name="description" content="Soluzioni avanzate di automazione industriale: programmazione PLC, sistemi HMI/SCADA, motion control e integrazione Industria 4.0. Partner Siemens, Allen Bradley, Omron." />
                <link rel="canonical" href="https://www.elettrotecnicags.it/servizi/automazione-industriale" />
            </Helmet>

            {/* Header */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/automation-plc.png"
                        alt="Automazione Industriale"
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
                            <Settings className="w-4 h-4" />
                            <span>Innovazione e Controllo</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Automazione Industriale
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
                            Soluzioni avanzate per l'automazione di processo e di macchina, per massimizzare l'efficienza produttiva.
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
                                Il cuore pulsante della tua produzione
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                L'automazione industriale è la chiave per competere nel mercato moderno. GS Elettrotecnica progetta e realizza sistemi di automazione su misura, integrando le migliori tecnologie disponibili sul mercato.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Il nostro team di programmatori esperti è in grado di sviluppare software complessi per la gestione di qualsiasi tipo di impianto, garantendo affidabilità, flessibilità e facilità d'uso.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Partnership con Siemens, Allen Bradley, Omron',
                                    'Revamping software di impianti esistenti',
                                    'Teleassistenza e monitoraggio remoto',
                                    'Sviluppo driver di comunicazione personalizzati'
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
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                                    alt="PLC Programming"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs hidden md:block">
                                <div className="text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">100%</div>
                                <div className="text-slate-600 dark:text-slate-400 font-medium">Customizzazione software</div>
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
                <div className="absolute inset-0 bg-[url('/automation-plc.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Vuoi automatizzare la tua produzione?</h2>
                    <p className="text-xl text-slate-300 mb-10">
                        Parla con i nostri esperti per scoprire come ottimizzare i tuoi processi industriali.
                    </p>
                    <Link
                        to="/contatti"
                        className="px-10 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 mx-auto group"
                    >
                        Richiedi Consulenza
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
