import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Shield, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Timeline } from '../components/ui/Timeline';

export default function ChiSiamoPage() {
    const stats = [
        { number: '30+', label: 'Anni di Esperienza', icon: <Award className="w-6 h-6" /> },
        { number: '500+', label: 'Progetti Completati', icon: <CheckCircle className="w-6 h-6" /> },
        { number: '40+', label: 'Collaboratori', icon: <Users className="w-6 h-6" /> },
        { number: '100%', label: 'Clienti Soddisfatti', icon: <Shield className="w-6 h-6" /> }
    ];

    const values = [
        {
            title: 'Innovazione Costante',
            description: 'Investiamo continuamente in formazione e nuove tecnologie per offrire soluzioni all\'avanguardia.',
            icon: <Target className="w-8 h-8 text-brand-600" />
        },
        {
            title: 'Affidabilità',
            description: 'Garantiamo tempi certi e risultati misurabili, con un servizio di assistenza sempre presente.',
            icon: <Shield className="w-8 h-8 text-brand-600" />
        },
        {
            title: 'Qualità Certificata',
            description: 'Utilizziamo solo componentistica di prima scelta e seguiamo rigorosi standard qualitativi.',
            icon: <Award className="w-8 h-8 text-brand-600" />
        }
    ];

    const timelineData = [
        {
            title: "1990",
            content: (
                <div>
                    <p className="text-slate-900 dark:text-slate-200 text-base md:text-lg font-normal mb-4">
                        Fondazione di GS Elettrotecnica in Valle Camonica. Inizia l'attività con focus su impianti elettrici civili e industriali.
                    </p>
                </div>
            ),
        },
        {
            title: "2000",
            content: (
                <div>
                    <p className="text-slate-900 dark:text-slate-200 text-base md:text-lg font-normal mb-4">
                        Espansione nel settore dell'automazione industriale. Acquisizione di competenze in programmazione PLC e sistemi di controllo.
                    </p>
                </div>
            ),
        },
        {
            title: "2010",
            content: (
                <div>
                    <p className="text-slate-900 dark:text-slate-200 text-base md:text-lg font-normal mb-4">
                        Apertura della divisione Novatech Automation per energie rinnovabili. Realizzazione di oltre 200 impianti fotovoltaici.
                    </p>
                </div>
            ),
        },
        {
            title: "2015",
            content: (
                <div>
                    <p className="text-slate-900 dark:text-slate-200 text-base md:text-lg font-normal mb-4">
                        Ampliamento dell'officina a 1500mq per la produzione interna di quadri elettrici. Certificazione qualità ISO 9001.
                    </p>
                </div>
            ),
        },
        {
            title: "2020",
            content: (
                <div>
                    <p className="text-slate-900 dark:text-slate-200 text-base md:text-lg font-normal mb-4">
                        Digitalizzazione dei processi e integrazione Industria 4.0. Sviluppo di soluzioni IoT per il monitoraggio remoto degli impianti.
                    </p>
                </div>
            ),
        },
        {
            title: "Oggi",
            content: (
                <div>
                    <p className="text-slate-900 dark:text-slate-200 text-base md:text-lg font-normal mb-4">
                        Leader nell'automazione industriale in Valle Camonica con oltre 40 collaboratori e 500+ progetti completati. Continua innovazione e crescita.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
            <Helmet>
                <title>Chi Siamo - GS Elettrotecnica | La Nostra Storia e I Nostri Valori</title>
                <meta name="description" content="Scopri la storia di GS Elettrotecnica, da oltre 30 anni leader nell'automazione industriale in Valle Camonica. Il nostro team, i nostri valori e la nostra missione." />
                <link rel="canonical" href="https://www.elettrotecnicags.it/chi-siamo" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/industrial-factory.png"
                        alt="Chi Siamo"
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
                            La nostra storia di <span className="text-brand-400">eccellenza</span>
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
                            Da oltre 30 anni, GS Elettrotecnica è sinonimo di qualità e innovazione nel settore dell'automazione industriale. Una crescita costante guidata dalla passione per la tecnologia.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="flex justify-center text-brand-600 dark:text-brand-400 mb-3">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="bg-white dark:bg-slate-900">
                <Timeline data={timelineData} />
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">I nostri valori</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            I principi che guidano ogni nostro progetto e relazione con i clienti.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all"
                            >
                                <div className="bg-white dark:bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-brand-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/industrial-factory.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Pronti a innovare insieme?
                    </h2>
                    <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
                        Scopri come la nostra esperienza può fare la differenza per la tua azienda.
                    </p>
                    <Link
                        to="/contatti"
                        className="bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all inline-flex items-center shadow-xl"
                    >
                        Parla con noi
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
