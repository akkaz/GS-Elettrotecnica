import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/chi-siamo', label: 'Chi Siamo' },
        { path: '/servizi', label: 'Servizi' },
        { path: '/faq', label: 'FAQ' },
        { path: '/contatti', label: 'Contatti' }
    ];

    // Always show solid background on mobile, or if scrolled/not on home
    const showSolidBg = !isHome || scrolled || mobileMenuOpen;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${showSolidBg
                ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:bg-slate-950/95 dark:border-slate-800 py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-3 focus:outline-none"
                    >
                        <img
                            src="/logo.webp"
                            alt="GS Elettrotecnica Logo"
                            className="h-10 md:h-12 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-sm font-medium transition-colors duration-200 relative group ${location.pathname === item.path
                                    ? 'text-brand-600 dark:text-brand-400'
                                    : showSolidBg ? 'text-slate-700 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400' : 'text-white hover:text-brand-300'
                                    }`}
                            >
                                {item.label}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-brand-600 dark:bg-brand-400 transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                />
                            </Link>
                        ))}
                        <Link
                            to="/contatti"
                            className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Contattaci
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${showSolidBg ? 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'
                            }`}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${location.pathname === item.path
                                        ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-400'
                                        : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <Link
                                    to="/contatti"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block w-full text-center bg-brand-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-brand-700 transition-colors shadow-md"
                                >
                                    Contattaci
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
