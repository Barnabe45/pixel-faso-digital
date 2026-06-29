// app/actions/projects.ts
"use server";

import prisma from "@/lib/prisma";
import { uploadToBlob } from "@/lib/blob";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export interface ProjectActionState {
  error?: string;
  success?: boolean;
}

export async function createProjectAction(
  prevState: ProjectActionState | null,
  formData: FormData
) {
  try {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const type = formData.get("type") as "WEB" | "MOBILE";
    const category = formData.get("category") as string;
    const techString = formData.get("tech") as string;
    const liveUrl = formData.get("liveUrl") as string;
    const isFeatured = formData.get("isFeatured") === "on";

    const coverDesktop = formData.get("coverDesktop") as File | null;
    const coverMobile = formData.get("coverMobile") as File | null;

    if (!title || !description || !category) {
      return { error: "Veuillez remplir tous les champs obligatoires." };
    }

    // Traitement des technologies (séparées par des virgules)
    const techArray = techString
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    // Upload des images vers Vercel Blob si elles existent
    let coverDesktopUrl = null;
    let coverMobileUrl = null;

    if (coverDesktop && coverDesktop.size > 0) {
      coverDesktopUrl = await uploadToBlob(coverDesktop, "projects/desktop");
    }

    if (coverMobile && coverMobile.size > 0) {
      coverMobileUrl = await uploadToBlob(coverMobile, "projects/mobile");
    }

    // Insertion dans la base de données
    await prisma.project.create({
      data: {
        title,
        description,
        type,
        category,
        tech: techArray,
        liveUrl: liveUrl || null,
        isFeatured,
        coverDesktop: coverDesktopUrl,
        coverMobile: coverMobileUrl,
      },
    });

  } catch (error) {
    console.error("Erreur création projet:", error);
    return { error: "Une erreur est survenue lors de la création du projet." };
  }

  // Rafraîchir le cache de la page d'accueil et rediriger
  revalidatePath("/#projets");
  redirect("/admin/dashboard");
}