"use client";
import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";

export function TerroirSection() {
  const { terroir } = siteContent;
  return (
    <section id="terroir" className="section relative overflow-hidden" style={{ background:"var(--dark)" }}>
      {/* Fond image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={terroir.bgImg} alt="" aria-hidden className="h-full w-full object-cover opacity-15" loading="lazy" />
        <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,rgba(26,18,8,0.97) 0%,rgba(26,18,8,0.82) 55%,rgba(94,112,72,0.25) 100%)" }} />
      </div>
      <div className="grain absolute inset-0 z-[1] opacity-40" />

      <div className="wrapper relative z-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Texte */}
          <div>
            <Reveal><p className="t-eyebrow t-eyebrow-sage mb-4">{terroir.eyebrow}</p></Reveal>
            <Reveal delay={0.08}><h2 className="t-h2 mb-5" style={{ color:"#fff" }}>{terroir.title}</h2></Reveal>
            <Reveal delay={0.14}><div className="divider divider-gold mb-7" /></Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontFamily:"var(--sans)", fontSize:"1rem", color:"rgba(246,241,232,0.68)", lineHeight:1.78, marginBottom:"2.5rem" }}>{terroir.text}</p>
            </Reveal>
            <div className="grid grid-cols-2 gap-3">
              {terroir.producers.map((p,i)=>(
                <Reveal key={i} delay={0.28+i*0.07} y={14}>
                  <div className="rounded-sm p-4" style={{ border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.04)" }}>
                    <p style={{ fontFamily:"var(--serif)", fontWeight:600, fontSize:"0.93rem", color:"#fff", marginBottom:"0.2rem" }}>{p.name}</p>
                    <p style={{ fontFamily:"var(--sans)", fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--gold)", opacity:0.8 }}>{p.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Images produits */}
          <Reveal delay={0.22} y={36}>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 overflow-hidden rounded-sm" style={{ aspectRatio:"16/8" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={terroir.imgs[0].src} alt={terroir.imgs[0].alt} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              {terroir.imgs.slice(1).map((img,i)=>(
                <div key={i} className="overflow-hidden rounded-sm" style={{ aspectRatio:"1" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
