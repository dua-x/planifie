'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Construction, Clock, Shield, Zap } from 'lucide-react';

export default function SoonPage() {
  return (
    <div className="min-h-screen bg-slate-900 dark:bg-black text-white font-sans selection:bg-indigo-500/30 overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none
        bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
        bg-[size:30px_30px] md:bg-[size:40px_40px]"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-indigo-500/10 blur-[60px] md:blur-[120px] rounded-full pointer-events-none" />

      {/* Navbar Minimalist */}
      <nav className="fixed top-0 w-full z-[100] px-4 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shadow-xl overflow-hidden backdrop-blur-md">
              <Image src="/logo.png" alt="Logo Planifié" width={32} height={32} className="object-contain" />
            </div>
            <span className="text-lg font-black tracking-tight text-white uppercase">
              Planifié
            </span>
          </Link>
          <Link 
            href="/" 
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Retour
          </Link>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-10 shadow-2xl backdrop-blur-md"
        >
          <Construction className="w-3 h-3 text-indigo-400" />
          Déploiement en cours
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 md:mb-8 leading-[1.1] md:leading-[1] uppercase"
        >
          Portail <br className="sm:hidden" />
          <span className="text-slate-500 text-2xl sm:text-5xl md:text-7xl block sm:inline mt-2 sm:mt-0">Bientôt Disponible.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-xl text-slate-400 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Notre infrastructure de production est en cours de finalisation pour vous offrir une expérience optimale de gestion des ressources.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6 max-w-3xl w-full mb-10 md:mb-12"
        >
          <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm col-span-1">
            <Shield className="w-5 h-5 md:w-6 md:h-6 text-indigo-400 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-[9px] md:text-xs font-black uppercase tracking-widest mb-1 md:mb-2">Sécurité</h3>
            <p className="text-[8px] md:text-[10px] text-slate-500 leading-relaxed uppercase">Audit final</p>
          </div>
          <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm col-span-1">
            <Zap className="w-5 h-5 md:w-6 md:h-6 text-indigo-400 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-[9px] md:text-xs font-black uppercase tracking-widest mb-1 md:mb-2">Vitesse</h3>
            <p className="text-[8px] md:text-[10px] text-slate-500 leading-relaxed uppercase">Optimisation</p>
          </div>
          <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm col-span-2 sm:col-span-1">
            <Clock className="w-5 h-5 md:w-6 md:h-6 text-indigo-400 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-[9px] md:text-xs font-black uppercase tracking-widest mb-1 md:mb-2">Status</h3>
            <p className="text-[8px] md:text-[10px] text-slate-500 leading-relaxed uppercase">Lancement imminent</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/"
            className="group flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-xl text-xs font-black uppercase tracking-widest transition-all hover:scale-105 shadow-xl"
          >
            Revenir à l'accueil
          </Link>
        </motion.div>
      </main>

      <footer className="fixed bottom-0 w-full py-8 text-center border-t border-white/5 bg-slate-900/50 backdrop-blur-md">
        <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em]">
          Planifié © 2026 • Système de Planification Intelligent
        </p>
      </footer>
    </div>
  );
}
