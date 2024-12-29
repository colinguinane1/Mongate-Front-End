"use client";
import Login from "@/components/login";
import { useUser } from "@/context/UserContext";

export default function LoginPage() {
  const { user } = useUser();
  if (user) {
    window.location.href = "/account";
  }
  return <Login />;
}
