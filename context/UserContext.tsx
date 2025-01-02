"use client";
import api from "@/utils/axios";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { User } from "@/types/user";

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  refetchUserData: () => void;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({
        // set user to empty while async function runs
        email: "",
        _id: "",
        verified: false,
        username: "",
        password: "",
      });
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token: string) => {
    try {
      setLoading(true);
      // console.log("Fetching user data with token:", token);
      const response = await api.get("/api/auth/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.data) {
        console.error("No user data in response");
        return;
      }
      // console.log("Received user data:", response.data);
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
      setLoading(false);
      if (
        axios.isAxiosError(error) &&
        (error.response?.status === 401 || error.response?.status === 403)
      ) {
        localStorage.removeItem("token");
      }
    }
  };

  const refetchUserData = () => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token);
    }
  };
  return (
    <UserContext.Provider value={{ loading, user, setUser, refetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};
