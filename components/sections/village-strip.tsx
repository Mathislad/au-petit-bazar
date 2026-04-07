"use client";
// Bandeau ancrage village — 3 valeurs rapides visuellement fortes
// Inséré entre Hero et Identity pour ancrer immédiatement le commerce

import { siteContent } from "@/lib/site-content";

const STRIP_ITEMS = [
  { label: "Ouvert dès 8 h",            detail: "Mardi au dimanche" },
  { label: "2 montée du Fournil",        detail: "43550 Saint-Front" },
  { label: "Pain · Épicerie · Terrasse", detail: "Tout sous un même toit" },
] as const;

export function VillageStrip() {
  const { phoneLink, phone } = siteContent;
  return (
    <div
      style={{
        background: "var(--dark3)",
        borderBottom: "1px solid rgba(247,242,233,0.06)",
      }}
    >
      <div className="wrapper">
        <div className="flex flex-col sm:flex-row items-stretch">
          {STRIP_ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col justify-center py-5 px-2"
              style={{
                borderRight: i < STRIP_ITEMS.length - 1 ? "1px solid rgba(247,242,233,0.08)" : "none",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(0.88rem,1.4vw,1rem)",
                  fontWeight: 600,
                  color: "rgba(247,242,233,0.88)",
                  marginBottom: "0.2rem",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "0.7rem",
                  color: "rgba(247,242,233,0.38)",
                  letterSpacing: "0.08em",
                }}
              >
                {item.detail}
              </p>
            </div>
          ))}
          {/* Bouton téléphone */}
          <div
            className="flex items-center justify-center py-5 px-6"
            style={{ borderLeft: "1px solid rgba(247,242,233,0.08)" }}
          >
            <a
              href={phoneLink}
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--gold)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "color 0.22s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-l)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--gold)")}
            >
              📞 {phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
