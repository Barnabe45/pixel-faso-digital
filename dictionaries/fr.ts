// 1. On définit une interface pour typer proprement ton dictionnaire (Optionnel mais recommandé)
interface Dictionary {
  hero: {
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
  navbar: {
    home: string;
    projects: string;
    services: string;
    about: string;
    contact: string;
    cta: string;
  };
  footer: {
    cta_title: string;
    cta_subtitle: string;
    cta_button: string;
    brand_description: string;
    location: string;
    copyright: string;
    // Ajoute ces lignes :
    nav_title: string;
    legal_title: string;
    links: {
      home: string;
      services: string;
      projects: string;
      blog: string;
      about: string;
      contact: string;
      legal: string;
    };
  };

  services: {
    title: string;
    title_highlight: string;
    subtitle: string;
    cta_button: string;
    items: Array<{
      title: string;
      description: string;
      advantages: string[];
      price: string;
      image: string; // ← Nouveau champ
    }>;
  };
}

// 2. On assigne l'objet à une variable nommée
const fr: Dictionary = {
  hero: {
    title_start: "Création de sites web et apps",
    title_highlight: "performantes",
    title_end: "en Afrique",
    subtitle_strong: "Au Burkina Faso et partout en Afrique",
    subtitle:
      ", nous concevons des écosystèmes internet, boutiques E-commerce et applications mobiles sur-mesure pour propulser votre activité.",
    btn_projects: "Voir nos projets",
    btn_contact: "Lancer mon projet",
    slogan_start: "Votre vision.",
    slogan_end: "Notre code.",
  },
  navbar: {
    home: "Accueil",
    projects: "Projets",
    services: "Services",
    about: "À propos",
    contact: "Contact",
    cta: "Lancer un projet",
  },
  footer: {
    cta_title: "Prêt à donner vie à votre projet ?",
    cta_subtitle:
      "Disponible pour du freelance, du remote ou une opportunité en entreprise.",
    cta_button: "Discutons-en",
    brand_description:
      "Développeur Full Stack spécialisé dans la conception d'applications Next.js, React Native et d'architectures modernes avec Prisma. Basé à Ouagadougou, disponible en remote partout dans le monde.",
    location: "Ouagadougou, Burkina Faso",
    copyright: "Tous droits réservés.",
    nav_title: "Navigation",
    legal_title: "Légal",
    links: {
      home: "Accueil",
      services: "Services",
      projects: "Projets",
      blog: "Blog",
      about: "À propos",
      contact: "Contact",
      legal: "Mentions légales",
    },
  },

  services: {
    title: "Nos",
    title_highlight: "Services",
    subtitle:
      "Des solutions sur mesure pour transformer vos idées en produits digitaux performants, que vous soyez au Burkina Faso ou partout en Afrique.",
    cta_button: "Discuter du projet",
    items: [
      {
        title: "Sites Vitrines",
        description:
          "Sites vitrines, landing pages, sites web pour la présentation de votre entreprise.",
        advantages: [
          "1 nom de domaine offert",
          "Plus de 5 pages",
          "1 à 2 adresses email professionnelles offertes",
          "Référencement naturel (SEO) de base",
          "Sécurité renforcée",
          "Design adapté à votre identité",
        ],
        price: "99 000 - 200 000 FCFA",
        image: "website-illustration.jpg",
      },
      {
        title: "Applications Mobiles",
        description:
          "Apps iOS & Android fluides et performantes développées avec React Native et Expo.",
        advantages: [
          "Design adapté à votre identité",
          "Apps iOS & Android avec une seule base de code",
          "Haute sécurité des données",
          "Publication sur les stores (App Store & Play Store)",
        ],
        price: "200 000 - 1 000 000 FCFA",
        image: "mobile-app-illustration.jpg",
      },
      {
        title: "Sites E-commerce",
        description:
          "Boutiques en ligne modernes, ultra-rapides et optimisées pour maximiser vos conversions.",
        advantages: [
          "1 nom de domaine offert",
          "Adresses emails professionnelles illimitées",
          "Système de paiement intégré (Mobile Money, Cartes)",
          "Gestion des stocks et commandes simplifiée",
          "Optimisation SEO avancée",
        ],
        price: "À partir de 250 000 FCFA",
        image: "e-commerce-illustration.jpg",
      },
      {
        title: "Refonte & Optimisation",
        description:
          "Amélioration des performances, du SEO, de l'accessibilité et modernisation de vos interfaces existantes.",
        advantages: [
          "Audit complet de l'existant",
          "Amélioration drastique du temps de chargement",
          "Mise aux normes d'accessibilité",
          "Refonte de l'Expérience Utilisateur (UX)",
        ],
        price: "À partir de 80 000 FCFA",
        image: "seo-illustration.jpg",
      },
      {
        title: "Ingénierie sur Mesure (SaaS, ERP)",
        description:
          "Conception architecturale de solutions digitales complexes, adaptées à la réalité du terrain et hautement scalables.",
        advantages: [
          "Architecture cloud robuste",
          "Design System sur mesure",
          "Maintenance continue et monitoring pendant 1 an",
          "Formation complète de vos équipes",
        ],
        price: "Uniquement sur devis",
        image: "website-optimisation.jpg",
      },
    ],
  },
};

// 3. On exporte la variable
export default fr;
