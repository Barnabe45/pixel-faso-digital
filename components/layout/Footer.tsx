// app/components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

interface FooterProps {
  dict: {
    cta_title: string;
    cta_subtitle: string;
    cta_button: string;
    brand_description: string;
    location: string;
    copyright: string;
    nav_title: string;
    legal_title: string;
    links: {
      home: string;
      services: string;
      projects: string;
      blog: string;
      about: string;
      contact: string;
      legal: string;
    };
  };
  locale: string;
}

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Footer({ dict, locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/tonpseudo", icon: GithubIcon, label: "GitHub" },
    {
      href: "https://linkedin.com/in/tonpseudo",
      icon: LinkedinIcon,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/tonpseudo",
      icon: TwitterIcon,
      label: "Twitter",
    },
  ];

  const footerLinks = [
    {
      title: dict.nav_title,
      links: [
        { href: `/${locale}`, label: dict.links.home },
        { href: `/${locale}#services`, label: dict.links.services },
        { href: `/${locale}#projets`, label: dict.links.projects },
        { href: `/${locale}/blog`, label: dict.links.blog },
      ],
    },
    {
      title: dict.legal_title,
      links: [
        { href: `/${locale}/a-propos`, label: dict.links.about },
        { href: `/${locale}/contact`, label: dict.links.contact },
        { href: `/${locale}/mentions-legales`, label: dict.links.legal },
      ],
    },
  ];

  return (
    <footer className="bg-pixel-text text-white border-t border-white/5">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
            {dict.cta_title}
          </h2>
          <p className="text-white/60 mb-8 text-base md:text-lg">
            {dict.cta_subtitle}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-pixel-primary hover:bg-opacity-90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:gap-3 shadow-lg shadow-pixel-primary/10"
          >
            {dict.cta_button}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand - Harmonisé avec la Navbar */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <Image
                  src="/site-images/pixelfaso-original.svg"
                  alt="Pixel Faso"
                  className="w-8 h-auto object-contain"
                  width={32}
                  height={32}
                />
                <span className="font-bold text-lg tracking-tight text-white">
                  Pixel <span className="text-pixel-primary">Faso</span>
                </span>
              </div>
              <p className="text-white/60 mb-5 max-w-md text-sm leading-relaxed">
                {dict.brand_description}
              </p>
              <div className="flex items-center gap-2 text-white/40 text-xs tracking-wide">
                <MapPin size={14} className="text-pixel-primary" />
                <span>{dict.location}</span>
              </div>
            </div>

            {/* Links Columns */}
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="font-bold mb-4 text-xs uppercase tracking-wider text-white/80">
                  {column.title}
                </h3>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-pixel-primary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {currentYear} Pixel Faso. {dict.copyright}
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-pixel-primary flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
            <a
              href="mailto:contact@pixelfaso.com"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-pixel-primary flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
