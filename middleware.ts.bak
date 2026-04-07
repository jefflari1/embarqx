// PASSWORD PROTECTION DISABLED — uncomment below to re-enable

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
//
// const AUTH_COOKIE = "embarqx-auth";
// const AUTH_TOKEN = "emx-v1-granted-2026";
//
// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//
//   // Allow auth page and API route through unconditionally
//   if (
//     pathname.startsWith("/auth") ||
//     pathname.startsWith("/api/auth")
//   ) {
//     return NextResponse.next();
//   }
//
//   const token = request.cookies.get(AUTH_COOKIE)?.value;
//
//   if (token === AUTH_TOKEN) {
//     return NextResponse.next();
//   }
//
//   const loginUrl = new URL("/auth", request.url);
//   if (pathname !== "/") {
//     loginUrl.searchParams.set("from", pathname);
//   }
//   return NextResponse.redirect(loginUrl);
// }
//
// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2)).*)",
//   ],
// };
