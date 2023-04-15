export interface BasketDto{
    userId:string;
    items:BasketItemDto[];
    totalPrice:number;
}

export interface BasketItemDto{
    quantity:number;
    productId:string;
    productName:string;
    price:number;
}