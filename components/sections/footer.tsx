"use client";
import { siteContent } from "@/lib/site-content";
import { Logo } from "@/components/ui/logo";
import { IconPhone, IconMapPin, IconFacebook } from "@/components/ui/icons";

export function Footer() {
  const { name, address, phone, phoneLink, mapsLink, facebookUrl, footer, hours } = siteContent;
  return (
    <footer className="py-12" style={{ background:"var(--dark2)" }}>
      <div className="wrapper">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 shrink-0"><Logo variant="light" className="h-full w-full" /></div>
              <div>
                <p style={{ fontFamily:"var(--serif)", fontWeight:700, color:"#fff", fontSize:"0.95rem", lineHeight:1.2 }}>{name}</p>
                <p style={{ fontFamily:"var(--sans)", fontSize:"0.68rem", color:"rgba(246,241,232,0.4)", letterSpacing:"0.07em" }}>Saint-Front · Haute-Loire</p>
              </div>
            </div>
            <p style={{ fontFamily:"var(--sans)", fontSize:"0.85rem", color:"rgba(246,241,232,0.45)", fontStyle:"italic", lineHeight:1.65 }}>{footer.tagline}</p>
          </div>

          <div>
            <h4 style={{ fontFamily:"var(--sans)", fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--gold)", marginBottom:"1rem" }}>Contact & accès</h4>
            <ul className="space-y-2.5">
              <li><a href={phoneLink} className="flex items-center gap-2" style={{ fontFamily:"var(--sans)", fontSize:"0.84rem", color:"rgba(246,241,232,0.6)", textDecoration:"none", transition:"color 0.2s" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#fff")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(246,241,232,0.6)")}><IconPhone className="w-3.5 h-3.5 shrink-0"/>{phone}</a></li>
              <li><a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2" style={{ fontFamily:"var(--sans)", fontSize:"0.84rem", color:"rgba(246,241,232,0.6)", textDecoration:"none", transition:"color 0.2s" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#fff")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(246,241,232,0.6)}")}><IconMapPin className="w-3.5 h-3.5 mt-0.5 shrink-0"/><span>{address}</span></a></li>
              {facebookUrl && facebookUrl !== "https://www.facebook.com/" && (
                <li><a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" style={{ fontFamily:"var(--sans)", fontSize:"0.84rem", color:"rgba(246,241,232,0.6)", textDecoration:"none", transition:"color 0.2s" }}
                  onMouseEnter={e=>(e.currentTarget.style.color="#fff")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(246,241,232,0.6)}")}><IconFacebook className="w-3.5 h-3.5 shrink-0"/>Page Facebook</a></li>
              )}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily:"var(--sans)", fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--gold)", marginBottom:"1rem" }}>Horaires</h4>
            <div className="space-y-2">
              {hours.map((h,i)=>(
                <div key={i}>
                  <p style={{ fontFamily:"var(--sans)", fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(246,241,232,0.38)", marginBottom:"0.1rem" }}>{h.day}</p>
                  {h.slots.map((s,j)=><p key={j} style={{ fontFamily:"var(--sans)", fontSize:"0.84rem", color:"rgba(246,241,232,0.6)" }}>{s}</p>)}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2" style={{ borderTop:"1px solid rgba(255,255,255,0.07)" }}>
          <p style={{ fontFamily:"var(--sans)", fontSize:"0.72rem", color:"rgba(246,241,232,0.28)" }}>{footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
