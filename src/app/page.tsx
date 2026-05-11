'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Bot, Building2, Bus,
  Zap, CheckCircle2, Users, Calendar, MessageSquare, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/navbar';
import Hero from '@/components/layout/hero';
import ConceptStory from '@/components/animations/concept-story';
import UseCases from '@/components/animations/use-cases';
import Enterprise from '@/components/layout/enterprise';
import Pricing from '@/components/animations/pricing';
import HelpCenterSection from '@/components/animations/help-center-section';
import InteractiveTour from '@/components/animations/interactive-tour';
import Footer from '@/components/layout/footer';
import TechMarquee  from '@/components/layout/tech-marquee';


import { useLanguage } from '@/lib/i18n/LanguageContext';

const APP_URL = "http://localhost:3002";

export default function LandingPage() {
  const { t, isRTL } = useLanguage();
  const [showTour, setShowTour] = useState(false);

  // Handle body scroll when tour is open
  useEffect(() => {
    if (showTour) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showTour]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-indigo-500/30 overflow-x-hidden ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>

      {/* ── NAVBAR ── */}
      <Navbar onShowTour={() => setShowTour(true)} />

      {/* ── HERO SECTION ── */}
      <Hero onShowTour={() => setShowTour(true)} />

      {/* ── FEATURES SECTION ── */}
      <section id="features" className="py-20 md:py-32 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className={`flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8 ${isRTL ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`max-w-2xl ${isRTL ? 'text-right' : 'text-left'}`}>
              <h2 className="text-[10px] md:text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.4em] mb-4">{t.features.tag}</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter">
                {t.features.title1} <br className="hidden md:block" /> {t.features.title2}
              </h3>
            </div>
            <p className={`text-slate-500 dark:text-slate-400 font-medium max-w-sm ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.features.desc}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { icon: <Bot className="w-6 h-6" />, title: t.features.items[0].title, desc: t.features.items[0].desc },
              { icon: <Building2 className="w-6 h-6" />, title: t.features.items[1].title, desc: t.features.items[1].desc },
              { icon: <Users className="w-6 h-6" />, title: t.features.items[2].title, desc: t.features.items[2].desc },
              { icon: <Bus className="w-6 h-6" />, title: t.features.items[3].title, desc: t.features.items[3].desc }
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className={`bg-slate-50 dark:bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-200/60 dark:border-slate-800 transition-all hover:border-slate-400 dark:hover:border-slate-600 group ${isRTL ? 'text-right' : 'text-left'}`}
              >
                <div className={`w-12 h-12 bg-slate-900 dark:bg-white/5 rounded-xl flex items-center justify-center mb-6 md:mb-8 text-white dark:text-slate-400 group-hover:scale-110 transition-transform ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                  {feature.icon}
                </div>
                <h4 className="text-lg font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">{feature.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONCEPT STORY ── */}
      <ConceptStory />
      {/* ── TECH MARQUEE (CAROUSEL) ── */}
      <TechMarquee />

      {/* ── USE CASES ── */}
      <UseCases />

      {/* ── ENTERPRISE ── */}
      <Enterprise />

      {/* ── PRICING SECTION ── */}
      <Pricing />

      {/* ── HELP CENTER / FAQ ── */}
      <HelpCenterSection onShowTour={() => setShowTour(true)} />

      {/* ── FINAL BOOKING SECTION ── */}
      <section id="contact" className="py-24 md:py-40  bg-slate-900 relative overflow-hidden">
        {/* Tech Background Elements */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
            
            {/* Left Side: Content & Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`space-y-12 ${isRTL ? 'text-right order-1 lg:order-2' : 'text-left order-1 lg:order-1'}`}
            >
              <div className={`space-y-6 flex flex-col ${isRTL ? 'items-end' : 'items-start'}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-[10px] uppercase tracking-[0.3em]">
                  <Calendar className="w-3 h-3" /> {t.booking.tag}
                </div>
                <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
                  {t.booking.title1} <br /> 
                  <span className="text-slate-500">
                    {t.booking.title2}
                  </span>
                </h2>
                <p className="text-base md:text-lg text-slate-400 font-medium max-w-xl leading-relaxed">
                  {t.booking.desc}
                </p>
              </div>

              {/* Contact Info Grid */}
              <div className={`grid grid-cols-1 gap-10 pt-10 border-t border-slate-100 dark:border-white/5 w-full ${isRTL ? 'justify-items-end' : 'justify-items-start'}`}>
                <div className="space-y-6">
                  <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] opacity-60">Téléphone</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 group/link">
                      <div className="w-10 h-10 rounded-xl bg-white/30 border border-white/10 flex items-center justify-center text-xl group-hover/link:bg-indigo-500/20 transition-all">🇩🇿</div>
                      <a href="tel:+213770090361" className="text-xl md:text-2xl font-black text-white hover:text-indigo-400 transition-colors tracking-tight">+213 770 09 03 61</a>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] opacity-60">Email & Social</h4>
                  <div className="space-y-4">
                    <a href="mailto:planifie.dz@gmail.com" className="block text-lg font-black text-white hover:text-indigo-400 transition-colors tracking-tight">planifie.dz@gmail.com</a>
                    <div className="flex gap-4 pt-2">
                      <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white hover:scale-110 transition-all">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Enhanced Form Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative group w-full ${isRTL ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/10 to-violet-500/10 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
              <div className="relative bg-indigo-500/10 border border-indigo-500/20  p-8 md:p-12 rounded-[2.5rem] shadow-xl">
                <form action="https://formspree.io/f/planifie.dz@gmail.com" method="POST" className="space-y-6">
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isRTL ? '[direction:rtl]' : ''}`}>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-indigo-400  uppercase tracking-widest ml-1">Nom *</label>
                      <input type="text" name="lastname" required className="w-full bg-slate-30 border border-white/10 rounded-2xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all" placeholder="Nom" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-indigo-400  uppercase tracking-widest ml-1">Prénom *</label>
                      <input type="text" name="firstname" required className="w-full bg-slate-30 border border-white/10 rounded-2xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all" placeholder="Prénom" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-indigo-400  uppercase tracking-widest ml-1">Email Professionnel *</label>
                    <input name="email" type="email" required className="w-full bg-slate-30 border border-white/10 rounded-2xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all" placeholder="nom@entreprise.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-indigo-400  uppercase tracking-widest ml-1">Entreprise *</label>
                    <input name="entreprise" required className="w-full bg-slate-30 border border-white/10 rounded-2xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all" placeholder="Nom de votre société" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-indigo-400  uppercase tracking-widest ml-1">Message</label>
                    <textarea name="message" rows={4} className="w-full bg-slate-30 border border-white/10 rounded-2xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-indigo-900 text-white py-5 rounded-xl font-black uppercase text-[10px] tracking-[0.3em] shadow-md shadow-indigo-500/20 hover:scale-[1.01] active:scale-[0.50] transition-all">
                    {t.booking.cta}
                  </button>
                  <p className="text-[9px] font-black text-indigo-400 uppercase tracking-widest text-center">{t.booking.sub}</p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />

      {/* ── Interactive Tour Modal ── */}
      <AnimatePresence>
        {showTour && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10"
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
              className="relative w-full max-w-6xl aspect-video md:aspect-auto md:h-[85vh] bg-slate-900 rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden"
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
