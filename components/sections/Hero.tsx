// On définit l'interface pour que TypeScript reconnaisse notre dictionnaire
interface HeroProps {
  dict: {
    title_start: string;
    title_highlight: string;
    title_end: string;
    subtitle_strong: string;
    subtitle: string;
    btn_projects: string;
    btn_contact: string;
    slogan_start: string;
    slogan_end: string;
  };
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden grid-background">
      <div className="absolute inset-0 bg-pixel-bg/60 z-10"></div>
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-pixel-primary rounded-full blur-[140px] opacity-15 z-20"></div>
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-pixel-text rounded-full blur-[160px] opacity-10 z-20"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-30 w-full">
        <div className="max-w-4xl">
          {/* Utilisation des variables du dictionnaire */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-pixel-text">
            {dict.title_start}{" "}
            <span className="bg-gradient-to-r from-pixel-text via-pixel-primary to-pixel-text bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
              {dict.title_highlight}
            </span>{" "}
            {dict.title_end}
          </h1>

          <p className="text-lg md:text-xl text-pixel-muted mb-10 max-w-2xl leading-relaxed">
            <strong className="text-pixel-text font-semibold">
              {dict.subtitle_strong}
            </strong>
            {dict.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projets"
              className="bg-pixel-primary hover:bg-opacity-95 text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all shadow-md shadow-pixel-primary/20 hover:shadow-lg hover:shadow-pixel-primary/30 hover:-translate-y-0.5 active:scale-98"
            >
              {dict.btn_projects}
            </a>

            <a
              href="/contact"
              className="border border-pixel-border bg-white text-pixel-text hover:border-pixel-primary hover:bg-pixel-bg px-8 py-3.5 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5 active:scale-98"
            >
              {dict.btn_contact}
            </a>
          </div>

          <div className="mt-16 flex items-center gap-5">
            <span className="text-xl md:text-2xl font-bold text-pixel-text/40 tracking-wide uppercase text-xs">
              {dict.slogan_start}
            </span>
            <div className="h-px w-12 bg-pixel-border" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pixel-primary to-pixel-text bg-clip-text text-transparent">
              {dict.slogan_end}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
