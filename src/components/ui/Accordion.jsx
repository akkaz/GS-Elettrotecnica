import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition"
                        aria-expanded={openIndex === index}
                    >
                        <span className="font-semibold text-slate-900 dark:text-white pr-4">
                            {item.question}
                        </span>
                        <ChevronDown
                            className={`w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                }`}
                        />
                    </button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-4 text-slate-600 dark:text-slate-400">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
