// app/actions/auth.ts
"use server";

import bcrypt from "bcryptjs";
import { createSession, deleteSession } from "@/lib/auth-session";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

// 1. On définit la structure stricte de l'état renvoyé par l'action
export interface ActionState {
  error?: string;
}

// 2. On remplace 'any' par 'ActionState | null' (ou l'état initial choisi)
export async function loginAction(
  prevState: ActionState | null,
  formData: FormData,
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // 1. Validation basique des champs
  if (!email || !password) {
    return { error: "Veuillez remplir tous les champs." };
  }

  try {
    // 2. Recherche de l'administrateur dans la base de données
    const admin = await prisma.admin.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!admin) {
      // Message générique pour éviter de donner des indices aux attaquants
      return { error: "Identifiants incorrects." };
    }

    // 3. Vérification du mot de passe
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return { error: "Identifiants incorrects." };
    }

    // 4. Initialisation de la session sécurisée
    await createSession(
      admin.id,
      admin.email,
      admin.role as "SUPER_ADMIN" | "ADMIN",
    );
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    return { error: "Une erreur technique est survenue. Veuillez réessayer." };
  }

  // 5. Redirection en cas de succès (toujours en dehors du bloc try/catch)
  redirect("/admin/dashboard");
}

export async function logoutAction() {
  await deleteSession();
  redirect("/admin/login");
}
