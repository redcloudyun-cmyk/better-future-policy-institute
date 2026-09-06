import React from "react";
import Link from "next/link";
import { Building2, GraduationCap, Heart, Settings, Leaf, Landmark, ArrowRight } from "lucide-react";

const areas = [
  {
    slug: "regional-dev",
    title: "지역발전",
    desc: "균형 있는 성장, 함께하는 지역",
    icon: Building2,
    bgImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "education",
    title: "교육",
    desc: "맞춤형 미래, 배움의 기회",
    icon: GraduationCap,
    bgImg: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "welfare-social",
    title: "복지",
    desc: "포용하는 사회, 함께하는 삶",
    icon: Heart,
    bgImg: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "economy-industry",
    title: "산업",
    desc: "혁신을 통한 지속 가능한 성장",
    icon: Settings,
    bgImg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "environment-energy",
    title: "환경",
    desc: "지속 가능한 미래 환경",
    icon: Leaf,
    bgImg: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "governance",
    title: "행정",
    desc: "신뢰받는 공공서비스",
    icon: Landmark,
    bgImg: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ResearchAreasSection() {
  return (
    <section className="py-12 md:py-14 bg-[#F8FAFC] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D52]">
              주요 연구분야
            </h2>
            <span className="text-sm font-semibold text-slate-500">
              — 사람과 사회의 다양한 분야에서 지속 가능한 미래를 연구합니다.
            </span>
          </div>
          <Link
            href="/research-areas"
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-[#0B2D52] transition-colors group shrink-0"
          >
            <span>연구분야 전체보기</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Photo Overlay Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {areas.map((area) => {
            const AreaIcon = area.icon;
            return (
              <Link
                key={area.slug}
                href={`/research-areas?category=${area.slug}`}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-slate-900 h-60 p-5 flex flex-col justify-between"
              >
                {/* Background Photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-60"
                  style={{ backgroundImage: `url('${area.bgImg}')` }}
                />

                {/* Dark Blue Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D52] via-[#0B2D52]/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                {/* Top Icon */}
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0B2D52] transition-colors">
                    <AreaIcon className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-1 text-white">
                  <h3 className="text-lg font-extrabold text-white group-hover:text-teal-200 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-[11px] text-slate-200 font-normal leading-tight">
                    {area.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
