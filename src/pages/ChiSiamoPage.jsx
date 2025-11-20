import React from 'react';
import { Factory, Settings, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Timeline } from '../components/ui/Timeline';

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
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,127,142,0.1),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Chi siamo
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-200 max-w-3xl leading-relaxed"
                    >
                        Un'azienda che dal 1990 opera con passione e competenza nel settore dell'impiantistica e dell'automazione industriale.
                    </motion.p>
                </div>
            </section>

            {/* Modern Story Timeline Section */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-4 text-slate-900"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        La nostra storia
                    </motion.h2>
                    <motion.p
                        className="text-center text-slate-600 mb-16 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Un percorso di crescita e innovazione che dura da oltre 30 anni
                    </motion.p>

                    {/* Horizontal Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-brand/20 via-brand to-brand/20" />

                        {/* Timeline Events */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                            {/* 1990 */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0 }}
                                className="relative"
                            >
                                {/* Year Badge */}
                                <div className="flex justify-center mb-8">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand to-brand-dark text-white flex items-center justify-center font-bold text-xl shadow-brand z-10 relative">
                                        1990
                                    </div>
                                </div>

                                {/* Event Card */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 group hover:-translate-y-2">
                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                                        <Factory className="w-7 h-7 text-brand" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-bold text-xl mb-3 text-slate-900">
                                        La Fondazione
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 leading-relaxed">
                                        Nasce GS Elettrotecnica come impresa individuale per la realizzazione di impianti elettrici civili, ponendo le basi per un futuro di eccellenza.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 2000s */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative"
                            >
                                {/* Year Badge */}
                                <div className="flex justify-center mb-8">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand to-brand-dark text-white flex items-center justify-center font-bold text-lg shadow-brand z-10 relative">
                                        2000s
                                    </div>
                                </div>

                                {/* Event Card */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 group hover:-translate-y-2">
                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                                        <Settings className="w-7 h-7 text-brand" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-bold text-xl mb-3 text-slate-900">
                                        Crescita e Specializzazione
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 leading-relaxed">
                                        L'azienda cresce e diversifica le proprie attività, specializzandosi sempre più nell'automazione industriale e acquisendo competenze avanzate.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Oggi */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="relative"
                            >
                                {/* Year Badge */}
                                <div className="flex justify-center mb-8">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand to-brand-dark text-white flex items-center justify-center font-bold text-xl shadow-brand z-10 relative">
                                        Oggi
                                    </div>
                                </div>

                                {/* Event Card */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 group hover:-translate-y-2">
                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                                        <Shield className="w-7 h-7 text-brand" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-bold text-xl mb-3 text-slate-900">
                                        Leader del Settore
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        GS Elettrotecnica Automazioni Industriali Srl è un punto di riferimento nel settore, con una struttura di 1500mq.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed">
                                        Viene fondata <strong className="text-brand">Novatech Automation Srl</strong>, dedicata alle energie rinnovabili e all'efficientamento energetico.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Numbers Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100">
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Factory className="w-8 h-8 text-blue-600" />
                            </div>
                            <div className="text-4xl font-bold text-slate-900 mb-2">40+</div>
                            <div className="text-slate-600 font-medium">dipendenti qualificati tra le due società</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100">
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Settings className="w-8 h-8 text-blue-600" />
                            </div>
                            <div className="text-4xl font-bold text-slate-900 mb-2">1500 m²</div>
                            <div className="text-slate-600 font-medium">di struttura coperta per produzione</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100">
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-blue-600" />
                            </div>
                            <div className="text-4xl font-bold text-slate-900 mb-2">30+</div>
                            <div className="text-slate-600 font-medium">anni di esperienza nel settore</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">I nostri valori</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facility Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            <div className="aspect-[4/3] bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                                <Factory className="w-40 h-40 text-slate-700" />
                            </div>
                            {/* Decorative dots */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand/20 rounded-full blur-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
