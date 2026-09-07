"use client";

import React from "react";
import { Award, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface Researcher {
  id: string;
  name: string;
  title: string;
  department: string;
  desc: string;
  specialties: string[];
}

export default function ResearchersPage() {
  const { lang } = useLanguage();
  const isEng = lang === "ENG";

  const officialResearchers: Researcher[] = [
    {
      id: "lim",
      name: isEng ? "Dr. Hye-ja Lim" : "임혜자 박사",
      title: isEng ? "Representative Researcher" : "대표연구원",
      department: isEng ? "Head of Research Operations" : "연구총괄본부",
      desc: isEng
        ? "Oversees overall policy research operations and leads the institute's strategic direction and major research initiatives."
        : "정책연구 전반을 총괄하며 연구원의 연구방향과 주요 프로젝트를 이끕니다.",
      specialties: isEng
        ? ["Policy Planning", "Public Policy", "Research Operations"]
        : ["정책기획", "공공정책", "연구총괄"],
    },
    {
      id: "lee-sr",
      name: isEng ? "Dr. Se-ri Lee" : "이세리 박사",
      title: isEng ? "Senior Researcher" : "수석연구원",
      department: isEng ? "Policy Research Lab" : "정책연구실",
      desc: isEng
        ? "Conducts research on various social issues focusing on policy research, data collection, and empirical analysis."
        : "정책연구와 조사·분석을 중심으로 다양한 사회현안에 대한 연구를 수행합니다.",
      specialties: isEng
        ? ["Policy Research", "Survey & Analysis", "Social Policy"]
        : ["정책연구", "조사분석", "사회정책"],
    },
    {
      id: "lee-yj",
      name: isEng ? "Dr. Yoon-jung Lee" : "이윤정 박사",
      title: isEng ? "Senior Researcher" : "수석연구원",
      department: isEng ? "Evaluation & Consulting Lab" : "평가컨설팅실",
      desc: isEng
        ? "Researches pragmatic policy solutions with a focus on social policy, program evaluation, and public sector consulting."
        : "사회정책과 평가·컨설팅 분야를 중심으로 실효성 있는 정책대안을 연구합니다.",
      specialties: isEng
        ? ["Social Policy", "Policy Evaluation", "Public Consulting"]
        : ["사회정책", "정책평가", "공공컨설팅"],
    },
    {
      id: "hong",
      name: isEng ? "Dr. Gil-dong Hong" : "홍길동 박사",
      title: isEng ? "Senior Researcher" : "수석연구원",
      department: isEng ? "Data Insights Center" : "데이터인사이트센터",
      desc: isEng
        ? "Performs evidence-backed research focusing on advanced data analytics and policy insight generation."
        : "데이터 분석과 정책 인사이트를 중심으로 근거 기반의 연구를 수행합니다.",
      specialties: isEng
        ? ["Data Analytics", "Policy Insights", "Big Data Research"]
        : ["데이터 분석", "정책 인사이트", "빅데이터 기반 연구"],
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            RESEARCH TEAM
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            {isEng ? "Research Team" : "연구진 소개"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            {isEng
              ? "Expert researchers equipped with interdisciplinary knowledge and rigorous data analytics design better policies."
              : "다양한 분야의 전문성과 객관적 분석 역량을 갖춘 연구진이 더 나은 정책을 연구합니다."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {officialResearchers.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-5">
                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0B2D52] to-[#14B8A6] flex items-center justify-center text-white font-extrabold text-2xl shadow-md shrink-0 font-sans">
                    {r.name[0]}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-2xl font-extrabold text-[#0B2D52]">{r.name}</h3>
                      <span className="text-xs sm:text-sm font-bold text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                        {r.title}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-500 font-sans">{r.department}</p>
                    <div className="pt-1 flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                      <span>{isEng ? "Better Future Policy Institute Co., Ltd." : "주식회사 더좋은미래정책연구원"}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100 font-normal">
                  {r.desc}
                </p>

                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex items-start gap-2 text-slate-800">
                    <Award className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="font-bold text-[#0B2D52]">
                      {isEng ? "Specialties:" : "전문 분야:"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pl-6">
                    {r.specialties.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg border border-slate-200/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>{isEng ? "Education & Career" : "학력·경력 정보"}</span>
                <span className="text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md text-[11px]">
                  {isEng ? "To be updated" : "추후 업데이트"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
