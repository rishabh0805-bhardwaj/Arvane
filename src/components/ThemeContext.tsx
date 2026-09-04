import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type HappyTheme = 'arvane' | 'spring' | 'sunrise' | 'serene';

export interface ThemeConfig {
  id: HappyTheme;
  name: string;
  emoji: string;
  tagline: string;
  bgMain: string;
  bgCard: string;
  bgCardHover: string;
  bgSubtle: string;
  border: string;
  borderAccent: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accentPrimary: string;
  accentSecondary: string;
  accentTertiary: string;
  badgeBg: string;
  badgeText: string;
  gradientHeader: string;
  glowColor: string;
  gridColor: string;
}

export const THEMES: Record<HappyTheme, ThemeConfig> = {
  arvane: {
    id: 'arvane',
    name: 'Arvane Signature',
    emoji: '🏛️',
    tagline: 'Signature brand palette: Midnight Navy, Champagne Gold & Olive Sage',
    bgMain: 'bg-[#FAF8F5]',
    bgCard: 'bg-white',
    bgCardHover: 'hover:bg-[#F7F4EE]',
    bgSubtle: 'bg-[#F4EFE8]',
    border: 'border-[#E8E2D5]',
    borderAccent: 'border-[#C5A265]',
    textPrimary: 'text-[#0B1B2B]',
    textSecondary: 'text-[#2C3E50]',
    textMuted: 'text-[#5F7082]',
    accentPrimary: 'text-[#C5A265]',
    accentSecondary: 'text-[#5E7356]',
    accentTertiary: 'text-[#0B1B2B]',
    badgeBg: 'bg-[#F2ECE1]',
    badgeText: 'text-[#8C6E34]',
    gradientHeader: 'from-[#FAF6EE] via-[#F4EDE0] to-[#E9E0D0]',
    glowColor: 'rgba(197, 162, 101, 0.18)',
    gridColor: 'rgba(197, 162, 101, 0.04)',
  },
  spring: {
    id: 'spring',
    name: 'Spring Sage',
    emoji: '🌿',
    tagline: 'Fresh morning breeze with soft sage greens, warm creams & bright coral',
    bgMain: 'bg-[#FCFAF6]',
    bgCard: 'bg-white',
    bgCardHover: 'hover:bg-[#F4FAF6]',
    bgSubtle: 'bg-[#F0FDF4]',
    border: 'border-[#D1E7D8]',
    borderAccent: 'border-[#10B981]',
    textPrimary: 'text-[#142319]',
    textSecondary: 'text-[#365340]',
    textMuted: 'text-[#64846E]',
    accentPrimary: 'text-[#059669]',
    accentSecondary: 'text-[#F97316]',
    accentTertiary: 'text-[#D97706]',
    badgeBg: 'bg-[#D1FAE5]',
    badgeText: 'text-[#065F46]',
    gradientHeader: 'from-[#ECFDF5] via-[#D1FAE5] to-[#FEF3C7]',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    gridColor: 'rgba(16, 185, 129, 0.04)',
  },
  sunrise: {
    id: 'sunrise',
    name: 'Golden Sunrise',
    emoji: '☀️',
    tagline: 'Warm, optimistic, and radiant with solar gold & coral',
    bgMain: 'bg-[#FDFBF7]',
    bgCard: 'bg-white',
    bgCardHover: 'hover:bg-[#FFFDF9]',
    bgSubtle: 'bg-[#F7F3EA]',
    border: 'border-[#EAE2D3]',
    borderAccent: 'border-[#F59E0B]',
    textPrimary: 'text-[#1C1917]',
    textSecondary: 'text-[#57534E]',
    textMuted: 'text-[#8C827A]',
    accentPrimary: 'text-[#D97706]',
    accentSecondary: 'text-[#10B981]',
    accentTertiary: 'text-[#F97316]',
    badgeBg: 'bg-[#FEF3C7]',
    badgeText: 'text-[#B45309]',
    gradientHeader: 'from-[#FFFBEB] via-[#FEF3C7] to-[#FDE68A]',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    gridColor: 'rgba(217, 119, 6, 0.04)',
  },
  serene: {
    id: 'serene',
    name: 'Serene Sky',
    emoji: '🌤️',
    tagline: 'Soothing azure breeze with fresh clarity & golden warmth',
    bgMain: 'bg-[#F8FAFC]',
    bgCard: 'bg-white',
    bgCardHover: 'hover:bg-[#F0F9FF]',
    bgSubtle: 'bg-[#EFF6FF]',
    border: 'border-[#E2E8F0]',
    borderAccent: 'border-[#0284C7]',
    textPrimary: 'text-[#0F172A]',
    textSecondary: 'text-[#475569]',
    textMuted: 'text-[#94A3B8]',
    accentPrimary: 'text-[#0284C7]',
    accentSecondary: 'text-[#F59E0B]',
    accentTertiary: 'text-[#10B981]',
    badgeBg: 'bg-[#E0F2FE]',
    badgeText: 'text-[#0369A1]',
    gradientHeader: 'from-[#F0F9FF] via-[#E0F2FE] to-[#BAE6FD]',
    glowColor: 'rgba(2, 132, 199, 0.15)',
    gridColor: 'rgba(2, 132, 199, 0.04)',
  }
};

interface ThemeContextType {
  theme: HappyTheme;
  themeConfig: ThemeConfig;
  setTheme: (theme: HappyTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<HappyTheme>('arvane');

  useEffect(() => {
    const saved = localStorage.getItem('arvane_theme') as HappyTheme;
    if (saved && THEMES[saved]) {
      setThemeState(saved);
    }
  }, []);

  const setTheme = (newTheme: HappyTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('arvane_theme', newTheme);
  };

  const themeConfig = THEMES[theme];

  return (
    <ThemeContext.Provider value={{ theme, themeConfig, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
