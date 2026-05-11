'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Search, Zap, Shield, Bot, Smartphone, 
  ChevronRight, MessageSquare, LifeBuoy, PlayCircle, HelpCircle
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const iconMap: Record<string, any> = {
  Zap: Zap,
  Shield: Shield,
  Bot: Bot,
  Smartphone: Smartphone
};

export default function HelpCenterSection({ onShowTour }: { onShowTour?: () => void }) {
  const { t, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const h = t.help_center;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="help-center" className="py-24 md:py-40 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] dark:bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24 space-y-8">
          <motion.div
            {...fadeIn}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50/50 dark:bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-bold text-[10px] uppercase tracking-[0.3em]"
          >
             <LifeBuoy className="w-3 h-3" /> {isRTL ? 'دعم العملاء' : 'Support Client'}
          </motion.div>
          
          <motion.h2
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-[0.9]"
          >
            {h.title.split(' ').map((word: string, i: number) => (
              <span key={i} className={i === 1 ? 'text-slate-400' : ''}>{word} </span>
            ))}
          </motion.h2>
          
          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto"
          >
            {h.subtitle}
          </motion.p>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24">
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

        {/* FAQ Preview */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{h.faqTitle}</h3>
          </div>
          {h.faqs.map((faq: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`bg-slate-50 dark:bg-slate-900/30 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:border-indigo-500/30 transition-all ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <h4 className={`text-lg font-black text-slate-900 dark:text-white mb-4 flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-indigo-600 font-black">Q.</span> {faq.q}
              </h4>
              <p className={`text-slate-500 dark:text-slate-400 font-medium leading-relaxed ${isRTL ? 'pr-8 border-r-2' : 'pl-8 border-l-2'} border-slate-200 dark:border-slate-800`}>
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div 
          {...fadeIn}
          className="mt-24 text-center space-y-10"
        >
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{h.ctaTitle}</h3>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto">{h.ctaDesc}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/#contact" className="px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black uppercase text-[11px] tracking-[0.3em] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
               <MessageSquare className="w-4 h-4" /> {h.ctaBtn}
            </Link>
            <button 
              onClick={onShowTour}
              className="flex items-center gap-4 px-8 py-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-black uppercase text-[11px] tracking-[0.2em] hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
            >
               <PlayCircle className="w-5 h-5 text-indigo-600" /> {isRTL ? 'أدلة الفيديو' : 'Guides Vidéo'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
