export class CreateUserRequest{
    name:string| undefined;
    surname : string| undefined;
    userName : string| undefined;
    email : string | undefined;
    password: string | undefined;
    phone : string | undefined;
    userType: number | undefined;
    address : string | undefined;
}

export class UpdateUserRequest extends CreateUserRequest{

}

export class GetDeleteUserRequest{
    name:string| undefined;
    surname : string| undefined;
    userName : string| undefined;
}