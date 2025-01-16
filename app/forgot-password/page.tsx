'use client'
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import api from "@/utils/axios";
import {toast} from "sonner";
import {AxiosError} from "axios";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp";
import {useRouter} from "next/navigation";

export default function ForgotPassword() {
    const [tokenExpiry, setTokenExpiry] = useState<string | number | Date>("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [timeRemaining, setTimeRemaining] = useState("");
    const [code, setCode] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            setEmail(localStorage.getItem("email") || "");
            setTokenExpiry(localStorage.getItem("tokenExpiry") || "");
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const expiry = new Date(tokenExpiry).getTime();
            const timeDiff = expiry - currentTime;

            if (timeDiff > 0) {
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
                setTimeRemaining(`${minutes}m ${seconds}s`);
            } else {
                setTimeRemaining("Expired");
                if (typeof window !== "undefined") {
                    localStorage.removeItem("tokenExpiry");
                }
                setTokenExpiry("");
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [tokenExpiry]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("If an account exists with this email, we sent you a code.");
        const response = await api.post("/api/email/forgot-password", {email});
        if (!response) {
            toast.error("No user data in response");
        }
        const expiry = response.data.tokenExpiry;
        if (typeof window !== "undefined") {
            localStorage.setItem("tokenExpiry", expiry);
            localStorage.setItem("email", email);
        }
        setTokenExpiry(expiry);
    }

    const handleVerifyCode = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post("/api/email/verify-password-code", {email, code, newPassword: password});
            if (!response) {
                toast.error("No response data");
                return;
            }
            if (response.data.error) {
                toast.error(response.data.error);
                return;
            }
            if (response.status === 200) {
                setEmail("");
                setPassword("");
                setCode("");
                if (typeof window !== "undefined") {
                    localStorage.removeItem("tokenExpiry");
                    localStorage.removeItem("email");
                }
                setTokenExpiry("");
                router.push("/forgot-password/success")
            }
            toast.success(response.data.message)
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An unexpected error occurred.");
            }
        }
    }

    return (
        <div className={`grid place-content-center w-screen h-screen`}>
            <form onSubmit={handleSubmit} >
                <div className={`space-y-4`}>
                    <h1 className={`text-2xl font-extrabold`}>Forgot Password</h1>
                    <p>Enter your email to reset your password</p>

                    <div>
                        <Label>Email</Label>
                        <Input required type={"email"} value={email} onChange={(e) => setEmail(e.target.value)}
                               placeholder={"Enter your email.."}/>
                    </div>
                    <Button type={"submit"}>Send Code</Button>

                </div>
            </form>
            {tokenExpiry &&
                <form
                    className="flex flex-col space-y-4 mt-10 border border-primary/20 rounded-lg p-4  gap-2"
                    onSubmit={handleVerifyCode}
                ><p>Token expires in {timeRemaining} </p>
                    <div><Label>New Password</Label><Input required minLength={6} value={password}
                                                           onChange={(e) => setPassword(e.target.value)}
                                                           type={"password"} placeholder={"*****"}/></div>
                    <p>Email Verification Code:</p>
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
            }
        </div>
    )
}