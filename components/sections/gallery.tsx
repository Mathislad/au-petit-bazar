"use client";
import { siteContent } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";

export function GallerySection() {
  const { gallery } = siteContent;
  return (
    <section id="galerie" className="section" style={{ background:"var(--bg)" }}>
      <div className="wrapper">
        <div className="mb-12 max-w-xl">
          <Reveal><p className="t-eyebrow mb-4">{gallery.eyebrow}</p></Reveal>
          <Reveal delay={0.08}><h2 className="t-h2 mb-3" style={{ color:"var(--ink)" }}>{gallery.title}</h2></Reveal>
          <Reveal delay={0.15}><p className="t-body" style={{ color:"var(--ink-muted)" }}>{gallery.subtitle}</p></Reveal>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {gallery.items.map((item,i)=>(
            <Reveal key={i} delay={0.05*i} y={16}>
              <div className={`${item.wide?"lg:col-span-2 lg:row-span-2":""} overflow-hidden rounded-sm group cursor-pointer`}
                style={{ aspectRatio:item.wide?"16/9":"4/3", border:"1px solid var(--line)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
