import React from 'react';
import { Factory, Settings, Sun, Wrench, ArrowRight, CheckCircle, ChevronRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedNumber from '../components/ui/AnimatedNumber';
import { AuroraBackground } from '../components/ui/AuroraBackground';
import { BentoGrid, BentoGridItem } from '../components/ui/BentoGrid';
import { InfiniteMovingCards } from '../components/ui/InfiniteMovingCards';
import { FloatingParticles, GeometricShapes } from '../components/ui/FloatingParticles';
import { MagneticButton } from '../components/ui/MagneticButton';
import { GlassmorphicCard } from '../components/ui/GlassmorphicCard';

export default function HomePage({ setCurrentPage }) {
    const services = [
        {
            icon: <Factory className="w-12 h-12 text-blue-500" />,
            title: 'Impiantistica Industriale',
            description: 'Progettazione e realizzazione impianti elettrici civili e industriali, con manutenzione programmata e interventi rapidi.',
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden"><img src="/industrial-factory.png" alt="Industrial Factory" className="w-full h-full object-cover" /></div>,
        },
        {
            icon: <Settings className="w-12 h-12 text-green-500" />,
            title: 'Automazione Industriale',
            description: 'Sistemi PLC e CNC, programmazione e integrazione sistemi di processo, quadri elettrici di ogni dimensione.',
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden"><img src="/automation-plc.png" alt="Automation PLC" className="w-full h-full object-cover" /></div>,
        },
        {
            icon: <Sun className="w-12 h-12 text-brand-600" />,
            title: 'Energie Rinnovabili',
            description: 'Soluzioni fotovoltaiche, efficientamento energetico e partnership con Novatech Automation.',
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden"><img src="/solar-panels.png" alt="Solar Panels" className="w-full h-full object-cover" /></div>,
        },
        {
            icon: <Wrench className="w-12 h-12 text-slate-500" />,
            title: 'Revamping Macchinari',
            description: 'Ammodernamento e restyling, adeguamento normativo e ottimizzazione delle performance.',
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden"><img src="/machinery-maintenance.png" alt="Machinery Maintenance" className="w-full h-full object-cover" /></div>,
        }
    ];

    const stats = [
        { number: 30, suffix: '+', label: 'anni di esperienza' },
        { number: 40, suffix: '+', label: 'collaboratori qualificati' },
        { number: 1500, suffix: '', label: 'm² di struttura produttiva' },
        { number: 500, suffix: '+', label: 'progetti realizzati' }
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
        <div className="overflow-hidden bg-white dark:bg-black">
            {/* Hero Section with Aurora Background */}
            <AuroraBackground className="bg-bg-dark">
                <FloatingParticles count={30} />
                <GeometricShapes count={6} />
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4 pt-32"
                >
                    <GlassmorphicCard className="p-8 max-w-4xl mx-auto" blur="lg" opacity={5}>
                        <div className="text-3xl md:text-7xl font-bold text-center mb-4">
                            <div className="text-white mb-2">Eccellenza nell'</div>
                            <motion.div
                                className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lighter via-brand-light to-brand"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                                style={{ backgroundSize: '200% 200%' }}
                            >
                                Automazione Industriale
                            </motion.div>
                        </div>
                        <div className="font-light text-base md:text-2xl dark:text-neutral-200 py-4 text-slate-200 max-w-2xl text-center mx-auto">
                            Progettazione, realizzazione e manutenzione di impianti elettrici e sistemi di automazione per l'industria del futuro.
                        </div>
                    </GlassmorphicCard>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16 mt-6">
                        <MagneticButton
                            onClick={() => setCurrentPage('contatti')}
                            className="bg-brand-600 dark:bg-brand-600 rounded-full w-fit text-white dark:text-white px-8 py-4 font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/25 relative overflow-hidden group"
                            strength={0.2}
                        >
                            <span className="relative z-10">Richiedi preventivo</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-800"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </MagneticButton>
                        <MagneticButton
                            onClick={() => setCurrentPage('servizi')}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit text-white px-8 py-4 font-bold hover:bg-white/20 transition-all relative overflow-hidden group"
                            strength={0.2}
                        >
                            <span className="relative z-10">I nostri servizi</span>
                        </MagneticButton>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-8"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ChevronDown className="w-8 h-8 text-white/60" />
                    </motion.div>
                </motion.div>
            </AuroraBackground>

            {/* Stats Section */}
            <section className="bg-bg-dark border-t border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,127,142,0.05),transparent_70%)]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <GlassmorphicCard
                                    className="p-6 hover:bg-white/[0.15] transition-all duration-300 transform hover:scale-105"
                                    blur="md"
                                    opacity={8}
                                >
                                    {/* Circular Progress */}
                                    <div className="relative w-32 h-32 mx-auto mb-4">
                                        <svg className="transform -rotate-90 w-32 h-32">
                                            <circle
                                                cx="64"
                                                cy="64"
                                                r="56"
                                                stroke="rgba(255,255,255,0.1)"
                                                strokeWidth="8"
                                                fill="none"
                                            />
                                            <motion.circle
                                                cx="64"
                                                cy="64"
                                                r="56"
                                                stroke="url(#gradient)"
                                                strokeWidth="8"
                                                fill="none"
                                                strokeLinecap="round"
                                                initial={{ strokeDasharray: "0 352" }}
                                                whileInView={{ strokeDasharray: "264 352" }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 2, delay: index * 0.1 }}
                                            />
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#007F8E" />
                                                    <stop offset="100%" stopColor="#33C1CF" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-3xl md:text-4xl font-bold text-white">
                                                <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm md:text-base text-slate-200 font-medium">{stat.label}</div>
                                </GlassmorphicCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section with Modern Cards */}
            <section className="py-24 bg-slate-50 dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">I nostri servizi</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Soluzioni complete per ogni esigenza industriale
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800 overflow-hidden"
                                whileHover={{ y: -8 }}
                            >
                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-brand-500/0 to-brand-500/0 group-hover:from-brand-500/5 group-hover:via-brand-500/10 group-hover:to-brand-500/5 transition-all duration-500 pointer-events-none" />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <motion.div
                                        className="w-16 h-16 bg-brand-50 dark:bg-brand-900/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/40 transition-colors"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="text-brand-600 dark:text-brand-400">
                                            {service.icon}
                                        </div>
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                        {service.description}
                                    </p>

                                    {/* Image - smaller and at bottom */}
                                    <div className="relative h-32 rounded-lg overflow-hidden mt-auto">
                                        <img
                                            src={service.header.props.children.props.src}
                                            alt={service.header.props.children.props.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Learn more link */}
                                    <motion.div
                                        className="mt-4 flex items-center gap-2 text-brand-600 dark:text-brand-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                                        initial={{ x: -10 }}
                                        whileHover={{ x: 0 }}
                                    >
                                        <span>Scopri di più</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section with Infinite Moving Cards */}
            <section className="py-24 bg-bg-dark relative overflow-hidden flex flex-col items-center justify-center antialiased">
                <div className="text-center mb-12 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dicono di noi</h2>
                    <p className="text-xl text-slate-200">Le opinioni dei nostri clienti</p>
                </div>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Perché scegliere GS Elettrotecnica</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                La nostra esperienza trentennale e la costante innovazione ci rendono il partner ideale per ogni progetto di automazione industriale.
                            </p>
                            <div className="space-y-4">
                                {whyChooseUs.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <CheckCircle className="w-6 h-6 text-brand" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" />
                                <Factory className="w-32 h-32 text-white/20 relative z-10" />
                            </div>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
                            >
                                <div className="text-4xl font-bold text-accent mb-1">30+</div>
                                <div className="text-sm font-medium text-slate-600 dark:text-slate-300">anni di successi</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Hai un progetto in mente?</h2>
                    <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
                        Contattaci per una consulenza gratuita e scopri come possiamo aiutarti a realizzare i tuoi obiettivi
                    </p>
                    <button
                        onClick={() => setCurrentPage('contatti')}
                        className="bg-accent text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all transform hover:scale-105 inline-flex items-center shadow-lg shadow-accent/25"
                    >
                        Contattaci ora
                        <ArrowRight className="ml-2 w-6 h-6" />
                    </button>
                </div>
            </section>
        </div>
    );
}
