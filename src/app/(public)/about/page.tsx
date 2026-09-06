import React from "react";
import BFPILogo from "@/components/common/BFPILogo";
import { ShieldCheck, Target, Heart, Award, MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "연구원 소개 | 주식회사 더좋은미래정책연구원",
  description: "설립목적, Mission & Vision, 대표이사 임혜자 인사말, 조직도 및 찾아오시는 길 안내",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-50">
      {/* Page Hero Header */}
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            ABOUT BFPI
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">연구원 소개</h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            사람과 사회, 데이터를 잇고 더 나은 내일을 만드는 전문 정책연구기관입니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* 대표이사 인사말 Section */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-slate-200/80 space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-40 rounded-2xl bg-gradient-to-br from-[#0B2D52] to-[#14B8A6] flex flex-col items-center justify-center text-white shrink-0 shadow-md p-4 text-center">
              <span className="font-extrabold text-2xl">임혜자</span>
              <span className="text-xs text-teal-300 font-sans mt-1">대표이사 / 원장</span>
              <span className="text-[10px] text-slate-300 mt-2 font-sans">행정학 박사</span>
            </div>

            <div className="space-y-4 flex-1">
              <span className="text-xs font-bold text-teal-600 font-sans uppercase tracking-widest">
                MESSAGE FROM THE PRESIDENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D52] leading-snug">
                “근거로 정책을 설계하고, 데이터로 미래를 제안합니다.”
              </h2>
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  안녕하십니까. 주식회사 더좋은미래정책연구원 대표이사 임혜자입니다.
                </p>
                <p>
                  급변하는 사회구조와 기술적 전환기 속에서, 공공과 민간이 직면한 현안은 더욱 복잡하고 다층화되고 있습니다. 더좋은미래정책연구원은 단순한 이론적 연구에 머물지 않고, 현장의 실재하는 데이터와 사람 중심의 가치를 바탕으로 실행 가능한 정책 대안을 설계하기 위해 설립되었습니다.
                </p>
                <p>
                  우리는 중앙정부와 지방자치단체, 공공기관 및 다양한 사회적 파트너들과 협력하며 지방소멸 대응, 사회통합, 환경·에너지 전환, AI·빅데이터 기반 정책 혁신 등 시대적 과제에 답하고 있습니다.
                </p>
                <p className="font-semibold text-[#0B2D52]">
                  더 나은 정책이 더 좋은 내일을 만듭니다. 신뢰받는 데이터와 깊이 있는 통찰로 여러분의 든든한 정책 파트너가 되겠습니다. 감사합니다.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>주식회사 더좋은미래정책연구원 임직원 일동</span>
                <span className="font-bold text-[#0B2D52]">대표이사 임혜자</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision & Core Values */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-[#0B2D52]">미션 및 핵심가치</h2>
            <p className="text-sm text-slate-600">더좋은미래정책연구원이 지키는 철학과 지향점입니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2D52]">Trust & Evidence</h3>
              <p className="text-xs font-bold text-teal-600 font-sans">근거 중심의 신뢰성</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                엄밀한 데이터 수집과 과학적 분석 기법으로 사회적 신뢰도가 높은 정책 근거를 생성합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2D52]">Actionable Insight</h3>
              <p className="text-xs font-bold text-teal-600 font-sans">실행 가능한 정책 해법</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                탁상공론을 지양하고 현장에서 즉시 적용 및 수용 가능한 맞춤형 이행 방안을 도출합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2D52]">People & Tomorrow</h3>
              <p className="text-xs font-bold text-teal-600 font-sans">사람과 사회 중심의 미래</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                시민의 삶의 질 향상과 지속 가능한 공동체의 발전을 최우선 연구 가치로 둡니다.
              </p>
            </div>
          </div>
        </div>

        {/* 찾아오시는 길 (Location) */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0B2D52]">오시는 길 안내</h2>
              <p className="text-xs text-slate-500 mt-1">더좋은미래정책연구원 본점 방문 및 문의 안내</p>
            </div>
            <span className="px-3.5 py-1 bg-teal-50 text-teal-700 font-bold text-xs rounded-full border border-teal-100">
              경기도 수원시 본점
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="p-4 bg-slate-50 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-teal-600 font-bold">
                <MapPin className="w-4 h-4" />
                <span>본점 주소</span>
              </div>
              <p className="text-slate-800 font-medium">경기도 수원시 팔달구 효원로 (본점)</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-teal-600 font-bold">
                <Phone className="w-4 h-4" />
                <span>대표 전화 및 팩스</span>
              </div>
              <p className="text-slate-800 font-medium">TEL: 031-234-5678 | FAX: 031-234-5679</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-teal-600 font-bold">
                <Mail className="w-4 h-4" />
                <span>이메일 문의</span>
              </div>
              <p className="text-slate-800 font-medium">contact@bfpi.re.kr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
