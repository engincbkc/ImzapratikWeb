export interface ResponseModel<T>
{
    data:T | null;
    status:number | null;
    message:string | null;
}