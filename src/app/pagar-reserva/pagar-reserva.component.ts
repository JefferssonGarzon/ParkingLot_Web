import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dataEdit } from '../models/editData.model';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-pagar-reserva',
  templateUrl: './pagar-reserva.component.html',
  styleUrls: ['./pagar-reserva.component.scss']
})
export class PagarReservaComponent implements OnInit {

  id_reservation = "0"
  price_reservation = "0"
  form_Edit: FormGroup;
  dEdit: dataEdit[];
  errorD: any[] = [];

  constructor(private edit: MatDialogRef<PagarReservaComponent>, 
    @Inject(MAT_DIALOG_DATA) public idReservation, 
    private reservasService: ReservasService) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  onNoClick(){
    this.edit.close();
  }

  private buildForm() {
    this.form_Edit = new FormGroup({
      reservation_id: new FormControl(''),
      concept: new FormControl('Pago de reserva'),
      state: new FormControl('approved'),
    })
  }

  saveEdit(data) {
    Object.keys(data).forEach(key => {
      if(data[key] == null || data[key] == '') {
        delete data[key];
      }
    })
    this.dEdit = data;
    var body = {
      "reservation": parseInt(data.reservation_id),
      "price": this.price_reservation,
      "concept": data.concept,
      "status": data.state
    }
    this.reservasService.postPay(body).subscribe(dataE => {
      alert('Pago exitoso');
      this.onNoClick();
    }, (error) => {
      console.log(error.status);
      if(error.status == 409){
        alert(`El pago de la reserva numero ${body.reservation} ya ha sido pagado anteriormente`);
      } else {
        alert('Error en el pago de la reserva, porfavor revisa que los campos estén completos y asegurate de hacer click en "Calcular Precio"');
      }
    })
  }

  setId(id){
    this.id_reservation = id
  }

  calcular(){
    this.reservasService.getPayment( this.id_reservation).subscribe(data => {
      this.price_reservation = data['price']
    }, (error) => {
      console.log(error.status);
      alert('Error al calcular el precio de la reserva,verifica que el ID sea correcto');
    })
  }


}


