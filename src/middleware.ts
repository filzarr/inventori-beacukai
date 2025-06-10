import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value || request.headers.get('authorization')
  const pathname = request.nextUrl.pathname

  const isLoginPage = pathname === '/login'

  // Guest user trying to access protected route
  // if (!token && !isLoginPage) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }

  // // Logged-in user trying to access /login
  // if (token && isLoginPage) {
  //   return NextResponse.redirect(new URL('/dashboard', request.url))
  // }

  return NextResponse.next()
}

// Apply middleware to all routes except /login, /_next/*, and favicon
// export const config = {
//   matcher: [ '/login', '/dashboard'],
// }