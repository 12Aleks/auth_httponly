import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <nav
            className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block w-full">
                            <div className="flex justify-between space-x-4">
                                <>
                                <Link href="#" aria-current="page"
                                   className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white">Dashboard</Link>
                                <Link href="#"
                                   className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</Link>
                                <Link href="#"
                                   className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</Link>
                                <Link href="#"
                                   className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</Link>
                                </>
                                <Link href="/login" className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white">Login</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;