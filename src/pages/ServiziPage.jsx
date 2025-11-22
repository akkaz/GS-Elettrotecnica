import React from 'react';
import { Zap, Settings, Sun, Wrench, Shield, CheckCircle, ArrowRight, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiziPage({ setCurrentPage }) {
    const services = [
        {
            id: 'impianti-elettrici',
            title: 'Impiantistica elettrica',
            icon: <Zap className="w-12 h-12" />,
            items: [
                'Impianti elettrici civili e industriali',
                'Installazione bassa, media e alta tensione',
                'Manutenzione programmata',
                'Interventi di emergenza 24/7',
                'Certificazioni e conformità normative'
            ]
        },
        {
            id: 'automazione-industriale',
            title: 'Automazione industriale',
            icon: <Settings className="w-12 h-12" />,
            items: [
                'Programmazione PLC (Siemens, Fagor, Allen Bradley)',
                'Sistemi CNC e controllo numerico',
                'SCADA e sistemi di supervisione',
                'Integrazione sistemi di processo',
                'Retrofitting e ammodernamento linee'
            ]
        },
        {
            id: 'quadri-elettrici',
            title: 'Quadri elettrici',
            icon: <Factory className="w-12 h-12" />,
            items: [
                'Progettazione su specifica cliente',
                'Costruzione in-house nella nostra struttura',
                'Testing e collaudo completo',
                'Ogni dimensione e tipologia',
                'Documentazione tecnica As-Built'
            ]
        },
        {
            id: 'energie-rinnovabili',
            title: 'Energie rinnovabili',
            icon: <Sun className="w-12 h-12" />,
            items: [
                'Impianti fotovoltaici (via Novatech)',
                'Efficientamento energetico',
                'Consulenza energetica aziendale',
                'Sistemi di accumulo',
                'Monitoraggio e manutenzione'
            ]
        },
        {
            id: 'revamping',
            title: 'Revamping macchinari',
            icon: <Wrench className="w-12 h-12" />,
            items: [
                'Ammodernamento linee produttive',
                'Adeguamento normativo CE',
                'Ottimizzazione performance',
                'Sostituzione componenti obsoleti',
                'Miglioramento efficienza energetica'
            ]
        },
        {
            id: 'servizi-aggiuntivi',
            title: 'Servizi aggiuntivi',
            icon: <Shield className="w-12 h-12" />,
            items: [
                'Assistenza post-vendita rapida',
                'Formazione operatori',
                'Contratti di manutenzione programmata',
                'Reperibilità per emergenze',
                'Consulenza tecnica specializzata'
            ]
        }
    ];

    const brands = ['Siemens', 'Fagor', 'Allen Bradley', 'Schneider Electric', 'ABB', 'Omron'];

    return (
        <div className="overflow-hidden bg-white dark:bg-slate-950">
            {/* Modern Header Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/machinery-maintenance.png"
                        alt="Industrial Services"
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
                            I Nostri Servizi
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
                            Soluzioni complete per l'industria: dalla progettazione alla manutenzione, dall'automazione all'efficientamento energetico.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Modern Services Grid */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700"
                            >
                                <div className="p-8">
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-all duration-300">
                                        <div className="text-brand-600 dark:text-brand-400 group-hover:text-white transition-colors">
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                        {service.title}
                                    </h3>

                                    {/* Features List */}
                                    <ul className="space-y-3 mb-6">
                                        {service.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <button
                                        onClick={() => setCurrentPage(service.id)}
                                        className="text-brand-600 dark:text-brand-400 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
                                    >
                                        Scopri di più
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Decorative gradient */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Tecnologie e partnership</h2>
                    <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
                        Lavoriamo con i migliori brand del settore per garantire qualità e affidabilità
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        {brands.map((brand, index) => (
                            <div key={index} className="px-8 py-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all cursor-default">
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/industrial-factory.png')] bg-cover bg-center opacity-5 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl font-bold mb-16 text-center">Il nostro approccio</h2>
                    <div className="grid md:grid-cols-4 gap-12">
                        {[
                            { step: '01', title: 'Analisi', desc: 'Studio delle esigenze e sopralluogo tecnico' },
                            { step: '02', title: 'Progettazione', desc: 'Sviluppo soluzione personalizzata' },
                            { step: '03', title: 'Realizzazione', desc: 'Installazione e collaudo sistema' },
                            { step: '04', title: 'Assistenza', desc: 'Supporto continuo e manutenzione' }
                        ].map((phase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center relative"
                            >
                                <div className="text-6xl font-bold text-slate-800 mb-4 absolute -top-8 left-1/2 -translate-x-1/2 -z-10 opacity-50">
                                    {phase.step}
                                </div>
                                <div className="text-4xl font-bold text-brand-500 mb-4 relative z-10">{phase.step}</div>
                                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{phase.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Interessato ai nostri servizi?</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
                        Contattaci per una consulenza personalizzata e un preventivo gratuito
                    </p>
                    <button
                        onClick={() => setCurrentPage('contatti')}
                        className="px-10 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 mx-auto group"
                    >
                        Richiedi preventivo
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>
        </div>
    );
}
