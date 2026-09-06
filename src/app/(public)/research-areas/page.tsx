import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { Landmark, Building2, HeartHandshake, TrendingUp, Leaf, Cpu, GraduationCap, Compass, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "연구분야 | 주식회사 더좋은미래정책연구원",
  description: "행정·거버넌스, 지역발전, 복지·사회, 경제·산업, 환경·에너지, 디지털·AI 등 9대 정책연구 분야 안내",
};

const iconMap: Record<string, any> = {
  Landmark,
  Building2,
  Users: HeartHandshake,
  TrendingUp,
  Leaf,
  Cpu,
  GraduationCap,
  Compass,
  Sparkles,
};

export default async function ResearchAreasPage() {
  let categories: any[] = [];
  try {
    categories = await prisma.researchCategory.findMany({
      where: { isPublished: true },
      orderBy: { sortOrder: "asc" },
      include: {
        _count: {
          select: { projects: true },
        },
      },
    });
  } catch (error) {
    console.error("Failed to load categories:", error);
  }

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            RESEARCH DOMAINS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">연구분야</h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            사회적 현안을 수용하고 정책 대안을 설계하는 9대 핵심 연구 영역입니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const IconComp = (cat.icon && iconMap[cat.icon]) || Sparkles;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-[#0B2D52] group-hover:text-teal-300 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B2D52] group-hover:text-teal-600 transition-colors">
                      {cat.title}
                    </h3>
                    {cat.englishTitle && (
                      <p className="text-xs font-semibold text-slate-400 font-sans mt-0.5">
                        {cat.englishTitle}
                      </p>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.description || "해당 분야의 최신 데이터와 트렌드를 반영한 맞춤형 연구용역 및 정책 대안을 개발합니다."}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-600">
                  <span>수행 사례 {cat._count?.projects || 0}건</span>
                  <Link
                    href={`/projects?category=${cat.slug}`}
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    <span>관련 프로젝트 보기</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
