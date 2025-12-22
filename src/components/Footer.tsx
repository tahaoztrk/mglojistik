import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
                    <div className="flex flex-col gap-6 max-w-sm">
                        <Link href="/" className="flex flex-col">
                            <span className="font-heading font-black text-2xl tracking-tighter text-[#0f1d3a] leading-none">
                                MG LOJİSTİK
                            </span>
                            <div className="w-8 h-[2px] bg-[#004e98] mt-1" />
                            <p className="text-slate-600 mb-8 max-w-md">
                                Global lojistik ağına entegre Bursa merkez ofisimizden tüm operasyonlarınızı yönetiyoruz.
                            </p>
                        </Link>
                    </div>

                    <div className="flex gap-20">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-black text-[10px] tracking-[0.3em] text-[#0f1d3a] uppercase">Menü</h4>
                            <Link href="/" className="text-slate-500 hover:text-[#0f1d3a] text-sm transition-colors font-bold uppercase tracking-wider">Anasayfa</Link>
                            <Link href="/hakkimizda" className="text-slate-500 hover:text-[#0f1d3a] text-sm transition-colors font-bold uppercase tracking-wider">Hakkımızda</Link>
                            <Link href="/hizmetlerimiz" className="text-slate-500 hover:text-[#0f1d3a] text-sm transition-colors font-bold uppercase tracking-wider">Hizmetlerimiz</Link>
                            <Link href="/iletisim" className="text-slate-500 hover:text-[#0f1d3a] text-sm transition-colors font-bold uppercase tracking-wider">İletişim</Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-black text-[10px] tracking-[0.3em] text-[#004e98] uppercase">İletişim</h4>
                            <a href="mailto:mglojistikfilo@hotmail.com" className="text-slate-500 hover:text-[#004e98] text-sm font-bold tracking-tight transition-colors">mglojistikfilo@hotmail.com</a>
                            <a href="tel:+905369712494" className="text-slate-500 hover:text-[#004e98] text-sm font-bold tracking-tight transition-colors">+90 536 971 24 94</a>
                            <p className="text-slate-500 text-sm font-bold tracking-tight leading-relaxed">
                                Emek Adnan Menderes, Turgut Özal Cd.<br />
                                Korupark No:31, 16150 Osmangazi/Bursa
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-8 border-t border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} MG Lojistik. Tüm hakları saklıdır.</p>
                    <p className="opacity-50"></p>
                </div>
            </div>
        </footer>
    );
}
