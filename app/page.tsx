import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { WorkSection } from "@/components/sections/work";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
