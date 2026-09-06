import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { Search, Building, Calendar, ArrowUpRight, Filter } from "lucide-react";

export const metadata = {
  title: "연구성과 | 주식회사 더좋은미래정책연구원",
  description: "중앙정부, 지자체, 공공기관 위탁 연구성과 사례 및 정책보고서 아카이브",
};

interface ProjectsPageProps {
  searchParams: { category?: string; search?: string };
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const selectedCategory = searchParams.category;
  const searchQuery = searchParams.search;

  let whereClause: any = { visibility: "PUBLIC" };

  if (selectedCategory) {
    whereClause.category = { slug: selectedCategory };
  }

  if (searchQuery) {
    whereClause.OR = [
      { title: { contains: searchQuery } },
      { summary: { contains: searchQuery } },
      { clientName: { contains: searchQuery } },
    ];
  }

  let projects: any[] = [];
  let categories: any[] = [];

  try {
    projects = await prisma.researchProject.findMany({
      where: whereClause,
      include: { category: true },
      orderBy: { publishedAt: "desc" },
    });

    categories = await prisma.researchCategory.findMany({
      where: { isPublished: true },
      orderBy: { sortOrder: "asc" },
    });
  } catch (error) {
    console.error("Failed to load projects page data:", error);
  }

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            RESEARCH CASES & REPORTS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">연구성과</h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            공공과 민간 파트너와 함께 수행한 주요 정책연구 사례 및 보고서입니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        {/* Category & Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            <Link
              href="/projects"
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
                !selectedCategory
                  ? "bg-[#0B2D52] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              전체
            </Link>
            {categories.map((c) => (
              <Link
                key={c.id}
                href={`/projects?category=${c.slug}`}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
                  selectedCategory === c.slug
                    ? "bg-[#0B2D52] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Projects Cards List */}
        {projects.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center border border-slate-200 space-y-3">
            <p className="text-base font-bold text-slate-700">검색 조건에 맞는 연구성과 사례가 없습니다.</p>
            <p className="text-xs text-slate-400">다른 카테고리나 검색어로 확인해 주세요.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold rounded-md">
                      {p.category?.title || "정책연구"}
                    </span>
                    {p.clientName && (
                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        {p.clientName}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0B2D52] group-hover:text-teal-600 transition-colors leading-snug">
                      {p.title}
                    </h3>
                    {p.subtitle && (
                      <p className="text-xs text-slate-500 mt-1">{p.subtitle}</p>
                    )}
                  </div>

                  {p.summary && (
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {p.summary}
                    </p>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0B2D52]">
                  <span className="text-slate-400 font-sans">{p.periodEnd || p.periodStart || "2024"}</span>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-1 text-teal-600 hover:underline"
                  >
                    <span>상세보기</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
