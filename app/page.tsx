import HeroSection from "@/components/home/hero-section";
import TechStackSection from "@/components/home/tech-stack";
import WhyUseSection from "@/components/home/features";
import HowDoesItWork from "@/components/home/how-does-it-work";
import CirclePageDivider from "@/components/home/circle-page-divider";
import GettingStartedShort from "@/app/getting-started-short.mdx";
import Pricing from "@/components/home/pricing";

export default function Home() {
  return (
    <div className="grid place-content-center w-screen  ">
      <div className="">
        <HeroSection />
        <div className="relative pb-20  z-[1]">
          <div className="bg-gradient-to-b w-screen  h-full absolute inset-0 bottom-[-1px]  top-0  from-transparent from-40% to-secondary/20"></div>
          <WhyUseSection /> <TechStackSection />
        </div>
        <CirclePageDivider />
        <div className="flex w-screen items-center justify-center">
          <div className="p-4 flex items-center justify-center flex-col">
            <h1 className="font-extrabold text-4xl p-4">Getting Started</h1>
            <div className="w-screen md:w-fit">
              <GettingStartedShort />
            </div>{" "}
          </div>
        </div>{" "}
        <Pricing />
      </div>
    </div>
  );
}
