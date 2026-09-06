import React from "react";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import Link from "next/link";
import BFPILogo from "@/components/common/BFPILogo";
import { Inbox, FileText, Download, ArrowLeft, Mail, Phone, Calendar } from "lucide-react";

export const metadata = {
  title: "연구의뢰 문의 관리 | 주식회사 더좋은미래정책연구원 CMS",
};

export default async function AdminInquiriesPage() {
  const session = await getSession();
  if (!session) {
    redirect("/admin/login");
  }

  let inquiries = [];
  try {
    inquiries = await prisma.inquiry.findMany({
      include: { files: true },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to load inquiries:", error);
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="bg-[#0B2D52] text-white py-4 px-6 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-4">
          <BFPILogo variant="light" size="sm" showEnglish={false} showCorpName={true} />
          <span className="text-xs bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded border border-teal-500/30 font-sans font-bold">
            INQUIRY MANAGEMENT
          </span>
        </div>
        <Link
          href="/admin/dashboard"
          className="text-xs text-slate-300 hover:text-white flex items-center gap-1 font-bold"
        >
          <ArrowLeft className="w-4 h-4" /> 대시보드로 돌아가기
        </Link>
      </header>

      <div className="max-w-7xl w-full mx-auto p-6 space-y-6 flex-1">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-[#0B2D52]">연구의뢰 문의 접수 목록</h1>
            <p className="text-xs text-slate-500 mt-1">총 {inquiries.length}건의 문의가 접수되었습니다.</p>
          </div>
        </div>

        {inquiries.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center border border-slate-200">
            <Inbox className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-slate-600">접수된 연구의뢰 문의가 없습니다.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {inquiries.map((inq) => (
              <div
                key={inq.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-[#0B2D52]">{inq.clientName}</span>
                    <span className="text-xs text-slate-500">담당자: {inq.contactPerson}</span>
                    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">
                      {inq.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 font-sans">
                      {new Date(inq.createdAt).toLocaleString("ko-KR")}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        inq.status === "NEW"
                          ? "bg-red-100 text-red-700"
                          : inq.status === "REVIEWING"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-teal-100 text-teal-700"
                      }`}
                    >
                      상태: {inq.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl">
                  <div className="space-y-1">
                    <div><strong className="text-slate-900">이메일:</strong> {inq.email}</div>
                    <div><strong className="text-slate-900">연락처:</strong> {inq.phone}</div>
                  </div>
                  <div className="space-y-1">
                    <div><strong className="text-slate-900">예상기간:</strong> {inq.expectedPeriod || "미지정"}</div>
                    <div><strong className="text-slate-900">개인정보동의:</strong> {inq.privacyAgreed ? "동의함" : "미동의"}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-[#0B2D52]">연구 개요 및 목적:</div>
                  <p className="text-xs text-slate-700 leading-relaxed bg-slate-50/50 p-3 rounded-lg border border-slate-100">
                    {inq.purpose}
                  </p>
                </div>

                {inq.files && inq.files.length > 0 && (
                  <div className="pt-2">
                    <div className="text-xs font-bold text-slate-700 mb-2">첨부파일 ({inq.files.length}개):</div>
                    <div className="flex flex-wrap gap-2">
                      {inq.files.map((file) => (
                        <a
                          key={file.id}
                          href={file.filePath}
                          download
                          className="px-3 py-1.5 bg-teal-50 border border-teal-200 text-teal-700 hover:bg-teal-100 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>{file.originalName} ({Math.round(file.fileSize / 1024)} KB)</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
