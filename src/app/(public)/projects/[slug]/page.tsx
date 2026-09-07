import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { Building, Calendar, User, ArrowLeft, Download, FileText, CheckCircle } from "lucide-react";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = await prisma.researchProject.findUnique({
    where: { slug: params.slug },
  });

  if (!project) return { title: "프로젝트를 찾을 수 없습니다." };

  return {
    title: `${project.title} | 주식회사 미래정책연구원`,
    description: project.summary || project.title,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = await prisma.researchProject.findUnique({
    where: { slug: params.slug },
    include: { category: true },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0B2D52] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>연구성과 목록으로 돌아가기</span>
        </Link>

        {/* Main Paper Box */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/80 shadow-md space-y-8">
          {/* Header */}
          <div className="space-y-4 border-b border-slate-100 pb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-[#0B2D52] text-teal-300 text-xs font-bold rounded-md">
                {project.category?.title || "정책연구"}
              </span>
              {project.clientName && (
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-slate-500" />
                  발주기관: {project.clientName}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B2D52] leading-tight">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="text-base text-slate-600 font-medium">
                {project.subtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-2">
              {project.projectManager && (
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-teal-600" />
                  <span>책임연구원: {project.projectManager}</span>
                </div>
              )}
              {project.periodStart && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-teal-600" />
                  <span>연구기간: {project.periodStart} ~ {project.periodEnd || "현재"}</span>
                </div>
              )}
            </div>
          </div>

          {/* Abstract / Summary */}
          {project.summary && (
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/80 space-y-2">
              <h3 className="text-sm font-bold text-[#0B2D52] flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                <span>연구 요약 (Executive Summary)</span>
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {project.summary}
              </p>
            </div>
          )}

          {/* Body Content */}
          <div className="prose max-w-none text-slate-800 text-sm leading-relaxed space-y-4">
            <h3 className="text-lg font-bold text-[#0B2D52]">연구의 배경 및 필요성</h3>
            <p>
              본 연구는 최근 가속화되고 있는 복합적 사회 문제와 행정 환경의 변화에 적극 대응하기 위해 추진되었습니다. 데이터에 기반한 다각적 실태 파악과 체계적 거버넌스 설계를 수행하였습니다.
            </p>
            <h3 className="text-lg font-bold text-[#0B2D52]">주요 연구 결과 및 정책 제안</h3>
            <p>
              1. **현황 진단 및 표본 분석**: 현장 데이터 및 관련 통계 지표를 교차 검증하여 핵심 결함을 도출했습니다.
            </p>
            <p>
              2. **맞춤형 실행 로드맵 수립**: 발주기관의 실행 역량과 예산 구조를 고려한 단계별 사업 이행 계획을 체계화했습니다.
            </p>
          </div>

          {/* Report Download CTA */}
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-teal-50/50 p-6 rounded-xl border border-teal-100">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-teal-600 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-[#0B2D52]">정책연구 요약보고서</h4>
                <p className="text-xs text-slate-500">발주기관 계약조건 및 공개 규정을 준수합니다.</p>
              </div>
            </div>
            <a
              href="/inquiry"
              className="px-5 py-2.5 bg-[#0B2D52] hover:bg-[#061B33] text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-teal-300" />
              <span>보고서 문의 / 상담 신청</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
