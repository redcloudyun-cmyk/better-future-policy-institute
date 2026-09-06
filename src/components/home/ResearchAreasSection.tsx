import React from "react";
import Link from "next/link";
import { Landmark, Building2, HeartHandshake, TrendingUp, Leaf, Cpu, GraduationCap, Compass, Sparkles, ArrowRight } from "lucide-react";

const areas = [
  {
    slug: "governance",
    title: "행정·거버넌스",
    desc: "지방행정, 거버넌스, 공공혁신",
    icon: Landmark,
    bgGradient: "from-slate-900/90 via-slate-800/80 to-[#0B2D52]/90",
  },
  {
    slug: "regional-dev",
    title: "지역발전",
    desc: "지방소멸대응, 균형발전, 지역활성화",
    icon: Building2,
    bgGradient: "from-[#0B2D52]/90 via-[#0F766E]/80 to-teal-900/90",
  },
  {
    slug: "welfare-social",
    title: "복지·사회",
    desc: "사회복지, 청년·노인, 사회안전망",
    icon: HeartHandshake,
    bgGradient: "from-teal-900/90 via-cyan-900/80 to-[#0B2D52]/90",
  },
  {
    slug: "economy-industry",
    title: "경제·산업",
    desc: "지역경제, 일자리, 신산업 육성",
    icon: TrendingUp,
    bgGradient: "from-blue-950/90 via-sky-950/80 to-[#0B2D52]/90",
  },
  {
    slug: "environment-energy",
    title: "환경·에너지",
    desc: "탄소중립, 기후대응, 지속가능성",
    icon: Leaf,
    bgGradient: "from-emerald-950/90 via-teal-950/80 to-[#0B2D52]/90",
  },
  {
    slug: "digital-ai",
    title: "디지털·AI 정책",
    desc: "AI 기반 정책분석, 빅데이터 거버넌스",
    icon: Cpu,
    bgGradient: "from-[#0B2D52]/90 via-indigo-950/80 to-slate-900/90",
  },
];

export default function ResearchAreasSection() {
  return (
    <section className="py-20 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1 font-sans">
              RESEARCH AREAS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D52]">
              주요 연구분야
            </h2>
            <p className="mt-2 text-base text-slate-600">
              사람과 사회의 다양한 분야에서 실질적이고 지속 가능한 미래를 연구합니다.
            </p>
          </div>
          <Link
            href="/research-areas"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B2D52] hover:text-teal-600 transition-colors group"
          >
            <span>전체 분야 보기</span>
            <ArrowRight className="w-4 h-4 text-teal-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Areas Cards Grid Matching Image 2 & 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => {
            const AreaIcon = area.icon;
            return (
              <Link
                key={area.slug}
                href={`/research-areas?category=${area.slug}`}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-slate-200/80 flex flex-col justify-between h-56 p-7"
              >
                {/* Background Styling */}
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/10 transition-colors" />
                <div className={`absolute inset-0 bg-gradient-to-br ${area.bgGradient} opacity-90 group-hover:opacity-95 transition-opacity`} />

                {/* Card Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-teal-300 group-hover:scale-110 transition-transform">
                    <AreaIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-teal-300 font-sans tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                    BFPI
                  </span>
                </div>

                {/* Card Content */}
                <div className="relative z-10 space-y-1 text-white">
                  <h3 className="text-2xl font-bold text-white group-hover:text-teal-200 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-normal">
                    {area.desc}
                  </p>
                </div>

                {/* Bottom Arrow Indicator */}
                <div className="relative z-10 flex items-center justify-end text-xs font-semibold text-teal-300 group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
