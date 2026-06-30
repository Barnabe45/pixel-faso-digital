// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; // ⚠️ Attention : le chemin change car on est descendu d'un niveau dans [locale] !
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getDictionary } from "@/lib/dictionaries";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// 1. Indique à Next.js de générer statiquement les versions FR et EN au moment du build
export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

// 2. Génération dynamique des métadonnées SEO selon la langue de l'URL
// 2. Génération dynamique des métadonnées SEO selon la langue de l'URL
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params; // ✅ On attend la résolution
  const isFr = locale === "fr";

  return {
    title: isFr
      ? "Pixel Faso Digital | Agence Web & Développement d'Applications"
      : "Pixel Faso Digital | Web Agency & App Development",
    description: isFr
      ? "Agence web basée au Burkina Faso. Nous concevons des sites internet et des applications mobiles sur mesure pour nos clients partout en Afrique, des projets vitrines aux plateformes complexes."
      : "Web agency based in Burkina Faso. We build custom websites and mobile applications for clients across Africa, from simple showcases to complex digital platforms.",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

// 3. Le composant Layout qui accepte désormais le paramètre 'locale'
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "fr" | "en" }>; // ← Typage précis
}) {
  const { locale } = await params; // ✅ On attend la résolution
  const dict = await getDictionary(locale);

  return (
    // La langue de la page est maintenant injectée dynamiquement
    <html lang={locale}>
      <body className={`${inter.className} text-gray-900 antialiased`}>
        <Navbar dict={dict.navbar} locale={locale} />
        {children}
        <Footer dict={dict.footer} locale={locale} />
      </body>
    </html>
  );
}
