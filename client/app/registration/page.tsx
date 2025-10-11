import React from 'react';
import RegistrationForm from "@/app/features/auth/components/RegistrationForm";
import Link from "next/link";
import FormBurron from "@/app/features/auth/components/FormBurron";

const Page = () => {
    return (
        <div className="container mx-auto p-4 flex flex-col gap-4 items-center justify-center h-screen">
            <h1>Registration form</h1>
            <RegistrationForm />
            or
            <FormBurron text={'login'}/>
        </div>

    );
};

export default Page;