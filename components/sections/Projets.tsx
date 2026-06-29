// app/components/sections/Projets.tsx
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Monitor,
  Smartphone,
  ExternalLink,
  Globe,
} from "lucide-react";
import prisma from "@/lib/prisma"; // Assurez-vous que ce chemin pointe vers votre instance Prisma

export default async function Projets() {
  // Récupération dynamique des projets mis en avant depuis la base de données
  const projects = await prisma.project.findMany({
    where: { isFeatured: true },
    orderBy: { createdAt: "desc" },
    take: 6, // Limiter aux 6 projets les plus récents
  });

  return (
    <section id="projets" className="py-24 bg-pixel-bg relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-pixel-text">
              Projets en <span className="text-pixel-primary">Vedette</span>
            </h2>
            <p className="text-xl text-pixel-muted max-w-xl">
              Une sélection de nos réalisations récentes, mêlant design soigné
              et architectures techniques robustes.
            </p>
          </div>
          <Link
            href="/projets"
            className="group/btn inline-flex items-center gap-2 text-pixel-primary font-semibold text-sm hover:text-pixel-primary/80 transition-colors mt-2 md:mt-0"
          >
            Voir tous les projets
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Message si aucun projet n'est encore en base de données */}
        {projects.length === 0 && (
          <div className="bg-pixel-surface border border-pixel-border/40 rounded-3xl p-12 text-center">
            <p className="text-pixel-muted">
              Les projets sont en cours de chargement...
            </p>
          </div>
        )}

        {/* Grille des projets dynamiques */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isMobileApp = project.type === "MOBILE";
            const Icon = isMobileApp ? Smartphone : Monitor;

            return (
              <div
                key={project.id}
                className="group bg-pixel-surface border border-pixel-border/40 hover:border-pixel-primary/30 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 shadow-xs hover:shadow-xl hover:shadow-pixel-primary/5 flex flex-col"
              >
                {/* Zone d'images superposées (Mockups) */}
                <div className="h-64 bg-pixel-text relative overflow-hidden flex items-end justify-center border-b border-pixel-border/20">
                  {/* Lueur d'arrière-plan */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pixel-primary/20 blur-[80px] rounded-full z-0 group-hover:bg-pixel-primary/30 transition-colors duration-500" />

                  {/* Badge Catégorie */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-30">
                    <span className="bg-black/40 backdrop-blur-md text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                      {project.category}
                    </span>
                    <Icon className="w-5 h-5 text-white/40 group-hover:text-pixel-primary transition-colors" />
                  </div>

                  {/* Image Desktop (en arrière) */}
                  {project.coverDesktop && (
                    <div
                      className={`absolute ${project.coverMobile ? "top-10 left-6 right-16 bottom-0 rounded-t-lg" : "inset-x-6 top-10 bottom-0 rounded-t-xl"} z-10 overflow-hidden border-t border-x border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]`}
                    >
                      <Image
                        src={project.coverDesktop}
                        alt={`${project.title} Desktop`}
                        fill
                        className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  )}

                  {/* Image Mobile (au premier plan, décalée) */}
                  {project.coverMobile && (
                    <div
                      className={`absolute bottom-0 ${isMobileApp ? "inset-x-0 mx-auto w-32 h-[90%]" : "right-6 w-24 md:w-28 h-[85%]"} z-20 rounded-t-[1.5rem] overflow-hidden border-t-4 border-x-4 border-black/80 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:-translate-y-2`}
                    >
                      <Image
                        src={project.coverMobile}
                        alt={`${project.title} Mobile`}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                </div>

                {/* Contenu textuel */}
                <div className="p-8 flex-1 flex flex-col justify-between bg-pixel-surface">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <h3 className="font-bold text-2xl text-pixel-text tracking-tight group-hover:text-pixel-primary transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 text-pixel-muted hover:text-pixel-primary transition-colors"
                          title="Visiter le site"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                    <p className="text-pixel-muted text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Liste des technologies */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-pixel-border/20 pt-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-pixel-bg border border-pixel-border/60 text-pixel-muted px-3 py-1.5 rounded-xl transition-colors group-hover:border-pixel-primary/20 group-hover:bg-pixel-primary/[0.02]"
                      >
                        {tech}
                      </span>
                    ))}
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
