// Au petit baz'AR — Source unique de contenu · V2

export const siteContent = {
  name:        "Au petit baz'AR",
  tagline:     "Le commerce du village. Ouvert, accueillant, indispensable.",
  locality:    "Saint-Front, Haute-Loire",
  address:     "2 montée du Fournil, 43550 Saint-Front",
  phone:       "04 71 56 32 06",
  phoneLink:   "tel:+33471563206",
  mapsLink:    "https://www.google.com/maps/dir/?api=1&destination=2+mont%C3%A9e+du+Fournil+43550+Saint-Front",
  facebookUrl: "",

  hours: [
    { day: "Mardi – Dimanche", slots: ["08 h 00 – 13 h 00", "16 h 00 – 19 h 00"] },
    { day: "Lundi", slots: ["Fermé"] },
  ],

  hero: {
    eyebrow: "Saint-Front · Haute-Loire",
    img: "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=1900&q=88&auto=format&fit=crop",
    title: ["Le village a", "son commerce."],
    subtitle:
      "Pain du matin, fromages du coin, tabac, presse, FDJ, terrasse… Tout ce qu'il faut, à deux pas de chez vous. Ouvert du mardi au dimanche.",
    cta1: { label: "Voir le chemin", href: "https://www.google.com/maps/dir/?api=1&destination=2+mont%C3%A9e+du+Fournil+43550+Saint-Front" },
    cta2: { label: "Nous appeler",   href: "tel:+33471563206" },
    cta3: { label: "Découvrir",      href: "#le-commerce" },
  },

  identity: {
    eyebrow: "Le cœur du village",
    title:   "Un endroit où l'on revient chaque matin.",
    img: "https://images.unsplash.com/photo-1543168256-418811576931?w=1000&q=85&auto=format&fit=crop",
    paras: [
      "Au petit baz'AR, c'est l'adresse qu'on finit toujours par donner aux nouveaux arrivants. Le pain qui sort tôt, le journal du jour, le fromage qu'on ne trouve pas ailleurs, et le café qu'on boit debout au comptoir avant de repartir travailler.",
      "Mais c'est surtout un lieu vivant. On y croise ses voisins, on y apprend ce qui se passe dans le village, on s'y arrête un peu plus longtemps que prévu. Parce qu'un commerce comme ça, ça ne se remplace pas.",
    ],
    quote: "On entre pour le pain. On reste pour la conversation.",
    badge: { line1: "Ouvert", line2: "Mar – Dim", line3: "8h · 13h  ·  16h · 19h" },
  },

  stats: [
    { value: "8 h",    label: "Ouverture chaque matin" },
    { value: "6j/7",   label: "Du mardi au dimanche" },
    { value: "1 seul", label: "Arrêt pour tout trouver" },
    { value: "100%",   label: "Produits locaux sélectionnés" },
  ],

  services: {
    eyebrow:  "Ce qu'on trouve ici",
    title:    "L'essentiel du quotidien, sous un même toit.",
    subtitle: "Pas besoin d'aller loin. Tout ce qui fait le quotidien du village est là.",
    items: [
      { icon: "🥖", label: "Pain & viennoiseries",  desc: "Pain frais livré chaque matin. Croissants, brioches et petites douceurs du jour." },
      { icon: "🧺", label: "Épicerie du quotidien",  desc: "Conserves, produits frais, épicerie fine — l'essentiel toujours en rayon." },
      { icon: "��", label: "Fromages & charcuterie", desc: "Une sélection soignée de producteurs locaux et régionaux." },
      { icon: "☕", label: "Café & terrasse",         desc: "Un verre, une pause, une discussion. La terrasse est là pour ça." },
      { icon: "📰", label: "Presse & tabac",          desc: "Journaux du matin, magazines et tous produits tabac." },
      { icon: "🎲", label: "FDJ",                     desc: "Jeux Française des Jeux, tickets à gratter, paris sportifs." },
      { icon: "🎁", label: "Paniers & cadeaux",       desc: "Paniers garnis de produits locaux — une belle idée cadeau d'ici." },
      { icon: "🏡", label: "Souvenirs du terroir",    desc: "Objets locaux, cartes postales, petits cadeaux ancrés dans le coin." },
    ],
  },

  terroir: {
    eyebrow: "Ce qui vient d'ici",
    title:   "La Haute-Loire dans chaque rayon.",
    text:    "On aime ce qui vient du coin. Fromages d'estive du Mézenc, charcuteries artisanales, miels de montagne, vins du Velay… En achetant ici, vous soutenez des gens du territoire, des savoir-faire qui méritent de durer.",
    bgImg:   "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format&fit=crop",
    cta: { label: "Venir découvrir", href: "https://www.google.com/maps/dir/?api=1&destination=2+mont%C3%A9e+du+Fournil+43550+Saint-Front" },
    producers: [
      { name: "Fromagerie du Mézenc",    label: "Fromages de montagne" },
      { name: "Charcuterie Bonnefoy",    label: "Spécialités locales" },
      { name: "Rucher des Sucs",         label: "Miels de Haute-Loire" },
      { name: "Cave Vignerons du Velay", label: "Vins & spiritueux" },
    ],
    imgs: [
      { src: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800&q=82&auto=format&fit=crop", alt: "Plateau de fromages artisanaux" },
      { src: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80&auto=format&fit=crop", alt: "Miel artisanal de montagne" },
      { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&auto=format&fit=crop", alt: "Pain de campagne artisanal" },
    ],
  },

  gallery: {
    eyebrow:  "L'ambiance du lieu",
    title:    "Venez voir.",
    subtitle: "Un village, un commerce, une atmosphère qu'on ne trouve qu'ici.",
    items: [
      { src: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1000&q=82&auto=format&fit=crop", alt: "L'intérieur du baz'AR",           wide: true  },
      { src: "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?w=700&q=80&auto=format&fit=crop",  alt: "Pain frais du matin",              wide: false },
      { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80&auto=format&fit=crop",    alt: "La terrasse du baz'AR",            wide: false },
      { src: "https://images.unsplash.com/photo-1506368083636-6defb67639a3?w=700&q=80&auto=format&fit=crop",  alt: "La campagne autour de Saint-Front", wide: false },
      { src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=700&q=80&auto=format&fit=crop",  alt: "Produits locaux en rayon",         wide: false },
    ],
  },

  infos: {
    eyebrow:  "Venir nous voir",
    title:    "On est là, presque tous les jours.",
    subtitle: "On vous attend du mardi au dimanche. Une adresse simple, une vraie boutique de village.",
  },

  footer: {
    tagline: "Un vrai commerce de village, au cœur de Saint-Front.",
    legal:   "© 2026 Au petit baz'AR · 2 montée du Fournil, 43550 Saint-Front",
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Au petit baz'AR",
  description: "Commerce multiservices de village à Saint-Front, Haute-Loire. Épicerie, pain, terroir, tabac, presse, FDJ, terrasse.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 montée du Fournil",
    addressLocality: "Saint-Front",
    postalCode: "43550",
    addressCountry: "FR",
  },
  telephone: "04 71 56 32 06",
  openingHours: ["Tu-Su 08:00-13:00", "Tu-Su 16:00-19:00"],
  url: "https://au-petit-bazar.vercel.app",
  geo: { "@type": "GeoCoordinates", latitude: 44.978, longitude: 3.848 },
  servesCuisine: "Épicerie fine, produits du terroir",
  priceRange: "€",
};
