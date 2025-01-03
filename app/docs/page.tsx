import fs from "fs";
import path from "path";

function getDocs() {
  const contentDir = path.join(process.cwd(), "app/docs/content");
  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
      title: file.replace(".mdx", "").replace("-", " ").toUpperCase(),
    }));
}

export default function DocsListPage() {
  const docs = getDocs();

  return (
    <section className="mt-20 p-4">
      <h1 className="text-2xl font-bold mb-4">Documentation</h1>
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
