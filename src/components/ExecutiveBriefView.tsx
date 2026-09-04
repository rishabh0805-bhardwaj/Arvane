import React from 'react';
import { SLIDES_DATA } from '../data/slidesData';
import SlideRenderer from './SlideRenderer';
import { Printer, ArrowUpRight, Sparkles } from 'lucide-react';
import { ArvaneLogo } from './ArvaneLogo';

export default function ExecutiveBriefView({
  onSelectSlide,
}: {
  onSelectSlide: (id: number) => void;
}) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 space-y-12 text-stone-800">
      {/* Top Memorandum Header */}
      <div className="border-b border-[#E8E2D5] pb-8 space-y-4 no-print">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <ArvaneLogo variant="compact" />
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E2D5] rounded-xl text-stone-700 hover:text-stone-900 hover:bg-[#FAF8F5] text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
          >
            <Printer className="w-4 h-4 text-[#C5A265]" />
            Print / PDF Export
          </button>
        </div>

        <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D5] rounded-2xl text-xs text-stone-700 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
          <div>
            <strong className="text-[#0B1B2B]">Strategic Ask:</strong> ₹6–7 Crore Growth Capital • <strong className="text-[#0B1B2B]">Target Equity:</strong> 5–8% Minority
          </div>
          <div className="text-[#5E7356] font-mono uppercase tracking-wider text-[11px] font-bold">
            NCR Residential Development Platform
          </div>
        </div>
      </div>

      {/* Structured Document Sections */}
      <div className="space-y-16">
        {SLIDES_DATA.map((slide) => (
          <section
            key={slide.id}
            id={`slide-${slide.id}`}
            className="print-page-break p-6 sm:p-8 bg-white border-2 border-amber-100/80 rounded-3xl space-y-6 shadow-md"
          >
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-amber-800 font-bold border border-amber-300 bg-amber-50 px-2.5 py-0.5 rounded-full tracking-wider">
                  SLIDE {String(slide.id).padStart(2, '0')} / 31
                </span>
                <span className="text-xs text-stone-500 font-mono">
                  {slide.chapter}
                </span>
              </div>

              <button
                onClick={() => onSelectSlide(slide.id)}
                className="no-print text-xs text-amber-700 hover:text-amber-900 font-semibold flex items-center gap-1 transition-colors"
              >
                Present Slide <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Render Slide Content inside document view */}
            <div className="py-2">
              <SlideRenderer slide={slide} onNavigateSlide={onSelectSlide} />
            </div>

            {/* Presenter Takeaway */}
            <div className="p-4 bg-amber-50/60 border-l-4 border-amber-500 rounded-r-2xl border-y border-r border-amber-200 text-xs text-stone-800 space-y-1 shadow-2xs">
              <span className="text-[10px] uppercase font-mono tracking-widest text-amber-800 font-bold block">
                Executive Takeaway
              </span>
              <p className="leading-relaxed font-medium">{slide.speakerNotes.keyPoint}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
