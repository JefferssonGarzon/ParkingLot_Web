import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {

  user;
    
  constructor(private router: Router){
    this.user = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  canActivate(){
    if(this.user){
      return true
    }
    else {
      this.router.navigate(['/login']);
      return false
    }
  }

}
