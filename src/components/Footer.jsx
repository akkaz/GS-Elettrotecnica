import React from 'react';
import { Zap, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
    return (
        <footer className="bg-bg-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand-dark rounded-xl flex items-center justify-center shadow-lg shadow-brand/20">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-lg leading-none">GS Elettrotecnica</div>
                                <div className="text-xs text-slate-400 font-medium mt-1">Automazioni Industriali</div>
                            </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Oltre 30 anni di eccellenza nell'impiantistica e automazione industriale in Valle Camonica.
                            Partner affidabile per l'innovazione della tua azienda.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Navigazione</h3>
                        <ul className="space-y-3">
                            {['home', 'chi-siamo', 'servizi', 'contatti'].map(page => (
                                <li key={page}>
                                    <button
                                        onClick={() => setCurrentPage(page)}
                                        className="text-slate-400 hover:text-brand transition-colors capitalize flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {page.replace('-', ' ')}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Contatti</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:+390364341038" className="flex items-start space-x-3 text-slate-400 hover:text-brand transition-colors group">
                                    <Phone className="w-5 h-5 mt-0.5 group-hover:text-brand transition-colors" />
                                    <span>+39 0364 341038</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@elettrotecnicags.it" className="flex items-start space-x-3 text-slate-400 hover:text-brand transition-colors group">
                                    <Mail className="w-5 h-5 mt-0.5 group-hover:text-brand transition-colors" />
                                    <span>info@elettrotecnicags.it</span>
                                </a>
                            </li>
                            <li className="flex items-start space-x-3 text-slate-400">
                                <MapPin className="w-5 h-5 mt-0.5" />
                                <span>Via delle Cave, 17<br />25040 Cividate Camuno (BS)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Orari</h3>
                        <div className="flex items-start space-x-3 text-slate-400">
                            <Clock className="w-5 h-5 mt-0.5" />
                            <div>
                                <div className="font-medium text-white mb-1">Lunedì - Venerdì</div>
                                <div>8:00 - 12:00</div>
                                <div>13:00 - 18:00</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <div className="mb-4 md:mb-0">
                        © {new Date().getFullYear()} GS Elettrotecnica Automazioni Industriali Srl. P.IVA: IT00000000000
                    </div>
                    <div className="flex gap-6">
                        <button className="hover:text-brand transition-colors">Privacy Policy</button>
                        <button className="hover:text-brand transition-colors">Cookie Policy</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
