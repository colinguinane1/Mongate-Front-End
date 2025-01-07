"use client";
import { useRouter } from "next/router";

export default async function DocsListPage() {
  const router = useRouter();
  return router.push("/docs/getting-started");
}
