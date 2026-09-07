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
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ResearchAreasPage() {
  const { lang } = useLanguage();
  const isEng = lang === "ENG";

  const domains = [
    {
      id: "regional",
      slug: "regional",
      icon: MapPin,
      title: isEng ? "Regional & Balanced Development" : "지역발전·균형발전",
      desc: isEng
        ? "Researches sustainable development strategies responding to population decline and regional disparities using local assets."
        : "인구감소와 지역격차에 대응하고 지역의 특성과 자원을 활용한 지속가능한 발전전략을 연구합니다.",
      subTopics: isEng
        ? [
            "Local Extinction & Population Response",
            "Regional Economic Revitalization",
            "Urban Regeneration & Living SOC",
            "Specialized Local Industry Fostering",
            "Improvement of Living Conditions",
            "Balanced Regional Development Strategy",
          ]
        : [
            "지방소멸 및 인구감소 대응",
            "지역경제 활성화",
            "도시재생 및 생활SOC",
            "지역특화산업 육성",
            "정주여건 개선",
            "지역균형발전 전략",
          ],
      keywords: ["#지방소멸", "#균형발전", "#지역경제", "#도시재생"],
      serviceLink: "/research-services",
    },
    {
      id: "education",
      slug: "education",
      icon: GraduationCap,
      title: isEng ? "Education & Human Resources" : "교육·인재정책",
      desc: isEng
        ? "Researches education systems, talent cultivation policies, lifelong learning, and educational demand in response to future societal shifts."
        : "미래사회 변화에 대응하는 교육체계와 인재육성 정책, 평생학습과 교육수요를 연구합니다.",
      subTopics: isEng
        ? [
            "Future Education Policy",
            "Lifelong & Adult Education",
            "Vocational Education & Training",
            "Youth Talent Cultivation",
            "Bridging Educational Gaps",
            "Educational Demand & Perception Surveys",
          ]
        : [
            "미래교육 정책",
            "평생교육 및 성인학습",
            "직업교육 및 직업훈련",
            "청년 인재육성",
            "교육격차 해소",
            "교육수요 및 인식조사",
          ],
      keywords: ["#미래교육", "#평생교육", "#인재육성", "#교육격차"],
      serviceLink: "/research-services",
    },
    {
      id: "welfare",
      slug: "welfare",
      icon: HeartHandshake,
      title: isEng ? "Welfare & Social Policy" : "복지·사회정책",
      desc: isEng
        ? "Researches inclusive policies for demographic shifts such as low birth rates, aging society, care services, and support for vulnerable groups."
        : "저출생·고령화와 돌봄, 취약계층 지원 등 변화하는 사회구조에 대응하는 포용적 정책을 연구합니다.",
      subTopics: isEng
        ? [
            "Low Birth Rate & Aging Society Response",
            "Caregiving & Social Care Policy",
            "Social Services Quality Enhancement",
            "Support for Vulnerable Groups",
            "Family & Demographic Policy",
            "Welfare Blind Spots Elimination",
          ]
        : [
            "저출생·고령화 대응",
            "돌봄정책",
            "사회서비스",
            "취약계층 지원",
            "가족정책",
            "복지사각지대",
          ],
      keywords: ["#저출생", "#고령화", "#돌봄", "#사회서비스"],
      serviceLink: "/research-services",
    },
    {
      id: "employment",
      slug: "employment",
      icon: Briefcase,
      title: isEng ? "Employment & Labor" : "고용·노동",
      desc: isEng
        ? "Researches labor market structures, job policies, vocational training, and employment support following industrial & technological transitions."
        : "산업과 기술 변화에 따른 노동시장 구조와 일자리 정책, 직업훈련 및 고용지원 방안을 연구합니다.",
      subTopics: isEng
        ? [
            "Youth Employment Initiatives",
            "Job Creation & Employment Policy",
            "Vocational Training Programs",
            "Industrial Transition & Labor Market",
            "Public Employment Services",
            "Regional Job Strategies",
          ]
        : [
            "청년고용",
            "일자리 정책",
            "직업훈련",
            "산업전환과 노동시장",
            "고용서비스",
            "지역 일자리 정책",
          ],
      keywords: ["#일자리", "#청년고용", "#직업훈련", "#노동시장"],
      serviceLink: "/research-services",
    },
    {
      id: "industry",
      slug: "industry",
      icon: TrendingUp,
      title: isEng ? "Industry & Economy" : "산업·경제",
      desc: isEng
        ? "Researches industrial policies, SME & startup support, and economic revitalization strategies for sustainable regional and national growth."
        : "지역과 국가의 지속가능한 성장을 위한 산업정책, 중소기업·창업 지원, 경제활성화 전략을 연구합니다.",
      subTopics: isEng
        ? [
            "Regional Industry Fostering",
            "SME & Venture Policy",
            "Startup & Entrepreneurship Ecosystem",
            "Industrial Structure Transformation",
            "Corporate Support Initiatives",
            "Regional Economic Revitalization",
          ]
        : [
            "지역산업 육성",
            "중소기업 정책",
            "창업·벤처 생태계",
            "산업구조 전환",
            "기업지원 정책",
            "지역경제 활성화",
          ],
      keywords: ["#산업정책", "#중소기업", "#창업", "#지역경제"],
      serviceLink: "/research-services",
    },
    {
      id: "environment",
      slug: "environment",
      icon: Leaf,
      title: isEng ? "Environment & Energy" : "환경·에너지",
      desc: isEng
        ? "Researches climate crisis response, carbon neutrality, energy transition, and sustainable environmental policies."
        : "기후위기 대응과 탄소중립, 에너지전환 및 지속가능한 환경정책을 연구합니다.",
      subTopics: isEng
        ? [
            "Carbon Neutrality Strategies",
            "Climate Change Adaptation",
            "Energy Transition Policy",
            "Renewable Energy Infrastructure",
            "ESG Policy & Governance",
            "Sustainable Development",
          ]
        : [
            "탄소중립",
            "기후변화 대응",
            "에너지전환",
            "신재생에너지",
            "ESG 정책",
            "지속가능발전",
          ],
      keywords: ["#탄소중립", "#기후위기", "#에너지전환", "#ESG"],
      serviceLink: "/research-services",
    },
    {
      id: "governance",
      slug: "governance",
      icon: Landmark,
      title: isEng ? "Administration & Governance" : "행정·거버넌스",
      desc: isEng
        ? "Researches administrative innovation, organizational operations, and governance models for trusted government and efficient public services."
        : "신뢰받는 정부와 효율적인 공공서비스를 위한 행정혁신, 조직운영 및 거버넌스 정책을 연구합니다.",
      subTopics: isEng
        ? [
            "Local Administration Policy",
            "Organizational Innovation",
            "Public Service Improvement",
            "Public Governance & Partnership",
            "Administrative Efficiency",
            "Performance Management Systems",
          ]
        : [
            "지방행정",
            "조직혁신",
            "공공서비스 개선",
            "협치 및 거버넌스",
            "행정효율화",
            "성과관리",
          ],
      keywords: ["#행정혁신", "#지방행정", "#거버넌스", "#공공서비스"],
      serviceLink: "/research-services",
    },
    {
      id: "digital",
      slug: "digital",
      icon: Cpu,
      title: isEng ? "Digital & AI Policy" : "디지털·AI 정책",
      desc: isEng
        ? "Analyzes the impacts of AI, Big Data, and Digital Government on public administration and develops innovative policy models."
        : "AI, 빅데이터, 디지털정부 등 기술 변화가 정책과 행정에 미치는 영향을 분석하고 새로운 정책모델을 연구합니다.",
      subTopics: isEng
        ? [
            "AI Policy & Ethics",
            "Big Data-Driven Administration",
            "Digital Government Infrastructure",
            "Policy Simulation & Modeling",
            "Public Data Utilization",
            "Data-Informed Decision Making",
          ]
        : [
            "AI 정책",
            "빅데이터 기반 행정",
            "디지털정부",
            "정책 시뮬레이션",
            "공공데이터 활용",
            "데이터 기반 의사결정",
          ],
      keywords: ["#AI", "#빅데이터", "#디지털정부", "#정책모델링"],
      serviceLink: "/research-services",
    },
    {
      id: "social-cohesion",
      slug: "social-cohesion",
      icon: Users,
      title: isEng ? "Social Cohesion & Public Deliberation" : "사회통합·공론",
      desc: isEng
        ? "Diagnoses social conflicts and researches public deliberation policies reflecting citizens' opinions and perceptions."
        : "사회갈등을 진단하고 시민의 의견과 인식을 반영하는 공론과 사회통합 정책을 연구합니다.",
      subTopics: isEng
        ? [
            "Social Conflict Diagnosis",
            "Citizen Perception Surveys",
            "Policy Acceptability Analysis",
            "Public Deliberation Surveys",
            "Deliberative Polling & Forums",
            "Social Cohesion Policy",
          ]
        : [
            "사회갈등 분석",
            "시민인식 조사",
            "정책수용성",
            "공론조사",
            "숙의형 조사",
            "사회통합 정책",
          ],
      keywords: ["#사회통합", "#갈등관리", "#공론조사", "#시민인식"],
      serviceLink: "/research-services",
    },
  ];

  const convergenceExamples = [
    { label: isEng ? "Regional Dev. × Demographics" : "지역발전 × 인구정책" },
    { label: isEng ? "Education × Employment" : "교육 × 고용" },
    { label: isEng ? "Welfare × Big Data" : "복지 × 데이터" },
    { label: isEng ? "Industry × Carbon Neutrality" : "산업 × 탄소중립" },
    { label: isEng ? "Governance × AI" : "행정 × AI" },
    { label: isEng ? "Social Cohesion × Surveys" : "사회통합 × 조사분석" },
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            RESEARCH DOMAINS · WHAT WE STUDY
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            {isEng ? "Research Domains" : "연구분야"}
          </h1>
          <p className="text-lg font-bold text-teal-300 max-w-3xl mx-auto pt-1">
            {isEng
              ? "Studying key policy challenges surrounding people, regions, industries, and the future."
              : "사람과 지역, 산업과 미래를 둘러싼 주요 정책과제를 연구합니다."}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal pt-2">
            {isEng
              ? "Better Future Policy Institute analyzes social changes and policy demands to design evidence-based solutions across regional development, education, welfare, labor, industry, environment, governance, digital AI, and social cohesion."
              : "더좋은미래정책연구원은 사회 변화와 정책수요를 분석하고, 현장과 데이터에 기반한 정책대안을 연구합니다. 지역발전, 교육, 복지, 고용, 산업, 환경, 행정, 디지털 전환, 사회통합 등 공공정책 전반의 주요 과제를 폭넓게 다룹니다."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        {/* 9 Core Research Domains (3 Columns Desktop Grid) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 pb-4 gap-2">
            <div>
              <span className="text-xs font-bold text-teal-600 font-sans tracking-widest uppercase">
                9 CORE RESEARCH AREAS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D52]">
                {isEng ? "9 Core Policy Research Domains" : "연구원 9대 정책 연구분야"}
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-400 font-sans">WHAT WE STUDY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((d) => {
              const IconComponent = d.icon;
              return (
                <div
                  key={d.id}
                  className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group space-y-6"
                >
                  <div className="space-y-5">
                    {/* Header Icon & Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 text-[#0B2D52] group-hover:bg-[#0B2D52] group-hover:text-teal-300 flex items-center justify-center transition-colors shadow-sm shrink-0">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-[#0B2D52] group-hover:text-teal-600 transition-colors">
                          {d.title}
                        </h3>
                        <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest font-sans">
                          {d.id}
                        </span>
                      </div>
                    </div>

                    {/* 2-line Description */}
                    <p className="text-xs text-slate-600 leading-relaxed min-h-[40px] font-normal">
                      {d.desc}
                    </p>

                    {/* Key Sub-topics List */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-400 font-sans uppercase">
                        {isEng ? "Key Research Topics" : "주요 연구주제"}
                      </span>
                      <ul className="grid grid-cols-2 gap-1.5 text-xs text-slate-700 font-medium">
                        {d.subTopics.map((topic, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-[11px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                            <span className="truncate">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hashtag Keywords */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {d.keywords.map((kw, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-slate-50 text-slate-600 border border-slate-200/80 text-[11px] font-bold rounded-lg font-sans"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={d.serviceLink}
                      className="inline-flex items-center justify-between w-full py-2.5 px-4 bg-slate-50 hover:bg-[#0B2D52] hover:text-white rounded-xl text-xs font-bold text-[#0B2D52] transition-colors"
                    >
                      <span>{isEng ? "View Related Research Services" : "관련 연구용역 보기"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Convergence Research Section (융합연구 섹션) */}
        <section className="bg-gradient-to-br from-[#0B2D52] to-[#061B33] rounded-3xl p-8 sm:p-12 text-white shadow-xl space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-teal-400" />
              <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase">
                CONVERGENCE POLICY RESEARCH
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {isEng ? "Policies cannot be solved by a single domain alone." : "정책은 하나의 분야로만 해결되지 않습니다."}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {isEng
                ? "Better Future Policy Institute combines regional development, education, welfare, industry, environment, and data analytics to address complex multifaceted social challenges."
                : "더좋은미래정책연구원은 지역, 교육, 복지, 산업, 환경, 데이터 등 다양한 영역을 결합하여 복합적인 사회문제에 대응합니다."}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {convergenceExamples.map((ex, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 text-center font-bold text-xs text-white hover:bg-teal-500/20 transition-colors shadow-inner"
              >
                {ex.label}
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300 font-medium">
              {isEng
                ? "Facing complex interdisciplinary policy challenges? Consult with our expert team."
                : "복합적인 융합 정책과제 진단 및 연구 계획 수립이 필요하신가요?"}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/inquiry"
                className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-[#0B2D52] font-extrabold text-xs rounded-xl shadow transition-colors inline-flex items-center gap-1.5"
              >
                <span>{isEng ? "Consult Research Project" : "연구용역 상담하기"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/research-services"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs rounded-xl border border-white/20 transition-colors inline-flex items-center gap-1.5"
              >
                <span>{isEng ? "View Research Services" : "연구용역·서비스 보기"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
