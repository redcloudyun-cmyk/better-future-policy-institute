import React from "react";
import { Headphones, FileSpreadsheet, Search, BarChart3, Award, ChevronRight, Quote } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "의뢰 접수",
    desc: "연구 목적 및 필요사항을 상세히 상담합니다.",
    icon: Headphones,
  },
  {
    step: "02",
    title: "연구 설계",
    desc: "맞춤형 연구 계획과 타당한 방법론을 설계합니다.",
    icon: FileSpreadsheet,
  },
  {
    step: "03",
    title: "조사 수행",
    desc: "문헌조사, 현장조사, 설문조사 데이터를 수집합니다.",
    icon: Search,
  },
  {
    step: "04",
    title: "분석 및 보고서",
    desc: "수집 데이터를 체계적으로 분석하여 작성합니다.",
    icon: BarChart3,
  },
  {
    step: "05",
    title: "최종 제안",
    desc: "실행 가능한 핵심 정책 대안을 종합 제시합니다.",
    icon: Award,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold text-teal-600 uppercase tracking-widest font-sans">
            RESEARCH PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D52]">
            체계적인 연구 진행 절차
          </h2>
          <p className="text-base text-slate-600">
            검증된 프로세스와 데이터 기반 연구 방법론으로 신뢰할 수 있는 성과를 만듭니다.
          </p>
        </div>

        {/* 5 Steps Grid with Connecting Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((item, index) => {
            const StepIcon = item.icon;
            return (
              <div key={item.step} className="relative group">
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 h-full flex flex-col justify-between hover:bg-white hover:border-teal-500 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-full bg-[#0B2D52] text-teal-300 text-xs font-bold font-sans flex items-center justify-center shadow-sm">
                        {item.step}
                      </span>
                      <StepIcon className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0B2D52] group-hover:text-teal-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow Connector for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-slate-400">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quote Banner Box Matching Image 2 & 3 */}
        <div className="bg-gradient-to-r from-[#0B2D52] via-[#08203d] to-[#061B33] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0">
              <Quote className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-serif">
                “좋은 질문과 검증된 데이터가 더 나은 사회를 만듭니다.”
              </p>
              <p className="text-xs text-teal-300 font-sans mt-1">
                주식회사 더좋은미래정책연구원 연구윤리 & 품질헌장
              </p>
            </div>
          </div>
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase font-sans shrink-0">
            RESEARCH FOR A BETTER TOMORROW
          </span>
        </div>
      </div>
    </section>
  );
}
