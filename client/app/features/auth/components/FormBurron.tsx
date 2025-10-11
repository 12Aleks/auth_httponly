import React from 'react';
import Link from "next/link";

interface ILoginForm {
    text: string
}

const FormBurron = ({text}: ILoginForm) => {
    return (
        <Link href={`/${text}`} className="capitalize text-center pointer border-amber-500 text-amber-500 duration-200 hover:border-amber-600 hover:text-amber-600 rounded-md border-1 max-w-[250px] w-full px-3 py-2 cursor-pointer">{text}</Link>
    );
};

export default FormBurron;