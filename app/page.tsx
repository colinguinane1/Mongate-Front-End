"use client";

import HeroSection from "@/components/home/hero-section";
import { OrbitingCirclesHome } from "@/components/ui/animated-circles";
import { Button } from "@/components/ui/button";
import CAnimatedButton from "@/components/ui/c-animated-button";
import CAnimatedButtonOutline from "@/components/ui/c-animated-button-outline";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaNodeJs } from "react-icons/fa";

export default function Home() {
  const techStack = [
    {
      name: "Node.JS",
      icon: <FaNodeJs color="green" className="w-16 h-16" />,
      description: "Javascript for the web.",
    },
  ];

  return (
    <div className="grid place-content-center h-[40vh] ">
      <HeroSection />
      <div className="mt-20 p-4">
        {techStack.map((tech) => (
          <div className="bg-primary/10 w-52 h-52 flex flex-col items-center justify-center rounded-lg">
            {tech.icon}
            <h1 className="font-bold  text-2xl">{tech.name}</h1>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
