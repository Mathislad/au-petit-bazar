// Au petit baz'AR — Source unique de contenu

export const siteContent = {
  name:        "Au petit baz'AR",
  tagline:     "Le commerce du village. Ouvert, accueillant, indispensable.",
  locality:    "Saint-Front, Haute-Loire",
  address:     "2 montée du Fournil, 43550 Saint-Front",
  phone:       "04 71 56 32 06",
  phoneLink:   "tel:+33471563206",
  mapsLink:    "https://www.google.com/maps/dir/?api=1&destination=2+mont%C3%A9e+du+Fournil+43550+Saint-Front",
  facebookUrl: "https://www.facebook.com/",

  hours: [
    { day: "Mardi – Dimanche", slots: ["08 h 00 – 13 h 00", "16 h 00 – 19 h 00"] },
    { day: "Lundi", slots: ["Fermé"] },
  ],

  hero: {
    eyebrow: "Saint-Front · Haute-Loire",
    img:     "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1800&q=88&auto=format&fit=crop",
    title:   ["Ici, on trouve", "de tout."],
    subtitle: "Épicerie du quotidien, produits du terroir, pain frais, tabac, presse, FDJ et terrasse. Un vrai commerce de village, au cœur de Saint-Front.",
    cta1:  { label: "Nous trouver", href: "https://www.google.com/maps/dir/?api=1&destination=2+mont%C3%A9e+du+Fournil+43550+Saint-Front" },
    cta2:  { label: "Appeler",      href: "tel:+33471563206" },
  },

  identity: {
    eyebrow: "Notre histoire",
    title:   "Plus qu'une épicerie — un endroit où il fait bon s'arrêter.",
    img:     "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1000&q=82&auto=format&fit=crop",
    paras: [
      "Au petit baz'AR est né d'une idée simple : que les habitants de Saint-Front puissent trouver l'essentiel sans parcourir des kilomètres. Pain du matin, journaux, tabac, fromages et charcuteries du coin, bouteille de vin local… tout est là, à deux pas de chez vous.",
      "Mais c'est surtout un lieu de vie. On y croise ses voisins, on prend des nouvelles du village, on s'attarde parfois autour d'un verre sur la terrasse. Un endroit rare, précieux, qui appartient à son territoire.",
    ],
    quote: "Le genre d'endroit où l'on entre pour acheter du pain et où l'on reste pour le plaisir.",
  },

  stats: [
    { value: "8 h",    label: "Ouverture chaque matin" },
    { value: "6j/7",   label: "Du mardi au dimanche" },
    { value: "100%",   label: "Produits locaux sélectionnés" },
    { value: "1 seul", label: "Arrêt pour tout trouver" },
  ],

  services: {
    eyebrow:  "Ce que vous trouverez",
    title:    "Tout ce dont le quotidien a besoin.",
    subtitle: "Un seul arrêt. Une vraie adresse de village.",
    items: [
      { icon: "🧺", label: "Épicerie",            desc: "L'essentiel du quotidien : frais, conserves, épicerie fine." },
      { icon: "🥖", label: "Pain & viennoiseries", desc: "Pain frais livré chaque matin. Croissants et petites douceurs." },
      { icon: "🧀", label: "Fromages & charcuterie", desc: "Sélection de producteurs locaux et régionaux." },
      { icon: "☕", label: "Terrasse & boissons",  desc: "Un café, un verre, une pause — la terrasse vous attend." },
      { icon: "📰", label: "Presse & tabac",       desc: "Journaux, magazines et tous produits tabac." },
      { icon: "🎲", label: "FDJ",                  desc: "Jeux Française des Jeux, tickets à gratter, paris." },
      { icon: "🎁", label: "Paniers garnis",        desc: "Compositions de produits locaux, idéales en cadeau." },
      { icon: "🏡", label: "Souvenirs & déco",      desc: "Objets locaux, cartes postales, petits cadeaux du terroir." },
    ],
  },

  terroir: {
    eyebrow: "Le meilleur d'ici",
    title:   "Des producteurs locaux, sélectionnés avec soin.",
    text:    "Dans les rayons du baz'AR, vous trouverez la Haute-Loire dans chaque panier. Fromages d'estive, charcuteries artisanales, miels de montagne, vins du Velay… Acheter ici, c'est soutenir le territoire.",
    bgImg:   "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1400&q=75&auto=format&fit=crop",
    producers: [
      { name: "Fromagerie du Mézenc",    label: "Fromages de montagne" },
      { name: "Charcuterie Bonnefoy",    label: "Spécialités locales" },
      { name: "Rucher des Sucs",         label: "Miels de Haute-Loire" },
      { name: "Cave Vignerons du Velay", label: "Vins & spiritueux" },
    ],
    imgs: [
      { src: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80&auto=format&fit=crop", alt: "Fromages artisanaux" },
      { src: "https://images.unsplash.com/photo-1558642891-54be180ea339?w=600&q=80&auto=format&fit=crop",   alt: "Miel de montagne" },
      { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&auto=format&fit=crop", alt: "Pain artisanal" },
    ],
  },

  gallery: {
    eyebrow:  "Le lieu en images",
    title:    "Venez voir par vous-même.",
    subtitle: "Un village, un commerce, une atmosphère.",
    items: [
      { src: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=900&q=80&auto=format&fit=crop", alt: "Rayon épicerie", wide: true },
      { src: "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?w=600&q=80&auto=format&fit=crop", alt: "Pain frais du matin", wide: false },
      { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&auto=format&fit=crop",   alt: "Terrasse conviviale", wide: false },
      { src: "https://images.unsplash.com/photo-1506368083636-6defb67639a3?w=600&q=80&auto=format&fit=crop", alt: "Campagne Haute-Loire", wide: false },
      { src: "https://images.unsplash.com/photo-1543168256-418811576931?w=600&q=80&auto=format&fit=crop",   alt: "Produits locaux en rayon", wide: false },
    ],
  },

  infos: {
    eyebrow:  "Infos pratiques",
    title:    "Venez nous rendre visite.",
    subtitle: "On est ouverts presque toute la semaine — et toujours contents de vous voir.",
  },

  footer: {
    tagline: "Le commerce du village qui fait du bien.",
    legal:   "© 2026 Au petit baz'AR · 2 montée du Fournil, 43550 Saint-Front",
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Au petit baz'AR",
  description: "Commerce multiservices de village à Saint-Front, Haute-Loire.",
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
};
