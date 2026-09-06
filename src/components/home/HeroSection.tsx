"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, BarChart3, PieChart, CheckCircle2, ShieldCheck, Users, Globe2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#EEF4F8]">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

      {/* Decorative Gradient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Sub-header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-xs font-bold text-[#0B2D52] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span>A BETTER TOMORROW, THROUGH BETTER POLICIES</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B2D52] leading-[1.15] tracking-tight">
              정책을 읽고, <br />
              <span className="bg-gradient-to-r from-[#0B2D52] via-[#0D9488] to-[#14B8A6] bg-clip-text text-transparent">
                미래를 설계합니다
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              <strong className="text-[#0B2D52] font-semibold">주식회사 더좋은미래정책연구원</strong>은 데이터에 기반한 고품질 연구와 실용적 정책제안으로 중앙정부, 지자체, 공공기관 및 민간 파트너와 함께 더 나은 사회, 더 좋은 미래를 만들어갑니다.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/inquiry"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-[#0B2D52] hover:bg-[#061B33] rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all group"
              >
                <span>연구 용역 의뢰하기</span>
                <ArrowRight className="w-5 h-5 text-teal-300 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-[#0B2D52] bg-white hover:bg-slate-50 border border-slate-300/80 rounded-xl shadow-sm hover:shadow transition-all"
              >
                <span>연구원 소개 보기</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* 3 Key Values Floating Badges */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-100/80 flex items-center justify-center text-teal-700 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0B2D52]">근거 있는 정책</h4>
                  <p className="text-[11px] text-slate-500 font-sans">Evidence-based</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-100/80 flex items-center justify-center text-teal-700 shrink-0">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0B2D52]">함께 만드는 변화</h4>
                  <p className="text-[11px] text-slate-500 font-sans">Progress Together</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-100/80 flex items-center justify-center text-teal-700 shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0B2D52]">더 나은 미래</h4>
                  <p className="text-[11px] text-slate-500 font-sans">A Better Future</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive Widget Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Main Policy Analytics Dashboard Card */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-slate-200/80 space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-teal-500" />
                    <h3 className="text-sm font-bold text-[#0B2D52]">Better Future for A Better Society</h3>
                  </div>
                  <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                    +24.7% 향상
                  </span>
                </div>

                {/* Simulated Chart 1: Line Chart */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>정책 만족도 및 사회효용 트렌드</span>
                    <span className="font-semibold text-slate-700">2020 - 2026</span>
                  </div>
                  <div className="h-28 w-full bg-gradient-to-t from-teal-50/50 to-transparent rounded-lg p-2 flex items-end justify-between gap-2 border border-slate-100">
                    {[40, 52, 65, 74, 88, 95].map((h, i) => (
                      <div key={i} className="w-full flex flex-col items-center gap-1 group">
                        <div
                          className="w-full bg-gradient-to-t from-[#0B2D52] to-[#14B8A6] rounded-t transition-all group-hover:brightness-110"
                          style={{ height: `${h}%` }}
                        />
                        <span className="text-[10px] text-slate-400 font-sans">{2020 + i}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub Cards Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {/* Gauge Widget */}
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                    <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-slate-200"
                          strokeWidth="3.5"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-teal-500"
                          strokeDasharray="78, 100"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <span className="absolute text-xs font-black text-[#0B2D52]">78%</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">정책 만족도</h4>
                      <p className="text-[10px] text-slate-500">실효성 신뢰지수</p>
                    </div>
                  </div>

                  {/* Impact List Widget */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-600">사회통합</span>
                      <span className="font-bold text-teal-600">+24.7%</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-600">지역발전</span>
                      <span className="font-bold text-teal-600">+18.3%</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-600">삶의 질</span>
                      <span className="font-bold text-teal-600">+16.1%</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Quote Banner inside widget */}
                <div className="p-3 rounded-xl bg-[#0B2D52] text-white flex items-center justify-between text-xs shadow-md">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-300" />
                    <span className="font-medium text-slate-200">더 좋은 정책이 더 나은 세상을 만듭니다.</span>
                  </div>
                  <span className="text-[10px] text-teal-300 font-sans tracking-widest uppercase font-bold">BFPI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
