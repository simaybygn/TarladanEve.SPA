import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppComponent } from "../app.component";
import { Product } from "../models/product";
import { CreateProductRequest, GetDeleteProductRequest, UpdateProductRequest } from "../models/productRequest";
import { User } from "../models/user";
import { CreateUserRequest, GetDeleteUserRequest, UpdateUserRequest } from "../models/userRequest";

@Injectable({
  providedIn : 'root'
})
export class Services {
    constructor(private httpClient : HttpClient){
 
    }

    users : User[]=[];
    products : Product[]=[];
    basiApiUrl : string = 'https://localhost:7129/api/';


  getAllUsers(){
    debugger
    return this.httpClient.get<User[]>(this.basiApiUrl + 'User/GetAllUsers');
  }
  getSellers(){
    debugger
    return this.httpClient.get<User[]>(this.basiApiUrl + 'User/GetSellers');
  }
  
  getUserByName(userRequest : GetDeleteUserRequest) : Observable<User>
  {
    return this.httpClient.post<User>(this.basiApiUrl + 'User/GetUserByName',userRequest)
  }


  createUser(userRequest : CreateUserRequest) : Observable<User>{
    return this.httpClient.post<User>(this.basiApiUrl + 'User/CreateUser',userRequest)
  }

  updateUser(userRequest : UpdateUserRequest) : Observable<User>{
    return this.httpClient.post<User>(this.basiApiUrl + 'User/UpdateUser',userRequest)
  }

  deleteUser(userRequest : GetDeleteUserRequest) : Observable<User>{
    return this.httpClient.post<User>(this.basiApiUrl + 'User/DeleteUser',userRequest)
  }


  getAllProducts(){
    return this.httpClient.get<Product[]>(this.basiApiUrl + 'Product/GetProducts');
  }

  // GetProductsByCreatedIdAndName(productRequest : GetDeleteProductRequest) : Observable<Product>
  // {
  //   return this.httpClient.post<Product>(this.basiApiUrl + 'Product/GetProductsByCreatedIdAndName',productRequest)
  // }

  createProduct(productRequest : CreateProductRequest) : Observable<Product>{
    return this.httpClient.post<Product>(this.basiApiUrl + 'Product/CreateProduct',productRequest)
  }

  updateProduct(productRequest : UpdateProductRequest) : Observable<Product>{
    return this.httpClient.post<Product>(this.basiApiUrl + 'Product/UpdateProduct',productRequest)
  }

  deleteProduct(productRequest : GetDeleteProductRequest) : Observable<Product>{
    return this.httpClient.post<Product>(this.basiApiUrl + 'Product/DeleteProduct',productRequest)
  }

}