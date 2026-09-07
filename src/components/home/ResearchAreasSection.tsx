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
      title: isEng ? "Regional & Balanced Dev." : "지역발전·균형발전",
      desc: isEng ? "Balanced growth, local extinction & regional economy" : "지방소멸 대응, 인구감소 및 지역균형발전 전략",
      icon: MapPin,
    },
    {
      slug: "education",
      title: isEng ? "Education & Human Resources" : "교육·인재정책",
      desc: isEng ? "Future education systems & adult learning" : "미래교육 체계, 평생학습 및 청년 인재육성",
      icon: GraduationCap,
    },
    {
      slug: "welfare",
      title: isEng ? "Welfare & Social Policy" : "복지·사회정책",
      desc: isEng ? "Inclusive welfare for aging society & caregiving" : "저출생·고령화 대응, 돌봄 및 사회서비스",
      icon: HeartHandshake,
    },
    {
      slug: "employment",
      title: isEng ? "Employment & Labor" : "고용·노동",
      desc: isEng ? "Youth employment & vocational training" : "청년일자리, 직업훈련 및 노동시장 구조전환",
      icon: Briefcase,
    },
    {
      slug: "industry",
      title: isEng ? "Industry & Economy" : "산업·경제",
      desc: isEng ? "SME support & local startup ecosystem" : "지역산업 육성, 중소기업 및 창업 생태계",
      icon: TrendingUp,
    },
    {
      slug: "environment",
      title: isEng ? "Environment & Energy" : "환경·에너지",
      desc: isEng ? "Carbon neutrality & ESG sustainability" : "탄소중립, 기후위기 대응 및 ESG 정책",
      icon: Leaf,
    },
    {
      slug: "governance",
      title: isEng ? "Administration & Governance" : "행정·거버넌스",
      desc: isEng ? "Administrative innovation & public service" : "지방행정 혁신, 공공서비스 및 조직성과관리",
      icon: Landmark,
    },
    {
      slug: "digital",
      title: isEng ? "Digital & AI Policy" : "디지털·AI 정책",
      desc: isEng ? "AI, Big Data & Digital Government models" : "AI·빅데이터 기반 행정 및 디지털정부 모델",
      icon: Cpu,
    },
    {
      slug: "social-cohesion",
      title: isEng ? "Social Cohesion & Deliberation" : "사회통합·공론",
      desc: isEng ? "Social conflict resolution & citizen surveys" : "사회갈등 진단, 시민인식 및 공론조사",
      icon: Users,
    },
  ];

  return (
    <section className="py-14 md:py-16 bg-[#F8FAFC] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-5">
          <div className="space-y-1">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest font-sans">
              RESEARCH DOMAINS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2D52]">
              {isEng ? "Core Research Domains" : "주요 연구분야"}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-600">
              {isEng
                ? "Researching sustainable policy solutions across 9 core domains for people, society, and the future."
                : "사람과 사회, 산업과 미래를 둘러싼 9대 핵심 정책과제를 다각도로 연구합니다."}
            </p>
          </div>
          <Link
            href="/research-areas"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 hover:border-[#0B2D52] hover:bg-[#0B2D52] hover:text-white rounded-xl text-xs font-bold text-slate-700 transition-all shadow-xs shrink-0 group w-fit"
          >
            <span>{isEng ? "Explore 9 Domains" : "연구분야 전체보기"}</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-300 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>

        {/* 9 Domain Cards Responsive Grid (3 columns x 3 rows on Desktop & Tablet) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {areas.map((area) => {
            const AreaIcon = area.icon;
            return (
              <Link
                key={area.slug}
                href="/research-areas"
                className="group rounded-3xl bg-white p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-500 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0B2D52] group-hover:bg-[#0B2D52] group-hover:text-teal-300 transition-colors shrink-0 shadow-xs">
                    <AreaIcon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-extrabold text-[#0B2D52] group-hover:text-teal-600 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-2">
                      {area.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#0B2D52] transition-colors">
                  <span className="text-[11px] text-teal-600 font-sans tracking-wide">WHAT WE STUDY</span>
                  <div className="flex items-center gap-1">
                    <span>{isEng ? "Details" : "상세보기"}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
