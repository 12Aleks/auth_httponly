import Link from "next/link";
import Logout from "@/app/features/auth/components/Logout";

const Header = () => {
    return (
        <nav
            className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex items-center justify-between sm:ml-6 w-full [&_div]:flex [&_div]:items-center [&_div]:space-x-4">
                                <div className="[&_a]:cursor-pointer [&_a]:rounded-md [&_a]:px-3 [&_a]:py-2 [&_a]:text-sm [&_a]:font-medium [&_a]:text-white [&_a]:hover:bg-white/5 [&_a]:hover:text-white">
                                <Link href="#" aria-current="page">Dashboard</Link>
                                <Link href="#">Team</Link>
                                <Link href="#" >Projects</Link>
                                <Link href="#">Calendar</Link>
                                </div>
                                <div>
                                    <Link href="/login" className="cursor-pointer rounded-md bg-gray-950/50 hover:bg-gray-500/50 duration-200 px-3 py-2 text-sm font-medium text-white">Login</Link>
                                    <Logout/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;