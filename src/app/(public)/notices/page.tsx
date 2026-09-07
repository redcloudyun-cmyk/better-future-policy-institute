import React from "react";
import Link from "next/link";
import { Megaphone, Calendar, ChevronRight, FileText, Download, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "공시 및 공지사항 | 주식회사 미래정책연구원",
  description: "주주총회 소집공고, 재무제표 공고, 주요 연구원 소식 및 공식 공시 게시판",
};

const notices = [
  {
    id: "shareholders-2026",
    slug: "shareholders-2026",
    title: "정기주주총회 소집공고 및 재무제표 공고",
    category: "주총공고",
    isImportant: true,
    date: "2026.09.06",
    author: "경영지원팀",
    summary: "주식회사 미래정책연구원 제1기 정기주주총회 개최 소집공고 및 재무제표 공시 안내입니다.",
  },
  {
    id: "bfpi-launch-2024",
    slug: "bfpi-launch-2024",
    title: "주식회사 미래정책연구원 수원의 본점 공식 개원 안내",
    category: "연구원소식",
    isImportant: false,
    date: "2026.08.15",
    author: "홍보팀",
    summary: "데이터 기반 고품질 정책연구와 공공기관·지자체 연구용역 수행을 위한 본점 종합 연구기획실 개원 소식입니다.",
  },
];

export default function NoticesPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            OFFICIAL ANNOUNCEMENTS & NOTICES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">공시 및 공지사항</h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            주식회사 미래정책연구원의 주주총회 소집공고, 재무제표 공시 및 주요 연구원 소식을 안내합니다.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        {/* Notice List Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
          <div className="divide-y divide-slate-100">
            {notices.map((notice) => (
              <Link
                key={notice.id}
                href={`/notices/${notice.slug}`}
                className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors group"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    {notice.isImportant && (
                      <span className="px-2.5 py-0.5 bg-red-50 text-red-600 border border-red-200 text-xs font-bold rounded-md">
                        중요공시
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-md">
                      {notice.category}
                    </span>
                    <span className="text-xs text-slate-400 font-sans">{notice.date}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0B2D52] group-hover:text-teal-600 transition-colors">
                    {notice.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2">
                    {notice.summary}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-teal-600 group-hover:translate-x-1 transition-transform shrink-0">
                  <span>공고문 확인</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
