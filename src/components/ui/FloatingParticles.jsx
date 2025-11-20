import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const FloatingParticles = ({ count = 20, className = '' }) => {
    const particles = Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 3, // Larger particles
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-white/40 backdrop-blur-sm" // More visible
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        boxShadow: '0 0 10px rgba(255,255,255,0.3)',
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.4, 0.7, 0.4], // Higher opacity
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
};

export const GeometricShapes = ({ count = 5 }) => {
    const shapes = Array.from({ length: count }, (_, i) => ({
        id: i,
        type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
        size: Math.random() * 120 + 60, // Larger shapes
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        duration: Math.random() * 30 + 20,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {shapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    className="absolute"
                    style={{
                        width: shape.size,
                        height: shape.size,
                        left: `${shape.x}%`,
                        top: `${shape.y}%`,
                    }}
                    animate={{
                        rotate: [shape.rotation, shape.rotation + 360],
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.3, 0.15], // More visible
                    }}
                    transition={{
                        duration: shape.duration,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    {shape.type === 'circle' && (
                        <div className="w-full h-full rounded-full border-2 border-white/30" />
                    )}
                    {shape.type === 'square' && (
                        <div className="w-full h-full border-2 border-brand-300/30 rotate-45" />
                    )}
                    {shape.type === 'triangle' && (
                        <div className="w-0 h-0 border-l-[50px] border-r-[50px] border-b-[86px] border-l-transparent border-r-transparent border-b-white/30" />
                    )}
                </motion.div>
            ))}
        </div>
    );
};
