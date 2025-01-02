import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";

export type Doc = {
  slug: string;
  metadata: {
    title: string;
    publishDate: string;
    category: string;
    published: boolean;
    description: string;
    image: string;
  };
};

// Helper function to get all posts
export async function getDocs(): Promise<Doc[]> {
  const dir = path.join(process.cwd(), "content", "docs");
  const files = fs.readdirSync(dir);

  const posts = await Promise.all(
    files
      .filter((filename) => filename.endsWith(".mdx"))
      .map(async (filename) => {
        const filePath = path.join(dir, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data: metadata, content } = matter(fileContent);
        // Serialize the MDX content using next-mdx-remote
        const mdxContent = await serialize(content);

        return {
          slug: filename.replace(".mdx", ""),
          metadata: {
            title: metadata.title || "Untitled",
            publishDate: metadata.publishDate || "1970-01-01",
            category: metadata.category || "Uncategorized",
            description: metadata.description || "No description",
            image: metadata.image || "/default.jpg",
            published: metadata.published || false,
          },
          content: mdxContent,
        };
      })
  );

  // Sort posts by publish date in descending order
  return posts.sort(
    (a, b) =>
      new Date(b.metadata.publishDate).getTime() -
      new Date(a.metadata.publishDate).getTime()
  );
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
