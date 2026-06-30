"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

// 1. On définit l'interface des props attendues
interface NavbarProps {
  dict: {
    home: string;
    projects: string;
    services: string;
    about: string;
    contact: string;
    cta: string;
  };
  locale: string; // Utile pour préfixer les URL
}

export default function Navbar({ dict, locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 2. On dynamise les liens et les textes
  const navLinks = [
    { href: `/${locale}`, label: dict.home },
    { href: `/${locale}#projets`, label: dict.projects },
    { href: `/${locale}#services`, label: dict.services },
    { href: `/${locale}/a-propos`, label: dict.about },
    { href: `/${locale}/contact`, label: dict.contact },
  ];

  // ✅ Détection simple : seul le chemin exact est actif
  const isLinkActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-pixel-border/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
          <Image
            src="/site-images/pixelfaso-original.svg"
            alt="Pixel Faso"
            className="w-10 h-auto object-contain transition-transform group-hover:scale-105"
            width={40}
            height={40}
            priority
          />
          <span className="font-bold text-xl tracking-tight text-pixel-text">
            Pixelfaso
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            // On vérifie si le chemin actuel correspond au lien (gestion propre du # pour les ancres)
            const isActive = isLinkActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-pixel-muted hover:text-pixel-primary transition-colors font-medium py-2 text-sm tracking-wide ${
                  isActive ? "text-pixel-primary" : ""
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-pixel-primary rounded-full transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href={`/${locale}/contact`}
            className="bg-pixel-primary hover:bg-opacity-95 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all shadow-md shadow-pixel-primary/10 hover:shadow-pixel-primary/20 hover:-translate-y-0.5"
          >
            {dict.cta}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-pixel-text focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-pixel-border/40 animate-fadeIn">
          <div className="px-6 py-6 flex flex-col gap-5 text-base">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-pixel-muted hover:text-pixel-primary transition-colors ${
                    isActive ? "text-pixel-primary font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={`/${locale}/contact`}
              onClick={() => setIsOpen(false)}
              className="bg-pixel-primary text-white py-3 text-center rounded-xl font-semibold text-sm"
            >
              {dict.cta}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
