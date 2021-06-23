import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { authReq } from '../models/auth-req.model';
import { environment } from 'src/environments/environment';
import { dataEdit } from '../models/editData.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user;
  headers = {}
  constructor(
    private http: HttpClient
  ) { 
    this.headers['Content-Type'] = 'application/json';
  }

  checkEmail(body: authReq){
    return this.http.post(environment.URL + 'api/v1/auth', body, {headers: this.headers});
  }

  logOut(){
    localStorage.clear();
    sessionStorage.clear();
  }

  // Ver usuarios
  viewUsers(page: number, size: number) {
    var startRange = ((page * size) - size);
    var endRange = (page * size) - 1;
    this.headers['Range'] = `${startRange}-${endRange}`
    this.user = localStorage.getItem('token')? localStorage.getItem('token') : sessionStorage.getItem('token');
    console.log(this.user);
    this.headers['Authorization'] = 'Bearer ' + this.user;
    console.log("header:", this.headers['Authorization']);
    return this.http.get(environment.URL + 'api/v1/user', {headers: this.headers});
  }

  filterBy(opc:string, search: string) {
    this.user = localStorage.getItem('token')? localStorage.getItem('token') : sessionStorage.getItem('token');
    this.headers['Authorization'] = 'Bearer ' + this.user
    return this.http.get(environment.URL + `api/v1/user?${opc}=${search}`, {headers: this.headers});
  }

  deleteUser(user: number) {
    this.user = localStorage.getItem('token')? localStorage.getItem('token') : sessionStorage.getItem('token');
    this.headers['Authorization'] = 'Bearer ' + this.user
    return this.http.delete(environment.URL + `api/v1/user/${user}`, {headers: this.headers}); 
  }
  
  slotsInfo(){
    this.user = localStorage.getItem('token')? localStorage.getItem('token') : sessionStorage.getItem('token');
    this.headers['Authorization'] = 'Bearer ' + this.user
    return this.http.get(environment.URL + `api/v1/parking_slot`, {headers: this.headers});
  }

  modifyUser(user:string, body:dataEdit[]) {
    this.headers['Content-Type'] = 'application/json';
    this.user = localStorage.getItem('token')? localStorage.getItem('token') : sessionStorage.getItem('token');
    this.headers['Authorization'] = 'Bearer ' + this.user
    return this.http.patch(environment.URL + `api/v1/user/${user}`, body, {headers: this.headers});
  }
}
