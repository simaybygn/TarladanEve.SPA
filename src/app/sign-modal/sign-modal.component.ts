import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { Services } from '../services/services';
import { UserDto } from '../models/user';
import { CreateUserRequest, LoginCheckRequest } from '../models/userRequest';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-sign-modal',
  templateUrl: './sign-modal.component.html'
})
export class SignModalComponent  implements OnInit{
  @Output() userDataEvent = new EventEmitter<UserDto[]>();
  loginRequest!:LoginCheckRequest;
  signUpRequest!:CreateUserRequest;
  userDetail:UserDto[]=[];
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
    photoUrl:new FormControl()
  });


  constructor(private service: Services,
    public modalRef: MdbModalRef<SignModalComponent>) { }

  
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
      address:this.signUpForm.value.address,
      photoUrl:this.signUpForm.value.photoUrl
    }

    this.service.createUser(this.signUpRequest).subscribe((res)=>{
      this.modalRef.close();
    })
  }

  login()
    {
      this.userDetail=[];
      this.loginRequest={
        email:this.loginForm.value.email,
        userName:this.loginForm.value.userName,
        password:this.loginForm.value.password
      };

      this.service.loginCheck(this.loginRequest).subscribe((res)=>{
        if(res==true){
          console.log(res);
          this.modalRef.close();
        }
      })

      this.service.getAllUsers({userName:this.loginForm.value.userName}).subscribe((res)=>{
           this.userDetail.push(...res);
      })
      
      this.service.setData(this.userDetail);
    }
  }
