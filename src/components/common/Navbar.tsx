"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BFPILogo from "./BFPILogo";
import { Search, Menu, X, Globe, ArrowRight, ChevronDown } from "lucide-react";

const navItems = [
  { label: "연구원 소개", href: "/about" },
  { label: "연구분야", href: "/research-areas" },
  { label: "연구용역", href: "/research-services" },
  { label: "연구성과", href: "/projects" },
  { label: "데이터·인사이트", href: "/insights" },
  { label: "소식·자료", href: "/news" },
  { label: "연구진", href: "/researchers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [lang, setLang] = useState<"KOR" | "ENG">("KOR");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/projects?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
            : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <BFPILogo size="md" showEnglish={true} showCorpName={true} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-[15px] font-medium transition-colors rounded-md relative ${
                    isActive
                      ? "text-[#0B2D52] font-bold"
                      : "text-slate-700 hover:text-[#0B2D52] hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#14B8A6] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-slate-600 hover:text-[#0B2D52] hover:bg-slate-100 rounded-full transition-colors"
              title="검색"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Language Selector */}
            <div className="relative group">
              <button
                onClick={() => setLang(lang === "KOR" ? "ENG" : "KOR")}
                className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-md text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-teal-600" />
                <span>{lang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
            </div>

            {/* CTA Button */}
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-bold text-white bg-[#0B2D52] hover:bg-[#061B33] rounded-lg shadow-sm hover:shadow transition-all group"
            >
              <span>연구의뢰하기</span>
              <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-md"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0B2D52] hover:bg-slate-100 rounded-md"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden pt-20 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white w-full max-h-[85vh] overflow-y-auto border-b border-slate-200 px-6 py-6 shadow-xl">
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-lg font-semibold text-slate-800 hover:text-[#0B2D52] border-b border-slate-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col gap-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 font-medium">언어 설정</span>
                <button
                  onClick={() => setLang(lang === "KOR" ? "ENG" : "KOR")}
                  className="flex items-center gap-1.5 font-bold px-3 py-1.5 bg-slate-100 rounded-md text-slate-800"
                >
                  <Globe className="w-4 h-4 text-teal-600" />
                  {lang}
                </button>
              </div>

              <Link
                href="/inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 text-center text-base font-bold text-white bg-[#0B2D52] rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <span>연구의뢰하기</span>
                <ArrowRight className="w-4 h-4 text-teal-300" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Global Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-200">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h3 className="text-sm font-bold text-slate-700">통합 정책연구 및 성과 검색</h3>
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSearchSubmit} className="p-6">
              <div className="relative flex items-center">
                <Search className="w-6 h-6 text-teal-600 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="연구과제명, 발주기관, 정책 키워드를 입력하세요..."
                  className="w-full pl-13 pr-24 py-3.5 text-base border-2 border-slate-200 focus:border-[#0B2D52] rounded-xl outline-none transition-colors"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 px-5 py-2 text-sm font-bold text-white bg-[#0B2D52] hover:bg-[#061B33] rounded-lg transition-colors"
                >
                  검색
                </button>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">추천 검색어:</span>
                {["지방소멸", "청년정책", "탄소중립", "ESG", "사회통합"].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => {
                      setSearchQuery(tag);
                      window.location.href = `/projects?search=${encodeURIComponent(tag)}`;
                    }}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
