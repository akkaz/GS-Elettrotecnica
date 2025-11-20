import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
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
                        Contatti
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-200 max-w-3xl leading-relaxed"
                    >
                        Siamo a tua disposizione per ogni informazione o richiesta di preventivo.
                    </motion.p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-12 bg-slate-50 -mt-12 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contacts.map((contact, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
                            >
                                <div className="text-brand mb-4 bg-brand-50 w-12 h-12 rounded-xl flex items-center justify-center">{contact.icon}</div>
                                <div className="text-sm text-slate-500 mb-2 font-medium uppercase tracking-wider">{contact.title}</div>
                                {contact.href ? (
                                    <a href={contact.href} className="text-slate-900 font-bold hover:text-brand transition-colors block">
                                        {contact.value}
                                    </a>
                                ) : (
                                    <div className="text-slate-900 font-bold">{contact.value}</div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Invia una richiesta</h2>
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
                                            className="peer w-full px-4 py-4 pt-6 rounded-xl border-2 border-slate-200 focus:border-brand-600 bg-slate-50 transition-all outline-none"
                                            placeholder=" "
                                        />
                                        <label className="absolute left-4 top-4 text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
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
                                            className="peer w-full px-4 py-4 pt-6 rounded-xl border-2 border-slate-200 focus:border-brand-600 bg-slate-50 transition-all outline-none"
                                            placeholder=" "
                                        />
                                        <label className="absolute left-4 top-4 text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
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
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 peer-focus:text-brand-600 transition-colors z-10" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="peer w-full pl-12 pr-4 py-4 pt-6 rounded-xl border-2 border-slate-200 focus:border-brand-600 bg-slate-50 transition-all outline-none"
                                        placeholder=" "
                                    />
                                    <label className="absolute left-12 top-4 text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
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
                                            className="peer w-full pl-12 pr-4 py-4 pt-6 rounded-xl border-2 border-slate-200 focus:border-brand-600 bg-slate-50 transition-all outline-none"
                                            placeholder=" "
                                        />
                                        <label className="absolute left-12 top-4 text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
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
                                            className="peer w-full px-4 py-4 pt-6 rounded-xl border-2 border-slate-200 focus:border-brand-600 bg-slate-50 transition-all outline-none"
                                            placeholder=" "
                                        />
                                        <label className="absolute left-4 top-4 text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
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
                                        className="peer w-full px-4 py-4 pt-6 rounded-xl border-2 border-slate-200 focus:border-brand-600 bg-slate-50 transition-all resize-none outline-none"
                                        placeholder=" "
                                        maxLength={500}
                                    />
                                    <label className="absolute left-4 top-4 text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
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
                                        className="mt-1 w-5 h-5 text-brand rounded border-slate-300 focus:ring-brand-600 focus:ring-2 cursor-pointer"
                                    />
                                    <label className="text-sm text-slate-600 cursor-pointer">
                                        Acconsento al trattamento dei miei dati personali secondo la normativa privacy vigente *
                                    </label>
                                </motion.div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-brand-600 to-brand-700 text-white px-8 py-4 rounded-xl font-bold hover:from-brand-700 hover:to-brand-800 transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-500/30 relative overflow-hidden group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.45 }}
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Invia richiesta
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-800"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.button>

                                {/* Success Message */}
                                {submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-xl flex items-center gap-3 shadow-lg"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: 'spring' }}
                                        >
                                            <CheckCircle className="w-6 h-6 text-green-600" />
                                        </motion.div>
                                        <div>
                                            <div className="font-bold">Richiesta inviata con successo!</div>
                                            <div className="text-sm">Ti risponderemo al più presto.</div>
                                        </div>
                                    </motion.div>
                                )}
                            </form>
                        </div>

                        {/* Contact Info & Map */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-8">Contatti diretti</h2>
                                <div className="space-y-4">
                                    {departments.map((dept, index) => (
                                        <div key={index} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors group">
                                            <div className="font-bold text-slate-900 mb-2 text-lg">{dept.dept}</div>
                                            <a href={`mailto:${dept.email}`} className="text-slate-600 group-hover:text-brand transition-colors flex items-center gap-2">
                                                <Mail className="w-4 h-4" />
                                                {dept.email}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Map */}
                            <div className="bg-slate-100 rounded-2xl h-80 flex items-center justify-center overflow-hidden relative group">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="relative z-10 text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl m-8">
                                    <MapPin className="w-12 h-12 mx-auto mb-4 text-brand" />
                                    <p className="font-bold text-slate-900">Via delle Cave, 17</p>
                                    <p className="text-slate-600 mb-4">25040 Cividate Camuno (BS)</p>
                                    <a
                                        href="https://maps.google.com/?q=Via+delle+Cave+17+Cividate+Camuno+BS"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-brand hover:text-brand-700 font-bold inline-flex items-center gap-1 hover:gap-2 transition-all"
                                    >
                                        Apri in Google Maps <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            {/* Sister Company */}
                            <div className="p-8 bg-blue-50 border border-blue-100 rounded-2xl">
                                <h3 className="font-bold text-blue-900 mb-2 text-xl">Novatech Automation</h3>
                                <p className="text-blue-700 mb-4">
                                    Per soluzioni fotovoltaiche e energie rinnovabili
                                </p>
                                <a
                                    href="http://www.novatechautomation.it/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 font-bold inline-flex items-center gap-1 hover:gap-2 transition-all"
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
