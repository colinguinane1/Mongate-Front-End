"use client";
import Link from "next/link";
import { Button } from "./button";
import { useUser } from "@/context/UserContext";
import LogoutButton from "../LogOutButton";
import { HiOutlineChartBar } from "react-icons/hi";

export default function Header() {
  const { user } = useUser();
  return (
    <header className="flex items-center justify-center fixed p-4 pr-8 w-screen z-50">
      <div className="backdrop-blur-lg z-50 p-2 max-w-6xl flex w-full justify-between motion-preset-blur-down-lg items-center gap-4 rounded-md border">
        <Link className="text-gray-400 underline-offset-4 underline" href="/">
          Home
        </Link>
        <p className="font-extrabold flex items-center gap-1  text-primary">
          <HiOutlineChartBar />
          Mongate
        </p>
        <Link href="/login">
          {user ? <LogoutButton /> : <Button variant={"outline"}>Login</Button>}
        </Link>
      </div>
    </header>
  );
}
