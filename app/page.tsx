"use client";

import { Button } from "@/components/ui/button";
import CAnimatedButton from "@/components/ui/c-animated-button";
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
     <CAnimatedButton>Button</CAnimatedButton>
    </div>
  );
}
