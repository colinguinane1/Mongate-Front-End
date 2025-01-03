import { notFound } from "next/navigation";
import { getDocs } from "@/lib/gett-docs";
import dynamic from "next/dynamic";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

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
    <section className="mt-20 flex flex-col justify-center p-4">
      <div className="px-4 md:hidden">
        <AppSidebar docsMetadata={docsMetadata} />
        <SidebarTrigger />
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
    </section>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params; // Await the params here
  return {
    title: `Docs - ${slug}`,
  };
}
