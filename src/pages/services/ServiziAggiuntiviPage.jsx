import React from 'react';
import { Shield, CheckCircle, ArrowRight, Headphones, GraduationCap, FileText, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function ServiziAggiuntiviPage() {
    const features = [
        {
            title: 'Manutenzione Programmata',
            description: 'Piani di manutenzione personalizzati per prevenire guasti e garantire la massima efficienza degli impianti nel tempo.',
            icon: <FileText className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Impianti Antincendio',
            description: 'Installazione e manutenzione di sistemi di rilevazione fumi e spegnimento automatico, conformi alle normative vigenti.',
            icon: <Clock className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Formazione Tecnica',
            description: 'Corsi di formazione per il personale operativo sull\'utilizzo dei macchinari e sulla sicurezza elettrica.',
            icon: <GraduationCap className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        },
        {
            title: 'Reperibilità 24/7',
            description: 'Servizio di assistenza tecnica urgente garantito 24 ore su 24, 7 giorni su 7, per i clienti contrattualizzati.',
            icon: <Headphones className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        }
    ];

    return (
        <div className="overflow-hidden bg-white dark:bg-slate-950">
            <Helmet>
                <title>Servizi Aggiuntivi - GS Elettrotecnica | Assistenza e Manutenzione</title>
                <meta name="description" content="Servizi post-vendita, assistenza rapida, formazione operatori, contratti di manutenzione programmata. Supporto continuo per i tuoi impianti." />
                <link rel="canonical" href="https://www.elettrotecnicags.it/servizi/servizi-aggiuntivi" />
            </Helmet>
            {/* Header */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/industrial-factory.png"
                        alt="Servizi Aggiuntivi"
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
                            <span>Supporto Completo</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Servizi Aggiuntivi
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
                            Oltre l'installazione: un partner affidabile per la manutenzione, la sicurezza e la formazione.
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
                                Un servizio a 360 gradi
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                La nostra missione non finisce con la consegna dell'impianto. GS Elettrotecnica si propone come partner unico per tutte le esigenze tecniche della tua azienda.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Offriamo una gamma completa di servizi post-vendita e accessori per garantire che la tua attività non si fermi mai e operi sempre in condizioni di massima sicurezza.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Manutenzione impianti idraulici e condizionamento',
                                    'Verifiche periodiche di messa a terra',
                                    'Analisi termografiche quadri elettrici',
                                    'Consulenza normativa e sicurezza'
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
                                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80"
                                    alt="Technical Support"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs hidden md:block">
                                <div className="text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">24/7</div>
                                <div className="text-slate-600 dark:text-slate-400 font-medium">Assistenza garantita</div>
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
                <div className="absolute inset-0 bg-[url('/industrial-factory.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Cerchi un partner affidabile?</h2>
                    <p className="text-xl text-slate-300 mb-10">
                        Scopri tutti i vantaggi dei nostri contratti di manutenzione e assistenza.
                    </p>
                    <Link
                        to="/contatti"
                        className="px-10 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 mx-auto group"
                    >
                        Richiedi Assistenza
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
