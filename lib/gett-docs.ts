import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";

export type Doc = {
  slug: string;
  metadata: {
    order: number;
    title: string;
    publishDate: string;
    author: string;
  };
};

export async function getDocs() {
  const contentDir = path.join(process.cwd(), "app/docs/content");
  const files = fs.readdirSync(contentDir);

  const docs = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const filePath = path.join(contentDir, file);

        // Read file content
        const fileContent = fs.readFileSync(filePath, "utf-8");

        // Extract the metadata (JS object) from the file using eval
        const metadataMatch = fileContent.match(
          /export\s+const\s+metadata\s*=\s*{([\s\S]*?)}/
        );
        const metadata = metadataMatch
          ? eval(`({${metadataMatch[1]}})`) // Safely eval the object part of the match
          : {};

        // If there's no match, return default metadata
        const {
          order = 0,
          title = file.replace(".mdx", "").replace(/-/g, " ").toUpperCase(),
          published = "N/A",
          author = "Unknown",
        } = metadata;

        return {
          slug: file.replace(".mdx", ""),
          metadata: {
            order,
            title,
            author,
            publishDate: published,
          },
        };
      })
  );

  return docs.sort((a, b) => a.metadata.order - b.metadata.order);
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
