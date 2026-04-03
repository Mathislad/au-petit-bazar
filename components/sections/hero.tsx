"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/lib/site-content";
import { Logo } from "@/components/ui/logo";
import { IconPhone, IconMapPin, IconChevronDown } from "@/components/ui/icons";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* ── Image de fond ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85&auto=format"
          alt="Commerce de village chaleureux en Haute-Loire"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          unoptimized
        />
        {/* Dégradés */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1408]/88 via-[#1e1408]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1408]/30 to-transparent" />
      </div>

      {/* ── Grain ── */}
      <div className="grain-overlay absolute inset-0 z-[1] opacity-60" />

      {/* ── Navbar légère ── */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="w-14 sm:w-16"
        >
          <Logo variant="light" className="h-full w-full" />
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="hidden md:flex items-center gap-8"
        >
          {["Le commerce", "Nos services", "Terroir", "Infos pratiques"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase().replace(/\s/g, "-").replace(/'/g, "")}`}
              className="text-white/70 hover:text-white text-sm font-medium tracking-wider transition-colors duration-200"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.06em", fontSize: "0.78rem" }}
            >
              {item}
            </a>
          ))}
        </motion.nav>

        <motion.a
          href={siteContent.phoneLink}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="hidden md:inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
          style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.04em" }}
        >
          <IconPhone className="w-3.5 h-3.5" />
          {siteContent.phone}
        </motion.a>
      </header>

      {/* ── Contenu Hero ── */}
      <div className="relative z-10 px-6 pb-20 pt-40 sm:px-10 sm:pb-24 lg:px-14 lg:pb-28">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-[#c07941] text-xs font-bold tracking-[0.22em] uppercase"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {hero.eyebrow}
          </motion.p>

          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif-display text-white mb-6 leading-[1.12]"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
              whiteSpace: "pre-line",
            }}
          >
            {hero.title}
          </motion.h1>

          {/* Trait */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left mb-6 h-[2px] w-12 rounded-full"
            style={{ background: "#8b2635" }}
          />

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/75 mb-10 max-w-lg leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)" }}
          >
            {hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3"
          >
            <a href={hero.cta1Href} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <IconMapPin className="w-4 h-4" />
              {hero.cta1Label}
            </a>
            <a href={hero.cta2Href} className="btn-ghost-light">
              <IconPhone className="w-4 h-4" />
              {hero.cta2Label}
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <IconChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
