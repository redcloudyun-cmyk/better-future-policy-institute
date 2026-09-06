import React from "react";
import Link from "next/link";
import BFPILogo from "./BFPILogo";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#061B33] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Branding & Company info */}
          <div className="lg:col-span-2 space-y-5">
            <BFPILogo variant="light" size="lg" showEnglish={true} showCorpName={true} />
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              주식회사 더좋은미래정책연구원은 사람과 사회, 데이터에 기반한 고품질 정책연구와 공공·민간 연구용역 수행으로 지속가능하고 실질적인 변화를 만들어갑니다.
            </p>
            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>경기도 수원시 팔달구 효원로 (본점)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>대표전화: 031-234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>공식 이메일: contact@bfpi.re.kr</span>
              </div>
            </div>
          </div>

          {/* Col 3: Research Areas */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-teal-500 pl-2.5">
              주요 연구분야
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/research-areas?category=governance" className="hover:text-teal-300 transition-colors">행정·거버넌스</Link></li>
              <li><Link href="/research-areas?category=regional-dev" className="hover:text-teal-300 transition-colors">지역발전 & 지방소멸대응</Link></li>
              <li><Link href="/research-areas?category=welfare-social" className="hover:text-teal-300 transition-colors">복지·사회 & 사회통합</Link></li>
              <li><Link href="/research-areas?category=economy-industry" className="hover:text-teal-300 transition-colors">경제·산업 & 일자리</Link></li>
              <li><Link href="/research-areas?category=environment-energy" className="hover:text-teal-300 transition-colors">환경·에너지 & 탄소중립</Link></li>
              <li><Link href="/research-areas?category=digital-ai" className="hover:text-teal-300 transition-colors">디지털·AI 융합정책</Link></li>
            </ul>
          </div>

          {/* Col 4: Research Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-teal-500 pl-2.5">
              연구용역 서비스
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/research-services#policy" className="hover:text-teal-300 transition-colors">정책연구 및 기획</Link></li>
              <li><Link href="/research-services#survey" className="hover:text-teal-300 transition-colors">사회조사 및 여론조사</Link></li>
              <li><Link href="/research-services#evaluation" className="hover:text-teal-300 transition-colors">정책평가 및 타당성조사</Link></li>
              <li><Link href="/research-services#consulting" className="hover:text-teal-300 transition-colors">행정·경영 컨설팅</Link></li>
              <li><Link href="/research-services#data" className="hover:text-teal-300 transition-colors">통계 및 데이터 분석</Link></li>
              <li><Link href="/research-services#ai" className="hover:text-teal-300 transition-colors">AI 기반 정책분석</Link></li>
            </ul>
          </div>

          {/* Col 5: Inquiry & Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-teal-500 pl-2.5">
              연구용역 상담
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              정부, 지자체, 공공기관 및 민간기업의 맞춤형 정책연구 및 위탁용역을 제안 받습니다.
            </p>
            <Link
              href="/inquiry"
              className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 text-xs font-bold text-[#061B33] bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors shadow-sm"
            >
              <span>온라인 의뢰 신청</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>상호: 주식회사 더좋은미래정책연구원</span>
            <span>대표이사: 임혜자</span>
            <span>사업자등록번호: 준비중</span>
          </div>

          <div className="flex items-center space-x-4 text-slate-400">
            <Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <span className="text-slate-700">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">이용약관</Link>
            <span className="text-slate-700">|</span>
            <Link href="/admin/login" className="hover:text-teal-400 transition-colors">관리자 CMS</Link>
          </div>
        </div>

        <div className="mt-4 text-center md:text-left text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-800/60 pt-4">
          <p>© {new Date().getFullYear()} Better Future Policy Institute Co., Ltd. All rights reserved.</p>
          <span className="hidden md:inline font-sans text-slate-600 tracking-wider">A BETTER TOMORROW, THROUGH BETTER POLICIES</span>
        </div>
      </div>
    </footer>
  );
}
