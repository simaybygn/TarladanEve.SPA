import { Component } from '@angular/core';
import { Services } from '../services/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  products : any[] | undefined;
  constructor(private services:Services){
    
  }
  ngOnInit(services:Services){
                   this.services.getAllProducts().subscribe(data=>{
              this.products =data;
  })
}
}
