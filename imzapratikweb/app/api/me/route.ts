import { NextResponse } from "next/server";

export async function POST(request: any) {
    const reqBody = await request.json();
    try {
      const resp = await fetch(process.env.API_URL + "/app/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept" : "application/json",
          "Authorization" : "Bearer " + reqBody.token
        }
       
      });
  
      if (resp.status.toString().startsWith('2')) {
        return resp
      }
    }
    catch (error) {
        console.error("Fetch hatası:", error);
    }
    return false;
}