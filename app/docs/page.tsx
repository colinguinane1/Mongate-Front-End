import { AppSidebar } from "@/components/app-sidebar";
import { getDocs } from "@/lib/gett-docs";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default async function DocsListPage() {
  const docs = await getDocs();
  return (
    <section className="mt-20 p-4">
      <div className="px-4 md:hidden flex items-center gap-4 w-full">
        <AppSidebar docs={docs} />
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {docs.map((doc, idx) => (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug}`}
            className={`border p-2 rounded-lg  hover:bg-primary/10 w-full  transition-all`}
          >
            {idx + 1}. {doc.metadata.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
