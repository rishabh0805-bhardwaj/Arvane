/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDES_DATA } from './data/slidesData';
import { SlideChapter } from './types';
import Navbar from './components/Navbar';
import SlideRenderer from './components/SlideRenderer';
import SlideNavGrid from './components/SlideNavGrid';
import PresenterNotesModal from './components/PresenterNotesModal';
import ExecutiveBriefView from './components/ExecutiveBriefView';
import PropertyEngineSimulator from './components/PropertyEngineSimulator';
import FinancialModelExplorer from './components/FinancialModelExplorer';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { FloatingSparkles, OrganicFloatingShapes } from './components/VectorIllustrations';
import { 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Mic, 
  Maximize2, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  ArrowRight,
  Calculator,
  BarChart3,
  FileText
} from 'lucide-react';

function AppContent() {
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);
  const [activeView, setActiveView] = useState<'presentation' | 'memo' | 'underwriting' | 'financials'>('presentation');
  const [isGridOpen, setIsGridOpen] = useState<boolean>(false);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const { themeConfig } = useTheme();

  const totalSlides = SLIDES_DATA.length;
  const currentSlide = SLIDES_DATA.find((s) => s.id === currentSlideId) || SLIDES_DATA[0];

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setCurrentSlideId((prev) => Math.max(1, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlideId((prev) => Math.min(totalSlides, prev + 1));
  }, [totalSlides]);

  const handleSelectSlide = (id: number) => {
    setCurrentSlideId(id);
    if (activeView !== 'presentation') {
      setActiveView('presentation');
    }
  };

  const handleJumpToChapter = (chapter: SlideChapter) => {
    const firstSlideInChapter = SLIDES_DATA.find((s) => s.chapter === chapter);
    if (firstSlideInChapter) {
      setCurrentSlideId(firstSlideInChapter.id);
      if (activeView !== 'presentation') {
        setActiveView('presentation');
      }
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is interacting with an input/textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlideId(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlideId(totalSlides);
      } else if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        setIsGridOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'n') {
        e.preventDefault();
        setIsNotesOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Escape') {
        setIsGridOpen(false);
        setIsNotesOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, totalSlides]);

  return (
    <div className={`min-h-screen ${themeConfig.bgMain} ${themeConfig.textPrimary} flex flex-col font-sans selection:bg-emerald-400 selection:text-emerald-950 bg-joyful-pattern relative transition-colors duration-500 overflow-x-hidden`}>
      {/* Radiant Spring Morning ambient glow & Organic Floating Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-spring-morning-glow pointer-events-none"></div>
      <OrganicFloatingShapes />
      <FloatingSparkles />

      {/* Top Universal Navbar */}
      <Navbar
        currentSlideId={currentSlideId}
        totalSlides={totalSlides}
        currentChapter={currentSlide.chapter}
        activeView={activeView}
        isFullscreen={isFullscreen}
        onViewChange={setActiveView}
        onPrevSlide={handlePrev}
        onNextSlide={handleNext}
        onToggleGrid={() => setIsGridOpen((prev) => !prev)}
        onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
        onToggleFullscreen={toggleFullscreen}
        onJumpToChapter={handleJumpToChapter}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-between relative overflow-hidden z-10">
        {activeView === 'presentation' && (
          <div className="flex-1 flex flex-col justify-center px-3 sm:px-8 lg:px-12 py-4 sm:py-6 max-w-7xl w-full mx-auto">
            {/* Top Slide Meta Bar */}
            <div className="flex items-center justify-between text-xs pb-3 border-b border-amber-200/80 mb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full border border-amber-300/60 tracking-wider text-[11px]">
                  SLIDE {String(currentSlideId).padStart(2, '0')} OF {totalSlides}
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-stone-700 font-semibold uppercase tracking-wider text-[10px]">
                  {currentSlide.categoryBadge}
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-3">
                <button
                  onClick={() => setIsNotesOpen(true)}
                  className="text-xs text-stone-600 hover:text-amber-700 bg-white/80 border border-stone-200 px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all uppercase tracking-wider text-[10px] font-semibold shadow-2xs"
                >
                  <Mic className="w-3.5 h-3.5 text-amber-600" /> Presenter Notes
                </button>
              </div>
            </div>

            {/* Slide Body Container with smooth joyful animation */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlideId}
                initial={{ opacity: 0, y: 12, scale: 0.995 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.995 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="flex-1 min-h-[520px] lg:min-h-[560px] flex flex-col justify-center bg-white border-2 border-amber-100/80 rounded-2xl p-5 sm:p-8 shadow-xl relative overflow-hidden"
              >
                <SlideRenderer slide={currentSlide} onNavigateSlide={handleSelectSlide} />
              </motion.div>
            </AnimatePresence>

            {/* Slide Progress Indicator Line */}
            <div className="w-full bg-amber-100 h-1.5 rounded-full overflow-hidden mt-4 shadow-inner">
              <motion.div
                className="bg-gradient-to-r from-amber-400 via-orange-400 to-emerald-400 h-full rounded-full"
                animate={{ width: `${(currentSlideId / totalSlides) * 100}%` }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
                  Navigation: <kbd className="px-1.5 py-0.5 border border-stone-200 bg-white rounded text-stone-700 shadow-2xs">←</kbd> <kbd className="px-1.5 py-0.5 border border-stone-200 bg-white rounded text-stone-700 shadow-2xs">→</kbd> or <kbd className="px-2 py-0.5 border border-stone-200 bg-white rounded text-stone-700 shadow-2xs">Space</kbd>
                </span>
              </div>

              {/* Center Quick View Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSelectSlide(9)}
                  className="px-3 py-1 bg-white hover:bg-amber-50 border border-amber-200 rounded-lg text-amber-900 font-semibold flex items-center gap-1.5 transition-all text-[11px] shadow-2xs"
                >
                  <Calculator className="w-3.5 h-3.5 text-amber-600" />
                  <span>Slide 9: Property Engine</span>
                </button>
                <button
                  onClick={() => handleSelectSlide(13)}
                  className="px-3 py-1 bg-white hover:bg-amber-50 border border-amber-200 rounded-lg text-amber-900 font-semibold flex items-center gap-1.5 transition-all text-[11px] shadow-2xs"
                >
                  <BarChart3 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Slide 13: Portfolio</span>
                </button>
              </div>

              {/* Prev / Next Bottom Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentSlideId === 1}
                  className="px-4 py-2 bg-white border border-stone-300 rounded-xl text-stone-700 font-semibold hover:text-stone-950 hover:bg-stone-50 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1.5 text-xs shadow-2xs"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentSlideId === totalSlides}
                  className="px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-600 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1.5 text-xs shadow-md shadow-amber-500/20"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* View Mode: Executive Brief (Full Memorandum) */}
        {activeView === 'memo' && (
          <div className="flex-1">
            <ExecutiveBriefView onSelectSlide={handleSelectSlide} />
          </div>
        )}

        {/* View Mode: Property Engine Simulator */}
        {activeView === 'underwriting' && (
          <div className="max-w-6xl mx-auto w-full py-8 px-4 sm:px-6 space-y-6">
            <div className="p-6 bg-white border border-amber-200 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <p className="text-amber-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Interactive Sandbox</p>
                <h2 className="text-2xl font-serif font-bold text-stone-900">
                  Property Intelligence Engine™
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Simulate individual plot parameters, zoning bylaws, and floor allocation models across Gurgaon, Delhi, and Noida.
                </p>
              </div>
              <button
                onClick={() => setActiveView('presentation')}
                className="px-4 py-2 bg-amber-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-amber-600 transition-colors shadow-sm"
              >
                Return To Deck
              </button>
            </div>
            <PropertyEngineSimulator inline={false} />
          </div>
        )}

        {/* View Mode: EBITDA & Financial Model */}
        {activeView === 'financials' && (
          <div className="max-w-6xl mx-auto w-full py-8 px-4 sm:px-6 space-y-6">
            <div className="p-6 bg-white border border-amber-200 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <p className="text-amber-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Financial Architecture</p>
                <h2 className="text-2xl font-serif font-bold text-stone-900">
                  Four-Project Pipeline & EBITDA Waterfall
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Analysis of the ₹22.95 Cr revenue, ₹7.34 Cr contribution, and ₹5.59 Cr net corporate EBITDA model.
                </p>
              </div>
              <button
                onClick={() => setActiveView('presentation')}
                className="px-4 py-2 bg-amber-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-amber-600 transition-colors shadow-sm"
              >
                Return To Deck
              </button>
            </div>
            <FinancialModelExplorer />
          </div>
        )}
      </main>

      {/* Mandatory Institutional Footer Disclaimer */}
      <footer className="border-t border-amber-200/60 bg-white/90 py-3 px-4 sm:px-8 text-center text-[10px] text-stone-500 space-y-1">
        <p>
          <strong className="text-stone-700">Strategic Investment Deck:</strong> Arvane Housing Promoters Pvt. Ltd. • NCR Residential Development Platform.
        </p>
        <p className="text-stone-400">
          Illustrative management assumptions & hypothetical economics only — not historical financial performance and not a guarantee of future returns.
        </p>
      </footer>

      {/* Slide Navigation Modal */}
      <SlideNavGrid
        currentSlideId={currentSlideId}
        isOpen={isGridOpen}
        onClose={() => setIsGridOpen(false)}
        onSelectSlide={handleSelectSlide}
      />

      {/* Presenter Notes Modal */}
      <PresenterNotesModal
        slide={currentSlide}
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
