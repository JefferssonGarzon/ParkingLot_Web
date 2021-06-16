import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { dataEdit } from '../models/editData.model';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  headers = {}
  constructor(
    private http: HttpClient
  ) { 
    this.headers['Content-Type'] = 'application/json';
  }

  viewReservations(page: number, size: number) {
    var startRange = ((page * size) - size);
    var endRange = (page * size) - 1;
    this.headers['Range'] = `${startRange}-${endRange}`
    this.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    return this.http.get(environment.URL + 'api/v1/reservation', {headers: this.headers});
  }

  filterBy(opc:string, search: string) {
    this.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    return this.http.get(environment.URL + `api/v1/reservation?${opc}=${search}`, {headers: this.headers});
  }

  deleteReservation(reservation: number) {
    this.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    return this.http.delete(environment.URL + `api/v1/reservation/${reservation}`, {headers: this.headers}); 
  }

  modifyReservation(reservation:string, body:dataEdit[]) {
    this.headers['Content-Type'] = 'application/json';
    this.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    return this.http.patch(environment.URL + `api/v1/reservation/${reservation}`, body, {headers: this.headers});
  }

  getPayment(reservation:string){
    this.headers['Content-Type'] = 'application/json';
    this.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    return this.http.get(environment.URL + `api/v1/reservation/price/${reservation}`, {headers: this.headers});
  }

  postPay(body: any){
    this.headers['Content-Type'] = 'application/json';
    this.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    return this.http.post(environment.URL + 'api/v1/payment', body, {headers: this.headers});
  }
}
