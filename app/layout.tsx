// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixel Faso Digital | Développeur Fullstack & Studio Digital",
  description:
    "Je crée des applications web et mobiles modernes avec Next.js, React Native, Prisma et Neon. Basé au Burkina Faso.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
