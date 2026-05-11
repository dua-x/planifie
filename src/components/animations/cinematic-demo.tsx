'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, Sparkles, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function CinematicDemo() {
  const { t, isRTL } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const STAGE_WIDTH = 1920;
  const STAGE_HEIGHT = 1080;

  const handleStart = () => {
    setIsPlaying(true);
    if (iframeRef.current?.contentWindow) {
      // Send trigger SYNCHRONOUSLY to bypass mobile audio block
      iframeRef.current.contentWindow.postMessage('play-audio', '*');
    }
  };

  // Handle scaling logic to fit 1920x1080 stage into current container
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth;
      // The container uses aspect-video, so we calculate based on width mostly
      const scaleValue = containerWidth / STAGE_WIDTH;
      setScale(scaleValue);
    };

    if (isPlaying) {
      window.addEventListener('resize', handleResize);
      setTimeout(handleResize, 100);
    }
    
    return () => window.removeEventListener('resize', handleResize);
  }, [isPlaying]);

  return (
    <section id="how-it-works" className="py-24 md:py-40 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-600 rounded-full filter blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 font-black text-[10px] uppercase tracking-[0.3em] mb-8"
          >
            <Sparkles className="w-3 h-3" /> {t.common.methodology}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8"
          >
            Découvrez <span className="text-indigo-500">Planifié</span> <br /> en action
          </motion.h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Une immersion dans le quotidien d'un manager et comment l'intelligence opérationnelle transforme le chaos en performance.
          </p>
        </div>

        {/* Demo Player Container */}
        <div className="relative max-w-5xl mx-auto group">
          {/* Decorative Frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative aspect-video bg-[#020617] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center" ref={containerRef}>

            {/* ALWAYS MOUNTED IFRAME FOR SYNCHRONOUS AUDIO TRIGGER */}
            <div 
              style={{
                width: `${STAGE_WIDTH}px`,
                height: `${STAGE_HEIGHT}px`,
                transform: `scale(${scale})`,
                transformOrigin: 'center center',
                flexShrink: 0
              }}
              className="relative z-10"
            >
              <iframe 
                ref={iframeRef}
                src="/demo-scenes/scene0_intro.html" 
                className="w-full h-full border-none"
                allow="autoplay"
              />
            </div>

            <AnimatePresence>
              {!isPlaying && (
                <motion.div 
                  key="poster"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-sm z-20 cursor-pointer"
                  onClick={handleStart}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-3xl shadow-indigo-500/50 mb-8"
                  >
                    <Play className="w-10 h-10 text-white fill-current ml-2" />
                  </motion.div>
                  <span className="text-white font-black uppercase tracking-[0.3em] text-sm">Lancer l'expérience</span>
                  <div className="mt-6 flex items-center gap-2 text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                    <Volume2 className="w-4 h-4" /> Audio requis pour une immersion totale
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Exit Demo Button */}
            <AnimatePresence>
              {isPlaying && (
                <motion.button 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => {
                    setIsPlaying(false);
                    // Reset iframe
                    if (iframeRef.current) {
                      iframeRef.current.src = "/demo-scenes/scene0_intro.html";
                    }
                  }}
                  className="absolute top-6 right-6 z-30 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white/60 hover:text-white transition-all backdrop-blur-md border border-white/10"
                >
                  <AlertCircle className="w-6 h-6" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
