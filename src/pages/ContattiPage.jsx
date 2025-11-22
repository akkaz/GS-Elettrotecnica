import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function ContattiPage() {
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        azienda: '',
        messaggio: '',
        privacy: false
    });

    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });

        try {
            // Use relative API route - works in both dev and production
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: formData.nome,
                    cognome: formData.cognome,
                    email: formData.email,
                    telefono: formData.telefono,
                    azienda: formData.azienda,
                    messaggio: formData.messaggio
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Errore durante l\'invio');
            }

            setStatus({ submitting: false, submitted: true, error: null });
            setFormData({
                nome: '',
                cognome: '',
                email: '',
                telefono: '',
                azienda: '',
                messaggio: '',
                privacy: false
            });
            setTimeout(() => setStatus(prev => ({ ...prev, submitted: false })), 5000);
        } catch (error) {
            console.error('Error:', error);
            setStatus({
                submitting: false,
                submitted: false,
                error: error.message || 'Si è verificato un errore durante l\'invio. Riprova più tardi o contattaci telefonicamente.'
            });
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

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
            <Helmet>
                <title>Contatti - GS Elettrotecnica | Richiedi un Preventivo</title>
                <meta name="description" content="Contatta GS Elettrotecnica per informazioni o preventivi. Telefono: +39 0364 341038. Sede: Cividate Camuno (BS). Siamo a tua disposizione." />
                <link rel="canonical" href="https://www.elettrotecnicags.it/contatti" />
            </Helmet>
            {/* Modern Header Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/solar-panels.png"
                        alt="Contact Us"
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
                            Contatti
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
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
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Invia una richiesta</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Nome Field */}
                                    <motion.div
                                        className="relative"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <input
                                            type="text"
                                            name="nome"
                                            value={formData.nome}
                                            onChange={handleChange}
                                            required
                                            className="peer w-full px-4 py-4 pt-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-brand-600 dark:focus:border-brand-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-all outline-none"
                                            placeholder=" "
                                        />
                                        <label className="absolute left-4 top-4 text-slate-500 dark:text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-600 dark:peer-focus:text-brand-400 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                                            Nome *
                                        </label>
                                    </motion.div>

                                    {/* Cognome Field */}
                                    <motion.div
                                        className="relative"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15 }}
                                    >
                                        <input
                                            type="text"
                                            name="cognome"
                                            value={formData.cognome}
                                            onChange={handleChange}
                                            required
                                            className="peer w-full px-4 py-4 pt-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-brand-600 dark:focus:border-brand-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-all outline-none"
                                            placeholder=" "
                                        />
                                        <label className="absolute left-4 top-4 text-slate-500 dark:text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-600 dark:peer-focus:text-brand-400 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                                            Cognome *
                                        </label>
                                    </motion.div>
                                </div>

                                {/* Email Field */}
                                <motion.div
                                    className="relative"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 peer-focus:text-brand-600 dark:peer-focus:text-brand-400 transition-colors z-10" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="peer w-full pl-12 pr-4 py-4 pt-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-brand-600 dark:focus:border-brand-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-all outline-none"
                                        placeholder=" "
                                    />
                                    <label className="absolute left-12 top-4 text-slate-500 dark:text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-600 dark:peer-focus:text-brand-400 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                                        Email *
                                    </label>
                                </motion.div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Telefono Field */}
                                    <motion.div
                                        className="relative"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.25 }}
                                    >
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 transition-colors z-10" />
                                        <input
                                            type="tel"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            className="peer w-full pl-12 pr-4 py-4 pt-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-brand-600 dark:focus:border-brand-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-all outline-none"
                                            placeholder=" "
                                        />
                                        <label className="absolute left-12 top-4 text-slate-500 dark:text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-600 dark:peer-focus:text-brand-400 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                                            Telefono
                                        </label>
                                    </motion.div>

                                    {/* Azienda Field */}
                                    <motion.div
                                        className="relative"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <input
                                            type="text"
                                            name="azienda"
                                            value={formData.azienda}
                                            onChange={handleChange}
                                            className="peer w-full px-4 py-4 pt-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-brand-600 dark:focus:border-brand-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-all outline-none"
                                            placeholder=" "
                                        />
                                        <label className="absolute left-4 top-4 text-slate-500 dark:text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-600 dark:peer-focus:text-brand-400 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                                            Azienda
                                        </label>
                                    </motion.div>
                                </div>

                                {/* Messaggio Field */}
                                <motion.div
                                    className="relative"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.35 }}
                                >
                                    <textarea
                                        name="messaggio"
                                        value={formData.messaggio}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="peer w-full px-4 py-4 pt-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-brand-600 dark:focus:border-brand-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-all resize-none outline-none"
                                        placeholder=" "
                                        maxLength={500}
                                    />
                                    <label className="absolute left-4 top-4 text-slate-500 dark:text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-600 dark:peer-focus:text-brand-400 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                                        Messaggio *
                                    </label>
                                    <div className="absolute bottom-3 right-3 text-xs text-slate-400">
                                        {formData.messaggio.length}/500
                                    </div>
                                </motion.div>

                                {/* Privacy Checkbox */}
                                <motion.div
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <input
                                        type="checkbox"
                                        name="privacy"
                                        checked={formData.privacy}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 w-5 h-5 text-brand-600 rounded border-slate-300 focus:ring-brand-600 focus:ring-2 cursor-pointer"
                                    />
                                    <label className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                                        Acconsento al trattamento dei miei dati personali secondo la normativa privacy vigente *
                                    </label>
                                </motion.div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={status.submitting}
                                    className="w-full bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                    whileHover={!status.submitting ? { scale: 1.02 } : {}}
                                    whileTap={!status.submitting ? { scale: 0.98 } : {}}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.45 }}
                                >
                                    {status.submitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Invio in corso...
                                        </>
                                    ) : (
                                        <>
                                            Invia richiesta
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </motion.button>

                                {/* Status Messages */}
                                {status.submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-6 py-4 rounded-xl flex items-center gap-3 shadow-lg"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: 'spring' }}
                                        >
                                            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                                        </motion.div>
                                        <div>
                                            <div className="font-bold">Richiesta inviata con successo!</div>
                                            <div className="text-sm">Ti risponderemo al più presto.</div>
                                        </div>
                                    </motion.div>
                                )}

                                {status.error && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 px-6 py-4 rounded-xl flex items-center gap-3 shadow-lg"
                                    >
                                        <div>
                                            <div className="font-bold">Errore nell'invio</div>
                                            <div className="text-sm">{status.error}</div>
                                        </div>
                                    </motion.div>
                                )}
                            </form>
                        </div>

                        {/* Contact Info & Map */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Contatti diretti</h2>
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

                            {/* Map */}
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl h-80 flex items-center justify-center overflow-hidden relative group">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="relative z-10 text-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl m-8">
                                    <MapPin className="w-12 h-12 mx-auto mb-4 text-brand-600 dark:text-brand-400" />
                                    <p className="font-bold text-slate-900 dark:text-white">Via delle Cave, 17</p>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4">25040 Cividate Camuno (BS)</p>
                                    <a
                                        href="https://maps.google.com/?q=Via+delle+Cave+17+Cividate+Camuno+BS"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-bold inline-flex items-center gap-1 hover:gap-2 transition-all"
                                    >
                                        Apri in Google Maps <ArrowRight className="w-4 h-4" />
                                    </a>
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
                    </div>
                </div>
            </section>
        </div>
    );
}
