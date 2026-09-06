import React from "react";
import { FileText, Award, Users, FileCheck } from "lucide-react";

const stats = [
  {
    icon: FileCheck,
    number: "320+",
    title: "연구과제 수행",
    description: "공공·민간 연구용역 경험",
  },
  {
    icon: FileText,
    number: "450+",
    title: "정책보고서",
    description: "정책제안 및 연구보고서 발간",
  },
  {
    icon: Award,
    number: "92%",
    title: "만족도 조사",
    description: "의뢰기관 고객 만족도",
  },
  {
    icon: Users,
    number: "40+",
    title: "전문 연구진",
    description: "다양한 분야의 연구 전문가",
  },
];

export default function StatCounter() {
  return (
    <section className="py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-[#0B2D52] group-hover:text-teal-300 transition-colors shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0B2D52] tracking-tight font-sans">
                    {stat.number}
                  </div>
                  <div className="text-sm font-bold text-slate-800">{stat.title}</div>
                  <div className="text-xs text-slate-500 hidden sm:block">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
