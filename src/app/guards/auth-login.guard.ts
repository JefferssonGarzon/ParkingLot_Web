import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {

  user = localStorage.getItem('token')

  constructor(private router: Router){

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
