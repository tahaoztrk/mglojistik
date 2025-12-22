"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function PageHeader({ title, subtitle, className = "" }: PageHeaderProps) {
    return (
        <section className={`relative pt-40 pb-20 overflow-hidden bg-slate-50 ${className}`}>
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
                <div className="absolute top-0 w-full h-full opacity-5"
                    style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #0f172a 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
                </div>
            </div>

            <div className="container relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-heading text-5xl md:text-7xl font-bold mb-6 text-slate-900"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-slate-600 max-w-2xl mx-auto text-lg"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    );
}
