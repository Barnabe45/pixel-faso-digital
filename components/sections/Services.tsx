// app/components/sections/Services.tsx
import { Code2, Smartphone, Globe, Zap, Shield } from "lucide-react";
import Image from "next/image";

interface ServicesProps {
  dict: {
    title: string;
    title_highlight: string;
    subtitle: string;
    cta_button: string;
    items: Array<{
      title: string;
      description: string;
      advantages: string[];
      price: string;
      image: string;
    }>;
  };
}

// Mappage des icônes statiques (elles ne changent pas selon la langue)
const iconMap = {
  "Sites Vitrines": Code2,
  "Showcase Websites": Code2,
  "Applications Mobiles": Smartphone,
  "Mobile Applications": Smartphone,
  "Sites E-commerce": Globe,
  "E-commerce Websites": Globe,
  "Refonte & Optimisation": Zap,
  "Redesign & Optimization": Zap,
  "Ingénierie sur Mesure (SaaS, ERP)": Shield,
  "Custom Engineering (SaaS, ERP)": Shield,
};

export default function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-pixel-bg relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-pixel-text">
            {dict.title}{" "}
            <span className="text-pixel-primary">{dict.title_highlight}</span>
          </h2>
          <p className="text-xl text-pixel-muted max-w-2xl mx-auto leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {dict.items.map((service, index) => {
            // Récupère l'icône correspondante, ou Code2 par défaut
            const Icon =
              iconMap[service.title as keyof typeof iconMap] || Code2;

            return (
              <div
                key={index}
                className="group flex flex-col bg-pixel-surface border border-pixel-border/40 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:shadow-pixel-primary/5 hover:border-pixel-primary/30 transition-all duration-500"
              >
                {/* Zone Image en en-tête */}
                <div className="relative h-48 w-full overflow-hidden border-b border-pixel-border/20 bg-pixel-bg">
                  <Image
                    src={`/site-images/${service.image}`}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  {/* Calque subtil */}
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

                  {/* Avantages */}
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

                  {/* Zone Prix et Action */}
                  <div className="mt-auto pt-6 border-t border-pixel-border/20">
                    <div className="text-lg font-black text-pixel-text mb-5">
                      {service.price}
                    </div>
                    <button className="w-full py-4 px-4 rounded-2xl bg-pixel-bg border border-pixel-border/60 text-pixel-text font-semibold hover:border-pixel-primary hover:text-pixel-primary transition-all duration-300 shadow-sm hover:shadow-md">
                      {dict.cta_button}
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
