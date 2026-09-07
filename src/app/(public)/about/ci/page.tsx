import React from "react";
import Link from "next/link";
import { BFPISymbol } from "@/components/common/BFPILogo";
import BFPILogo from "@/components/common/BFPILogo";
import { ArrowLeft, ShieldCheck, BarChart2, Globe2, Sparkles, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "CI 소개 | 주식회사 더좋은미래정책연구원",
  description: "연구와 정책으로 더 좋은 미래를 향합니다. 주식회사 더좋은미래정책연구원 Corporate Identity (CI) 소개",
};

export default function CIPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            CORPORATE IDENTITY
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">CI 소개</h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            연구와 정책으로 더 좋은 미래를 향하는 더좋은미래정책연구원의 시각적 정체성입니다.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        <Link
          href="/about"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0B2D52] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>연구원 소개 목록으로 돌아가기</span>
        </Link>

        {/* Main Overview Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl space-y-8">
          <div className="space-y-3 border-b border-slate-100 pb-6">
            <span className="text-xs font-bold font-sans text-teal-600 tracking-widest uppercase">
              BFPI BRAND IDENTITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2D52]">
              연구와 정책으로 더 좋은 미래를 향합니다.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-2">
              더좋은미래정책연구원의 CI는 연구원의 핵심 가치인 신뢰, 전문성, 미래지향성, 공공성을 시각적으로 표현합니다.
            </p>
          </div>

          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 font-normal">
            <p>
              심볼은 더 나은 방향으로 나아가는 흐름과 성장, 그리고 사회와 정책의 긍정적 변화를 상징합니다. 안정감 있는 형태는 정책연구기관으로서의 신뢰를, 미래를 향해 확장되는 이미지는 데이터와 연구를 기반으로 지속 가능한 해법을 제시하는 연구원의 비전을 의미합니다.
            </p>
            <p>
              로고타입은 명확하고 정제된 인상을 통해 연구기관의 전문성과 공공적 가치를 전달하며, 네이비와 틸을 중심으로 한 컬러 시스템은 신뢰와 혁신의 균형을 나타냅니다.
            </p>
          </div>

          {/* 5 Key Keywords Grid */}
          <div className="pt-4 space-y-3">
            <h3 className="text-xs font-bold text-[#0B2D52] uppercase tracking-wider font-sans">
              CI 핵심 키워드 (KEY VALUES)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <div className="text-xs font-black text-[#0B2D52] font-sans">TRUST</div>
                <div className="text-[11px] text-slate-500 font-medium">신뢰 연구 & 책임 제안</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <div className="text-xs font-black text-[#0B2D52] font-sans">INSIGHT</div>
                <div className="text-[11px] text-slate-500 font-medium">데이터 기반 깊은 분석</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <div className="text-xs font-black text-[#0B2D52] font-sans">EVIDENCE</div>
                <div className="text-[11px] text-slate-500 font-medium">객관적 근거 바탕 연구</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <div className="text-xs font-black text-[#0B2D52] font-sans">FUTURE</div>
                <div className="text-[11px] text-slate-500 font-medium">미래지향적 사회 선도</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <div className="text-xs font-black text-[#0B2D52] font-sans">POLICY</div>
                <div className="text-[11px] text-slate-500 font-medium">정책 연계 및 실질 변화</div>
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
              <h3 className="text-xl font-black text-[#0B2D52]">CI 브랜드 규정 및 로고 가이드라인</h3>
            </div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-sans">
              LOGO PROPOSAL
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-inner">
            {/* eslint-disable-next-html-loader */}
            <img
              src="/images/ci-logo-proposal.png"
              alt="더좋은미래정책연구원 CI 로고 가이드라인 (LOGO PROPOSAL)"
              className="w-full h-auto object-contain block max-h-[600px] mx-auto"
            />
          </div>
          <p className="text-xs text-slate-500 text-center font-medium">
            * 더좋은미래정책연구원의 브랜드 심볼(Forward Future Path), 한글/영문 로고타입 및 핵심 컬러 시스템 가이드
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
                  미래로 향하는 길 / 상승 / 정책의 방향성
                </p>
                <p>
                  두 개의 면이 앞으로 열리며 만들어지는 길은 더 나은 미래를 향한 정책의 방향과 지속적인 발전을 상징합니다. 사람과 사회, 오늘과 내일을 잇는 더 좋은 길을 만들어갑니다.
                </p>
                <p className="text-slate-400 font-sans text-xs pt-2 border-t border-slate-100">
                  An open path created by two planes symbolizes a better future, policy direction, and continuous progress.
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
                  Better Future Policy Institute
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
                  <p className="text-xs text-slate-600 pt-1">신뢰, 전문성, 공공성, 정책연구기관의 공신력</p>
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
                  <p className="text-xs text-slate-600 pt-1">미래, 혁신, 가능성, 지속 가능한 성장</p>
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
                  <p className="text-xs text-slate-600 pt-1">투명성, 명료함, 객관성, 공공적 가치</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
