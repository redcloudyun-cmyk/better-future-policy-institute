"use client";

import React from "react";
import Link from "next/link";
import { FileSearch, BarChart3, Users, Cpu, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ServicesSection() {
  const { lang } = useLanguage();
  const isEng = lang === "ENG";

  const mainServices = [
    {
      id: "policy",
      icon: FileSearch,
      title: isEng ? "Policy Research" : "정책연구",
      description: isEng
        ? "Analyzes policy issues and designs actionable mid-to-long term master plans and implementation roadmaps."
        : "사회·경제·행정 등 다양한 분야의 정책 이슈를 분석하고 실행 가능한 기본계획과 로드맵을 수립합니다.",
      link: "/research-services",
    },
    {
      id: "survey",
      icon: BarChart3,
      title: isEng ? "Surveys & Analysis" : "조사·분석",
      description: isEng
        ? "Provides objective evidence through public surveys, sampling, FGI/IDI interviews, and baseline analysis."
        : "여론조사, 실태조사, 표본추출, FGI/IDI 및 통계분석으로 객관적인 정책 근거를 제공합니다.",
      link: "/research-services",
    },
    {
      id: "evaluation",
      icon: Users,
      title: isEng ? "Evaluation & Consulting" : "평가·컨설팅",
      description: isEng
        ? "Evaluates policy effectiveness, assesses program feasibility, and delivers administrative consulting."
        : "정책과 사업의 성과와 타당성을 객관적으로 평가하고 조직 운영 및 행정 개선 컨설팅을 수행합니다.",
      link: "/research-services",
    },
    {
      id: "data-ai",
      icon: Cpu,
      title: isEng ? "Data & AI Analytics" : "데이터·AI 분석",
      description: isEng
        ? "Leverages AI, NLP, and Big Data modeling to simulate policy outcomes and guide evidence-based decisions."
        : "AI, 빅데이터, 텍스트 분석 및 정책 시뮬레이션을 활용하여 근거 기반의 의사결정을 지원합니다.",
      link: "/research-services",
    },
  ];

  return (
    <section className="py-12 md:py-14 bg-[#F8FAFC] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D52]">
              {isEng ? "Research Services & Capabilities" : "연구용역·서비스"}
            </h2>
            <span className="text-xs sm:text-sm font-semibold text-slate-500">
              {isEng
                ? "— Supporting full research lifecycles from policy planning to data analytics and evaluation."
                : "— 정책기획부터 조사·분석, 평가와 실행전략까지 연구 전 과정을 지원합니다."}
            </span>
          </div>
          <Link
            href="/research-services"
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-[#0B2D52] transition-colors group shrink-0"
          >
            <span>{isEng ? "Explore 10 Services" : "10대 연구용역 전체보기"}</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Main Service Cards Grid */}
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

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#0B2D52] transition-colors">
                  <span>{isEng ? "Learn More" : "자세히 보기"}</span>
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
