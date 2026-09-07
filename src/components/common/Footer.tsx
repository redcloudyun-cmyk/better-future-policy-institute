"use client";

import React from "react";
import Link from "next/link";
import BFPILogo from "./BFPILogo";
import { Youtube, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          {/* Logo */}
          <BFPILogo size="sm" showEnglish={false} showCorpName={true} />

          {/* Sub-menu Quick Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-700 font-bold">
            <Link href="/about/greeting" className="hover:text-[#0B2D52] transition-colors">
              원장 인사말
            </Link>
            <Link href="/about/ci" className="hover:text-[#0B2D52] transition-colors">
              CI 소개
            </Link>
            <Link href="/about/location" className="hover:text-[#0B2D52] transition-colors">
              오시는 길
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/privacy" className="hover:text-[#0B2D52] transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-[#0B2D52] transition-colors">
              이용약관
            </Link>
          </div>
        </div>

        {/* Address Info & Right Social / Copyright */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-slate-500 font-normal">
          <div className="space-y-1">
            <p className="font-bold text-[#0B2D52]">
              주식회사 더좋은미래정책연구원 &nbsp;·&nbsp; Better Future Policy Institute · Since 2026
            </p>
            <p className="leading-relaxed">
              주소: 경기도 수원시 팔달구 효원동 &nbsp;|&nbsp; 대표전화: 추후 입력 &nbsp;|&nbsp; 이메일: 추후 입력
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

            <span>© 2026 더좋은미래정책연구원. All rights reserved.</span>

            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#0B2D52] hover:text-white text-slate-600 flex items-center justify-center transition-colors ml-2"
              title="맨 위로"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
