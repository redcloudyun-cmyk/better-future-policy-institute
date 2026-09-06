import React from "react";
import Link from "next/link";
import { ArrowRight, Building, Calendar, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string | null;
  clientName?: string | null;
  periodStart?: string | null;
  periodEnd?: string | null;
  summary?: string | null;
  category?: { title: string } | null;
}

interface ProjectsSectionProps {
  initialProjects?: Project[];
}

const fallbackProjects: Project[] = [
  {
    id: "1",
    slug: "regional-vitalizations-2024",
    title: "지방소멸 대응을 위한 지역활성화 기본계획 수립 연구",
    subtitle: "인구 감소지역 특화 맞춤형 산업·복지·거주 복합 기본계획",
    clientName: "지방자치단체",
    periodStart: "2024.01",
    periodEnd: "2024.06",
    summary: "주민 인터뷰, 문헌 및 통계분석을 종합하여 지자체 맞춤형 인구 활성화 로드맵을 구축했습니다.",
    category: { title: "지역발전" },
  },
  {
    id: "2",
    slug: "youth-policy-evaluation-2024",
    title: "청년 정책 효과성 평가 및 개선방안 연구",
    subtitle: "주거·일자리 지원사업 정량 평가 및 청년 패널 실태조사",
    clientName: "중앙정부",
    periodStart: "2023.09",
    periodEnd: "2024.03",
    summary: "청년층 3,000명 표본조사를 통해 현행 정책의 실효성을 체계적으로 파악하고 개선 대안을 제시했습니다.",
    category: { title: "복지·사회" },
  },
  {
    id: "3",
    slug: "carbon-neutrality-strategy-2023",
    title: "탄소중립 이행을 위한 정책추진 전략 연구",
    subtitle: "공공기관 2030 온실가스 감축 이행 가이드라인 및 로드맵",
    clientName: "공공기관",
    periodStart: "2023.04",
    periodEnd: "2023.11",
    summary: "산업 및 에너지 데이터에 기반해 감축 목표를 현실화하고 지속가능한 이행 전략을 도출했습니다.",
    category: { title: "환경·에너지" },
  },
  {
    id: "4",
    slug: "social-integration-index-2023",
    title: "국민 정책 인식조사 및 사회통합 지수 개발 연구",
    subtitle: "국가 주요 정책에 대한 국민적 신뢰도 및 통합지표 모형 체계화",
    clientName: "중앙정부",
    periodStart: "2023.02",
    periodEnd: "2023.08",
    summary: "다층적 데이터 분석 모델을 설계하여 정책 수용도 및 국민 체감 만족도를 통합 수치화했습니다.",
    category: { title: "행정·거버넌스" },
  },
];

export default function ProjectsSection({ initialProjects }: ProjectsSectionProps) {
  const projects = initialProjects && initialProjects.length > 0 ? initialProjects : fallbackProjects;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1 font-sans">
              FEATURED CASES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D52]">
              주요 연구성과 및 수행 사례
            </h2>
            <p className="mt-2 text-base text-slate-600">
              데이터로 입증된 변화, 현장에서 신뢰받는 더좋은미래정책연구원의 연구 성과입니다.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B2D52] hover:text-teal-600 transition-colors group"
          >
            <span>전체 연구성과 사례 보기</span>
            <ArrowRight className="w-4 h-4 text-teal-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Project Cards Grid Matching Image 1 & 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Badges */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#0B2D52] text-teal-300 text-xs font-bold rounded-md">
                      {item.category?.title || "정책연구"}
                    </span>
                    {item.clientName && (
                      <span className="px-2.5 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-md flex items-center gap-1">
                        <Building className="w-3 h-3 text-slate-500" />
                        {item.clientName}
                      </span>
                    )}
                  </div>
                  {item.periodEnd && (
                    <span className="text-xs font-medium text-slate-400 font-sans flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.periodEnd}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-[#0B2D52] group-hover:text-teal-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      {item.subtitle}
                    </p>
                  )}
                </div>

                {/* Summary */}
                {item.summary && (
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {item.summary}
                  </p>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#0B2D52] group-hover:text-teal-600 transition-colors">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  연구결과 요약보기
                </span>
                <Link
                  href={`/projects/${item.slug}`}
                  className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-[#0B2D52] group-hover:text-white group-hover:border-[#0B2D52] transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
