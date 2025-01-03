"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useIsMobile } from "@/hooks/is-mobile";

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

  return (
    <Sidebar variant="floating" className="z-50">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <p className="font-extrabold text-base flex items-center">
              Mongate <span className="font-light pl-1">Docs</span>
            </p>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {/* Iterate over docsMetadata and display all metadata */}
              {docsMetadata.map((doc) => (
                <SidebarMenuItem key={doc.slug}>
                  <SidebarMenuButton asChild>
                    <Link href={`/docs/${doc.slug}`}>
                      <div>
                        <p className="font-semibold capitalize">{doc.title}</p>
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
