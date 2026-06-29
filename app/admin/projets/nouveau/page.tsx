// app/admin/projets/nouveau/page.tsx
"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createProjectAction } from "@/actions/projects";
import { ArrowLeft, Loader2, UploadCloud } from "lucide-react";
import Link from "next/link";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex justify-center items-center py-4 px-4 rounded-2xl text-sm font-semibold text-white bg-pixel-primary hover:bg-opacity-95 focus:outline-none transition-all disabled:opacity-50 shadow-lg shadow-pixel-primary/20 mt-8"
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
          Création et Upload en cours...
        </>
      ) : (
        "Publier le projet"
      )}
    </button>
  );
}

export default function NewProjectPage() {
  const [state, formAction] = useActionState(createProjectAction, null);

  return (
    <div className="min-h-screen bg-pixel-bg text-pixel-text p-6 md:p-10 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* En-tête */}
        <Link
          href="/admin/dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium text-pixel-muted hover:text-pixel-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Retour au tableau de bord
        </Link>

        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          Nouveau Projet
        </h1>
        <p className="text-pixel-muted mb-10">
          Ajoutez une nouvelle réalisation à votre portfolio.
        </p>

        {/* Formulaire */}
        <div className="bg-pixel-surface border border-pixel-border/40 rounded-3xl p-6 md:p-10 shadow-xs">
          <form action={formAction} className="space-y-6">
            {state?.error && (
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-sm text-red-400 font-medium mb-6">
                {state.error}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              {/* Titre */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-pixel-text/80 mb-2">
                  Nom du projet *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="Ex: Premium Marketplace"
                  className="w-full px-4 py-3.5 bg-pixel-bg border border-pixel-border/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pixel-primary/20 focus:border-pixel-primary transition-all"
                />
              </div>

              {/* Type */}
              <div>
                <label className="block text-sm font-semibold text-pixel-text/80 mb-2">
                  Type de projet *
                </label>
                <select
                  name="type"
                  required
                  className="w-full px-4 py-3.5 bg-pixel-bg border border-pixel-border/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pixel-primary/20 focus:border-pixel-primary transition-all appearance-none"
                >
                  <option value="WEB">Application Web / Site Web</option>
                  <option value="MOBILE">Application Mobile</option>
                </select>
              </div>

              {/* Catégorie */}
              <div>
                <label className="block text-sm font-semibold text-pixel-text/80 mb-2">
                  Catégorie *
                </label>
                <input
                  type="text"
                  name="category"
                  required
                  placeholder="Ex: E-Commerce, SaaS, Vitrine"
                  className="w-full px-4 py-3.5 bg-pixel-bg border border-pixel-border/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pixel-primary/20 focus:border-pixel-primary transition-all"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-pixel-text/80 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  placeholder="Décrivez les fonctionnalités clés et l'objectif du projet..."
                  className="w-full px-4 py-3.5 bg-pixel-bg border border-pixel-border/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pixel-primary/20 focus:border-pixel-primary transition-all resize-none"
                />
              </div>

              {/* Technologies */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-pixel-text/80 mb-2">
                  Technologies utilisées
                </label>
                <input
                  type="text"
                  name="tech"
                  placeholder="Ex: Next.js, Prisma, Tailwind, Stripe (séparées par des virgules)"
                  className="w-full px-4 py-3.5 bg-pixel-bg border border-pixel-border/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pixel-primary/20 focus:border-pixel-primary transition-all"
                />
              </div>

              {/* URL en ligne */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-pixel-text/80 mb-2">
                  Lien vers le site ou le Store
                </label>
                <input
                  type="url"
                  name="liveUrl"
                  placeholder="https://mon-projet.com"
                  className="w-full px-4 py-3.5 bg-pixel-bg border border-pixel-border/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pixel-primary/20 focus:border-pixel-primary transition-all"
                />
              </div>
            </div>

            <hr className="border-pixel-border/30 my-8" />

            {/* Section Images */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold">Médias du projet</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Upload Desktop */}
                <div className="relative border-2 border-dashed border-pixel-border/60 rounded-2xl p-6 text-center hover:border-pixel-primary/50 transition-colors bg-pixel-bg/50">
                  <input
                    type="file"
                    name="coverDesktop"
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <UploadCloud className="w-8 h-8 mx-auto text-pixel-muted mb-2" />
                  <p className="text-sm font-medium">
                    Image Desktop (Optionnel)
                  </p>
                  <p className="text-xs text-pixel-muted mt-1">
                    PNG, JPG jusqu'à 4MB
                  </p>
                </div>

                {/* Upload Mobile */}
                <div className="relative border-2 border-dashed border-pixel-border/60 rounded-2xl p-6 text-center hover:border-pixel-primary/50 transition-colors bg-pixel-bg/50">
                  <input
                    type="file"
                    name="coverMobile"
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <UploadCloud className="w-8 h-8 mx-auto text-pixel-muted mb-2" />
                  <p className="text-sm font-medium">
                    Image Mobile (Optionnel)
                  </p>
                  <p className="text-xs text-pixel-muted mt-1">
                    Format vertical recommandé
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Checkbox */}
            <div className="flex items-center gap-3 pt-4">
              <input
                type="checkbox"
                name="isFeatured"
                id="isFeatured"
                defaultChecked
                className="w-5 h-5 rounded border-pixel-border/60 text-pixel-primary focus:ring-pixel-primary/20 bg-pixel-bg cursor-pointer"
              />
              <label
                htmlFor="isFeatured"
                className="text-sm font-medium cursor-pointer"
              >
                Mettre en vedette (Afficher sur la page d'accueil)
              </label>
            </div>

            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
}
