import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

const protectedPaths = ["/profile",];

export default async function middleware(req: NextRequest) {
    const session = await auth()
    const isProtectedPath = protectedPaths.some((path) =>
        req.nextUrl.pathname.startsWith(path)
    );
    if (isProtectedPath && !session) {
        const url = req.nextUrl.clone();
        url.pathname = "/api/auth/signin";
        url.searchParams.set("callbackUrl", req.nextUrl.pathname);
        return NextResponse.redirect(url);
    }
    return NextResponse.next();
}   