// ═══════════════════════════════════════════════════════
//  Au petit baz'AR — Source unique de contenu
// ═══════════════════════════════════════════════════════

export const siteContent = {
  // ── Identité ──────────────────────────────────────────
  name:        "Au petit baz'AR",
  tagline:     "Au cœur du village, tout ce dont vous avez besoin.",
  locality:    "Saint-Front, Haute-Loire",
  address:     "2 montée du Fournil, 43550 Saint-Front",
  phone:       "04 71 56 32 06",
  phoneLink:   "tel:+33471563206",
  mapsLink:    "https://www.google.com/maps/dir/?api=1&destination=2+mont%C3%A9e+du+Fournil+43550+Saint-Front",
  facebookUrl: "https://www.facebook.com/",

  // ── Horaires ──────────────────────────────────────────
  hours: [
    { day: "Mardi – Dimanche", slots: ["08 h 00 – 13 h 00", "16 h 00 – 19 h 00"] },
    { day: "Lundi", slots: ["Fermé"] },
  ],

  // ── Hero ──────────────────────────────────────────────
  hero: {
    eyebrow:    "Saint-Front · Haute-Loire",
    title:      "Ici, on trouve de tout.\nEt on prend le temps.",
    subtitle:   "Épicerie, produits du terroir, pain frais, tabac, presse, FDJ et bien plus encore. Un commerce de village comme il en existe peu — chaleureux, pratique et ancré dans son territoire.",
    cta1Label:  "Nous trouver",
    cta1Href:   "https://www.google.com/maps/dir/?api=1&destination=2+mont%C3%A9e+du+Fournil+43550+Saint-Front",
    cta2Label:  "Appeler",
    cta2Href:   "tel:+33471563206",
  },

  // ── Identité / section 2 ──────────────────────────────
  identity: {
    eyebrow:  "Notre histoire",
    title:    "Plus qu'une épicerie — un endroit où il fait bon s'arrêter.",
    paragraphs: [
      "Au petit baz'AR est né d'une idée simple : que les habitants de Saint-Front puissent trouver l'essentiel sans parcourir des kilomètres. Pain du matin, journaux, tabac, fromages et charcuteries du coin, bouteille de vin local… tout est là, à deux pas.",
      "Mais c'est surtout un lieu de vie. On y croise ses voisins, on prend des nouvelles du village, on s'attarde parfois autour d'un verre sur la terrasse. Un endroit rare, précieux, qui appartient à son territoire.",
    ],
    quote:      "\"Le genre d'endroit où l'on entre pour acheter du pain et où l'on reste pour le plaisir.\"",
  },

  // ── Services ──────────────────────────────────────────
  services: {
    eyebrow: "Ce que vous trouverez",
    title:   "Tout ce dont le quotidien a besoin.",
    subtitle: "Un seul arrêt. Une vraie adresse de village.",
    items: [
      {
        icon: "🧺",
        label: "Épicerie",
        desc: "L'essentiel du quotidien, produits frais, conserves et épicerie fine.",
      },
      {
        icon: "🌾",
        label: "Produits locaux",
        desc: "Fromages, charcuteries, miel, confitures et vins de la région.",
      },
      {
        icon: "🥖",
        label: "Pain & viennoiseries",
        desc: "Pain frais chaque matin, croissants et petites gourmandises.",
      },
      {
        icon: "☕",
        label: "Terrasse & boissons",
        desc: "Un café, un verre entre amis — la terrasse vous attend.",
      },
      {
        icon: "📰",
        label: "Presse & tabac",
        desc: "Journaux, magazines, tabac et accessoires.",
      },
      {
        icon: "🎲",
        label: "FDJ & services",
        desc: "Jeux de la Française des Jeux et petits services du quotidien.",
      },
      {
        icon: "🧀",
        label: "Paniers garnis",
        desc: "Idées cadeaux composées de produits du terroir, sur commande.",
      },
      {
        icon: "🏡",
        label: "Souvenirs & déco",
        desc: "Petits objets locaux, cartes postales et souvenirs de Haute-Loire.",
      },
    ],
  },

  // ── Terroir ───────────────────────────────────────────
  terroir: {
    eyebrow: "Le meilleur d'ici",
    title:   "Des producteurs locaux, sélectionnés avec soin.",
    subtitle: "Parce qu'un bon produit, ça se mérite — et ça se partage.",
    text:    "Dans les rayons d'Au petit baz'AR, vous trouverez la Haute-Loire dans chaque panier. Fromages d'estive, charcuteries artisanales, miels de montagne, vins de la Loire… les producteurs du coin font confiance au magasin pour mettre leurs savoir-faire en valeur. Acheter ici, c'est soutenir le territoire.",
    producers: [
      { name: "Fromagerie du Mézenc",   label: "Fromages de montagne" },
      { name: "Charcuterie Bonnefoy",   label: "Spécialités locales" },
      { name: "Rucher des Sucs",        label: "Miels de Haute-Loire" },
      { name: "Cave Vignerons du Velay", label: "Vins & spiritueux" },
    ],
  },

  // ── Galerie captions ──────────────────────────────────
  gallery: {
    eyebrow: "L'ambiance du lieu",
    title:   "Venez voir par vous-même.",
    subtitle: "Un village, un commerce, une atmosphère.",
  },

  // ── Infos pratiques ───────────────────────────────────
  infos: {
    eyebrow: "Infos pratiques",
    title:   "Venez nous rendre visite.",
    subtitle: "On est ouverts presque toute la semaine — et toujours contents de vous voir.",
  },

  // ── Footer ────────────────────────────────────────────
  footer: {
    tagline: "Le commerce du village qui fait du bien.",
    legal:   "© 2026 Au petit baz'AR · Saint-Front · Mention légale à compléter",
  },
};

// ── JSON-LD LocalBusiness ──────────────────────────────
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteContent.name,
  description: "Commerce multiservices de village : épicerie, produits locaux, pain, tabac, presse, FDJ, terrasse et paniers garnis.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 montée du Fournil",
    addressLocality: "Saint-Front",
    postalCode: "43550",
    addressCountry: "FR",
  },
  telephone: siteContent.phone,
  openingHours: ["Tu-Su 08:00-13:00", "Tu-Su 16:00-19:00"],
  url: "https://au-petit-bazar.vercel.app",
  image: "https://au-petit-bazar.vercel.app/images/hero/commerce.jpg",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.978,
    longitude: 3.848,
  },
};
