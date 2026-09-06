import React from "react";
import Link from "next/link";
import { ArrowRight, Pin, ChevronRight } from "lucide-react";

interface Notice {
  id: string;
  slug: string;
  title: string;
  publishedAt: Date;
}

interface NoticesSectionProps {
  notices?: Notice[];
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
}

export default function NoticesSection({ notices = [] }: NoticesSectionProps) {
  if (notices.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D52]">공지사항</h2>
            <span className="hidden sm:inline text-slate-300">—</span>
            <p className="hidden sm:inline text-sm text-slate-500">
              주식회사 더좋은미래정책연구원의 공식 안내 사항입니다.
            </p>
          </div>
          <Link
            href="/notices"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B2D52] hover:text-teal-600 transition-colors group shrink-0"
          >
            <span>공지사항 전체보기</span>
            <ArrowRight className="w-4 h-4 text-teal-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="bg-[#F7F9FC] rounded-2xl border border-slate-200 overflow-hidden">
          <ul>
            {notices.map((n, idx) => (
              <li key={n.id} className="border-b border-slate-200 last:border-b-0">
                <Link
                  href={`/notices/${n.slug}`}
                  className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-white transition-colors group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {idx === 0 && <Pin className="w-4 h-4 text-teal-500 shrink-0" />}
                    <span className="text-sm font-semibold text-[#0B2D52] group-hover:text-teal-600 transition-colors truncate">
                      {n.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 shrink-0">
                    <span>{formatDate(n.publishedAt)}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-teal-500 transition-colors" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
