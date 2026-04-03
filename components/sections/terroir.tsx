"use client";

import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";
import { IconLeaf } from "@/components/ui/icons";

export function TerroirSection() {
  const { terroir } = siteContent;

  return (
    <section
      id="terroir"
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--surface-dark)" }}
    >
      {/* ── Fond image en overlay ── */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1506368083636-6defb67639a3?w=1400&q=70&auto=format"
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(30,20,8,0.97) 0%, rgba(30,20,8,0.85) 60%, rgba(107,124,90,0.3) 100%)" }} />
      </div>
      <div className="grain-overlay absolute inset-0 z-[1] opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 items-center">

          {/* ── Texte ── */}
          <div>
            <Reveal delay={0}>
              <div className="flex items-center gap-3 mb-4">
                <IconLeaf className="w-4 h-4 text-[#6b7c5a]" />
                <p
                  className="text-xs font-bold tracking-[0.22em] uppercase"
                  style={{ fontFamily: "var(--font-sans)", color: "#6b7c5a" }}
                >
                  {terroir.eyebrow}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="mb-6 leading-[1.18] text-white"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                }}
              >
                {terroir.title}
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mb-6 h-[2px] w-12 rounded-full" style={{ background: "#c07941" }} />
            </Reveal>
            <Reveal delay={0.22}>
              <p
                className="leading-relaxed mb-10"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.02rem",
                  color: "rgba(248,244,238,0.72)",
                }}
              >
                {terroir.text}
              </p>
            </Reveal>

            {/* Producteurs */}
            <div className="grid grid-cols-2 gap-3">
              {terroir.producers.map((p, i) => (
                <Reveal key={i} delay={0.3 + i * 0.08} y={16}>
                  <div
                    className="rounded-sm p-4"
                    style={{
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <p
                      className="font-bold mb-1 text-white text-sm leading-tight"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {p.name}
                    </p>
                    <p
                      className="text-[11px] font-medium tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-sans)", color: "#c07941", opacity: 0.8 }}
                    >
                      {p.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── Images produits ── */}
          <Reveal delay={0.25} y={40}>
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  src: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80&auto=format",
                  alt: "Fromages du terroir",
                  span: "col-span-2",
                  aspect: "aspect-[16/9]",
                },
                {
                  src: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=600&q=80&auto=format",
                  alt: "Charcuteries artisanales",
                  span: "",
                  aspect: "aspect-square",
                },
                {
                  src: "https://images.unsplash.com/photo-1558642891-54be180ea339?w=600&q=80&auto=format",
                  alt: "Miels de Haute-Loire",
                  span: "",
                  aspect: "aspect-square",
                },
              ].map((img, i) => (
                <div key={i} className={`${img.span} ${img.aspect} overflow-hidden rounded-sm`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
