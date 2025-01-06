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

export function AppSidebar({
  docsMetadata,
}:   Doc[]) {
  const path = usePathname();
  const { user } = useUser();
  if (!useIsMobile()) {
    return null;
  }

  const currentDoc = path.split("/")[2];

  return (
    <Sidebar variant="floating" className="z-50 ">
      <SidebarHeader>
        {" "}
        <p className="font-extrabold text-base flex items-center">
          Mongate <span className="font-light pl-1">Docs</span>
        </p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Iterate over docsMetadata and display all metadata */}
              {docsMetadata.map((doc) => (
                <SidebarMenuItem key={doc.slug}>
                  <SidebarMenuButton asChild>
                    <Link
                      className={`${
                        currentDoc === doc.slug &&
                        "bg-primary/10 border border-primary/20"
                      }`}
                      href={`/docs/${doc.slug}`}
                    >
                      <div>
                        <p className="font-semibold capitalize"    >  
                                              {doc.metadata.title}
                        </p>
<p>{doc.metadata.author}</p>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
