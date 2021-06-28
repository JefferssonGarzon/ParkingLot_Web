import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dataEdit } from '../models/editData.model';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.scss']
})
export class CrearReservaComponent implements OnInit {

  form_Edit: FormGroup;
  dEdit: dataEdit[];
  errorD: any[] = [];
  slots = [];

  constructor(private edit: MatDialogRef<CrearReservaComponent>, 
    @Inject(MAT_DIALOG_DATA) public idReservation, 
    private reservasService: ReservasService) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.reservasService.getSlots().subscribe(data => {
      data["data"].forEach(element => {
        if(element.status == 'Disponible'){
          this.slots.push(element.id)
        }
      });
    },error => {
      alert('Error al consultar los slots disponibles')
    })
  }

  onNoClick(){
    this.edit.close();
  }

  private buildForm() {
    this.form_Edit = new FormGroup({
      document: new FormControl(''),
      email: new FormControl(''),
      initial_hour: new FormControl(''),
      number_plate: new FormControl(''),
      slot: new FormControl(''),
      vehicle_type: new FormControl(''),
    })
  }

  saveEdit(data) {
    Object.keys(data).forEach(key => {
      if(data[key] == null || data[key] == '') {
        delete data[key];
      }
    })
    this.dEdit = data;
    data['slot'] = parseInt(data['slot'])
    var fecha = new Date();
    var fechaFormat = ''
    fechaFormat = fecha.toISOString().substring(0,10).concat(" ", data['initial_hour'])
    data['initial_hour'] = fechaFormat
    this.reservasService.createReservation(this.dEdit).subscribe(dataE => {
      alert('Reserva creada Exitosamente');
      this.onNoClick();
    }, (error) => {
      console.log(error.status);
      alert('Error al crear la reserva')
    })
  }

}


