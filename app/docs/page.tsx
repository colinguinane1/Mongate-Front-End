import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default async function DocsPage() {
  const docLinks = [{ slug: "getting-started", title: "Getting Started" }];

  return (
    <section className="mt-20 p-4">
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Documentation
      </h1>
      <div>
        {docLinks.map((doc) => (
          <Link
            key={doc.slug}
            className="block p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            href={`/docs/${doc.slug}`}
          >
            {doc.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
