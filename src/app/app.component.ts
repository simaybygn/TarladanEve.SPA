import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SignModalComponent } from './sign-modal/sign-modal.component';
import { BasketComponent } from './basket/basket.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'TarladanEve.SPA';
  tabId =0;
  modalRef: MdbModalRef<BasketComponent> | null = null;

  constructor(private dialog : MatDialog,
    private modalService: MdbModalService){

  }
  
  // openDialog(){
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.position = {
  //     top: '1%',
  //     left: '10%',
  //   };
    
  //   const dialogRef = this.dialog.open(SignModalComponent,dialogConfig);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  //  }
   

  changeTab(Id:number){
    this.tabId =Id;
  }

  openBasketModal(){
    this.modalRef = this.modalService.open(BasketComponent)
  }

  openDialog(){
    this.modalRef = this.modalService.open(SignModalComponent)
  }
}
