import { NextRequest, NextResponse } from 'next/server'

// 추후 로그인 구현 후 활용될 라우팅 가드

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)'],
// }

// const publicRoutes = ['/onboard', '/survey', '/kakao/callback']

// export function middleware(request: NextRequest) {
//   const token = request.headers.get('Authorization')?.replace('Bearer ', '')
//   const currentPath = request.nextUrl.pathname

//   const isPublicRoute = publicRoutes.includes(currentPath)

//   if (!token && !isPublicRoute) {
//     const url = request.nextUrl.clone()
//     url.pathname = '/onboard'
//     url.searchParams.set('message', '로그인이 필요한 페이지입니다.')
//     return NextResponse.redirect(url)
//   }

//   if (token && currentPath === '/onboard') {
//     const url = request.nextUrl.clone()
//     url.pathname = '/'
//     url.searchParams.set('message', '이미 로그인된 상태입니다.')
//     return NextResponse.redirect(url)
//   }

//   const response = NextResponse.next()
//   response.headers.set('Content-Security-Policy', 'upgrade-insecure-requests')

//   return response
// }

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next()
  response.headers.set('Content-Security-Policy', 'upgrade-insecure-requests')
  return response
}
