export interface LoginRequest{
  email : String;
  password : String;
}
export  interface LoginResponse{

}
export interface RegisterRequest{
  nom:string;
  prenom : string;
  email:string;
  password : string;
}

export interface UserProfile{
  id:number;
  nom:string;
  prenom : string;
  email:string;
  password : string;
}
