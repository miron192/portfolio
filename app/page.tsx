import ContactPage from "@/components/contact-page";
import Features from "@/components/features";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoCloud />
      <Projects />
      <Features />
      <ContactPage />
    </div>
  );
}
