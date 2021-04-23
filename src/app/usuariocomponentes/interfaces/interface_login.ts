export interface LoginUser{
    
    "email":string;
    "password":string
}
export interface respuesta{

    "token"?:string;
    "id"?:number;
    "email"?:string;
    "message":string;
    "nombre"?:string;
    "ciudad"?:string;
    "direccion"?:string;


}