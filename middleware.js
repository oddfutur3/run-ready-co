import { NextRequest, NextResponse } from "next/server";
import { authenticatedUser } from "./utils/amplifyServerUtils";

export async function middleware (request) {
  const response = NextResponse.next()
  const user = await authenticatedUser({ request, response })

  const isOnHome = request.nextUrl.pathname == "/"
  const isOnLogin = request.nextUrl.pathname.startsWith("/login")
  const isOnOAuth = request.nextUrl.pathname.startsWith("/oauth")
  const isCareers = request.nextUrl.pathname.startsWith("/careers")
  const isWhatToExpect = request.nextUrl.pathname.startsWith("/what")
  const isPP = request.nextUrl.pathname.startsWith("/performance-program")
  const isSP = request.nextUrl.pathname.startsWith("/starter-package")

  const isVideo = request.nextUrl.pathname.startsWith("/videos")
  const isPRIV = request.nextUrl.pathname.startsWith("/privacy-policy")
  const isTT = request.nextUrl.pathname.startsWith("/terms-of-service")
  const isLP = request.nextUrl.pathname.startsWith("/landing-page")
  const isFAQ = request.nextUrl.pathname.startsWith("/FAQ")
  const isFR = request.nextUrl.pathname.startsWith("/rrpp-experience")





  const uuidExp = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
  const isOnAssessResult = uuidExp.test(request.nextUrl.pathname)

  if (!user && !isOnHome && !isOnLogin && !isOnOAuth && !isOnAssessResult && !isCareers && !isWhatToExpect && !isPP && !isVideo && !isPRIV && !isTT && !isLP && !isSP && !isFAQ && !isFR)  {
      return NextResponse.redirect(new URL("/", request.nextUrl))
  } else if (user && isOnLogin) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl))
  }

}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)'],
  // matcher: '/about/:path*',
}