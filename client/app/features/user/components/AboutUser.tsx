"use client"

import {useAuth} from "@/app/features/auth/hooks/useAuth";
import TableComponent from "@/app/features/user/components/TableComponent";
import {IUser} from "@/app/utils/types";

const AboutUser = () => {
    const {user} = useAuth();

    if (!user) return null;
    return (
        <div className="flex flex-col gap-4 text-amber-50">
            <h1>Hello {user?.name} {user?.surname}, this is your personal subpage</h1>
            <TableComponent {...user}/>
        </div>
    );
};

export default AboutUser;