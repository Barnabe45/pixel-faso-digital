// app/projets/page.tsx

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Nom du Projet 1",
    category: "Web Application",
    description:
      "Description courte du projet. Problème résolu et technologies utilisées.",
    image: "/projects/project1.jpg",
    stack: ["Next.js", "Prisma", "Neon", "Tailwind"],
    link: "#",
  },
  {
    id: 2,
    title: "Nom du Projet 2",
    category: "Mobile App",
    description: "Application mobile React Native avec backend synchronisé.",
    image: "/projects/project2.jpg",
    stack: ["React Native", "Expo", "Prisma"],
    link: "#",
  },
];

export default function ProjetsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Tous mes Projets
            </h1>
            <p className="text-xl text-gray-600">
              Découvrez une sélection de mes dernières réalisations web et
              mobiles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white border border-gray-200 hover:border-[#FF8C00]/50 rounded-3xl overflow-hidden transition-all hover:shadow-xl"
              >
                <div className="h-64 bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1976D2]/10 to-[#FF8C00]/10">
                    <span className="text-6xl opacity-30">📸</span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-sm text-[#FF8C00] mb-2 font-medium">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    className="inline-block text-[#FF8C00] hover:underline font-medium"
                  >
                    Voir le cas d'étude →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
