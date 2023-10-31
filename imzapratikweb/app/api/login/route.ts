import { NextResponse } from "next/server";

export async function POST(request: any) {

  const reqBody = await request.json();
  try {
    const resp = await fetch(process.env.API_URL + "/app/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        UserLogin: reqBody.email,
        Password: reqBody.password,
      }),
    });

    if (resp.status.toString().startsWith('2')) {
      const responseData:any = await resp.json();
      const response = NextResponse.json(
        { success: true },
        
        { status: 200, headers: { "content-type": "application/json" } }
      );

      response.cookies.set({
        name: "token",
        value: responseData.Data.AccessToken,
        path: "/",
      });

      return response;
    }
  } catch (error) {
    console.error("Fetch hatası:", error);
  }

  return NextResponse.json({success:false},{status:500});
}
