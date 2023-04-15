import { Component } from '@angular/core';
import { Services } from '../services/services';
import { Subscription } from 'rxjs';
import { ProductDto } from '../models/product';
import { FormControl, FormGroup } from '@angular/forms';
import { GetProductRequest } from '../models/productRequest';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  subscription!:Subscription;
  productList:ProductDto[]=[];
  form=new FormGroup({
    name: new FormControl(),
  });
  getProductRequest!:GetProductRequest;

  constructor(private services:Services){
    
  }
  ngOnInit(){
    this.getProducts();
  }

  getProducts():void{
    if(this.subscription) this.subscription.unsubscribe();
    this.getProductRequest=this.form.value;
    this.services.getProducts(this.getProductRequest).subscribe((res)=>{
      this.productList.push(...res);
      console.log(this.productList);
    })
  }



}
