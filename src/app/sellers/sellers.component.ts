import { Component } from '@angular/core';
import { Subscription, filter } from 'rxjs';
import { Services } from '../services/services';
import { UserDto } from '../models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { GetUserRequest } from '../models/userRequest';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html'
})
export class SellersComponent {
  subscription!:Subscription;
  userList:UserDto[]=[];
  form=new FormGroup({
    name: new FormControl(),
  });
  getUserRequest!:GetUserRequest;

  constructor(private services:Services){
    
  }
  ngOnInit(){
    this.getSellers();
  }

  getSellers():void{
    if(this.subscription) this.subscription.unsubscribe();
    this.services.getSellers({}).subscribe((res)=>{
      this.userList.push(...res);
      console.log(this.userList);
    })
  }
}

