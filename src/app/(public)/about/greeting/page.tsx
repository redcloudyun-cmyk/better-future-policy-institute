import React from "react";
import Link from "next/link";
import { ArrowLeft, Quote, ShieldCheck, Building2 } from "lucide-react";

export const metadata = {
  title: "원장 인사말 | 주식회사 더좋은미래정책연구원",
  description: "더 나은 정책, 더 좋은 미래를 위해 연구합니다. 주식회사 더좋은미래정책연구원 원장 인사말",
};

export default function DirectorGreetingPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            DIRECTOR'S MESSAGE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">원장 인사말</h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            더 나은 정책, 더 좋은 미래를 향한 더좋은미래정책연구원의 다짐입니다.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
        <Link
          href="/about"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0B2D52] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>연구원 소개 목록으로 돌아가기</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 shadow-xl space-y-10">
          {/* Main Headline */}
          <div className="space-y-3 border-b border-slate-100 pb-6">
            <Quote className="w-10 h-10 text-teal-500/30 transform -scale-x-100" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2D52] leading-tight">
              더 나은 정책, <br className="hidden sm:inline" />
              <span className="text-teal-600">더 좋은 미래를 위해 연구합니다.</span>
            </h2>
          </div>

          {/* Grid Layout: Left Text / Right Abstract Graphic */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              <p className="font-bold text-[#0B2D52] text-lg">
                안녕하십니까. <br />
                더좋은미래정책연구원 원장입니다.
              </p>

              <p>
                더좋은미래정책연구원은 2026년에 설립된 정책연구 전문기관으로, 공공과 민간의 다양한 과제를 연구와 데이터에 기반하여 분석하고 실행 가능한 대안을 제시하는 것을 목표로 하고 있습니다.
              </p>

              <p>
                오늘날 정책 환경은 빠르게 변화하고 있으며 사회·경제·지역·복지·교육·산업 전반에서 보다 정밀하고 현실적인 연구가 요구되고 있습니다. 저희 연구원은 이러한 변화에 대응하여 정책연구, 조사·분석, 데이터 기반 인사이트, 평가 및 컨설팅을 통합적으로 수행하고자 합니다.
              </p>

              <p>
                우리는 단순한 이론적 제안에 머무르지 않고 현장과 제도를 함께 이해하는 실질적 연구를 통해 더 나은 정책과 더 좋은 미래를 만드는 데 기여하겠습니다.
              </p>

              <p>
                앞으로도 신뢰할 수 있는 연구, 공공적 가치에 기반한 분석, 그리고 미래지향적 해법을 통해 사회와 지역의 발전에 이바지하겠습니다.
              </p>

              <p>감사합니다.</p>

              <div className="pt-6 border-t border-slate-100 font-extrabold text-[#0B2D52] text-lg">
                주식회사 더좋은미래정책연구원 원장
              </div>
            </div>

            {/* Right Abstract Graphic Card */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#0B2D52] via-[#08203d] to-[#061B33] rounded-2xl p-8 text-white space-y-6 shadow-md border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300">
                <Building2 className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase">
                  POLICY & DATA RESEARCH
                </span>
                <h3 className="text-xl font-bold text-white">
                  실질적 연구와 실행 가능한 대안
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  현장과 제도를 다각도로 이해하고 사회와 지역의 발전에 이바지합니다.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/80 text-[11px] font-bold text-slate-400 font-sans tracking-wider space-y-1">
                <div>Better Future Policy Institute</div>
                <div className="text-teal-300">Since 2026</div>
              </div>
            </div>
          </div>

          {/* Bottom Footer Notation */}
          <div className="pt-8 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-sans font-bold">
            <span>Better Future Policy Institute</span>
            <span>Since 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
