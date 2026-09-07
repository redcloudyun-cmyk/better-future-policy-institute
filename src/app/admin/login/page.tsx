"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BFPILogo from "@/components/common/BFPILogo";
import { Lock, Mail, AlertCircle, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@bfpi.re.kr");
  const [password, setPassword] = useState("bfpi2026!");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/v1/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin/dashboard");
      } else {
        setErrorMsg(data.error || "로그인에 실패하였습니다.");
      }
    } catch (err) {
      setErrorMsg("서버 통신 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-slate-800 space-y-8">
        <div className="text-center space-y-3">
          <BFPILogo size="lg" showCorpName={true} />
          <div className="pt-2">
            <h1 className="text-xl font-bold text-[#0B2D52]">관리자 CMS 시스템</h1>
            <p className="text-xs text-slate-500">미래정책연구원 통합 콘텐츠 및 문의관리</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs font-semibold rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">관리자 이메일</label>
              <div className="relative flex items-center">
                <Mail className="w-5 h-5 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-sm border border-slate-300 rounded-xl focus:border-[#0B2D52] outline-none"
                  placeholder="admin@bfpi.re.kr"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">비밀번호</label>
              <div className="relative flex items-center">
                <Lock className="w-5 h-5 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-sm border border-slate-300 rounded-xl focus:border-[#0B2D52] outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl text-[11px] text-slate-500 border border-slate-200">
            <span className="font-bold text-[#0B2D52]">초기 계정 정보:</span> <br />
            이메일: <code className="text-teal-700">admin@bfpi.re.kr</code> | 비밀번호: <code className="text-teal-700">bfpi2026!</code>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#0B2D52] hover:bg-[#061B33] text-white text-sm font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>{loading ? "인증 확인 중..." : "CMS 관리자 로그인"}</span>
            <ArrowRight className="w-4 h-4 text-teal-300" />
          </button>
        </form>
      </div>
    </div>
  );
}
