import React from "react";
import Link from "next/link";
import { FileSearch, FileEdit, Users, BarChart3, Lightbulb, ChevronRight, Quote, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "의뢰 접수",
    desc: "연구 목적과 필요사항을 상담합니다.",
    icon: FileSearch,
  },
  {
    step: "02",
    title: "연구 설계",
    desc: "맞춤형 연구 계획과 방법을 설계합니다.",
    icon: FileEdit,
  },
  {
    step: "03",
    title: "조사 수행",
    desc: "문헌조사, 현장조사, 설문조사 등 데이터를 수집합니다.",
    icon: Users,
  },
  {
    step: "04",
    title: "분석 및 보고서",
    desc: "수집된 데이터를 분석하고 보고서를 작성합니다.",
    icon: BarChart3,
  },
  {
    step: "05",
    title: "최종 제안",
    desc: "연구 결과를 바탕으로 실행 가능한 정책 대안을 제시합니다.",
    icon: Lightbulb,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-12 md:py-14 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D52]">
              연구 진행 절차
            </h2>
            <span className="text-sm font-semibold text-slate-500">
              — 체계적인 연구 프로세스로, 신뢰할 수 있는 결과를 만들어갑니다.
            </span>
          </div>
          <Link
            href="/research-services"
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-[#0B2D52] transition-colors group shrink-0"
          >
            <span>연구용역 절차 자세히 보기</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Pipeline & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* 5 Steps Grid (Col 1 ~ 9) */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
            {steps.map((item, index) => {
              const StepIcon = item.icon;
              return (
                <div key={item.step} className="relative group">
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 h-full flex flex-col justify-between hover:bg-white hover:border-[#0B2D52] hover:shadow-md transition-all duration-300">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="w-7 h-7 rounded-full bg-[#0B2D52] text-white text-xs font-bold font-sans flex items-center justify-center">
                          {item.step}
                        </span>
                        <StepIcon className="w-5 h-5 text-teal-600 group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-[#0B2D52] group-hover:text-teal-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden sm:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-white border border-slate-200 shadow-xs items-center justify-center text-slate-400">
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quote Card (Col 10 ~ 12) */}
          <div className="lg:col-span-3 bg-slate-50 border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <Quote className="w-7 h-7 text-teal-500/40 transform -scale-x-100" />
              <p className="text-base font-bold text-[#0B2D52] font-serif leading-snug">
                “좋은 질문이 더 나은 사회를 만듭니다.”
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 text-[10px] font-bold text-slate-400 tracking-widest font-sans uppercase">
              RESEARCH <br />
              FOR A BETTER TOMORROW
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
