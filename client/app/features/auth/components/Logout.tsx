"use client";
import {useEffect} from 'react';
import {useAuth} from "@/app/features/auth/hooks/useAuth";
import {useRouter} from "next/navigation";

const Logout = () => {
    const { user, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) router.push("/login");
    }, [user, router]);

    if (!user) return null;

    const logOut = async () => {
        await logout();
        router.push("/login");
    }

    return (
            <button onClick={logOut} className="rounded-md bg-neutral-600/50 hover:bg-neutral-500/50 duration-200 px-3 py-2 text-sm font-medium text-white cursor-pointer">
                Logout
            </button>
    );
};

export default Logout;