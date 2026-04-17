import Hero from "@/components/Hero";
import About from "@/components/About";
import ServiceList from "@/components/ServiceList";
import Gallery from "@/components/Gallery";
import BranchCards from "@/components/BranchCards";
import ProgramTeaser from "@/components/ProgramTeaser";
import RevealSection from "@/components/RevealSection";

export default function Home() {
  return (
    <>
      <Hero />
      <RevealSection as="div"><About /></RevealSection>
      <RevealSection as="div"><ServiceList /></RevealSection>
      <RevealSection as="div"><Gallery /></RevealSection>
      <RevealSection as="div"><BranchCards /></RevealSection>
      <div className="h-16 md:h-24 bg-gradient-to-b from-cream/40 to-ink" />
      <RevealSection as="div"><ProgramTeaser /></RevealSection>
    </>
  );
}
