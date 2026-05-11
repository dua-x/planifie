'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Truck, Factory, Headphones, Store } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
  Factory: <Factory className="w-8 h-8" />,
  Headphones: <Headphones className="w-8 h-8" />,
  Store: <Store className="w-8 h-8" />
};

export default function UseCases() {
  const { t, isRTL } = useLanguage();

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
    <section id="industries" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            {...fadeIn}
            className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.4em] mb-4"
          >
            {t.industries.tag}
          </motion.h2>
          <motion.h3 
            {...fadeIn}
            className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            {t.industries.title}
          </motion.h3>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {t.industries.items.map((item: any, i: number) => (
            <motion.div 
              key={i}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className={`bg-white dark:bg-slate-950 p-8 md:p-10 rounded-[2.5rem] border border-slate-200/60 dark:border-slate-800 transition-all hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/5 group ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <div className={`w-16 h-16 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center mb-8 text-indigo-500 dark:text-indigo-400 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                {iconMap[item.icon] || <Activity className="w-8 h-8" />}
              </div>
              <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">{item.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
