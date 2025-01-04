import { notFound } from "next/navigation";
import { getDocs } from "@/lib/gett-docs";
import dynamic from "next/dynamic";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Assuming getDocs() is an async function that returns the list of docs
export async function generateStaticParams() {
  const docs = await getDocs(); // Await the result if getDocs is async
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DocsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params; // Await the params here

  const docs = await getDocs(); // Fetch docs on the server
  const docsMetadata = docs.map((doc) => ({
    slug: doc.slug,
    title: doc.title,
    published: doc.published,
    author: doc.author,
  })); // Full metadata (including published and author)

  const selectedDoc = docs.find((doc) => doc.slug === slug);

  if (!selectedDoc) {
    notFound();
  }

  const { metadata, default: DocComponent } = await import(
    `../../docs/content/${slug}.mdx`
  ).catch(() => {
    notFound(); // If import fails, show 404
  });

  return (
    <section className="mt-20 flex flex-col items-center p-4">
      <div className="flex md:flex-row flex-col max-w-6xl">
        <div className="w-fit flex-col border-r pr-4 items-start gap-4 hidden md:flex">
          <h1>Documentation</h1>
          {docs.map((doc) => (
            <Button key={doc.slug} variant={"ghost"} asChild>
              <Link
                className={`${
                  doc.slug === slug &&
                  "bg-primary/10 border-l-4  border-primary/20"
                } hover:bg-primary/10 w-full transition-all`}
                href={`/docs/${doc.slug}`}
              >
                <div>
                  <p className="font-semibold capitalize">
                    {doc.slug.replace(/-/g, " ")}
                  </p>
                </div>
              </Link>
            </Button>
          ))}
        </div>
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
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{metadata.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="prose max-w-2xl">
          <div className="p-4">
            {/* Display Metadata */}
            <h1 className="text-3xl font-extrabold text-primary">
              {metadata.title}
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              <span className="font-medium">Published on:</span>{" "}
              {metadata.published}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Author:</span> {metadata.author}
            </p>
          </div>
          <DocComponent />
        </div>
        <div></div>
        <div className="flex justify-between mt-8">
          {docs.map((doc, index) => {
            if (doc.slug === slug) {
              const prevDoc = docs[index - 1];
              const nextDoc = docs[index + 1];
              return (
                <div key={doc.slug} className="flex justify-between w-full">
                  {prevDoc && (
                    <Link
                      key={prevDoc.slug}
                      className="w-full"
                      href={`/docs/${prevDoc.slug}`}
                    >
                      <div className="flex w-full items-center">
                        <span className="mr-2">←</span>
                        <span>{prevDoc.title}</span>
                      </div>
                    </Link>
                  )}
                  {nextDoc && (
                    <Link
                      key={nextDoc.slug}
                      className="w-full"
                      href={`/docs/${nextDoc.slug}`}
                    >
                      <div className="flex w-full items-center justify-end">
                        <span>{nextDoc.title}</span>
                        <span className="ml-2">
                          <ChevronRight />
                        </span>
                      </div>
                    </Link>
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params; // Await the params here
  const { metadata } = await import(`../../docs/content/${slug}.mdx`).catch(
    () => {
      notFound(); // If import fails, show 404
    }
  );
  return {
    title: metadata.title,
  };
}
