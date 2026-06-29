// app/components/sections/Services.tsx
import { Code2, Smartphone, Globe, Zap, Shield } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Code2,
    title: "Sites Vitrines",
    description:
      "Sites vitrines, landing pages, sites web pour la présentation de votre entreprise.",
    src: "/site-images/website-illustration.jpg",
    advantages: [
      "1 nom de domaine offert",
      "Plus de 5 pages",
      "1 à 2 adresses email professionnelles offertes",
      "Référencement naturel (SEO) de base",
      "Sécurité renforcée",
      "Design adapté à votre identité",
    ],
    price: "99 000 - 200 000 FCFA",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description:
      "Apps iOS & Android fluides et performantes développées avec React Native et Expo.",
    src: "/site-images/mobile-app-illustration.jpg",
    advantages: [
      "Design adapté à votre identité",
      "Apps iOS & Android avec une seule base de code",
      "Haute sécurité des données",
      "Publication sur les stores (App Store & Play Store)",
    ],
    price: "200 000 - 1 000 000 FCFA",
  },
  {
    icon: Globe,
    title: "Sites E-commerce",
    description:
      "Boutiques en ligne modernes, ultra-rapides et optimisées pour maximiser vos conversions.",
    src: "/site-images/e-commerce-illustration.jpg",
    advantages: [
      "1 nom de domaine offert",
      "Adresses emails professionnelles illimitées",
      "Système de paiement intégré (Mobile Money, Cartes)",
      "Gestion des stocks et commandes simplifiée",
      "Optimisation SEO avancée",
    ],
    price: "À partir de 250 000 FCFA",
  },
  {
    icon: Zap,
    title: "Refonte & Optimisation",
    description:
      "Amélioration des performances, du SEO, de l'accessibilité et modernisation de vos interfaces existantes.",
    src: "/site-images/seo-illustration.jpg",
    advantages: [
      "Audit complet de l'existant",
      "Amélioration drastique du temps de chargement",
      "Mise aux normes d'accessibilité",
      "Refonte de l'Expérience Utilisateur (UX)",
    ],
    price: "À partir de 80 000 FCFA",
  },
  {
    icon: Shield,
    title: "Ingénierie sur Mesure (SaaS, ERP)",
    description:
      "Conception architecturale de solutions digitales complexes, adaptées à la réalité du terrain et hautement scalables.",
    src: "/site-images/website-optimisation.jpg",
    advantages: [
      "Architecture cloud robuste",
      "Design System sur mesure",
      "Maintenance continue et monitoring pendant 1 an",
      "Formation complète de vos équipes",
    ],
    price: "Uniquement sur devis",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-pixel-bg relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-pixel-text">
            Nos <span className="text-pixel-primary">Services</span>
          </h2>
          <p className="text-xl text-pixel-muted max-w-2xl mx-auto leading-relaxed">
            Des solutions sur mesure pour transformer vos idées en produits
            digitaux performants, que vous soyez au Burkina Faso ou partout en
            Afrique.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group flex flex-col bg-pixel-surface border border-pixel-border/40 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:shadow-pixel-primary/5 hover:border-pixel-primary/30 transition-all duration-500"
              >
                {/* Zone Image en en-tête */}
                <div className="relative h-48 w-full overflow-hidden border-b border-pixel-border/20 bg-pixel-bg">
                  <Image
                    src={service.src}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  {/* Calque subtil pour intégrer l'image au thème */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pixel-surface to-transparent opacity-80" />

                  {/* Badge Icône chevauchant */}
                  <div className="absolute -bottom-6 left-6 w-14 h-14 rounded-2xl flex items-center justify-center bg-pixel-bg border border-pixel-border/60 text-pixel-primary shadow-lg z-10 group-hover:bg-pixel-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Corps de la carte */}
                <div className="p-6 md:p-8 pt-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-pixel-text mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-pixel-muted mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Boucle corrigée : Un seul <ul> qui mappe uniquement les <li> */}
                  <ul className="space-y-3.5 mb-10 flex-grow">
                    {service.advantages.map((advantage, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-pixel-text/80 font-medium"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 shrink-0 text-pixel-primary mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="leading-tight">{advantage}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Zone Prix et Action poussée en bas */}
                  <div className="mt-auto pt-6 border-t border-pixel-border/20">
                    <div className="text-lg font-black text-pixel-text mb-5">
                      {service.price}
                    </div>
                    <button className="w-full py-4 px-4 rounded-2xl bg-pixel-bg border border-pixel-border/60 text-pixel-text font-semibold hover:border-pixel-primary hover:text-pixel-primary transition-all duration-300 shadow-sm hover:shadow-md">
                      Discuter du projet
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
