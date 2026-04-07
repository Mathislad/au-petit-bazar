"use client";
import { siteContent } from "@/lib/site-content";
import { Logo } from "@/components/ui/logo";
import { IconPhone, IconMapPin, IconFacebook } from "@/components/ui/icons";

export function Footer() {
  const { name, address, phone, phoneLink, mapsLink, facebookUrl, footer, hours } = siteContent;
  return (
    <footer style={{ background: "var(--dark2)", borderTop: "1px solid rgba(247,242,233,0.05)" }}>

      {/* ── Bande décorative haut ── */}
      <div style={{ height: "2px", background: "linear-gradient(to right, var(--gold), transparent)" }} />

      <div className="wrapper py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 items-start">

          {/* ── Col 1 : Marque ── */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 shrink-0">
                <Logo variant="light" className="h-full w-full" />
              </div>
              <div>
                <p style={{ fontFamily: "var(--serif)", fontWeight: 700, color: "#fff", fontSize: "0.97rem", lineHeight: 1.2 }}>
                  {name}
                </p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.66rem", color: "rgba(247,242,233,0.38)", letterSpacing: "0.09em" }}>
                  Saint-Front · Haute-Loire
                </p>
              </div>
            </div>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "rgba(247,242,233,0.40)", lineHeight: 1.68, fontStyle: "italic" }}>
              {footer.tagline}
            </p>

            {/* Séparateur décoratif */}
            <div style={{ width: "2.5rem", height: "1.5px", background: "var(--gold)", opacity: 0.4, marginTop: "1.5rem", borderRadius: "2px" }} />
          </div>

          {/* ── Col 2 : Contact & accès ── */}
          <div>
            <h4
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1.2rem",
              }}
            >
              Contact & accès
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={phoneLink}
                  className="flex items-center gap-2.5"
                  style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "rgba(247,242,233,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(247,242,233,0.55)")}
                >
                  <IconPhone className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--gold)", opacity: 0.7 }} />
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5"
                  style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "rgba(247,242,233,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(247,242,233,0.55)")}
                >
                  <IconMapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "var(--gold)", opacity: 0.7 }} />
                  <span>{address}</span>
                </a>
              </li>
              {facebookUrl && facebookUrl !== "https://www.facebook.com/" && (
                <li>
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5"
                    style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "rgba(247,242,233,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(247,242,233,0.55)")}
                  >
                    <IconFacebook className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--gold)", opacity: 0.7 }} />
                    Page Facebook
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* ── Col 3 : Horaires ── */}
          <div>
            <h4
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1.2rem",
              }}
            >
              Horaires
            </h4>
            <div className="space-y-3">
              {hours.map((h, i) => (
                <div key={i}>
                  <p
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(247,242,233,0.32)",
                      marginBottom: "0.12rem",
                    }}
                  >
                    {h.day}
                  </p>
                  {h.slots.map((s, j) => (
                    <p
                      key={j}
                      style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "rgba(247,242,233,0.55)" }}
                    >
                      {s}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bas de footer ── */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.7rem", color: "rgba(247,242,233,0.24)" }}>
            {footer.legal}
          </p>
        </div>
      </div>
    </footer>
  );
}
