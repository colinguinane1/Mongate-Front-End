import HeroSection from "@/components/home/hero-section";
import TechStackSection from "@/components/home/tech-stack";

export default function Home() {
  return (
    <div className="grid place-content-center w-screen  ">
      <div className="max-w-6xl w-full">
        <HeroSection />
        <TechStackSection />
      </div>
    </div>
  );
}
