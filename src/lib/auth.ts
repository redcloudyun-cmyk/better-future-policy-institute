import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const SECRET_KEY = new TextEncoder().encode(
  process.env.SESSION_SECRET || "bfpi_super_secret_jwt_key_2026_better_future_policy"
);

export async function encryptSession(payload: { userId: string; email: string; role: string; name: string }) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(SECRET_KEY);
}

export async function decryptSession(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY, {
      algorithms: ["HS256"],
    });
    return payload as { userId: string; email: string; role: string; name: string };
  } catch (error) {
    return null;
  }
}

export async function getSession() {
  const token = cookies().get("bfpi_admin_session")?.value;
  if (!token) return null;
  return await decryptSession(token);
}
