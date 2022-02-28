import { NextResponse } from "next/server";

import Users from "../../model/userModel";

// import jwt from "jsonwebtoken";

const secret = process.env.REFRESH_TOKEN_SECRET;

export async function middleware(req) {
  try {
    const url = req.url;

    const ref_token = req.cookies.refreshtoken;
    if (!ref_token) return NextResponse.redirect("/login");

    const decoded = jwt.verify(ref_token, secret);

    const user = await Users.findById(decoded.id);
    if (!user) return NextResponse.redirect("/login");

    if (url.includes("/dashboard") && (!decoded || !user))
      return NextResponse.redirect("/login");

    return NextResponse.next();
  } catch (err) {
    return NextResponse.json({ err: err.message });
  }
}
