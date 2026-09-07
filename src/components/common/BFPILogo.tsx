import React from "react";
import Link from "next/link";

interface BFPILogoProps {
  className?: string;
  showEnglish?: boolean;
  showCorpName?: boolean;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function BFPISymbol({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="미래정책연구원 심볼"
    >
      <defs>
        {/* Navy Gradient for left path */}
        <linearGradient id="bfpiNavyGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#061B33" />
          <stop offset="100%" stopColor="#0B2D52" />
        </linearGradient>

        {/* Teal Gradient for right upward pillar */}
        <linearGradient id="bfpiTealGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0F766E" />
          <stop offset="50%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>

        {/* Subtle drop shadow */}
        <filter id="logoShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#0B2D52" floodOpacity="0.15" />
        </filter>
      </defs>

      <g filter="url(#logoShadow)">
        {/* Left lower angled ribbon (Navy) */}
        <path
          d="M12 78 L58 46 L58 64 L24 88 Z"
          fill="url(#bfpiNavyGrad)"
        />

        {/* Main forward '1' path / upward pillar (Teal) */}
        <path
          d="M58 12 L84 26 L58 92 L44 84 L58 26 Z"
          fill="url(#bfpiTealGrad)"
        />

        {/* Inner intersection plane for 3D depth */}
        <path
          d="M44 84 L58 46 L58 92 Z"
          fill="#0B2D52"
          opacity="0.9"
        />
      </g>
    </svg>
  );
}

export default function BFPILogo({
  className = "",
  showEnglish = true,
  showCorpName = true,
  variant = "dark",
  size = "md",
}: BFPILogoProps) {
  const isLight = variant === "light";

  const symbolSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const titleSizes = {
    sm: "text-base",
    md: "text-lg md:text-xl",
    lg: "text-2xl md:text-3xl",
  };

  const subtitleSizes = {
    sm: "text-[10px]",
    md: "text-xs md:text-[13px]",
    lg: "text-sm",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group transition-transform duration-200 hover:opacity-95 ${className}`}
    >
      <BFPISymbol className={symbolSizes[size]} />

      <div className="flex flex-col justify-center leading-tight">
        {showCorpName && (
          <span className={`font-medium leading-tight ${subtitleSizes[size]} ${isLight ? "text-slate-400" : "text-slate-500"}`}>
            주식회사
          </span>
        )}
        <span className={`font-bold tracking-tight ${titleSizes[size]} ${isLight ? "text-white" : "text-[#0B2D52]"}`}>
          미래정책연구원
        </span>

        {showEnglish && (
          <span
            className={`font-semibold tracking-wider font-sans uppercase mt-0.5 ${subtitleSizes[size]} ${
              isLight ? "text-teal-300 opacity-90" : "text-teal-600"
            }`}
          >
            Future Policy Institute
          </span>
        )}
      </div>
    </Link>
  );
}
