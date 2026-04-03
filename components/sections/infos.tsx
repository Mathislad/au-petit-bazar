"use client";
import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";
import { IconPhone, IconMapPin, IconClock, IconFacebook } from "@/components/ui/icons";

export function InfosSection() {
  const { infos, address, phone, phoneLink, mapsLink, facebookUrl, hours } = siteContent;
  return (
    <section id="infos" className="section" style={{ background:"var(--bg-alt)" }}>
      <div className="wrapper">
        <div className="mb-12 max-w-xl">
          <Reveal><p className="t-eyebrow mb-4">{infos.eyebrow}</p></Reveal>
          <Reveal delay={0.08}><h2 className="t-h2 mb-3" style={{ color:"var(--ink)" }}>{infos.title}</h2></Reveal>
          <Reveal delay={0.15}><p className="t-body" style={{ color:"var(--ink-muted)" }}>{infos.subtitle}</p></Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Adresse */}
          <Reveal delay={0.1} y={18}>
            <div className="rounded-sm p-6 h-full" style={{ background:"var(--bg)", border:"1px solid var(--line)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full" style={{ background:"rgba(124,31,46,0.1)" }}>
                  <IconMapPin className="w-4 h-4" style={{ color:"var(--accent)" }} />
                </div>
                <h3 style={{ fontFamily:"var(--sans)", fontWeight:700, fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--ink)" }}>Adresse</h3>
              </div>
              <p className="t-body mb-5" style={{ fontSize:"0.95rem" }}>{address}</p>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize:"0.68rem" }}>
                Itinéraire Google Maps →
              </a>
            </div>
          </Reveal>

          {/* Horaires */}
          <Reveal delay={0.17} y={18}>
            <div className="rounded-sm p-6 h-full" style={{ background:"var(--bg)", border:"1px solid var(--line)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full" style={{ background:"rgba(184,115,42,0.12)" }}>
                  <IconClock className="w-4 h-4" style={{ color:"var(--gold)" }} />
                </div>
                <h3 style={{ fontFamily:"var(--sans)", fontWeight:700, fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--ink)" }}>Horaires</h3>
              </div>
              <div className="space-y-3">
                {hours.map((h,i)=>(
                  <div key={i} className={i<hours.length-1?"pb-3":""}
                    style={{ borderBottom:i<hours.length-1?"1px solid var(--line)":"none" }}>
                    <p style={{ fontFamily:"var(--serif)", fontWeight:600, fontSize:"0.93rem", color:"var(--ink)", marginBottom:"0.15rem" }}>{h.day}</p>
                    {h.slots.map((s,j)=><p key={j} style={{ fontFamily:"var(--sans)", fontSize:"0.88rem", color:"var(--ink-soft)" }}>{s}</p>)}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.24} y={18}>
            <div className="rounded-sm p-6 h-full flex flex-col" style={{ background:"var(--bg)", border:"1px solid var(--line)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full" style={{ background:"rgba(94,112,72,0.12)" }}>
                  <IconPhone className="w-4 h-4" style={{ color:"var(--sage)" }} />
                </div>
                <h3 style={{ fontFamily:"var(--sans)", fontWeight:700, fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--ink)" }}>Contact</h3>
              </div>
              <a href={phoneLink} style={{ fontFamily:"var(--serif)", fontWeight:700, fontSize:"1.7rem", color:"var(--ink)", textDecoration:"none", display:"block", marginBottom:"1.5rem" }}>{phone}</a>
              <div className="mt-auto flex flex-col gap-2.5">
                <a href={phoneLink} className="btn btn-red" style={{ justifyContent:"center" }}>
                  <IconPhone className="w-3.5 h-3.5" /> Appeler maintenant
                </a>
                {facebookUrl && facebookUrl !== "https://www.facebook.com/" && (
                  <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ justifyContent:"center", fontSize:"0.68rem" }}>
                    <IconFacebook className="w-3.5 h-3.5" /> Suivre sur Facebook
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA bas */}
        <Reveal delay={0.35}>
          <div className="mt-14 rounded-sm px-8 py-10 text-center" style={{ background:"var(--dark)" }}>
            <p style={{ fontFamily:"var(--serif)", fontWeight:700, fontSize:"clamp(1.4rem,2.5vw,1.9rem)", color:"#fff", marginBottom:"0.6rem" }}>
              Prêt à venir nous voir ?
            </p>
            <p style={{ fontFamily:"var(--sans)", fontSize:"0.95rem", color:"rgba(246,241,232,0.55)", marginBottom:"1.8rem" }}>
              Appelez-nous ou trouvez-nous sur Google Maps.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={phoneLink} className="btn btn-red"><IconPhone className="w-3.5 h-3.5" /> Appeler</a>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><IconMapPin className="w-3.5 h-3.5" /> Itinéraire</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
