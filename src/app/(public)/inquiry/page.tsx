"use client";

import React, { useState } from "react";
import { Send, Upload, CheckCircle2, AlertCircle, FileText, Lock, ShieldCheck } from "lucide-react";

export default function InquiryPage() {
  const [formData, setFormData] = useState({
    clientName: "",
    contactPerson: "",
    email: "",
    phone: "",
    category: "행정·거버넌스",
    purpose: "",
    expectedPeriod: "3개월 내",
    budgetRange: "협의 가능",
    message: "",
    privacyAgreed: false,
  });

  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selected = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selected]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.privacyAgreed) {
      setErrorMsg("개인정보 수집 및 이용에 동의해 주세요.");
      return;
    }

    setSubmitting(true);

    try {
      const body = new FormData();
      body.append("clientName", formData.clientName);
      body.append("contactPerson", formData.contactPerson);
      body.append("email", formData.email);
      body.append("phone", formData.phone);
      body.append("category", formData.category);
      body.append("purpose", formData.purpose);
      body.append("expectedPeriod", formData.expectedPeriod);
      body.append("budgetRange", formData.budgetRange);
      body.append("message", formData.message);
      body.append("privacyAgreed", String(formData.privacyAgreed));

      files.forEach((file) => {
        body.append("files", file);
      });

      const res = await fetch("/api/v1/inquiries", {
        method: "POST",
        body,
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
      } else {
        setErrorMsg(data.error || "제출 중 오류가 발생했습니다.");
      }
    } catch (err) {
      setErrorMsg("서버 통신 실패. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0B2D52] to-[#061B33] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-teal-400 font-sans tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
            ONLINE REQUEST & CONSULTING
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">연구용역 의뢰 및 상담</h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            정책연구, 사회조사, 정책평가 및 행정 컨설팅에 관해 편하게 의뢰하세요.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {success ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-teal-200 shadow-xl space-y-6 animate-in zoom-in duration-300">
            <div className="w-16 h-16 bg-teal-50 border border-teal-200 rounded-full flex items-center justify-center mx-auto text-teal-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-[#0B2D52]">연구용역 의뢰가 정상 접수되었습니다!</h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                담당 연구위원이 제출해주신 문의 내용 및 첨부서류를 검토한 후 24시간 이내(영업일 기준) 연락드리겠습니다.
              </p>
            </div>
            <button
              onClick={() => {
                setSuccess(false);
                setFormData({
                  clientName: "",
                  contactPerson: "",
                  email: "",
                  phone: "",
                  category: "행정·거버넌스",
                  purpose: "",
                  expectedPeriod: "3개월 내",
                  budgetRange: "협의 가능",
                  message: "",
                  privacyAgreed: false,
                });
                setFiles([]);
              }}
              className="px-6 py-3 bg-[#0B2D52] hover:bg-[#061B33] text-white text-xs font-bold rounded-xl shadow"
            >
              새로운 문의 작성하기
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/80 shadow-lg space-y-8"
          >
            {errorMsg && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#0B2D52] border-b border-slate-100 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                <span>1. 기본 정보 (필수)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    기관명 / 법인명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    placeholder="예: ○○광역시청, 한국○○공단, (주)○○"
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:border-[#0B2D52] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    담당자성함 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="예: 홍길동 팀장"
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:border-[#0B2D52] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    이메일 주소 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@organization.go.kr"
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:border-[#0B2D52] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="010-0000-0000 / 02-000-0000"
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:border-[#0B2D52] outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Research Request Details */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#0B2D52] border-b border-slate-100 pb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-600" />
                <span>2. 연구 과제 상세</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    연구 분야 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:border-[#0B2D52] outline-none bg-white transition-colors"
                  >
                    <option value="행정·거버넌스">행정·거버넌스</option>
                    <option value="지역발전">지역발전 및 지방소멸대응</option>
                    <option value="복지·사회">복지·사회 및 사회통합</option>
                    <option value="경제·산업">경제·산업 및 일자리</option>
                    <option value="환경·에너지">환경·에너지 및 탄소중립</option>
                    <option value="디지털·AI 정책">디지털·AI 정책</option>
                    <option value="기타 융합연구">기타 융합연구</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">예상 연구기간</label>
                  <input
                    type="text"
                    value={formData.expectedPeriod}
                    onChange={(e) => setFormData({ ...formData, expectedPeriod: e.target.value })}
                    placeholder="예: 3개월, 6개월, 2024년 내"
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:border-[#0B2D52] outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  연구 개요 및 목적 <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  placeholder="연구 추진 배경, 해결하고자 하는 정책 과제 또는 요구 사항을 자유롭게 기술해 주세요."
                  className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:border-[#0B2D52] outline-none transition-colors"
                />
              </div>
            </div>

            {/* File Upload (RFP / 과업지시서) */}
            <div className="space-y-4">
              <label className="block text-xs font-bold text-slate-700">
                제안요청서 (RFP) / 과업지시서 첨부 (선택)
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center hover:border-[#0B2D52] transition-colors bg-slate-50">
                <Upload className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-700">
                  클릭하거나 파일(PDF, DOCX, HWPX, XLSX, PPTX, ZIP)을 드래그하세요.
                </p>
                <p className="text-[11px] text-slate-400 mt-1">파일당 최대 20MB 지원</p>
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  accept=".pdf,.docx,.hwpx,.xlsx,.pptx,.zip"
                  className="hidden"
                  id="rfp-upload-input"
                />
                <label
                  htmlFor="rfp-upload-input"
                  className="inline-block mt-4 px-4 py-2 bg-white border border-slate-300 text-xs font-bold text-slate-700 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors shadow-sm"
                >
                  파일 선택
                </label>
              </div>

              {files.length > 0 && (
                <div className="space-y-2 pt-2">
                  {files.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-slate-100 rounded-xl text-xs text-slate-700"
                    >
                      <span className="font-semibold truncate max-w-xs">{f.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="text-red-500 hover:text-red-700 text-xs font-bold px-2 py-1"
                      >
                        삭제
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Privacy Agreement */}
            <div className="pt-4 border-t border-slate-100 space-y-4">
              <div className="p-4 bg-slate-100/70 rounded-xl text-xs text-slate-600 leading-relaxed max-h-32 overflow-y-auto border border-slate-200">
                <p className="font-bold text-slate-800 mb-1">개인정보 수집 및 이용 동의 (필수)</p>
                - 수집 항목: 기관명, 담당자성함, 이메일, 연락처, 과업 문의내용<br />
                - 수집 목적: 연구용역 상담, 과업 제안서 회신 및 고객 관리<br />
                - 보유 및 이용 기간: 상담 완료 후 3년 (법령 기준 준수)
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.privacyAgreed}
                  onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
                  className="w-4 h-4 text-[#0B2D52] rounded border-slate-300 focus:ring-[#0B2D52]"
                />
                <span className="text-xs font-bold text-slate-800">
                  개인정보 수집 및 이용 목적에 동의합니다. (필수)
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 text-base font-bold text-white bg-[#0B2D52] hover:bg-[#061B33] rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {submitting ? (
                <span>접수 중입니다...</span>
              ) : (
                <>
                  <Send className="w-5 h-5 text-teal-300" />
                  <span>연구용역 의뢰 접수하기</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
