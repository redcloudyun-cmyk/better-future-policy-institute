import React from "react";
import "./globals.css";

export const metadata = {
  title: "주식회사 더좋은미래정책연구원",
  description: "Better Future Policy Institute Co., Ltd. - 더 나은 정책, 더 좋은 미래",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
