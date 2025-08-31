import {NextResponse} from 'next/server';
import type{NextRequest} from 'next/server';

export async function middleware(request: NextRequest){
    const {pathname} = request.nextUrl;
    if(pathname === '/'){
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/profile`, {
                method: "GET",
                headers: {
                    Cookie: request.headers.get("cookie") || "",
                },
                credentials: "include",
            });

            if (!res.ok) {
                return NextResponse.redirect(new URL("/login", request.url));
            }

        }catch (e) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
};


export const config = {
    matcher: ['/']
};