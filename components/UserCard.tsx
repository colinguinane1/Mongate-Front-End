"use client";
import { User } from "@/types/user";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import AnimatedCircularProgressBar from "./ui/animated-circular-progress-bar";
import { levels } from "@/types/levels";
import { useEffect, useState } from "react";
import { get } from "http";
import Link from "next/link";
import { Verified, VerifiedIcon } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";

interface UserCardProps {
  user: User | null;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="flex items-center bg-card border p-4 rounded-xl gap-4">
        No user found
      </div>
    );
  }

  return (
    <div className="flex items-center  relative  w-full max-w-2xl  p-4 rounded-xl gap-4">
      <Avatar className="w-20 h-20 z-0 relative">
        <AvatarFallback className="w-20 h-20 text-xl">
          {user.username.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>{" "}
      <div>
        <p>
          <h1 className="font-bold">{user.username}</h1>
        </p>{" "}
        {user.verified && (
          <div className="flex items-center gap-1 text-sm text-primary/50">
            <FaCheckCircle />
            <p>Verified Account</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
