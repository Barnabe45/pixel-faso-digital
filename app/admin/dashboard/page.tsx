// app/admin/dashboard/page.tsx
import { cookies } from "next/headers";
import { decrypt } from "@/lib/auth-session";
import {
  LayoutDashboard,
  Layers,
  LogOut,
  ShieldCheck,
  ArrowUpRight,
  FoldersIcon,
  FolderIcon,
  Users,
} from "lucide-react";
import Link from "next/link";
import { logoutAction } from "@/actions/auth";
import prisma from "@/lib/prisma";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("pixel_session")?.value;
  const session = token ? await decrypt(token) : null;

  const adminCount = await prisma.admin.count().catch(() => 0);

  const projectCount = 12;
  const serviceCount = 6;

  return (
    <div className="min-h-screen bg-pixel-bg text-pixel-text flex font-sans">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-pixel-surface flex flex-col justify-between p-6 hidden md:flex border-r border-pixel-border/40">
        <div className="space-y-8">
          {/* Logo Monogramme d'agence */}
          <div className="flex items-center gap-3 px-2">
            <div className="h-9 w-9 rounded-xl bg-pixel-text text-white flex items-center justify-center font-black text-base border border-white/5 shadow-xs">
              P<span className="text-pixel-primary">F</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Pixel Faso</span>
          </div>

          {/* Navigation principale */}
          <nav className="space-y-1.5">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-3 bg-pixel-primary text-white rounded-2xl font-semibold transition-all shadow-xs"
            >
              <LayoutDashboard className="h-5 w-5" />
              Tableau de bord
            </Link>

            <button
              className="w-full flex items-center gap-3 px-4 py-3 text-pixel-muted hover:bg-pixel-bg hover:text-pixel-text rounded-2xl font-medium transition-all text-left opacity-60 hover:opacity-100"
              disabled
            >
              <FoldersIcon className="h-5 w-5" />
              Projets
              <span className="text-[10px] uppercase font-bold tracking-wider bg-pixel-bg border border-pixel-border/40 px-2 py-0.5 rounded-lg ml-auto">
                Bientôt
              </span>
            </button>

            <button
              className="w-full flex items-center gap-3 px-4 py-3 text-pixel-muted hover:bg-pixel-bg hover:text-pixel-text rounded-2xl font-medium transition-all text-left opacity-60 hover:opacity-100"
              disabled
            >
              <Layers className="h-5 w-5" />
              Services
              <span className="text-[10px] uppercase font-bold tracking-wider bg-pixel-bg border border-pixel-border/40 px-2 py-0.5 rounded-lg ml-auto">
                Bientôt
              </span>
            </button>
          </nav>
        </div>

        {/* Profil de l'utilisateur & Déconnexion */}
        <div className="border-t border-pixel-border/30 pt-6 space-y-4">
          <div className="px-2">
            <p className="text-sm font-bold truncate">{session?.email}</p>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-pixel-muted font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-pixel-primary" />
              {session?.role === "SUPER_ADMIN"
                ? "Super Administrateur"
                : "Administrateur"}
            </div>
          </div>

          <form action={logoutAction}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-2xl font-semibold transition-all text-sm"
            >
              <LogOut className="h-4 w-4" />
              Déconnexion
            </button>
          </form>
        </div>
      </aside>

      {/* --- ZONE PRINCIPALE --- */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-pixel-border/20 pb-6 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              Barké, Bienvenue ! 👋
            </h1>
            <p className="text-pixel-muted mt-1 text-sm md:text-base">
              Voici l'état actuel de la plateforme Pixel Faso Digital.
            </p>
          </div>

          {/* Déconnexion Mobile */}
          <form action={logoutAction} className="md:hidden">
            <button
              type="submit"
              className="flex items-center gap-2 text-sm font-semibold text-red-400 bg-red-500/10 px-4 py-2.5 rounded-xl"
            >
              <LogOut className="h-4 w-4" /> Déconnexion
            </button>
          </form>
        </header>

        {/* --- SECTION DES STATISTIQUES --- */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Carte Projets */}
          <div className="bg-pixel-surface p-6 border border-pixel-border/40 rounded-3xl shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-pixel-muted uppercase tracking-wider">
                Projets Réalisés
              </p>
              <p className="text-4xl font-black tracking-tight">
                {projectCount}
              </p>
            </div>
            <div className="h-12 w-12 rounded-2xl bg-pixel-primary/10 text-pixel-primary flex items-center justify-center">
              <FolderIcon className="h-5 w-5" />
            </div>
          </div>

          {/* Carte Services */}
          <div className="bg-pixel-surface p-6 border border-pixel-border/40 rounded-3xl shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-pixel-muted uppercase tracking-wider">
                Services Actifs
              </p>
              <p className="text-4xl font-black tracking-tight">
                {serviceCount}
              </p>
            </div>
            <div className="h-12 w-12 rounded-2xl bg-pixel-primary/10 text-pixel-primary flex items-center justify-center">
              <Layers className="h-5 w-5" />
            </div>
          </div>

          {/* Carte Administrateurs (Prisma) */}
          <div className="bg-pixel-surface p-6 border border-pixel-border/40 rounded-3xl shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-pixel-muted uppercase tracking-wider">
                Équipe Admin
              </p>
              <p className="text-4xl font-black tracking-tight">{adminCount}</p>
            </div>
            <div className="h-12 w-12 rounded-2xl bg-pixel-primary/10 text-pixel-primary flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
          </div>
        </section>

        {/* --- SECTION ACTIONS RAPIDES --- */}
        <section className="bg-pixel-surface border border-pixel-border/40 rounded-3xl shadow-xs p-6 md:p-8">
          <h2 className="text-xl font-bold tracking-tight mb-1">
            Actions de configuration rapides
          </h2>
          <p className="text-pixel-muted text-sm mb-6">
            Sélectionnez un module pour mettre à jour les contenus affichés sur
            la vitrine publique du site.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 border border-pixel-border/30 rounded-2xl bg-pixel-bg/40 flex flex-col justify-between group transition-all">
              <div>
                <h3 className="font-bold text-base group-hover:text-pixel-primary transition-colors">
                  Gestion des Projets
                </h3>
                <p className="text-sm text-pixel-muted mt-1 leading-relaxed">
                  Ajouter, modifier ou supprimer des études de cas de la section
                  Réalisations.
                </p>
              </div>
              <Link
                href="/admin/projets/nouveau"
                className="w-full flex items-center gap-3 px-4 py-3 text-pixel-muted hover:bg-pixel-surface hover:text-pixel-primary rounded-2xl font-medium transition-all text-left"
              >
                <FoldersIcon className="h-5 w-5" />
                Projets
              </Link>
            </div>

            <div className="p-5 border border-pixel-border/30 rounded-2xl bg-pixel-bg/40 flex flex-col justify-between group transition-all">
              <div>
                <h3 className="font-bold text-base group-hover:text-pixel-primary transition-colors">
                  Gestion des Services
                </h3>
                <p className="text-sm text-pixel-muted mt-1 leading-relaxed">
                  Ajuster les descriptions, les icônes et les technologies
                  associées à vos offres.
                </p>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-pixel-muted/60 flex items-center gap-1 mt-6 cursor-not-allowed">
                Bientôt disponible <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
