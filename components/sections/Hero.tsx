export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden grid-background">
      {/* Overlay doux pour atténuer la grille */}
      <div className="absolute inset-0 bg-pixel-bg/60 z-10"></div>

      {/* Ambiance lumineuse de fond (Couleurs de la marque réajustées) */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-pixel-primary rounded-full blur-[140px] opacity-15 z-20"></div>
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-pixel-text rounded-full blur-[160px] opacity-10 z-20"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-30 w-full">
        <div className="max-w-4xl">
          {/* H1 principal avec dégradé harmonisé */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-pixel-text">
            Création de sites web et apps{" "}
            <span className="bg-gradient-to-r from-pixel-text via-pixel-primary to-pixel-text bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
              performantes
            </span>{" "}
            en Afrique
          </h1>

          {/* Sous-titre */}
          <p className="text-lg md:text-xl text-pixel-muted mb-10 max-w-2xl leading-relaxed">
            <strong className="text-pixel-text font-semibold">
              Au Burkina Faso et partout en Afrique
            </strong>
            , nous concevons des écosystèmes internet, boutiques E-commerce et
            applications mobiles sur-mesure pour propulser votre activité.
          </p>

          {/* Boutons d'action épurés */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projets"
              className="bg-pixel-primary hover:bg-opacity-95 text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all shadow-md shadow-pixel-primary/20 hover:shadow-lg hover:shadow-pixel-primary/30 hover:-translate-y-0.5 active:scale-98"
            >
              Voir nos projets
            </a>

            <a
              href="/contact"
              className="border border-pixel-border bg-white text-pixel-text hover:border-pixel-primary hover:bg-pixel-bg px-8 py-3.5 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5 active:scale-98"
            >
              Lancer mon projet
            </a>
          </div>

          {/* Slogan revisité */}
          <div className="mt-16 flex items-center gap-5">
            <span className="text-xl md:text-2xl font-bold text-pixel-text/40 tracking-wide uppercase text-xs">
              Votre vision.
            </span>
            <div className="h-px w-12 bg-pixel-border" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pixel-primary to-pixel-text bg-clip-text text-transparent">
              Notre code.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
