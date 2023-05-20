export interface BasketDto {
    userId: string;
    products: ProductDto[];
  }
  
  export interface ProductDto {
    quantity: number;
    productId: string;
    productName: string;
    price: number;
  }