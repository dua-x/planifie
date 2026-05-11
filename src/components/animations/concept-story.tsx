'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Puzzle, FileX, Sparkles, Bus, Heart, 
  ArrowRight, CheckCircle2, AlertCircle, Phone
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ConceptStory() {
  const { t, isRTL } = useLanguage();

  const STEPS = [
    {
      tag: t.story.steps[0].tag,
      title: t.story.steps[0].title,
      desc: t.story.steps[0].desc,
      sub: t.story.steps[0].sub,
      icon: <Puzzle className="w-8 h-8 text-indigo-500" />,
      color: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      tag: t.story.steps[1].tag,
      title: t.story.steps[1].title,
      desc: t.story.steps[1].desc,
      sub: t.story.steps[1].sub,
      icon: <FileX className="w-8 h-8 text-rose-500" />,
      color: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      tag: t.story.steps[2].tag,
      title: t.story.steps[2].title,
      desc: t.story.steps[2].desc,
      sub: t.story.steps[2].sub,
      icon: <Sparkles className="w-8 h-8 text-amber-500" />,
      color: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      tag: t.story.steps[3].tag,
      title: t.story.steps[3].title,
      desc: t.story.steps[3].desc,
      sub: t.story.steps[3].sub,
      icon: <Bus className="w-8 h-8 text-emerald-500" />,
      color: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-slate-50 dark:bg-slate-900/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-black text-[10px] uppercase tracking-[0.3em] mb-8"
          >
           {t.story.tag}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-[0.9] ${isRTL ? 'font-arabic' : ''}`}
          >
            {t.story.title.split('Planifié')[0]} <span className="text-indigo-600">Planifié</span> {t.story.title.split('Planifié')[1]}
          </motion.h2>
        </div>

        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 lg:gap-20">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative p-8 md:p-12 rounded-[3rem] border transition-all hover:shadow-2xl hover:-translate-y-2 ${step.color} ${step.border} group ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <div className={`absolute -top-6 w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-slate-800 rounded-3xl shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ${isRTL ? '-right-6 md:-right-8' : '-left-6 md:-left-8'}`}>
                {step.icon}
              </div>
              
              <div className="mt-4 md:mt-8">
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 block">{step.tag}</span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8 text-sm md:text-base">
                  {step.desc}
                </p>
                <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-black/20 rounded-2xl border border-white/20">
                  <CheckCircle2 className={`w-5 h-5 text-indigo-500 shrink-0 mt-0.5 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                  <p className="text-[11px] md:text-xs font-bold text-slate-500 dark:text-slate-300 italic">
                    {step.sub}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 p-10 md:p-16 bg-slate-900 rounded-[4rem] text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent scale-150" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">{t.story.summaryTitle}</h3>
            <p className="text-slate-400 font-medium text-sm md:text-lg mb-10">
              {t.story.summaryDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {t.story.perks.map((perk: string, idx: number) => (
                <div key={idx} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest">{perk}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
