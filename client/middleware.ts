import {NextResponse} from 'next/server';
import type{NextRequest} from 'next/server';

export async function middleware(request: NextRequest){
    const {pathname} = request.nextUrl;
    // if(pathname === '/'){
    //     try {
    //         const accessToken = request.cookies.get("accessToken")?.value;
    //
    //         if (!accessToken) {
    //             return NextResponse.redirect(new URL("/login", request.url));
    //         }
    //
    //         return NextResponse.next();
    //
    //     }catch (e) {
    //         return NextResponse.redirect(new URL('/login', request.url));
    //     }
    // }

    // return NextResponse.next();
};


export const config = {
    matcher: ['/']
};