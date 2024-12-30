"use client";
import Link from "next/link";
import { Button } from "./button";
import { useUser } from "@/context/UserContext";
import LogoutButton from "../LogOutButton";

export default function Header() {
  const { user } = useUser();
  return (
    <header className="flex items-center justify-center fixed p-4 w-screen">
      <div className=" backdrop-blur-3xl z-50 p-2  flex w-full justify-between motion-preset-blur-down-lg items-center gap-4 rounded-md border">
        <Link className="text-gray-400 underline-offset-4 underline" href="/">
          Home
        </Link>
        <p className="font-extrabold motion-preset-pulse-sm text-primary">
          Mongate
        </p>
        <Link href="/login">
          {user ? <LogoutButton /> : <Button variant={"outline"}>Login</Button>}
        </Link>
      </div>
    </header>
  );
}
