export interface CreateProductRequest{
    type:number| undefined;
    description  : string| undefined;
    price  : number | undefined;
    name: string | undefined;
}
export interface DeleteProductRequest{
    id: string | undefined;
}

export interface UpdateProductRequest extends CreateProductRequest,DeleteProductRequest{
}


export interface GetProductRequest{
    name ? : string | undefined;
}