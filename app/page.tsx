"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="grid place-content-center h-screen">
      {/* Default Buttons */}
      <div className="flex items-center gap-2">
        <Button className="glow-primary">Hello</Button>
        <Button variant={"secondary"}>Hello</Button>
        <Button variant={"outline"}>Hello</Button>
        <Button variant={"destructive"}>Hello</Button>
      </div>

      {/* Custom Button with Hover Effect */}
      <div className="flex items-center justify-center h-fit w-fit m-2 text-white">
        <button className="relative px-5 py-2 text-white hover:text-black hover:scale-105 active:scale-95 font-bold border-2 border-primary rounded-md overflow-hidden transition-all duration-200 group">
          {/* Default Text */}
          <span className="relative  z-10 flex items-center gap-2 transition-all  l">
            Button <ArrowRight size={15}/>
          </span>
          {/* Hovered Text */}
          <span
            className="absolute inset-0 flex items-center justify-center text-white transition-all duration-300 group-hover:translate-y-0 translate-y-full"
          >
            Button
          </span>
          {/* Background Animation */}
          <div className="absolute top-full left-[-40%] w-[300%] h-[400%] bg-primary rotate-[-45deg] transition-all duration-300 group-hover:top-0 group-hover:left-[-160%] group-hover:w-[380%] group-hover:h-[800%]"></div>
        </button>
      </div>
    </div>
  );
}
