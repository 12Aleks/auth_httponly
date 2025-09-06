"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import Form from "next/form";



export default function LoginForm() {
    const { login } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (formData: FormData) => {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string
        await login({email, password});
        router.push("/");
    };

    return (
        <Form action={onSubmit} className="flex flex-col gap-5 w-64 border border-amber-50 p-5 rounded-xl
        [&_input]:p-1 [&_input]:rounded [&_input]:bg-white
        ">
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button className="bg-blue-500 text-white p-2 rounded cursor-pointer" type="submit">
                Login
            </button>
        </Form>
    );
}
