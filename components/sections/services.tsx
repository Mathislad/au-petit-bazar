"use client";

import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";

export function ServicesSection() {
  const { services } = siteContent;

  return (
    <section
      id="nos-services"
      className="section-pad"
      style={{ background: "var(--background-alt)" }}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <Reveal>
            <p
              className="mb-4 text-xs font-bold tracking-[0.22em] uppercase"
              style={{ fontFamily: "var(--font-sans)", color: "var(--accent)" }}
            >
              {services.eyebrow}
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
              {services.title}
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--muted)",
                fontSize: "1rem",
              }}
            >
              {services.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-5">
          {services.items.map((item, i) => (
            <Reveal key={i} delay={0.06 * i} y={20}>
              <div
                className="group flex flex-col gap-3 rounded-sm p-5 transition-shadow duration-300 hover:shadow-md"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--line)",
                }}
              >
                <span
                  className="text-3xl leading-none"
                  role="img"
                  aria-label={item.label}
                >
                  {item.icon}
                </span>
                <div>
                  <h3
                    className="mb-1.5 font-bold leading-tight"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "1.02rem",
                      color: "var(--foreground)",
                    }}
                  >
                    {item.label}
                  </h3>
                  <p
                    className="leading-snug"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.82rem",
                      color: "var(--foreground-soft)",
                      opacity: 0.8,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
                {/* Trait de survol */}
                <div
                  className="mt-auto h-[1.5px] w-0 transition-all duration-300 group-hover:w-8 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
