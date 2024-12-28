"use client";
import Link from "next/link";
import { Button } from "./button";
import { useUser } from "@/context/UserContext";
import LogoutButton from "../LogOutButton";

export default function Header() {
  const { user } = useUser();
  return (
    <header className="grid place-content-center h-16 w-screen">
      <div className="bg-card p-2 px-4 flex w-full   justify-center motion-preset-blur-down-lg items-center gap-4 rounded-md border">
        <Link className="text-gray-400" href="/">
          Home
        </Link>
        <p className="font-extrabold motion-preset-pulse-sm text-primary">
          MERN
        </p>
        <Link href="/login">
          {user ? <LogoutButton /> : <Button variant={"outline"}>Login</Button>}
        </Link>
      </div>
    </header>
  );
}
