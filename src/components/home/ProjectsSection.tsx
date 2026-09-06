import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  badge1: string;
  badge2: string;
  date: string;
  imgUrl: string;
}

const mockupProjects: ProjectItem[] = [
  {
    id: "1",
    slug: "regional-vitalizations-2024",
    title: "지방소멸 대응을 위한 지역정책 발전방안 연구",
    badge1: "정책연구",
    badge2: "지역발전",
    date: "2024. 12.",
    imgUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    slug: "future-education-demand-survey",
    title: "미래교육 전환을 위한 교육 수요 및 인식 조사",
    badge1: "조사·분석",
    badge2: "교육",
    date: "2024. 10.",
    imgUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    slug: "carbon-neutrality-strategy-2023",
    title: "탄소중립 이행 정책사업 성과평가 연구",
    badge1: "평가·컨설팅",
    badge2: "환경",
    date: "2024. 08.",
    imgUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "4",
    slug: "social-integration-index-2023",
    title: "지방정부 행정혁신 모델 개발 연구",
    badge1: "정책연구",
    badge2: "행정",
    date: "2024. 06.",
    imgUrl: "https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D52]">
              주요 연구성과
            </h2>
            <span className="text-sm font-semibold text-slate-500">
              — 현장의 문제를 연구로, 연구의 결과를 변화로 연결합니다.
            </span>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-[#0B2D52] transition-colors group shrink-0"
          >
            <span>성과사례 더보기</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Outcome Cards Grid (Matching Target Mockup Exactly) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockupProjects.map((item) => (
            <Link
              key={item.id}
              href={`/projects/${item.slug}`}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Photo Thumbnail */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.imgUrl}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  {/* Badges */}
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-bold rounded-md">
                      {item.badge1}
                    </span>
                    <span className="px-2.5 py-0.5 bg-sky-50 text-sky-800 text-[11px] font-bold rounded-md">
                      {item.badge2}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-[#0B2D52] group-hover:text-teal-600 transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Footer Date & Action Button */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span className="font-sans">{item.date}</span>
                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#0B2D52] group-hover:text-white flex items-center justify-center text-slate-700 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
