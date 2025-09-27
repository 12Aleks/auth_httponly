"use client"

import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import {useForm} from "react-hook-form";
import {authSchema, ILoginDto} from "@/app/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";



export default function LoginForm() {
    const { login } = useAuth();
    const router = useRouter();

    const {register, handleSubmit,  formState: { errors, isSubmitting }} = useForm<ILoginDto>({
        resolver: zodResolver(authSchema),
    });

    const onSubmit = async (data: ILoginDto) => {
        await login(data);
        router.push("/");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-64 border border-amber-50 p-5 rounded-xl
        [&_input]:p-1 [&_input]:rounded [&_input]:bg-white
        ">
            <input
                type="email"
                placeholder="Email"
                {...register("email")}
            />
            {errors.email && <p className="text-red-500 pt-1 m-0 text-sm">{errors.email.message}</p>}
            <input
                type="password"
                placeholder="Password"
                {...register("password")}
            />
            {errors.password && (<p className="text-red-500 pt-1 m-0 text-sm">{errors.password.message}</p>)}

            <button className="bg-blue-500 hover:bg-blue-700 duration-200 text-white p-2 rounded cursor-pointer" type="submit">
                {isSubmitting ? "Logging in..." : "Login"}
            </button>
        </form>
    );
}
