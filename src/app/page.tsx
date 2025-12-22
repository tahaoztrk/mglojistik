"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Truck, Globe, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeInUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Home() {
  return (
    <main className="bg-white min-h-screen selection:bg-[#004e98] selection:text-white">
      <Navbar />

      {/* HERO SECTION - RESPONSIVE OPTIMIZED */}
      <section className="relative h-screen min-h-[600px] flex flex-col justify-center overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-long-truck.png"
            alt="MG Lojistik Filo"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Responsive Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-white/95 via-white/80 md:via-white/40 to-white/10 md:to-transparent" />
        </div>

        <div className="container relative z-10 px-6 md:px-12">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.15 }}
            className="max-w-4xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-5xl sm:text-7xl md:text-9xl font-black text-[#0f1d3a] leading-[0.95] md:leading-[0.9] tracking-tighter"
            >
              TEK ARAÇLA,<br />
              <span className="text-[#004e98]">TAM GÜVEN.</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/iletisim" className="bg-[#0f1d3a] text-white px-10 py-5 rounded-sm font-black tracking-widest text-xs hover:bg-[#004e98] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-center inline-block whitespace-nowrap">
                TEKLİF ALIN
              </Link>
              <Link href="/hizmetlerimiz" className="border-2 border-[#0f1d3a] text-[#0f1d3a] px-10 py-5 rounded-sm font-black tracking-widest text-xs hover:bg-[#0f1d3a] hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center inline-block whitespace-nowrap">
                HİZMETLERİMİZ
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ELITE PERFORMANCE INDICATORS - REPLACING STATS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Primary Stat Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-[#0f1d3a] rounded-[3rem] p-12 md:p-16 relative overflow-hidden group"
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="text-[10px] font-black tracking-[0.6em] text-[#004e98] uppercase mb-8 block">Yeni Nesil Lojistik</span>
                  <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-12">
                    GELECEĞİ <br /> <span className="text-[#004e98] italic">TASARLIYORUZ.</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="group/item">
                    <div className="w-8 h-8 border-t-2 border-l-2 border-[#004e98] mb-4 group-hover/item:scale-110 transition-transform" />
                    <span className="block text-2xl font-black text-white mb-2 leading-none uppercase tracking-tighter">Modern <br /> Filo</span>
                    <span className="text-[9px] font-black tracking-[0.3em] text-white/40 uppercase">En Yeni Teknoloji</span>
                  </div>
                  <div className="group/item">
                    <div className="w-8 h-8 border-t-2 border-l-2 border-[#004e98] mb-4 group-hover/item:scale-110 transition-transform" />
                    <span className="block text-2xl font-black text-white mb-2 leading-none uppercase tracking-tighter">Butik <br /> Hizmet</span>
                    <span className="text-[9px] font-black tracking-[0.3em] text-white/40 uppercase">Kişiye Özel Çözüm</span>
                  </div>
                  <div className="group/item">
                    <div className="w-8 h-8 border-t-2 border-l-2 border-[#004e98] mb-4 group-hover/item:scale-110 transition-transform" />
                    <span className="block text-2xl font-black text-white mb-2 leading-none uppercase tracking-tighter">Dijital <br /> Takip</span>
                    <span className="text-[9px] font-black tracking-[0.3em] text-white/40 uppercase">Şeffaf Operasyon</span>
                  </div>
                </div>
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute right-[-10%] top-[-10%] w-[50%] h-[100%] bg-[#004e98]/10 blur-[100px] rounded-full group-hover:bg-[#004e98]/20 transition-all duration-1000" />
              <div className="absolute bottom-0 right-0 p-12 opacity-5 text-white select-none transition-transform duration-1000 group-hover:scale-110">
                <Truck size={300} strokeWidth={1} />
              </div>
            </motion.div>

            {/* Secondary Highlight - Replacing Experience with "Modern Solution" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 flex flex-col justify-between group hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-700"
            >
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:bg-[#0f1d3a] transition-all duration-500">
                  <ShieldCheck className="w-8 h-8 text-[#004e98] group-hover:text-white transition-all duration-500" />
                </div>
                <h4 className="text-2xl font-black text-[#0f1d3a] tracking-tighter uppercase mb-6 leading-tight">Sınırsız <br /> Güvence Altyapısı</h4>
                <p className="text-slate-500 text-sm leading-[1.6] font-medium">
                  Yeni bir heyecan ve en gelişmiş altyapıyla yola çıktık. Tüm süreçlerimizde en yüksek global standartları uyguluyoruz.
                </p>
              </div>

              <Link href="/hizmetlerimiz" className="mt-12 flex items-center gap-3 text-[10px] font-black tracking-widest text-[#004e98] uppercase group/link">
                Detayları İnceleyin
                <div className="w-6 h-6 rounded-full border border-[#004e98]/20 flex items-center justify-center group-hover/link:bg-[#004e98] group-hover/link:text-white transition-all">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW - MINIMALIST SPLIT */}
      <section className="py-32 bg-slate-50/50">
        <div className="container px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] font-black tracking-[0.6em] text-[#004e98] uppercase mb-6 block">Kurumsal Kimliğimiz</span>
              <h2 className="font-heading text-5xl md:text-7xl font-black text-[#0f1d3a] tracking-tighter leading-none mb-8">
                GÜVENİ <br /> <span className="text-[#004e98] italic uppercase">TAŞIYORUZ.</span>
              </h2>
              <div className="w-20 h-1 bg-[#004e98] mb-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start"
            >
              <p className="text-xl md:text-2xl font-bold text-[#0f1d3a] leading-tight tracking-tight mb-8">
                MG LOJİSTİK olarak, sektörün dinamiklerine hakim uzman kadromuz ve K1 belgeli modern filomuzla yurtiçi ve yurtdışı seferlerimizde aktif olarak faaliyet gösteriyoruz.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                Müşteri memnuniyetini öncelikli hedefimiz olarak belirleyerek, yasal mevzuata tam uyumlu altyapımızla lojistik süreçlerinizi kolaylaştıran akılcı çözümler geliştiriyoruz. Sadece bir nakliye firması değil, her adımda yanınızda olan stratejik bir ortağız.
              </p>
              <Link href="/hakkimizda" className="group flex items-center gap-4 text-[11px] font-black tracking-[0.4em] text-[#0f1d3a] hover:text-[#004e98] transition-colors uppercase">
                Hikayemizi Keşfedin <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOFT MINIMALIST IMAGE GRID - CLEAN & ELITE */}
      <section className="py-32 bg-white">
        <div className="container px-6 md:px-12">
          {/* Centered Header */}
          <div className="max-w-2xl mx-auto mb-24 text-center flex flex-col items-center">
            <span className="text-[10px] font-black tracking-[0.6em] text-[#004e98] uppercase mb-4 block">OPERASYONEL GÜÇ</span>
            <h2 className="font-heading text-5xl md:text-6xl font-black text-[#0f1d3a] tracking-tight uppercase leading-none">
              UZMANLIK <span className="text-[#004e98] italic">ALANLARI</span>
            </h2>
            <div className="w-12 h-[2px] bg-slate-100 mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Hafif & Ağır Yük",
                img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=600",
                desc: "Her tonajda esnek çözümler."
              },
              {
                title: "Makine Ekipman",
                img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600",
                desc: "Endüstriyel nakliye."
              },
              {
                title: "Sanayi Ürünleri",
                img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=600",
                desc: "Kurumsal lojistik ağı."
              },
              {
                title: "Açık Yük",
                img: "/hero-long-truck.png",
                desc: "Gabari dışı sevkiyat."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group cursor-pointer flex flex-col items-center text-center"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[40px] mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-[#0f1d3a]/0 group-hover:bg-[#0f1d3a]/10 transition-colors duration-500" />
                </div>

                <div className="px-4">
                  <h3 className="text-xl font-black text-[#0f1d3a] tracking-tighter uppercase mb-2">{service.title}</h3>
                  <div className="w-6 h-[2.5px] bg-[#004e98] mx-auto transition-all duration-500 group-hover:w-full" />
                  <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link href="/hizmetlerimiz" className="inline-flex items-center gap-4 text-[11px] font-black tracking-widest text-[#0f1d3a] hover:text-[#004e98] group transition-all uppercase pb-2 border-b-2 border-slate-100 hover:border-[#004e98]">
              Tüm Hizmetleri Keşfet <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL VISION STRIP - ORIGINAL TEXT + ICON FOCUS */}
      <section className="py-24 border-t border-slate-50 bg-white">
        <div className="container px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

            {/* Original Text - Smaller and Elite */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-black text-[#0f1d3a] tracking-tighter leading-none">
                TAŞIMACILIĞIN GELECEĞİNİ <br />
                <span className="text-[#004e98] italic uppercase">BİZ ŞEKİLLENDİRİYORUZ.</span>
              </h2>
            </motion.div>

            {/* Feature Grid with Icon Focus */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full">
              {[
                { h: "Anlık Yük Takibi", d: "DİJİTAL İZLEME", icon: <Globe className="w-7 h-7" /> },
                { h: "Deneyimli Kadro", d: "UZMAN SÜRÜCÜLER", icon: <ShieldCheck className="w-7 h-7" /> },
                { h: "Global Ağ", d: "ULUSLARARASI ACENTE", icon: <Truck className="w-7 h-7" /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col items-center md:items-start text-center md:text-left relative will-change-transform"
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-[#004e98]/5 rounded-sm scale-125 rotate-45 group-hover:rotate-90 group-hover:bg-[#0f1d3a] transition-all duration-700" />
                    <div className="relative z-10 text-[#004e98] group-hover:text-white transition-colors duration-500">
                      {item.icon}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 mt-2 text-left">
                    <h3 className="text-[13px] font-black text-[#0f1d3a] tracking-tight">{item.h}</h3>
                    <p className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase leading-none">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODERN CAPSULE CTA - ULTRA MINIMALIST */}
      <section className="py-12 bg-white">
        <div className="container px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col md:flex-row items-center justify-between bg-[#0f1d3a] p-8 md:p-12 md:px-16 rounded-[40px] overflow-hidden shadow-2xl"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#004e98] opacity-20 blur-3xl -mr-16 -mt-16" />

            <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
              <span className="text-[9px] font-black tracking-[0.6em] text-[#004e98] uppercase mb-4 block">Operasyonel Adım</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-2">
                İŞİNİZİ <span className="text-[#004e98] italic">GELECEĞE</span> TAŞIYALIM.
              </h2>
              <p className="text-white/30 text-[9px] font-bold uppercase tracking-[0.3em]">Minimalist Çözüm, Global Güvence.</p>
            </div>

            <Link
              href="/iletisim"
              className="relative z-10 bg-white text-[#0f1d3a] h-16 px-10 rounded-full flex items-center gap-4 font-black tracking-widest text-[11px] hover:bg-[#004e98] hover:text-white transition-all duration-500 group/btn"
            >
              SÜRECİ BAŞLATIN
              <div className="w-8 h-8 bg-[#0f1d3a] group-hover/btn:bg-white rounded-full flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4 text-white group-hover/btn:text-[#0f1d3a]" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
