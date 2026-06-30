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
      image: string;
    }>;
  };
}

// 2. On assigne l'objet à une variable nommée
const en: Dictionary = {
  hero: {
    title_start: "Building high-performance",
    title_highlight: "websites & apps",
    title_end: "across Africa",
    subtitle_strong: "In Burkina Faso and across Africa",
    subtitle:
      ", we design custom web ecosystems, E-commerce stores, and mobile applications to scale your business.",
    btn_projects: "View our work",
    btn_contact: "Start a project",
    slogan_start: "Your vision.",
    slogan_end: "Our code.",
  },
  navbar: {
    home: "Home",
    projects: "Work",
    services: "Services",
    about: "About",
    contact: "Contact",
    cta: "Start a project",
  },
  footer: {
    cta_title: "Ready to bring your project to life?",
    cta_subtitle:
      "Available for freelance, remote work, or enterprise opportunities.",
    cta_button: "Let's discuss",
    brand_description:
      "Full Stack Developer specialized in building modern web and mobile applications with Next.js, React Native, and Prisma. Based in Ouagadougou, available for remote work worldwide.",
    location: "Ouagadougou, Burkina Faso",
    copyright: "All rights reserved.",
    nav_title: "Navigation",
    legal_title: "Legal",
    links: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      blog: "Blog",
      about: "About",
      contact: "Contact",
      legal: "Legal Notice",
    },
  },
  services: {
    title: "Our",
    title_highlight: "Services",
    subtitle:
      "Custom solutions to transform your ideas into high-performance digital products, whether you're in Burkina Faso or anywhere in Africa.",
    cta_button: "Discuss the project",
    items: [
      {
        title: "Showcase Websites",
        description:
          "Showcase websites, landing pages, and corporate websites to present your business.",
        advantages: [
          "1 free domain name",
          "More than 5 pages",
          "1 to 2 free professional email addresses",
          "Basic SEO optimization",
          "Enhanced security",
          "Design tailored to your identity",
        ],
        price: "99,000 - 200,000 FCFA",
        image: "website-illustration.jpg",
      },
      {
        title: "Mobile Applications",
        description:
          "Smooth and performant iOS & Android apps built with React Native and Expo.",
        advantages: [
          "Design tailored to your identity",
          "iOS & Android apps with a single codebase",
          "High data security",
          "App Store & Play Store publication",
        ],
        price: "200,000 - 1,000,000 FCFA",
        image: "mobile-app-illustration.jpg",
      },
      {
        title: "E-commerce Websites",
        description:
          "Modern, ultra-fast online stores optimized to maximize your conversions.",
        advantages: [
          "1 free domain name",
          "Unlimited professional email addresses",
          "Integrated payment system (Mobile Money, Cards)",
          "Simplified inventory and order management",
          "Advanced SEO optimization",
        ],
        price: "From 250,000 FCFA",
        image: "e-commerce-illustration.jpg",
      },
      {
        title: "Redesign & Optimization",
        description:
          "Performance, SEO, accessibility improvements and modernization of your existing interfaces.",
        advantages: [
          "Complete audit of existing systems",
          "Dramatic loading time improvement",
          "Accessibility compliance",
          "User Experience (UX) redesign",
        ],
        price: "From 80,000 FCFA",
        image: "seo-illustration.jpg",
      },
      {
        title: "Custom Engineering (SaaS, ERP)",
        description:
          "Architectural design of complex digital solutions, adapted to the ground reality and highly scalable.",
        advantages: [
          "Robust cloud architecture",
          "Custom Design System",
          "Continuous maintenance and monitoring for 1 year",
          "Complete training for your teams",
        ],
        price: "By quote only",
        image: "website-optimisation.jpg",
      },
    ],
  },
};
export default en;
