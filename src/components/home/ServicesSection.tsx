import React from "react";
import Link from "next/link";
import { Search, BarChart2, FileCheck2, PieChart, Users, MessageSquare, UserCheck, BookOpen, Database, ArrowRight, CheckCircle2 } from "lucide-react";

const mainServices = [
  {
    id: "qualitative",
    icon: Search,
    title: "정성연구 · 정책연구",
    description: "심층인터뷰, FGI, 이해관계자 분석 등 사람의 이야기를 통해 정책의 본질과 현장의 맥락을 탐구합니다.",
    link: "/research-services#qualitative",
  },
  {
    id: "quantitative",
    icon: BarChart2,
    title: "정량연구 · 조사·분석",
    description: "설문조사, 표본 추출, 다변량 통계분석 등 빅데이터 및 수치에 기반한 객관적 연구 근거를 제공합니다.",
    link: "/research-services#quantitative",
  },
  {
    id: "consulting",
    icon: FileCheck2,
    title: "공공정책 컨설팅",
    description: "정책진단, 기본계획 수립, 타당성 분석 및 성과평가 등 실효성 높은 행정·정책 대안을 도출합니다.",
    link: "/research-services#consulting",
  },
  {
    id: "social-eval",
    icon: PieChart,
    title: "사회조사 및 평가연구",
    description: "국민 인식조사, 사회여론 파악, 정책효과성 정량 측정 등 사회적 변화를 측정하고 발전 방향을 제안합니다.",
    link: "/research-services#social",
  },
];

const methodologies = [
  { icon: Users, title: "설문조사", sub: "(양적조사)" },
  { icon: MessageSquare, title: "FGI", sub: "(집단심층면접)" },
  { icon: UserCheck, title: "IDI", sub: "(심층인터뷰)" },
  { icon: BookOpen, title: "문헌연구", sub: "(데스크리서치)" },
  { icon: Database, title: "통계분석", sub: "(빅데이터 분석)" },
];

const dataCapabiltiers = [
  "고급 통계 분석 및 다차원 데이터 시각화",
  "공공·민간 데이터 결합 및 빅데이터 분석",
  "지능형 공간·지역 데이터 패턴 분석 (GIS)",
  "정책 시뮬레이션 및 미래 예측 모형",
  "맞춤형 정책데이터 대시보드 구축",
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1 font-sans">
              RESEARCH SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D52]">
              주요 연구용역 서비스
            </h2>
            <p className="mt-2 text-base text-slate-600">
              데이터와 현장의 목소리로, 실질적인 변화를 만들어가는 연구를 수행합니다.
            </p>
          </div>
          <Link
            href="/research-services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B2D52] hover:text-teal-600 transition-colors group"
          >
            <span>전체 연구용역 서비스 보기</span>
            <ArrowRight className="w-4 h-4 text-teal-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Main Service Cards Grid (Matching Mockup 1 & 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainServices.map((service) => {
            const IconComp = service.icon;
            return (
              <Link
                key={service.id}
                href={service.link}
                className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200/60 flex items-center justify-center text-[#0B2D52] group-hover:bg-[#0B2D52] group-hover:text-teal-300 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2D52] group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-6 flex items-center justify-between text-xs font-bold text-teal-600 group-hover:text-[#0B2D52] transition-colors border-t border-slate-100 mt-6">
                  <span>자세히 보기</span>
                  <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-[#0B2D52] group-hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Sub-Section: Methodology & Data Analysis Capability (Matching Mockup 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          {/* Left: 조사 방법론 */}
          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#0B2D52]">체계적인 조사 방법론</h3>
                <p className="text-xs text-slate-500 mt-1">목적에 맞는 최적의 연구 방법론으로 신뢰도 높은 데이터를 수집합니다.</p>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2 sm:gap-3 text-center">
              {methodologies.map((m, idx) => {
                const MIcon = m.icon;
                return (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-2 hover:bg-teal-50/50 hover:border-teal-200 transition-colors">
                    <div className="w-9 h-9 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center text-[#0B2D52]">
                      <MIcon className="w-4 h-4 text-teal-600" />
                    </div>
                    <div className="text-xs font-bold text-slate-800">{m.title}</div>
                    <div className="text-[10px] text-slate-400 font-sans">{m.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: 데이터 분석 역량 */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0B2D52] to-[#061B33] p-8 rounded-2xl text-white shadow-lg space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">데이터 분석 역량</h3>
                <p className="text-xs text-teal-300 mt-1">다양한 빅데이터를 연결하여 정책 인사이트를 도출합니다.</p>
              </div>
              <Database className="w-7 h-7 text-teal-400 opacity-90" />
            </div>

            <ul className="space-y-2.5 pt-1">
              {dataCapabiltiers.map((cap, i) => (
                <li key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
