import React from "react";
import Link from "next/link";
import { FileSearch, BarChart3, Users, Database, ArrowRight } from "lucide-react";

const mainServices = [
  {
    id: "policy",
    icon: FileSearch,
    title: "정책연구",
    description: "사회·경제·행정 등 다양한 분야의 정책 이슈를 분석하고 대안을 제시합니다.",
    link: "/research-services#policy",
  },
  {
    id: "survey",
    icon: BarChart3,
    title: "조사·분석",
    description: "여론조사, 실태조사, 통계분석 등 데이터에 기반한 심도 높은 분석을 제공합니다.",
    link: "/research-services#survey",
  },
  {
    id: "evaluation",
    icon: Users,
    title: "평가·컨설팅",
    description: "정책사업의 효과를 평가하고, 개선 방향을 제시하는 맞춤형 컨설팅을 수행합니다.",
    link: "/research-services#evaluation",
  },
  {
    id: "data-insight",
    icon: Database,
    title: "데이터 기반 인사이트",
    description: "빅데이터와 다양한 데이터 소스를 활용해 정책 의사결정을 지원하는 인사이트를 제공합니다.",
    link: "/research-services#data",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-14 bg-[#F8FAFC] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D52]">
              연구용역 서비스
            </h2>
            <span className="text-sm font-semibold text-slate-500">
              — 다양한 사회 현안을 깊이 있게 분석하고, 실현 가능한 대안을 제시합니다.
            </span>
          </div>
          <Link
            href="/research-services"
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-[#0B2D52] transition-colors group shrink-0"
          >
            <span>연구용역에 대해 더 알아보기</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Main White Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mainServices.map((service) => {
            const IconComp = service.icon;
            return (
              <Link
                key={service.id}
                href={service.link}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0B2D52] group-hover:bg-[#0B2D52] group-hover:text-teal-300 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0B2D52] group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-slate-700 group-hover:text-[#0B2D52] transition-colors">
                  <span>자세히 보기</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
