import { NextResponse } from "next/server"

export const config = {
    matcher:['/profile']
}

export default function middleware(request) {
    if (request.cookies.get('token') === undefined) {
        return NextResponse.redirect(`${request.nextUrl.origin}/Login`)
    }
}