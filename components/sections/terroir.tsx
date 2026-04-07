"use client";
import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";
import { IconMapPin } from "@/components/ui/icons";

export function TerroirSection() {
  const { terroir } = siteContent;
  return (
    <section id="terroir" className="section relative overflow-hidden" style={{ background: "var(--dark)" }}>

      {/* ── Fond image campagne ── */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={terroir.bgImg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          loading="lazy"
          style={{ opacity: 0.18 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(35,26,14,0.97) 0%, rgba(35,26,14,0.86) 50%, rgba(107,122,74,0.28) 100%)",
          }}
        />
      </div>

      {/* Grain papier */}
      <div className="grain absolute inset-0 z-[1] opacity-45" />

      <div className="wrapper relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* ── Texte ── */}
          <div>
            <Reveal>
              <p className="t-eyebrow t-eyebrow-sage mb-5">{terroir.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="t-h2 mb-6" style={{ color: "#fff" }}>{terroir.title}</h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="divider divider-gold mb-8" style={{ width: "3.5rem" }} />
            </Reveal>
            <Reveal delay={0.2}>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "clamp(0.95rem,1.7vw,1.05rem)",
                  color: "rgba(247,242,233,0.65)",
                  lineHeight: 1.82,
                  marginBottom: "2.8rem",
                  fontWeight: 300,
                }}
              >
                {terroir.text}
              </p>
            </Reveal>

            {/* ── Producteurs ── */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {terroir.producers.map((p, i) => (
                <Reveal key={i} delay={0.28 + i * 0.07} y={14}>
                  <div
                    className="flex flex-col gap-1 rounded p-4"
                    style={{
                      border: "1px solid rgba(247,242,233,0.10)",
                      background: "rgba(247,242,233,0.04)",
                      borderRadius: "4px",
                      transition: "background 0.25s, border-color 0.25s",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--serif)",
                        fontWeight: 600,
                        fontSize: "0.96rem",
                        color: "#fff",
                      }}
                    >
                      {p.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--sans)",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        letterSpacing: "0.17em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        opacity: 0.85,
                      }}
                    >
                      {p.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* ── CTA ── */}
            <Reveal delay={0.52}>
              <div className="mt-10">
                <a
                  href={terroir.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  <IconMapPin className="w-3.5 h-3.5" />
                  {terroir.cta.label}
                </a>
              </div>
            </Reveal>
          </div>

          {/* ── Images produits ── */}
          <Reveal delay={0.24} y={40}>
            <div className="grid grid-cols-2 gap-3">
              {/* Grande image en haut */}
              <div
                className="col-span-2 overflow-hidden"
                style={{ aspectRatio: "16/9", borderRadius: "4px", border: "1px solid rgba(247,242,233,0.08)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={terroir.imgs[0].src}
                  alt={terroir.imgs[0].alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* 2 petites images */}
              {terroir.imgs.slice(1).map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden"
                  style={{ aspectRatio: "1/1", borderRadius: "4px", border: "1px solid rgba(247,242,233,0.08)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
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
