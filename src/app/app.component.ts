import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { SignModalComponent } from './sign-modal/sign-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'TarladanEve.SPA';
  tabId =0;

  constructor(private dialogRef : MatDialog){

  }
  openDialog(){
    this.dialogRef.open(SignModalComponent
      );
   }

  changeTab(Id:number){
    debugger
    this.tabId =Id;
  }

}
