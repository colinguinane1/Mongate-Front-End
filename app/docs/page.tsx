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
export default function DocsListPage() {
  const docs = getDocs();
  const docsMetadata = docs.map((doc) => ({
    slug: doc.slug,
    title: doc.title,
    published: doc.published,
    author: doc.author,
  })); // Full metadata (including published and author)

  return (
    <section className="mt-20 p-4">
      <div className="px-4 md:hidden flex items-center gap-4 w-full">
        <AppSidebar docsMetadata={docsMetadata} />
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
      <ul className="list-disc pl-6">
        {docs.map((doc) => (
          <li key={doc.slug} className="mb-2">
            <a
              href={`/docs/${doc.slug}`}
              className="text-primary hover:underline"
            >
              {doc.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
