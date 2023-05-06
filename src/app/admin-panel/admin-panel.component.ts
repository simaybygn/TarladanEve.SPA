import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductDto } from '../models/product';
import { Services } from '../services/services';
import { DeleteProductRequest, GetProductRequest } from '../models/productRequest';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { of } from 'rxjs';
import { UserDto } from '../models/user';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
})
export class AdminPanelComponent implements OnInit {
  itemSearchInput = new FormControl('');
  userDetail:UserDto[]=[];
  @Output() selectProductEvent = new EventEmitter<ProductDto>();
  productList:ProductDto[]=[];
  deleteProductRequest!:DeleteProductRequest;
  selectedProduct?:ProductDto;
  modalRef: MdbModalRef<CreateUpdateComponent> | null = null;

  constructor(
    private dialog : MatDialog,
    private services:Services ,
    private modalService: MdbModalService
  ){}


  ngOnInit(): void {
      this.getUserDetail();
      this.getProductList();
  }

  getUserDetail():void{
    this.userDetail=this.services.getData();
   console.log(this.userDetail);
  }

  getProductList():void{
    this.productList=[];
    const request:GetProductRequest={
      name:this.itemSearchInput.value || ''
    };
    
    this.services.getProducts({}).subscribe((data)=>{
      this.productList.push(...data);
    })
  }

  selectProduct(item:ProductDto,action:string):void{
    this.selectedProduct=item;
    this.selectProductEvent.emit(this.selectedProduct);

    if(action=='update'){
      this.openModal(this.selectedProduct);
    }
    if(action=='delete'){
      this.deleteProduct(this.selectedProduct);
    }
  }

  deleteProduct(item:ProductDto):void{
    debugger;
    this.deleteProductRequest={
      id:item.id
    }
    this.services.deleteProduct(this.deleteProductRequest).subscribe((res)=>{
      console.log(res);
      this.getProductList();
    })

  }

  newProduct():void{
    const item:ProductDto={
      id:'',
      type:0,
      description:'',
      price:0,
      name:'',
      photoUrl:''
  };

    this.openModal(item);
  }

  openModal(data:ProductDto){
    this.modalRef = this.modalService.open(CreateUpdateComponent,{
      data:data
    })
  }

   

}
