"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-white text-slate-800">
            <Navbar />
            <PageHeader
                title="İLETİŞİM"
                subtitle="Projeleriniz için bizimle iletişime geçin. Uzman ekibimiz size yardımcı olmaya hazır."
            />

            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Contact Info */}
                        <div className="flex flex-col gap-12">
                            <div>
                                <h2 className="font-heading text-3xl font-bold mb-8 text-slate-900">BURSA OFİS</h2>
                                <p className="text-slate-600 mb-8 max-w-md">
                                    Global lojistik ağına entegre Bursa merkez ofisimizden tüm operasyonlarınızı yönetiyoruz.
                                </p>

                                <div className="flex flex-col gap-10">
                                    <a
                                        href="https://www.google.com/maps/dir/?api=1&destination=Adnan+Menderes,+Turgut+Özal+Cd.+No:31,+16150+Osmangazi/Bursa"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-5 group hover:bg-slate-50 p-4 -m-4 rounded-xl transition-all"
                                    >
                                        <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center shrink-0 group-hover:border-[#004e98] group-hover:bg-[#004e98]/5 transition-all">
                                            <MapPin className="w-5 h-5 text-[#004e98]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-black tracking-[0.3em] text-[#004e98] uppercase mb-1">Yol Tarifi Al</h4>
                                            <p className="text-slate-900 font-bold leading-tight">Emek Adnan Menderes, Turgut Özal Cd.<br />Korupark No:31, Osmangazi/Bursa</p>
                                        </div>
                                    </a>

                                    <a
                                        href="tel:+905369712494"
                                        className="flex items-start gap-5 group hover:bg-slate-50 p-4 -m-4 rounded-xl transition-all"
                                    >
                                        <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center shrink-0 group-hover:border-[#004e98] group-hover:bg-[#004e98]/5 transition-all">
                                            <Phone className="w-5 h-5 text-[#004e98]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-black tracking-[0.3em] text-[#004e98] uppercase mb-1">Hemen Arayın</h4>
                                            <p className="text-xl font-black text-[#0f1d3a] tracking-tighter leading-none">+90 536 971 24 94</p>
                                        </div>
                                    </a>

                                    <a
                                        href="mailto:mglojistikfilo@hotmail.com"
                                        className="flex items-start gap-5 group hover:bg-slate-50 p-4 -m-4 rounded-xl transition-all"
                                    >
                                        <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center shrink-0 group-hover:border-[#004e98] group-hover:border-[#004e98]/5 transition-all">
                                            <Mail className="w-5 h-5 text-[#004e98]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-black tracking-[0.3em] text-[#004e98] uppercase mb-1">E-Posta Gönder</h4>
                                            <p className="text-slate-900 font-bold tracking-tight">mglojistikfilo@hotmail.com</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="h-[600px] bg-slate-50 border border-slate-200 rounded-sm overflow-hidden shadow-inner">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.2873068872671!2d28.95870044187484!3d40.25525042943695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca14872e467989%3A0x34f10ebfb15bfe9e!2zRW1layBaZWthaSBHw7xtw7zFn2RpxZ8sIFR1cmd1dCDDlnphbCBDZC4gTm86MzEsIDE2MTUwIE9zbWFuZ2F6acyHL0J1cnNh!5e0!3m2!1str!2str!4v1766368978759!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
