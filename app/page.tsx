import Hero from "@/components/Hero";
import About from "@/components/About";
import ServiceList from "@/components/ServiceList";
import Gallery from "@/components/Gallery";
import BranchCards from "@/components/BranchCards";
import ProgramTeaser from "@/components/ProgramTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServiceList />
      <Gallery />
      <BranchCards />
      <ProgramTeaser />
    </>
  );
}
