import HeroSection from "@/components/home/hero-section";
import TechStackSection from "@/components/home/tech-stack";
import WhyUseSection from "@/components/home/features";

export default function Home() {
  return (
    <div className="grid place-content-center w-screen  ">
      <div className="max-w-screen w-full ">
        <HeroSection />
        <div className="relative z-[-1]">
          <div className="bg-gradient-to-b w-[200vw] -left-60 h-full absolute  top-0  from-transparent from-40% to-secondary/20"></div>
          <WhyUseSection /> <TechStackSection />
        </div>
      </div>
    </div>
  );
}
