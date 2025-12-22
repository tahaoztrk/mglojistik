"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { name: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? "bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm"
                        : "bg-transparent py-8"
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between">
                        {/* CLASSIC MODERN LOGO */}
                        <Link href="/" className="group flex flex-col">
                            <span className="font-heading font-black text-2xl tracking-tighter text-[#0f1d3a] leading-none">
                                MG LOJİSTİK
                            </span>
                            <div className="w-8 h-[2px] bg-[#004e98] mt-1 group-hover:w-full transition-all duration-500" />
                        </Link>

                        {/* NAV LINKS */}
                        <div className="hidden lg:flex items-center gap-12">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-xs font-bold tracking-widest uppercase transition-colors relative group ${pathname === link.href ? "text-[#004e98]" : "text-slate-500 hover:text-slate-900"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* MOBILE TOGGLE */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-[#0f1d3a]"
                        >
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center p-10"
                    >
                        <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-[#0f1d3a]">
                            <X className="w-10 h-10" />
                        </button>

                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-heading text-4xl font-black text-[#0f1d3a] hover:text-[#004e98] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
