import { AxiosError } from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Loading from "./ui/loading";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";
import api from "@/utils/axios";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";

export default function VerifyEmailPage() {
  const { user, refetchUserData } = useUser();
  const [emailLoading, setEmailLoading] = useState(false);
  const [code, setCode] = useState("");

  if (!user) {
    return <p>No User</p>;
  }

  const sendEmailVerification = async () => {
    setEmailLoading(true);
    if (!user) {
      return;
    }
    try {
      const response = await api.post("/api/email/verify", {
        email: user.email,
        userId: user._id,
      });
      toast.success(response.data.message);
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setEmailLoading(false);
      refetchUserData();
    }
  };

  const submitVerificationCode = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/email/verify-code", {
        userId: user._id,
        code,
      });
      toast.success(response.data.message);
      refetchUserData();
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setEmailLoading(false);
      refetchUserData();
    }
  };

  if (!user.verified)
    return (
      <div className="p-4 flex flex-col gap-4">
        <h1 className="font-bold text-2xl">Verify Email</h1>
        <Button
          disabled={emailLoading}
          onClick={sendEmailVerification}
          variant={"outline"}
        >
          {emailLoading ? <Loading /> : "Send Verification Email"}
        </Button>
        {user?.emailVerificationCodeExpiration && (
          <form
            className="flex flex-col  gap-2"
            onSubmit={submitVerificationCode}
          >
            <p>Enter Verification Code:</p>
            <div className="flex items-center gap-2 w-full">
              <InputOTP maxLength={6} onChange={(code) => setCode(code)}>
                <InputOTPGroup>
                  <InputOTPSlot index={0}></InputOTPSlot>
                  <InputOTPSlot index={1}></InputOTPSlot>
                  <InputOTPSlot index={2}></InputOTPSlot>
                  <InputOTPSlot index={3}></InputOTPSlot>
                  <InputOTPSlot index={4}></InputOTPSlot>
                  <InputOTPSlot index={5}></InputOTPSlot>
                </InputOTPGroup>
              </InputOTP>
              <Button variant={"outline"}>Verify Code</Button>
            </div>
          </form>
        )}
      </div>
    );
}
