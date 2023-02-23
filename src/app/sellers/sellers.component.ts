import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { Services } from '../services/services';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html'
})
export class SellersComponent {
  sellers : any[] | undefined;
  constructor(private services:Services){
    
  }
  ngOnInit(services:Services){

    this.services.getSellers().subscribe(data=>{
      this.sellers =data;
})
  }
}

