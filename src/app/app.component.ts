import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SignModalComponent } from './sign-modal/sign-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'TarladanEve.SPA';
  tabId =0;

  constructor(private dialog : MatDialog){

  }
  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: '1%',
      left: '10%'
    };
    
    const dialogRef = this.dialog.open(SignModalComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
   }
   

  changeTab(Id:number){
    debugger
    this.tabId =Id;
  }

}
