import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding BFPI database...");

  // 1. Create Default Admin User
  const passwordHash = await bcrypt.hash("bfpi2026!", 10);
  await prisma.user.upsert({
    where: { email: "admin@bfpi.re.kr" },
    update: {},
    create: {
      email: "admin@bfpi.re.kr",
      passwordHash,
      name: "최고관리자",
      role: "SUPER_ADMIN",
    },
  });

  // 2. Create Research Categories (9 Major Areas)
  const categories = [
    {
      slug: "governance",
      title: "행정·거버넌스",
      englishTitle: "Administration & Governance",
      icon: "Landmark",
      description: "지방행정 혁신, 거버넌스 구축, 공공정책 평가 및 조직 진단",
      sortOrder: 1,
    },
    {
      slug: "regional-dev",
      title: "지역발전",
      englishTitle: "Regional Development",
      icon: "Building2",
      description: "지방소멸 대응, 균형발전, 지역 활성화 및 도시 재생 기본계획",
      sortOrder: 2,
    },
    {
      slug: "welfare-social",
      title: "복지·사회",
      englishTitle: "Welfare & Society",
      icon: "Users",
      description: "사회복지, 청년·노인 정책, 사회안전망 구축 및 사회통합 지수",
      sortOrder: 3,
    },
    {
      slug: "economy-industry",
      title: "경제·산업",
      englishTitle: "Economy & Industry",
      icon: "TrendingUp",
      description: "지역 경제 실태, 산업정책, 일자리 창출 및 소상공인 지원",
      sortOrder: 4,
    },
    {
      slug: "environment-energy",
      title: "환경·에너지",
      englishTitle: "Environment & Energy",
      icon: "Leaf",
      description: "탄소중립 이행 전략, 기후변화 대응, 지속가능발전 목표(SDGs)",
      sortOrder: 5,
    },
    {
      slug: "education",
      title: "교육",
      englishTitle: "Education Policy",
      icon: "GraduationCap",
      description: "미래교육 전환, 교육 수요 및 인식조사, 지역 인재 양성",
      sortOrder: 6,
    },
    {
      slug: "culture-tourism",
      title: "문화·관광",
      englishTitle: "Culture & Tourism",
      icon: "Compass",
      description: "지역 문화 자원 개발, 관광 활성화 전략, 콘텐츠 육성",
      sortOrder: 7,
    },
    {
      slug: "digital-ai",
      title: "디지털·AI 정책",
      englishTitle: "Digital & AI Policy",
      icon: "Cpu",
      description: "AI 기반 정책 분석, 빅데이터 거버넌스, 디지털 전환 전략",
      sortOrder: 8,
    },
    {
      slug: "convergence",
      title: "융합정책",
      englishTitle: "Convergence Policy",
      icon: "Sparkles",
      description: "다학제적 정책 연구, 신산업 융합 기술, 미래 정책 시나리오",
      sortOrder: 9,
    },
  ];

  for (const cat of categories) {
    await prisma.researchCategory.upsert({
      where: { slug: cat.slug },
      update: cat,
      create: cat,
    });
  }

  // 3. Create Researchers
  const researchers = [
    {
      name: "임혜자",
      englishName: "Hye-ja Lim",
      title: "대표이사 / 원장",
      department: "연구기획실",
      specialty: "공공정책, 지역발전, 국가거버넌스",
      biography: "주식회사 더좋은미래정책연구원 대표이사로서 데이터와 사람 중심의 근거 기반 정책 연구를 총괄하고 있습니다.",
      education: "서울대학교 행정대학원 행정학 박사",
      career: "전) 대통령비서실 국정상황실 선임행정관\n현) 주식회사 더좋은미래정책연구원 대표이사",
      sortOrder: 1,
    },
    {
      name: "김현우",
      englishName: "Hyun-woo Kim",
      title: "선임연구위원",
      department: "지역정책연구실",
      specialty: "지방소멸 대응, 균형발전, 도시계획",
      biography: "지역소멸 대응전략 및 지자체 기본계획 수립 연구를 전문으로 다루는 수석 연구원입니다.",
      education: "연세대학교 도시공학과 박사",
      career: "전) 한국지방행정연구원 객원연구원\n현) 더좋은미래정책연구원 선임연구위원",
      sortOrder: 2,
    },
    {
      name: "박서연",
      englishName: "Seo-yeon Park",
      title: "연구위원",
      department: "데이터·조사연구실",
      specialty: "통계분석, 사회조사, Big Data Analytics",
      biography: "정량·정성 데이터 수집 및 공공정책 효과성 평가 모델링 전문가입니다.",
      education: "고려대학교 통계학과 박사",
      career: "전) 한국갤럽 수석연구원\n현) 더좋은미래정책연구원 데이터분석 팀장",
      sortOrder: 3,
    },
    {
      name: "정민준",
      englishName: "Min-jun Jung",
      title: "연구위원",
      department: "환경·에너지연구실",
      specialty: "탄소중립, ESG, 기후변화 정책",
      biography: "지자체 및 공공기관의 탄소중립 실천계획 및 ESG 경영 전략을 연구합니다.",
      education: "KAIST 녹색성장대학원 박사",
      career: "현) 더좋은미래정책연구원 환경에너지 정책연구위원",
      sortOrder: 4,
    },
  ];

  for (const r of researchers) {
    const existing = await prisma.researcher.findFirst({ where: { name: r.name } });
    if (!existing) {
      await prisma.researcher.create({ data: r });
    }
  }

  // Fetch Category IDs
  const regCat = await prisma.researchCategory.findUnique({ where: { slug: "regional-dev" } });
  const welCat = await prisma.researchCategory.findUnique({ where: { slug: "welfare-social" } });
  const envCat = await prisma.researchCategory.findUnique({ where: { slug: "environment-energy" } });
  const govCat = await prisma.researchCategory.findUnique({ where: { slug: "governance" } });
  const eduCat = await prisma.researchCategory.findUnique({ where: { slug: "education" } });

  // 4. Create Featured Projects (Matching Mockups)
  const projects = [
    {
      slug: "regional-vitalizations-2024",
      title: "지방소멸 대응을 위한 지역활성화 기본계획 수립 연구",
      subtitle: "지방소멸위험지구 진단 및 맞춤형 인구·산업 복합 생태계 설계",
      categoryId: regCat?.id,
      clientName: "경상북도 / 지자체",
      periodStart: "2024.01",
      periodEnd: "2024.06",
      projectManager: "김현우 선임연구위원",
      summary: "인구 감소 및 초고령화에 직면한 지자체를 위해 주민 인터뷰, 문헌 및 통계데이터를 융합하여 체계적인 지역활성화 기본계획을 수립하였습니다.",
      isFeatured: true,
      visibility: "PUBLIC",
      status: "COMPLETED",
    },
    {
      slug: "youth-policy-evaluation-2024",
      title: "청년 정책 효과성 평가 및 개선방안 연구",
      subtitle: "주거·일자리·문화 3대 축 청년지원사업 정량 실태조사",
      categoryId: welCat?.id,
      clientName: "국무조정실 / 중앙정부",
      periodStart: "2023.09",
      periodEnd: "2024.03",
      projectManager: "임혜자 원장",
      summary: "전국 3,000명 청년 대상 설문조사 및 FGI를 진행하여 현행 지원 제도의 체감 효과를 측정하고 차세대 청년 정책 패러다임을 제시했습니다.",
      isFeatured: true,
      visibility: "PUBLIC",
      status: "COMPLETED",
    },
    {
      slug: "carbon-neutrality-strategy-2023",
      title: "탄소중립 이행을 위한 정책추진 전략 연구",
      subtitle: "공공기관 2030 온실가스 감축 로드맵 및 이행 체계 구축",
      categoryId: envCat?.id,
      clientName: "한국환경공단 / 공공기관",
      periodStart: "2023.04",
      periodEnd: "2023.11",
      projectManager: "정민준 연구위원",
      summary: "산업 및 에너지 데이터에 기반하여 공공부문의 온실가스 배출 현황을 파악하고 실행 가능한 탄소중립 이행 가이드라인을 제안했습니다.",
      isFeatured: true,
      visibility: "PUBLIC",
      status: "COMPLETED",
    },
    {
      slug: "social-integration-index-2023",
      title: "국민 정책 인식조사 및 사회통합 지수 개발 연구",
      subtitle: "사회갈등 요인 데이터 분석 및 거버넌스 신뢰도 지표 체계화",
      categoryId: govCat?.id,
      clientName: "행정안전부 / 중앙정부",
      periodStart: "2023.02",
      periodEnd: "2023.08",
      projectManager: "박서연 연구위원",
      summary: "다층적 사회인식 통계 모델링을 구사하여 국가 핵심 정책에 대한 국민적 신뢰도를 정량 지표화했습니다.",
      isFeatured: true,
      visibility: "PUBLIC",
      status: "COMPLETED",
    },
    {
      slug: "future-education-demand-survey",
      title: "미래교육 전환을 위한 교육 수요 및 인식조사",
      subtitle: "AI 시대 디지털 학습 환경 도입에 따른 학생·교원·학부모 수용성 분석",
      categoryId: eduCat?.id,
      clientName: "서울특별시교육청",
      periodStart: "2024.05",
      periodEnd: "2024.10",
      projectManager: "박서연 연구위원",
      summary: "AI 및 맞춤형 교육 도입에 대한 교육 현장의 요구사항을 종합 분석하고 교육정책 이행 과제를 제시했습니다.",
      isFeatured: false,
      visibility: "PUBLIC",
      status: "COMPLETED",
    },
  ];

  for (const p of projects) {
    await prisma.researchProject.upsert({
      where: { slug: p.slug },
      update: p,
      create: p,
    });
  }

  // 5. Create Contents (Policy Brief & Data Insight)
  const contents = [
    {
      slug: "brief-2024-01",
      type: "POLICY_BRIEF",
      title: "[Policy Brief Vol.1] 인구구조 변화에 대응하는 지자체 거버넌스 혁신 방향",
      summary: "초고령사회 진입에 따른 공공서비스 재편 및 행정 구역간 연계 거버넌스 구축 방안을 제시합니다.",
      body: "인구 감소 시대의 지자체 행정은 단일 행정구역 중심에서 이웃 지자체 간 광역 연계 및 콤팩트 시티 거버넌스로의 전환이 필수적입니다...",
      author: "임혜자 원장",
      tags: "지방행정, 인구변화, 거버넌스",
      status: "PUBLISHED",
    },
    {
      slug: "insight-2024-02",
      type: "DATA_INSIGHT",
      title: "[Data Insight] 빅데이터로 본 청년층 공공정책 체감도와 개선 과제",
      summary: "공공 데이터 및 소셜 데이터 500만 건을 다각도로 분석하여 청년들이 느끼는 실제 정책 만족도와 사각지대를 도출했습니다.",
      body: "청년 주거 지원사업과 일자리 연계 프로그램의 만족도를 시각화한 데이터 랩 결과를 소개합니다...",
      author: "박서연 연구위원",
      tags: "빅데이터, 청년정책, 데이터랩",
      status: "PUBLISHED",
    },
    {
      slug: "issue-report-2024-03",
      type: "ISSUE_REPORT",
      title: "[Issue Report] 2025 공공기관 ESG 경영 이행 가이드라인",
      summary: "공공기관의 지속가능발전 평가 지표 개정에 대응한 실무 중심 가이드라인 보고서입니다.",
      body: "국제 표준 및 국내 공공기관 경영평가에 최적화된 ESG 데이터 수집 및 공개 가이드를 체계화했습니다...",
      author: "정민준 연구위원",
      tags: "ESG, 공공기관, 이슈리포트",
      status: "PUBLISHED",
    },
    {
      slug: "notice-2026-agm-financial-statements",
      type: "NOTICE",
      title: "정기주주총회 소집공고 및 재무제표 공고",
      summary: "제1기 정기주주총회 개최 안내 및 상법에 따른 제1기 재무제표를 공고합니다.",
      body: `주식회사 더좋은미래정책연구원은 주주 여러분의 깊은 관심과 성원에 감사드리며, 아래와 같이 정기주주총회를 개최하고, 제1기 재무제표를 공고합니다.

## 1. 정기주주총회 소집공고
- 일시: 2026년 9월 30일(수) 오전 10:00
- 장소: 본점 회의실
- 목적사항 제1호 의안: 제1기 재무제표 승인의 건
- 목적사항 제2호 의안: 이사 보수한도 승인의 건
- 목적사항 제3호 의안: 감사 선임의 건

## 2. 재무제표 공고
당사의 제1기 재무제표를 상법 및 관계 법령에 따라 공고합니다. 재무상태표, 손익계산서 및 부속명세서는 본 공고와 함께 열람할 수 있습니다.

## 3. 비고
- 주주께서는 신분증을 지참하여 주시기 바랍니다.
- 문의: 경영지원팀 / 02-1234-5678 / info@bfpi.re.kr

2026년 9월 6일
주식회사 더좋은미래정책연구원
대표이사 임혜자`,
      author: "경영지원팀",
      tags: "주주총회, 재무제표, 공고",
      status: "PUBLISHED",
      publishedAt: new Date("2026-09-06"),
    },
  ];

  for (const c of contents) {
    await prisma.content.upsert({
      where: { slug: c.slug },
      update: c,
      create: c,
    });
  }

  // 6. Site Settings
  const settings = [
    { key: "SITE_NAME", value: "주식회사 더좋은미래정책연구원", description: "사이트 공식 명칭" },
    { key: "SITE_SLOGAN", value: "더 나은 정책, 더 좋은 미래", description: "메인 슬로건" },
    { key: "SITE_SUBTITLE", value: "근거로 정책을 설계하고, 데이터로 미래를 제안합니다.", description: "서브 메시지" },
    { key: "ADDRESS", value: "경기도 수원시 팔달구 효원로 (본점)", description: "본점 주소" },
    { key: "CONTACT_EMAIL", value: "contact@bfpi.re.kr", description: "공식 이메일" },
    { key: "CONTACT_PHONE", value: "031-234-5678", description: "대표 전화번호" },
  ];

  for (const s of settings) {
    await prisma.siteSetting.upsert({
      where: { key: s.key },
      update: s,
      create: s,
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
