'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, Zap, Shield, Users, 
  Clock, Calendar, Globe, Building2, BarChart3, 
  MousePointer2, Sparkles, LayoutDashboard, Database,
  CheckCircle2, MessageSquare, Bot, Activity,
  Cpu, Lock, Layers, Settings2, Terminal
} from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  MousePointer2: <MousePointer2 className="w-6 h-6" />,
  LayoutDashboard: <LayoutDashboard className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  Calendar: <Calendar className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />
};

const BlueprintContainer = ({ children, title }: { children: React.ReactNode, title: string }) => (
  <div className="relative w-full aspect-video bg-white rounded-3xl border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col group select-none">
    {/* Browser/Window Header */}
    <div className="h-10 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between px-6 shrink-0">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
      </div>
      <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">{title}</div>
      <div className="w-12" />
    </div>
    
    {/* Technical Blueprint Content */}
    <div className="flex-1 relative bg-[radial-gradient(#f1f5f9_1.5px,transparent_1.5px)] bg-[size:20px_20px] flex items-center justify-center p-12 overflow-hidden">
       {/* Decorative Lines */}
       <div className="absolute top-0 left-1/2 w-px h-full bg-slate-100 -translate-x-1/2" />
       <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2" />
       
       <div className="relative z-10 w-full h-full border border-dashed border-slate-200 rounded-xl flex items-center justify-center bg-white/40 backdrop-blur-[2px]">
          {children}
       </div>

       {/* Floating Labels */}
       <div className="absolute top-6 left-6 flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
          <Cpu className="w-3 h-3 text-indigo-500" />
          <span className="text-[8px] font-black uppercase text-slate-400">Analysis Engine</span>
       </div>
       <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg shadow-xl">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[8px] font-black uppercase text-white tracking-widest">Live System</span>
       </div>
    </div>
  </div>
);

const FeatureSection = ({ title, desc, capture, index, isRTL, slug }: { title: string, desc: string, capture: string, index: number, isRTL: boolean, slug: string }) => (
  <div 
    className={`flex flex-col ${index % 2 === 0 ? (isRTL ? 'md:flex-row-reverse' : 'md:flex-row') : (isRTL ? 'md:flex-row' : 'md:flex-row-reverse')} gap-10 md:gap-24 items-center py-16 md:py-32 border-b border-slate-100 last:border-0`}
  >
    <div className={`flex-1 space-y-10 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center">
           <Settings2 className="w-5 h-5 text-indigo-600" />
        </div>
        <div className="h-[1px] flex-1 bg-slate-100" />
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Module 0{index + 1}</span>
      </div>

      <div className="space-y-6">
        <h3 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase leading-[0.9]">{title}</h3>
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">{desc}</p>
      </div>

      <ul className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
        {['Optimisation Temps-Réel', 'Intégration ERP native', 'Sécurité Bancaire'].map((item, i) => (
          <li key={i} className={`flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
             <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {item}
          </li>
        ))}
      </ul>
    </div>

    <div className="flex-1 w-full">
      <BlueprintContainer title={capture}>
         <div className="relative group-hover:scale-110 transition-transform duration-700">
            {iconMap[slug === 'dossiers-collaborateurs' ? 'Users' : slug === 'gestion-temps' ? 'Clock' : slug === 'workflows-conges' ? 'Calendar' : 'Zap'] || <Zap className="w-12 h-12 text-slate-300" />}
         </div>
      </BlueprintContainer>
    </div>
  </div>
);

