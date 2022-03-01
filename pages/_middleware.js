import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = req.cookies.refreshtoken;
  const url =
    req.nextUrl.pathname === "/dashboard" || req.nextUrl.pathname === "/";

  if (url && !token) return NextResponse.rewrite(new URL("/login", req.url));

  return NextResponse.next();
};
