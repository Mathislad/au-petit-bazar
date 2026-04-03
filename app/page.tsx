import { HeroSection } from "@/components/sections/hero";
import { IdentitySection } from "@/components/sections/identity";
import { ServicesSection } from "@/components/sections/services";
import { TerroirSection } from "@/components/sections/terroir";
import { GallerySection } from "@/components/sections/gallery";
import { InfosSection } from "@/components/sections/infos";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IdentitySection />
      <ServicesSection />
      <TerroirSection />
      <GallerySection />
      <InfosSection />
      <Footer />
    </main>
  );
}
