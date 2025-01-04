import HeroSection from "@/components/home/hero-section";
import TechStackSection from "@/components/home/tech-stack";
import WhyUseSection from "@/components/home/features";
import HowDoesItWork from "@/components/home/how-does-it-work";
import CirclePageDivider from "@/components/home/circle-page-divider";
import GettingStarted from "../app/docs/content/01-getting-started.mdx";
import { metadata } from "./layout";

metadata.title = "Mongate | Home";
metadata.description = "Template for the popular MERN stack";

export default function Home() {
  return (
    <div className="grid place-content-center w-screen  ">
      <div className="">
        <HeroSection />
        <div className="relative pb-20  z-[-1]">
          <div className="bg-gradient-to-b w-screen  h-full absolute inset-0 bottom-[-1px]  top-0  from-transparent from-40% to-secondary/20"></div>
          <WhyUseSection /> <TechStackSection />
        </div>
        <CirclePageDivider />
        <div className="flex items-center justify-center">
          <div className="">
            <h1 className="font-extrabold text-4xl ">Getting Started</h1>
            <GettingStarted />
          </div>
        </div>
      </div>
    </div>
  );
}
