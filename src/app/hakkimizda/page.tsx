"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Truck, Globe, Target } from "lucide-react";

export default function About() {
    return (
        <main className="min-h-screen bg-white selection:bg-[#004e98] selection:text-white">
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container px-6 md:px-12">
                    {/* Simple Minimal Header */}
                    <div className="max-w-4xl mb-24">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[10px] font-black tracking-[0.6em] text-[#004e98] uppercase mb-6 block"
                        >
                            Kurumsal Tanıtım
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-heading text-6xl md:text-8xl font-black text-[#0f1d3a] tracking-tighter leading-none"
                        >
                            HAKKIMIZDA
                        </motion.h1>
                    </div>

                    {/* Elite Minimalist Image - Single Focus */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden bg-slate-50 mb-24 hover:scale-[1.01] transition-all duration-1000"
                    >
                        <Image
                            src="/hero-long-truck.png"
                            alt="MG LOJİSTİK"
                            fill
                            priority
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Corporate Story Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                        <div className="lg:col-span-12">
                            <div className="max-w-4xl">
                                <p className="text-2xl md:text-3xl font-bold text-[#0f1d3a] leading-tight tracking-tight mb-12 uppercase">
                                    MG LOJİSTİK OLARAK, SEKTÖRÜN DİNAMİKLERİNE HAKİM UZMAN KADROMUZ VE K1 BELGELİ MODERN FİLOMUZLA GÜVENİ TAŞIYORUZ.
                                </p>
                                <div className="w-16 h-1 bg-[#004e98] mb-12" />
                                <div className="space-y-8 text-slate-600 text-lg md:text-xl leading-relaxed">
                                    <p>
                                        MG LOJİSTİK, taşımacılık ve lojistik çözümleri alanında yasal mevzuata tam uyumlu, müşteri odaklı yaklaşımı ve tavizsiz kalite anlayışıyla hareket etmektedir. Vizyonumuz, karmaşık lojistik süreçlerini basitleştirerek müşterilerimize en yüksek standartlarda, akılcı çözümler sunmaktır.
                                    </p>
                                    <p>
                                        K1 yetki belgesine sahip geniş ve modern araç filomuz, deneyimli ekibimiz ve teknolojik altyapımız sayesinde yurtiçi ve yurtdışı lojistik seferlerimizde aktif olarak faaliyet gösteriyoruz. Operasyonel gücümüzü, zamanında ve eksiksiz teslimat prensibiyle birleştirerek her türlü yük taşımacılığını güvenilir bir şekilde gerçekleştiriyoruz.
                                    </p>
                                    <p>
                                        Müşteri memnuniyetini öncelikli hedefimiz olarak belirleyerek, her projede ihtiyaçlarınıza özel lojistik stratejiler geliştiriyoruz. MG LOJİSTİK olarak, iş süreçlerinizin kesintisiz devam etmesi için sadece bir nakliye firması değil, her adımda yanınızda olan stratejik bir iş ortağıyız.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid - Minimalist */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 border-t border-slate-100 pt-24">
                        {[
                            { icon: <Truck className="w-6 h-6" />, title: "Modern Filo", desc: "K1 Belgeli operasyonel güç" },
                            { icon: <ShieldCheck className="w-6 h-6" />, title: "Güvenilir", desc: "Eksiksiz ve hasarsız teslimat" },
                            { icon: <Globe className="w-6 h-6" />, title: "Geniş Ağ", desc: "Yurtiçi ve yurtdışı erişim" },
                            { icon: <Target className="w-6 h-6" />, title: "Vizyoner", desc: "Modern lojistik altyapısı" }
                        ].map((item, i) => (
                            <div key={i} className="group">
                                <div className="text-[#004e98] mb-6 transform group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-black text-[#0f1d3a] mb-2 uppercase tracking-tighter">{item.title}</h4>
                                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest leading-snug">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
