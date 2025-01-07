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
import { CommandMenu } from "../command-menu";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const { user } = useUser();
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();
  const isDocsPath = pathname.includes("/docs");
  return (
    <header
      className={`flex transition-all duration-300 ${
        isDocsPath ? "" : "p-4"
      } items-center justify-center fixed  w-screen z-50`}
    >
      <div
        className={`backdrop-blur-[6px] z-50 p-2 max-w-6xl flex w-full ${
          isDocsPath ? "border-b rounded-2xl" : "border rounded-lg"
        } justify-between motion-preset-blur-down-lg items-center `}
      >
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
          {isDocsPath && (
            <div>
              <CommandMenu />
            </div>
          )}
          <Link
            href="https://github.com/colinguinane1/Mongate-Front-End"
            target="_blank"
          >
            <Button variant={"ghostMuted"} size={"icon"}>
              <FaGithub className="w-8 h-8 text-muted-foreground" />
            </Button>
          </Link>
          <ModeToggle />

          {!isDocsPath && (
            <div>
              <Link href="/account">
                {user ? (
                  <LogoutButton />
                ) : (
                  <Button variant={"outline"}>Login</Button>
                )}
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
