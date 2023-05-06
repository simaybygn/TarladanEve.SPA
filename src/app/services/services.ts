import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { CreateProductRequest, UpdateProductRequest } from "../models/productRequest";
import { CreateUserRequest, DeleteUserRequest, GetUserRequest, LoginCheckRequest, UpdateUserRequest } from "../models/userRequest";
import { GetProductRequest } from "../models/productRequest";
import { ProductDto } from "../models/product";
import { UserDto } from "../models/user";
import { DeleteProductRequest } from "../models/productRequest";
import { BasketDto } from "../models/basket";

@Injectable({
  providedIn : 'root'
})
export class Services {

  private userData!:UserDto[];
  public user = new BehaviorSubject<any>("") 
    constructor(private httpClient : HttpClient){
 
    }

    basiApiUrl : string = 'http://localhost:5000/services/';


  getAllUsers(userRequest:GetUserRequest){
    debugger
    return this.httpClient.post<UserDto[]>('services/catalog/User/GetUserList',userRequest)
  }

  getSellers(userRequest:GetUserRequest){
    debugger
    return this.httpClient.post<UserDto[]>('services/catalog/User/GetUserList',userRequest).pipe(
      map((x)=>{
        return x.filter(q=>q.userType==1);
      })
    )
  }

  createUser(createUserRequest:CreateUserRequest) : Observable<string>{
    return this.httpClient.post<string>('services/catalog/User/CreateUser',createUserRequest)
  }

  updateUser(updateUserRequest : UpdateUserRequest) : Observable<boolean>{
    return this.httpClient.post<boolean>('services/catalog/User/UpdateUser',updateUserRequest)
  }

  deleteUser(deleteUserRequest : DeleteUserRequest) : Observable<boolean>{
    return this.httpClient.post<boolean>('services/catalog/User/DeleteUser',deleteUserRequest)
  }

  loginCheck(loginCheckRequest:LoginCheckRequest):Observable<boolean>{
    return this.httpClient.post<boolean>('services/catalog/User/LoginCheck',loginCheckRequest)
  }



  getProducts(productRequest:GetProductRequest):Observable<ProductDto[]>{
    return this.httpClient.post<ProductDto[]>('services/catalog/Product/GetProductList',productRequest);
  }

  createProduct(createProductRequest : CreateProductRequest) : Observable<string>{
    return this.httpClient.post<string>('services/catalog/Product/CreateProduct',createProductRequest)
  }

  updateProduct(updateProductRequest : UpdateProductRequest) : Observable<boolean>{
    return this.httpClient.post<boolean>('services/catalog/Product/UpdateProduct',updateProductRequest)
  }

  deleteProduct(deleteProductRequest : DeleteProductRequest) : Observable<boolean>{
    return this.httpClient.post<boolean>('services/catalog/Product/DeletePorduct',deleteProductRequest)
  }




  getBasket(userId:string):Observable<BasketDto[]>{
    return this.httpClient.post<BasketDto[]>( 'services/basket/Basket/GetProductList',userId)
  }

  createUpdateBasket(createBasketRequest:BasketDto):Observable<boolean>{
    return this.httpClient.post<boolean>('services/basket/Basket/CreateUpdateBasket',createBasketRequest)
  }

  deleteBasket(userId:string):Observable<boolean>{
    return this.httpClient.post<boolean>('services/basket/Basket/DeleteBasket',userId)
  }



  public setData(data: UserDto[]): void {
    this.userData = data;
  }

  public getData(): any {
    return this.userData;
  }
}