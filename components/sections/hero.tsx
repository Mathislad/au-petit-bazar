"use client";
import { motion } from "framer-motion";
import { siteContent } from "@/lib/site-content";
import { Logo } from "@/components/ui/logo";
import { IconPhone, IconMapPin, IconChevronDown } from "@/components/ui/icons";

export function HeroSection() {
  const { hero, phone, phoneLink } = siteContent;
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      {/* Image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.img}
          alt="Commerce de village Au petit baz'AR — Saint-Front"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>
      <div className="grain absolute inset-0 z-[1] opacity-50" />

      {/* Nav */}
      <header className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-14">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="w-12 sm:w-14">
          <Logo variant="light" className="h-full w-full" />
        </motion.div>
        <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="hidden md:flex items-center gap-7">
          {[["Le commerce","#le-commerce"],["Nos services","#nos-services"],["Terroir","#terroir"],["Infos","#infos"]].map(([label,href])=>(
            <a key={href} href={href} style={{ fontFamily:"var(--sans)", fontSize:"0.73rem", fontWeight:600, letterSpacing:"0.1em", color:"rgba(255,255,255,0.65)", textTransform:"uppercase", textDecoration:"none", transition:"color 0.2s" }}
               onMouseEnter={e=>(e.currentTarget.style.color="#fff")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.65)")}>{label}</a>
          ))}
        </motion.nav>
        <motion.a initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.28 }}
          href={phoneLink} style={{ fontFamily:"var(--sans)", fontSize:"0.8rem", color:"rgba(255,255,255,0.7)", textDecoration:"none", display:"none" }}
          className="md:flex items-center gap-2">
          <IconPhone className="w-3.5 h-3.5" /> {phone}
        </motion.a>
      </header>

      {/* Contenu */}
      <div className="relative z-10 px-6 pb-20 pt-32 sm:px-10 lg:px-14 lg:pb-28">
        <div className="max-w-2xl">
          <motion.p initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.5 }}
            className="t-eyebrow t-eyebrow-gold mb-5">{hero.eyebrow}</motion.p>
          <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.85, delay:0.65, ease:[0.22,1,0.36,1] }}
            className="t-h1 text-white mb-5 whitespace-pre-line"
            style={{ fontSize:"clamp(3rem,6.5vw,5.2rem)" }}>
            {hero.title.join("\n")}
          </motion.h1>
          <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.55, delay:0.85 }}
            className="divider divider-gold origin-left mb-6" />
          <motion.p initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.95 }}
            style={{ fontFamily:"var(--sans)", fontSize:"clamp(0.95rem,1.8vw,1.08rem)", color:"rgba(255,255,255,0.72)", lineHeight:1.75, maxWidth:"34rem" }}>
            {hero.subtitle}
          </motion.p>
          <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:1.1 }}
            className="mt-9 flex flex-wrap gap-3">
            <a href={hero.cta1.href} target="_blank" rel="noopener noreferrer" className="btn btn-red">
              <IconMapPin className="w-3.5 h-3.5" /> {hero.cta1.label}
            </a>
            <a href={hero.cta2.href} className="btn btn-ghost">
              <IconPhone className="w-3.5 h-3.5" /> {hero.cta2.label}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.8 }}
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2" aria-hidden>
        <motion.div animate={{ y:[0,6,0] }} transition={{ duration:2.2, repeat:Infinity }}>
          <IconChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
