import React from "react";
import Link from "next/link";
import { Award, ArrowRight, ShieldCheck } from "lucide-react";

const researchers = [
  {
    name: "임혜자 박사",
    englishName: "Dr. Im Hye-ja",
    title: "대표연구원",
    department: "연구총괄본부",
    specialty: "정책기획 · 공공정책 · 연구총괄",
    desc: "정책연구 전반을 총괄하며 연구원의 연구방향과 주요 프로젝트를 이끕니다.",
  },
  {
    name: "이세리 박사",
    englishName: "Dr. Lee Se-ri",
    title: "수석연구원",
    department: "정책연구실",
    specialty: "정책연구 · 조사분석 · 사회정책",
    desc: "정책연구와 조사·분석을 중심으로 다양한 사회현안에 대한 연구를 수행합니다.",
  },
  {
    name: "이윤정 박사",
    englishName: "Dr. Lee Yoon-jung",
    title: "수석연구원",
    department: "평가컨설팅실",
    specialty: "사회정책 · 정책평가 · 공공컨설팅",
    desc: "사회정책과 평가·컨설팅 분야를 중심으로 실효성 있는 정책대안을 연구합니다.",
  },
  {
    name: "홍길동 박사",
    englishName: "Dr. Hong Gil-dong",
    title: "수석연구원",
    department: "데이터인사이트센터",
    specialty: "데이터 분석 · 정책 인사이트 · 빅데이터",
    desc: "데이터 분석과 정책 인사이트를 중심으로 근거 기반의 연구를 수행합니다.",
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
              주요 연구진 소개
            </h2>
            <p className="mt-2 text-base text-slate-600">
              다양한 분야의 전문성과 객관적 분석 역량을 갖춘 연구진이 더 나은 정책을 연구합니다.
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
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B2D52] to-[#14B8A6] flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform font-sans">
                  {r.name[0]}
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-bold text-[#0B2D52]">{r.name}</h3>
                    <span className="text-xs font-semibold text-teal-600 font-sans">{r.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-sans">{r.englishName}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {r.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200/60 text-xs">
                  <div className="flex items-start gap-2 text-slate-700">
                    <Award className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="font-semibold">{r.specialty}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>학력·경력 정보</span>
                <span className="text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded">추후 업데이트</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
