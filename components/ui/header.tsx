"use client";
import Link from "next/link";
import { Button } from "./button";
import { useUser } from "@/context/UserContext";
import LogoutButton from "../LogOutButton";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ModeToggle } from "./theme-switcher";
import { siteConfig } from "@/config/site";

export default function Header() {
  const { user } = useUser();
  return (
    <header
      className={`flex transition-all duration-300
        fixed
      items-center justify-center   w-screen z-50`}
    >
      <div
        className={`backdrop-blur-[6px] z-50 p-2  flex w-full border-b  justify-between motion-preset-blur-down-lg items-center `}
      >
        <Link href="/" className="flex items-center gap-2">
          <p className="font-extrabold flex items-center">
            {/* <Image
              alt="logo"
              width={25}
              height={25}
              className="filter invert dark:invert-0 "
              src="/icon-1.png"
            ></Image> */}
            nFlow
          </p>
          <p className="bg-primary/10 p-1 px-2 rounded-md text-primary">
            {siteConfig.version.state} v{siteConfig.version.front}
          </p>
        </Link>

        <div className="flex gap-2 items-center">
          <Link href={siteConfig.links.github} target="_blank">
            <Button variant={"ghostMuted"} size={"icon"}>
              <FaGithub className="w-8 h-8 text-muted-foreground" />
            </Button>
          </Link>
          <ModeToggle />

          <div>
            <Link href="/account">
              {user ? (
                <LogoutButton />
              ) : (
                <Button variant={"outline"}>Login</Button>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
