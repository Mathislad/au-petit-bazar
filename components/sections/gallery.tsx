"use client";

import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80&auto=format",
    alt: "Rayons d'une épicerie locale bien fournie",
    cols: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/3] lg:aspect-auto",
  },
  {
    src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80&auto=format",
    alt: "Pain frais et viennoiseries du matin",
    cols: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format",
    alt: "Ambiance chaleureuse d'un café de village",
    cols: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format",
    alt: "Paysage de campagne en Haute-Loire",
    cols: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format",
    alt: "Produits frais et locaux",
    cols: "",
    aspect: "aspect-[4/3]",
  },
];

export function GallerySection() {
  const { gallery } = siteContent;

  return (
    <section
      id="ambiance"
      className="section-pad"
      style={{ background: "var(--background)" }}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="mb-12 max-w-xl">
          <Reveal>
            <p
              className="mb-4 text-xs font-bold tracking-[0.22em] uppercase"
              style={{ fontFamily: "var(--font-sans)", color: "var(--accent)" }}
            >
              {gallery.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="mb-3 leading-[1.18]"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                color: "var(--foreground)",
              }}
            >
              {gallery.title}
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p style={{ fontFamily: "var(--font-sans)", color: "var(--muted)", fontSize: "1rem" }}>
              {gallery.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Grille galerie */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2 lg:gap-5">
          {GALLERY_ITEMS.map((item, i) => (
            <Reveal key={i} delay={0.06 * i} y={20}>
              <div
                className={`${item.cols} ${item.aspect} overflow-hidden rounded-sm group cursor-pointer`}
                style={{ border: "1px solid var(--line)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Note photos */}
        <Reveal delay={0.3}>
          <p
            className="mt-6 text-center text-xs italic"
            style={{ fontFamily: "var(--font-sans)", color: "var(--muted)", opacity: 0.65 }}
          >
            Photos à remplacer par vos propres visuels · Illustrations d&apos;ambiance
          </p>
        </Reveal>
      </div>
    </section>
  );
}
