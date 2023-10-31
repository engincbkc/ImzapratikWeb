import { GetRequest, GetRequestParams, PostRequest } from "@/util/request-manager";
import { File } from "@/model/FileModel";


async function GetFileList(): Promise<File[]> {
  try {
    const getParams: GetRequestParams = {
      reqUrl: 'GetAllFile', // Örnek bir URL
    };

    const response = await GetRequest<File[]>(getParams); // File tipini kullanmalısınız
    const fileList = response.data;
    return fileList || [];

  } 
  catch (error) {
    console.error('GET İsteği Hatası:', error);
    throw error; // Hata işleme
  }
}


async function SaveFile():Promise<any> {
  try {
    const postParams: GetRequestParams = {
      reqUrl: 'AddFile', // Örnek bir URL
      body: {
        DocType: 'xlsx',
      },
    };

    const response = await PostRequest<Student>(postParams);
    const newStudent = response.data;
  } 
  catch (error) {
    console.error('GET İsteği Hatası:', error);
    throw error; // Hata işleme
  }
}

