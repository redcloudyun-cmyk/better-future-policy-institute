import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import path from "path";
import fs from "fs/promises";
import crypto from "crypto";

// Allowed extensions & safe MIME types
const ALLOWED_EXTENSIONS = [".pdf", ".docx", ".hwpx", ".xlsx", ".pptx", ".zip"];
const DISALLOWED_MIME_PREFIXES = ["application/x-executable", "application/x-msdownload", "text/javascript"];

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const clientName = formData.get("clientName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const category = formData.get("category") as string;
    const purpose = formData.get("purpose") as string;
    const expectedPeriod = (formData.get("expectedPeriod") as string) || "";
    const budgetRange = (formData.get("budgetRange") as string) || "";
    const message = (formData.get("message") as string) || "";
    const privacyAgreed = formData.get("privacyAgreed") === "true";

    // Mandatory Validation
    if (!clientName || !contactPerson || !email || !phone || !category || !purpose) {
      return NextResponse.json(
        { success: false, error: "필수 입력 항목이 누락되었습니다." },
        { status: 400 }
      );
    }

    if (!privacyAgreed) {
      return NextResponse.json(
        { success: false, error: "개인정보 수집 및 이용 동의가 필요합니다." },
        { status: 400 }
      );
    }

    // Save Inquiry record in DB
    const inquiry = await prisma.inquiry.create({
      data: {
        clientName,
        contactPerson,
        email,
        phone,
        category,
        purpose,
        expectedPeriod,
        budgetRange,
        message,
        privacyAgreed,
        status: "NEW",
      },
    });

    // Handle File Uploads securely
    const files = formData.getAll("files") as File[];
    const savedFiles = [];

    if (files && files.length > 0) {
      const uploadDir = path.join(process.cwd(), "public", "uploads", "inquiries");
      await fs.mkdir(uploadDir, { recursive: true });

      for (const file of files) {
        if (!file.name || file.size === 0) continue;

        const ext = path.extname(file.name).toLowerCase();
        
        // Extension Check
        if (!ALLOWED_EXTENSIONS.includes(ext)) {
          console.warn(`File rejected due to extension: ${file.name}`);
          continue;
        }

        // MIME Check
        if (DISALLOWED_MIME_PREFIXES.some((mime) => file.type.startsWith(mime))) {
          console.warn(`File rejected due to MIME type: ${file.name}`);
          continue;
        }

        // Max File Size: 20MB
        if (file.size > 20 * 1024 * 1024) {
          console.warn(`File rejected due to size: ${file.name}`);
          continue;
        }

        // Randomize File Name for Security
        const randomName = `${crypto.randomUUID()}${ext}`;
        const filePath = path.join(uploadDir, randomName);
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        await fs.writeFile(filePath, buffer);

        const savedFile = await prisma.inquiryFile.create({
          data: {
            inquiryId: inquiry.id,
            originalName: file.name,
            fileName: randomName,
            filePath: `/uploads/inquiries/${randomName}`,
            fileSize: file.size,
            mimeType: file.type || "application/octet-stream",
          },
        });

        savedFiles.push(savedFile);
      }
    }

    // Add Initial Log Entry
    await prisma.inquiryLog.create({
      data: {
        inquiryId: inquiry.id,
        action: "SUBMITTED",
        actorName: contactPerson,
        note: "온라인 연구의뢰 폼 접수 완료",
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        inquiryId: inquiry.id,
        savedFilesCount: savedFiles.length,
      },
    });
  } catch (error: any) {
    console.error("Failed to process inquiry submission:", error);
    return NextResponse.json(
      { success: false, error: "서버 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
