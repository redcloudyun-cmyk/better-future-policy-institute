import React from "react";
import Link from "next/link";
import { UserCheck, Compass, MapPin, ArrowRight, ShieldCheck, Award, FileText, CheckCircle2, Users } from "lucide-react";

export const metadata = {
  title: "연구원 소개 | 주식회사 더좋은미래정책연구원",
  description: "사람과 사회, 데이터를 잇고 더 나은 내일을 만드는 전문 정책연구기관. 주식회사 더좋은미래정책연구원 대표 인사말, 연구원 개요, 주요 연구진 및 CI/오시는 길 안내",
};

export default function AboutPage() {
  const researchers = [
    {
      name: "임혜자 박사",
      title: "대표연구원",
      specialties: ["정책기획", "공공정책", "연구총괄"],
      desc: "정책연구 전반을 총괄하며 연구원의 연구방향과 주요 프로젝트를 이끕니다.",
    },
    {
      name: "이세리 박사",
      title: "수석연구원",
      specialties: ["정책연구", "조사분석", "사회정책"],
      desc: "정책연구와 조사·분석을 중심으로 다양한 사회현안에 대한 연구를 수행합니다.",
    },
    {
      name: "이윤정 박사",
      title: "수석연구원",
      specialties: ["사회정책", "정책평가", "공공컨설팅"],
      desc: "사회정책과 평가·컨설팅 분야를 중심으로 실효성 있는 정책대안을 연구합니다.",
    },
    {
      name: "홍길동 박사",
      title: "수석연구원",
      specialties: ["데이터 분석", "정책 인사이트", "빅데이터 기반 연구"],
      desc: "데이터 분석과 정책 인사이트를 중심으로 근거 기반의 연구를 수행합니다.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* 1. Hero Header */}
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
              ABOUT BFPI
            </span>
            <span className="text-xs font-bold text-slate-300 font-sans tracking-wider bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
              Better Future Policy Institute · Since 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            연구원 소개
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            사람과 사회, 데이터를 잇고 더 나은 내일을 만드는 전문 정책연구기관입니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* 2. 대표 인사말 섹션 (MESSAGE FROM THE REPRESENTATIVE RESEARCHER) */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-6 gap-2">
            <div>
              <span className="text-xs font-bold text-teal-600 font-sans tracking-widest uppercase">
                MESSAGE FROM THE REPRESENTATIVE RESEARCHER
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D52] pt-1">
                대표 인사말
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-slate-400 font-sans">
                Better Future Policy Institute
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Graphic / Profile Card */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#0B2D52] to-[#14B8A6] rounded-2xl p-8 text-white space-y-6 shadow-lg flex flex-col justify-between min-h-[320px]">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-teal-300 text-2xl font-black font-sans">
                  BFPI
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-teal-300 font-bold font-sans uppercase tracking-wider">
                    REPRESENTATIVE RESEARCHER
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    임혜자 <span className="text-lg font-normal text-slate-200">박사</span>
                  </h3>
                  <p className="text-xs text-slate-300 font-sans font-medium">대표연구원</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-2 text-xs text-slate-200 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>주식회사 더좋은미래정책연구원</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>정책연구 총괄 & 데이터 기반 인사이트</span>
                </div>
              </div>
            </div>

            {/* Right Column: Greeting Body */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-4 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
                <p className="text-lg sm:text-xl font-extrabold text-[#0B2D52] leading-snug">
                  “근거로 정책을 설계하고, 데이터로 미래를 제안합니다.”
                </p>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 font-normal">
                <p className="font-semibold text-slate-900">
                  안녕하십니까.<br />
                  주식회사 더좋은미래정책연구원 대표연구원 임혜자입니다.
                </p>

                <p>
                  더좋은미래정책연구원은 2026년에 설립된 정책연구 전문기관으로, 공공과 민간이 직면한 다양한 사회문제를 연구와 데이터에 기반하여 분석하고 실행 가능한 대안을 제시하는 것을 목표로 하고 있습니다.
                </p>

                <p>
                  급변하는 사회구조와 기술환경 속에서 정책은 보다 정교한 분석과 현장에 대한 깊은 이해를 요구하고 있습니다. 저희 연구원은 정책연구, 조사·분석, 평가·컨설팅, 데이터 기반 인사이트를 통해 현실적인 정책 대안을 설계하고자 합니다.
                </p>

                <p>
                  우리는 단순한 이론적 연구에 머무르지 않고 현장의 문제를 이해하고, 객관적 데이터와 다양한 사회적 관점을 바탕으로 정책의 실효성을 높이는 연구를 지향합니다.
                </p>

                <p>
                  더 나은 정책이 더 좋은 미래를 만든다는 믿음으로, 신뢰받는 정책연구 파트너가 되겠습니다.
                </p>

                <p className="pt-2 text-slate-900 font-medium">
                  감사합니다.
                </p>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 font-medium">
                  <div>
                    <span className="font-bold text-[#0B2D52]">주식회사 더좋은미래정책연구원</span>
                  </div>
                  <div className="text-[#0B2D52] font-bold">
                    대표연구원 임혜자 박사
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 연구원 개요 섹션 (INSTITUTE OVERVIEW) */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-lg space-y-8">
          <div className="space-y-2 border-b border-slate-100 pb-6">
            <span className="text-xs font-bold text-teal-600 font-sans tracking-widest uppercase">
              INSTITUTE OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D52]">
              연구원 개요
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-2">
              더좋은미래정책연구원은 정책연구, 조사·분석, 평가·컨설팅, 데이터 기반 인사이트를 통해 공공과 민간의 다양한 문제에 실질적인 해법을 제시하는 정책연구 전문기관입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 기본 정보 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-base font-extrabold text-[#0B2D52] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                <span>기본 정보</span>
              </h3>
              <dl className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <dt className="text-slate-500 font-medium">기관명</dt>
                  <dd className="font-bold text-[#0B2D52]">주식회사 더좋은미래정책연구원</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <dt className="text-slate-500 font-medium">영문명</dt>
                  <dd className="font-bold text-[#0B2D52] font-sans">Better Future Policy Institute</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <dt className="text-slate-500 font-medium">설립</dt>
                  <dd className="font-bold text-teal-700 font-sans">Since 2026</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt className="text-slate-500 font-medium">주소</dt>
                  <dd className="font-bold text-[#0B2D52]">경기도 수원시 팔달구 효원동</dd>
                </div>
              </dl>
            </div>

            {/* 핵심 연구영역 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-base font-extrabold text-[#0B2D52] flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-600" />
                <span>핵심 연구영역</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-center font-bold text-xs text-[#0B2D52] shadow-xs">
                  정책연구
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-center font-bold text-xs text-[#0B2D52] shadow-xs">
                  조사·분석
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-center font-bold text-xs text-[#0B2D52] shadow-xs">
                  평가·컨설팅
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-center font-bold text-xs text-[#0B2D52] shadow-xs">
                  데이터 기반 인사이트
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 주요 연구진 요약 섹션 (KEY RESEARCHERS SUMMARY) */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-lg space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-6 gap-4">
            <div>
              <span className="text-xs font-bold text-teal-600 font-sans tracking-widest uppercase">
                RESEARCH TEAM
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D52] pt-1">
                주요 연구진
              </h2>
            </div>
            <Link
              href="/researchers"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B2D52] hover:bg-teal-600 text-white rounded-xl text-xs font-bold transition-colors w-fit"
            >
              <span>연구진 전체보기</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchers.map((r, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2D52] text-teal-300 font-extrabold text-base flex items-center justify-center font-sans shadow-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B2D52]">{r.name}</h3>
                    <span className="text-xs font-bold text-teal-600">{r.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{r.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex flex-wrap gap-1">
                  {r.specialties.map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-white text-slate-600 border border-slate-200 text-[10px] font-medium rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CI 소개 & 오시는 길 하위 메뉴 서브 카드 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CI 소개 카드 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md flex flex-col justify-between space-y-6 group hover:shadow-xl transition-shadow">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-600 font-sans tracking-widest uppercase">
                  01 CORPORATE IDENTITY
                </span>
                <Compass className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B2D52]">CI 소개</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                신뢰, 전문성, 미래지향성, 공공성을 시각적으로 담아낸 더좋은미래정책연구원의 브랜드 정체성 및 로고 가이드라인을 소개합니다.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/about/ci"
                className="inline-flex items-center justify-between w-full py-3 px-5 bg-slate-50 hover:bg-[#0B2D52] hover:text-white rounded-xl text-xs font-bold text-[#0B2D52] transition-colors"
              >
                <span>CI 소개 페이지 바로가기</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 오시는 길 카드 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md flex flex-col justify-between space-y-6 group hover:shadow-xl transition-shadow">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-600 font-sans tracking-widest uppercase">
                  02 LOCATION GUIDE
                </span>
                <MapPin className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B2D52]">오시는 길</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                경기도 수원시 팔달구 효원동에 위치한 더좋은미래정책연구원으로 오시는 길 및 연구 협의 방문 일정을 안내합니다.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/about/location"
                className="inline-flex items-center justify-between w-full py-3 px-5 bg-slate-50 hover:bg-[#0B2D52] hover:text-white rounded-xl text-xs font-bold text-[#0B2D52] transition-colors"
              >
                <span>오시는 길 페이지 바로가기</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
