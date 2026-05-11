'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className={`flex flex-col md:flex-row justify-between items-start gap-12 mb-16 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <div className={`flex flex-col gap-6 ${isRTL ? 'items-end' : 'items-start'}`}>
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Image src="/logo.png" alt="Logo" width={64} height={64} className="opacity-80" />
              <span className="text-lg font-black tracking-medium text-slate-900 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 opacity-80">Planifié</span>
            </div>
            <p className={`text-slate-500 text-xs font-medium max-w-xs leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.footer.desc}
            </p>
          </div>

          <div className={`grid grid-cols-2 gap-10 md:gap-20 w-full md:w-auto ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-2 border-b border-white/5 pb-2">{t.footer.product}</span>
              <Link href="/#features" className="text-slate-500 hover:text-white text-[11px] font-bold transition-colors">{t.common.solutions}</Link>
              <Link href="/#how-it-works" className="text-slate-500 hover:text-white text-[11px] font-bold transition-colors">{t.common.methodology}</Link>
              <Link href="/#enterprise" className="text-slate-500 hover:text-white text-[11px] font-bold transition-colors">{t.common.enterprise}</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-2 border-b border-white/5 pb-2">{t.footer.legal}</span>
              <Link href="/politique-confidentialite" className="text-slate-500 hover:text-white text-[11px] font-bold transition-colors">{isRTL ? 'الخصوصية' : 'Confidentialité'}</Link>
              <Link href="#" className="text-slate-500 hover:text-white text-[11px] font-bold transition-colors">{isRTL ? 'إشعارات' : 'Mentions'}</Link>
              <a href="mailto:contact@planifie.dz" className="text-slate-500 hover:text-white text-[11px] font-bold transition-colors">{t.common.contact}</a>
            </div>
          </div>
        </div>

        <div className={`pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <div className="text-[9px] font-black text-slate-600 uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Planifié Operations. {t.footer.rights}
          </div>
          <div className="flex gap-6 text-[9px] font-black text-slate-600 uppercase tracking-widest italic">
            Built for performance
          </div>
        </div>
      </div>
    </footer>
  );
}
