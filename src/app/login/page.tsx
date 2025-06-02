import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Login() {
    return (
        <div className=" min-h-svh min-w-svw flex justify-center items-center flex-col gap-16 bg-[#F2F6FC]">
            <Image src="/mdi-bg.png" alt="bg pt" width={320} height={300} />
            <div className="w-full max-w-1/3 shadow-xl flex pb-8 flex-col gap-6 rounded-lg overflow-hidden   bg-white border">
                <div className="flex justify-center items-center w-full py-4 bg-gray-200">
                    <h1 className=" text-xl font-semibold">Login</h1>
                </div>
                <div className="flex flex-col gap-1.5 px-8">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="Username" />
                </div>
                <div className="flex flex-col gap-1.5 px-8">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Password" />
                </div>
                <div className="px-8 w-full">
                    <Button className="w-full">Login</Button>
                </div>
            </div>
        </div>
    )
}