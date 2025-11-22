import React from 'react';
import { Sun, CheckCircle, ArrowRight, Battery, Zap, BarChart3, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Head } from '@unhead/react';

export default function EnergieRinnovabiliPage() {
    const features = [
        {
            title: 'Impianti Fotovoltaici',
            description: 'Progettazione e installazione chiavi in mano di impianti fotovoltaici industriali e residenziali tramite la nostra divisione Novatech Automation.',
            icon: <Sun className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Sistemi di Accumulo',
            description: 'Integrazione di batterie di accumulo per massimizzare l\'autoconsumo e garantire continuità energetica.',
            icon: <Battery className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Efficienza Energetica',
            description: 'Analisi dei consumi e interventi mirati per ridurre gli sprechi e ottimizzare la spesa energetica aziendale.',
            icon: <BarChart3 className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Sostenibilità',
            description: 'Soluzioni green che riducono l\'impatto ambientale della tua azienda e migliorano la tua immagine corporate.',
            icon: <Leaf className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        }
    ];

    return (
        <div className="overflow-hidden bg-white dark:bg-slate-950">
            <Head>
                <title>Energie Rinnovabili - GS Elettrotecnica | Fotovoltaico e Efficienza Energetica</title>
                <meta name="description" content="Soluzioni per energie rinnovabili: impianti fotovoltaici, sistemi di accumulo, efficienza energetica. Partner Novatech Automation per un futuro sostenibile." />
                <link rel="canonical" href="https://www.elettrotecnicags.it/servizi/energie-rinnovabili" />
            </Head>

            {/* Header */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/solar-panels.webp"
                        alt="Energie Rinnovabili"
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
                            <Sun className="w-4 h-4" />
                            <span>Green Energy</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Energie Rinnovabili
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
                            Investi nel futuro con soluzioni energetiche sostenibili. Riduci i costi e l'impatto ambientale.
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
                                Novatech Automation: La nostra energia verde
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Attraverso la nostra divisione specializzata <strong>Novatech Automation</strong>, offriamo soluzioni complete per il fotovoltaico e l'efficienza energetica.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Ci occupiamo di tutto: dallo studio di fattibilità alla gestione delle pratiche burocratiche, dall'installazione alla manutenzione post-vendita, garantendo il massimo rendimento del tuo investimento.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Gestione pratiche GSE e detrazioni fiscali',
                                    'Monitoraggio remoto delle performance',
                                    'Manutenzione e pulizia pannelli',
                                    'Colonnine di ricarica per veicoli elettrici'
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
                                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80"
                                    alt="Solar Panels"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs hidden md:block">
                                <div className="text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">Green</div>
                                <div className="text-slate-600 dark:text-slate-400 font-medium">Soluzioni sostenibili</div>
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
                <div className="absolute inset-0 bg-[url('/solar-panels.webp')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Passa all'energia pulita</h2>
                    <p className="text-xl text-slate-300 mb-10">
                        Scopri quanto puoi risparmiare con un impianto fotovoltaico su misura.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contatti"
                            className="px-10 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 group"
                        >
                            Richiedi Analisi Energetica
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="http://www.novatechautomation.it/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-lg transition-all border border-white/20 flex items-center justify-center gap-2"
                        >
                            Visita Novatech
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
