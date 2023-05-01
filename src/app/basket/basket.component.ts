import { Component, OnInit } from '@angular/core';
import { Services } from '../services/services';
import { BasketDto } from '../models/basket';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html'
})
export class BasketComponent implements OnInit {

  userId!:string;     /////düzenle
  basketList:BasketDto[]=[];
  totalPrice:number=0;

  constructor(private services:Services,
    public modalRef: MdbModalRef<BasketComponent>) { }

  ngOnInit() {
    this.basketList=[{
      userId:'deneme',
      totalPrice:1000,
      items:[{
        quantity:2,
        productId:'',
        productName:'anamur muz',
        price:100
      }]
    },{
      userId:'deneme',
      totalPrice:1000,
      items:[{
        quantity:2,
        productId:'',
        productName:'portakal',
        price:20
      }]
    }];

    this.totalPrice=1520;
  }

  getBasket():void{
    this.services.getBasket(this.userId).subscribe((res)=>{
        this.basketList.push(...res);
        this.basketList.forEach(item => {
          this.totalPrice += item.totalPrice;
        });
    })
    
  }

}
