"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "#projets", label: "Projets" },
    { href: "#services", label: "Services" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-pixel-border/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Icon + HTML Text Lockup */}
        <Link href="/" className="flex items-center gap-2.5 group">
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
            const isActive = link.href === pathname;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-pixel-muted hover:text-pixel-primary transition-colors font-medium py-2 text-sm tracking-wide ${
                  isActive ? "text-pixel-primary" : ""
                }`}
              >
                {link.label}
                {/* Ligne animée en dessous */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-pixel-primary rounded-full transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-pixel-primary hover:bg-opacity-95 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all shadow-md shadow-pixel-primary/10 hover:shadow-pixel-primary/20 hover:-translate-y-0.5"
          >
            Lancer un projet
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
              const isActive = link.href === pathname;
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
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-pixel-primary text-white py-3 text-center rounded-xl font-semibold text-sm"
            >
              Lancer un projet
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
