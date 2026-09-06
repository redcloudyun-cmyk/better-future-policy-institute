import React from "react";
import Link from "next/link";
import { User, Award, GraduationCap, ArrowRight } from "lucide-react";

const researchers = [
  {
    name: "임혜자",
    englishName: "Hye-ja Lim",
    title: "대표이사 / 원장",
    department: "연구기획실",
    specialty: "공공정책 · 지역발전 · 국가거버넌스",
    education: "서울대학교 행정대학원 행정학 박사",
    career: "전) 대통령비서실 선임행정관",
  },
  {
    name: "김현우",
    englishName: "Hyun-woo Kim",
    title: "선임연구위원",
    department: "지역정책연구실",
    specialty: "지방소멸 대응 · 균형발전 · 도시계획",
    education: "연세대학교 도시공학과 박사",
    career: "전) 한국지방행정연구원 객원연구원",
  },
  {
    name: "박서연",
    englishName: "Seo-yeon Park",
    title: "연구위원",
    department: "데이터·조사연구실",
    specialty: "통계분석 · 사회조사 · Big Data Analytics",
    education: "고려대학교 통계학과 박사",
    career: "전) 한국갤럽 수석연구원",
  },
  {
    name: "정민준",
    englishName: "Min-jun Jung",
    title: "연구위원",
    department: "환경·에너지연구실",
    specialty: "탄소중립 · ESG · 기후변화 정책",
    education: "KAIST 녹색성장대학원 박사",
    career: "현) 더좋은미래정책연구원 연구위원",
  },
];

export default function ResearchersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1 font-sans">
              EXPERT RESEARCHERS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D52]">
              더좋은미래정책연구원 연구진
            </h2>
            <p className="mt-2 text-base text-slate-600">
              학계, 중앙부처, 연구기관 출신의 분야별 최고 전문 연구 인력이 고품질 정책 해법을 탐구합니다.
            </p>
          </div>
          <Link
            href="/researchers"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B2D52] hover:text-teal-600 transition-colors group"
          >
            <span>전체 연구진 프로필 보기</span>
            <ArrowRight className="w-4 h-4 text-teal-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchers.map((r, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Avatar Placeholder / Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B2D52] to-[#14B8A6] flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                  {r.name[0]}
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-bold text-[#0B2D52]">{r.name}</h3>
                    <span className="text-xs font-semibold text-teal-600 font-sans">{r.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-sans">{r.englishName}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200/60 text-xs">
                  <div className="flex items-start gap-2 text-slate-700">
                    <Award className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="font-semibold">{r.specialty}</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-500">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{r.education}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] text-slate-500">
                {r.career}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
