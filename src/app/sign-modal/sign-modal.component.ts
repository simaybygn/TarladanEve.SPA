import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { Services } from '../services/services';
import { UserDto } from '../models/user';
import { CreateUserRequest, LoginCheckRequest } from '../models/userRequest';

@Component({
  selector: 'app-sign-modal',
  templateUrl: './sign-modal.component.html'
})
export class SignModalComponent  implements OnInit{
  @Output() userDataEvent = new EventEmitter<LoginCheckRequest>();
  loginRequest!:LoginCheckRequest;
  signUpRequest!:CreateUserRequest;
  loginForm=new FormGroup({
    userName: new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
  });
  signUpForm=new FormGroup({
    name: new FormControl(),
    surname:new FormControl(),
    userName:new FormControl(),
    email: new FormControl(),
    password:new FormControl(),
    phone:new FormControl(),
    userType:new FormControl(),
    address:new FormControl(),
  });


  constructor(private service: Services) { }

  
  ngOnInit(): void {
      
  }
  
  signUp(){
    this.signUpRequest={
      name:this.signUpForm.value.name,
      surname:this.signUpForm.value.surname,
      userName:this.signUpForm.value.userName,
      email:this.signUpForm.value.email,
      password:this.signUpForm.value.password,
      phone:this.signUpForm.value.phone,
      userType:this.signUpForm.value.userType,
      address:this.signUpForm.value.address
    }

    this.service.createUser(this.signUpRequest).subscribe((res)=>{
      if(res !=''){
        return true;
        ///open Login tab
      }
      else{
        return of("Hatalı deneme");
      }
    })
  }

  login()
    {
      this.loginRequest={
        email:this.loginForm.value.email,
        userName:this.loginForm.value.userName,
        password:this.loginForm.value.password
      };

      this.service.loginCheck(this.loginRequest).subscribe((res)=>{
        if(res==true){
          this.userDataEvent.emit(this.loginRequest);
        }
      })
    }
  }
