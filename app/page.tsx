"use client";

import { OrbitingCirclesHome } from "@/components/ui/animated-circles";
import { Button } from "@/components/ui/button";
import CAnimatedButton from "@/components/ui/c-animated-button";
import CAnimatedButtonOutline from "@/components/ui/c-animated-button-outline";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-content-center h-[40vh] ">
      <div className="md:flex mt-80 motion-preset-blur-down-lg md:flex-row-reverse flex-col items-center justify-center gap-4 w-full max-w-6xl">
        <div className="absolute top-40 left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob "></div>
        <div className="absolute top-80  w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 top-40 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>
        {/* <div className="absolute z-[-1] w-screen top-0 left-0 h-screen bg-gradient-to-b from-background to-primary/10 from-50% md:from-80% blur"></div> */}

        <div className="flex items-center justify-center w-full ">
          <OrbitingCirclesHome />
        </div>

        <div className="flex flex-col items-center justify-center bg-transparent gap-4  p-4 w-full max-w-lg">
          <h1 className="text-4xl font-bold text-center">
            Fast, Secure,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to go.
            </span>
          </h1>{" "}
          <p className="text-center">
            Try our pre-built solution for the popular MERN stack, which
            includes User Authentication
          </p>
          <div className="flex gap-4 md:flex-row flex-col">
            <Link href="/login">
              {" "}
              <CAnimatedButton>Login </CAnimatedButton>
            </Link>

            <CAnimatedButtonOutline>Learn More</CAnimatedButtonOutline>
          </div>
        </div>
      </div>
    </div>
  );
}
