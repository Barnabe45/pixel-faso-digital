// prisma/seed.ts
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";

// 1. Chargement du .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootEnvPath = path.resolve(__dirname, "..", ".env");

try {
  process.loadEnvFile(rootEnvPath);
  console.log("🌱 [Seed] Fichier .env chargé avec succès depuis la racine.");
  console.log("🌱 [Seed] DATABASE_URL existe ?", !!process.env.DATABASE_URL);
} catch (error) {
  console.error("❌ [Seed] Impossible de charger le fichier .env :", error);
  process.exit(1);
}

async function main() {
  console.log("🌱 Début du peuplement de la base de données...");

  try {
    // Import dynamique de Prisma
    console.log("📦 Import de Prisma...");
    const { default: prisma } = await import("../lib/prisma");
    console.log("✅ Prisma importé avec succès");

    console.log("🔑 Hachage du mot de passe...");
    const hashedPassword = await bcrypt.hash("TonMotDePasseSecret123!", 12);
    console.log("✅ Mot de passe haché");

    const emailSuperAdmin = "superadmin@pixelfaso.com";
    console.log(`📧 Recherche/création de ${emailSuperAdmin}...`);

    const superAdmin = await prisma.admin.upsert({
      where: { email: emailSuperAdmin },
      update: {},
      create: {
        email: emailSuperAdmin,
        name: "Super Admin",
        password: hashedPassword,
        role: "SUPER_ADMIN",
      },
    });

    console.log(
      `✅ Super Admin configuré : ${superAdmin.email} (ID: ${superAdmin.id})`,
    );
    await prisma.$disconnect();
    console.log("✅ Déconnexion de Prisma");
  } catch (error) {
    console.error("❌ Erreur détaillée :", error);
    throw error;
  }
}

main()
  .then(() => {
    console.log("✅ Seed terminé avec succès !");
    process.exit(0);
  })
  .catch(async (e) => {
    console.error("❌ Erreur lors du seed :", e);
    // Essayer de déconnecter Prisma même en cas d'erreur
    try {
      const { default: prisma } = await import("../lib/prisma");
      await prisma.$disconnect();
    } catch (disconnectError) {
      console.error("Erreur lors de la déconnexion :", disconnectError);
    }
    process.exit(1);
  });
