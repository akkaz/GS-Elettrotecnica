import React from 'react';
import { Factory, Settings, Sun, Wrench, ArrowRight, CheckCircle, ChevronDown, Shield, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedNumber from '../components/ui/AnimatedNumber';
import { InfiniteMovingCards } from '../components/ui/InfiniteMovingCards';

export default function HomePage({ setCurrentPage }) {
    const services = [
        {
            icon: <Factory className="w-10 h-10 text-brand-600" />,
            title: 'Impiantistica Industriale',
            description: 'Progettazione e realizzazione impianti elettrici civili e industriali, con manutenzione programmata e interventi rapidi.',
            image: '/industrial-factory.png',
        },
        {
            icon: <Settings className="w-10 h-10 text-brand-600" />,
            title: 'Automazione Industriale',
            description: 'Sistemi PLC e CNC, programmazione e integrazione sistemi di processo, quadri elettrici di ogni dimensione.',
            image: '/automation-plc.png',
        },
        {
            icon: <Sun className="w-10 h-10 text-brand-600" />,
            title: 'Energie Rinnovabili',
            description: 'Soluzioni fotovoltaiche, efficientamento energetico e partnership con Novatech Automation.',
            image: '/solar-panels.png',
        },
        {
            icon: <Wrench className="w-10 h-10 text-brand-600" />,
            title: 'Revamping Macchinari',
            description: 'Ammodernamento e restyling, adeguamento normativo e ottimizzazione delle performance.',
            image: '/machinery-maintenance.png',
        }
    ];

    const stats = [
        { number: 30, suffix: '+', label: 'Anni di Esperienza' },
        { number: 40, suffix: '+', label: 'Collaboratori' },
        { number: 500, suffix: '+', label: 'Progetti Realizzati' }
    ];

    const whyChooseUs = [
        'Personale tecnico altamente qualificato',
        'Servizio post-vendita rapido ed efficiente',
        'Fidelizzazione clienti attraverso progetti condivisi',
        'Formazione continua e innovazione tecnologica',
        'Diversificazione settori industriali'
    ];

    const testimonials = [
        {
            quote: "GS Elettrotecnica ha trasformato completamente la nostra linea di produzione. Efficienza raddoppiata e zero fermi macchina.",
            name: "Marco Rossi",
            title: "Direttore di Stabilimento, MetalWorks SpA",
        },
        {
            quote: "Professionalità e competenza rare da trovare. Il revamping dei nostri macchinari è stato eseguito alla perfezione.",
            name: "Giulia Bianchi",
            title: "CEO, Tessuti & Co.",
        },
        {
            quote: "L'impianto fotovoltaico installato ha superato le nostre aspettative di rendimento. Consigliatissimi.",
            name: "Alessandro Verdi",
            title: "Energy Manager, GreenTech Srl",
        },
        {
            quote: "Assistenza post-vendita impeccabile. Intervengono sempre in tempi rapidissimi.",
            name: "Roberto Neri",
            title: "Responsabile Manutenzione, FoodPack Ind.",
        },
    ];

    return (
        <div className="overflow-hidden bg-white dark:bg-slate-950">
            {/* Modern Industrial Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/industrial-factory.png"
                        alt="Industrial Factory Interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-sm font-medium mb-6 backdrop-blur-sm">
                                <Award className="w-4 h-4" />
                                <span>Leader nell'automazione dal 1995</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                                Eccellenza nell'
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-teal-200">
                                    Automazione Industriale
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                                Progettazione, realizzazione e manutenzione di impianti elettrici e sistemi di automazione avanzati per l'industria del futuro.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <button
                                    onClick={() => setCurrentPage('contatti')}
                                    className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 group"
                                >
                                    Richiedi Preventivo
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => setCurrentPage('servizi')}
                                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center"
                                >
                                    I Nostri Servizi
                                </button>
                            </div>

                            {/* Trust Bar / Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
                                {stats.map((stat, index) => (
                                    <div key={index}>
                                        <div className="text-3xl font-bold text-white mb-1">
                                            <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                                        </div>
                                        <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-8 h-8" />
                </motion.div>
            </section>

            {/* Services Section - Clean & Professional */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">I nostri servizi</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Soluzioni complete per ogni esigenza industriale, dalla progettazione alla manutenzione.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 flex flex-col"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 p-2 rounded-lg backdrop-blur-sm shadow-sm">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                                        {service.description}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                                        <span className="text-brand-600 dark:text-brand-400 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Scopri di più <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-sm font-medium mb-6">
                                <Shield className="w-4 h-4" />
                                <span>Affidabilità Garantita</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                Perché scegliere GS Elettrotecnica
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                La nostra esperienza trentennale e la costante innovazione ci rendono il partner ideale per ogni progetto di automazione industriale.
                            </p>
                            <div className="space-y-4">
                                {whyChooseUs.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                                    alt="Engineers working"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
                            </div>
                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-3 bg-brand-100 dark:bg-brand-900/30 rounded-lg text-brand-600 dark:text-brand-400">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900 dark:text-white">100%</div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Clienti Soddisfatti</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-slate-900 relative overflow-hidden flex flex-col items-center justify-center antialiased">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,127,142,0.1),transparent_70%)]" />
                <div className="text-center mb-12 relative z-10 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dicono di noi</h2>
                    <p className="text-xl text-slate-300">Le opinioni dei nostri clienti</p>
                </div>
                <div className="w-full relative z-10">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-brand-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/industrial-factory.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Hai un progetto in mente?</h2>
                    <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
                        Contattaci per una consulenza gratuita e scopri come possiamo aiutarti a realizzare i tuoi obiettivi.
                    </p>
                    <button
                        onClick={() => setCurrentPage('contatti')}
                        className="bg-white text-brand-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all transform hover:scale-105 inline-flex items-center shadow-xl"
                    >
                        Contattaci ora
                        <ArrowRight className="ml-2 w-6 h-6" />
                    </button>
                </div>
            </section>
        </div>
    );
}
