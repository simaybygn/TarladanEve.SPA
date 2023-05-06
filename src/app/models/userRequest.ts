export interface CreateUserRequest{
    name:string ;
    surname : string ;
    userName : string ;
    email : string  ;
    password: string  ;
    phone : string  ;
    userType: number  ;
    address : string ;
    photoUrl:string;
}

export interface UpdateUserRequest extends CreateUserRequest,DeleteUserRequest{
}

export interface DeleteUserRequest {
    id:string;
}

export interface GetUserRequest{
    name?:string ;
    suranem? : string ;
    userName ?: string ;
}

export interface LoginCheckRequest{
    email : string  ;
    password: string  ;
    userName:string;
}