import React from "react";
import Link from "next/link";
import { Search, BarChart2, FileCheck2, PieChart, Users, Database, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "연구용역 서비스 | 주식회사 더좋은미래정책연구원",
  description: "중앙정부, 지자체, 공공기관 및 민간기업 대상 10대 수주 위탁 연구용역 서비스 안내",
};

const servicesList = [
  {
    id: "policy",
    title: "1. 공공정책 및 사회과학 조사·연구",
    desc: "중앙정부, 지자체 및 공공기관의 비전 수립, 정책개발, 현안 분석 및 기본계획 수립 위탁 연구",
  },
  {
    id: "survey",
    title: "2. 사회조사 및 여론·표본조사",
    desc: "전국 및 지역 단위 설문조사, FGI(집단심층면접), IDI(심층인터뷰), 표본추출 및 사회인식 파악",
  },
  {
    id: "evaluation",
    title: "3. 정책평가 및 사업 타당성조사",
    desc: "공공사업 성과평가, 정책 이행 효과성 검증, 사전 타당성 분석 및 이행 로드맵 제시",
  },
  {
    id: "consulting",
    title: "4. 행정·조직·경영 컨설팅",
    desc: "공공기관 조직 진단, 경영평가 대응, 기능 재정립 및 행정 효율화 전략 컨설팅",
  },
  {
    id: "data",
    title: "5. 통계 및 데이터 분석 (Data Analytics)",
    desc: "공공 및 소셜 빅데이터 결합 분석, 시계열 예측, 고급 다변량 통계분석 및 시각화",
  },
  {
    id: "ai",
    title: "6. AI 기반 정책분석 및 모델링",
    desc: "AI 및 자연어처리(NLP)를 활용한 이슈 요약, 키워드 트렌드 탐지 및 정책 시뮬레이션",
  },
  {
    id: "publication",
    title: "7. 연구보고서·백서·간행물 제작",
    desc: "전문 정책 보고서, 학술 간행물, 지자체 백서 및 전자출판 기획·제작",
  },
  {
    id: "event",
    title: "8. 세미나·포럼·공청회 운영",
    desc: "정책 토론회, 세미나, 학술대회, 전문가 워크숍 및 시민 공청회 기획·운영",
  },
  {
    id: "regional",
    title: "9. 지역발전 및 지방소멸대응 기본계획",
    desc: "지방소멸위험지구 인구·산업 진단 및 지자체 맞춤형 정주여건 개선 계획",
  },
  {
    id: "system",
    title: "10. 연구정보시스템 구축 및 운영",
    desc: "연구 아카이브 DB, 정책 데이터 대시보드 및 지식관리 시스템 구축",
  },
];

export default function ResearchServicesPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            RESEARCH SERVICES & CAPABILITIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">연구용역 서비스</h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            정관 기반 10대 수주 영역을 바탕으로 최적의 맞춤형 정책 해법을 제공합니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all space-y-3"
            >
              <h3 className="text-xl font-bold text-[#0B2D52] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                <span>{item.title}</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0B2D52] to-[#0D9488] rounded-2xl p-10 text-white text-center space-y-6 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">맞춤형 연구용역 제안이 필요하신가요?</h2>
          <p className="text-sm text-slate-200 max-w-xl mx-auto">
            과업 목적, 예산 및 일정에 맞는 가장 합리적이고 신뢰도 높은 연구 계획을 제시해 드립니다.
          </p>
          <Link
            href="/inquiry"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0B2D52] hover:bg-slate-100 text-sm font-bold rounded-xl shadow transition-colors"
          >
            <span>연구용역 온라인 상담신청</span>
            <ArrowRight className="w-4 h-4 text-teal-600" />
          </Link>
        </div>
      </div>
    </div>
  );
}
