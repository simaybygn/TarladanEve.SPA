export interface BasketDto{
    userId:string;
    items:BasketItemDto[];
}

export interface BasketItemDto{
    quantity:number;
    productId:string;
    productName:string;
    price:number;
}