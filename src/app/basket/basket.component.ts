import { Component, OnInit } from '@angular/core';
import { Services } from '../services/services';
import { BasketDto } from '../models/basket';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { UserDto } from '../models/user';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html'
})
export class BasketComponent implements OnInit {
  
  userDetail:UserDto[]=[];   
  basketList:BasketDto[]=[];
  totalPrice:number=0;

  constructor(private services:Services,
    public modalRef: MdbModalRef<BasketComponent>) { }

  ngOnInit() {
    this.userDetail=this.services.getData();
      console.log(this.userDetail);
    this.getBasket();
  }

  getBasket():void{
    debugger;
    if(this.userDetail!=undefined){
      this.services.getBasket(this.userDetail[0].id).subscribe((res)=>{
        this.basketList.push(res);
        console.log(this.basketList);
        this.basketList[0].products.forEach(product => {
          const productTotalPrice = product.quantity * product.price;
          this.totalPrice += productTotalPrice;
        });
    })
    }
    else{
      this.basketList=[{
        userId:"",
        products:[{
          quantity:0,
          productId:'',
          productName:'Ürün Ekleyiniz',
          price:0
        }]
        
      }];
    }
    
    
  }

}
