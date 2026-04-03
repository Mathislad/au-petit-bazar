"use client";

import { siteContent } from "@/lib/site-content";
import { Logo } from "@/components/ui/logo";
import { IconPhone, IconMapPin, IconFacebook } from "@/components/ui/icons";

export function Footer() {
  const { name, address, phone, phoneLink, mapsLink, facebookUrl, footer } = siteContent;

  return (
    <footer
      className="py-12"
      style={{ background: "var(--surface-dark)" }}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 items-start">

          {/* ── Logo + tagline ── */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 shrink-0">
                <Logo variant="light" className="h-full w-full" />
              </div>
              <div>
                <p
                  className="font-bold text-white leading-tight text-base"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {name}
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--font-sans)", color: "rgba(248,244,238,0.45)", letterSpacing: "0.06em" }}
                >
                  Saint-Front · Haute-Loire
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-sans)", color: "rgba(248,244,238,0.5)", fontStyle: "italic" }}
            >
              {footer.tagline}
            </p>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.18em] uppercase mb-4"
              style={{ fontFamily: "var(--font-sans)", color: "#c07941" }}
            >
              Contact & accès
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={phoneLink}
                  className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-sans)", color: "rgba(248,244,238,0.65)" }}
                >
                  <IconPhone className="w-3.5 h-3.5 shrink-0" />
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-sans)", color: "rgba(248,244,238,0.65)" }}
                >
                  <IconMapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span>{address}</span>
                </a>
              </li>
              <li>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-sans)", color: "rgba(248,244,238,0.65)" }}
                >
                  <IconFacebook className="w-3.5 h-3.5 shrink-0" />
                  Page Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* ── Horaires ── */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.18em] uppercase mb-4"
              style={{ fontFamily: "var(--font-sans)", color: "#c07941" }}
            >
              Horaires d&apos;ouverture
            </h4>
            <div className="space-y-2">
              {siteContent.hours.map((h, i) => (
                <div key={i}>
                  <p
                    className="text-xs font-bold tracking-wide uppercase mb-0.5"
                    style={{ fontFamily: "var(--font-sans)", color: "rgba(248,244,238,0.45)" }}
                  >
                    {h.day}
                  </p>
                  {h.slots.map((s, j) => (
                    <p
                      key={j}
                      className="text-sm"
                      style={{ fontFamily: "var(--font-sans)", color: "rgba(248,244,238,0.65)" }}
                    >
                      {s}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-sans)", color: "rgba(248,244,238,0.3)" }}
          >
            {footer.legal}
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-sans)", color: "rgba(248,244,238,0.2)" }}
          >
            Site réalisé à titre de maquette commerciale
          </p>
        </div>
      </div>
    </footer>
  );
}
