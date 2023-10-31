import { ExampleResponseModel } from "@/model/ResponseModel";

export interface GetRequestParams{
    reqUrl:string;
    headers:any;
    body:any;
}


export const GetRequest = async({reqUrl,headers,body}:GetRequestParams)=>{
    const API_URL = process.env.API_URL;
    await fetch(`${API_URL}/app/${reqUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify({
          ...body
         
        }),
      });
}

export const PostRequest = async({reqUrl,headers,body}:GetRequestParams):Promise<ExampleResponseModel<>>    =>  {
  var token ="adsad";
  const API_URL = process.env.API_URL;
  var res = await fetch(`${API_URL}/app/${reqUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json",
        "Authorization" : "Bearer "+token
      },
      body: JSON.stringify({
        ...body
       
      }),
    });
    var response = new ExampleResponseModel();
    res
    return res
}