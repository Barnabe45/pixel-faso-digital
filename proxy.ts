// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback-secret-key-just-in-case",
);

const locales = ["fr", "en"];
const defaultLocale = "fr";

// ✅ Fonction pour détecter la langue préférée du navigateur
function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || "";

  const preferredLanguages = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim())
    .map((lang) => lang.split("-")[0]);

  for (const lang of preferredLanguages) {
    if (locales.includes(lang)) {
      return lang;
    }
  }

  return defaultLocale;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ==========================================
  // 1. GESTION DE L'AUTHENTIFICATION (ADMIN)
  // ==========================================
  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginRoute = pathname === "/admin/login";

  if (isAdminRoute) {
    const sessionToken = request.cookies.get("pixel_session")?.value;
    let isTokenValid = false;

    if (sessionToken) {
      try {
        await jwtVerify(sessionToken, SECRET_KEY);
        isTokenValid = true;
      } catch (error) {
        console.error(error);
        isTokenValid = false;
      }
    }

    if (!isTokenValid && !isLoginRoute) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }

    if (isTokenValid && isLoginRoute) {
      const dashboardUrl = new URL("/admin/dashboard", request.url);
      return NextResponse.redirect(dashboardUrl);
    }

    return NextResponse.next();
  }

  // ==========================================
  // 2. GESTION DU MULTILINGUE (PAGES PUBLIQUES)
  // ==========================================

  // ✅ On vérifie si l'URL contient déjà une langue
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // 🔥 NOUVEAU : Vérification du cookie avant la redirection
  const localeCookie = request.cookies.get("pixel_locale")?.value;
  if (localeCookie && locales.includes(localeCookie)) {
    // Si l'URL n'a pas de langue ET que le cookie existe, on redirige vers la langue du cookie
    if (!pathnameHasLocale) {
      const newUrl = new URL(`/${localeCookie}${pathname}`, request.url);
      return NextResponse.redirect(newUrl);
    }
  }

  // Si la langue est dans l'URL, on laisse passer
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 🔥 Détection de la langue préférée du navigateur (si pas de cookie)
  const preferredLocale = getPreferredLocale(request);

  // ✅ On construit la nouvelle URL
  const newUrl = new URL(`/${preferredLocale}${pathname}`, request.url);

  // ✅ On crée la réponse de redirection
  const response = NextResponse.redirect(newUrl);

  // ✅ On stocke la langue choisie dans un cookie (valable 1 an)
  response.cookies.set("pixel_locale", preferredLocale, {
    maxAge: 365 * 24 * 60 * 60,
    path: "/",
  });

  // ✅ On retourne la réponse
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
