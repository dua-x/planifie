'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, Users, Building2, Bus, Calendar,
   RefreshCw, Clock, User as UserIcon,
  Zap, Settings,
  ChevronLeft, Shield,
  Layout, Search, Filter, Plus
} from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function PlatformShowcase() {
  const { t, isRTL } = useLanguage();
  const [activeRole, setActiveRole] = useState('supervisor');

  const ROLES = [
    { id: 'admin', label: t.showcase.roles.admin, icon: <Shield className="w-4 h-4" />, color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10' },
    { id: 'supervisor', label: t.showcase.roles.supervisor, icon: <Zap className="w-4 h-4" />, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { id: 'employee', label: t.showcase.roles.employee, icon: <UserIcon className="w-4 h-4" />, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  ];

  const ADMIN_LINKS = [
    { name: 'Dashboard', icon: <Layout className="w-4 h-4" />, active: true },
    { name: 'Départements', icon: <Building2 className="w-4 h-4" /> },
    { name: 'Utilisateurs', icon: <Users className="w-4 h-4" /> },
    { name: 'Paramètres', icon: <Settings className="w-4 h-4" /> },
  ];

  const SUPERVISOR_LINKS = [
    { name: 'Planning', icon: <Calendar className="w-4 h-4" />, active: true },
    { name: 'Équipes', icon: <Users className="w-4 h-4" /> },
    { name: 'Absences', icon: <Clock className="w-4 h-4" /> },
    { name: 'Rapports', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  const EMPLOYEE_LINKS = [
    { name: 'Mon Shift', icon: <Clock className="w-4 h-4" />, active: true },
    { name: 'Permutations', icon: <RefreshCw className="w-4 h-4" /> },
    { name: 'Transports', icon: <Bus className="w-4 h-4" /> },
    { name: 'Profil', icon: <UserIcon className="w-4 h-4" /> },
  ];

  return (
    <div id="demo-section" className="w-[60%] h-[30%] py-2 px-4 scroll-mt-24">
      
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {ROLES.map((role) => (
          <button
            key={role.id}
            onClick={() => setActiveRole(role.id)}
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
              activeRole === role.id 
                ? `${role.bg} ${role.color} ring-1 ring-inset ring-white/20 shadow-xl` 
                : 'bg-white/5 text-slate-500 hover:bg-white/10'
            }`}
          >
            {role.icon}
            {role.label}
          </button>
        ))}
      </div>

      {/* Browser Mockup */}
      <motion.div 
        layout
        className="relative bg-slate-900 rounded-[2.5rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        {/* Browser Top Bar */}
        <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-6 gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
          </div>
          <div className="mx-auto bg-white/5 px-4 py-1 rounded-lg text-[9px] font-bold text-slate-500 tracking-wide flex items-center gap-2">
            <Shield className="w-3 h-3" /> app.planifie.dz
          </div>
        </div>

        <div className="flex h-[500px] md:h-[700px]">
          {/* Mock Sidebar */}
          <div className="hidden md:flex w-64 bg-slate-950/50 border-r border-white/10 flex-col p-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Image src="/logo.png" alt="Logo" width={24} height={24} />
              </div>
              <span className="font-black text-lg tracking-tight text-white uppercase italic">Planifié</span>
            </div>
            
            <div className="space-y-2 flex-1">
              {(activeRole === 'admin' ? ADMIN_LINKS : activeRole === 'supervisor' ? SUPERVISOR_LINKS : EMPLOYEE_LINKS).map((link, i) => (
                <div 
                  key={i}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    link.active ? 'bg-indigo-500 text-white' : 'text-slate-500 hover:bg-white/5'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10" />
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-white uppercase">User Name</span>
                <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest">{activeRole}</span>
              </div>
            </div>
          </div>

          {/* Mock Content Area */}
          <div className="flex-1 bg-slate-900/50 overflow-hidden flex flex-col p-6 md:p-10">
            <AnimatePresence mode="wait">
              {activeRole === 'admin' && <AdminMock key="admin" />}
              {activeRole === 'supervisor' && <SupervisorMock key="supervisor" />}
              {activeRole === 'employee' && <EmployeeMock key="employee" />}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function AdminMock() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8 h-full"
    >
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Départements</h3>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Gestion de la structure organisationnelle</p>
        </div>
        <button className="bg-white text-slate-900 px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
          <Plus className="w-3 h-3" /> Nouveau Département
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Logistique', teams: 4, users: 124, color: 'bg-indigo-500' },
          { name: 'Opérations', teams: 8, users: 412, color: 'bg-fuchsia-500' },
          { name: 'Maintenance', teams: 3, users: 86, color: 'bg-emerald-500' },
        ].map((dept, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all group">
            <div className={`w-12 h-1.5 ${dept.color} rounded-full mb-6`} />
            <h4 className="text-lg font-black text-white uppercase tracking-tight mb-4">{dept.name}</h4>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Équipes</span>
                <span className="text-lg font-black text-white">{dept.teams}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Collaborateurs</span>
                <span className="text-lg font-black text-white">{dept.users}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex-1 flex flex-col min-h-0">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
          <span className="text-[10px] font-black text-white uppercase tracking-widest">Activité Récente</span>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500"><Search className="w-4 h-4" /></div>
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500"><Filter className="w-4 h-4" /></div>
          </div>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-indigo-400"><Users className="w-5 h-5" /></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white uppercase">Nouvelle Équipe : Alpha {i}</span>
                  <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Département Opérations • Il y a 2h</span>
                </div>
              </div>
              <ChevronLeft className="w-4 h-4 text-slate-600 rotate-180" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SupervisorMock() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8 h-full flex flex-col"
    >
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Planification Hebdomadaire</h3>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Semaine 18 : 27 Avr - 03 Mai</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-indigo-500 text-white px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center gap-2 shadow-[0_10px_30px_rgba(99,102,241,0.3)]">
            <Zap className="w-3 h-3" /> Auto-Générer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-6 text-center">
          <div className="text-emerald-400 font-black text-xl mb-1">100%</div>
          <div className="text-[9px] font-black text-emerald-400/70 uppercase tracking-widest">Couverture</div>
        </div>
        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-3xl p-6 text-center">
          <div className="text-indigo-400 font-black text-xl mb-1">12</div>
          <div className="text-[9px] font-black text-indigo-400/70 uppercase tracking-widest">Permutations</div>
        </div>
        <div className="bg-rose-500/10 border border-rose-500/20 rounded-3xl p-6 text-center">
          <div className="text-rose-400 font-black text-xl mb-1">0</div>
          <div className="text-[9px] font-black text-rose-400/70 uppercase tracking-widest">Conflits</div>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/20 flex-1 flex flex-col min-h-0">
        <div className="grid grid-cols-[120px_repeat(5,1fr)] bg-white/5 border-b border-white/10">
          <div className="p-4 border-r border-white/10" />
          {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'].map(d => (
            <div key={d} className="p-4 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">{d}</div>
          ))}
        </div>
        <div className="overflow-y-auto">
            {[
            { name: 'S. Benali', shifts: ['M', 'M', 'S', 'OFF', 'N'] },
            { name: 'K. Merad', shifts: ['S', 'S', 'OFF', 'M', 'M'] },
            { name: 'L. Zahra', shifts: ['N', 'OFF', 'N', 'S', 'S'] },
            { name: 'A. Mansour', shifts: ['OFF', 'M', 'M', 'M', 'M'] },
            { name: 'Y. Kassim', shifts: ['M', 'M', 'M', 'OFF', 'S'] },
            ].map((row, i) => (
            <div key={i} className="grid grid-cols-[120px_repeat(5,1fr)] border-b border-white/5 last:border-0">
                <div className="p-4 border-r border-white/10 text-[10px] font-black text-white uppercase">{row.name}</div>
                {row.shifts.map((s, j) => (
                <div key={j} className="p-2 flex items-center justify-center">
                    <div className={`w-full py-2 rounded-lg text-[9px] font-black flex items-center justify-center ${
                    s === 'M' ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 
                    s === 'S' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 
                    s === 'N' ? 'bg-slate-800 text-slate-400' : 'bg-transparent text-slate-600 italic'
                    }`}>
                    {s}
                    </div>
                </div>
                ))}
            </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}

function EmployeeMock() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8 h-full overflow-y-auto pr-2"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Salut, Amine !</h3>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Votre prochain shift commence dans 4 heures</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10">
             <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Solde Congés : 14 Jours</span>
          </div>
        </div>
      </div>

      <div className="bg-indigo-600 rounded-[2rem] p-8 text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
          <Clock className="w-24 h-24" />
        </div>
        <div className="relative z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 block opacity-80">Shift d'Aujourd'hui</span>
          <h4 className="text-4xl font-black uppercase tracking-tighter mb-2 italic">Matin • 08:00 - 17:00</h4>
          <p className="text-sm font-medium opacity-80 max-w-sm mb-6">Position : Superviseur de Ligne A • Transport : Navette 04 (07:15)</p>
          <div className="flex gap-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest">Pointer l'Arrivée</button>
            <button className="bg-transparent border border-white/30 hover:bg-white/10 px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-colors">Permuter</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Mes Prochains Jours</h5>
          <div className="space-y-4">
            {[
              { day: 'Demain', date: '28 Avr', shift: 'Matin', color: 'text-indigo-400' },
              { day: 'Mercredi', date: '29 Avr', shift: 'Soir', color: 'text-amber-400' },
              { day: 'Jeudi', date: '30 Avr', shift: 'Repos', color: 'text-slate-500' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white uppercase">{item.day}</span>
                  <span className="text-[8px] font-bold text-slate-500 uppercase">{item.date}</span>
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${item.color}`}>{item.shift}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
              <Bus className="w-6 h-6" />
            </div>
            <h5 className="text-[10px] font-black text-white uppercase tracking-widest mb-2">Transport Assigné</h5>
            <p className="text-xs text-slate-400 font-medium mb-4">Ligne Ouest - Arrêt Grande Poste</p>
            <button className="text-[9px] font-black text-indigo-400 uppercase tracking-widest hover:underline">Voir l'itinéraire</button>
        </div>
      </div>
    </motion.div>
  );
}
