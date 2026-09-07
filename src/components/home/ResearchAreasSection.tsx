"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  GraduationCap,
  HeartHandshake,
  Briefcase,
  TrendingUp,
  Leaf,
  Landmark,
  Cpu,
  Users,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ResearchAreasSection() {
  const { lang } = useLanguage();
  const isEng = lang === "ENG";

  const areas = [
    {
      slug: "regional",
      title: isEng ? "Regional Dev." : "지역발전·균형발전",
      desc: isEng ? "Balanced Growth & Local Assets" : "지방소멸 대응 및 균형발전",
      icon: MapPin,
    },
    {
      slug: "education",
      title: isEng ? "Education" : "교육·인재정책",
      desc: isEng ? "Future Education & Talent" : "미래교육 및 인재육성",
      icon: GraduationCap,
    },
    {
      slug: "welfare",
      title: isEng ? "Welfare" : "복지·사회정책",
      desc: isEng ? "Inclusive Care & Social Services" : "저출생·고령화 및 포용복지",
      icon: HeartHandshake,
    },
    {
      slug: "employment",
      title: isEng ? "Employment" : "고용·노동",
      desc: isEng ? "Jobs & Labor Market Transition" : "청년일자리 및 노동시장",
      icon: Briefcase,
    },
    {
      slug: "industry",
      title: isEng ? "Industry" : "산업·경제",
      desc: isEng ? "SME Support & Local Economy" : "지역산업 및 중소기업 지원",
      icon: TrendingUp,
    },
    {
      slug: "environment",
      title: isEng ? "Environment" : "환경·에너지",
      desc: isEng ? "Carbon Neutrality & ESG" : "탄소중립 및 에너지전환",
      icon: Leaf,
    },
    {
      slug: "governance",
      title: isEng ? "Governance" : "행정·거버넌스",
      desc: isEng ? "Public Service & Admin Reform" : "행정혁신 및 공공서비스",
      icon: Landmark,
    },
    {
      slug: "digital",
      title: isEng ? "Digital & AI" : "디지털·AI 정책",
      desc: isEng ? "AI & Big Data Analytics" : "AI·빅데이터 기반 행정",
      icon: Cpu,
    },
    {
      slug: "social-cohesion",
      title: isEng ? "Social Cohesion" : "사회통합·공론",
      desc: isEng ? "Public Deliberation & Opinion" : "갈등관리 및 공론조사",
      icon: Users,
    },
  ];

  return (
    <section className="py-12 md:py-14 bg-[#F8FAFC] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D52]">
              {isEng ? "Core Research Domains" : "주요 연구분야"}
            </h2>
            <span className="text-xs sm:text-sm font-semibold text-slate-500">
              {isEng
                ? "— Researching sustainable policies for people, regions, and the future."
                : "— 사람과 사회, 산업과 미래를 둘러싼 9대 핵심 정책과제를 연구합니다."}
            </span>
          </div>
          <Link
            href="/research-areas"
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-[#0B2D52] transition-colors group shrink-0"
          >
            <span>{isEng ? "View All 9 Domains" : "연구분야 전체보기"}</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 9 Domain Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-3">
          {areas.map((area) => {
            const AreaIcon = area.icon;
            return (
              <Link
                key={area.slug}
                href="/research-areas"
                className="group rounded-2xl bg-white p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#0B2D52] transition-all flex flex-col justify-between space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0B2D52] group-hover:bg-[#0B2D52] group-hover:text-teal-300 transition-colors">
                  <AreaIcon className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-sm font-extrabold text-[#0B2D52] group-hover:text-teal-600 transition-colors truncate">
                    {area.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-normal line-clamp-2 leading-tight">
                    {area.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
