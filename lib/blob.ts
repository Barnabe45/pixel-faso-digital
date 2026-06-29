// app/lib/blob.ts
import { put } from "@vercel/blob";
import { nanoid } from "nanoid";

export async function uploadToBlob(file: File, folder: string = "projects") {
  try {
    const fileExtension = file.name.split(".").pop() || "jpg";
    const uniqueFileName = `${folder}/${nanoid(16)}.${fileExtension}`;

    const { url } = await put(uniqueFileName, file, {
      access: "public",
      addRandomSuffix: false,
    });

    console.log("✅ Image uploadée :", url);
    return url;
  } catch (error) {
    console.error("❌ Erreur upload :", error);
    throw new Error("Impossible d'uploader l'image");
  }
}
