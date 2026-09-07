import React from "react";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata = {
  title: "주식회사 더좋은미래정책연구원 | Better Future Policy Institute",
  description: "Better Future Policy Institute Co., Ltd. - 더 나은 정책, 더 좋은 미래 / Better Policies, Better Tomorrow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
