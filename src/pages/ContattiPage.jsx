import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Head } from '@unhead/react';

export default function ContattiPage() {
    const contacts = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Telefono',
            value: '+39 0364 341038',
            href: 'tel:+390364341038'
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email generale',
            value: 'info@elettrotecnicags.it',
            href: 'mailto:info@elettrotecnicags.it'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Sede',
            value: 'Via delle Cave, 17 - 25040 Cividate Camuno (BS)',
            href: 'https://maps.google.com/?q=Via+delle+Cave+17+Cividate+Camuno+BS'
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Orari',
            value: 'Lun-Ven: 8:00-12:00 / 13:00-18:00',
            href: null
        }
    ];

    const departments = [
        { dept: 'Amministrazione', email: 'c.troletti@elettrotecnicags.it' },
        { dept: 'Ufficio commerciale', email: 'd.gosio@elettrotecnicags.it' },
        { dept: 'Ufficio tecnico', email: 'a.richini@elettrotecnicags.it' }
    ];

    return (
        <div className="overflow-hidden bg-white dark:bg-slate-950">
            <Head>
                <title>Contatti - GS Elettrotecnica | Richiedi un Preventivo</title>
                <meta name="description" content="Contatta GS Elettrotecnica per informazioni o preventivi. Telefono: +39 0364 341038. Sede: Cividate Camuno (BS). Siamo a tua disposizione." />
                <link rel="canonical" href="https://www.elettrotecnicags.it/contatti" />
            </Head>
            {/* Modern Header Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/solar-panels.webp"
                        alt="Contact Us"
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
                        <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6">
                            Contatti
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed">
                            Siamo a tua disposizione per ogni informazione o richiesta di preventivo.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-12 bg-slate-50 dark:bg-slate-900 -mt-12 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contacts.map((contact, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700"
                            >
                                <div className="text-brand-600 dark:text-brand-400 mb-4 bg-brand-50 dark:bg-brand-900/20 w-12 h-12 rounded-xl flex items-center justify-center">{contact.icon}</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium uppercase tracking-wider">{contact.title}</div>
                                {contact.href ? (
                                    <a href={contact.href} className="text-slate-900 dark:text-white font-bold hover:text-brand-600 dark:hover:text-brand-400 transition-colors block">
                                        {contact.value}
                                    </a>
                                ) : (
                                    <div className="text-slate-900 dark:text-white font-bold">{contact.value}</div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Direct Contacts */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Contatti diretti</h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                                    Preferisci parlare direttamente con un reparto specifico? Ecco i nostri riferimenti diretti.
                                </p>
                                <div className="space-y-4">
                                    {departments.map((dept, index) => (
                                        <div key={index} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-800 transition-colors group">
                                            <div className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{dept.dept}</div>
                                            <a href={`mailto:${dept.email}`} className="text-slate-600 dark:text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors flex items-center gap-2">
                                                <Mail className="w-4 h-4" />
                                                {dept.email}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sister Company */}
                            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl">
                                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2 text-xl">Novatech Automation</h3>
                                <p className="text-blue-700 dark:text-blue-300 mb-4">
                                    Per soluzioni fotovoltaiche e energie rinnovabili
                                </p>
                                <a
                                    href="http://www.novatechautomation.it/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-bold inline-flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    Visita il sito <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Map & CTA */}
                        <div className="space-y-8">
                            {/* Map */}
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl h-[500px] flex items-center justify-center overflow-hidden relative group shadow-xl">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="relative z-10 text-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl m-8 max-w-sm">
                                    <MapPin className="w-12 h-12 mx-auto mb-4 text-brand-600 dark:text-brand-400" />
                                    <p className="font-bold text-slate-900 dark:text-white text-xl mb-2">Vieni a trovarci</p>
                                    <p className="font-bold text-slate-900 dark:text-white">Via delle Cave, 17</p>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6">25040 Cividate Camuno (BS)</p>
                                    <a
                                        href="https://maps.google.com/?q=Via+delle+Cave+17+Cividate+Camuno+BS"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-500/25 gap-2"
                                    >
                                        Apri in Google Maps <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl text-center">
                                <h3 className="text-2xl font-bold mb-4">Hai bisogno di assistenza immediata?</h3>
                                <p className="text-slate-300 mb-6">Il nostro team è pronto a rispondere alle tue domande telefonicamente.</p>
                                <a href="tel:+390364341038" className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold transition-all gap-2">
                                    <Phone className="w-5 h-5" />
                                    Chiamaci ora
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
