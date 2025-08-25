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

    return (
        <div>
            <button onClick={logout} className="mt-4 bg-red-500 text-white p-2 rounded">
                Выйти
            </button>
        </div>
    );
};

export default Logout;