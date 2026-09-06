"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BFPILogo from "./BFPILogo";
import { Search, Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const navItems = [
  { label: "연구분야", href: "/research-areas" },
  { label: "연구용역", href: "/research-services" },
  { label: "성과사례", href: "/projects" },
  { label: "소식·공고", href: "/notices" },
  { label: "연구진", href: "/researchers" },
  { label: "문의하기", href: "/inquiry" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [lang, setLang] = useState<"KR" | "ENG">("KR");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-slate-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <BFPILogo size="md" showEnglish={false} showCorpName={true} />

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[15px] font-bold transition-colors relative py-1 ${
                    isActive
                      ? "text-[#0B2D52]"
                      : "text-slate-700 hover:text-[#0B2D52]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0B2D52] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Dropdown */}
            <button
              onClick={() => setLang(lang === "KR" ? "ENG" : "KR")}
              className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
            >
              <span>{lang}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-1.5 text-slate-600 hover:text-[#0B2D52] transition-colors"
              title="검색"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Main Pill CTA Button */}
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-[#0B2D52] hover:bg-[#061B33] rounded-full shadow-sm hover:shadow transition-all group"
            >
              <span>연구 의뢰하기</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-300 group-hover:translate-x-0.5 transition-transform" />
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
          <div className="bg-white w-full border-b border-slate-200 px-6 py-6 shadow-xl">
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-bold text-slate-800 hover:text-[#0B2D52] border-b border-slate-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col gap-3">
              <Link
                href="/inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-bold text-white bg-[#0B2D52] rounded-full shadow-md flex items-center justify-center gap-2"
              >
                <span>연구 의뢰하기</span>
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
                className="p-1 text-slate-400 hover:text-slate-600 rounded-full transition-colors"
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
                  placeholder="연구과제명, 발주기관, 주주총회, 공시 검색..."
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
            </form>
          </div>
        </div>
      )}
    </>
  );
}
