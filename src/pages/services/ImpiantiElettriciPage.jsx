import React from 'react';
import { Zap, CheckCircle, ArrowRight, Building, Home, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Head } from '@unhead/react';

export default function ImpiantiElettriciPage() {
    const features = [
        {
            title: 'Impianti Civili',
            description: 'Progettazione e installazione di impianti elettrici per abitazioni, condomini e complessi residenziali, con attenzione al risparmio energetico e alla domotica.',
            icon: <Home className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Impianti Industriali',
            description: 'Soluzioni robuste e affidabili per fabbriche e stabilimenti produttivi. Distribuzione forza motrice, illuminazione industriale e quadri di comando.',
            icon: <Building className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Cabine BT/MT',
            description: 'Installazione e manutenzione di cabine di trasformazione Bassa e Media Tensione, garantendo continuità di servizio e sicurezza.',
            icon: <Zap className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Illuminotecnica',
            description: 'Studi illuminotecnici e installazione di sistemi di illuminazione LED ad alta efficienza per interni ed esterni.',
            icon: <Lightbulb className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        }
    ];

    return (
        <div className="overflow-hidden bg-white dark:bg-slate-950">
            <Head>
                <title>Impiantistica Elettrica - GS Elettrotecnica | Civile e Industriale</title>
                <meta name="description" content="Progettazione, installazione e manutenzione di impianti elettrici civili e industriali. Cabine BT/MT, illuminotecnica, domotica. Certificazione DM 37/08." />
                <link rel="canonical" href="https://www.elettrotecnicags.it/servizi/impianti-elettrici" />
            </Head>
            {/* Header */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/industrial-factory.webp"
                        alt="Impianti Elettrici"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/50" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-sm font-medium mb-4 md:mb-6 backdrop-blur-sm">
                            <Zap className="w-4 h-4" />
                            <span>Civile e Industriale</span>
                        </div>
                        <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6">
                            Impiantistica Elettrica
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed">
                            Progettazione, installazione e manutenzione di impianti elettrici all'avanguardia per ogni settore.
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
                                Soluzioni complete per la gestione dell'energia
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                GS Elettrotecnica offre un servizio completo nel campo dell'impiantistica elettrica. Dalla fase di progettazione alla realizzazione, fino al collaudo e alla manutenzione, seguiamo ogni passo con professionalità e competenza.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Utilizziamo solo materiali di prima qualità e tecnologie innovative per garantire impianti sicuri, efficienti e conformi alle normative vigenti.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Certificazione impianti DM 37/08',
                                    'Manutenzione programmata e preventiva',
                                    'Reperibilità e pronto intervento',
                                    'Domotica e Building Automation (KNX)'
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
                                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80"
                                    alt="Electrical wiring"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs hidden md:block">
                                <div className="text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">30+</div>
                                <div className="text-slate-600 dark:text-slate-400 font-medium">Anni di esperienza nell'installazione</div>
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
                <div className="absolute inset-0 bg-[url('/industrial-factory.webp')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Hai bisogno di un nuovo impianto?</h2>
                    <p className="text-xl text-slate-300 mb-10">
                        Contattaci per un sopralluogo gratuito. Valuteremo insieme la soluzione migliore per le tue esigenze.
                    </p>
                    <Link
                        to="/contatti"
                        className="px-10 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 mx-auto group"
                    >
                        Richiedi Preventivo
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
