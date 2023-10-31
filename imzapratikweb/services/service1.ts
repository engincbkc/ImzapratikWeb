import { Filter,File } from  "@/model/FileModel"

import { ExampleInputModel } from "@/model/InputModel"

import { ExampleResponseModel } from "@/model/ResponseModel"



export const GetReports = async(filter: ExampleInputModel): Promise<File> => {
  
    const resp = await fetch(process.env.API_URL + "/app/Login", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify({
          Filter: filter
         
        }),
      });
      
    const newFile: File = {
      doctype: "example", 
      fileContent: new Uint8Array() 
    }
    return newFile;
  }