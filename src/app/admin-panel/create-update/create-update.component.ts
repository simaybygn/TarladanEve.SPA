import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { CreateProductRequest, UpdateProductRequest } from 'src/app/models/productRequest';
import { Services } from 'src/app/services/services';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html'
})
export class CreateUpdateComponent implements OnInit {
  createProductRequest!:CreateProductRequest;
  updateProductRequest!:UpdateProductRequest;
  form=new FormGroup({
    name: new FormControl(),
    price:new FormControl(),
    description:new FormControl(),
    type:new FormControl()
  });
  

  constructor(
    private services:Services,
    @Inject(DIALOG_DATA) public data:any,
    public dialogRef:DialogRef<boolean>
     ) { }

  ngOnInit() {
    if(this.data.id!=null||''){
      this.form.patchValue({
        name:this.data.name,
        price:this.data.price,
        description:this.data.description,
        type:this.data.type
      })
    }
  }

  updateProduct(){
    this.updateProductRequest={
      id:this.data.id,
      name:this.form.value.name,
      type:this.form.value.type,
      description:this.form.value.description,
      price:this.form.value.price
    }

    this.services.updateProduct(this.updateProductRequest).subscribe((res)=>{
      if(res==true){
        return true;
      }
      else{
        return of("Hata!!");
      }
    })
  }

  createProduct(){
    this.createProductRequest={
      name:this.form.value.name,
      type:this.form.value.type,
      description:this.form.value.description,
      price:this.form.value.price
    }

    this.services.createProduct(this.createProductRequest).subscribe((res)=>{
      if(res !=''){
        return true;
      }
      else{
        return of("Hata!!");
      }
    })
  }

}
