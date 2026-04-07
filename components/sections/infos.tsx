"use client";
import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";
import { IconPhone, IconMapPin, IconClock, IconFacebook } from "@/components/ui/icons";

export function InfosSection() {
  const { infos, address, phone, phoneLink, mapsLink, facebookUrl, hours } = siteContent;
  return (
    <section id="infos" className="section" style={{ background: "var(--bg-alt)" }}>
      <div className="wrapper">

        {/* ── En-tête ── */}
        <div className="mb-14 max-w-xl">
          <Reveal><p className="t-eyebrow mb-5">{infos.eyebrow}</p></Reveal>
          <Reveal delay={0.08}>
            <h2 className="t-h2 mb-4" style={{ color: "var(--ink)" }}>{infos.title}</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="t-lead">{infos.subtitle}</p>
          </Reveal>
        </div>

        {/* ── 3 cartes infos ── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

          {/* Adresse */}
          <Reveal delay={0.10} y={18}>
            <div className="card p-7 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-full"
                  style={{ background: "rgba(139,58,42,0.10)" }}
                >
                  <IconMapPin className="w-4 h-4" style={{ color: "var(--accent)" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 700,
                    fontSize: "0.68rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted)",
                  }}
                >
                  Adresse
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.05rem",
                  color: "var(--ink)",
                  lineHeight: 1.5,
                  marginBottom: "1.5rem",
                  flex: 1,
                }}
              >
                {address}
              </p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: "0.68rem", alignSelf: "flex-start" }}
              >
                Itinéraire Google Maps →
              </a>
            </div>
          </Reveal>

          {/* Horaires */}
          <Reveal delay={0.17} y={18}>
            <div className="card p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-full"
                  style={{ background: "rgba(194,125,53,0.12)" }}
                >
                  <IconClock className="w-4 h-4" style={{ color: "var(--gold)" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 700,
                    fontSize: "0.68rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted)",
                  }}
                >
                  Horaires
                </h3>
              </div>
              <div className="space-y-4">
                {hours.map((h, i) => (
                  <div
                    key={i}
                    className={i < hours.length - 1 ? "pb-4" : ""}
                    style={{ borderBottom: i < hours.length - 1 ? "1px solid var(--line)" : "none" }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--serif)",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "var(--ink)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {h.day}
                    </p>
                    {h.slots.map((s, j) => (
                      <p
                        key={j}
                        style={{
                          fontFamily: "var(--sans)",
                          fontSize: "0.88rem",
                          color: "var(--ink-soft)",
                        }}
                      >
                        {s}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.24} y={18}>
            <div className="card p-7 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-full"
                  style={{ background: "rgba(107,122,74,0.12)" }}
                >
                  <IconPhone className="w-4 h-4" style={{ color: "var(--sage)" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 700,
                    fontSize: "0.68rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted)",
                  }}
                >
                  Téléphone
                </h3>
              </div>

              <a
                href={phoneLink}
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 700,
                  fontSize: "clamp(1.55rem,3vw,1.9rem)",
                  color: "var(--ink)",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "1.8rem",
                  transition: "color 0.2s",
                  flex: 1,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--ink)")}
              >
                {phone}
              </a>

              <div className="flex flex-col gap-2.5 mt-auto">
                <a href={phoneLink} className="btn btn-primary" style={{ justifyContent: "center" }}>
                  <IconPhone className="w-3.5 h-3.5" /> Appeler maintenant
                </a>
                {facebookUrl && facebookUrl !== "https://www.facebook.com/" && (
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ justifyContent: "center", fontSize: "0.68rem" }}
                  >
                    <IconFacebook className="w-3.5 h-3.5" /> Suivre sur Facebook
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Bloc CTA final chaud ── */}
        <Reveal delay={0.38}>
          <div
            className="mt-14 rounded overflow-hidden"
            style={{ background: "var(--dark)", borderRadius: "4px", position: "relative" }}
          >
            {/* Trait décoratif couleur sage en haut */}
            <div style={{ height: "3px", background: "linear-gradient(to right, var(--gold), var(--sage), var(--accent))" }} />
            <div className="px-8 py-10 text-center">
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 700,
                  fontSize: "clamp(1.4rem,2.5vw,2rem)",
                  color: "#fff",
                  marginBottom: "0.6rem",
                }}
              >
                On vous attend.
              </p>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "clamp(0.9rem,1.5vw,1rem)",
                  color: "rgba(247,242,233,0.5)",
                  marginBottom: "2rem",
                  fontWeight: 300,
                }}
              >
                Du mardi au dimanche dès 8 h — à deux pas du village.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href={phoneLink} className="btn btn-primary">
                  <IconPhone className="w-3.5 h-3.5" /> Appeler
                </a>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <IconMapPin className="w-3.5 h-3.5" /> Voir le chemin
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
