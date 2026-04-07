"use client";
import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";

export function GallerySection() {
  const { gallery } = siteContent;
  return (
    <section id="galerie" className="section" style={{ background: "var(--bg)" }}>
      <div className="wrapper">

        {/* ── En-tête ── */}
        <div className="mb-12 max-w-lg">
          <Reveal><p className="t-eyebrow mb-5">{gallery.eyebrow}</p></Reveal>
          <Reveal delay={0.08}>
            <h2 className="t-h2 mb-4" style={{ color: "var(--ink)" }}>{gallery.title}</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="t-lead">{gallery.subtitle}</p>
          </Reveal>
        </div>

        {/* ── Grille photos ── */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {gallery.items.map((item, i) => (
            <Reveal key={i} delay={0.05 * i} y={16}>
              <div
                className={`${item.wide ? "lg:col-span-2 lg:row-span-2" : ""} overflow-hidden group`}
                style={{
                  aspectRatio: item.wide ? "16/10" : "4/3",
                  borderRadius: "4px",
                  border: "1px solid var(--line)",
                  position: "relative",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Overlay au hover très subtil */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "rgba(35,26,14,0.12)" }}
                />
                {/* Caption alt texte au hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 px-3 py-2"
                  style={{ background: "rgba(35,26,14,0.72)" }}
                >
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.7rem", color: "rgba(247,242,233,0.7)", letterSpacing: "0.06em" }}>
                    {item.alt}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── CTA bas ── */}
        <Reveal delay={0.32}>
          <div className="mt-12 text-center">
            <p className="t-small italic mb-4" style={{ color: "var(--ink-faint)" }}>
              Un aperçu — venez découvrir le reste sur place.
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=2+mont%C3%A9e+du+Fournil+43550+Saint-Front"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Nous trouver →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
