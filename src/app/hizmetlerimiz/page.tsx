"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Optimized Unsplash URLs with width/quality parameters for faster loading
const services = [
    { id: "01", title: "PROJE & İHALE", desc: "Büyük ölçekli stratejik sevkiyatlar ve kamu ihaleleri için özel çözümler.", size: "lg", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" },
    { id: "02", title: "ENDÜSTRİYEL", desc: "Ağır sanayi hammadde lojistiği.", size: "sm", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=600" },
    { id: "03", title: "TIBBİ & MEDİKAL", desc: "Hassas cihaz ve medikal ürün sevkiyatı.", size: "sm", img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=600" },
    { id: "04", title: "AÇIK YÜK", desc: "Gabari dışı ve standart dışı özel taşımacılık.", size: "md", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800" },
    { id: "05", title: "SAC & RULO", desc: "Ağır sanayi tipi rulo sac uzmanlığı.", size: "md", img: "/service-sac-rulo.png" },
    { id: "06", title: "KONTEYNER", desc: "Global liman ve kara yolu konteyner bağlantıları.", size: "lg", img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1200" },
    { id: "07", title: "DEPOLAMA", desc: "Hızlı ve akıllı stok yönetim sistemleri.", size: "sm", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=600" },
    { id: "08", title: "ALÜMİNYUM & PROFİL", desc: "Metal grup ürünleri için hasarsız teslimat.", size: "sm", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600" },
    { id: "09", title: "AMBAR KARGO", desc: "Ekonomik ve düzenli parsiyel çözümler.", size: "md", img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800" },
    { id: "10", title: "MAKİNE EKİPMAN", desc: "Üretim hattı ve ağır makine sevkiyatı.", size: "md", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800" },
    { id: "11", title: "İNŞAAT LOJİSTİĞİ", desc: "Şantiye ve büyük yapı projeleri lojistiği.", size: "lg", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" },
    { id: "12", title: "HAFİF & AĞIR YÜK", desc: "Her tonajda hızlı ve esnek operasyonlar.", size: "sm", img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=600" },
    { id: "13", title: "ENERJİ SEKTÖRÜ", desc: "Yenilenebilir enerji ekipmanları lojistiği.", size: "sm", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600" },
    { id: "14", title: "SANAYİ ÜRÜNLERİ", desc: "Tesis içi ve dışı kurumsal sanayi ağı.", size: "md", img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800" },
    { id: "15", title: "TARIM MAKİNELERİ", desc: "Modern tarım araçları ve ekipman nakliyesi.", size: "md", img: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800" }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* MINIMALIST ELITE HEADER */}
            <section className="pt-56 pb-20 px-6 md:px-12">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-start gap-4"
                    >
                        <div className="flex items-center gap-6">
                            <span className="text-[10px] font-bold tracking-[0.5em] text-[#004e98] uppercase">
                                Hizmet Alanlarımız
                            </span>
                            <div className="w-12 h-[1px] bg-slate-200" />
                        </div>

                        <h1 className="font-heading text-4xl md:text-5xl font-light text-[#0f1d3a] tracking-tight lowercase">
                            operasyonel <span className="font-black italic">mükemmellik.</span>
                        </h1>

                        <p className="max-w-md text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-2 leading-relaxed">
                            Sektör odaklı, yüksek standartlı lojistik çözümleri.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* STATIC BENTO GRID */}
            <section className="py-20 px-4 md:px-8">
                <div className="container mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[350px] gap-4"
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                className={`relative overflow-hidden flex flex-col justify-end p-8 md:p-12 rounded-sm border border-slate-100 group
                  ${service.size === 'lg' ? 'md:col-span-2 md:row-span-2' : ''}
                  ${service.size === 'md' ? 'md:col-span-2' : ''}
                  ${service.size === 'sm' ? 'md:col-span-1' : ''}
                `}
                            >
                                {/* Optimized Next.js Image Layer */}
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <Image
                                        src={service.img}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority={service.size === 'lg'} // Priority for larger items
                                    />
                                    {/* Fixed Dark Overlay for Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1d3a] via-[#0f1d3a]/60 to-[#0f1d3a]/20 opacity-90" />
                                </div>

                                {/* Content - Always Visible */}
                                <div className="relative z-10 w-full mb-2">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[9px] font-black tracking-[0.4em] text-[#004e98] uppercase">
                                            #{service.id}
                                        </span>
                                    </div>
                                    <h3 className={`font-heading font-black text-white leading-tight mb-3 tracking-tighter
                      ${service.size === 'lg' ? 'text-4xl md:text-5xl' : 'text-xl'}
                   `}>
                                        {service.title}
                                    </h3>
                                    <p className="text-white/70 text-[11px] leading-relaxed font-semibold uppercase tracking-wider mb-4 border-l-2 border-[#004e98] pl-3 max-w-[280px]">
                                        {service.desc}
                                    </p>
                                    <div className="h-[1px] w-12 bg-[#004e98] group-hover:w-full transition-all duration-700" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
