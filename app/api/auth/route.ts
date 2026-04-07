import { NextResponse } from "next/server";

const PASSWORD = "Embarqx2026@";
const AUTH_COOKIE = "embarqx-auth";
const AUTH_TOKEN = "emx-v1-granted-2026";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    if (password === PASSWORD) {
      const response = NextResponse.json({ success: true });
      response.cookies.set(AUTH_COOKIE, AUTH_TOKEN, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
      return response;
    }

    return NextResponse.json(
      { success: false, error: "Incorrect password." },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
