import React, { useState } from 'react';
import { 
  Layers, 
  Mic, 
  Maximize2, 
  Minimize2, 
  FileText, 
  Presentation, 
  Calculator, 
  BarChart3, 
  ChevronLeft, 
  ChevronRight,
  Palette,
  Sparkles
} from 'lucide-react';
import { SlideChapter } from '../types';
import { useTheme, THEMES, HappyTheme } from './ThemeContext';
import { ArvaneLogo } from './ArvaneLogo';

interface NavbarProps {
  currentSlideId: number;
  totalSlides: number;
  currentChapter: SlideChapter;
  activeView: 'presentation' | 'memo' | 'underwriting' | 'financials';
  isFullscreen: boolean;
  onViewChange: (view: 'presentation' | 'memo' | 'underwriting' | 'financials') => void;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onToggleGrid: () => void;
  onToggleNotes: () => void;
  onToggleFullscreen: () => void;
  onJumpToChapter: (chapter: SlideChapter) => void;
}

export default function Navbar({
  currentSlideId,
  totalSlides,
  currentChapter,
  activeView,
  isFullscreen,
  onViewChange,
  onPrevSlide,
  onNextSlide,
  onToggleGrid,
  onToggleNotes,
  onToggleFullscreen,
  onJumpToChapter,
}: NavbarProps) {
  const { theme, themeConfig, setTheme } = useTheme();
  const [showThemePicker, setShowThemePicker] = useState(false);

  const chapters: SlideChapter[] = [
    'Executive Vision',
    'The Opportunity & Problem',
    'The Arvane Platform',
    'Project Economics & Portfolio',
    'Capital Architecture & GTM',
    'The Evolution of Arvane',
    'The Investment Proposition',
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E2D5] px-4 sm:px-8 py-2.5 flex flex-col gap-2.5 shadow-sm transition-all">
      {/* Top Main Bar */}
      <div className="flex items-center justify-between gap-4">
        {/* Brand & Presentation Title */}
        <div className="flex items-center gap-3.5">
          <ArvaneLogo variant="compact" />
          <span className="hidden xl:inline-block text-[11px] text-[#C5A265] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E8E2D5] font-mono font-bold">
            Series Seed • NCR Expansion
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className="hidden lg:flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs">
          <button
            onClick={() => onViewChange('presentation')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
              activeView === 'presentation'
                ? 'bg-amber-500 text-white shadow-sm font-bold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white/80'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            Slide Deck
          </button>

          <button
            onClick={() => onViewChange('memo')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
              activeView === 'memo'
                ? 'bg-amber-500 text-white shadow-sm font-bold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white/80'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Executive Brief
          </button>

          <button
            onClick={() => onViewChange('underwriting')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
              activeView === 'underwriting'
                ? 'bg-amber-500 text-white shadow-sm font-bold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white/80'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            Intelligence Engine™
          </button>

          <button
            onClick={() => onViewChange('financials')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
              activeView === 'financials'
                ? 'bg-amber-500 text-white shadow-sm font-bold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white/80'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            EBITDA Model
          </button>
        </div>

        {/* Action Controls & Navigation */}
        <div className="flex items-center gap-2">
          {/* Theme Palette Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowThemePicker(!showThemePicker)}
              title="Change Mood & Palette"
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg text-xs font-medium text-amber-900 transition-all shadow-xs"
            >
              <span>{themeConfig.emoji}</span>
              <span className="hidden xl:inline text-[11px] font-semibold">{themeConfig.name}</span>
            </button>

            {showThemePicker && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-amber-200 rounded-2xl p-2 shadow-xl z-50 space-y-1">
                <div className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-stone-400">
                  Joyful Palettes
                </div>
                {(Object.keys(THEMES) as HappyTheme[]).map((tKey) => {
                  const t = THEMES[tKey];
                  const isCur = tKey === theme;
                  return (
                    <button
                      key={tKey}
                      onClick={() => {
                        setTheme(tKey);
                        setShowThemePicker(false);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded-xl text-left text-xs transition-all ${
                        isCur ? 'bg-amber-100 text-amber-950 font-bold' : 'hover:bg-stone-50 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{t.emoji}</span>
                        <div>
                          <div className="text-xs font-semibold">{t.name}</div>
                          <div className="text-[10px] text-stone-500">{t.tagline.slice(0, 24)}...</div>
                        </div>
                      </div>
                      {isCur && <span className="text-amber-600 font-bold text-xs">✓</span>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Slide Navigator Trigger */}
          <button
            onClick={onToggleGrid}
            title="Open Slide Grid (M)"
            className="flex items-center gap-2 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg text-xs font-mono text-stone-700 transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span className="font-bold text-stone-900">{String(currentSlideId).padStart(2, '0')}</span>
            <span className="text-stone-400">/{totalSlides}</span>
          </button>

          {/* Notes Button */}
          <button
            onClick={onToggleNotes}
            title="Presenter Notes (N)"
            className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg text-xs font-medium text-stone-700 hover:text-stone-900 flex items-center gap-1.5 transition-colors"
          >
            <Mic className="w-3.5 h-3.5 text-amber-600" />
            <span className="hidden sm:inline uppercase tracking-wider text-[10px] font-semibold">Notes</span>
          </button>

          {/* Prev / Next Arrows */}
          <div className="flex items-center bg-stone-100 border border-stone-200 rounded-lg p-0.5">
            <button
              onClick={onPrevSlide}
              disabled={currentSlideId === 1}
              className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-white rounded disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              title="Previous Slide (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNextSlide}
              disabled={currentSlideId === totalSlides}
              className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-white rounded disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              title="Next Slide (Right Arrow or Space)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            title="Toggle Fullscreen (F)"
            className="hidden sm:flex p-2 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg text-stone-700 hover:text-stone-900 transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Chapter Tabs Strip */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 border-t border-stone-100 text-[10px] font-mono">
        <span className="text-stone-400 shrink-0 mr-1 text-[9px] uppercase font-bold tracking-[0.2em]">Chapter:</span>
        {chapters.map((chap) => {
          const isCurrent = chap === currentChapter;
          return (
            <button
              key={chap}
              onClick={() => onJumpToChapter(chap)}
              className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-all flex items-center gap-1.5 border text-[11px] ${
                isCurrent
                  ? 'bg-[#F4EDE0] text-stone-900 border-[#C5A265] font-bold shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50 border-transparent'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-[#C5A265]' : 'bg-stone-300'}`}></span>
              {chap}
            </button>
          );
        })}
      </div>
    </header>
  );
}
