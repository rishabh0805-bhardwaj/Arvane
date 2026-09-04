import React from 'react';
import { X, Mic, HelpCircle, MessageSquare, Sparkles } from 'lucide-react';
import { SlideData } from '../types';

interface PresenterNotesModalProps {
  slide: SlideData;
  isOpen: boolean;
  onClose: () => void;
}

export default function PresenterNotesModal({ slide, isOpen, onClose }: PresenterNotesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div className="bg-white border-2 border-amber-200 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-amber-100 flex items-center justify-between bg-amber-50/70">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-amber-100 text-amber-800 border border-amber-300/60 shadow-2xs">
              <Mic className="w-4 h-4 text-amber-700" />
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase text-amber-700 font-bold tracking-widest block">
                Presenter Brief • Slide {slide.id} of 31
              </span>
              <h3 className="text-base font-serif font-bold text-stone-900 truncate max-w-md">
                {slide.title}
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

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-5 overflow-y-auto bg-stone-50/50">
          {/* Key Message */}
          <div className="p-4 bg-amber-50/80 border-l-4 border-amber-500 rounded-r-2xl border-y border-r border-amber-200 space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-mono uppercase font-bold text-amber-800 block tracking-widest">
              Core Objective & Key Message
            </span>
            <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed font-sans">
              {slide.speakerNotes.keyPoint}
            </p>
          </div>

          {/* Talking Points */}
          <div className="space-y-2.5">
            <span className="text-xs font-mono uppercase font-bold text-stone-700 tracking-wider flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
              Verbal Talking Points
            </span>
            <div className="space-y-2">
              {slide.speakerNotes.talkingPoints.map((point, i) => (
                <div key={i} className="p-3 bg-white border border-stone-200 rounded-xl text-xs text-stone-700 flex items-start gap-3 leading-relaxed shadow-2xs">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold text-xs shrink-0 flex items-center justify-center">
                    0{i+1}
                  </span>
                  <span className="pt-0.5">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Investor Objection / Q&A */}
          {slide.speakerNotes.investorQAndA && (
            <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl space-y-1.5">
              <span className="text-[10px] font-mono uppercase font-bold text-emerald-800 flex items-center gap-1.5 tracking-wider">
                <HelpCircle className="w-3.5 h-3.5 text-emerald-600" /> Anticipated Investor Inquiry & Response
              </span>
              <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                {slide.speakerNotes.investorQAndA}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-amber-100 bg-amber-50/40 flex items-center justify-between text-xs text-stone-600">
          <span>Press <kbd className="px-1.5 py-0.5 border border-stone-200 bg-white rounded text-stone-700 font-mono shadow-2xs">N</kbd> to toggle notes</span>
          <button 
            onClick={onClose}
            className="px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-600 text-xs shadow-md shadow-amber-500/20 transition-all"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
