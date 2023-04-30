import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductDto } from '../models/product';
import { Services } from '../services/services';
import { DeleteProductRequest, GetProductRequest } from '../models/productRequest';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
})
export class AdminPanelComponent implements OnInit {
  itemSearchInput = new FormControl('');
  @Output() selectProductEvent = new EventEmitter<ProductDto>();
  productList:ProductDto[]=[];
  deleteProductRequest!:DeleteProductRequest;
  selectedProduct?:ProductDto;

  constructor(
    private dialog : MatDialog,
    private services:Services 
  ){}


  ngOnInit(): void {
      
  }

  getProductList():void{

    const request:GetProductRequest={
      name:this.itemSearchInput.value || ''
    };
    
    this.services.getProducts(request).subscribe((data)=>{
      this.productList.push(...data);
    })
  }

  selectProduct(item:ProductDto,action:string):void{
    this.selectedProduct=item;
    this.selectProductEvent.emit(this.selectedProduct);

    if(action=='update'){
      this.openDialog(this.selectedProduct);
    }
    if(action=='delete'){
      this.deleteProduct(this.selectedProduct);
    }
  }

  deleteProduct(item:ProductDto):void{
    this.deleteProductRequest={
      id:item.id
    }
    this.services.deleteProduct(this.deleteProductRequest).subscribe((res)=>{
      if(res==true){
        return true;
      }
      else{
        return of("Hata!!");
      }
    })

  }

  newProduct():void{
    const item:ProductDto={
      id:'',
      type:0,
      description:'',
      price:0,
      name:''
    };

    this.openDialog(item);
  }

  openDialog(data:ProductDto){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: '1%',
      left: '10%',
    };
    
    const dialogRef = this.dialog.open(CreateUpdateComponent,{
      width:'1000px',
      autoFocus:false,
      disableClose:true,
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
   }
   

}
