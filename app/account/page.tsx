"use client";
import { useUser } from "@/context/UserContext"; // Import the useUser hook
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Login from "@/components/login";
import { Drawer } from "vaul";
import LogOutButton from "@/components/LogOutButton";
import { ModeToggle } from "@/components/ui/theme-switcher";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { levels } from "@/types/levels";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import UserCard from "@/components/UserCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MdManageAccounts } from "react-icons/md";
import api from "@/utils/axios";
import { toast } from "sonner";
import Loading from "@/components/ui/loading";
import AccountSettings from "@/components/account-settings";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { AxiosError } from "axios";
import VerifyEmailPage from "@/components/verify-email";

export default function UserProfile() {
  const { user, refetchUserData } = useUser();
  const [loading, setLoading] = useState(true);
  const [changeUsername, setChangeUsername] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);

  // Refetch to make sure data is up to date.
  useEffect(() => {
    if (!user) {
      refetchUserData();
    } else {
      setLoading(false);
      setChangeUsername(user.username);
      setChangePassword(user.password);
    }
  }, [user, refetchUserData]);

  if (!user) {
    return (
      <div className="grid min-h-screen min-w-screen place-content-center">
        <Login />
      </div>
    );
  }
  const sendEmailVerification = async () => {
    setEmailLoading(true);
    try {
      const response = await api.post("/api/email/verify", {
        email: user.email,
        userId: user._id,
      });
      toast.success(response.data.message);
      setEmailLoading(false);
    } catch (error) {
      setEmailLoading(false);
      if (error instanceof AxiosError && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

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
    <div className="flex  justify-center min-h-screen min-w-screen ">
      <div className="w-screen p-4 max-w-2xl flex-col flex space-y-4">
        <h1 className="font-bold text-2xl text-left">Account</h1>
        <UserCard user={user} />
        <AccountSettings user={user} />
        <VerifyEmailPage />
      </div>
    </div>
  );
}
