"use server"
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./app/utils/auth";

const SIGN_IN_URL = "/auth/sign-in";
const DASHBOARD_URL = "/";

export async function proxy(request: NextRequest) {
    const { refresh } = await getCurrentUser();
    const { pathname } = request.nextUrl;

    const isAuthPage = pathname.startsWith("/auth");

    // Check if refresh token is expired
    let isTokenExpired = false;
    if (refresh) {
        try {
            const tokenPayload = JSON.parse(atob(refresh.split('.')[1]));
            const expirationTime = tokenPayload.exp * 1000; // Convert to milliseconds
            isTokenExpired = Date.now() >= expirationTime;
        } catch (error) {
            // If token can't be decoded, treat it as expired
            isTokenExpired = true;
        }
    }

    // If token is expired or doesn't exist, redirect to sign-in
    if ((!refresh || isTokenExpired) && !isAuthPage) {
        return NextResponse.redirect(new URL(SIGN_IN_URL, request.url));
    }

    // If token exists and valid, but user is on auth page, redirect to dashboard
    if (refresh && !isTokenExpired && isAuthPage) {
        return NextResponse.redirect(new URL(DASHBOARD_URL, request.url));
    }

    return NextResponse.next();
}


export const config = {
    matcher: [
        "/", 
        "/users", 
        "/subscription", 
        "/notifications", 
        "/settings", 
        "/settings/personal-information", 
        "/settings/change-password", 
        "/settings/privacy-policy", 
        "/settings/privacy-policy/edit-terms-conditions",
        "/auth/:path*"
    ]
};