import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ResearchAreasSection from "@/components/home/ResearchAreasSection";
import ProjectsSection from "@/components/home/ProjectsSection";

export const metadata = {
  title: "주식회사 더좋은미래정책연구원 - 더 나은 정책, 더 깊은 연구",
  description: "사람과 사회, 그리고 더 나은 미래를 위한 정책의 길을 함께 만듭니다. 공공과 민간의 다양한 파트너와 함께 근거 있는 연구로 실질적인 변화를 이끌어갑니다.",
  openGraph: {
    title: "주식회사 더좋은미래정책연구원",
    description: "Better Future Policy Institute Co., Ltd. - A Better Tomorrow, Through Better Policies.",
    url: "https://bfpi.re.kr",
    siteName: "더좋은미래정책연구원",
    locale: "ko_KR",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="w-full font-sans antialiased">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ResearchAreasSection />
      <ProjectsSection />
    </div>
  );
}
