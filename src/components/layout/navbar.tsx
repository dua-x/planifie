'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, Menu, X, Sparkles, Zap, Users,
  Calendar, Bus, BarChart3, Shield, Globe, Mail,
  ArrowRight, FileText, CheckCircle2, Clock, 
  Building2, Headphones, Store, Factory, Activity
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Language } from '@/lib/i18n/translations';

export default function Navbar({ onShowTour, variant = 'transparent' }: { onShowTour: () => void, variant?: 'transparent' | 'solid' }) {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(variant === 'solid');

  const LANGUAGES = [
    { code: 'ar', label: 'العربية' },
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' }
  ];

  const SOLUTIONS_CONFIG = [
    {
      title: t.navbar.pilotage,
      items: [
        { name: t.solutions_detail["dossiers-collaborateurs"].title, desc: t.solutions_detail["dossiers-collaborateurs"].tagline, icon: <Users className="w-4 h-4" />, slug: "dossiers-collaborateurs" },
        { name: t.solutions_detail["transport-logistique"].title, desc: t.solutions_detail["transport-logistique"].tagline, icon: <Bus className="w-4 h-4" />, slug: "transport-logistique" },
        { name: t.solutions_detail["workflows-conges"].title, desc: t.solutions_detail["workflows-conges"].tagline, icon: <Calendar className="w-4 h-4" />, slug: "workflows-conges" },
        { name: t.solutions_detail["portail-self-service"].title, desc: t.solutions_detail["portail-self-service"].tagline, icon: <Globe className="w-4 h-4" />, slug: "portail-self-service" },
      ]
    },
    {
      title: t.navbar.optimization,
      items: [
        { name: t.solutions_detail["planning-intelligent"].title, desc: t.solutions_detail["planning-intelligent"].tagline, icon: <Zap className="w-4 h-4" />, slug: "planning-intelligent" },
        { name: t.solutions_detail["equite-contraintes"].title, desc: t.solutions_detail["equite-contraintes"].tagline, icon: <Shield className="w-4 h-4" />, slug: "equite-contraintes" },
        { name: t.solutions_detail["multi-entites"].title, desc: t.solutions_detail["multi-entites"].tagline, icon: <Building2 className="w-4 h-4" />, slug: "multi-entites" },
        { name: t.solutions_detail["analytics-kpis"].title, desc: t.solutions_detail["analytics-kpis"].tagline, icon: <BarChart3 className="w-4 h-4" />, slug: "analytics-kpis" },
      ]
    }
  ];

  const INDUSTRIES_CONFIG = [
    {
      title: t.navbar.logistique,
      items: [
        { name: t.industries.items[1].title, desc: t.industries.items[1].desc, icon: <Factory className="w-4 h-4" />, slug: "#industries" },
        { name: t.navbar.logistique, desc: t.navbar.explore, icon: <Bus className="w-4 h-4" />, slug: "#industries" },
      ]
    },
    {
      title: t.navbar.services,
      items: [
        { name: t.industries.items[0].title, desc: t.industries.items[0].desc, icon: <Activity className="w-4 h-4" />, slug: "#industries" },
        { name: t.industries.items[3].title, desc: t.industries.items[3].desc, icon: <Headphones className="w-4 h-4" />, slug: "#industries" },
      ]
    }
  ];

  const RESOURCES_CONFIG = [
    {
      title: t.navbar.informer,
      items: [
        { name: t.resources_detail["etudes-cas"].name, desc: t.resources_detail["etudes-cas"].desc, icon: <FileText className="w-4 h-4" />, slug: "#contact" },
        { name: t.resources_detail["blog"].name, desc: t.resources_detail["blog"].desc, icon: <Sparkles className="w-4 h-4" />, slug: "#contact" },
      ]
    },
    {
      title: t.navbar.support,
      items: [
        { name: t.resources_detail["centre-aide"].name, desc: t.resources_detail["centre-aide"].desc, icon: <Shield className="w-4 h-4" />, slug: "#help-center" },
        { name: t.resources_detail["webinaires"].name, desc: t.resources_detail["webinaires"].desc, icon: <Zap className="w-4 h-4" />, slug: "#contact" },
      ]
    }
  ];

  useEffect(() => {
    if (variant === 'solid') {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [variant]);

  const MegaMenu = ({ data, type }: { data: any[], type: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      className={`absolute top-full pt-4 ${isRTL ? 'right-0' : '-left-20'} z-[200]`}
    >
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border border-slate-200 dark:border-slate-800 p-8 w-[800px]">
        <div className={`grid grid-cols-2 gap-10 ${isRTL ? 'text-right' : 'text-left'}`}>
          {data.map((section, idx) => ( section.title && (
            <div key={idx}>
              <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em] mb-8 border-b border-slate-100 dark:border-slate-800 pb-2">{section.title}</h4>
              <div className="space-y-6">
                {section.items.map((item: any, i: number) => (
                  <Link 
                    key={i} 
                    href={item.slug.startsWith('#') ? `/${item.slug}` : `/${type}/${item.slug}`} 
                    className={`group/item flex items-start gap-4 cursor-pointer p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all ${isRTL ? 'flex-row' : ''}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all shadow-sm shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover/item:text-indigo-600 transition-colors">{item.name}</span>
                      <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{item.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )))}
        </div>
        
        <div className={`mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
             <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-400 to-slate-600 opacity-20" />
                </div>
              ))}
            </div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{t.navbar.clientsCount}</p>
          </div>
          <button onClick={onShowTour} className={`text-[10px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-2 group/btn ${isRTL ? 'flex-row-reverse' : ''}`}>
            {t.navbar.explore} <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'rotate-180 group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'}`} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 py-3'
        : 'bg-transparent py-7'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Brand Logo Section (Naturally Right in RTL due to flex) */}
            <div className="flex items-center gap-3 md:gap-4 cursor-pointer shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                
                <Image src="/logo.png" alt="Logo Planifié" width={64} height={64} className="object-contain" />
                
                <span className={`text-lg md:text-xl font-black tracking-medium bg-clip-text text-transparent bg-gradient-to-r ${
                  !scrolled 
                    ? 'from-white to-slate-400' 
                    : 'from-slate-900 to-slate-600 dark:from-white dark:to-slate-400'
                }`}>
                  Planifié
                </span>
            </div>

          {/* Desktop Navigation (Naturally Center in RTL) */}
          <div className="hidden lg:flex items-center gap-2">
            {[
              { id: 'solutions', label: t.common.solutions, data: SOLUTIONS_CONFIG, hasDropdown: true, href: '/#features' },
              { id: 'industries', label: t.common.industries, data: INDUSTRIES_CONFIG, hasDropdown: true, href: '/#industries' },
              { id: 'resources', label: t.common.resources, data: RESOURCES_CONFIG, hasDropdown: true, href: '/#contact' },
              { id: 'enterprise', label: t.common.enterprise, href: '/#enterprise', hasDropdown: false }
            ].map((navItem) => (
              <div 
                key={navItem.id}
                className="relative px-4 py-2"
                onMouseEnter={() => {
                  if (navItem.hasDropdown) setActiveDropdown(navItem.id);
                  setHoveredItem(navItem.id);
                }} 
                onMouseLeave={() => {
                  if (navItem.hasDropdown) setActiveDropdown(null);
                  setHoveredItem(null);
                }}
              >
                {/* Background Pill Hover Effect */}
                <AnimatePresence>
                  {hoveredItem === navItem.id && (
                    <motion.div
                      layoutId="nav-pill"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
                      className={`absolute inset-0 rounded-xl z-0 ${
                        scrolled 
                          ? 'bg-slate-100 dark:bg-slate-800' 
                          : 'bg-white/10 backdrop-blur-md'
                      }`}
                    />
                  )}
                </AnimatePresence>

                {navItem.hasDropdown ? (
                  <Link href={navItem.href || '#'} className={`relative z-10 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                    hoveredItem === navItem.id || activeDropdown === navItem.id
                      ? (scrolled ? 'text-indigo-600 dark:text-indigo-400' : 'text-white')
                      : (scrolled ? 'text-slate-600 dark:text-slate-400' : 'text-white/70')
                  }`}>
                    {navItem.label} 
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === navItem.id ? 'rotate-180' : ''}`} />
                  </Link>
                ) : (
                  <Link href={navItem.href!} className={`relative z-10 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                    hoveredItem === navItem.id
                      ? (scrolled ? 'text-indigo-600 dark:text-indigo-400' : 'text-white')
                      : (scrolled ? 'text-slate-600 dark:text-slate-400' : 'text-white/70')
                  }`}>
                    {navItem.label}
                  </Link>
                )}

                <AnimatePresence>
                  {activeDropdown === navItem.id && navItem.hasDropdown && (
                    <MegaMenu data={navItem.data!} type={navItem.id} />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Action Section (Naturally Left in RTL) */}
          <div className="flex items-center gap-3">
            {/* Language Selection */}
            <div className="relative group">
              <button className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-[10px] font-black uppercase tracking-widest ${scrolled ? 'text-slate-600 border-slate-200 hover:bg-slate-50' : 'text-white/80 border-white/10 hover:bg-white/5'}`}>
                <Globe className="w-3.5 h-3.5" /> {language}
              </button>
              <div className={`absolute top-full pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all ${isRTL ? 'right-0' : 'left-0'}`}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden min-w-[140px] p-2 space-y-1">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as Language)}
                      className={`w-full px-4 py-2.5 rounded-xl text-[10px] font-black uppercase text-left transition-all ${language === lang.code ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'} ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Portal & CTA */}
            <div className="hidden md:flex items-center gap-4">
               <Link href="/soon" className={`hidden md:block text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
              {t.common.clientPortal}
            </Link>
              <button
              onClick={onShowTour}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-lg flex items-center gap-2 ${scrolled
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-105'
                : 'bg-white text-slate-900 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                }`}
            >
             {t.common.demo}
            </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-all ${scrolled ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white' : 'bg-white/10 text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className={`px-6 py-10 space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`space-y-4 flex flex-col ${isRTL ? 'items-end' : 'items-start'}`}>
                <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest">{isRTL ? 'التنقل' : 'Navigation'}</span>
                <div className={`flex flex-col gap-6 w-full ${isRTL ? 'items-end' : 'items-start'}`}>
                  <Link href="/#features" onClick={() => setIsMenuOpen(false)} className="text-[14px] font-black uppercase tracking-tight text-slate-900 dark:text-white">{t.common.solutions}</Link>
                  <Link href="/#industries" onClick={() => setIsMenuOpen(false)} className="text-[14px] font-black uppercase tracking-tight text-slate-900 dark:text-white">{t.common.industries}</Link>
                  <Link href="/resources/centre-aide" onClick={() => setIsMenuOpen(false)} className="text-[14px] font-black uppercase tracking-tight text-slate-900 dark:text-white">{t.common.resources}</Link>
                  <Link href="/#enterprise" onClick={() => setIsMenuOpen(false)} className="text-[14px] font-black uppercase tracking-tight text-slate-900 dark:text-white">{t.common.enterprise}</Link>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => { setIsMenuOpen(false); onShowTour(); }}
                  className="w-full flex items-center justify-center gap-3 bg-slate-950 dark:bg-white text-white dark:text-slate-900 py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl"
                >
                  {t.navbar.startProject} <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
