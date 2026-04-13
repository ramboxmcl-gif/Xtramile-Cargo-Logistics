import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const token = req.cookies.get("auth")?.value;
  if (!token) return NextResponse.redirect(new URL("/login.html", req.url));
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    if (!data.email.endsWith("@xtramile.ph")) throw "invalid";
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login.html", req.url));
  }
}

export const config = { matcher: ["/internal.html"] };
