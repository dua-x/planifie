'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye, Database, FileText } from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-indigo-500/30">
      <Navbar onShowTour={() => {}} variant="solid" />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="space-y-6">
              <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-600 hover:gap-3 transition-all">
                <ArrowLeft className="w-4 h-4" /> Retour
              </Link>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                Politique de <br /> <span className="text-indigo-600">Confidentialité</span>
              </h1>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.2em]">Dernière mise à jour : 7 Mai 2026</p>
            </div>

            {/* Introduction Card */}
            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-indigo-600">
                <Shield className="w-6 h-6" />
                <h2 className="text-lg font-black uppercase tracking-tight">Engagement de Protection</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Chez **Planifié**, nous considérons la protection de vos données personnelles comme un pilier fondamental de notre relation de confiance. Cette politique détaille comment nous collectons, utilisons et sécurisons vos informations via nos formulaires de contact et notre plateforme.
              </p>
            </div>

            {/* Main Content Sections */}
            <div className="space-y-16 py-8">
              
              {/* Section 1 */}
              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">1. Collecte des Données</h3>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 font-medium leading-relaxed ml-14">
                  <p>Nous collectons uniquement les informations nécessaires au traitement de vos demandes de démonstration, devis ou contact :</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Nom et Prénom</li>
                    <li>Email professionnel</li>
                    <li>Numéro de téléphone</li>
                    <li>Nom de l'entreprise</li>
                    <li>Taille de l'effectif</li>
                    <li>Défis opérationnels (via le champ message)</li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">2. Utilisation des Informations</h3>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 font-medium leading-relaxed ml-14">
                  <p>Vos données sont utilisées strictement pour :</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Répondre à vos demandes spécifiques de devis ou de démonstration.</li>
                    <li>Vous contacter dans le cadre de la gestion de votre projet.</li>
                    <li>Améliorer nos services et notre plateforme logicielle.</li>
                    <li>Vous envoyer des communications marketing (uniquement si vous avez donné votre accord explicite).</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">3. Sécurité et Confidentialité</h3>
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed ml-14 space-y-4">
                  <p>Planifié met en œuvre des protocoles de sécurité rigoureux (chiffrement SSL, serveurs sécurisés) pour protéger vos données contre tout accès non autorisé.</p>
                  <p>**Nous ne vendons, ne louons et ne partageons jamais vos données personnelles avec des tiers** à des fins commerciales sans votre consentement préalable, sauf obligation légale.</p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">4. Vos Droits</h3>
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed ml-14 space-y-4">
                  <p>Conformément aux réglementations sur la protection des données (RGPD), vous disposez des droits suivants :</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Droit d'accès et de rectification de vos données.</li>
                    <li>Droit à l'effacement (droit à l'oubli).</li>
                    <li>Droit à la limitation du traitement.</li>
                    <li>Droit d'opposition à tout moment à l'utilisation de vos données.</li>
                  </ul>
                  <p>Pour exercer ces droits, contactez-nous simplement à : **contact@planifie.dz**</p>
                </div>
              </section>

            </div>

            {/* Final CTA */}
            <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-center space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Une question sur vos données ?</h2>
              <p className="text-slate-400 font-medium">Notre délégué à la protection des données est à votre disposition.</p>
              <a href="mailto:contact@planifie.dz" className="inline-flex items-center gap-3 text-indigo-400 font-black uppercase tracking-widest hover:gap-4 transition-all">
                Nous contacter <ArrowLeft className="w-4 h-4 rotate-180" />
              </a>
            </div>

          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
