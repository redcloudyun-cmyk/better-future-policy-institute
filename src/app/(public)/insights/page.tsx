import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { User, Calendar, Tag, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "데이터·인사이트 | 주식회사 미래정책연구원",
  description: "Policy Brief, Data Insight, Issue Report 정책 이슈 및 데이터 아카이브",
};

export default async function InsightsPage() {
  let contents: any[] = [];
  try {
    contents = await prisma.content.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { publishedAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to load insights contents:", error);
  }

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            POLICY & DATA ARCHIVE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">데이터·인사이트</h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            정책 현안 분석, 빅데이터 시각화 및 주요 정책 이슈 리포트 아카이브입니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contents.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold rounded-full font-sans">
                    {c.type}
                  </span>
                  <span className="text-xs text-slate-400 font-sans">
                    {new Date(c.publishedAt).toLocaleDateString("ko-KR")}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B2D52] group-hover:text-teal-600 transition-colors leading-snug">
                  {c.title}
                </h3>

                {c.summary && (
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {c.summary}
                  </p>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-teal-600" />
                  {c.author || "연구원"}
                </span>
                <span className="font-bold text-[#0B2D52] group-hover:text-teal-600 flex items-center gap-1">
                  전문보기 <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
