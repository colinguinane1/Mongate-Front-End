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

export function AppSidebar({
  docsMetadata,
}: {
  docsMetadata: {
    slug: string;
    title: string;
    published: string;
    author: string;
  }[]; // Full metadata
}) {
  if (!useIsMobile()) {
    return null;
  }

  const path = usePathname();

  const currentDoc = path.split("/")[2];

  const { user } = useUser();

  return (
    <Sidebar variant="floating" className="z-50">
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
                        <p className="font-semibold capitalize">
                          {doc.slug.replace(/-/g, " ")}
                        </p>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {user ? (
          <div className="flex items-center gap-2">
            <UserCard user={user} /> <LogoutButton />
          </div>
        ) : (
          <Link href="/account">
            <Button variant={"outline"}>Login</Button>
          </Link>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
