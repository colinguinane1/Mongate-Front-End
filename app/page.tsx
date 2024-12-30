"use client";

import HeroSection from "@/components/home/hero-section";
import { OrbitingCirclesHome } from "@/components/ui/animated-circles";
import { Button } from "@/components/ui/button";
import CAnimatedButton from "@/components/ui/c-animated-button";
import CAnimatedButtonOutline from "@/components/ui/c-animated-button-outline";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";

export default function Home() {
  const techStack = [
    {
      name: "Node.JS",
      icon: (
        <FaNodeJs
          color="green"
          className="w-16 h-16 motion-preset-oscillate-sm"
        />
      ),
      description: "Unify your development with one programming language.",
    },
    {
      name: "React",
      icon: (
        <FaReact
          color="teal"
          className="w-16 h-16 motion-preset-oscillate-sm"
        />
      ),
      description: "The industry standard for web and mobile development.",
    },
    {
      name: "MongoDB",
      icon: (
        <DiMongodb
          color="green"
          className="w-16 h-16 motion-preset-oscillate-sm"
        />
      ),
      description: "Javascript for the web.",
    },
    {
      name: "Express",
      icon: <SiExpress className="w-16 h-16 motion-preset-oscillate-sm" />,
      description: "Javascript for the web.",
    },
  ];

  return (
    <div className="grid place-content-center w-screen  ">
      <div className="max-w-6xl w-full">
        <HeroSection />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-primary/10 motion-preset-blur-up-lg w-full p-10 h-full flex flex-col items-center justify-center rounded-lg"
            >
              {tech.icon}
              <h1 className="font-bold py-4  text-2xl">{tech.name}</h1>
              <p className="text-center">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
