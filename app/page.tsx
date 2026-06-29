// app/page.tsx
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projets from "@/components/sections/Projets";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* SERVICES */}
        <Services />

        {/* SECTION PROJETS EN VEDETTE : Démonstration technique */}
        <Projets />
      </main>

      <Footer />
    </>
  );
}
