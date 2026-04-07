"use client";
import { motion } from "framer-motion";
import { siteContent } from "@/lib/site-content";
import { Logo } from "@/components/ui/logo";
import { IconPhone, IconMapPin, IconChevronDown } from "@/components/ui/icons";

const NAV_LINKS = [
  ["Le commerce", "#le-commerce"],
  ["Ce qu'on trouve", "#nos-services"],
  ["Terroir", "#terroir"],
  ["Venir nous voir", "#infos"],
] as const;

export function HeroSection() {
  const { hero, phone, phoneLink } = siteContent;

  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      {/* ── Image de fond ── */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.img}
          alt="Au petit baz'AR — Commerce de village à Saint-Front"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        {/* Dégradé chaud vers le bas — lecture optimale du texte */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(30,18,6,0.92) 0%, rgba(30,18,6,0.5) 45%, rgba(30,18,6,0.18) 75%, rgba(30,18,6,0.05) 100%)" }} />
        {/* Dégradé horizontal léger — renforce le côté gauche */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(30,18,6,0.35) 0%, transparent 65%)" }} />
      </div>

      {/* Grain papier très subtil */}
      <div className="grain absolute inset-0 z-[1] opacity-60" />

      {/* ── Navigation ── */}
      <header className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="w-11 sm:w-13"
        >
          <Logo variant="light" className="h-full w-full" />
        </motion.div>

        {/* Liens nav — desktop */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hidden md:flex items-center gap-8"
        >
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.71rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "rgba(247,242,233,0.6)",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.22s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(247,242,233,0.95)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(247,242,233,0.6)")}
            >
              {label}
            </a>
          ))}
        </motion.nav>

        {/* Téléphone — desktop */}
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28 }}
          href={phoneLink}
          className="hidden md:flex items-center gap-2"
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.78rem",
            fontWeight: 600,
            color: "rgba(247,242,233,0.65)",
            textDecoration: "none",
            transition: "color 0.22s",
            letterSpacing: "0.04em",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(247,242,233,0.65)")}
        >
          <IconPhone className="w-3.5 h-3.5" /> {phone}
        </motion.a>
      </header>

      {/* ── Contenu principal ── */}
      <div className="relative z-10 px-6 pb-24 pt-36 sm:px-10 lg:px-14 lg:pb-32">
        <div style={{ maxWidth: "36rem" }}>

          {/* Localité eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="badge-locale">
              <IconMapPin className="w-3 h-3" />
              {hero.eyebrow}
            </span>
          </motion.div>

          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className="t-h1 text-white mb-6"
            style={{ fontSize: "clamp(3.2rem, 7vw, 5.6rem)", lineHeight: 1.04, letterSpacing: "-0.02em" }}
          >
            {hero.title[0]}<br />
            <span style={{ color: "var(--gold-l)", fontStyle: "italic" }}>{hero.title[1]}</span>
          </motion.h1>

          {/* Trait décoratif */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.55, delay: 0.82 }}
            className="divider divider-gold origin-left mb-7"
            style={{ width: "3.5rem" }}
          />

          {/* Sous-texte */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.92 }}
            style={{
              fontFamily: "var(--sans)",
              fontSize: "clamp(0.95rem, 1.7vw, 1.06rem)",
              color: "rgba(247,242,233,0.70)",
              lineHeight: 1.78,
              maxWidth: "30rem",
              fontWeight: 300,
            }}
          >
            {hero.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href={hero.cta1.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <IconMapPin className="w-3.5 h-3.5" />
              {hero.cta1.label}
            </a>
            <a href={hero.cta2.href} className="btn btn-ghost">
              <IconPhone className="w-3.5 h-3.5" />
              {hero.cta2.label}
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden
      >
        <span style={{ fontFamily: "var(--sans)", fontSize: "0.58rem", letterSpacing: "0.18em", color: "rgba(247,242,233,0.28)", textTransform: "uppercase" }}>
          Découvrir
        </span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>
          <IconChevronDown className="w-4 h-4" style={{ color: "rgba(247,242,233,0.28)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
