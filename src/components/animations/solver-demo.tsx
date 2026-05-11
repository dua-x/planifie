'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, CheckCircle2, User, Zap, RefreshCw, 
  Brain, Activity, ShieldCheck, Star, Lock,
  TrendingUp, TrendingDown, ClipboardCheck, LayoutList
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

type DemoState = 'IDLE' | 'SOLVING' | 'COMPLETED';

interface Shift {
  id: string;
  label: string;
  color: string;
  hours: number;
  cellId: string;
}

export default function InteractiveSolverDemo() {
  const { t, isRTL } = useLanguage();
  const [state, setState] = useState<DemoState>('IDLE');
  const [grid, setGrid] = useState<Record<string, Shift>>({});

  const SHIFT_TYPES = [
    { id: 'm', label: t.solver.shifts.m, color: 'bg-indigo-500', hours: 8 },
    { id: 's', label: t.solver.shifts.s, color: 'bg-amber-500', hours: 8 },
    { id: 'n', label: t.solver.shifts.n, color: 'bg-slate-800', hours: 7 },
  ];

  const DAYS = isRTL 
    ? ['السبت', 'الجمعة', 'الخميس', 'الأربعاء', 'الثلاثاء', 'الاثنين', 'الأحد']
    : ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  const EMPLOYEES = [
    { id: 'e1', name: 'Amine', contract: 20, offDays: [] },
    { id: 'e2', name: 'Sarah', contract: 20, offDays: [] },
    { id: 'e3', name: 'Karim', contract: 40, offDays: [5, 6] },
    { id: 'e4', name: 'Yasmine', contract: 40, offDays: [0, 1] },
    { id: 'e5', name: 'Riad', contract: 40, offDays: [0, 1] },
  ];

  const DAILY_REQUIREMENTS = [3, 2, 3, 2, 3, 2, 2];

  const runSimulation = async () => {
    setState('SOLVING');
    setGrid({});
    await new Promise(r => setTimeout(r, 1200));

    const newGrid: Record<string, Shift> = {};
    EMPLOYEES.forEach((emp, eIdx) => {
        let assignedHours = 0;
        DAYS.forEach((day, dIdx) => {
            const cellId = `${emp.name}-${day}`;
            if (emp.offDays.includes(dIdx)) return;
            if (assignedHours < emp.contract) {
                // Check current coverage for this day to avoid unnecessary surplus
                const currentDayCoverage = Object.values(newGrid).filter(v => v.cellId.endsWith(day)).length;
                const target = DAILY_REQUIREMENTS[dIdx] ?? 0;
                if (currentDayCoverage < target || Math.random() > 0.5) {
                    const shiftIdx = (eIdx + dIdx) % 3;
                    const shift = SHIFT_TYPES[shiftIdx];
                    if (shift && assignedHours + shift.hours <= emp.contract + 4) {
                        newGrid[cellId] = { ...shift, cellId };
                        assignedHours += shift.hours;
                    }
                }
            }
        });
    });

    setGrid(newGrid);
    setState('COMPLETED');
  };

  // Calculate Coverage Stats
  const dayStats = useMemo(() => {
    return DAYS.map((day, idx) => {
        const coverage = Object.values(grid).filter(v => v.cellId.endsWith(day)).length;
        const target = DAILY_REQUIREMENTS[idx] ?? 0;
        const diff = coverage - target;
        return { day, coverage, target, diff };
    });
  }, [grid, DAYS]);

  return (
    <div className="w-full mx-auto mt-20 p-1 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-3xl border border-white/10 rounded-[3.5rem] shadow-2xl relative overflow-hidden text-left">
      
      <div className="relative z-10 bg-slate-950/60 rounded-[3.4rem] p-6 md:p-10">
        
        {/* Top Control Bar */}
        <div className={`flex flex-col lg:flex-row justify-between items-center mb-12 gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex items-center gap-6">
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                        <h4 className="text-2xl font-black text-white uppercase tracking-tighter italic flex items-center gap-3">
                            {t.solver.title}
                        </h4>
                        <div className={`flex items-center gap-3 mt-1 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                            <span className="flex items-center gap-1.5 text-[9px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                                <Activity className="w-3 h-3" /> {t.solver.tag}
                            </span>
                        </div>
                    </div>
            </div>

          <button
            onClick={runSimulation}
            disabled={state === 'SOLVING'}
            className="group relative flex items-center gap-4 bg-white text-slate-900 px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-105 hover:bg-indigo-50 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
          >
            {state === 'SOLVING' ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Zap className="w-5 h-5 text-indigo-600" />}
            {state === 'IDLE' ? t.solver.btnRun : t.solver.btnRecalculate}
          </button>
        </div>

            <div className="space-y-8">
                <div className="overflow-x-auto rounded-[2.5rem] border border-white/10 bg-black/40 shadow-inner">
                    <div className="min-w-[850px]">
                        {/* Days Header */}
                        <div className={`grid grid-cols-[160px_repeat(7,1fr)] bg-white/5 border-b border-white/10 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <div className={`p-6 border-white/10 flex flex-col justify-center ${isRTL ? 'border-l' : 'border-r'}`}>
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.solver.staff}</span>
                            </div>
                            {DAYS.map(day => (
                                <div key={day} className={`p-6 text-center border-white/5 last:border-0 ${isRTL ? 'border-l' : 'border-r'}`}>
                                    <span className="text-xs font-black text-white">{day}</span>
                                </div>
                            ))}
                        </div>

                        {/* Body: Employees */}
                        {EMPLOYEES.map((emp) => (
                            <div key={emp.name} className={`grid grid-cols-[160px_repeat(7,1fr)] border-b border-white/5 last:border-0 hover:bg-white/[0.01] ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <div className={`p-6 border-white/10 flex items-center gap-4 ${isRTL ? 'flex-row-reverse border-l' : 'border-r'}`}>
                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-black text-white uppercase tracking-tight">{emp.name}</span>
                                        <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">{emp.contract}H</span>
                                    </div>
                                </div>

                                {DAYS.map((day, dIdx) => {
                                    const cellId = `${emp.name}-${day}`;
                                    const shift = grid[cellId];
                                    const isOff = emp.offDays.includes(dIdx);

                                    return (
                                        <div key={day} className={`p-2 min-h-[95px] flex items-center justify-center relative border-white/5 last:border-0 ${isRTL ? 'border-l' : 'border-r'}`}>
                                            <AnimatePresence>
                                                {shift ? (
                                                    <motion.div
                                                        initial={{ scale: 0.5, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        className={`w-full h-full rounded-2xl ${shift.color} p-3 flex flex-col items-center justify-center shadow-2xl border border-white/10`}
                                                    >
                                                        <span className="text-[10px] font-black text-white uppercase tracking-widest text-center">{shift.label}</span>
                                                    </motion.div>
                                                ) : (
                                                    (isOff || state === 'COMPLETED') && (
                                                        <motion.div 
                                                            initial={{ opacity: 0 }} 
                                                            animate={{ opacity: 1 }}
                                                            className={`flex flex-col items-center gap-1 ${isOff ? 'opacity-40' : 'opacity-10'}`}
                                                        >
                                                            {isOff && <Lock className="w-3 h-3 text-indigo-400" />}
                                                            <span className="text-[7px] font-black uppercase tracking-widest">{isOff ? `OFF 42H` : t.solver.shifts.off}</span>
                                                        </motion.div>
                                                    )
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}

                        {/* NEW: DEFICIT / SURPLUS ROW */}
                        <div className={`grid grid-cols-[160px_repeat(7,1fr)] bg-indigo-500/5 border-t border-white/10 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <div className={`p-6 border-white/10 flex flex-col justify-center bg-indigo-500/10 ${isRTL ? 'border-l' : 'border-r'}`}>
                                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{t.solver.adequacy}</span>
                            </div>
                            {dayStats.map((stat, i) => (
                                <div key={i} className={`p-4 flex flex-col items-center justify-center border-white/5 last:border-0 ${isRTL ? 'border-l' : 'border-r'}`}>
                                    <AnimatePresence mode="wait">
                                        {state === 'COMPLETED' ? (
                                            <motion.div 
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex flex-col items-center gap-1"
                                            >
                                                <div className={`flex items-center gap-1.5 px-2 py-1 rounded-lg text-[10px] font-black uppercase ${stat.diff >= 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                                                    {stat.diff > 0 ? `+${stat.diff}` : stat.diff < 0 ? stat.diff : 'OK'}
                                                    {stat.diff > 0 ? <TrendingUp className="w-3 h-3" /> : stat.diff < 0 ? <TrendingDown className="w-3 h-3" /> : <ClipboardCheck className="w-3 h-3" />}
                                                </div>
                                                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-tighter">{t.solver.flux} : {stat.coverage}/{stat.target}</span>
                                            </motion.div>
                                        ) : (
                                            <div className="w-8 h-1 bg-white/5 rounded-full animate-pulse" />
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* KPI Footer */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`bg-white/5 rounded-3xl p-6 border border-white/10 flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-black italic">100%</div>
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{t.solver.kpis[0]}</span>
                    </div>
                    <div className={`bg-white/5 rounded-3xl p-6 border border-white/10 flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400"><ShieldCheck className="w-6 h-6" /></div>
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{t.solver.kpis[1]}</span>
                    </div>
                    <div className={`bg-white/5 rounded-3xl p-6 border border-white/10 flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 font-black italic">0.2</div>
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{t.solver.kpis[2]}</span>
                    </div>
                </div>
                 <div className="mt-8 pt-6 border-t border-white/5 text-center">
                         <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] leading-relaxed">
                            {t.solver.footer}
                         </p>
                    </div>
            </div>
      </div>
    </div>
  );
}
