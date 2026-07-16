import { NextResponse, type NextRequest } from "next/server";
import { COOKIE, TOKEN, safeEqual } from "@/lib/gate";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(COOKIE)?.value;

  // Fail closed: anything but an exact token match goes to the door.
  if (!token || !safeEqual(token, TOKEN)) {
    const url = req.nextUrl.clone();
    url.pathname = "/inloggen";
    url.search = "";
    const van = req.nextUrl.pathname + req.nextUrl.search;
    if (van && van !== "/") url.searchParams.set("van", van);
    return NextResponse.redirect(url);
  }

  const res = NextResponse.next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export const config = {
  // Everything except the door itself, its handler, Next's internals and
  // static files. Assets stay reachable by direct URL — the goal is to keep
  // the site from being read, not to build a vault.
  matcher: [
    "/((?!inloggen|api/login|_next/static|_next/image|images/|favicon|robots.txt|sitemap.xml).*)",
  ],
};
