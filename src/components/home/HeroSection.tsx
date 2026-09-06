"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BarChart2, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-14 md:pt-28 md:pb-16 overflow-hidden bg-gradient-to-b from-slate-100 via-sky-50/40 to-white">
      {/* Background Graphic: Panoramic City Skyline with Giant 3D Chevron Arrow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* City Skyline Background Photo Graphic */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-multiply"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2000&q=80')",
          }}
        />

        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />

        {/* Giant Blue Chevron "1" Arrow Graphic (Matching Mockup) */}
        <svg
          viewBox="0 0 1000 600"
          className="absolute right-0 bottom-0 top-0 h-full w-auto max-w-none opacity-45 text-[#14B8A6]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid slice"
        >
          <path
            d="M500 600 L850 150 L680 150 L380 600 Z"
            fill="url(#giantHeroNavy)"
          />
          <path
            d="M680 150 L920 50 L780 600 L640 600 Z"
            fill="url(#giantHeroTeal)"
          />
          <defs>
            <linearGradient id="giantHeroNavy" x1="0" y1="600" x2="850" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B2D52" stopOpacity="0.85" />
              <stop offset="1" stopColor="#0D9488" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="giantHeroTeal" x1="680" y1="50" x2="780" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#14B8A6" stopOpacity="0.9" />
              <stop offset="1" stopColor="#0B2D52" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Top Right Quote & Metadata (Fixed position: top-28 to avoid header overlap) */}
        <div className="hidden xl:flex flex-col items-end absolute top-28 right-12 lg:right-16 z-10 text-right space-y-3 pointer-events-none">
          <div className="text-xl lg:text-2xl font-bold font-serif text-[#0B2D52] tracking-tight leading-snug">
            “오늘의 연구가 <br />
            <span className="pl-6 font-extrabold text-[#0D9488]">더 나은 내일을 만듭니다.”</span>
          </div>

          <div className="text-[10px] font-sans font-bold tracking-[0.2em] text-slate-400 uppercase space-y-1 pt-1">
            <div>PEOPLE</div>
            <div>SOCIETY</div>
            <div>BETTER POLICIES</div>
            <div>A BRIGHTER TOMORROW</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-5">
          {/* Sub-header Tagline */}
          <div className="text-xs font-bold font-sans text-slate-500 tracking-wider uppercase">
            A BETTER TOMORROW, THROUGH BETTER POLICIES
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B2D52] tracking-tight leading-[1.12]">
            더 나은 정책, <br />
            <span className="text-[#0B2D52]">더 깊은 연구</span>
          </h1>

          {/* Sub-text */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-xl">
            <strong className="text-[#0B2D52] font-bold">주식회사 더좋은미래정책연구원</strong>은 사람과 사회, 그리고 더 나은 미래를 위한 정책의 길을 함께 만듭니다. 공공과 민간의 다양한 파트너와 함께, 근거 있는 연구로 실질적인 변화를 이끌어갑니다.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-[#0B2D52] hover:bg-[#061B33] rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <span>연구용역 의뢰하기</span>
              <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-[#0B2D52] bg-white/90 hover:bg-white border border-slate-300 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <span>더좋은미래정책연구원 소개</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>

        {/* Bottom Floating Pill Bar Overlay */}
        <div className="mt-10 sm:mt-14 pt-2">
          <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full p-2.5 sm:px-6 shadow-xl border border-slate-200/90 gap-4 sm:gap-8">
            {/* Left Pill Item */}
            <div className="flex items-center gap-3 px-2 py-1">
              <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-[#0B2D52]">
                <BarChart2 className="w-4 h-4 text-teal-600" />
              </div>
              <div className="text-xs">
                <span className="font-extrabold text-[#0B2D52] block">근거 있는 정책,</span>
                <span className="text-slate-500 font-semibold">더 나은 사회를 위해</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-slate-200" />

            {/* Right Pill Item */}
            <div className="flex items-center justify-between gap-4 px-2 py-1">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-[#0B2D52]">
                  <Users className="w-4 h-4 text-teal-600" />
                </div>
                <div className="text-xs">
                  <span className="font-extrabold text-[#0B2D52] block">사람과 함께</span>
                  <span className="text-slate-500 font-semibold">더 좋은 미래로</span>
                </div>
              </div>

              <Link
                href="/about"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#0B2D52] hover:text-white flex items-center justify-center text-slate-700 transition-colors shrink-0"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
