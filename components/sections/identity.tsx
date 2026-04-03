"use client";

import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";

export function IdentitySection() {
  const { identity } = siteContent;

  return (
    <section
      id="le-commerce"
      className="section-pad"
      style={{ background: "var(--background)" }}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 items-center">

          {/* ── Texte ── */}
          <div>
            <Reveal delay={0}>
              <p
                className="mb-4 text-xs font-bold tracking-[0.22em] uppercase"
                style={{ fontFamily: "var(--font-sans)", color: "var(--accent)" }}
              >
                {identity.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="mb-6 leading-[1.18]"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--foreground)",
                }}
              >
                {identity.title}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="divider mb-8" />
            </Reveal>
            {identity.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.2 + i * 0.1}>
                <p
                  className="mb-5 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.02rem",
                    color: "var(--foreground-soft)",
                  }}
                >
                  {p}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.42}>
              <blockquote
                className="mt-8 border-l-2 pl-5 italic"
                style={{
                  borderColor: "var(--accent-warm)",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "1.08rem",
                  color: "var(--foreground-soft)",
                  lineHeight: 1.6,
                }}
              >
                {identity.quote}
              </blockquote>
            </Reveal>
          </div>

          {/* ── Visuel ── */}
          <Reveal delay={0.2} y={40}>
            <div className="relative">
              {/* Cadre décoratif */}
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-sm z-0"
                style={{ border: "1.5px solid var(--accent)", opacity: 0.22 }}
              />
              <div
                className="relative z-10 overflow-hidden rounded-sm"
                style={{ aspectRatio: "4/5" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=900&q=80&auto=format"
                  alt="Comptoir chaleureux d'un commerce de village"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Overlay grain */}
                <div className="absolute inset-0 grain-overlay opacity-40" />
              </div>

              {/* Badge flottant */}
              <div
                className="absolute -bottom-5 -left-5 z-20 rounded-sm px-5 py-4 shadow-lg"
                style={{ background: "var(--surface-dark)", minWidth: "160px" }}
              >
                <p
                  className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--accent-warm)" }}
                >
                  Ouvert
                </p>
                <p
                  className="font-bold text-white text-sm leading-tight"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Mar – Dim
                </p>
                <p
                  className="text-white/60 text-xs mt-0.5"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  08h–13h · 16h–19h
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
