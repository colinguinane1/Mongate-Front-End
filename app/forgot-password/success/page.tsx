import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Check, CheckCircle} from "lucide-react";
import Link from "next/link";

export default function ChangePasswordPage() {

    return (
        <div className={`grid place-content-center h-screen w-screen`}>
            <div className={`flex-col flex gap-4 items-center justify-center`}>
                <Check className={`w-20 h-20 text-primary border rounded-full border-4 border-primary p-2`}/>
                <h1 className="text-3xl font-bold text-center">Password Changed</h1>
                <Link href={'/account'}> <Button>Login</Button></Link>
            </div>
        </div>
    )
}