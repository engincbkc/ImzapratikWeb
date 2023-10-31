import { ResponseModel } from "@/model/ResponseModel";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const GetCookie = (name: string): any => {
  const cookieStore = cookies();

  return cookieStore.get(name) ?? null;
}

export interface GetRequestParams {
  reqUrl: string;
  body?: Record<string, any> | null;
}

export const GetRequest = async <T>({ reqUrl, body }: GetRequestParams): Promise<ResponseModel<T>> => {
  const API_URL = process.env.API_URL;
  const accessToken = GetCookie("AccessToken");

  if (!accessToken) {
    
    redirect('/login');
    throw new Error("accessToken not found in cookies.");
  }

  const response = await fetch(`${API_URL}/app/${reqUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  const data = await response.json();

  return data as ResponseModel<T>;
}

export const PostRequest = async <T>({ reqUrl, body }: GetRequestParams): Promise<ResponseModel<T>> => {
  const API_URL = process.env.API_URL;
  const accessToken = GetCookie("AccessToken");

  if (!accessToken) {
    
    redirect('/login');
    throw new Error("accessToken not found in cookies.");
  }

  const response = await fetch(`${API_URL}/app/${reqUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body || {}),
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  const data = await response.json();

  return data as ResponseModel<T>;
}
