import React from 'react';
import { X, Layers, Sparkles } from 'lucide-react';
import { SLIDES_DATA } from '../data/slidesData';
import { SlideChapter } from '../types';

interface SlideNavGridProps {
  currentSlideId: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (id: number) => void;
}

export default function SlideNavGrid({
  currentSlideId,
  isOpen,
  onClose,
  onSelectSlide,
}: SlideNavGridProps) {
  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div className="bg-white border-2 border-amber-200 rounded-3xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-amber-100 flex items-center justify-between bg-amber-50/70">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/20 text-white font-bold font-serif text-lg">
              A
            </div>
            <div>
              <p className="text-amber-700 text-[10px] uppercase font-mono tracking-widest font-bold">Master Index</p>
              <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 tracking-tight flex items-center gap-1.5">
                <span>Arvane Presentation Roadmap</span>
                <span className="text-sm">✨</span>
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200 rounded-xl transition-colors shadow-2xs"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-stone-50/50">
          {chapters.map((chap) => {
            const chapSlides = SLIDES_DATA.filter((s) => s.chapter === chap);

            return (
              <div key={chap} className="space-y-2.5">
                <div className="flex items-center gap-2 border-b border-amber-200/60 pb-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold">
                    {chap} <span className="text-stone-400 font-normal">({chapSlides.length})</span>
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {chapSlides.map((slide) => {
                    const isSelected = slide.id === currentSlideId;
                    return (
                      <button
                        key={slide.id}
                        onClick={() => {
                          onSelectSlide(slide.id);
                          onClose();
                        }}
                        className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-amber-100/90 border-amber-400 text-stone-950 shadow-sm ring-2 ring-amber-400/30'
                            : 'bg-white border-stone-200 hover:border-amber-300 hover:bg-amber-50/40'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] mb-1.5">
                          <span className="font-mono text-amber-700 font-bold">
                            SLIDE {String(slide.id).padStart(2, '0')}
                          </span>
                          {isSelected && (
                            <span className="text-[9px] bg-amber-500 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-2xs">
                              CURRENT
                            </span>
                          )}
                        </div>
                        <div className="text-xs font-serif font-bold text-stone-800 leading-snug line-clamp-2">
                          {slide.title}
                        </div>
                        <div className="text-[10px] text-stone-500 mt-2 line-clamp-1 font-sans">
                          {slide.categoryBadge.split('•')[0]}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-amber-100 bg-amber-50/40 flex items-center justify-between text-xs text-stone-600">
          <span>Press <kbd className="px-1.5 py-0.5 border border-stone-200 bg-white rounded text-stone-700 font-mono shadow-2xs">M</kbd> or click to toggle index</span>
          <span className="text-amber-800 font-mono tracking-wider text-[11px] font-bold">31 Complete Slides</span>
        </div>
      </div>
    </div>
  );
}
