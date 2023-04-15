import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Services } from '../services/services';
import { Router, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductsComponent } from '../products/products.component';
import { SellersComponent } from '../sellers/sellers.component';
@Component({
  selector: 'tarladan-eve-homePage',
  templateUrl: './homePage.component.html'
})
export class HomePageComponent {

    ngOnInit(){
//       debugger
//            this.services.getAllUsers().subscribe(data=>{
//               console.log(data);
// })
console.log("başarılı")
    }

}
