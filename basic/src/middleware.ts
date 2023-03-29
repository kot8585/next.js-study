import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log('미들웨어가 실행되고 있음!');
  if(request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어 - 경로를 리다이렉트 함');
    return NextResponse.redirect(new URL('/products', request.url));
  }
}

//특정 경로만 middleware를 수행하도록 설정
export const config = {
  matcher: ['/products/:path*'],
}