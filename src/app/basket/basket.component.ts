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
        this.basketList.push(res[0]);
        console.log(this.basketList[0]);
        this.basketList.forEach(item => {
          this.totalPrice = item.items[0].price*item.items[0].quantity
        });
    })
    }
    else{
      this.basketList=[{
        userId:'',
        items:[{
          quantity:0,
          productId:'',
          productName:'',
          price:0
        }]
      }];
    }
    
    
  }

}
