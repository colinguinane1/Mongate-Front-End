"use client";
import { useUser } from "@/context/UserContext"; // Import the useUser hook

import Login from "@/components/login";

import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";

import UserCard from "@/components/UserCard";

import AccountSettings from "@/components/account-settings";

import VerifyEmailPage from "@/components/verify-email";

export default function UserProfile() {
  const { user, refetchUserData } = useUser();
  const [loading, setLoading] = useState(true);

  // Refetch to make sure data is up to date.
  useEffect(() => {
    if (!user) {
      refetchUserData();
    } else {
      setLoading(false);
    }
  }, [user, refetchUserData]);

  if (!user) {
    return (
      <div className="grid min-h-screen min-w-screen place-content-center">
        <Login />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid min-h-screen min-w-screen place-content-center">
        <p>
          <CgSpinner size={50} className="animate-spin" />
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-screen min-w-screen">
      <div className="w-full p-4 max-w-2xl flex flex-col space-y-4">
        <h1 className="font-bold p-4 text-2xl text-left">Account</h1>
        <UserCard user={user} />
        <AccountSettings user={user} />
        <VerifyEmailPage />
      </div>
    </div>
  );
}
