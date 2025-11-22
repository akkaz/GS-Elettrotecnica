import React from 'react';
import { Factory, Settings, Shield, Award, Users, History } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ChiSiamoPage() {
    const values = [
        { title: 'Determinazione', description: 'Nel raggiungimento degli obiettivi condivisi con i clienti' },
        { title: 'Fidelizzazione', description: 'Attraverso progetti condivisi e rapporti di fiducia duraturi' },
        { title: 'Competenza', description: 'Personale tecnico-commerciale altamente qualificato' },
        { title: 'Formazione', description: 'Continua in ogni settore per restare sempre aggiornati' },
        { title: 'Innovazione', description: 'Ricerca costante di nuove soluzioni e tecnologie' },
        { title: 'Qualità', description: 'Standard elevati in ogni fase del progetto' }
    ];

    return (
        <div className="overflow-hidden bg-white dark:bg-slate-950">
            {/* Modern Header Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/automation-plc.png"
                        alt="Automation Expertise"
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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Chi Siamo
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
                            Un'azienda che dal 1990 opera con passione e competenza nel settore dell'impiantistica e dell'automazione industriale.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Modern Story Timeline Section */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            La nostra storia
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Un percorso di crescita e innovazione che dura da oltre 30 anni
                        </p>
                    </div>

                    {/* Horizontal Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-brand-200 via-brand-500 to-brand-200 dark:from-brand-900 dark:via-brand-700 dark:to-brand-900" />

                        {/* Timeline Events */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
                            {/* 1990 */}
                            <div className="relative group">
                                <div className="flex justify-center mb-8">
                                    <div className="w-20 h-20 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-brand-500/30 z-10 relative group-hover:scale-110 transition-transform duration-300">
                                        1990
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
                                    <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 rounded-xl flex items-center justify-center mb-4 text-brand-600 dark:text-brand-400">
                                        <History className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">La Fondazione</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        Nasce GS Elettrotecnica come impresa individuale per la realizzazione di impianti elettrici civili.
                                    </p>
                                </div>
                            </div>

                            {/* 2000s */}
                            <div className="relative group">
                                <div className="flex justify-center mb-8">
                                    <div className="w-20 h-20 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-brand-500/30 z-10 relative group-hover:scale-110 transition-transform duration-300">
                                        2000s
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
                                    <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 rounded-xl flex items-center justify-center mb-4 text-brand-600 dark:text-brand-400">
                                        <Settings className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">Crescita</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        L'azienda cresce e si specializza nell'automazione industriale acquisendo competenze avanzate.
                                    </p>
                                </div>
                            </div>

                            {/* 2010s */}
                            <div className="relative group">
                                <div className="flex justify-center mb-8">
                                    <div className="w-20 h-20 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-brand-500/30 z-10 relative group-hover:scale-110 transition-transform duration-300">
                                        2010s
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
                                    <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 rounded-xl flex items-center justify-center mb-4 text-brand-600 dark:text-brand-400">
                                        <Factory className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">Espansione</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        Ampliamento della struttura produttiva fino a 1500 m² e investimenti in tecnologie all'avanguardia.
                                    </p>
                                </div>
                            </div>

                            {/* Oggi */}
                            <div className="relative group">
                                <div className="flex justify-center mb-8">
                                    <div className="w-20 h-20 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-brand-500/30 z-10 relative group-hover:scale-110 transition-transform duration-300">
                                        Oggi
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
                                    <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 rounded-xl flex items-center justify-center mb-4 text-brand-600 dark:text-brand-400">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">Leader</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        Punto di riferimento nel settore. Nasce <strong className="text-brand-600 dark:text-brand-400">Novatech Automation</strong> per le energie rinnovabili.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Numbers Section */}
            <section className="py-16 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm text-center border border-slate-100 dark:border-slate-700">
                            <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                            </div>
                            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">40+</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium">dipendenti qualificati</div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm text-center border border-slate-100 dark:border-slate-700">
                            <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Factory className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                            </div>
                            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">1500 m²</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium">di struttura produttiva</div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm text-center border border-slate-100 dark:border-slate-700">
                            <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                            </div>
                            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">30+</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium">anni di esperienza</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16 text-center">I nostri valori</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 dark:hover:border-slate-700"
                            >
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facility Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/industrial-factory.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">La nostra struttura</h2>
                            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                                Disponiamo di una struttura coperta di <strong className="text-white">1500 m²</strong> che ci consente di realizzare internamente quadri elettrici di ogni dimensione e di effettuare il restyling di macchinari industriali di grandi dimensioni.
                            </p>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                Questa capacità produttiva, unita all'esperienza del nostro team, ci permette di gestire progetti complessi dall'inizio alla fine, garantendo qualità, tempistiche e pieno controllo su ogni fase della lavorazione.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 overflow-hidden">
                                <img src="/industrial-factory.png" alt="Facility" className="w-full h-full object-cover opacity-80" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
