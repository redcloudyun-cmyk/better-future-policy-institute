import React from "react";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import BFPILogo from "@/components/common/BFPILogo";
import { FileText, Inbox, Users, FolderCheck, LogOut, CheckCircle2, Clock } from "lucide-react";

export const metadata = {
  title: "관리자 대시보드 | 주식회사 더좋은미래정책연구원 CMS",
};

export default async function AdminDashboardPage() {
  const session = await getSession();
  if (!session) {
    redirect("/admin/login");
  }

  let totalInquiries = 0;
  let newInquiriesCount = 0;
  let totalProjects = 0;
  let totalResearchers = 0;
  let recentInquiries = [];

  try {
    totalInquiries = await prisma.inquiry.count();
    newInquiriesCount = await prisma.inquiry.count({ where: { status: "NEW" } });
    totalProjects = await prisma.researchProject.count();
    totalResearchers = await prisma.researcher.count();

    recentInquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    });
  } catch (error) {
    console.error("Dashboard data load error:", error);
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Header */}
      <header className="bg-[#0B2D52] text-white py-4 px-6 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-4">
          <BFPILogo variant="light" size="sm" showEnglish={false} showCorpName={true} />
          <span className="text-xs bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded border border-teal-500/30 font-sans font-bold">
            CMS ADMIN DASHBOARD
          </span>
        </div>

        <div className="flex items-center space-x-4 text-xs">
          <span className="text-slate-300">
            접속자: <strong className="text-white">{session.name}</strong> ({session.role})
          </span>
          <Link
            href="/"
            target="_blank"
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md transition-colors"
          >
            사이트 바로가기
          </Link>
          <Link
            href="/admin/login"
            className="px-3 py-1.5 bg-red-600/80 hover:bg-red-600 text-white rounded-md transition-colors flex items-center gap-1"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>로그아웃</span>
          </Link>
        </div>
      </header>

      {/* Main Dashboard Layout */}
      <div className="max-w-7xl w-full mx-auto p-6 space-y-8 flex-1">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <Inbox className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500">신규 의뢰 문의</div>
              <div className="text-2xl font-black text-[#0B2D52]">{newInquiriesCount} 건</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500">전체 문의 접수</div>
              <div className="text-2xl font-black text-[#0B2D52]">{totalInquiries} 건</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <FolderCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500">등록된 연구성과</div>
              <div className="text-2xl font-black text-[#0B2D52]">{totalProjects} 건</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500">등록 연구진</div>
              <div className="text-2xl font-black text-[#0B2D52]">{totalResearchers} 명</div>
            </div>
          </div>
        </div>

        {/* Quick Menu Nav & Recent Inquiries Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Quick Menu Links */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-[#0B2D52] border-b border-slate-100 pb-3">
              CMS 바로가기 메뉴
            </h3>
            <div className="space-y-2 text-xs">
              <Link
                href="/admin/inquiries"
                className="block p-3 bg-slate-50 hover:bg-teal-50 hover:text-teal-700 rounded-xl font-bold text-slate-800 transition-colors flex items-center justify-between"
              >
                <span>연구의뢰 문의 관리</span>
                <span className="px-2 py-0.5 bg-teal-100 text-teal-800 rounded-full font-sans text-[11px]">
                  {newInquiriesCount} NEW
                </span>
              </Link>
              <Link
                href="/projects"
                className="block p-3 bg-slate-50 hover:bg-slate-100 rounded-xl font-bold text-slate-800 transition-colors"
              >
                연구성과 및 사례 관리
              </Link>
              <Link
                href="/researchers"
                className="block p-3 bg-slate-50 hover:bg-slate-100 rounded-xl font-bold text-slate-800 transition-colors"
              >
                연구진 프로필 관리
              </Link>
              <Link
                href="/insights"
                className="block p-3 bg-slate-50 hover:bg-slate-100 rounded-xl font-bold text-slate-800 transition-colors"
              >
                정책 및 데이터 인사이트 관리
              </Link>
            </div>
          </div>

          {/* Recent Inquiries List */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-[#0B2D52]">최신 접수된 연구의뢰 문의</h3>
              <Link href="/admin/inquiries" className="text-xs font-bold text-teal-600 hover:underline">
                전체보기 →
              </Link>
            </div>

            {recentInquiries.length === 0 ? (
              <p className="text-xs text-slate-400 py-8 text-center">접수된 문의 내역이 없습니다.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="p-3">기관명</th>
                      <th className="p-3">담당자</th>
                      <th className="p-3">연구분야</th>
                      <th className="p-3">상태</th>
                      <th className="p-3">접수일</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {recentInquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-[#0B2D52]">{inq.clientName}</td>
                        <td className="p-3">{inq.contactPerson}</td>
                        <td className="p-3">{inq.category}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                              inq.status === "NEW"
                                ? "bg-red-100 text-red-700"
                                : inq.status === "REVIEWING"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-teal-100 text-teal-700"
                            }`}
                          >
                            {inq.status}
                          </span>
                        </td>
                        <td className="p-3 text-slate-400 font-sans">
                          {new Date(inq.createdAt).toLocaleDateString("ko-KR")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
