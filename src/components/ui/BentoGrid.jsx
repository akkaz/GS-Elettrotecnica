import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export const BentoGrid = ({ className, children }) => {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto ${className}`}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateXValue = ((y - centerY) / centerY) * -10;
        const rotateYValue = ((x - centerX) / centerX) * 10;
        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`row-span-1 rounded-2xl group/bento transition-all duration-300 shadow-lg hover:shadow-2xl dark:shadow-none p-6 dark:bg-black dark:border-white/[0.2] bg-white border border-slate-200 justify-between flex flex-col space-y-4 overflow-hidden relative shimmer ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Glassmorphism overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/0 group-hover/bento:from-brand/5 group-hover/bento:via-brand/10 group-hover/bento:to-brand/5 transition-all duration-500 pointer-events-none rounded-2xl" />

            <div className="relative z-10">
                <div className="overflow-hidden rounded-xl mb-4 group-hover/bento:shadow-lg transition-shadow duration-300">
                    {header}
                </div>
                <motion.div
                    className="transition-transform duration-300"
                    whileHover={{ x: 4 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block mb-3"
                    >
                        {icon}
                    </motion.div>
                    <div className="font-sans font-bold text-slate-900 dark:text-neutral-200 mb-2 text-lg">
                        {title}
                    </div>
                    <div className="font-sans font-normal text-slate-600 text-sm dark:text-neutral-300 leading-relaxed">
                        {description}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};
