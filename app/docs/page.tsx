"use client";

import { useRouter } from "next/navigation";

export default function DocsListPage() {
  const router = useRouter();
  router.push("/docs/getting-started");
  return null;
}
