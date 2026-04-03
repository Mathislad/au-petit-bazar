"use client";
import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";

export function ServicesSection() {
  const { services } = siteContent;
  return (
    <section id="nos-services" className="section" style={{ background:"var(--bg-alt)" }}>
      <div className="wrapper">
        <div className="mb-12 max-w-xl">
          <Reveal><p className="t-eyebrow mb-4">{services.eyebrow}</p></Reveal>
          <Reveal delay={0.08}><h2 className="t-h2 mb-3" style={{ color:"var(--ink)" }}>{services.title}</h2></Reveal>
          <Reveal delay={0.15}><p className="t-body" style={{ color:"var(--ink-muted)" }}>{services.subtitle}</p></Reveal>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
          {services.items.map((item,i)=>(
            <Reveal key={i} delay={0.04*i} y={16}>
              <div className="group flex flex-col gap-3 p-5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ background:"var(--bg)", border:"1px solid var(--line)" }}>
                <span className="text-3xl leading-none" role="img" aria-label={item.label}>{item.icon}</span>
                <div>
                  <h3 style={{ fontFamily:"var(--serif)", fontWeight:600, fontSize:"1rem", color:"var(--ink)", marginBottom:"0.3rem", lineHeight:1.3 }}>{item.label}</h3>
                  <p style={{ fontFamily:"var(--sans)", fontSize:"0.8rem", color:"var(--ink-muted)", lineHeight:1.55 }}>{item.desc}</p>
                </div>
                <div className="mt-auto h-[1.5px] w-0 rounded-full transition-all duration-300 group-hover:w-7" style={{ background:"var(--accent)" }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
