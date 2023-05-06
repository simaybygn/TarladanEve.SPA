import { Component, Input } from '@angular/core';
import { Services } from '../services/services';
import { Subscription, debounceTime, map } from 'rxjs';
import { ProductDto } from '../models/product';
import { FormControl, FormGroup, UntypedFormControl } from '@angular/forms';
import { GetProductRequest } from '../models/productRequest';
import { UserDto } from '../models/user';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  @Input() user!:UserDto;
  subscription!:Subscription;
  productList:ProductDto[]=[];
  searchForm=new FormGroup({
    searcItem: new FormControl()
  });

  constructor(private services:Services){
    this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe(()=>{
      this.getAllProducts();
    })
  }
  ngOnInit(){
    this.getAllProducts();
  }

  getAllProducts():void{
    if(this.subscription) this.subscription.unsubscribe();
    this.productList=[];
    this.services.getProducts({}).subscribe((res)=>{
      this.productList.push(...res);
      console.log(this.productList);
    })
  }


  getProductByType(n:number):void{
    debugger;
    this.productList=[];
    if(this.subscription) this.subscription.unsubscribe();
    this.services.getProducts({}).subscribe((res)=>{
      this.productList.push(...res.filter(q=>q.type==n));
    })
  }

}
