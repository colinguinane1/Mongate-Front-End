import fs from "fs";
import path from "path";
import matter from "gray-matter"; // For parsing frontmatter
import { serialize } from "next-mdx-remote/serialize"; // For serializing MDX content
import { Metadata } from "next";
import Image from "next/image";
import ClientMDXContent from "../MDXClient";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

// Define the expected structure of the post
type Post = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    category: string;
    description: string;
    image: string;
    published: boolean;
  };
  content: MDXRemoteSerializeResult;
};

// Define the expected parameter structure
type Params = { slug: string };

// Fixing the type for `generateMetadata`
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

// Function to fetch the post by slug
async function getPost(slug: string): Promise<Post> {
  try {
    const mdxPath = path.join("content", "docs", `${slug}.mdx`);
    if (!fs.existsSync(mdxPath)) {
      throw new Error(`MDX file for slug ${slug} does not exist`);
    }

    const fileContent = fs.readFileSync(mdxPath, "utf-8");

    // Parse metadata and content using gray-matter
    const { data, content } = matter(fileContent);
    const metadata: Post["metadata"] = {
      title: data.title || "Untitled",
      publishedAt: data.publishedAt || "1970-01-01",
      category: data.category || "Uncategorized",
      description: data.description || "No description",
      image: data.image || "/default.jpg",
      published: data.published || false,
    };

    // Serialize MDX content for rendering
    const mdxContent = await serialize(content);

    return {
      slug,
      metadata: metadata || {
        title: "Untitled",
        publishedAt: "1970-01-01",
        category: "Uncategorized",
        description: "No description",
        image: "/default.jpg",
        published: false,
      },
      content: mdxContent,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error(`Unable to fetch the post for slug: ${slug}`);
  }
}

// Function to generate static params (this should be wrapped in an object)
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("content", "docs"));
  const params = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return { params }; // Ensure that the return is wrapped in an object
}

// The Page function to render the post
export default async function Page({ params }: { params: Params }) {
  const { slug } = params;

  const post = await getPost(slug);

  return (
    <div className="px-4 sm:px-6 mt-16 md:px-8 lg:px-12">
      <div className="flex justify-center items-center flex-col gap-6">
        <article className="prose mt-10 max-w-xl flex flex-col gap-4 w-full">
          {post.metadata.image && (
            <Image
              src={post.metadata.image || "/gradient.jpg"}
              width={800}
              height={450}
              alt="Blog Post Image"
              className="rounded-lg pb-4 h-full w-full transition-all group-hover:scale-[1.01]"
            />
          )}
          <div className="">
            <p className="font-semibold text-sm sm:text-base md:text-lg">
              <span className="pr-1">{post.metadata.publishedAt}</span>
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black capitalize leading-tight">
              {post.metadata.title}
            </h1>
            <p>{post.metadata.description}</p>
          </div>
          <ClientMDXContent mdxContent={post.content} />
        </article>
      </div>
    </div>
  );
}
