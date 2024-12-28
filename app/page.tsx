"use client";

import HeroSection from "@/components/home/hero-section";
import { OrbitingCirclesHome } from "@/components/ui/animated-circles";
import { Button } from "@/components/ui/button";
import CAnimatedButton from "@/components/ui/c-animated-button";
import CAnimatedButtonOutline from "@/components/ui/c-animated-button-outline";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-content-center h-[40vh] ">
      <HeroSection />
      <div></div>
    </div>
  );
}
