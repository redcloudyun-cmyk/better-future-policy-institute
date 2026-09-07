"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  BarChart2,
  Search,
  CheckSquare,
  TrendingUp,
  Briefcase,
  PieChart,
  Cpu,
  Eye,
  FileCheck,
  ArrowRight,
  ArrowDown,
  ShieldCheck,
  Target,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ResearchServicesPage() {
  const { lang } = useLanguage();
  const isEng = lang === "ENG";

  const servicesList = [
    {
      num: "01",
      icon: FileText,
      title: isEng ? "Policy Research & Master Plan Formulation" : "정책연구 및 기본계획 수립",
      desc: isEng
        ? "Analyzes policy issues and formulates mid-to-long term master plans including strategic frameworks and implementation roadmaps."
        : "정책현안을 분석하고 중장기 방향과 실행전략을 포함한 정책계획을 수립합니다.",
      activities: isEng
        ? [
            "Policy Environment Analysis",
            "Policy Need Diagnosis",
            "Vision & Goal Setting",
            "Strategic Task Derivation",
            "Detailed Action Plans",
            "Policy Roadmap Design",
          ]
        : [
            "정책환경 분석",
            "정책수요 진단",
            "비전 및 목표 설정",
            "전략과제 도출",
            "세부 실행계획",
            "정책 로드맵 설계",
          ],
      deliverables: isEng
        ? "Policy Research Report / Mid-to-Long Term Development Plan / Master Plan / Action Plan / Policy Roadmap"
        : "정책연구보고서 / 중장기 발전계획 / 기본계획 / 시행계획 / 정책 로드맵",
    },
    {
      num: "02",
      icon: BarChart2,
      title: isEng ? "Social Surveys & Public Opinion Sampling" : "사회조사 및 여론·표본조사",
      desc: isEng
        ? "Systematically surveys perception, needs, and satisfaction of citizens and stakeholders to provide objective policy evidence."
        : "정책대상과 시민의 인식, 수요, 만족도 등을 체계적으로 조사하여 객관적인 정책근거를 제공합니다.",
      activities: isEng
        ? [
            "Questionnaire Survey Design",
            "Sampling Design & Weighting",
            "Focus Group Interviews (FGI)",
            "In-Depth Interviews (IDI)",
            "Satisfaction Assessment",
            "Perception & Demand Analysis",
          ]
        : [
            "설문조사",
            "표본설계",
            "FGI(집단심층면접)",
            "IDI(심층인터뷰)",
            "만족도 조사",
            "인식 및 수요조사",
          ],
      deliverables: isEng
        ? "Survey Design / Questionnaire / Statistical Analysis / Survey Report / Policy Implications"
        : "조사설계서 / 설문지 / 통계분석 결과 / 조사보고서 / 정책 시사점",
    },
    {
      num: "03",
      icon: Search,
      title: isEng ? "Fact-Finding Surveys & Status Analysis" : "실태조사 및 현황분석",
      desc: isEng
        ? "Objectively grasps the current status of policy targets, industries, regions, and organizations to diagnose core challenges."
        : "정책대상, 산업, 지역, 기관의 현재 상태를 객관적으로 파악하고 핵심 문제를 진단합니다.",
      activities: isEng
        ? [
            "Current Status Survey",
            "Literature & Meta-Analysis",
            "Field Investigation",
            "Stakeholder Interviews",
            "Case Study Investigation",
            "Comparative Benchmarking",
          ]
        : [
            "현황조사",
            "문헌조사",
            "현장조사",
            "이해관계자 인터뷰",
            "사례조사",
            "비교분석",
          ],
      deliverables: isEng
        ? "Fact-Finding Report / Status Analysis / Problem Diagnosis / Baseline Statistics / Demand Analysis"
        : "실태조사 보고서 / 현황분석 / 문제진단 / 기초통계자료 / 정책수요 분석",
    },
    {
      num: "04",
      icon: CheckSquare,
      title: isEng ? "Policy & Performance Evaluation" : "정책평가 및 성과평가",
      desc: isEng
        ? "Analyzes the effectiveness and performance of public policies and projects to propose targeted improvement measures."
        : "정책과 사업의 효과성과 성과를 분석하고 개선방안을 제시합니다.",
      activities: isEng
        ? [
            "Performance Indicator Design",
            "Policy Impact Measurement",
            "Program Effectiveness Analysis",
            "User Satisfaction Evaluation",
            "Operational Performance Audit",
            "Task Derivation for Improvement",
          ]
        : [
            "성과지표 설계",
            "정책성과 측정",
            "사업 효과성 분석",
            "만족도 평가",
            "운영성과 평가",
            "개선과제 도출",
          ],
      deliverables: isEng
        ? "Performance Evaluation Report / Indicator Architecture / Improvement Framework / Policy Recommendations"
        : "성과평가 보고서 / 성과지표 체계 / 개선과제 / 정책 권고안",
    },
    {
      num: "05",
      icon: TrendingUp,
      title: isEng ? "Feasibility & Cost-Benefit Analysis" : "사업 타당성 및 효과성 분석",
      desc: isEng
        ? "Analyzes necessity, policy feasibility, economic efficiency, and expected impacts for new public initiatives."
        : "신규 정책과 사업의 필요성, 타당성, 경제성 및 기대효과를 분석합니다.",
      activities: isEng
        ? [
            "Initiative Necessity Review",
            "Policy Feasibility Analysis",
            "Cost-Benefit Analysis (B/C)",
            "Expected Impact Assessment",
            "Alternative Comparison",
            "Implementation Roadmap",
          ]
        : [
            "사업 필요성 검토",
            "정책 타당성 분석",
            "비용·편익 분석",
            "기대효과 분석",
            "대안 비교",
            "추진 로드맵 수립",
          ],
      deliverables: isEng
        ? "Feasibility Report / Cost-Benefit Matrix / Rationale Logic / Policy Option Matrix / Implementation Plan"
        : "타당성조사 보고서 / 비용·편익 분석 / 사업추진 논리 / 정책대안 비교표 / 추진 로드맵",
    },
    {
      num: "06",
      icon: Briefcase,
      title: isEng ? "Administrative & Organizational Consulting" : "행정·조직·경영 컨설팅",
      desc: isEng
        ? "Provides diagnosis and optimization strategies to enhance operational efficiency and performance of public organizations."
        : "공공기관 및 조직의 운영효율성과 성과를 높이기 위한 진단과 개선방안을 제공합니다.",
      activities: isEng
        ? [
            "Organizational Diagnosis",
            "Functional Redesign",
            "Business Process Analysis",
            "Job & Capacity Analysis",
            "Operational Model Improvement",
            "Performance System Setup",
          ]
        : [
            "조직진단",
            "기능 재설계",
            "업무프로세스 분석",
            "직무분석",
            "운영체계 개선",
            "성과관리체계 구축",
          ],
      deliverables: isEng
        ? "Organizational Audit Report / Reorganization Plan / Process Improvement / Operating Model / KPI Framework"
        : "조직진단 보고서 / 조직개편안 / 업무프로세스 개선안 / 운영모델 / 성과관리체계",
    },
    {
      num: "07",
      icon: PieChart,
      title: isEng ? "Statistics & Data Analytics" : "통계 및 데이터 분석",
      desc: isEng
        ? "Analyzes policy and administrative data to provide objective evidence and actionable insights required for decision-making."
        : "정책데이터와 행정데이터를 분석하여 의사결정에 필요한 객관적 근거와 인사이트를 제공합니다.",
      activities: isEng
        ? [
            "Descriptive Statistics",
            "Cross-Tabulation Analysis",
            "Time-Series Forecasting",
            "Multivariate Regression",
            "Spatial & GIS Analytics",
            "Interactive Visualization",
          ]
        : [
            "기초통계",
            "교차분석",
            "시계열 분석",
            "회귀분석",
            "공간분석",
            "데이터 시각화",
          ],
      deliverables: isEng
        ? "Statistical Analytics Report / Data Dashboard / Policy Index / Visualization Pack / Clean Analytics Dataset"
        : "통계분석 보고서 / 데이터 대시보드 / 정책지표 / 시각화 자료 / 분석 데이터셋",
    },
    {
      num: "08",
      icon: Cpu,
      title: isEng ? "AI-Based Policy Analysis & Modeling" : "AI 기반 정책분석 및 모델링",
      desc: isEng
        ? "Leverages AI and Big Data technologies to analyze policy patterns, run predictive simulations, and support data-informed choices."
        : "AI와 빅데이터 기술을 활용하여 정책패턴을 분석하고 예측 및 정책 시뮬레이션을 지원합니다.",
      activities: isEng
        ? [
            "AI-Driven Data Analytics",
            "Text Mining & NLP Analysis",
            "Policy Demand Prediction",
            "Policy Simulation Modeling",
            "Algorithmic Policy Design",
            "Data-Informed Decision Support",
          ]
        : [
            "AI 기반 데이터 분석",
            "텍스트 분석",
            "정책수요 예측",
            "정책 시뮬레이션",
            "정책모델링",
            "데이터 기반 의사결정 지원",
          ],
      deliverables: isEng
        ? "AI Insights Report / Predictive Models / Simulation Output / Policy Intelligence / Analytics Model"
        : "AI 분석 리포트 / 정책 예측모델 / 시뮬레이션 결과 / 정책 인사이트 / 데이터 분석모델",
    },
    {
      num: "09",
      icon: Eye,
      title: isEng ? "Policy Monitoring & Follow-Up Management" : "정책모니터링 및 사후관리",
      desc: isEng
        ? "Continuously monitors the implementation process of policies and projects, analyzing results to derive corrective action plans."
        : "정책과 사업의 추진과정을 지속적으로 점검하고 결과를 분석하여 개선방향을 제시합니다.",
      activities: isEng
        ? [
            "Implementation Tracking",
            "Project Monitoring",
            "Performance Outcome Tracking",
            "On-Site Feedback Collection",
            "Interim Progress Evaluation",
            "Corrective Action Plan Setup",
          ]
        : [
            "이행점검",
            "사업 모니터링",
            "성과추적",
            "현장 의견수렴",
            "중간평가",
            "개선안 도출",
          ],
      deliverables: isEng
        ? "Monitoring Report / Implementation Checklists / Outcome Tracking Sheet / Corrective Advice Note"
        : "모니터링 보고서 / 이행점검표 / 성과추적 자료 / 개선 권고안",
    },
    {
      num: "10",
      icon: FileCheck,
      title: isEng ? "Report & Policy Proposal Formulation" : "보고서·정책제안서 작성",
      desc: isEng
        ? "Structures research findings into easily understandable and actionable formats for policy makers and executives."
        : "연구결과를 정책결정자가 이해하고 활용하기 쉬운 형태로 구조화하여 제공합니다.",
      activities: isEng
        ? [
            "Executive Research Reports",
            "Policy Briefs & Summaries",
            "Policy Proposal Dossiers",
            "Presentation Deck Creation",
            "Policy Roadmap Layout",
            "Infographic Visualization",
          ]
        : [
            "연구보고서 작성",
            "정책브리프 작성",
            "정책제안서 작성",
            "발표자료 제작",
            "정책 로드맵 정리",
            "시각화 자료 제작",
          ],
      deliverables: isEng
        ? "Final Research Report / Policy Briefs / Proposal Dossier / Presentation Decks / Infographic Artifacts"
        : "최종 연구보고서 / 정책브리프 / 정책제안서 / 발표자료 / 인포그래픽",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: isEng ? "Inquiry & Consultation" : "의뢰·상담",
      desc: isEng
        ? "Reviewing client's issues, research goals, timeline, and deliverables."
        : "기관의 현안, 연구목적, 일정과 요구사항 확인",
    },
    {
      step: "02",
      title: isEng ? "Task Definition" : "과제정의",
      desc: isEng
        ? "Defining core policy challenges and bounding the research scope."
        : "핵심 정책문제와 연구범위 정의",
    },
    {
      step: "03",
      title: isEng ? "Research Design" : "연구설계",
      desc: isEng
        ? "Formulating research methodology, survey design, and data plan."
        : "연구방법론, 조사방식, 데이터 수집·분석계획 수립",
    },
    {
      step: "04",
      title: isEng ? "Surveys & Analytics" : "조사·분석",
      desc: isEng
        ? "Executing literature review, data analytics, surveys, and field research."
        : "문헌, 데이터, 설문, 인터뷰, 현장자료 분석",
    },
    {
      step: "05",
      title: isEng ? "Results & Strategy" : "결과도출",
      desc: isEng
        ? "Deriving evidence-backed policy solutions and execution frameworks."
        : "정책대안, 전략과제, 실행방안 도출",
    },
    {
      step: "06",
      title: isEng ? "Reporting & Support" : "보고·사후지원",
      desc: isEng
        ? "Delivering final reports, presentations, and post-project advisory."
        : "최종보고서, 발표, 후속자문 및 정책반영 지원",
    },
  ];

  const diffPillars = [
    {
      title: isEng ? "Evidence-Based" : "근거 기반",
      desc: isEng
        ? "Derives objective research outcomes backed by solid data, rigorous surveys, and policy archives."
        : "데이터, 조사, 정책자료를 바탕으로 객관적인 연구결과를 도출합니다.",
    },
    {
      title: isEng ? "Field-Centered" : "현장 중심",
      desc: isEng
        ? "Integrates voices of policy targets, citizens, and field stakeholders into actionable insights."
        : "정책대상과 이해관계자의 목소리를 연구에 반영합니다.",
    },
    {
      title: isEng ? "Convergence Analytics" : "융합 분석",
      desc: isEng
        ? "Combines quantitative, qualitative, and AI data analytics to resolve complex multi-layered problems."
        : "정량·정성·데이터 분석을 결합하여 복합적인 문제를 분석합니다.",
    },
    {
      title: isEng ? "Execution Feasibility" : "실행 가능성",
      desc: isEng
        ? "Delivers realistic, immediately deployable solutions for executive decision-making and implementation."
        : "정책결정과 사업추진에 바로 활용할 수 있는 실행방안을 제시합니다.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            RESEARCH SERVICES & CAPABILITIES · HOW WE WORK
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            {isEng ? "Research Services & Capabilities" : "연구용역·서비스"}
          </h1>
          <p className="text-lg font-bold text-teal-300 max-w-3xl mx-auto pt-1">
            {isEng
              ? "Supporting full research lifecycles from policy planning to data analytics, evaluation, and execution."
              : "정책기획부터 조사·분석, 평가와 실행전략까지 연구 전 과정을 지원합니다."}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal pt-2">
            {isEng
              ? "We accurately define policy issues and field challenges for public and private clients, combining quantitative and qualitative data to deliver practical policy solutions and high-impact deliverables."
              : "발주기관의 정책과제와 현장문제를 정확히 정의하고 정량·정성 데이터를 결합하여 실행 가능한 정책대안과 연구성과물을 제공합니다."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* 10 Core Services (2 Columns Desktop Grid) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 pb-4 gap-2">
            <div>
              <span className="text-xs font-bold text-teal-600 font-sans tracking-widest uppercase">
                10 CORE RESEARCH SERVICES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D52]">
                {isEng ? "10 Core Contract Research Services" : "연구원 10대 연구용역 서비스"}
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-400 font-sans">WHAT WE DELIVER</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {servicesList.map((item) => {
              return (
                <div
                  key={item.num}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-5">
                    {/* Header Number & Service Name */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#0B2D52] text-teal-300 font-extrabold text-base flex items-center justify-center font-sans shrink-0 shadow-md">
                        {item.num}
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest font-sans">
                          SERVICE {item.num}
                        </span>
                        <h3 className="text-xl font-extrabold text-[#0B2D52] group-hover:text-teal-600 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-b border-slate-100 pb-4">
                      {item.desc}
                    </p>

                    {/* Key Activities Grid */}
                    <div className="space-y-2">
                      <span className="text-xs font-extrabold text-[#0B2D52] flex items-center gap-1.5">
                        <Target className="w-4 h-4 text-teal-600" />
                        <span>{isEng ? "Key Execution Activities" : "주요 수행내용"}</span>
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-700 font-medium">
                        {item.activities.map((act, idx) => (
                          <li
                            key={idx}
                            className="bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100 flex items-center gap-1.5 text-[11px]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                            <span className="truncate">{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Deliverables */}
                    <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/60 space-y-1">
                      <span className="text-xs font-extrabold text-teal-700 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-teal-600" />
                        <span>{isEng ? "Representative Deliverables" : "대표 산출물"}</span>
                      </span>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed">
                        {item.deliverables}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6-Step Research Process Section (Enhanced with Mobile Process Direction) */}
        <section className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/90 shadow-lg space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-teal-600 font-sans tracking-widest uppercase">
              RESEARCH WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2D52]">
              {isEng ? "6-Step Research Process" : "연구수행 프로세스"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              {isEng
                ? "From initial consultation to task definition, empirical analysis, and post-project advisory."
                : "의뢰 및 상담부터 과제 정의, 데이터 분석, 정책 대안 도출 및 사후 지원까지 체계적으로 수행합니다."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {processSteps.map((p, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-2">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-[#0B2D52] hover:bg-white transition-all space-y-3 flex flex-col justify-between w-full h-full">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#0B2D52] text-teal-300 font-extrabold text-sm flex items-center justify-center font-sans shadow-sm">
                      {p.step}
                    </div>
                    <h3 className="text-base font-bold text-[#0B2D52]">{p.title}</h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-normal">{p.desc}</p>
                  </div>
                </div>

                {/* Mobile Step Down Arrow Indicator */}
                {idx < processSteps.length - 1 && (
                  <div className="block lg:hidden text-teal-600 py-1">
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Service Differentiation Section */}
        <section className="bg-gradient-to-br from-[#0B2D52] to-[#061B33] rounded-3xl p-6 sm:p-12 text-white shadow-xl space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase">
              WHY BFPI SERVICES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {isEng
                ? "We don't stop at research — we connect to real execution."
                : "연구에서 끝나지 않고 실행까지 연결합니다."}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              {isEng
                ? "BFPI differentiates itself with evidence-backed analysis, field-centered feedback, cross-disciplinary synthesis, and pragmatic actionability."
                : "객관적 근거, 현장 목소리, 융합 분석, 그리고 바로 활용 가능한 실행 가능성을 기준으로 최고품질의 연구성과를 보장합니다."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diffPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3 shadow-inner"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-400/20 text-teal-300 flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-extrabold text-white">{pillar.title}</h3>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">
                {isEng ? "Need a customized research contract proposal?" : "맞춤형 연구용역 의뢰 및 제안이 필요하신가요?"}
              </h3>
              <p className="text-xs text-slate-300 font-normal">
                {isEng
                  ? "We propose the most reasonable and reliable research plan suited for your goals, budget, and timeline."
                  : "과업 목적, 예산 및 일정에 맞는 가장 합리적이고 신뢰도 높은 연구 계획을 제시해 드립니다."}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 shrink-0">
              <Link
                href="/inquiry"
                className="px-6 py-3.5 bg-teal-500 hover:bg-teal-400 text-[#0B2D52] font-extrabold text-xs rounded-xl shadow-lg transition-colors inline-flex items-center gap-2"
              >
                <span>{isEng ? "Inquire Research Project" : "연구용역 문의하기"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/research-areas"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs rounded-xl border border-white/20 transition-colors inline-flex items-center gap-2"
              >
                <span>{isEng ? "Explore Research Domains" : "연구분야 보기"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
