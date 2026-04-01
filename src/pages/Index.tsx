import { useState, useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import WorksServicesProcess from "@/components/WorksServicesProcess";
import FaqCtaFooter from "@/components/FaqCtaFooter";

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-ibm grain overflow-x-hidden">
      <NavBar scrolled={scrolled} />
      <HeroSection heroRef={heroRef} />
      <WorksServicesProcess />
      <FaqCtaFooter />
    </div>
  );
}
