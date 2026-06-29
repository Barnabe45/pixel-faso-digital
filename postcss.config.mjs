const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

module.exports = {
  theme: {
    extend: {
      colors: {
        pixel: {
          bg: "#FAFAFE", // Blanc pur avec une pointe de bleu/violet (très propre)
          surface: "#FFFFFF", // Blanc pur (pour détacher les cartes/navbar)
          text: "#2D004B", // Le violet très sombre de ton logo (remplace le noir)
          primary: "#FF0080", // Magenta vif (Boutons, liens importants, accents)
          muted: "#6B5B7B", // Violet grisé (Pour le texte secondaire)
          border: "#E2D9EC", // Violet très clair (Pour des bordures subtiles)
        },
      },
    },
  },
};

export default config;
