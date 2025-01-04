"use client";
import Link from "next/link";
import { Button } from "./button";
import { useUser } from "@/context/UserContext";
import LogoutButton from "../LogOutButton";

import Image from "next/image";
import { DiGithub, DiGithubAlt, DiGithubFull } from "react-icons/di";
import { Github } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ModeToggle } from "./theme-switcher";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function Header() {
  const { user } = useUser();
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();
  const isDocsPath = pathname.includes("/docs");
  return (
    <header className="flex items-center justify-center fixed p-4 w-screen z-50">
      <div className="backdrop-blur-lg z-50 p-2 max-w-6xl flex w-full justify-between motion-preset-blur-down-lg items-center rounded-md border">
        <Link href="/">
          <p className="font-extrabold flex items-center">
            {resolvedTheme === "dark" ? (
              <Image
                alt="logo"
                width={30}
                height={30}
                className="invert-0"
                src="/icon-1.png"
              ></Image>
            ) : (
              <Image
                alt="logo"
                width={30}
                height={30}
                className="filter invert "
                src="/icon-1.png"
              ></Image>
            )}
            Mongate {isDocsPath && <p className="font-light pl-1">Docs</p>}
          </p>
        </Link>
        <div className="flex gap-2 items-center">
          <Link
            href="https://github.com/colinguinane1/Mongate-Front-End"
            target="_blank"
          >
            <Button variant={"ghost"} size={"icon"}>
              <FaGithub className="w-8 h-8" />
            </Button>
          </Link>
          <ModeToggle />

          <Link href="/account">
            {user ? (
              <LogoutButton />
            ) : (
              <Button variant={"outline"}>Login</Button>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
