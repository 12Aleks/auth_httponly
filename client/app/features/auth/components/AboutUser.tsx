"use client"

import {useAuth} from "@/app/features/auth/hooks/useAuth";

const AboutUser = () => {
    const {user} = useAuth();
    console.log(user);
    if (!user) return null;
    return (
        <div className="flex flex-col gap-4 text-amber-50">
            <h2>Hello {user?.name} {user?.surname}</h2>
            <p>Email: {user?.email}</p>
            <p>Role: {user?.role}</p>
        </div>
    );
};

export default AboutUser;