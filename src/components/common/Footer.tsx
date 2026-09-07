"use client";

import React from "react";
import Link from "next/link";
import BFPILogo from "./BFPILogo";
import { Youtube, Linkedin, ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          {/* Logo */}
          <BFPILogo size="sm" showEnglish={lang === "ENG"} showCorpName={true} />

          {/* Sub-menu Quick Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-700 font-bold">
            <Link href="/about" className="hover:text-[#0B2D52] transition-colors">
              {lang === "KR" ? "연구원 소개" : "About Us"}
            </Link>
            <Link href="/about/ci" className="hover:text-[#0B2D52] transition-colors">
              {lang === "KR" ? "CI 소개" : "Corporate Identity"}
            </Link>
            <Link href="/about/location" className="hover:text-[#0B2D52] transition-colors">
              {lang === "KR" ? "오시는 길" : "Location"}
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/privacy" className="hover:text-[#0B2D52] transition-colors">
              {lang === "KR" ? "개인정보처리방침" : "Privacy Policy"}
            </Link>
            <Link href="/terms" className="hover:text-[#0B2D52] transition-colors">
              {lang === "KR" ? "이용약관" : "Terms of Use"}
            </Link>
          </div>
        </div>

        {/* Address Info & Right Social / Copyright */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-slate-500 font-normal">
          <div className="space-y-1">
            <p className="font-bold text-[#0B2D52]">
              {lang === "KR"
                ? "주식회사 더좋은미래정책연구원 · Better Future Policy Institute · Since 2026"
                : "Better Future Policy Institute Co., Ltd. · Since 2026"}
            </p>
            <p className="leading-relaxed">
              {lang === "KR"
                ? "주소: 경기도 수원시 팔달구 효원동 | 대표전화: 추후 입력 | 이메일: 추후 입력"
                : "Address: Hyowon-dong, Paldal-gu, Suwon-si, Gyeonggi-do, Korea | Tel: To be updated | Email: To be updated"}
            </p>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <div className="flex items-center space-x-3 text-slate-400">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-600 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <span className="text-slate-300">|</span>

            <span>
              {lang === "KR"
                ? "© 2026 더좋은미래정책연구원. All rights reserved."
                : "© 2026 Better Future Policy Institute. All rights reserved."}
            </span>

            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#0B2D52] hover:text-white text-slate-600 flex items-center justify-center transition-colors ml-2"
              title={lang === "KR" ? "맨 위로" : "Back to top"}
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
