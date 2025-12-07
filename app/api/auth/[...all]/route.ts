import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest, NextResponse } from "next/server";

const handlers = toNextJsHandler(auth);

// CORS configuration
const allowedOrigins = [
    "https://ossean.in",
    "https://www.ossean.in",
    "http://localhost:3000"
];

function getCorsHeaders(origin: string | null) {
    const isAllowedOrigin = origin && allowedOrigins.includes(origin);

    return {
        "Access-Control-Allow-Origin": isAllowedOrigin ? origin : allowedOrigins[0],
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
        "Access-Control-Allow-Credentials": "true",
    };
}

// Handle OPTIONS preflight requests
export async function OPTIONS(request: NextRequest) {
    const origin = request.headers.get("origin");
    return new NextResponse(null, {
        status: 204,
        headers: getCorsHeaders(origin),
    });
}

// Wrap GET handler with CORS
export async function GET(request: NextRequest) {
    const origin = request.headers.get("origin");
    const response = await handlers.GET(request);

    const corsHeaders = getCorsHeaders(origin);
    Object.entries(corsHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
    });

    return response;
}

// Wrap POST handler with CORS
export async function POST(request: NextRequest) {
    const origin = request.headers.get("origin");
    const response = await handlers.POST(request);

    const corsHeaders = getCorsHeaders(origin);
    Object.entries(corsHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
    });

    return response;
}
