import React from "react";
import Link from "next/link";
import BFPILogo from "@/components/common/BFPILogo";
import { ArrowLeft, Calendar, MapPin, FileText, BarChart2, Info, Download, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "정기주주총회 소집공고 및 재무제표 공고 | 주식회사 미래정책연구원",
  description: "2026년 정기주주총회 개최 소집공고 및 제1기 재무제표 승인의 건 공식 발표",
};

export default function NoticeDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-28 pb-20 bg-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Back button */}
        <div className="flex items-center justify-between">
          <Link
            href="/notices"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0B2D52] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>공공공시 게시판 목록으로</span>
          </Link>

          <span className="text-xs font-semibold text-slate-400 font-sans">
            공시번호: 2026-BFPI-0906
          </span>
        </div>

        {/* Exact Document Poster Card Matching User's Image */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-slate-200 relative overflow-hidden space-y-10">
          {/* Top Background Vector Graphic */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-100/40 via-sky-50/20 to-transparent pointer-events-none rounded-bl-full" />

          {/* Header */}
          <div className="space-y-6 relative z-10 border-b border-slate-100 pb-8">
            <div className="flex items-center justify-between">
              <BFPILogo size="md" showEnglish={true} showCorpName={true} />
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold font-serif text-[#0B2D52]/90 italic">
                  “더 나은 정책이 더 나은 내일을 만듭니다.”
                </div>
                <div className="text-[9px] font-sans font-bold tracking-widest text-slate-400 uppercase mt-1">
                  PEOPLE / SOCIETY / BETTER POLICIES / A BRIGHTER TOMORROW
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <div className="text-xs font-bold font-sans text-teal-600 uppercase tracking-widest">
                A BETTER TOMORROW, THROUGH BETTER POLICIES
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#0B2D52] tracking-tight leading-tight">
                정기주주총회 소집공고 및 <br />
                <span className="text-[#0B2D52]">재무제표 공고</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-normal pt-1">
                주식회사 미래정책연구원은 주주 여러분의 깊은 관심과 성원에 감사드리며, 아래와 같이 정기주주총회를 개최하고, 제1기 재무제표를 공고합니다.
              </p>
            </div>
          </div>

          {/* Section 1: 정기주주총회 소집공고 */}
          <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 relative">
            <div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0B2D52] text-white font-extrabold text-sm flex items-center justify-center font-sans shadow-xs">
                  1
                </span>
                <h2 className="text-xl font-black text-[#0B2D52]">정기주주총회 소집공고</h2>
              </div>
              <span className="text-[10px] font-bold font-sans tracking-widest text-slate-400 uppercase">
                SHAREHOLDERS' MEETING
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-sky-100/80 text-[#0B2D52] flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-500 min-w-16">일시</span>
                    <span className="font-black text-[#0B2D52] text-sm sm:text-base">
                      2026년 9월 30일(수) 오전 10:00
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-sky-100/80 text-[#0B2D52] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-500 min-w-16">장소</span>
                    <span className="font-black text-[#0B2D52] text-sm sm:text-base">
                      본점 회의실
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-sky-100/80 text-[#0B2D52] flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-slate-500 min-w-16 mt-0.5">목적사항</span>
                    <div className="space-y-1.5 font-bold text-slate-800 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-sky-200 text-[#0B2D52] text-[10px] font-black flex items-center justify-center">1</span>
                        <span>제1호 의안: 제1기 재무제표 승인의 건</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-sky-200 text-[#0B2D52] text-[10px] font-black flex items-center justify-center">2</span>
                        <span>제2호 의안: 이사 보수한도 승인의 건</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-sky-200 text-[#0B2D52] text-[10px] font-black flex items-center justify-center">3</span>
                        <span>제3호 의안: 감사 선임의 건</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Icon Emblem Graphic on Right */}
              <div className="md:col-span-4 hidden md:flex flex-col items-center justify-center border-l border-slate-200/80 pl-6 text-center space-y-2">
                <div className="w-20 h-20 rounded-full bg-sky-100/60 flex items-center justify-center text-teal-600">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase space-y-0.5">
                  <div>GOOD POLICIES</div>
                  <div>STRONGER SOCIETY</div>
                  <div>BRIGHTER TOMORROW</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: 재무제표 공고 */}
          <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0B2D52] text-white font-extrabold text-sm flex items-center justify-center font-sans shadow-xs">
                  2
                </span>
                <h2 className="text-xl font-black text-[#0B2D52]">재무제표 공고</h2>
              </div>
              <span className="text-[10px] font-bold font-sans tracking-widest text-slate-400 uppercase">
                FINANCIAL STATEMENTS
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-700">
              <div className="w-10 h-10 rounded-xl bg-sky-100/80 text-teal-600 flex items-center justify-center shrink-0">
                <BarChart2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-slate-800">
                  당사의 제1기 재무제표를 상법 및 관계 법령에 따라 공고합니다.
                </p>
                <p className="text-slate-500 text-xs">
                  재무상태표, 손익계산서 및 부속명세서는 본 공고와 함께 열람할 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: 비고 */}
          <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0B2D52] text-white font-extrabold text-sm flex items-center justify-center font-sans shadow-xs">
                  3
                </span>
                <h2 className="text-xl font-black text-[#0B2D52]">비고</h2>
              </div>
              <span className="text-[10px] font-bold font-sans tracking-widest text-slate-400 uppercase">
                NOTICE
              </span>
            </div>

            <div className="flex items-start gap-4 text-xs sm:text-sm text-slate-700">
              <div className="w-10 h-10 rounded-xl bg-sky-100/80 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                <Info className="w-5 h-5" />
              </div>
              <ul className="space-y-1.5 font-medium text-slate-700 pt-1">
                <li>• 주주께서는 신분증을 지참하여 주시기 바랍니다.</li>
                <li>• 문의: 경영지원팀 / 대표전화: 추후 입력 / 이메일: 추후 입력</li>
              </ul>
            </div>
          </div>

          {/* Footer Signature Box */}
          <div className="pt-8 border-t border-slate-200 text-center space-y-3">
            <div className="text-sm font-bold text-slate-500 font-sans">2026년 9월 6일</div>
            <div className="text-2xl font-black text-[#0B2D52]">
              주식회사 미래정책연구원
            </div>
            <div className="text-lg font-extrabold text-slate-800">
              대표이사 임혜자
            </div>

            <div className="flex items-center justify-between pt-6 text-[10px] font-bold text-slate-400 uppercase font-sans">
              <span>연구로 여는 더 나은 사회, 더 깊은 미래</span>
              <span>RESEARCH FOR A BETTER TOMORROW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
