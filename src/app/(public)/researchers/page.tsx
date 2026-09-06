import React from "react";
import { prisma } from "@/lib/db";
import { Award, GraduationCap, Briefcase } from "lucide-react";

export const metadata = {
  title: "연구진 소개 | 주식회사 더좋은미래정책연구원",
  description: "대표이사 임혜자 원장 및 주요 분야별 수석 연구원 프로필 소개",
};

export default async function ResearchersPage() {
  let researchers: any[] = [];
  try {
    researchers = await prisma.researcher.findMany({
      where: { isPublished: true },
      orderBy: { sortOrder: "asc" },
    });
  } catch (error) {
    console.error("Failed to load researchers:", error);
  }

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            RESEARCH TEAM
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">연구진 소개</h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            깊이 있는 전문성과 객관적 데이터 분석 역량을 갖춘 더좋은미래정책연구원의 연구진입니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchers.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0B2D52] to-[#14B8A6] flex items-center justify-center text-white font-extrabold text-2xl shadow-md shrink-0">
                    {r.name[0]}
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-2xl font-bold text-[#0B2D52]">{r.name}</h3>
                      <span className="text-sm font-bold text-teal-600">{r.title}</span>
                    </div>
                    {r.englishName && (
                      <p className="text-xs text-slate-400 font-sans">{r.englishName}</p>
                    )}
                    {r.department && (
                      <span className="inline-block mt-2 px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-md">
                        {r.department}
                      </span>
                    )}
                  </div>
                </div>

                {r.biography && (
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {r.biography}
                  </p>
                )}

                <div className="space-y-2 pt-2 text-xs">
                  {r.specialty && (
                    <div className="flex items-start gap-2 text-slate-800">
                      <Award className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="font-semibold">전문 분야: {r.specialty}</span>
                    </div>
                  )}
                  {r.education && (
                    <div className="flex items-start gap-2 text-slate-600">
                      <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>학력: {r.education}</span>
                    </div>
                  )}
                  {r.career && (
                    <div className="flex items-start gap-2 text-slate-600">
                      <Briefcase className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>주요 경력: {r.career}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
