"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useIsMobile } from "@/hooks/is-mobile";
import { usePathname } from "next/navigation";
import { useUser } from "@/context/UserContext";
import LogoutButton from "./LogOutButton";
import { Button } from "./ui/button";
import UserCard from "./UserCard";
import { Doc } from "@/lib/gett-docs";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { cn } from "@/lib/utils";
import Hamburger from "hamburger-react";
import { useState } from "react";

export function AppSidebar({ docs }: { docs: Doc[] }) {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const { user } = useUser();
  if (!useIsMobile()) {
    return null;
  }

  const currentDoc = path.split("/")[2];

  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <DrawerTrigger>
        {" "}
        <Button
          variant="ghost"
          size="icon"
          className={cn("flex items-center justify-center")}
          onClick={() => setOpen(!open)}
        >
          <div>
            <Hamburger toggled={open} size={20} />
          </div>
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-4 pb-8">
        <div className="flex flex-col">
          {docs.map((doc) => (
            <Link
              key={doc.slug}
              className={`${
                currentDoc === doc.slug &&
                "bg-primary/10 border-l-4 text-primary border-primary/20"
              } hover:bg-primary/10 w-full p-1 px-2 rounded-lg text-base  transition-all`}
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
