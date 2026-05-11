'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, X, RefreshCw, Minimize2, RotateCw } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface InteractiveTourProps {
  isModal?: boolean;
  onClose?: () => void;
}

export default function InteractiveTour({ isModal = false, onClose }: InteractiveTourProps) {
  const { isRTL } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [scale, setScale] = useState(1);
  const [isPortrait, setIsPortrait] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Constants for the virtual stage
  const STAGE_WIDTH = 1920;
  const STAGE_HEIGHT = 1080;

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleStart = () => {
    setIsPlaying(true);
    if (iframeRef.current?.contentWindow) {
      // Send trigger SYNCHRONOUSLY to bypass mobile audio block
      iframeRef.current.contentWindow.postMessage('play-audio', '*');
    }
  };

  // Handle scaling and rotation logic to fit 1920x1080 stage
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const isLarge = window.innerWidth >= 1024;
      const padding = isLarge ? 128 : 16; 

      const containerWidth = containerRef.current.offsetWidth - padding;
      const containerHeight = containerRef.current.offsetHeight - padding;
      
      if (containerWidth <= 0 || containerHeight <= 0) return;

      const portrait = containerHeight > containerWidth;
      setIsPortrait(portrait);

      if (portrait) {
        // In portrait, we rotate 90deg, so stage width must fit container height
        const scaleW = containerWidth / STAGE_HEIGHT;
        const scaleH = containerHeight / STAGE_WIDTH;
        setScale(Math.min(scaleW, scaleH));
      } else {
        const scaleW = containerWidth / STAGE_WIDTH;
        const scaleH = containerHeight / STAGE_HEIGHT;
        setScale(Math.min(scaleW, scaleH));
      }
    };

    // Run immediately on mount to establish scale for the poster/background
    handleResize();
    
    window.addEventListener('resize', handleResize);
    // Small delay to ensure container is fully rendered
    const timeout = setTimeout(handleResize, 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeout);
    };
  }, [isModal]);

  const containerClasses = isModal
    ? "w-full h-full flex items-center justify-center overflow-hidden"
    : "w-full mx-auto mt-12 md:mt-24 lg:mt-40 lg:mb-20 px-4 relative z-20 aspect-video max-w-7xl";

  const cardClasses = isModal
    ? "w-full h-full relative"
    : "w-full h-full bg-slate-900 rounded-[2rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative group";

  return (
    <div className={containerClasses} ref={containerRef}>
      <div className={cardClasses}>

        {/* Glow effect for non-modal */}
        {!isModal && (
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}

        <div className="relative w-full h-full bg-slate-950 overflow-hidden flex items-center justify-center p-4 lg:p-16">
          
          {/* Rotation Hint for Mobile (Forced visibility on small screens when not playing) */}
          {!isPlaying && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-6 left-50 -translate-x-1/2 flex md:hidden flex-col items-center px-6 md:py-4 rounded-[2rem] bg-indigo-500/20 backdrop-blur-xl border border-indigo-400/30 z-[9999] min-w-[220px] shadow-2xl pointer-events-none"
            >
              <RotateCw className="w-4 h-4 text-indigo-400 animate-spin" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest text-center leading-relaxed">
                Tour optimisé en paysage<br/>
                <span className="text-indigo-300 font-bold">Rotation auto activée</span>
              </span>
            </motion.div>
          )}

          {/* SCALED & ROTATED CONTAINER FOR BOTH POSTER AND IFRAME */}
          <div 
            style={{
              width: `${STAGE_WIDTH}px`,
              height: `${STAGE_HEIGHT}px`,
              transform: `scale(${scale}) ${isPortrait ? 'rotate(90deg)' : ''}`,
              transformOrigin: 'center center',
              flexShrink: 0
            }}
            className="relative shadow-2xl bg-black overflow-hidden"
          >
             <iframe
                ref={iframeRef}
                src="/demo-scenes/tour_interactive.html?tour=true"
                className={`w-full h-full border-none transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
                allow="autoplay"
              />

            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  key="poster"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 z-20 cursor-pointer"
                  onClick={handleStart}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-25" />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative w-20 h-20 md:w-24 md:h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-3xl shadow-indigo-500/50"
                    >
                      <Play className={`w-8 h-8 md:w-10 md:h-10 text-white fill-current ${isRTL ? 'mr-2' : 'ml-2'}`} />
                    </motion.div>
                  </div>

                  <span className="mt-8 text-white font-black uppercase tracking-[0.4em] text-xs md:text-sm px-6 text-center">
                    Lancer l'expérience interactive
                  </span>

                  <div className="mt-4 flex items-center gap-2 text-slate-400 text-[10px] uppercase font-bold tracking-widest opacity-60">
                    <Volume2 className="w-4 h-4" /> Audio activé
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Exit / Close Controls */}
          <AnimatePresence>
            {isPlaying && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-6 right-6 z-[100] flex gap-3"
              >
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-black/40 hover:bg-black/60 rounded-xl text-[10px] font-black uppercase tracking-widest text-white transition-all backdrop-blur-md border border-white/10"
                  >
                    <RefreshCw className="w-4 h-4" /> {isModal ? '' : 'Arrêter la démo'}
                  </button>

                  {isModal && (
                     <button
                      onClick={onClose}
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl text-white transition-all backdrop-blur-md border border-white/20"
                      title="Fermer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
