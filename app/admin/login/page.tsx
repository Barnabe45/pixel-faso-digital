// app/admin/login/page.tsx
"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Lock, Mail, Loader2 } from "lucide-react";
import Image from "next/image";
import { loginAction } from "@/actions/auth";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex justify-center items-center py-4 px-4 rounded-2xl text-sm font-semibold text-white bg-pixel-primary hover:bg-opacity-95 focus:outline-none focus:ring-2 focus:ring-pixel-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-pixel-primary/10"
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
          Connexion en cours...
        </>
      ) : (
        "Se connecter"
      )}
    </button>
  );
}

export default function LoginPage() {
  const [state, formAction] = useActionState(loginAction, null);

  return (
    <div className="min-h-screen bg-pixel-bg text-pixel-text flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto w-full max-w-md">
        {/* Logo de l'agence */}
        <div className="flex justify-center mb-6">
          <Image
            src="/site-images/pixelfaso-original.svg"
            alt="Pixel Faso Digital"
            width={180}
            height={50}
            priority
            className="h-20 w-auto object-contain"
          />
        </div>
        <h2 className="text-center text-3xl font-extrabold tracking-tight">
          Espace Administration
        </h2>
        <p className="mt-2 text-center text-sm text-pixel-muted">
          Identifiez-vous pour gérer la plateforme
        </p>
      </div>

      <div className="mt-8 sm:mx-auto w-full max-w-md">
        <div className="bg-pixel-surface py-8 px-6 border border-pixel-border/40 rounded-3xl shadow-xs sm:px-10">
          <form action={formAction} className="space-y-6">
            {state?.error && (
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-sm text-red-400 font-medium">
                {state.error}
              </div>
            )}

            {/* Champ Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-pixel-text/80 mb-2"
              >
                Adresse Email
              </label>
              <div className="relative rounded-2xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-pixel-muted/60">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="admin@pixelfaso.com"
                  className="block w-full pl-11 pr-4 py-3.5 bg-pixel-bg border border-pixel-border/60 rounded-2xl text-pixel-text placeholder:text-pixel-muted/40 focus:outline-none focus:ring-2 focus:ring-pixel-primary/10 focus:border-pixel-primary sm:text-sm transition-all"
                />
              </div>
            </div>

            {/* Champ Mot de passe */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-pixel-text/80 mb-2"
              >
                Mot de passe
              </label>
              <div className="relative rounded-2xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-pixel-muted/60">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className="block w-full pl-11 pr-4 py-3.5 bg-pixel-bg border border-pixel-border/60 rounded-2xl text-pixel-text placeholder:text-pixel-muted/40 focus:outline-none focus:ring-2 focus:ring-pixel-primary/10 focus:border-pixel-primary sm:text-sm transition-all"
                />
              </div>
            </div>

            <div className="pt-2">
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
