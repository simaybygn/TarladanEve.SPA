export class CreateProductRequest{
    type:number| undefined;
    description  : string| undefined;
    price  : number | undefined;
    name: string | undefined;
}

export class UpdateProductRequest{
    type:number| undefined;
    description ? : string| undefined;
    price ? : number | undefined;
    name: string | undefined;
}

export class GetDeleteProductRequest{
    id: string | undefined;
    name ? : string | undefined;
}