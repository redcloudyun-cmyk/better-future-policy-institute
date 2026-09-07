"use client";

import React from "react";
import Link from "next/link";
import { BFPISymbol } from "@/components/common/BFPILogo";
import BFPILogo from "@/components/common/BFPILogo";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function CIPage() {
  const { lang } = useLanguage();
  const isEng = lang === "ENG";

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            CORPORATE IDENTITY
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            {isEng ? "Corporate Identity (CI)" : "CI 소개"}
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            {isEng
              ? "The visual brand identity of Future Policy Institute heading towards a better future through research and policy."
              : "연구와 정책으로 더 좋은 미래를 향하는 미래정책연구원의 시각적 정체성입니다."}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        <Link
          href="/about"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0B2D52] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isEng ? "Back to About Us" : "연구원 소개 목록으로 돌아가기"}</span>
        </Link>

        {/* Main Overview Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl space-y-8">
          <div className="space-y-3 border-b border-slate-100 pb-6">
            <span className="text-xs font-bold font-sans text-teal-600 tracking-widest uppercase">
              BFPI BRAND IDENTITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2D52]">
              {isEng
                ? "Heading towards a better future through research and policy."
                : "연구와 정책으로 더 좋은 미래를 향합니다."}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-2">
              {isEng
                ? "The CI of Future Policy Institute visually expresses our core values: Trust, Expertise, Future-Orientation, and Public Value."
                : "미래정책연구원의 CI는 연구원의 핵심 가치인 신뢰, 전문성, 미래지향성, 공공성을 시각적으로 표현합니다."}
            </p>
          </div>

          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 font-normal">
            <p>
              {isEng
                ? "The symbol represents an ascending path and continuous growth towards positive changes in society and policy. The solid structure symbolizes trust as a policy research organization, while the forward-expanding form reflects our vision of delivering sustainable solutions through data and research."
                : "심볼은 더 나은 방향으로 나아가는 흐름과 성장, 그리고 사회와 정책의 긍정적 변화를 상징합니다. 안정감 있는 형태는 정책연구기관으로서의 신뢰를, 미래를 향해 확장되는 이미지는 데이터와 연구를 기반으로 지속 가능한 해법을 제시하는 연구원의 비전을 의미합니다."}
            </p>
            <p>
              {isEng
                ? "The refined logotype communicates professional authority and public value, while the color palette centered around Deep Navy and Teal Blue creates a harmonious balance of trust and innovation."
                : "로고타입은 명확하고 정제된 인상을 통해 연구기관의 전문성과 공공적 가치를 전달하며, 네이비와 틸을 중심으로 한 컬러 시스템은 신뢰와 혁신의 균형을 나타냅니다."}
            </p>
          </div>

          {/* 5 Key Keywords Grid */}
          <div className="pt-4 space-y-3">
            <h3 className="text-xs font-bold text-[#0B2D52] uppercase tracking-wider font-sans">
              CI CORE KEYWORDS (KEY VALUES)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <div className="text-xs font-black text-[#0B2D52] font-sans">TRUST</div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {isEng ? "Trustworthy Research" : "신뢰 연구 & 책임 제안"}
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <div className="text-xs font-black text-[#0B2D52] font-sans">INSIGHT</div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {isEng ? "Data-Driven Analysis" : "데이터 기반 깊은 분석"}
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <div className="text-xs font-black text-[#0B2D52] font-sans">EVIDENCE</div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {isEng ? "Evidence-Based Studies" : "객관적 근거 바탕 연구"}
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <div className="text-xs font-black text-[#0B2D52] font-sans">FUTURE</div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {isEng ? "Future-Oriented Vision" : "미래지향적 사회 선도"}
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <div className="text-xs font-black text-[#0B2D52] font-sans">POLICY</div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {isEng ? "Real Policy Impact" : "정책 연계 및 실질 변화"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Official CI Logo Proposal Image Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-[10px] font-bold text-teal-600 font-sans tracking-widest uppercase">
                OFFICIAL CI BRAND SPECIFICATION
              </span>
              <h3 className="text-xl font-black text-[#0B2D52]">
                {isEng ? "CI Brand Specification & Logo Guidelines" : "CI 브랜드 규정 및 로고 가이드라인"}
              </h3>
            </div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-sans">
              LOGO PROPOSAL
            </span>
          </div>

          {/* Interactive Vector CI Specification Board */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-10 border-slate-200/80 shadow-inner space-y-8">
            {/* Sheet Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 pb-5 gap-3">
              <div className="space-y-1">
                <span className="text-[10px] font-black text-slate-400 font-sans tracking-widest uppercase">
                  LOGO PROPOSAL
                </span>
                <p className="text-xs sm:text-sm font-extrabold text-slate-700">
                  {isEng ? "Policy path to the future, together." : "미래를 만드는 정책의 길, 함께."}
                </p>
              </div>
              <div className="text-left sm:text-right text-[9px] sm:text-[10px] font-bold text-slate-400 font-sans tracking-widest uppercase leading-tight">
                POLICY / RESEARCH / FOR A<br />
                BETTER TOMORROW
              </div>
            </div>

            {/* Sheet Main Showcase Grid */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Left Column: Korean Main Logo & English Subtitle Logo */}
              <div className="md:col-span-8 space-y-6">
                {/* 01 Main Logo (Korean) */}
                <div className="p-6 bg-slate-50/80 rounded-xl border border-slate-100 space-y-2">
                  <span className="text-[10px] font-extrabold text-slate-400 font-sans tracking-wider block">
                    01 MAIN LOGO (KOREAN)
                  </span>
                  <div className="pt-2 flex items-center gap-3">
                    <BFPISymbol className="w-10 h-10 sm:w-14 sm:h-14 shrink-0" />
                    <span className="text-2xl sm:text-4xl font-black text-[#0B2D52] tracking-tight">
                      미래정책연구원
                    </span>
                  </div>
                </div>

                {/* 02 Logo with English Subtitle */}
                <div className="p-6 bg-slate-50/80 rounded-xl border border-slate-100 space-y-2">
                  <span className="text-[10px] font-extrabold text-slate-400 font-sans tracking-wider block">
                    02 LOGO WITH ENGLISH SUBTITLE
                  </span>
                  <div className="pt-2 flex items-center gap-3">
                    <BFPISymbol className="w-10 h-10 sm:w-14 sm:h-14 shrink-0" />
                    <div className="flex flex-col justify-center leading-tight">
                      <span className="text-xl sm:text-3xl font-black text-[#0B2D52] tracking-tight">
                        미래정책연구원
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#0F766E] font-sans tracking-wider pt-0.5">
                        Future Policy Institute
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Icon Only */}
              <div className="md:col-span-4 bg-slate-50/80 rounded-xl p-6 border border-slate-100 flex flex-col items-center justify-center text-center space-y-3 min-h-[160px]">
                <BFPISymbol className="w-16 h-16 sm:w-20 sm:h-20" />
                <span className="text-[10px] font-extrabold text-slate-400 font-sans tracking-wider">
                  03 ICON ONLY
                </span>
              </div>
            </div>

            {/* Sheet Footer Specification Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-200 text-xs">
              <div className="space-y-1.5">
                <span className="text-[10px] font-extrabold text-teal-600 font-sans tracking-widest uppercase block">
                  CONCEPT 1. FORWARD FUTURE PATH
                </span>
                <p className="text-slate-600 text-[11px] leading-relaxed font-normal">
                  {isEng
                    ? "An open path created by two planes symbolizes policy direction and continuous progress."
                    : "두 개의 면이 앞을 향해 열리며 만들어지는 길은 미래를 향한 정책의 방향과 지속적인 발전을 상징합니다."}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-extrabold text-teal-600 font-sans tracking-widest uppercase block">
                  KEY VALUES
                </span>
                <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center font-bold">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 text-[#0B2D52]">
                    {isEng ? "Future" : "미래지향"}
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-slate-200 text-[#0B2D52]">
                    {isEng ? "Evidence" : "근거정책"}
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-slate-200 text-[#0B2D52]">
                    {isEng ? "Progress" : "함께변화"}
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-extrabold text-teal-600 font-sans tracking-widest uppercase block">
                  COLOR PALETTE
                </span>
                <div className="flex items-center gap-4 pt-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-[#0B2D52] shadow-sm border border-slate-300" />
                    <span className="text-[11px] font-bold text-slate-700 font-sans">Deep Navy</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-[#0F766E] shadow-sm border border-slate-300" />
                    <span className="text-[11px] font-bold text-slate-700 font-sans">Teal Blue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center font-medium">
            {isEng
              ? "* Official CI Symbol (Forward Future Path), Logotypes, and Color System Specifications"
              : "* 미래정책연구원의 브랜드 심볼(Forward Future Path), 한글/영문 로고타입 및 핵심 컬러 시스템 가이드"}
          </p>
        </div>

        {/* 4 Block Presentation Cards (Matching Logo Proposal Specs) */}
        <div className="space-y-8">
          {/* Block 1: Symbol (FORWARD FUTURE PATH) */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-lg space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-bold text-teal-600 font-sans tracking-widest uppercase">
                  01 SYMBOL DESIGN
                </span>
                <h3 className="text-xl font-black text-[#0B2D52]">CONCEPT 1. FORWARD FUTURE PATH</h3>
              </div>
              <span className="text-xs font-bold text-slate-400 font-sans">ICON ONLY</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 bg-slate-50 p-8 rounded-2xl border border-slate-200 flex items-center justify-center">
                <BFPISymbol className="w-24 h-24" />
              </div>
              <div className="md:col-span-7 space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p className="font-bold text-[#0B2D52] text-base">
                  {isEng ? "Forward Path to the Future / Growth / Policy Direction" : "미래로 향하는 길 / 상승 / 정책의 방향성"}
                </p>
                <p>
                  An open path created by two planes symbolizes a better future, policy direction, and continuous progress. We connect people, society, today and tomorrow through better policies.
                </p>
              </div>
            </div>
          </div>

          {/* Block 2: Logotype (MAIN LOGO) */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-lg space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-bold text-teal-600 font-sans tracking-widest uppercase">
                  02 LOGOTYPE
                </span>
                <h3 className="text-xl font-black text-[#0B2D52]">MAIN LOGO (KOREAN & ENGLISH SUBTITLE)</h3>
              </div>
              <span className="text-xs font-bold text-slate-400 font-sans">LOGOTYPE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Korean Version */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 flex flex-col items-center justify-center space-y-3 text-center">
                <BFPILogo size="lg" showEnglish={false} showCorpName={true} />
                <span className="text-[11px] font-bold text-slate-400 font-sans uppercase">01 MAIN LOGO (KOREAN)</span>
              </div>

              {/* Korean + English Subtitle Version */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 flex flex-col items-center justify-center space-y-3 text-center">
                <BFPILogo size="lg" showEnglish={true} showCorpName={true} />
                <span className="text-[11px] font-bold text-slate-400 font-sans uppercase">02 LOGO WITH ENGLISH SUBTITLE</span>
              </div>
            </div>
          </div>

          {/* Block 3: Signature */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-lg space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-bold text-teal-600 font-sans tracking-widest uppercase">
                  03 SIGNATURE
                </span>
                <h3 className="text-xl font-black text-[#0B2D52]">OFFICIAL SIGNATURE & ESTABLISHMENT</h3>
              </div>
              <span className="text-xs font-bold text-slate-400 font-sans">Since 2026</span>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-inner">
              <BFPILogo variant="light" size="lg" showEnglish={true} showCorpName={true} />
              <div className="text-right space-y-1">
                <div className="text-xs font-bold text-teal-300 font-sans tracking-wider">
                  Future Policy Institute
                </div>
                <div className="text-sm font-extrabold text-white font-sans">
                  Since 2026
                </div>
              </div>
            </div>
          </div>

          {/* Block 4: Color Palette */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-lg space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-bold text-teal-600 font-sans tracking-widest uppercase">
                  04 COLOR SYSTEM
                </span>
                <h3 className="text-xl font-black text-[#0B2D52]">COLOR PALETTE & VALUE SYSTEM</h3>
              </div>
              <span className="text-xs font-bold text-slate-400 font-sans">PALETTE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Deep Navy */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                <div className="h-16 rounded-xl bg-[#0B2D52] shadow-sm flex items-center justify-center text-white font-bold font-sans">
                  #0B2D52
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-extrabold text-[#0B2D52]">Deep Navy</h4>
                  <p className="text-xs text-slate-500 font-sans font-bold">Trust · Insight · Professionalism</p>
                  <p className="text-xs text-slate-600 pt-1">
                    {isEng ? "Trust, Expertise, Public Value" : "신뢰, 전문성, 공공성, 정책연구기관의 공신력"}
                  </p>
                </div>
              </div>

              {/* Teal Blue */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                <div className="h-16 rounded-xl bg-[#14B8A6] shadow-sm flex items-center justify-center text-white font-bold font-sans">
                  #14B8A6
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-extrabold text-[#0B2D52]">Teal Blue</h4>
                  <p className="text-xs text-slate-500 font-sans font-bold">Progress · Possibility · Tomorrow</p>
                  <p className="text-xs text-slate-600 pt-1">
                    {isEng ? "Future, Innovation, Sustainable Growth" : "미래, 혁신, 가능성, 지속 가능한 성장"}
                  </p>
                </div>
              </div>

              {/* White / Light Gray */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                <div className="h-16 rounded-xl bg-white border border-slate-300 shadow-sm flex items-center justify-center text-slate-700 font-bold font-sans">
                  #FFFFFF / #F8FAFC
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-extrabold text-[#0B2D52]">White / Light Background</h4>
                  <p className="text-xs text-slate-500 font-sans font-bold">Transparency · Objectivity</p>
                  <p className="text-xs text-slate-600 pt-1">
                    {isEng ? "Transparency, Clarity, Objectivity" : "투명성, 명료함, 객관성, 공공적 가치"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
