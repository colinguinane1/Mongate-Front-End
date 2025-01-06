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
  }
}

export type Doc2 = {
  slug: string;
  metadata: {
    title: string;
    published: string;
    author: string;
  };
};

export async function getDocs(): Promise<Doc[]> {
  const contentDir = path.join(process.cwd(), "app/docs/content");
  const files = fs.readdirSync(contentDir);

  const docs = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const filePath = path.join(contentDir, file);
        const { title, published, author } = await import(filePath);

        return {
          slug: file.replace(".mdx", ""),
          metadata: {
            title: title || file.replace(".mdx", "").replace(/-/g, " ").toUpperCase(),
            published: published || "N/A",
            author: author || "Unknown",
          },
        };
      })
  );

  return docs;
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
