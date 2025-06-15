"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; 
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        setLoading(true);
        setErrorMsg("");

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            localStorage.setItem('name', data.data.name)
            localStorage.setItem('email', data.data.email)
            localStorage.setItem('role', data.data.role)
            console.log(data)
            if (!res.ok) {
                throw new Error(data.data.message || "Login failed");
            }
            document.cookie = `token=${data.data.access_token}; path=/; max-age=86400; SameSite=Lax`;

            router.push("/dashboard");
        } catch (err: any) {
            setErrorMsg(err.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className=" min-h-svh min-w-svw flex justify-center items-center flex-col gap-16 bg-[#F2F6FC]">
            {/* <Image src="/mdi-bg.png" alt="bg pt" width={320} height={300} /> */}
            <div className="w-full max-w-1/3 shadow-xl flex pb-8 flex-col gap-6 rounded-lg overflow-hidden   bg-white border">
                <div className="flex justify-center items-center w-full py-4 bg-gray-200">
                    <h1 className=" text-xl font-semibold">Login</h1>
                </div>
                {errorMsg && (
                    <div className="text-red-600 px-8 text-sm">{errorMsg}</div>
                )}

                <div className="flex flex-col gap-1.5 px-8">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1.5 px-8">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="px-8 w-full">
                    <Button className="w-full" onClick={handleLogin} disabled={loading}>{loading ? "Logging in..." : "Login"}</Button>
                </div>
            </div>
        </div>
    )
}