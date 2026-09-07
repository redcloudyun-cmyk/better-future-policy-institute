"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Building, Clock, Phone, Mail, Navigation, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function LocationPage() {
  const { lang } = useLanguage();
  const isEng = lang === "ENG";

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            LOCATION & CONTACT
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            {isEng ? "Location & Directions" : "오시는 길"}
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            {isEng
              ? "Guiding your path to Future Policy Institute."
              : "미래정책연구원으로 오시는 길을 안내합니다."}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        <Link
          href="/about"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0B2D52] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isEng ? "Back to About Us" : "연구원 소개 목록으로 돌아가기"}</span>
        </Link>

        {/* Institution Info Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl space-y-8">
          <div className="space-y-3 border-b border-slate-100 pb-6">
            <span className="text-xs font-bold font-sans text-teal-600 tracking-widest uppercase">
              BFPI HEADQUARTERS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2D52]">
              {isEng
                ? "Location & Contact Information"
                : "미래정책연구원으로 오시는 길을 안내합니다."}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
              {isEng
                ? "Future Policy Institute is located in Hyowon-dong, Paldal-gu, Suwon-si, Gyeonggi-do. If you require research consultation or visiting meetings, please coordinate schedule in advance."
                : "미래정책연구원은 경기도 수원시 팔달구 효원동에 위치하고 있습니다. 연구 협의, 연구용역 상담 및 방문 미팅이 필요한 경우 사전에 일정을 협의해 주시기 바랍니다."}
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-teal-600 font-bold">
                <Building className="w-4 h-4" />
                <span>{isEng ? "Organization" : "기관명"}</span>
              </div>
              <p className="font-extrabold text-[#0B2D52]">
                {isEng ? "Future Policy Institute Co., Ltd." : "주식회사 미래정책연구원"}
              </p>
              <p className="text-[11px] text-slate-400 font-sans">Future Policy Institute</p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-teal-600 font-bold">
                <MapPin className="w-4 h-4" />
                <span>{isEng ? "Address" : "주소"}</span>
              </div>
              <p className="font-extrabold text-[#0B2D52]">
                {isEng ? "Hyowon-dong, Paldal-gu, Suwon-si, Gyeonggi-do" : "경기도 수원시 팔달구 효원동"}
              </p>
              <p className="text-[11px] text-slate-400 font-sans">Suwon-si, Gyeonggi-do, Korea</p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-teal-600 font-bold">
                <Calendar className="w-4 h-4" />
                <span>{isEng ? "Est. & Hours" : "설립 및 운영시간"}</span>
              </div>
              <p className="font-bold text-[#0B2D52]">Since 2026</p>
              <p className="text-[11px] text-slate-500 font-medium">
                {isEng ? "Weekdays 09:00 - 18:00" : "평일 09:00 ~ 18:00"}
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 sm:col-span-2 md:col-span-3">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span className="font-bold">{isEng ? "Tel:" : "대표전화:"}</span>
                  <span className="text-slate-500 font-medium">{isEng ? "To be updated" : "추후 입력"}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-4 h-4 text-teal-600" />
                  <span className="font-bold">{isEng ? "Email:" : "공식 이메일:"}</span>
                  <span className="text-slate-500 font-medium">{isEng ? "To be updated" : "추후 입력"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map UI Placeholder Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Navigation className="w-5 h-5 text-teal-600" />
              <h3 className="text-lg font-extrabold text-[#0B2D52]">
                {isEng ? "Map Location" : "위치 지도 (MAP LOCATION)"}
              </h3>
            </div>
            <span className="text-xs font-bold text-slate-400 font-sans">DEMO MAP PLACEHOLDER</span>
          </div>

          {/* Interactive Styled Map Canvas Placeholder */}
          <div className="relative h-96 w-full bg-gradient-to-br from-slate-100 via-sky-50 to-slate-200 flex flex-col items-center justify-center p-6 text-center space-y-4 overflow-hidden">
            {/* Background Grid & Road Simulation */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40 pointer-events-none" />

            {/* Pulsing Location Pin Emblem */}
            <div className="relative z-10 space-y-3">
              <div className="relative inline-block">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 animate-ping absolute inset-0" />
                <div className="w-16 h-16 rounded-full bg-[#0B2D52] shadow-xl flex items-center justify-center text-teal-300 relative z-10 mx-auto">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>

              <div className="space-y-1 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-slate-200 max-w-sm mx-auto">
                <h4 className="text-lg font-black text-[#0B2D52]">
                  {isEng ? "Future Policy Institute" : "미래정책연구원"}
                </h4>
                <p className="text-xs font-extrabold text-teal-700">
                  {isEng ? "Hyowon-dong, Paldal-gu, Suwon-si, Gyeonggi-do, Korea" : "경기도 수원시 팔달구 효원동"}
                </p>
                <p className="text-[11px] text-slate-500 font-sans">Future Policy Institute · Since 2026</p>
              </div>
            </div>
          </div>

          {/* Map Footer Notation */}
          <div className="p-4 bg-slate-50 text-center text-xs text-slate-500 border-t border-slate-100 font-medium">
            {isEng
              ? "Hyowon-dong, Paldal-gu, Suwon-si, Gyeonggi-do, Korea · Future Policy Institute · Since 2026"
              : "경기도 수원시 팔달구 효원동 · Future Policy Institute · Since 2026"}
          </div>
        </div>
      </div>
    </div>
  );
}
