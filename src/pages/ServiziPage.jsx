import React from 'react';
import { Zap, Settings, Sun, Wrench, Shield, CheckCircle, ArrowRight, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiziPage({ setCurrentPage }) {
    const services = [
        {
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
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,127,142,0.1),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        I nostri servizi
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-200 max-w-3xl leading-relaxed"
                    >
                        Soluzioni complete per l'industria: dalla progettazione alla manutenzione, dall'automazione all'efficientamento energetico.
                    </motion.p>
                </div>
            </section>

            {/* Modern Services Grid */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="p-8">
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand transition-all duration-300">
                                        <div className="text-brand group-hover:text-white transition-colors">
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-brand transition-colors">
                                        {service.title}
                                    </h3>

                                    {/* Features List */}
                                    <ul className="space-y-3 mb-6">
                                        {service.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <button className="text-brand font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                                        Scopri di più
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Decorative gradient */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Tecnologie e partnership</h2>
                    <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
                        Lavoriamo con i migliori brand del settore per garantire qualità e affidabilità
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        {brands.map((brand, index) => (
                            <div key={index} className="px-8 py-4 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 font-semibold hover:bg-white hover:shadow-md transition-all cursor-default">
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                <div className="text-4xl font-bold text-accent mb-4 relative z-10">{phase.step}</div>
                                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{phase.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Interessato ai nostri servizi?</h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Contattaci per una consulenza personalizzata e un preventivo gratuito
                    </p>
                    <button
                        onClick={() => setCurrentPage('contatti')}
                        className="bg-accent text-white px-10 py-4 rounded-xl font-bold hover:bg-accent-600 transition-all transform hover:scale-105 inline-flex items-center shadow-lg shadow-accent/25"
                    >
                        Richiedi preventivo
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </section>
        </div>
    );
}
