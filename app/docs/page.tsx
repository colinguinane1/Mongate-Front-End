"use client";
import { useRouter } from "next/router";

export default function DocsListPage() {
  const router = useRouter();
  return router.push("/docs/getting-started");
}
