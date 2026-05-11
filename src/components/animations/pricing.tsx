import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Users, Shield,Building2 , Zap, Calculator as CalcIcon } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const PriceCalculator = () => {
  const { t, isRTL } = useLanguage();
  const [employees, setEmployees] = useState(100);
  const [departments, setDepartments] = useState(1);
  const [admins, setAdmins] = useState(1);
  const [supervisors, setSupervisors] = useState(2);
  const [hasIA, setHasIA] = useState(true);
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [setupFee, setSetupFee] = useState(0);

  useEffect(() => {
    // New Pricing Formula (Algeria Enterprise Optimized)
    const basePlatform = 20000;
    const deptPrice = (departments - 1) * 5000; // First dept is in base
    const empPrice = employees * 150;
    const admPrice = admins * 7500;
    const supPrice = supervisors * 3000;
    const iaPrice = hasIA ? 20000 : 0;
    
    const total = basePlatform + deptPrice + empPrice + admPrice + supPrice + iaPrice;
    setMonthlyTotal(total);
    
    // Setup fee scales with departments (more modeling work)
    const baseSetup = 50000;
    const deptSetup = departments * 30000;
    setSetupFee(Math.max(baseSetup + deptSetup, total * 1.5));
  }, [employees, departments, admins, supervisors, hasIA]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-20 md:mt-32 max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-md overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <CalcIcon className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-2xl md:text-3xl font-black tracking-tighter uppercase">{t.pricing.calculator.title}</h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Sliders Side */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-slate-400">
              <label className="flex items-center gap-2"><Users className="w-4 h-4" /> {t.pricing.calculator.employees}</label>
              <span className="text-white bg-white/10 px-3 py-1 rounded-lg">{employees}</span>
            </div>
            <input 
              type="range" min="10" max="2000" step="10" 
              value={employees} onChange={(e) => setEmployees(parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-slate-400">
              <label className="flex items-center gap-2"><Building2 className="w-4 h-4" /> {t.pricing.calculator.planningUnits}</label>
              <span className="text-white bg-white/10 px-3 py-1 rounded-lg">{departments}</span>
            </div>
            <p className="text-[9px] font-bold text-indigo-400/80 uppercase tracking-wider -mt-2">
              {t.pricing.calculator.unlimitedMention}
            </p>
            <input 
              type="range" min="1" max="50" step="1" 
              value={departments} onChange={(e) => setDepartments(parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                <label className="flex items-center gap-2"><Shield className="w-3 h-3" /> {t.pricing.calculator.admins}</label>
                <span className="text-white">{admins}</span>
              </div>
              <input 
                type="range" min="1" max="10" step="1" 
                value={admins} onChange={(e) => setAdmins(parseInt(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                <label className="flex items-center gap-2"><ShieldCheck className="w-3 h-3" /> {t.pricing.calculator.supervisors}</label>
                <span className="text-white">{supervisors}</span>
              </div>
              <input 
                type="range" min="0" max="100" step="1" 
                value={supervisors} onChange={(e) => setSupervisors(parseInt(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>
          </div>

          <button 
            onClick={() => setHasIA(!hasIA)}
            className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all ${hasIA ? 'bg-indigo-600/20 border-indigo-500 text-white' : 'bg-white/5 border-white/10 text-slate-400'}`}
          >
            <div className="flex items-center gap-3">
              <Zap className={`w-5 h-5 ${hasIA ? 'text-indigo-400' : ''}`} />
              <span className="text-[10px] font-black uppercase tracking-widest">{t.pricing.calculator.ia}</span>
            </div>
            <div className={`w-10 h-5 rounded-full relative transition-colors ${hasIA ? 'bg-indigo-500' : 'bg-slate-700'}`}>
              <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isRTL ? (hasIA ? 'left-1' : 'right-1') : (hasIA ? 'right-1' : 'left-1')}`} />
            </div>
          </button>
        </div>

        {/* Results Side */}
        <div className="bg-white/5 rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">{t.pricing.calculator.total}</p>
              <div className={`flex items-baseline gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-5xl font-black text-white">{monthlyTotal.toLocaleString()}</span>
                <span className="text-sm font-bold text-slate-400">DZD / month</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">{t.pricing.calculator.setup}</p>
              <div className={`flex items-baseline gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-2xl font-black text-indigo-400">{setupFee.toLocaleString()}</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">DZD</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => window.location.href='mailto:contact@planifie.dz'}
            className="w-full mt-10 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-slate-200 transition-all flex items-center justify-center gap-3"
          >
            {t.pricing.calculator.cta}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const PaymentCard = ({ name }: { name: string }) => {
  const n = name.toLowerCase();
  
  if (n.includes("visa")) {
    return (
      <div className="relative w-24 md:w-28 h-16 md:h-20 bg-white rounded-xl md:rounded-2xl flex items-center justify-center overflow-hidden shadow-lg border border-slate-200 transition-transform group-hover:-translate-y-1 group-hover:shadow-[0_15px_30px_rgba(20,52,203,0.3)]">
        <img src="/Visa_Inc-_idDUM8TcN7_1.png" alt="Visa" className="w-16 md:w-20 object-contain" />
      </div>
    );
  }
  if (n.includes("mastercard")) {
    return (
      <div className="relative w-24 md:w-28 h-16 md:h-20 bg-white rounded-xl md:rounded-2xl flex items-center justify-center overflow-hidden shadow-lg border border-slate-200 transition-transform group-hover:-translate-y-1 group-hover:shadow-[0_15px_30px_rgba(235,0,27,0.3)]">
        <img src="/Mastercard_Symbol_1.png" alt="Mastercard" className="w-12 md:w-16 object-contain" />
      </div>
    );
  }
  if (n.includes("cib")) {
    return (
      <div className="relative w-24 md:w-28 h-16 md:h-20 bg-white rounded-xl md:rounded-2xl flex items-center justify-center overflow-hidden shadow-lg border border-slate-200 transition-transform group-hover:-translate-y-1 group-hover:shadow-[0_15px_30px_rgba(0,166,80,0.3)]">
        <img src="/Bitakati_id_UewwehL_0.png" alt="CIB" className="w-12 md:w-16 object-contain" />
      </div>
    );
  }
  if (n.includes("edahabia") || n.includes("ذهبية")) {
    return (
      <div className="relative w-24 md:w-28 h-16 md:h-20 bg-white rounded-xl md:rounded-2xl flex flex-col items-center justify-center overflow-hidden shadow-lg border border-slate-200 transition-transform group-hover:-translate-y-1 group-hover:shadow-[0_15px_30px_rgba(229,169,60,0.3)]">
        <img src="/AlgeriePoste.svg.png" alt="Edahabia" className="w-12 md:w-16 object-contain" />
      </div>
    );
  }
  return (
    <div className="relative w-24 md:w-28 h-16 md:h-20 bg-white rounded-xl md:rounded-2xl flex items-center justify-center overflow-hidden shadow-lg border border-slate-200 transition-transform group-hover:-translate-y-1">
      <span className="text-slate-800 font-bold text-[8px] md:text-[10px] tracking-widest uppercase">{name}</span>
    </div>
  );
};

export default function Pricing() {
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
    <section id="pricing" className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 {...fadeIn} className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-4">
          {t.pricing.tag}
        </motion.h2>
        <motion.h3 {...fadeIn} className="text-3xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter">
          {t.pricing.title1} <span className="text-slate-500">{t.pricing.title2}</span>
        </motion.h3>
        <motion.p {...fadeIn} className="text-base md:text-xl text-slate-400 mb-12 md:mb-16 leading-relaxed font-medium max-w-2xl mx-auto">
          {t.pricing.desc}
        </motion.p>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 ${isRTL ? 'text-right' : 'text-left'}`}
        >
          {t.pricing.cards.map((card: any, idx: number) => (
             <motion.div 
                key={idx} 
                variants={fadeIn} 
                className={`bg-white/5 border ${card.tag ? 'border-indigo-500/50 relative shadow-2xl shadow-indigo-500/10' : 'border-white/10'} p-8 md:p-10 rounded-3xl backdrop-blur-sm flex flex-col transition-transform hover:-translate-y-2`}
             >
                {card.tag && (
                  <div className={`absolute top-0 -translate-y-1/2 bg-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg ${isRTL ? 'left-8' : 'right-8'}`}>
                    {card.tag}
                  </div>
                )}
                <h4 className="text-sm font-black uppercase tracking-widest mb-2 text-slate-300">{card.title}</h4>
                <div className={`flex items-end gap-2 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {card.price === 'Custom' || card.price === 'حسب المقاس' || card.price === 'Sur devis' ? (
                     <span className="text-3xl md:text-4xl font-black">{t.pricing.customPrice}</span>
                  ) : (
                    <>
                      <span className="text-4xl md:text-5xl font-black">{card.price}</span>
                      <span className="text-sm font-bold text-slate-500 mb-1">{t.pricing.currency} {t.pricing.period}</span>
                    </>
                  )}
                </div>
                
                <ul className="space-y-4 text-sm font-medium text-slate-400 mb-10 flex-grow">
                  {card.features.map((f: string, i: number) => {
                    const isHighlight = f.includes("Everything in") || f.includes("Tout ce qui est dans") || f.includes("كل ما في");
                    return (
                      <li key={i} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''} ${isHighlight ? 'text-indigo-300 font-bold' : ''}`}>
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${isHighlight ? 'text-indigo-300' : 'text-indigo-400'}`} /> 
                        <span>{f}</span>
                      </li>
                    );
                  })}
                </ul>
                
                <button onClick={() => window.location.href='mailto:contact@planifie.dz'} className={`w-full py-4 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${card.tag ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-500/20' : 'bg-white text-slate-900 hover:bg-slate-200'}`}>
                  {card.cta}
                </button>
             </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Calculator */}
        <PriceCalculator />

        {/* Payment Methods */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 md:mt-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
              {t.pricing.paymentMethod}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
             {t.pricing.payments.map((payment: string, i: number) => (
                <div key={i} className="group cursor-pointer">
                  <PaymentCard name={payment} />
                </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

