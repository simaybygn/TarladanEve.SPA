export interface CreateProductRequest{
    type:number;
    description  : string;
    price  : number ;
    name: string ;
    photoUrl:string;
}
export interface DeleteProductRequest{
    id: string ;
}

export interface UpdateProductRequest extends CreateProductRequest,DeleteProductRequest{
}


export interface GetProductRequest{
    name ? : string ;
}