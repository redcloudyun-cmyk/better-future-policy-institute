import React from "react";
import Link from "next/link";
import { FileText, BarChart, ArrowRight, User, Calendar } from "lucide-react";

const articles = [
  {
    slug: "brief-2024-01",
    type: "POLICY_BRIEF",
    typeLabel: "Policy Brief",
    title: "[Policy Brief Vol.1] 인구구조 변화에 대응하는 지자체 거버넌스 혁신 방향",
    summary: "초고령사회 진입에 따른 공공서비스 재편 및 행정 구역간 연계 거버넌스 구축 방안을 제시합니다.",
    author: "임혜자 대표연구원",
    date: "2026.06.10",
    readTime: "5분 읽기",
  },
  {
    slug: "insight-2024-02",
    type: "DATA_INSIGHT",
    typeLabel: "Data Insight",
    title: "[Data Insight] 빅데이터로 본 청년층 공공정책 체감도와 개선 과제",
    summary: "공공 데이터 및 소셜 데이터 500만 건을 다각도로 분석하여 청년들이 느끼는 실제 정책 만족도와 사각지대를 도출했습니다.",
    author: "이세리 수석연구원",
    date: "2026.05.28",
    readTime: "7분 읽기",
  },
  {
    slug: "issue-report-2024-03",
    type: "ISSUE_REPORT",
    typeLabel: "Issue Report",
    title: "[Issue Report] 2026 공공기관 ESG 경영 이행 가이드라인",
    summary: "공공기관의 지속가능발전 평가 지표 개정에 대응한 실무 중심 가이드라인 보고서입니다.",
    author: "홍길동 수석연구원",
    date: "2026.04.15",
    readTime: "6분 읽기",
  },
];

export default function InsightsSection() {
  return (
    <section className="py-20 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1 font-sans">
              DATA & POLICY INSIGHT
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D52]">
              정책 인사이트 & 브리프
            </h2>
            <p className="mt-2 text-base text-slate-600">
              데이터에 기반한 심층 정책 분석과 최신 이슈 리포트를 공유합니다.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B2D52] hover:text-teal-600 transition-colors group"
          >
            <span>전체 인사이트 아카이브</span>
            <ArrowRight className="w-4 h-4 text-teal-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item) => (
            <Link
              key={item.slug}
              href={`/insights/${item.slug}`}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-teal-50 border border-teal-200/80 text-teal-700 text-xs font-bold rounded-full font-sans">
                    {item.typeLabel}
                  </span>
                  <span className="text-[11px] text-slate-400 font-sans">{item.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-[#0B2D52] group-hover:text-teal-600 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <User className="w-3.5 h-3.5 text-teal-600" />
                  {item.author}
                </span>
                <span className="font-sans">{item.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
