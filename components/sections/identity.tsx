"use client";
import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";

export function IdentitySection() {
  const { identity, stats } = siteContent;
  return (
    <section id="le-commerce" className="section parchment" style={{ background: "var(--bg)" }}>
      <div className="wrapper">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24 items-center">

          {/* ── Texte ── */}
          <div>
            <Reveal>
              <p className="t-eyebrow mb-5">{identity.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="t-h2 mb-6" style={{ color: "var(--ink)" }}>
                {identity.title}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="divider mb-8" />
            </Reveal>

            {identity.paras.map((p, i) => (
              <Reveal key={i} delay={0.18 + i * 0.1}>
                <p className="t-body mb-5">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.42}>
              <blockquote
                style={{
                  borderLeft: "2.5px solid var(--gold)",
                  paddingLeft: "1.3rem",
                  marginTop: "2rem",
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.05rem,1.8vw,1.18rem)",
                  color: "var(--ink-soft)",
                  lineHeight: 1.6,
                }}
              >
                &ldquo;{identity.quote}&rdquo;
              </blockquote>
            </Reveal>
          </div>

          {/* ── Visuel ── */}
          <Reveal delay={0.2} y={40}>
            <div className="photo-frame">
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "4/5",
                  borderRadius: "4px",
                  zIndex: 1,
                  position: "relative",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={identity.img}
                  alt="Intérieur chaleureux du baz'AR"
                  className="img-cover transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />
                {/* Overlay couleur très légère — chaleur */}
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(139,58,42,0.04)", mixBlendMode: "multiply" }}
                />
              </div>

              {/* ── Badge horaires ── */}
              <div
                className="absolute -bottom-6 -left-5 z-20 rounded px-5 py-4 warm-shadow-lg"
                style={{
                  background: "var(--dark2)",
                  minWidth: "160px",
                  border: "1px solid rgba(247,242,233,0.07)",
                  borderRadius: "4px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {identity.badge.line1}
                </p>
                <p style={{ fontFamily: "var(--serif)", fontWeight: 700, color: "#fff", fontSize: "1rem", marginBottom: "0.15rem" }}>
                  {identity.badge.line2}
                </p>
                <p style={{ fontFamily: "var(--sans)", color: "rgba(247,242,233,0.5)", fontSize: "0.75rem", lineHeight: 1.4 }}>
                  {identity.badge.line3}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Stats bande ── */}
        <div
          className="mt-24 grid grid-cols-2 gap-px sm:grid-cols-4 overflow-hidden"
          style={{
            borderRadius: "4px",
            border: "1px solid var(--line)",
            background: "var(--line)",
          }}
        >
          {stats.map((s, i) => (
            <Reveal key={i} delay={0.06 * i} y={10}>
              <div
                className="flex flex-col items-center py-9 px-4 text-center"
                style={{ background: "var(--bg-alt)" }}
              >
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 700,
                    fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)",
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.7rem",
                    color: "var(--ink-muted)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
