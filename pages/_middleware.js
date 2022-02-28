import { NextResponse } from "next/server";

import jwt from "jsonwebtoken";

const secret = process.env.REFRESH_TOKEN_SECRET;

export function middleware(req) {
  const url = req.url;
  const ref_token = req.cookies.refreshtoken;

  try {
    if (!ref_token) return NextResponse.redirect("/login");

    const isMatch = jwt.verify(ref_token, secret);
    if (!isMatch) return NextResponse.redirect("/login");

    if (url.includes("/dashboard") && !isMatch)
      return NextResponse.redirect("/login");

    return NextResponse.next();
  } catch (err) {
    return NextResponse.json({ err: err.message });
  }
}
