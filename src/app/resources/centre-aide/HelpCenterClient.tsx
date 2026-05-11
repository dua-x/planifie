'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Zap, Shield, Bot, Smartphone, 
  ChevronRight, ArrowRight, MessageSquare,
  LifeBuoy, Book, PlayCircle, HelpCircle, X
} from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import InteractiveTour from '@/components/animations/interactive-tour';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const iconMap: Record<string, any> = {
  Zap: Zap,
  Shield: Shield,
  Bot: Bot,
  Smartphone: Smartphone
};

export default function HelpCenterClient() {
  const { t, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [showTour, setShowTour] = useState(false);

  const h = t.help_center;

  return (
    <div className={`min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-500/30 overflow-x-hidden ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
      <Navbar onShowTour={() => setShowTour(true)} variant="solid" />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-900 overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-[10px] uppercase tracking-[0.3em]">
               <LifeBuoy className="w-3 h-3" /> Support Client
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              {h.title.split(' ').map((word: string, i: number) => (
                <span key={i} className={i === 1 ? 'text-slate-500' : ''}>{word} </span>
              ))}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto">
              {h.subtitle}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-slate-500 group-focus-within:text-indigo-500 transition-colors" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={h.searchPlaceholder}
                className="w-full bg-white/5 border border-white/10 text-white rounded-[2rem] py-6 pl-16 pr-8 text-lg focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all shadow-2xl backdrop-blur-md"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CATEGORIES GRID --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {h.categories.map((cat: any, i: number) => {
              const Icon = iconMap[cat.icon] || HelpCircle;
              return (
                <Link
                  key={cat.id}
                  href={`/solutions/${cat.slug}`}
                  className={`group p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:scale-105 transition-all cursor-pointer ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">{cat.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6">{cat.desc}</p>
                  <div className={`flex items-center gap-2 text-[10px] font-black text-indigo-600 uppercase tracking-widest group-hover:gap-4 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {isRTL ? 'استكشاف' : 'Explorer'} <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">{h.faqTitle}</h2>
            <div className="h-1.5 w-12 bg-indigo-600 mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {h.faqs.map((faq: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-all"
              >
                <h4 className="text-lg font-black text-slate-900 mb-4 flex items-start gap-4">
                  <span className="text-indigo-600">Q.</span> {faq.q}
                </h4>
                <p className="text-slate-500 font-medium leading-relaxed pl-8 border-l-2 border-slate-100">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CONTACT CTA --- */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter">
              {h.ctaTitle}
            </h2>
            <p className="text-xl text-slate-500 font-medium max-w-xl mx-auto">
              {h.ctaDesc}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/#contact" className="px-12 py-6 bg-slate-900 text-white rounded-2xl font-black uppercase text-[11px] tracking-[0.3em] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
               <MessageSquare className="w-4 h-4" /> {h.ctaBtn}
            </Link>
            <button 
              type="button"
              onClick={() => {
                console.log("Opening tour...");
                setShowTour(true);
              }}
              className="flex items-center gap-4 px-8 py-6 rounded-2xl border border-slate-200 text-slate-900 font-black uppercase text-[11px] tracking-[0.2em] hover:bg-slate-50 transition-all cursor-pointer relative z-30"
            >
               <PlayCircle className="w-5 h-5 text-indigo-600" /> Guides Vidéo
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── Interactive Tour Modal ── */}
      <AnimatePresence>
        {showTour && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTour(false)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-video md:aspect-auto md:h-[85vh] bg-slate-900 rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowTour(false)}
                className="absolute top-6 right-6 z-50 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Tour Component */}
              <div className="w-full h-full">
                <InteractiveTour isModal={true} onClose={() => setShowTour(false)} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
