'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, LucideFileVideo2, RefreshCw, CheckCircle2, Activity } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

// ─── Animated counter ─────────────────────────────────────────────────────────
interface CounterProps {
  to: number;
  duration?: number;
}

function Counter({ to, duration = 2 }: CounterProps) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setStarted(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      setVal(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, to, duration]);

  return <span ref={ref}>{val}</span>;
}

// ─── Hero Visualizer ──────────────────────────────────────────────
function HeroVisualizer() {
  const [isSolving, setIsSolving] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSolving(true);
      setTimeout(() => setIsSolving(false), 3000);
    }, 7000);
    setTimeout(() => setIsSolving(false), 3000);
    return () => clearInterval(interval);
  }, []);

  const cols = 7;
  const rows = 4;
  const totalCells = cols * rows;

  return (
    <div className="relative w-full max-w-[460px] bg-white rounded-[1.8rem] md:rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-slate-200 transform-gpu transition-all duration-300 select-none">

      <div className="h-1 md:h-1.5 w-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-700" />

      <div className="px-4 md:px-5 py-3 md:py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-2 md:gap-2.5">
          <div className="flex items-center justify-center">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
          </div>
          <div>
            <h3 className="text-slate-900 font-black uppercase tracking-tighter text-[9px] md:text-[11px] leading-none">Démonstration IA</h3>
            <p className="text-slate-400 text-[7px] font-bold uppercase tracking-widest mt-1">Semaine 18 • Production</p>
          </div>
        </div>
        <div className={`px-2 md:px-3 py-1.5 rounded-lg md:rounded-xl border flex items-center gap-1.5 transition-all duration-500 ${
          isSolving
            ? 'bg-indigo-50 border-indigo-100 text-indigo-600'
            : 'bg-emerald-50 border-emerald-100 text-emerald-600'
        }`}>
          {isSolving ? <RefreshCw className="w-2.5 h-2.5 animate-spin" /> : <CheckCircle2 className="w-2.5 h-2.5" />}
          <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest">
            {isSolving ? 'Calcul' : 'Optimal'}
          </span>
        </div>
      </div>

      <div className="p-4 md:p-5 relative bg-white h-[180px] md:h-[240px]">
        <AnimatePresence>
          {isSolving && (
            <motion.div
              initial={{ top: '0%' }}
              animate={{ top: '100%' }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
              className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-purple-500 to-transparent z-20 shadow-[0_0_10px_rgba(168,85,247,0.4)]"
            />
          )}
        </AnimatePresence>

        <div className="grid grid-cols-7 gap-1.5 h-full">
          {Array.from({ length: totalCells }).map((_, i) => {
            const col = i % cols;
            const isWeekend = col >= 5;
            const shiftType = i % 3;
            const startX = Math.sin(i * 123) * 200;
            const startY = Math.cos(i * 321) * 200;

            return (
              <div key={i} className="relative rounded-md border border-slate-100 bg-slate-50/50 flex items-center justify-center overflow-hidden">
                <AnimatePresence>
                  {!isSolving && (
                    <motion.div
                      initial={{ x: startX, y: startY, opacity: 0, scale: 0.5 }}
                      animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: (i % 10) * 0.02, type: 'spring', damping: 15 }}
                      className={`absolute inset-0.5 rounded-sm md:rounded-md shadow-sm border flex items-center justify-center ${
                        isWeekend || shiftType === 2
                          ? 'bg-slate-100 border-slate-200 text-slate-400'
                          : shiftType === 0
                          ? 'bg-blue-50 border-blue-200 text-blue-600'
                          : 'bg-indigo-50 border-indigo-200 text-indigo-600'
                      }`}
                    >
                      <span className="text-[5px] md:text-[7px] font-black uppercase">
                        {isWeekend ? 'OFF' : shiftType === 0 ? 'MAT' : shiftType === 1 ? 'SOI' : 'OFF'}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-4 md:px-5 py-3 md:py-5 border-t border-slate-100 bg-slate-50/30 grid grid-cols-3 gap-3">
        <div className="space-y-0.5">
          <p className="text-[6px] md:text-[7px] font-black text-slate-400 uppercase tracking-widest">Couverture</p>
          <div className="flex items-end gap-0.5 font-black text-slate-900">
            <span className="text-sm md:text-lg leading-none"><Counter to={isSolving ? 42 : 100} duration={3} /></span>
            <span className="text-[9px] md:text-xs leading-none opacity-40">%</span>
          </div>
        </div>
        <div className="space-y-0.5">
          <p className="text-[6px] md:text-[7px] font-black text-slate-400 uppercase tracking-widest">Conflits</p>
          <div className={`flex items-end gap-0.5 font-black ${isSolving ? 'text-slate-900' : 'text-emerald-500'}`}>
            <span className="text-sm md:text-lg leading-none"><Counter to={isSolving ? 124 : 0} duration={3} /></span>
          </div>
        </div>
        <div className="space-y-0.5">
          <p className="text-[6px] md:text-[7px] font-black text-slate-400 uppercase tracking-widest">Temps (IA)</p>
          <div className="flex items-end gap-0.5 font-black text-slate-900">
            <span className="text-sm md:text-lg leading-none">0.8</span>
            <span className="text-[9px] md:text-xs leading-none opacity-40">s</span>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 md:bottom-24 -right-1 md:-right-2 bg-slate-900 text-white px-3 py-2 rounded-xl shadow-2xl z-30 flex items-center gap-2 border border-white/10"
      >
        <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
          <Activity className="w-3 h-3 text-indigo-400" />
        </div>
        <div className="pr-1">
          <p className="text-[6px] md:text-[7px] font-bold text-slate-400 uppercase leading-none">Bonheur</p>
          <p className="text-[9px] md:text-xs font-black mt-0.5 leading-none">82% <span className="text-[6px] md:text-[7px] text-emerald-400">↑12%</span></p>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Main Hero ─────────────────────────────────────────────────────────────────
export default function Hero({ onShowTour }: { onShowTour: () => void }) {
  const { t, isRTL } = useLanguage();

  const words1 = (t.hero?.title1 || '').split(' ').filter(Boolean);
  const words2 = (t.hero?.title2 || '').split(' ').filter(Boolean);
  const allWords = [...words1, ...words2];

  return (
    <section className="relative overflow-hidden bg-slate-900 dark:bg-black pt-24 pb-24 md:pt-36 md:pb-36 lg:pt-48 lg:pb-48">

      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 opacity-[0.1] md:opacity-[0.15] pointer-events-none
        bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
        bg-[size:25px_25px] md:bg-[size:40px_40px]"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[250px] h-[250px] md:w-[800px] md:h-[800px]
        bg-indigo-500/10 blur-[50px] md:blur-[120px] rounded-full pointer-events-none"
      />

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

            {/* ── CONTENT: text content (Order 1 in LTR, Order 2 in RTL visually) ── */}
            <div className={`flex flex-col gap-3 sm:gap-5 md:gap-7 w-full min-w-0 ${isRTL ? 'text-right items-end order-1 lg:order-2' : 'text-left items-start order-1 lg:order-1'}`}>

              {/* Tag pill */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-xl backdrop-blur-md"
              >
                {t.hero?.tag}
              </motion.div>

              {/* Title */}
              <div className={`flex flex-wrap gap-x-[0.12em] gap-y-0.5 sm:gap-y-1 w-full ${isRTL ? 'justify-end text-right' : 'justify-start text-left'}`}>
                {allWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
                    animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    className={[
                      'block leading-[0.9] tracking-tighter uppercase font-black transition-all ',
                      isRTL ? 'font-arabic' : '',
                      'text-[10vw] sm:text-[5.8vw]',
                      i === allWords.length - 1 ? 'text-slate-500' : 'text-white',
                    ].join(' ')}
                    style={{ fontSize: 'min(10vw, 5.4rem)' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="hidden sm:block text-sm md:text-lg text-slate-400 font-medium max-w-md leading-relaxed"
              >
                {t.hero?.desc}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.88, duration: 0.5 }}
                className={`flex flex-wrap items-center gap-3 sm:gap-4 mt-6 md:mt-8 relative z-20 md:p-12 md:-m-12 w-full ${isRTL ? 'flex-row-reverse justify-start sm:justify-end' : 'justify-end sm:justify-start'}`}
                style={{ overflow: 'visible' }}
              >
                {/* PRIMARY */}
                <Link
                  href="/soon"
                  className={`group relative flex items-center justify-center px-5 sm:px-8 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl text-[9px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 overflow-hidden
                    bg-gradient-to-br from-white/15 to-white/5
                    border border-white/20 hover:border-white/40
                    text-white backdrop-blur-md
                    shadow-[0_8px_32px_rgba(99,102,241,0.3)]
                    hover:shadow-[0_12px_40px_rgba(99,102,241,0.5)]
                    hover:scale-105
                    w-fit sm:w-auto
                    ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">{t.hero?.ctaPortal}</span>
                  <ArrowRight className={`relative w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>

                {/* SECONDARY */}
                <button
                  onClick={onShowTour}
                  className={`group relative flex items-center justify-center px-5 sm:px-8 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl text-[9px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 overflow-hidden
                    bg-indigo-500/10 border border-indigo-400/20 hover:border-indigo-400/50
                    text-indigo-200 hover:text-white backdrop-blur-md
                    shadow-lg hover:shadow-indigo-500/20
                    hover:scale-105
                    w-fit sm:w-auto
                    ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <LucideFileVideo2 className="relative w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="relative">{t.hero?.ctaDemo}</span>
                </button>
              </motion.div>
            </div>

            {/* ── Visualizer (Order 2 in LTR, Order 1 in RTL visually) ── */}
            <div className={`flex items-center w-full lg:w-auto min-w-0 ${isRTL ? 'justify-start order-1 lg:order-1' : 'justify-end order-2 lg:order-2'}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
                className="w-full max-w-[460px] mx-auto lg:mx-0 lg:shrink-0 lg:[--vz:0.87] xl:[--vz:1]"
                style={{ zoom: 'var(--vz, 1)' }}
              >
                <HeroVisualizer />
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
