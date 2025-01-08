"use client";
import Link from "next/link";
import { useIsMobile } from "@/hooks/is-mobile";
import { Button } from "./ui/button";
import UserCard from "./UserCard";
import { Doc } from "@/lib/gett-docs";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { cn } from "@/lib/utils";
import { Squeeze as Hamburger } from "hamburger-react";
import { useState } from "react";

export function AppSidebar({ docs }: { docs: Doc[] }) {
  const [open, setOpen] = useState(false);
  if (!useIsMobile()) {
    return null;
  }

  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <DrawerTrigger>
        {" "}
        <Button
          variant="ghostNoBg"
          size="icon"
          className={cn("flex items-center hover:bg-none justify-center")}
          onClick={() => setOpen(!open)}
        >
          <div>
            <Hamburger toggled={open} size={20} />
          </div>
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-4 mt-10 pb-8">
        <div className="flex flex-col gap-1 pt-4">
          {docs.map((doc) => (
            <Link
              key={doc.slug}
              className={` hover:bg-primary/10 w-fit p-1 px-2 rounded-lg text-base  transition-all`}
              href={`/docs/${doc.slug}`}
            >
              <div>
                <p>{doc.metadata.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
