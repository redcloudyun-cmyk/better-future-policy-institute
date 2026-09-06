import React from "react";
import HeroSection from "@/components/home/HeroSection";
import StatCounter from "@/components/home/StatCounter";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ResearchAreasSection from "@/components/home/ResearchAreasSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import InsightsSection from "@/components/home/InsightsSection";
import ResearchersSection from "@/components/home/ResearchersSection";
import InquiryCTA from "@/components/home/InquiryCTA";
import { prisma } from "@/lib/db";

export const metadata = {
  title: "주식회사 더좋은미래정책연구원 - 더 나은 정책, 더 좋은 미래",
  description: "근거로 정책을 설계하고, 데이터로 미래를 제안합니다. 중앙정부, 지자체, 공공기관 및 민간 파트너 대상 전문 정책연구 및 위탁연구용역 수행.",
  openGraph: {
    title: "주식회사 더좋은미래정책연구원",
    description: "공식 연구기관 홈페이지 & 정책연구 수주 플랫폼. A Better Tomorrow, Through Better Policies.",
    url: "https://bfpi.re.kr",
    siteName: "더좋은미래정책연구원",
    locale: "ko_KR",
    type: "website",
  },
};

export default async function HomePage() {
  let featuredProjects: any[] = [];
  try {
    featuredProjects = await prisma.researchProject.findMany({
      where: {
        isFeatured: true,
        visibility: "PUBLIC",
      },
      include: {
        category: true,
      },
      orderBy: { publishedAt: "desc" },
      take: 4,
    });
  } catch (error) {
    console.error("Failed to fetch featured projects:", error);
  }

  return (
    <div className="w-full">
      <HeroSection />
      <StatCounter />
      <ServicesSection />
      <ProcessSection />
      <ResearchAreasSection />
      <ProjectsSection initialProjects={featuredProjects} />
      <InsightsSection />
      <ResearchersSection />
      <InquiryCTA />
    </div>
  );
}
