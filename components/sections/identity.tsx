"use client";
import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";

export function IdentitySection() {
  const { identity, stats } = siteContent;
  return (
    <section id="le-commerce" className="section" style={{ background:"var(--bg)" }}>
      <div className="wrapper">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">

          {/* Texte */}
          <div>
            <Reveal><p className="t-eyebrow mb-4">{identity.eyebrow}</p></Reveal>
            <Reveal delay={0.08}><h2 className="t-h2 mb-5" style={{ color:"var(--ink)" }}>{identity.title}</h2></Reveal>
            <Reveal delay={0.14}><div className="divider mb-7" /></Reveal>
            {identity.paras.map((p,i)=>(
              <Reveal key={i} delay={0.18+i*0.1}>
                <p className="t-body mb-4">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.38}>
              <blockquote style={{ borderLeft:"2px solid var(--gold)", paddingLeft:"1.1rem", marginTop:"1.75rem",
                fontFamily:"var(--serif)", fontStyle:"italic", fontSize:"1.05rem", color:"var(--ink-soft)", lineHeight:1.65 }}>
                &ldquo;{identity.quote}&rdquo;
              </blockquote>
            </Reveal>
          </div>

          {/* Visuel */}
          <Reveal delay={0.18} y={36}>
            <div className="relative">
              <div className="absolute -top-3 -right-3 h-full w-full rounded-sm"
                style={{ border:"1.5px solid var(--accent)", opacity:0.18, zIndex:0 }} />
              <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio:"4/5", zIndex:1 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={identity.img} alt="Intérieur accueillant du commerce"
                  className="h-full w-full object-cover" loading="lazy" />
              </div>
              {/* Badge horaires */}
              <div className="absolute -bottom-5 -left-4 z-20 rounded-sm px-5 py-4 shadow-xl"
                style={{ background:"var(--dark)", minWidth:"155px" }}>
                <p style={{ fontFamily:"var(--sans)", fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--gold)", marginBottom:"0.3rem" }}>Ouvert</p>
                <p style={{ fontFamily:"var(--serif)", fontWeight:700, color:"#fff", fontSize:"0.95rem" }}>Mar – Dim</p>
                <p style={{ fontFamily:"var(--sans)", color:"rgba(255,255,255,0.55)", fontSize:"0.8rem" }}>08h–13h · 16h–19h</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)] sm:grid-cols-4 rounded-sm overflow-hidden">
          {stats.map((s,i)=>(
            <Reveal key={i} delay={0.05*i} y={12}>
              <div className="flex flex-col items-center py-8 px-4 text-center" style={{ background:"var(--bg-alt)" }}>
                <p style={{ fontFamily:"var(--serif)", fontWeight:700, fontSize:"clamp(1.6rem,3vw,2.2rem)", color:"var(--accent)", lineHeight:1 }}>{s.value}</p>
                <p style={{ fontFamily:"var(--sans)", fontSize:"0.72rem", color:"var(--ink-muted)", letterSpacing:"0.1em", textTransform:"uppercase", marginTop:"0.5rem" }}>{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
