import React from "react";
import Link from "next/link";
import { Megaphone, Calendar, ChevronRight, ShieldAlert, ArrowRight } from "lucide-react";

export default function NoticesSection() {
  return (
    <section className="py-16 bg-[#F1F5F9] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B2D52] text-teal-300 flex items-center justify-center font-bold shadow-xs">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-[#0B2D52]">공식 공시 및 소식게시판</h2>
              <p className="text-xs text-slate-500">주주총회 소집공고, 재무제표 공시 및 연구원 공식 알림</p>
            </div>
          </div>

          <Link
            href="/notices"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#0B2D52] hover:text-teal-600 transition-colors group shrink-0"
          >
            <span>전체 공시목록 보기</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Notice Banner matching the uploaded image */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-red-100 text-red-700 text-[11px] font-extrabold rounded-md">
                주주총회 / 공시
              </span>
              <span className="text-xs text-slate-400 font-sans">2026.09.06</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#0B2D52]">
              정기주주총회 소집공고 및 재무제표 공고
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
              주식회사 더좋은미래정책연구원 정기주주총회 개최(일시: 2026년 9월 30일 오전 10시, 본점 회의실) 및 제1기 재무제표 승인의 건 공시문입니다.
            </p>
          </div>

          <Link
            href="/notices/shareholders-2026"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0B2D52] hover:bg-[#061B33] text-white text-xs font-extrabold rounded-xl shadow transition-colors shrink-0"
          >
            <span>공시문 전문 보기</span>
            <ChevronRight className="w-4 h-4 text-teal-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
