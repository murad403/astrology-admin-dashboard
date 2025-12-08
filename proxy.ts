"use server"
import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { getCurrentUser } from "./app/utils/auth";

const SIGN_IN_URL = "/auth/sign-in";

export async function proxy(request: NextRequest) {
    const { access, refresh } = await getCurrentUser();
    if (!refresh) {
        return NextResponse.redirect(new URL(SIGN_IN_URL, request.url));
    }
    
}


export const config = {
    matcher: ["/"]
};