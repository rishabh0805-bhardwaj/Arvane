import React from 'react';
import { motion } from 'motion/react';

interface ArvaneLogoProps {
  variant?: 'full' | 'compact' | 'icon' | 'badge' | 'hero';
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
  animated?: boolean;
  lightMode?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const ArvaneLogo: React.FC<ArvaneLogoProps> = ({
  variant = 'compact',
  className = '',
  animated = false,
}) => {
  // SVG Emblem representation of the Arvane architectural mark
  const Emblem = ({ size = 48 }: { size?: number }) => (
    <svg
      width={size}
      height={size * 0.9}
      viewBox="0 0 160 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 overflow-visible"
    >
      <defs>
        <linearGradient id="arvane-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#C5A265" />
          <stop offset="100%" stopColor="#9E7A3E" />
        </linearGradient>
        <linearGradient id="arvane-primary-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#243B53" />
          <stop offset="50%" stopColor="#1B3A4B" />
          <stop offset="100%" stopColor="#0E2F44" />
        </linearGradient>
        <linearGradient id="arvane-tower-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
        <linearGradient id="arvane-tower-center" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="arvane-tower-right" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#94A3B8" />
        </linearGradient>
      </defs>

      {/* 1. Golden Celestial Arc (Right Apex) */}
      <motion.path
        d="M80 18 C108 18 126 38 126 68 C126 84 122 96 116 106"
        stroke="url(#arvane-gold-grad)"
        strokeWidth="3.4"
        strokeLinecap="round"
        fill="none"
        initial={animated ? { pathLength: 0, opacity: 0 } : false}
        animate={animated ? { pathLength: 1, opacity: 1 } : false}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* 2. Organic Olive / Sage Botanical Branch (Left Apex) */}
      <g>
        {/* Main Stem */}
        <motion.path
          d="M66 104 C64 80 68 52 82 24"
          stroke="#4D6A46"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Leaves */}
        <path d="M82 24 C83 14 78 10 74 12 C72 18 76 22 82 24 Z" fill="#4D6A46" />
        <path d="M80 32 C88 28 92 32 90 36 C84 38 80 36 80 32 Z" fill="#5E7D56" />
        <path d="M74 38 C64 34 60 38 62 43 C68 44 72 42 74 38 Z" fill="#4D6A46" />
        <path d="M73 50 C82 46 86 50 84 55 C78 57 74 54 73 50 Z" fill="#5E7D56" />
        <path d="M68 58 C58 54 54 60 57 65 C63 66 67 63 68 58 Z" fill="#4D6A46" />
        <path d="M67 70 C76 68 80 72 78 77 C72 79 68 76 67 70 Z" fill="#5E7D56" />
        <path d="M65 82 C55 80 52 86 54 91 C60 92 64 88 65 82 Z" fill="#4D6A46" />
      </g>

      {/* 3. Three Rising Architectural Towers Inside Apex */}
      <path d="M73 104 L73 72 L77 68 L81 72 L81 104 Z" fill="url(#arvane-tower-left)" />
      <path d="M83 104 L83 54 L88 48 L93 54 L93 104 Z" fill="url(#arvane-tower-center)" />
      <path d="M95 104 L95 70 L99 66 L103 70 L103 104 Z" fill="url(#arvane-tower-right)" />

      {/* 4. The Iconic Stylized 'A' Apex Structure */}
      <path
        d="M89 26 L124 104 C128 114 136 116 142 116 L142 118 L104 118 L104 116 C109 116 114 113 111 104 L102 82 L76 82 L80 74 L100 74 L89 48 L76 80 L68 76 L89 26 Z"
        fill="url(#arvane-primary-grad)"
      />

      {/* 5. Elegant Curved Horizon Base Curve */}
      <path
        d="M34 118 C64 110 114 110 148 118"
        stroke="url(#arvane-primary-grad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <Emblem size={38} />
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-[#E8E2D5] shadow-2xs ${className}`}>
        <Emblem size={24} />
        <div className="flex flex-col text-left">
          <span className="font-serif font-black tracking-widest text-[#1E293B] text-xs leading-none">
            ARVANE
          </span>
          <span className="text-[8px] font-mono tracking-wider text-[#C5A265] uppercase font-bold">
            Pentagram Housing
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <Emblem size={44} />
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className="font-serif font-black tracking-[0.22em] text-[#1E293B] text-xl sm:text-2xl leading-none">
              ARVANE
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-3 h-[1.5px] bg-[#C5A265]" />
            <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] text-[#64748B] uppercase font-semibold">
              A Brand of Pentagram Housing
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <motion.div
          initial={animated ? { scale: 0.9, opacity: 0 } : false}
          animate={animated ? { scale: 1, opacity: 1 } : false}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-3"
        >
          <Emblem size={110} />
        </motion.div>

        {/* ARVANE Serif Wordmark with high optical balance */}
        <h1 className="font-serif font-extrabold tracking-[0.28em] text-[#1E293B] text-4xl sm:text-6xl md:text-7xl leading-none pl-[0.28em]">
          ARVANE
        </h1>

        {/* Tagline Lockup with Gold Dividers */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 my-3 w-full max-w-lg">
          <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#C5A265] to-[#C5A265]" />
          <span className="font-mono text-xs sm:text-sm md:text-base font-bold tracking-[0.22em] text-[#1E293B] uppercase whitespace-nowrap">
            LAND. DEVELOPED DIFFERENTLY.
          </span>
          <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#C5A265] to-[#C5A265]" />
        </div>

        {/* Subtitle Lineage */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#C5A265] uppercase font-bold">
            A BRAND OF
          </span>
          <span className="text-[11px] sm:text-xs md:text-sm font-serif tracking-[0.2em] text-[#475569] uppercase font-semibold">
            PENTAGRAM HOUSING PROMOTERS PVT. LTD.
          </span>
        </div>
      </div>
    );
  }

  // Full presentation lockup (Default)
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <Emblem size={76} />
      <div className="mt-2 text-center">
        <span className="font-serif font-black tracking-[0.26em] text-[#1E293B] text-3xl sm:text-4xl block pl-[0.26em]">
          ARVANE
        </span>
        <div className="flex items-center justify-center gap-2.5 my-2 max-w-md mx-auto">
          <span className="h-[1px] w-8 sm:w-12 bg-[#C5A265]" />
          <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#334155] uppercase">
            LAND. DEVELOPED DIFFERENTLY.
          </span>
          <span className="h-[1px] w-8 sm:w-12 bg-[#C5A265]" />
        </div>
        <div className="text-[9px] sm:text-[10px] font-mono tracking-[0.16em] text-[#64748B] uppercase font-medium">
          A Brand of <strong className="text-[#334155] font-semibold">Pentagram Housing Promoters Pvt. Ltd.</strong>
        </div>
      </div>
    </div>
  );
};
