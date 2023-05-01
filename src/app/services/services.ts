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

  public user = new BehaviorSubject<any>("") 
    constructor(private httpClient : HttpClient){
 
    }

    basiApiUrl : string = 'https://localhost:7129/api/';


  getAllUsers(userRequest:GetUserRequest){
    debugger
    return this.httpClient.post<UserDto[]>(this.basiApiUrl + 'User/GetUser',userRequest)
  }

  getSellers(){
    debugger
    return this.httpClient.get<UserDto[]>(this.basiApiUrl + 'User/GetSellers').pipe(
      map((x)=>{
        return x.filter(q=>q.userType==1);
      })
    )
  }

  createUser(createUserRequest:CreateUserRequest) : Observable<string>{
    return this.httpClient.post<string>(this.basiApiUrl + 'User/CreateUser',createUserRequest)
  }

  updateUser(updateUserRequest : UpdateUserRequest) : Observable<boolean>{
    return this.httpClient.post<boolean>(this.basiApiUrl + 'User/UpdateUser',updateUserRequest)
  }

  deleteUser(deleteUserRequest : DeleteUserRequest) : Observable<boolean>{
    return this.httpClient.post<boolean>(this.basiApiUrl + 'User/DeleteUser',deleteUserRequest)
  }

  loginCheck(loginCheckRequest:LoginCheckRequest):Observable<boolean>{
    return this.httpClient.post<boolean>(this.basiApiUrl + 'User/DeleteUser',loginCheckRequest)
  }



  getProducts(productRequest:GetProductRequest):Observable<ProductDto[]>{
    return this.httpClient.post<ProductDto[]>(this.basiApiUrl + 'Product/GetProducts',productRequest);
  }

  createProduct(createProductRequest : CreateProductRequest) : Observable<string>{
    return this.httpClient.post<string>(this.basiApiUrl + 'Product/CreateProduct',createProductRequest)
  }

  updateProduct(updateProductRequest : UpdateProductRequest) : Observable<boolean>{
    return this.httpClient.post<boolean>(this.basiApiUrl + 'Product/UpdateProduct',updateProductRequest)
  }

  deleteProduct(deleteProductRequest : DeleteProductRequest) : Observable<boolean>{
    return this.httpClient.post<boolean>(this.basiApiUrl + 'Product/DeleteProduct',deleteProductRequest)
  }




  getBasket(userId:string):Observable<BasketDto[]>{
    return this.httpClient.post<BasketDto[]>(this.basiApiUrl + 'Product/UpdateProduct',userId)
  }

  createUpdateBasket(createBasketRequest:BasketDto):Observable<boolean>{
    return this.httpClient.post<boolean>(this.basiApiUrl+ 'Product/DeleteProduct',createBasketRequest)
  }

  deleteBasket(userId:string):Observable<boolean>{
    return this.httpClient.post<boolean>(this.basiApiUrl+ 'Product/DeleteProduct',userId)
  }
}