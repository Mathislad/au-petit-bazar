"use client";

import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";
import { IconPhone, IconMapPin, IconClock, IconFacebook } from "@/components/ui/icons";

export function InfosSection() {
  const { infos, address, phone, phoneLink, mapsLink, facebookUrl, hours } = siteContent;

  return (
    <section
      id="infos-pratiques"
      className="section-pad"
      style={{ background: "var(--background-alt)" }}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="mb-12 max-w-xl">
          <Reveal>
            <p
              className="mb-4 text-xs font-bold tracking-[0.22em] uppercase"
              style={{ fontFamily: "var(--font-sans)", color: "var(--accent)" }}
            >
              {infos.eyebrow}
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
              {infos.title}
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p style={{ fontFamily: "var(--font-sans)", color: "var(--muted)", fontSize: "1rem" }}>
              {infos.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* ── Adresse ── */}
          <Reveal delay={0.1} y={20}>
            <div
              className="rounded-sm p-7 h-full"
              style={{ background: "var(--background)", border: "1px solid var(--line)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(139,38,53,0.1)" }}
                >
                  <IconMapPin className="w-4 h-4 text-[var(--accent)]" />
                </div>
                <h3
                  className="font-bold text-sm tracking-wide uppercase"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--foreground)", letterSpacing: "0.1em" }}
                >
                  Adresse
                </h3>
              </div>
              <p
                className="leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-sans)", color: "var(--foreground-soft)", fontSize: "0.96rem" }}
              >
                {address}
              </p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm inline-flex"
              >
                Itinéraire Google Maps
              </a>
            </div>
          </Reveal>

          {/* ── Horaires ── */}
          <Reveal delay={0.18} y={20}>
            <div
              className="rounded-sm p-7 h-full"
              style={{ background: "var(--background)", border: "1px solid var(--line)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(192,121,65,0.12)" }}
                >
                  <IconClock className="w-4 h-4 text-[var(--accent-warm)]" />
                </div>
                <h3
                  className="font-bold text-sm tracking-wide uppercase"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--foreground)", letterSpacing: "0.1em" }}
                >
                  Horaires
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((h, i) => (
                  <div key={i} style={{ borderBottom: i < hours.length - 1 ? "1px solid var(--line)" : "none", paddingBottom: i < hours.length - 1 ? "0.75rem" : 0 }}>
                    <p
                      className="font-bold mb-1"
                      style={{ fontFamily: "var(--font-playfair), serif", fontSize: "0.95rem", color: "var(--foreground)" }}
                    >
                      {h.day}
                    </p>
                    {h.slots.map((s, j) => (
                      <p
                        key={j}
                        style={{ fontFamily: "var(--font-sans)", color: "var(--foreground-soft)", fontSize: "0.9rem" }}
                      >
                        {s}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Contact ── */}
          <Reveal delay={0.26} y={20}>
            <div
              className="rounded-sm p-7 h-full flex flex-col"
              style={{ background: "var(--background)", border: "1px solid var(--line)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(107,124,90,0.12)" }}
                >
                  <IconPhone className="w-4 h-4 text-[var(--sage)]" />
                </div>
                <h3
                  className="font-bold text-sm tracking-wide uppercase"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--foreground)", letterSpacing: "0.1em" }}
                >
                  Contact
                </h3>
              </div>

              <a
                href={phoneLink}
                className="text-2xl font-bold mb-6 hover:underline transition-colors"
                style={{ fontFamily: "var(--font-playfair), serif", color: "var(--foreground)", textDecoration: "none" }}
              >
                {phone}
              </a>

              <div className="flex flex-col gap-3 mt-auto">
                <a href={phoneLink} className="btn-primary">
                  <IconPhone className="w-4 h-4" />
                  Appeler maintenant
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  <IconFacebook className="w-4 h-4" />
                  Suivre sur Facebook
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Carte / Map embed ── */}
        <Reveal delay={0.3} y={20}>
          <div
            className="mt-8 rounded-sm overflow-hidden"
            style={{ border: "1px solid var(--line)", height: "280px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.5!2d3.848!3d44.978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5e8c0b0a0b0a0%3A0x0!2s2%20Mont%C3%A9e%20du%20Fournil%2C%2043550%20Saint-Front!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Au petit baz'AR — Saint-Front"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
