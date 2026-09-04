import React from 'react';
import { motion } from 'motion/react';

// Joyful Skyline with Sun and Greenery
export function JoyfulSkylineVector({ className = "w-full h-32" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Radiant Sun with Animated Rays */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ originX: "680px", originY: "60px" }}
        >
          <circle cx="680" cy="60" r="32" fill="url(#sun-gradient)" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1="680"
              y1="16"
              x2="680"
              y2="6"
              stroke="#F59E0B"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${angle} 680 60)`}
            />
          ))}
        </motion.g>

        {/* Soft Background Cloud */}
        <motion.path
          d="M120 70 C130 50, 160 50, 175 65 C185 55, 215 55, 225 70 C235 70, 245 80, 240 95 C235 110, 110 110, 120 70 Z"
          fill="#E0F2FE"
          opacity="0.6"
          animate={{ x: [0, 25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Distant Hills / Landscapes */}
        <path
          d="M0 160 Q180 120 380 150 T800 135 L800 200 L0 200 Z"
          fill="#E2E8F0"
          opacity="0.5"
        />
        <path
          d="M0 170 Q220 140 460 165 T800 150 L800 200 L0 200 Z"
          fill="#D1FAE5"
          opacity="0.7"
        />

        {/* Modern NCR Architecture Silhouette */}
        <rect x="80" y="90" width="45" height="110" rx="3" fill="#94A3B8" opacity="0.4" />
        <rect x="135" y="60" width="55" height="140" rx="3" fill="#64748B" opacity="0.45" />
        <rect x="200" y="105" width="40" height="95" rx="3" fill="#94A3B8" opacity="0.4" />

        {/* Arvane Landmark Boutique Residence (Hero Highlight) */}
        <g transform="translate(320, 45)">
          {/* Villa Main Structure */}
          <rect x="0" y="25" width="130" height="130" rx="6" fill="#FFFFFF" stroke="#D97706" strokeWidth="2.5" />
          
          {/* Floor 4 Penthouse with Terrace */}
          <rect x="8" y="32" width="114" height="24" rx="2" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
          <rect x="14" y="36" width="30" height="16" rx="1" fill="#38BDF8" opacity="0.8" />
          <rect x="50" y="36" width="30" height="16" rx="1" fill="#38BDF8" opacity="0.8" />
          {/* Terrace Pergola / Plants */}
          <line x1="88" y1="36" x2="116" y2="36" stroke="#10B981" strokeWidth="2" />
          <circle cx="94" cy="40" r="3" fill="#10B981" />
          <circle cx="106" cy="40" r="4" fill="#059669" />

          {/* Floor 3 Luxury Suite */}
          <rect x="8" y="60" width="114" height="24" rx="2" fill="#F0FDF4" stroke="#10B981" strokeWidth="1" />
          <rect x="14" y="64" width="36" height="16" rx="1" fill="#38BDF8" opacity="0.8" />
          <rect x="56" y="64" width="36" height="16" rx="1" fill="#38BDF8" opacity="0.8" />
          <rect x="98" y="64" width="18" height="16" rx="1" fill="#FEF3C7" />

          {/* Floor 2 Residence */}
          <rect x="8" y="88" width="114" height="24" rx="2" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1" />
          <rect x="14" y="92" width="45" height="16" rx="1" fill="#38BDF8" opacity="0.8" />
          <rect x="65" y="92" width="45" height="16" rx="1" fill="#38BDF8" opacity="0.8" />

          {/* Ground Stilt & Entry */}
          <rect x="8" y="116" width="114" height="28" rx="2" fill="#FFF7ED" stroke="#F97316" strokeWidth="1" />
          <rect x="16" y="122" width="40" height="22" rx="2" fill="#E2E8F0" />
          <rect x="74" y="120" width="22" height="24" rx="2" fill="#D97706" />

          {/* Roof Accent Arch */}
          <path d="M0 25 L65 5 L130 25 Z" fill="#D97706" />
          <circle cx="65" cy="17" r="4" fill="#FEF3C7" />
        </g>

        {/* Adjacent Modern Villa */}
        <g transform="translate(480, 80)">
          <rect x="0" y="15" width="80" height="105" rx="4" fill="#FFFFFF" stroke="#059669" strokeWidth="1.5" />
          <rect x="6" y="22" width="68" height="20" rx="1" fill="#D1FAE5" />
          <rect x="6" y="46" width="68" height="20" rx="1" fill="#D1FAE5" />
          <rect x="6" y="70" width="68" height="20" rx="1" fill="#D1FAE5" />
          <rect x="6" y="94" width="68" height="20" rx="1" fill="#FEF3C7" />
        </g>

        {/* Flourishing Trees & Foliage */}
        <g transform="translate(270, 140)">
          <path d="M15 40 L15 60" stroke="#78350F" strokeWidth="3" />
          <circle cx="15" cy="30" r="16" fill="#10B981" />
          <circle cx="10" cy="24" r="10" fill="#34D399" />
          <circle cx="22" cy="28" r="10" fill="#059669" />
        </g>

        <g transform="translate(600, 135)">
          <path d="M20 45 L20 65" stroke="#78350F" strokeWidth="3.5" />
          <ellipse cx="20" cy="30" rx="18" ry="22" fill="#059669" />
          <circle cx="15" cy="22" r="12" fill="#10B981" />
          <circle cx="26" cy="26" r="11" fill="#34D399" />
        </g>

        {/* Foreground Ground Line */}
        <line x1="0" y1="195" x2="800" y2="195" stroke="#10B981" strokeWidth="6" />
        <line x1="0" y1="198" x2="800" y2="198" stroke="#D97706" strokeWidth="2" />

        {/* Gradients */}
        <defs>
          <radialGradient id="sun-gradient" cx="0.5" cy="0.5" r="0.5" fx="0.3" fy="0.3">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EA580C" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

// Interactive & Animated 4-Floor Model Vector
export function BuildingIsometricVector({
  highlightFloor = 4,
  onSelectFloor,
}: {
  highlightFloor?: number;
  onSelectFloor?: (floor: number) => void;
}) {
  const floors = [
    {
      id: 4,
      name: "Floor 4: Terrace Penthouse",
      allocatedTo: "Arvane Monetization",
      color: "from-amber-400 to-amber-500",
      stroke: "#C5A265",
      bgLight: "bg-[#F4EDE0]",
      borderLight: "border-[#C5A265]",
      textColor: "text-[#0B1B2B]",
      tag: "Developer Unit (₹5.85 Cr)",
      spec: "Private Skylight Terrace + 4 BHK Master Suite"
    },
    {
      id: 3,
      name: "Floor 3: Executive Luxury Floor",
      allocatedTo: "Landowner Asset",
      color: "from-emerald-400 to-emerald-500",
      stroke: "#5E7356",
      bgLight: "bg-[#EAEFE8]",
      borderLight: "border-[#5E7356]",
      textColor: "text-[#4A6044]",
      tag: "Landowner Unit (~₹5.50 Cr)",
      spec: "Expansive Balcony + Italian Marble Living"
    },
    {
      id: 2,
      name: "Floor 2: Family Residence Floor",
      allocatedTo: "Landowner Asset",
      color: "from-emerald-400 to-emerald-500",
      stroke: "#5E7356",
      bgLight: "bg-[#EAEFE8]",
      borderLight: "border-[#5E7356]",
      textColor: "text-[#4A6044]",
      tag: "Landowner Unit (~₹5.50 Cr)",
      spec: "Custom Modular Kitchen + Smart Automation"
    },
    {
      id: 1,
      name: "Floor 1: Garden Residence & Stilt",
      allocatedTo: "Landowner Asset",
      color: "from-emerald-400 to-emerald-500",
      stroke: "#5E7356",
      bgLight: "bg-[#EAEFE8]",
      borderLight: "border-[#5E7356]",
      textColor: "text-[#4A6044]",
      tag: "Landowner Unit (~₹5.50 Cr)",
      spec: "8 Car Stilt Parking + Private Lift Lobby"
    }
  ];

  return (
    <div className="w-full bg-white rounded-2xl border-2 border-[#C5A265]/30 p-5 shadow-lg relative overflow-hidden">
      {/* Decorative Sunburst Glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#F4EDE0] rounded-full blur-2xl pointer-events-none opacity-70"></div>
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#EAEFE8] rounded-full blur-2xl pointer-events-none opacity-70"></div>

      <div className="flex items-center justify-between pb-3 border-b border-[#C5A265]/20 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">🏛️</span>
          <div>
            <h4 className="text-sm font-bold text-stone-900 font-serif">
              4-Floor Standard Architectural Allocation (3:1 JV Model)
            </h4>
            <p className="text-xs text-stone-500">
              Click any floor to examine development monetization & spatial specs
            </p>
          </div>
        </div>
        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#F4EDE0] text-[#0B1B2B] border border-[#C5A265]">
          Zero Land Debt
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Isometric SVG Cross Section (5 cols) */}
        <div className="md:col-span-5 flex justify-center py-2">
          <svg viewBox="0 0 280 340" className="w-full max-w-[240px] drop-shadow-md">
            {/* Terrace Crown */}
            <path d="M140 10 L250 55 L140 100 L30 55 Z" fill="#C5A265" stroke="#9A7B38" strokeWidth="2" />
            <path d="M140 15 L240 55 L140 92 L40 55 Z" fill="#F4EDE0" />
            <text x="140" y="60" textAnchor="middle" fill="#0B1B2B" fontSize="10" fontWeight="bold">TERRACE OASIS</text>

            {/* Floor 4 (Penthouse) */}
            <g
              className="cursor-pointer transition-all hover:opacity-95"
              onClick={() => onSelectFloor && onSelectFloor(4)}
            >
              <path d="M30 55 L140 100 L140 150 L30 105 Z" fill={highlightFloor === 4 ? "#C5A265" : "#D4AF37"} stroke="#9A7B38" strokeWidth="1.5" />
              <path d="M140 100 L250 55 L250 105 L140 150 Z" fill={highlightFloor === 4 ? "#9A7B38" : "#C5A265"} stroke="#7D6228" strokeWidth="1.5" />
              {/* Windows */}
              <rect x="50" y="75" width="25" height="18" rx="2" fill="#BAE6FD" />
              <rect x="85" y="90" width="25" height="18" rx="2" fill="#BAE6FD" />
              <rect x="160" y="90" width="25" height="18" rx="2" fill="#BAE6FD" />
              <rect x="195" y="75" width="25" height="18" rx="2" fill="#BAE6FD" />
              <text x="140" y="132" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">FL 4 • ARVANE</text>
            </g>

            {/* Floor 3 */}
            <g
              className="cursor-pointer transition-all hover:opacity-95"
              onClick={() => onSelectFloor && onSelectFloor(3)}
            >
              <path d="M30 110 L140 155 L140 205 L30 160 Z" fill={highlightFloor === 3 ? "#5E7356" : "#758A6D"} stroke="#4A6044" strokeWidth="1.5" />
              <path d="M140 155 L250 110 L250 160 L140 205 Z" fill={highlightFloor === 3 ? "#4A6044" : "#5E7356"} stroke="#394D33" strokeWidth="1.5" />
              {/* Windows */}
              <rect x="50" y="130" width="25" height="18" rx="2" fill="#BAE6FD" />
              <rect x="85" y="145" width="25" height="18" rx="2" fill="#BAE6FD" />
              <rect x="160" y="145" width="25" height="18" rx="2" fill="#BAE6FD" />
              <rect x="195" y="130" width="25" height="18" rx="2" fill="#BAE6FD" />
              <text x="140" y="187" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">FL 3 • LANDOWNER</text>
            </g>

            {/* Floor 2 */}
            <g
              className="cursor-pointer transition-all hover:opacity-95"
              onClick={() => onSelectFloor && onSelectFloor(2)}
            >
              <path d="M30 165 L140 210 L140 260 L30 215 Z" fill={highlightFloor === 2 ? "#5E7356" : "#758A6D"} stroke="#4A6044" strokeWidth="1.5" />
              <path d="M140 210 L250 165 L250 215 L140 260 Z" fill={highlightFloor === 2 ? "#4A6044" : "#5E7356"} stroke="#394D33" strokeWidth="1.5" />
              {/* Windows */}
              <rect x="50" y="185" width="25" height="18" rx="2" fill="#BAE6FD" />
              <rect x="85" y="200" width="25" height="18" rx="2" fill="#BAE6FD" />
              <rect x="160" y="200" width="25" height="18" rx="2" fill="#BAE6FD" />
              <rect x="195" y="185" width="25" height="18" rx="2" fill="#BAE6FD" />
              <text x="140" y="242" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">FL 2 • LANDOWNER</text>
            </g>

            {/* Floor 1 & Stilt */}
            <g
              className="cursor-pointer transition-all hover:opacity-95"
              onClick={() => onSelectFloor && onSelectFloor(1)}
            >
              <path d="M30 220 L140 265 L140 315 L30 270 Z" fill={highlightFloor === 1 ? "#4A6044" : "#5E7356"} stroke="#394D33" strokeWidth="1.5" />
              <path d="M140 265 L250 220 L250 270 L140 315 Z" fill={highlightFloor === 1 ? "#394D33" : "#4A6044"} stroke="#283923" strokeWidth="1.5" />
              {/* Stilt Pillars */}
              <rect x="55" y="250" width="14" height="40" rx="1" fill="#F8FAFC" />
              <rect x="95" y="265" width="14" height="38" rx="1" fill="#F8FAFC" />
              <rect x="165" y="265" width="14" height="38" rx="1" fill="#F8FAFC" />
              <rect x="205" y="250" width="14" height="40" rx="1" fill="#F8FAFC" />
              <text x="140" y="297" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">FL 1 • STILT & LOBBY</text>
            </g>

            {/* Ground Foundation Line */}
            <path d="M10 275 L140 325 L270 275" stroke="#5E7356" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* Floor Breakdown Cards (7 cols) */}
        <div className="md:col-span-7 space-y-2.5">
          {floors.map((fl) => {
            const isSelected = highlightFloor === fl.id;
            return (
              <motion.div
                key={fl.id}
                whileHover={{ scale: 1.01, x: 3 }}
                onClick={() => onSelectFloor && onSelectFloor(fl.id)}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? `${fl.bgLight} ${fl.borderLight} shadow-md ring-2 ring-[#C5A265]/40`
                    : 'bg-stone-50/70 border-stone-200 hover:bg-white hover:border-[#C5A265]/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${fl.id === 4 ? 'bg-[#C5A265]' : 'bg-[#5E7356]'}`}></span>
                    <span className="font-bold text-xs text-stone-900">{fl.name}</span>
                  </div>
                  <span className={`text-[11px] font-bold font-mono px-2 py-0.5 rounded-full ${
                    fl.id === 4 ? 'bg-[#F4EDE0] text-[#0B1B2B] border border-[#C5A265]' : 'bg-[#EAEFE8] text-[#4A6044] border border-[#5E7356]'
                  }`}>
                    {fl.tag}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-stone-600 mt-1">
                  <span>{fl.spec}</span>
                  <span className="font-semibold text-stone-700">{fl.allocatedTo}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Growth Sunburst & Sparkle Vectors
export function GrowthSunburstVector({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="50" cy="50" r="20" fill="url(#joy-sun)" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="22"
          x2="50"
          y2="10"
          stroke="#F59E0B"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      <defs>
        <radialGradient id="joy-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="70%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EA580C" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
}

// Flourishing Tree Vector (Symbol of Growth & Prosperity)
export function FlourishingTreeVector({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path d="M50 90 L50 45" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
      <path d="M50 65 Q35 55 25 45" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 55 Q65 45 75 35" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="30" r="22" fill="#10B981" />
      <circle cx="32" cy="38" r="16" fill="#34D399" />
      <circle cx="68" cy="38" r="16" fill="#059669" />
      <circle cx="50" cy="18" r="14" fill="#6EE7B7" />
      {/* Golden Fruit / Coins */}
      <circle cx="42" cy="28" r="4" fill="#F59E0B" />
      <circle cx="58" cy="25" r="4" fill="#F59E0B" />
      <circle cx="35" cy="42" r="3.5" fill="#F59E0B" />
      <circle cx="65" cy="40" r="3.5" fill="#F59E0B" />
    </svg>
  );
}

// Cheerful Vector Badge
export function JoyfulVectorBadge({
  icon,
  label,
  value,
  color = "amber",
}: {
  icon: string;
  label: string;
  value: string;
  color?: "amber" | "emerald" | "coral" | "sky";
}) {
  const colorMap = {
    amber: "bg-amber-50 border-amber-300 text-amber-900 ring-amber-400/20",
    emerald: "bg-emerald-50 border-emerald-300 text-emerald-900 ring-emerald-400/20",
    coral: "bg-orange-50 border-orange-300 text-orange-900 ring-orange-400/20",
    sky: "bg-sky-50 border-sky-300 text-sky-900 ring-sky-400/20",
  };

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      className={`p-3 rounded-xl border flex items-center gap-3 shadow-sm ${colorMap[color]}`}
    >
      <span className="text-2xl">{icon}</span>
      <div>
        <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-stone-500 block">
          {label}
        </span>
        <span className="text-sm font-bold text-stone-900">{value}</span>
      </div>
    </motion.div>
  );
}

// Floating Ambient Sparkles
export function FloatingSparkles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-amber-400 text-sm opacity-50"
          style={{
            top: `${15 + (i * 14)}%`,
            left: `${8 + (i * 15)}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  );
}

// Organic Floating Shapes: Curved lines and soft blobs with sunrise & sage palette
export function OrganicFloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <svg
        className="w-full h-full opacity-60"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="sage-soft-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#34D399" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="sunrise-soft-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="coral-soft-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB923C" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* Soft Organic Blob 1: Top Right Sunrise Glow */}
        <motion.path
          d="M1100 120 C1250 80, 1400 180, 1380 320 C1360 460, 1200 500, 1080 440 C960 380, 950 160, 1100 120 Z"
          fill="url(#sunrise-soft-grad)"
          animate={{
            d: [
              "M1100 120 C1250 80, 1400 180, 1380 320 C1360 460, 1200 500, 1080 440 C960 380, 950 160, 1100 120 Z",
              "M1120 100 C1280 110, 1420 220, 1360 350 C1300 480, 1160 480, 1050 410 C940 340, 960 90, 1120 100 Z",
              "M1100 120 C1250 80, 1400 180, 1380 320 C1360 460, 1200 500, 1080 440 C960 380, 950 160, 1100 120 Z",
            ],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Soft Organic Blob 2: Bottom Left Sage Meadow */}
        <motion.path
          d="M120 620 C240 540, 420 580, 440 720 C460 860, 280 920, 160 880 C40 840, 0 700, 120 620 Z"
          fill="url(#sage-soft-grad)"
          animate={{
            d: [
              "M120 620 C240 540, 420 580, 440 720 C460 860, 280 920, 160 880 C40 840, 0 700, 120 620 Z",
              "M150 590 C290 560, 450 630, 420 760 C390 890, 240 940, 130 860 C20 780, 10 620, 150 590 Z",
              "M120 620 C240 540, 420 580, 440 720 C460 860, 280 920, 160 880 C40 840, 0 700, 120 620 Z",
            ],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Soft Organic Blob 3: Center Coral Warmth */}
        <motion.path
          d="M680 350 C780 290, 900 340, 890 460 C880 580, 750 620, 660 560 C570 500, 580 410, 680 350 Z"
          fill="url(#coral-soft-grad)"
          animate={{
            rotate: [0, 360],
            scale: [0.95, 1.06, 0.95],
          }}
          style={{ originX: "720px", originY: "450px" }}
          transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Elegant Wavy Curved Streamlines */}
        <motion.path
          d="M-50 250 C300 120, 650 380, 1100 200 C1300 120, 1450 180, 1550 220"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          opacity="0.25"
          animate={{
            d: [
              "M-50 250 C300 120, 650 380, 1100 200 C1300 120, 1450 180, 1550 220",
              "M-50 280 C320 160, 620 340, 1080 240 C1280 160, 1460 150, 1550 200",
              "M-50 250 C300 120, 650 380, 1100 200 C1300 120, 1450 180, 1550 220",
            ],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d="M-50 680 C350 780, 750 560, 1150 720 C1320 790, 1450 730, 1550 700"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeDasharray="8 10"
          opacity="0.25"
          animate={{
            d: [
              "M-50 680 C350 780, 750 560, 1150 720 C1320 790, 1450 730, 1550 700",
              "M-50 640 C380 740, 720 600, 1120 680 C1300 750, 1480 770, 1550 730",
              "M-50 680 C350 780, 750 560, 1150 720 C1320 790, 1450 730, 1550 700",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

// Interactive SVG Working Model Diagram for Slide 7
export function InteractiveWorkingModelDiagram() {
  const [hoveredParty, setHoveredParty] = React.useState<'owner' | 'arvane' | null>(null);

  const ownerContributions = [
    { title: "Freehold Land Rights", desc: "Clear, marketable & unencumbered residential plot ownership", icon: "📍" },
    { title: "Zero Cash Outflow", desc: "No debt burden or equity capital required from landowner", icon: "🛡️" },
    { title: "Retains 50%–75% Asset Value", desc: "Receives 2 to 3 turnkey luxury floors (~₹11–16+ Cr asset)", icon: "💎" },
    { title: "Title Protection", desc: "Retains underlying land ownership until individual floor conveyance", icon: "📜" },
  ];

  const arvaneContributions = [
    { title: "100% Development Capital", desc: "Full funding for architecture, municipal sanctions, civil & fitouts", icon: "💰" },
    { title: "Property Intelligence Engine™", desc: "Algorithmic zoning optimization and institutional project triage", icon: "🧠" },
    { title: "Turnkey Architecture & Interiors", desc: "Italian marble, modular German kitchens & home automation", icon: "✨" },
    { title: "HNWI Marketing & Sales", desc: "Boutique brokerage distribution & end-to-end buyer conveyancing", icon: "🎯" },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Interactive SVG Hub */}
      <div className="relative p-6 sm:p-8 bg-white border-2 border-[#5E7356]/30 rounded-3xl shadow-xl overflow-hidden">
        {/* Decorative ambient glows */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#EAEFE8] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#F4EDE0] rounded-full blur-3xl pointer-events-none" />

        {/* Top Instructions Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5E7356] animate-ping" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4A6044]">
              Interactive JDA Architecture
            </span>
          </div>
          <span className="text-xs text-stone-500 font-medium bg-stone-50 px-3 py-1 rounded-full border border-stone-200">
            Hover or tap <strong className="text-[#5E7356]">Landowner</strong> or <strong className="text-[#C5A265]">Arvane</strong> to inspect roles
          </span>
        </div>

        {/* 3-Column Synergy Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-6">
          
          {/* Column 1: Landowner (5 cols) */}
          <motion.div
            onMouseEnter={() => setHoveredParty('owner')}
            onMouseLeave={() => setHoveredParty(null)}
            onClick={() => setHoveredParty(hoveredParty === 'owner' ? null : 'owner')}
            animate={{
              scale: hoveredParty === 'owner' ? 1.025 : hoveredParty === 'arvane' ? 0.98 : 1,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`lg:col-span-5 p-5 sm:p-6 rounded-2xl border-2 transition-all cursor-pointer ${
              hoveredParty === 'owner'
                ? 'bg-[#EAEFE8] border-[#5E7356] shadow-lg ring-4 ring-[#5E7356]/20'
                : 'bg-stone-50/70 border-stone-200/90 hover:bg-[#EAEFE8]/50 hover:border-[#5E7356]'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#5E7356]/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAEFE8] border border-[#5E7356]/40 flex items-center justify-center text-xl shadow-xs">
                  🏡
                </div>
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-base flex items-center gap-1.5">
                    <span>LANDOWNER</span>
                    {hoveredParty === 'owner' && <span className="text-[#5E7356] text-xs">● Active</span>}
                  </h3>
                  <span className="text-[11px] font-mono font-bold text-[#4A6044]">
                    Asset & Title Contributor
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#EAEFE8] text-[#4A6044] text-[10px] font-mono font-bold uppercase tracking-wider border border-[#5E7356]/30">
                0% Dev Risk
              </span>
            </div>

            <div className="mt-4 space-y-2.5">
              {ownerContributions.map((item, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: hoveredParty === 'owner' ? 4 : 0,
                  }}
                  transition={{ delay: i * 0.04 }}
                  className={`p-3 rounded-xl border transition-all ${
                    hoveredParty === 'owner'
                      ? 'bg-white border-[#5E7356]/50 shadow-2xs'
                      : 'bg-white/80 border-stone-200'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-base">{item.icon}</span>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-stone-600 leading-snug mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Central JDA Synergy Bridge SVG (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-2 text-center">
            <svg viewBox="0 0 120 120" className="w-24 h-24 drop-shadow-md">
              <motion.circle
                cx="60"
                cy="60"
                r="45"
                fill="none"
                stroke="#5E7356"
                strokeWidth="2"
                strokeDasharray="4 4"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                style={{ originX: "60px", originY: "60px" }}
              />
              <motion.circle
                cx="60"
                cy="60"
                r="36"
                fill="none"
                stroke="#C5A265"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ originX: "60px", originY: "60px" }}
              />
              <circle cx="60" cy="60" r="26" fill="#FCFAF6" stroke="#5E7356" strokeWidth="2" />
              <text x="60" y="56" textAnchor="middle" fill="#0B1B2B" fontSize="10" fontWeight="bold">JDA</text>
              <text x="60" y="68" textAnchor="middle" fill="#C5A265" fontSize="8" fontWeight="bold">SYNERGY</text>
            </svg>

            <div className="mt-2 space-y-0.5">
              <span className="text-[11px] font-mono uppercase font-bold text-stone-700 block">
                Joint Agreement
              </span>
              <span className="text-[10px] text-stone-500 block">
                Zero Debt Alignment
              </span>
            </div>
          </div>

          {/* Column 3: Arvane (5 cols) */}
          <motion.div
            onMouseEnter={() => setHoveredParty('arvane')}
            onMouseLeave={() => setHoveredParty(null)}
            onClick={() => setHoveredParty(hoveredParty === 'arvane' ? null : 'arvane')}
            animate={{
              scale: hoveredParty === 'arvane' ? 1.025 : hoveredParty === 'owner' ? 0.98 : 1,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`lg:col-span-5 p-5 sm:p-6 rounded-2xl border-2 transition-all cursor-pointer ${
              hoveredParty === 'arvane'
                ? 'bg-[#F4EDE0] border-[#C5A265] shadow-lg ring-4 ring-[#C5A265]/30'
                : 'bg-stone-50/70 border-stone-200/90 hover:bg-[#F4EDE0]/50 hover:border-[#C5A265]'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#C5A265]/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F4EDE0] border border-[#C5A265]/40 flex items-center justify-center text-xl shadow-xs">
                  🏗️
                </div>
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-base flex items-center gap-1.5">
                    <span>ARVANE</span>
                    {hoveredParty === 'arvane' && <span className="text-[#C5A265] text-xs">● Active</span>}
                  </h3>
                  <span className="text-[11px] font-mono font-bold text-[#0B1B2B]">
                    Development Operator
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#F4EDE0] text-[#0B1B2B] text-[10px] font-mono font-bold uppercase tracking-wider border border-[#C5A265]/40">
                Full PMO
              </span>
            </div>

            <div className="mt-4 space-y-2.5">
              {arvaneContributions.map((item, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: hoveredParty === 'arvane' ? 4 : 0,
                  }}
                  transition={{ delay: i * 0.04 }}
                  className={`p-3 rounded-xl border transition-all ${
                    hoveredParty === 'arvane'
                      ? 'bg-white border-[#C5A265]/60 shadow-2xs'
                      : 'bg-white/80 border-stone-200'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-base">{item.icon}</span>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-stone-600 leading-snug mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dynamic Highlight Banner on Hover */}
        <motion.div
          animate={{ opacity: 1 }}
          className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#EAEFE8] via-[#F4EDE0] to-[#EAEFE8] border border-[#C5A265]/30 flex flex-wrap items-center justify-between gap-3 text-xs"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">✨</span>
            <span className="text-stone-700 font-medium">
              {hoveredParty === 'owner'
                ? "The landowner unlocks highest-and-best plot valuation without selling land at a discount or taking on construction headaches."
                : hoveredParty === 'arvane'
                ? "Arvane operates as the agile developer with zero capital locked in land, capturing high-velocity developer margins and rapid IRR."
                : "A win-win structure: Landowner avoids debt and captures delivered value, while Arvane achieves capital-efficient scale."}
            </span>
          </div>
          <span className="font-mono font-bold text-stone-900 text-[11px] bg-white px-3 py-1 rounded-full border border-stone-200 shadow-2xs">
            3:1 / 2:2 Flexible Entitlements
          </span>
        </motion.div>
      </div>
    </div>
  );
}

