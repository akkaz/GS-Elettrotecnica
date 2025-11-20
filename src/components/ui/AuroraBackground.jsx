import React from "react";
import { motion } from "framer-motion";

export const AuroraBackground = ({ children, className = "" }) => {
    return (
        <div className={`relative w-full overflow-hidden bg-slate-900 ${className}`}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0.5, scale: 1 }}
                    animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.2, 1],
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-500/30 blur-[100px] filter"
                />
                <motion.div
                    initial={{ opacity: 0.5, scale: 1 }}
                    animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.1, 1],
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-500/30 blur-[100px] filter"
                />
                <motion.div
                    initial={{ opacity: 0.3, scale: 1 }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.3, 1],
                        x: [0, 50, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute -bottom-40 left-20 h-96 w-96 rounded-full bg-indigo-500/30 blur-[100px] filter"
                />
            </div>
            <div className="relative z-10">{children}</div>
        </div>
    );
};
