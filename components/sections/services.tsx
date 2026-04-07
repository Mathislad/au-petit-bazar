"use client";
import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";

export function ServicesSection() {
  const { services } = siteContent;
  return (
    <section id="nos-services" className="section" style={{ background: "var(--bg-alt)" }}>
      <div className="wrapper">

        {/* ── En-tête ── */}
        <div className="mb-14 max-w-xl">
          <Reveal><p className="t-eyebrow mb-5">{services.eyebrow}</p></Reveal>
          <Reveal delay={0.08}>
            <h2 className="t-h2 mb-4" style={{ color: "var(--ink)" }}>{services.title}</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="t-lead">{services.subtitle}</p>
          </Reveal>
        </div>

        {/* ── Grille cartes ── */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
          {services.items.map((item, i) => (
            <Reveal key={i} delay={0.04 * i} y={18}>
              <div
                className="group flex flex-col gap-4 p-6 card"
                style={{ height: "100%" }}
              >
                {/* Icône */}
                <span
                  className="text-3xl leading-none"
                  role="img"
                  aria-label={item.label}
                  style={{ filter: "saturate(0.9)" }}
                >
                  {item.icon}
                </span>

                {/* Texte */}
                <div className="flex-1">
                  <h3 className="t-h3 mb-2" style={{ color: "var(--ink)" }}>{item.label}</h3>
                  <p className="t-small">{item.desc}</p>
                </div>

                {/* Trait hover animé */}
                <div
                  className="h-[1.5px] w-0 rounded-full transition-all duration-400 group-hover:w-8"
                  style={{ background: "var(--gold)" }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── CTA bas section ── */}
        <Reveal delay={0.28}>
          <div className="mt-14 flex flex-col sm:flex-row items-center gap-5 justify-between rounded p-8"
            style={{ background: "var(--bg-warm)", border: "1px solid var(--line)", borderRadius: "4px" }}>
            <div>
              <p style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "clamp(1.1rem,2vw,1.35rem)", color: "var(--ink)", marginBottom: "0.25rem" }}>
                Vous voulez voir sur place ?
              </p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.88rem", color: "var(--ink-muted)" }}>
                On est ouverts du mardi au dimanche, dès 8 h du matin.
              </p>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=2+mont%C3%A9e+du+Fournil+43550+Saint-Front"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              Voir le chemin →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
