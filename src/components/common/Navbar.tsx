"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BFPILogo from "./BFPILogo";
import { Search, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface NavItem {
  label: { KR: string; ENG: string };
  href: string;
  subItems?: { label: { KR: string; ENG: string }; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: { KR: "연구원 소개", ENG: "About Us" },
    href: "/about",
    subItems: [
      { label: { KR: "연구원 소개", ENG: "About Us" }, href: "/about" },
      { label: { KR: "CI 소개", ENG: "Corporate Identity" }, href: "/about/ci" },
      { label: { KR: "오시는 길", ENG: "Location" }, href: "/about/location" },
    ],
  },
  { label: { KR: "연구분야", ENG: "Research Areas" }, href: "/research-areas" },
  { label: { KR: "연구용역·서비스", ENG: "Research Services" }, href: "/research-services" },
  { label: { KR: "성과사례", ENG: "Projects" }, href: "/projects" },
  { label: { KR: "소식·공고", ENG: "Notices & News" }, href: "/notices" },
  {
    label: { KR: "연구진", ENG: "Researchers" },
    href: "/researchers",
    subItems: [
      { label: { KR: "주요 연구진 소개", ENG: "Research Team" }, href: "/researchers" },
    ],
  },
  { label: { KR: "문의하기", ENG: "Inquiry" }, href: "/inquiry" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
          <BFPILogo size="md" showEnglish={lang === "ENG"} showCorpName={true} />

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const displayLabel = item.label[lang];
              return (
                <div key={item.href} className="relative group py-1">
                  <Link
                    href={item.href}
                    className={`text-[14px] xl:text-[15px] font-bold transition-colors flex items-center gap-1 ${
                      isActive
                        ? "text-[#0B2D52]"
                        : "text-slate-700 hover:text-[#0B2D52]"
                    }`}
                  >
                    <span>{displayLabel}</span>
                    {item.subItems && <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />}
                  </Link>

                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0B2D52] rounded-full" />
                  )}

                  {/* Dropdown Sub-menu */}
                  {item.subItems && (
                    <div className="absolute top-full left-0 mt-1 min-w-44 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 hidden group-hover:block animate-in fade-in zoom-in-95 duration-150 z-50">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-[#0B2D52] hover:bg-slate-50 rounded-xl transition-colors whitespace-nowrap"
                        >
                          {sub.label[lang]}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-slate-200 text-xs font-extrabold text-[#0B2D52] hover:bg-slate-100 transition-colors font-sans shadow-xs"
              title="Change Language"
            >
              <span>{lang === "KR" ? "KR" : "ENG"}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-1.5 text-slate-600 hover:text-[#0B2D52] transition-colors"
              title={lang === "KR" ? "검색" : "Search"}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Main Pill CTA Button */}
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-[#0B2D52] hover:bg-[#061B33] rounded-full shadow-sm hover:shadow transition-all group"
            >
              <span>{lang === "KR" ? "연구 의뢰하기" : "Request Research"}</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-300 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleLang}
              className="px-2 py-1 text-xs font-bold border border-slate-200 rounded text-[#0B2D52]"
            >
              {lang}
            </button>
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
          <div className="bg-white w-full max-h-[85vh] overflow-y-auto border-b border-slate-200 px-6 py-6 shadow-xl space-y-4">
            <div className="space-y-3">
              {navItems.map((item) => (
                <div key={item.href} className="space-y-1">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-base font-bold text-slate-800 hover:text-[#0B2D52] border-b border-slate-100"
                  >
                    {item.label[lang]}
                  </Link>
                  {item.subItems && (
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 text-xs font-semibold text-slate-600 hover:text-[#0B2D52]"
                        >
                          • {sub.label[lang]}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col gap-3">
              <Link
                href="/inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-bold text-white bg-[#0B2D52] rounded-full shadow-md flex items-center justify-center gap-2"
              >
                <span>{lang === "KR" ? "연구 의뢰하기" : "Request Research"}</span>
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
              <h3 className="text-sm font-bold text-slate-700">
                {lang === "KR" ? "통합 정책연구 및 성과 검색" : "Integrated Policy Research & Projects Search"}
              </h3>
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
                  placeholder={lang === "KR" ? "연구과제명, 발주기관, 키워드 검색..." : "Search project title, client, keywords..."}
                  className="w-full pl-13 pr-24 py-3.5 text-base border-2 border-slate-200 focus:border-[#0B2D52] rounded-xl outline-none transition-colors"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 px-5 py-2 text-sm font-bold text-white bg-[#0B2D52] hover:bg-[#061B33] rounded-lg transition-colors"
                >
                  {lang === "KR" ? "검색" : "Search"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
