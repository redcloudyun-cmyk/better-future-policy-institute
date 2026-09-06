import React from "react";
import Link from "next/link";
import { MessageSquareText, FileCheck, Users, ArrowRight } from "lucide-react";

export default function InquiryCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B2D52] via-[#08203d] to-[#061B33] text-white relative overflow-hidden">
      {/* Decorative Blur Effect */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <span className="inline-block px-3.5 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full text-xs font-bold text-teal-300 font-sans tracking-widest uppercase">
              ONLINE INQUIRY & CONSULTING
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              연구가 필요한가요? <br />
              <span className="text-teal-300">더 나은 사회를 위한 첫걸음, 지금 상담하세요.</span>
            </h2>
            <p className="text-base text-slate-300 max-w-2xl">
              정책연구부터 사회조사·데이터분석, 정책평가와 행정 컨설팅까지 연구 목적과 필요에 맞는 최적의 방법론을 함께 설계해 드립니다.
            </p>
          </div>

          {/* Right Action Features & CTA */}
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-teal-400/20 flex items-center justify-center text-teal-300 shrink-0">
                  <MessageSquareText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">연구 주제 상담</h4>
                  <p className="text-[11px] text-slate-400">과업 목적에 맞는 맞춤형 컨설팅 제공</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-teal-400/20 flex items-center justify-center text-teal-300 shrink-0">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">제안요청서 (RFP) 및 과업지시서 첨부</h4>
                  <p className="text-[11px] text-slate-400">보안 검토 후 24시간 이내 신속한 회신</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-teal-400/20 flex items-center justify-center text-teal-300 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">전문 연구진 매칭</h4>
                  <p className="text-[11px] text-slate-400">분야별 최고 석·박사 연구팀 구성</p>
                </div>
              </div>
            </div>

            <Link
              href="/inquiry"
              className="w-full py-4 px-6 text-center text-base font-bold text-[#061B33] bg-teal-300 hover:bg-teal-200 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              <span>연구용역 온라인 의뢰하기</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
