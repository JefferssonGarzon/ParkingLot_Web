import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoReturnLoginGuard implements CanActivate {
  user = localStorage.getItem('token')

  constructor(private router: Router){

  }

  canActivate(){
    if(!this.user){
      return true
    }
    else {
      this.router.navigate(['/dashboard']);
      console.log(this.user);
      return false
    }
  }

  
}
