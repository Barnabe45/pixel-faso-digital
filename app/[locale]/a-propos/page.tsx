// app/a-propos/page.tsx

import {
  Code2,
  Award,
  Users,
  MapPin,
  Zap,
  ShieldCheck,
  Globe,
} from "lucide-react";
import Image from "next/image";

export default function AProposPage() {
  const techStack = [
    "Next.js",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "Neon",
    "PostgreSQL",
    "Framer Motion",
    "Expo",
  ];

  return (
    <>
      <main className="pt-24 bg-pixel-bg text-pixel-text min-h-screen">
        {/* Section Hero Intitutionnelle */}
        <section className="py-20 border-b border-pixel-border/20 bg-pixel-surface/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                L'ingénierie au service de{" "}
                <span className="text-pixel-primary">vos ambitions</span>
              </h1>
              <p className="text-xl md:text-2xl text-pixel-muted leading-relaxed">
                Studio de développement indépendant spécialisé dans la
                conception d'architectures applicatives modernes et d'interfaces
                haute performance.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            {/* Contenu textuel */}
            <div className="md:col-span-7 space-y-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Notre Vision & Histoire
                </h2>
                <div className="space-y-6 text-base md:text-lg text-pixel-muted leading-relaxed">
                  <p>
                    Fondé avec la ferme intention d'apporter un standard
                    d'exécution technique irréprochable,
                    <strong className="text-pixel-text font-bold">
                      {" "}
                      Pixel Faso Digital
                    </strong>{" "}
                    conçoit des solutions applicatives taillées pour la
                    scalabilité et l'expérience utilisateur.
                  </p>
                  <p>
                    Spécialisé dans l'écosystème JavaScript/TypeScript moderne
                    (notamment Next.js et React Native) associé à des couches de
                    données robustes comme Prisma et des bases cloud
                    distribuées, chaque ligne de code est pensée pour la
                    rapidité et la pérennité.
                  </p>
                  <p>
                    De la modélisation de MVP agiles pour des startups au
                    déploiement de plateformes sur mesure pour des acteurs
                    locaux et internationaux, notre philosophie reste inchangée
                    : rigueur architecturale et exécution graphique soignée.
                  </p>
                </div>
              </div>

              {/* Section Valeurs sans émojis */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-8">
                  Piliers directeurs
                </h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="bg-pixel-surface border border-pixel-border/40 p-6 rounded-2xl">
                    <div className="text-pixel-primary mb-4">
                      <Zap size={24} />
                    </div>
                    <h3 className="font-bold text-base mb-2 tracking-tight">
                      Excellence Technique
                    </h3>
                    <p className="text-sm text-pixel-muted leading-relaxed">
                      Un code propre, documenté, hautement optimisé et simple à
                      maintenir.
                    </p>
                  </div>

                  <div className="bg-pixel-surface border border-pixel-border/40 p-6 rounded-2xl">
                    <div className="text-pixel-primary mb-4">
                      <ShieldCheck size={24} />
                    </div>
                    <h3 className="font-bold text-base mb-2 tracking-tight">
                      Transparence
                    </h3>
                    <p className="text-sm text-pixel-muted leading-relaxed">
                      Des cycles d&apos;itération courts, des revues claires et
                      un suivi rigoureux.
                    </p>
                  </div>

                  <div className="bg-pixel-surface border border-pixel-border/40 p-6 rounded-2xl">
                    <div className="text-pixel-primary mb-4">
                      <Globe size={24} />
                    </div>
                    <h3 className="font-bold text-base mb-2 tracking-tight">
                      Ancrage & Impact
                    </h3>
                    <p className="text-sm text-pixel-muted leading-relaxed">
                      Participer activement à la structuration de
                      l&apos;écosystème numérique africain.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fiche d'identité technique (Sidebar) */}
            <div className="md:col-span-5">
              <div className="bg-pixel-surface border border-pixel-border/40 rounded-3xl p-8 sticky top-28 shadow-xs">
                <div className="mb-8 text-center border-b border-pixel-border/20 pb-8">
                  {/* Monogramme élégant en pur CSS */}
                  <div className="w-20 h-20 mx-auto bg-pixel-text text-white rounded-2xl flex items-center justify-center font-black text-2xl tracking-tighter border border-white/5 mb-4 shadow-md">
                    P<span className="text-pixel-primary">F</span>
                  </div>
                  <h3 className="text-xl font-bold text-pixel-text tracking-tight">
                    Pixel Faso Digital
                  </h3>
                  <p className="text-sm text-pixel-muted mt-1 flex items-center justify-center gap-1.5">
                    <MapPin size={14} className="text-pixel-primary" />
                    Ouagadougou, Burkina Faso
                  </p>
                </div>

                {/* Données clés */}
                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <div className="text-pixel-primary mt-0.5 shrink-0">
                      <Code2 size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-pixel-muted">
                        Expertise
                      </p>
                      <p className="text-sm font-semibold mt-0.5">
                        Ingénierie Web, Mobile & SaaS
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="text-pixel-primary mt-0.5 shrink-0">
                      <Award size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-pixel-muted">
                        Expérience consolidée
                      </p>
                      <p className="text-sm font-semibold mt-0.5">
                        +4 ans d&apos;activité
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="text-pixel-primary mt-0.5 shrink-0">
                      <Image
                        src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23{/* pixel-primary color component */} font-medium' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/><circle cx='9' cy='7' r='4'/><path d='M22 21v-2a4 4 0 0 0-3-3.87'/><path d='M16 3.13a4 4 0 0 1 0 7.75'/></svg>"
                        alt=""
                        className="hidden"
                        width={80}
                        height={80}
                      />
                      <Users size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-pixel-muted">
                        Typologie clients
                      </p>
                      <p className="text-sm font-semibold mt-0.5">
                        Startups, PME & Éditeurs SaaS
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bloc d'Écosystème Applicatif */}
                <div className="mt-10 pt-8 border-t border-pixel-border/20">
                  <h4 className="font-bold text-sm tracking-tight text-pixel-text mb-4">
                    Stack Technologique Maîtrisée
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-pixel-bg border border-pixel-border/60 text-pixel-muted px-3 py-1.5 rounded-xl transition-colors hover:border-pixel-primary/20 hover:bg-pixel-primary/[0.01]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
