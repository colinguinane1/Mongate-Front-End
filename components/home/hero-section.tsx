"use client";
import { OrbitingCirclesHome } from "../ui/animated-circles";
import CAnimatedButton from "../ui/c-animated-button";
import CAnimatedButtonOutline from "../ui/c-animated-button-outline";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import FadeInSection from "../fade-in";

export default function HeroSection() {
  const { user } = useUser();
  return (
    <FadeInSection>
      <div className="grid place-content-center ">
        <div className="md:flex max-w-6xl z-10 mt-20 relative h-[600px] motion-preset-blur-down-lg md:flex-row-reverse flex-col items-center justify-center gap-4 w-full">
          <div className="absolute md:top-80 top-40  left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob "></div>
          <div className="absolute left-20 top-80 md:top-40  w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
          <div className="absolute  -bottom-8  top-60 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>

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
            <div className="flex gap-4 md:flex-row z-[30] flex-col">
              <Link href={user ? "/account" : "/login"}>
                {" "}
                <CAnimatedButton>{user ? "Account" : "Login"} </CAnimatedButton>
              </Link>
              <Link href="/docs/01-getting-started">
                {" "}
                <CAnimatedButtonOutline>Docs</CAnimatedButtonOutline>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
