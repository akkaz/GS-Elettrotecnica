import React from 'react';
import { Factory, CheckCircle, ArrowRight, Cpu, Shield, FileText, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Head } from '@unhead/react';

export default function QuadriElettriciPage() {
    const features = [
        {
            title: 'Progettazione Elettrica',
            description: 'Utilizzo dei più avanzati software CAD (Eplan, Spac) per la progettazione schemi elettrici e layout quadri.',
            icon: <Wrench className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Cablaggio e Assemblaggio',
            description: 'Realizzazione interna nella nostra officina di 1500mq, con personale altamente specializzato e componenti di qualità.',
            icon: <Cpu className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Collaudo Certificato',
            description: 'Test funzionali e strumentali rigorosi su ogni quadro prodotto, con rilascio delle relative certificazioni di conformità.',
            icon: <FileText className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Quadri di Ogni Tipo',
            description: 'Quadri di distribuzione, Power Center, quadri di automazione, pulpiti di comando e cassette bordo macchina.',
            icon: <Factory className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        }
    ];

    return (
        <div className="overflow-hidden bg-white dark:bg-slate-950">
            <Head>
                <title>Quadri Elettrici - GS Elettrotecnica | Progettazione e Costruzione</title>
                <meta name="description" content="Progettazione e costruzione quadri elettrici su misura. Quadri di comando, distribuzione, automazione. Testing completo e documentazione As-Built." />
                <link rel="canonical" href="https://www.elettrotecnicags.it/servizi/quadri-elettrici" />
            </Head>
            {/* Header */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/automation-plc.webp"
                        alt="Quadri Elettrici"
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
                            <Shield className="w-4 h-4" />
                            <span>Produzione Interna</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Quadri Elettrici
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
                            Progettazione e costruzione di quadri elettrici di distribuzione e automazione, realizzati su misura nella nostra officina.
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
                                Qualità costruttiva senza compromessi
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Il quadro elettrico è il cervello e il cuore pulsante di ogni impianto. Per questo motivo, GS Elettrotecnica cura internamente ogni fase della sua realizzazione, garantendo il massimo controllo sulla qualità.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                La nostra officina attrezzata ci permette di assemblare quadri di grandi dimensioni e complessità, rispettando rigorosamente le specifiche del cliente e le normative internazionali.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Rispetto delle normative CEI EN 61439',
                                    'Componentistica dei migliori brand (Schneider, ABB, Siemens)',
                                    'Etichettatura e siglatura completa',
                                    'Documentazione tecnica As-Built dettagliata'
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
                                    src="https://images.unsplash.com/photo-1563770095-39d468f95742?auto=format&fit=crop&q=80"
                                    alt="Electrical Panel Wiring"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs hidden md:block">
                                <div className="text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">1500m²</div>
                                <div className="text-slate-600 dark:text-slate-400 font-medium">Officina di produzione</div>
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
                <div className="absolute inset-0 bg-[url('/automation-plc.webp')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Cerchi un partner per la quadristica?</h2>
                    <p className="text-xl text-slate-300 mb-10">
                        Richiedi un preventivo per la realizzazione dei tuoi quadri elettrici.
                    </p>
                    <Link
                        to="/contatti"
                        className="px-10 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 mx-auto group"
                    >
                        Richiedi Progetto
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
