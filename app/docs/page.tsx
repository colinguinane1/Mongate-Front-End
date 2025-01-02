import Link from "next/link";
import { Doc, getDocs } from "@/lib/gett-docs";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default async function DocsPage() {
  const allDocs = await getDocs();

  return (
    <section className="mt-20 p-4">
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Documentation
      </h1>
      <div>
        {allDocs.map((doc: Doc) => (
          <Link
            key={doc.slug}
            className="flex flex-col space-y-1 mb-4 transition-opacity duration-200 hover:opacity-80"
            href={`/docs/${doc.slug}`}
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <p className="text-black dark:text-white tracking-tight">
                {doc.metadata.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
