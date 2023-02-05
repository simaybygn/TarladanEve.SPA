import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Services } from '../services/services';
@Component({
  selector: 'tarladan-eve-homePage',
  templateUrl: './homePage.component.html'
})
export class HomePageComponent {
      constructor(private services:Services){
        
      }

    ngOnInit(){
      debugger
           this.services.getAllUsers().subscribe(data=>{
              console.log(data);
})
    }


    
}
