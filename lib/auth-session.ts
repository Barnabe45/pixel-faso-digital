// lib/auth-session.ts
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback-secret-key-just-in-case",
);

// Durée de la session : 1 jour
const SESSION_DURATION = 24 * 60 * 60 * 1000;

export interface SessionPayload {
  userId: string;
  email: string;
  role: "SUPER_ADMIN" | "ADMIN";
  expiresAt: number;
}

/**
 * Chiffre et signe un payload pour créer un JWT
 */
export async function encrypt(payload: Omit<SessionPayload, "expiresAt">) {
  const expiresAt = Date.now() + SESSION_DURATION;

  return await new SignJWT({ ...payload, expiresAt })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(SECRET_KEY);
}

/**
 * Déchiffre et valide un JWT
 */
export async function decrypt(
  sessionToken: string,
): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(sessionToken, SECRET_KEY, {
      algorithms: ["HS256"],
    });
    return payload as unknown as SessionPayload;
  } catch (error) {
    console.error("❌ Token invalide ou expiré");
    return null;
  }
}

/**
 * Crée la session en plaçant le cookie sécurisé HTTP-only
 */
export async function createSession(
  userId: string,
  email: string,
  role: "SUPER_ADMIN" | "ADMIN",
) {
  const token = await encrypt({ userId, email, role });
  const cookieStore = await cookies();

  cookieStore.set("pixel_session", token, {
    httpOnly: true, // Empêche l'accès via le JavaScript du navigateur (protection XSS)
    secure: process.env.NODE_ENV === "production", // Uniquement en HTTPS en production
    sameSite: "lax", // Protection CSRF
    expires: new Date(Date.now() + SESSION_DURATION),
    path: "/", // Valide pour toute l'application
  });
}

/**
 * Supprime la session (Déconnexion)
 */
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("pixel_session");
}
