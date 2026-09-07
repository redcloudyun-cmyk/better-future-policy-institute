import React from "react";
import Link from "next/link";
import { UserCheck, Compass, MapPin, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "연구원 소개 | 주식회사 더좋은미래정책연구원",
  description: "더 나은 정책, 더 좋은 미래. 주식회사 더좋은미래정책연구원 소개, 원장 인사말, CI 소개 및 오시는 길 안내",
};

export default function AboutLandingPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
              BETTER POLICIES. BETTER TOMORROW.
            </span>
            <span className="text-xs font-bold text-slate-300 font-sans tracking-wider bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
              Since 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            더 나은 정책, 더 좋은 미래
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            더좋은미래정책연구원은 정책연구, 조사·분석, 데이터 기반 인사이트와 평가·컨설팅을 통해 공공과 민간의 다양한 문제에 실질적인 해법을 제시하는 정책연구 전문기관입니다.
          </p>
        </div>
      </div>

      {/* 3 Main Intro Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-teal-600 font-sans uppercase tracking-widest">
            ABOUT BFPI MENU
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D52]">
            연구원 소개 메뉴
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: 원장 인사말 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-full bg-[#0B2D52] text-teal-300 text-xs font-bold font-sans flex items-center justify-center shadow-xs">
                  01
                </span>
                <UserCheck className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-2xl font-extrabold text-[#0B2D52] group-hover:text-teal-600 transition-colors">
                원장 인사말
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                신뢰할 수 있는 연구와 미래지향적 정책 제안을 통해 더 나은 사회를 만들어가겠습니다.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href="/about/greeting"
                className="inline-flex items-center justify-between w-full py-3 px-4 bg-slate-50 hover:bg-[#0B2D52] hover:text-white rounded-xl text-xs font-bold text-[#0B2D52] transition-colors"
              >
                <span>원장 인사말 보기</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: CI 소개 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-full bg-[#0B2D52] text-teal-300 text-xs font-bold font-sans flex items-center justify-center shadow-xs">
                  02
                </span>
                <Compass className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-2xl font-extrabold text-[#0B2D52] group-hover:text-teal-600 transition-colors">
                CI 소개
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                신뢰, 전문성, 미래지향성, 공공성을 담은 더좋은미래정책연구원의 정체성을 소개합니다.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href="/about/ci"
                className="inline-flex items-center justify-between w-full py-3 px-4 bg-slate-50 hover:bg-[#0B2D52] hover:text-white rounded-xl text-xs font-bold text-[#0B2D52] transition-colors"
              >
                <span>CI 소개 보기</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: 오시는 길 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-full bg-[#0B2D52] text-teal-300 text-xs font-bold font-sans flex items-center justify-center shadow-xs">
                  03
                </span>
                <MapPin className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-2xl font-extrabold text-[#0B2D52] group-hover:text-teal-600 transition-colors">
                오시는 길
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                경기도 수원시 팔달구 효원동에 위치한 더좋은미래정책연구원으로 오시는 길을 안내합니다.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href="/about/location"
                className="inline-flex items-center justify-between w-full py-3 px-4 bg-slate-50 hover:bg-[#0B2D52] hover:text-white rounded-xl text-xs font-bold text-[#0B2D52] transition-colors"
              >
                <span>오시는 길 보기</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