export default function SolutionDetailClient({ slug }: { slug: string }) {
  const { t, isRTL } = useLanguage();
  const detail = t.solutions_detail?.[slug];

  if (!detail) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Bientôt Disponible</h1>
        <Link href="/" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-2xl">
          Retour au Dashboard
        </Link>
      </div>
    );
  }

  const titleWords = (detail.title || '').split(' ').filter(Boolean);

  return (
    <div className={`min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-500/30 overflow-x-hidden ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
      <Navbar onShowTour={() => {}} variant="solid" />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-16 md:pt-56 md:pb-40 bg-white overflow-hidden">
        {/* Exact Home Page Grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(#000_1.5px,transparent_1px),linear-gradient(90deg,#000_1.5px,transparent_1px)] bg-[size:25px_25px] md:bg-[size:40px_40px]" />

        {/* Technical Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/[0.04] blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute top-1/4 left-0 w-px h-1/2 bg-gradient-to-b from-transparent via-slate-100 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
            
            {/* ── CONTENT (Order 1 in LTR, Order 2 in RTL visually) ── */}
            <div className={`space-y-10 md:space-y-12 ${isRTL ? 'text-right items-end order-1 lg:order-2' : 'text-left items-start order-1 lg:order-1'}`}>
              {/* Header Metadata */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex items-center gap-5 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <Link href="/" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 group">
                  <ArrowLeft className={`w-4 h-4 group-hover:-translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:translate-x-1' : ''}`} /> {isRTL ? 'الرئيسية' : 'Accueil'}
                </Link>
                <div className="h-[2px] w-12 bg-slate-100" />
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-slate-300" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{slug.toUpperCase()} // READY</span>
                </div>
              </motion.div>
              
              {/* Title (Black words on line 1, Gray word on line 2) */}
              <div className={`flex flex-col gap-y-1 w-full ${isRTL ? 'items-end' : 'items-start'}`}>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={[
                    'block leading-[0.9] tracking-tighter uppercase font-black text-slate-900 transition-all max-w-full',
                    isRTL ? 'font-arabic text-right' : '',
                    'text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[4.5rem]',
                  ].join(' ')}
                >
                  {titleWords.slice(0, -1).join(' ')}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={[
                    'block leading-[0.9] tracking-tighter uppercase font-black text-slate-400 transition-all max-w-full',
                    isRTL ? 'font-arabic text-right' : '',
                    'text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[4.5rem]',
                  ].join(' ')}
                >
                  {titleWords[titleWords.length - 1]}
                </motion.span>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed tracking-tight"
              >
                {detail.heroDesc}
              </motion.p>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`flex flex-wrap items-center gap-4 md:gap-6 pt-6 md:pt-8 relative z-20 md:p-12 md:-m-12 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}
                style={{ overflow: 'visible' }}
              >
                <Link
                  href="/#contact"
                  className={`group relative flex items-center justify-center px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 shadow-xl hover:shadow-[0_32px_64px_-16px_rgba(79,70,229,0.5)] hover:scale-105 active:scale-95 bg-indigo-600 text-white w-full sm:w-auto ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span className="relative z-10">{isRTL ? 'طلب عرض' : 'Demander une démo'}</span>
                  <ArrowRight className={`relative z-10 w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>

                <Link
                  href="#features"
                  className={`flex items-center justify-center px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 border border-slate-200 hover:border-slate-950 text-slate-900 bg-white hover:shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {isRTL ? 'استكشاف الميزات' : 'Explorer les fonctions'}
                </Link>
              </motion.div>
            </div>

            {/* ── VISUAL (Order 2 in LTR, Order 1 in RTL visually) ── */}
            <div className={`hidden lg:flex items-center ${isRTL ? 'justify-start order-1 lg:order-1' : 'justify-end order-2 lg:order-2'}`}>
               <div className="w-full max-w-[500px]">
                  <BlueprintContainer title={detail.title}>
                     <div className="scale-150">
                        {iconMap[slug === 'dossiers-collaborateurs' ? 'Users' : slug === 'transport-logistique' ? 'Bus' : slug === 'workflows-conges' ? 'Calendar' : 'Zap'] || <Zap className="w-12 h-12 text-slate-300" />}
                     </div>
                  </BlueprintContainer>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- VALUE PROPS GRID --- */}
      <section className="bg-slate-50 border-y border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isRTL ? '[direction:rtl]' : ''}`}>
            {detail.benefits.map((benefit: any, i: number) => (
              <div key={i} className={`p-10 bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                   {(() => {
                      const keys = Object.keys(iconMap);
                      const key = keys[i % keys.length];
                      return key ? iconMap[key] : <Zap className="w-6 h-6" />;
                   })()}
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-black text-slate-950 uppercase tracking-widest leading-none">{benefit.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DEEP DIVE FEATURES --- */}
      <section id="features" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {detail.sections.map((section: any, i: number) => (
            <FeatureSection 
              key={i} 
              index={i}
              title={section.title}
              desc={section.desc}
              capture={section.capture}
              isRTL={isRTL}
              slug={slug}
            />
          ))}
        </div>
      </section>

      {/* --- ENTERPRISE SCALE CTA --- */}
      <section className="py-40 md:py-60 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1.5px,transparent_1.5px)] bg-[size:30px_30px]" />
        
        <div className="max-w-5xl mx-auto px-4 text-center space-y-16 relative z-10">
           <div className="space-y-8">
             <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-indigo-50 border border-indigo-100 mb-4">
                <Lock className="w-4 h-4 text-indigo-600" />
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">Solution Sécurisée ISO-27001</span>
             </div>
             <h2 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-[0.85]">
               {isRTL ? 'انتقل إلى السرعة' : 'Passez à la vitesse'} <br /> <span className="text-indigo-600">{isRTL ? 'القصوى' : 'supérieure'}</span>
             </h2>
             <p className="text-xl text-slate-500 font-medium max-w-xl mx-auto">
               Déployez une infrastructure de planification intelligente en moins de 48 heures.
             </p>
           </div>

           <Link href="/#contact" className="inline-flex items-center gap-6 bg-slate-950 text-white px-14 py-7 rounded-3xl text-[11px] font-black uppercase tracking-[0.4em] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] hover:scale-105 hover:bg-indigo-600 transition-all group">
             {isRTL ? 'ابدأ الآن' : 'Démarrer l\'implémentation'} <ArrowRight className={`w-6 h-6 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
           </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
