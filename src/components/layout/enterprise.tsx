'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Globe, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Enterprise() {
  const { t, isRTL } = useLanguage();
  const e = t.enterprise;

  return (
    <section id="enterprise" className="py-24 md:py-40 bg-white dark:bg-slate-950 overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-500/5 blur-3xl rounded-full -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 blur-3xl rounded-full translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 text-white font-black text-[10px] uppercase tracking-[0.3em]"
          >
            <Shield className="w-3 h-3 text-indigo-400" /> Infrastructure
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-slate-950 dark:text-white uppercase tracking-tighter leading-[0.9]"
          >
            {e.title1} <br /> <span className="text-slate-400">{e.title2}</span>
          </motion.h2>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            {e.desc}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 ${isRTL ? '[direction:rtl]' : ''}`}>
          {e.cards.map((card: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative group p-10 md:p-16 rounded-[3rem] border transition-all duration-500 ${
                i === 1 
                  ? 'bg-slate-900 border-slate-800 shadow-2xl' 
                  : 'bg-slate-50 border-slate-100 hover:bg-white hover:shadow-xl'
              }`}
            >
              {card.tag && (
                <div className="absolute top-8 right-8 bg-indigo-500 text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest">
                  {card.tag}
                </div>
              )}

              <div className="space-y-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                  i === 1 ? 'bg-white/10 text-indigo-400' : 'bg-white text-indigo-600'
                }`}>
                  {i === 0 ? <Globe className="w-8 h-8" /> : <Server className="w-8 h-8" />}
                </div>

                <div className="space-y-4">
                  <h3 className={`text-3xl font-black uppercase tracking-tight ${
                    i === 1 ? 'text-white' : 'text-slate-950'
                  }`}>
                    {card.title}
                  </h3>
                  <div className={`h-1 w-12 rounded-full ${i === 1 ? 'bg-white/20' : 'bg-slate-200'}`} />
                </div>

                <ul className="space-y-5">
                  {card.features.map((feature: string, idx: number) => (
                    <li key={idx} className={`flex items-start gap-3 text-sm font-medium ${
                      i === 1 ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${i === 1 ? 'text-indigo-400' : 'text-indigo-600'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 ${
                  i === 1 
                    ? 'bg-white text-slate-950 shadow-2xl' 
                    : 'bg-slate-950 text-white shadow-lg'
                }`}>
                  {card.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
