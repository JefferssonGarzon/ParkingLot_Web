import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoReturnLoginGuard implements CanActivate {
  
  user; 

  constructor(private router: Router){
    this.user = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  canActivate(){
    if(!this.user){
      return true
    }
    else {
      this.router.navigate(['/dashboard/inicio']);
      console.log(this.user);
      return false
    }
  }

  
}
