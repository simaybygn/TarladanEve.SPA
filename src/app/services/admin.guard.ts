import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Services } from "./services";

@Injectable({
    providedIn: 'root'
  })
 
export class AdminGuard implements CanActivate  {
    constructor (private service :Services,private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
         const user = this.service.user.value
              if(user.userType==0){
                return true;
              }
              else{
                return false;
              }
    }
}