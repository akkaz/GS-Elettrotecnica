import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation({ currentPage, setCurrentPage }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'chi-siamo', label: 'Chi Siamo' },
        { id: 'servizi', label: 'Servizi' },
        { id: 'contatti', label: 'Contatti' }
    ];

    // Show solid background if not on home page OR if scrolled
    const showSolidBg = currentPage !== 'home' || scrolled;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${showSolidBg
                ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200 py-2'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.button
                        onClick={() => setCurrentPage('home')}
                        className="flex items-center space-x-3 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                            <img
                                src="/logo.png"
                                alt="GS Elettrotecnica Logo"
                                className="h-12 w-auto object-contain"
                            />
                        </motion.div>
                    </motion.button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.id}
                                onClick={() => setCurrentPage(item.id)}
                                className={`text-sm font-medium transition-all duration-300 relative group ${currentPage === item.id
                                    ? 'text-brand-600'
                                    : showSolidBg ? 'text-gray-700 hover:text-brand-600' : 'text-white hover:text-brand-300'
                                    }`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.label}
                                <motion.span
                                    className={`absolute -bottom-1 left-0 h-0.5 ${currentPage === item.id ? 'bg-brand-600' : 'bg-brand-500'}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: currentPage === item.id ? '100%' : 0 }}
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                        ))}
                        <motion.button
                            onClick={() => setCurrentPage('contatti')}
                            className="relative bg-brand-600 text-white px-6 py-2.5 rounded-full font-medium overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Contattaci</span>
                            <motion.div
                                className="absolute inset-0 bg-brand-700"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${showSolidBg ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                            }`}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait">
                            {mobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-[72px] bottom-0 w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl border-l border-gray-200 shadow-2xl z-50 md:hidden overflow-y-auto"
                        >
                            <div className="px-6 py-8 space-y-3">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => {
                                            setCurrentPage(item.id);
                                            setMobileMenuOpen(false);
                                        }}
                                        className={`block w-full text-left px-5 py-4 rounded-xl font-medium transition-all ${currentPage === item.id
                                            ? 'bg-brand-50 text-brand-700 shadow-md'
                                            : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                                <motion.button
                                    onClick={() => {
                                        setCurrentPage('contatti');
                                        setMobileMenuOpen(false);
                                    }}
                                    className="w-full bg-gradient-to-r from-brand-600 to-brand-700 text-white px-5 py-4 rounded-xl font-medium hover:from-brand-700 hover:to-brand-800 transition-all shadow-lg shadow-brand-500/30"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: navItems.length * 0.1 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Contattaci
                                </motion.button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
