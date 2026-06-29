// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

// On récupère la même clé secrète que pour la session
const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback-secret-key-just-in-case",
);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Récupérer le token de session depuis les cookies
  const sessionToken = request.cookies.get("pixel_session")?.value;

  // 2. Définir les routes d'administration
  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginRoute = pathname === "/admin/login";

  if (isAdminRoute) {
    let isTokenValid = false;

    // 3. Si un jeton est présent, on tente de le valider
    if (sessionToken) {
      try {
        await jwtVerify(sessionToken, SECRET_KEY);
        isTokenValid = true;
      } catch (error) {
        // Jeton corrompu, expiré ou modifié manuellement
        isTokenValid = false;
      }
    }

    // Cas 1 : L'utilisateur n'est pas connecté et tente d'accéder au dashboard
    if (!isTokenValid && !isLoginRoute) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Cas 2 : L'utilisateur est déjà connecté et tente d'aller sur la page de login
    if (isTokenValid && isLoginRoute) {
      const dashboardUrl = new URL("/admin/dashboard", request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  // Si tout est en règle, on laisse la requête continuer normalement
  return NextResponse.next();
}

// 4. On configure le matcher pour exécuter le middleware UNIQUEMENT sur les routes admin
// Cela évite de ralentir le site vitrine public
export const config = {
  matcher: ["/admin/:path*"],
};
