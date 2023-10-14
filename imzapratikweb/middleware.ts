import { NextResponse } from "next/server";

const AUTH_PAGES = ["/login", "/register"];

const isAuthPages = (url:string) => AUTH_PAGES.some((page:string) => page.startsWith(url) && url!="/");
// const isAuthPages = (url:string) => false;
export async function middleware(request:any) {
  console.log("middleware hit")
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null };
  

  const hasVerifiedToken = token && (await fetch('http://localhost:3000/api/me', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {token:token}),
  }));
  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  if (isAuthPageRequested) {
    console.log("yönlendirmeye girmedi")

    if (!hasVerifiedToken) {
      console.log("tokeni sildi");
      const response = NextResponse.next();
      response.cookies.delete("token");
      return response;
    }

    const response = NextResponse.redirect(new URL(`/`, url));
    return response;
  }

  if (!hasVerifiedToken) {
    console.log("yönlendirmeye girdi")
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", `${nextUrl.pathname}?${searchParams}`);

    const response = NextResponse.redirect(
      new URL(`/login?${searchParams}`, url)
    );
    response.cookies.delete("token");

    return response;
  }

  return NextResponse.next();
}

//export const config = { matcher: ["/reports","/","/customer-reports"] };
export const config = { matcher: [] };