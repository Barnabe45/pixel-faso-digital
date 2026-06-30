import Hero from "@/components/sections/Hero";
import Projets from "@/components/sections/Projets";
import Services from "@/components/sections/Services";
import { getDictionary } from "@/lib/dictionaries"; // Import du chargeur

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "fr" | "en" }>; // ⚠️ Type en Promise
}) {
  // Chargement du dictionnaire côté serveur
  const { locale } = await params; // ✅ On attend la résolution
  const dict = await getDictionary(locale);

  return (
    <>
      <main>
        {/* On passe uniquement la partie "hero" du dictionnaire au composant */}
        <Hero dict={dict.hero} />

        <Services dict={dict.services} />
        <Projets />
      </main>
    </>
  );
}
