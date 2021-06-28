import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dataEdit } from '../models/editData.model';
import { ReservasService } from '../services/reservas.service';


@Component({
  selector: 'app-edit-reserva',
  templateUrl: './edit-reserva.component.html',
  styleUrls: ['./edit-reserva.component.scss']
})
export class EditReservaComponent implements OnInit {

  form_Edit: FormGroup;
  dEdit: dataEdit[];
  errorD: any[] = [];

  constructor(private edit: MatDialogRef<EditReservaComponent>, 
    @Inject(MAT_DIALOG_DATA) public idReservation, 
    private reservasService: ReservasService) {
    this.buildForm();
   }

   ngOnInit(): void {
    console.log(this.idReservation);
  }

  onNoClick(){
    this.edit.close();
  }

  private buildForm() {
    this.form_Edit = new FormGroup({
      initial_hour: new FormControl(''),
      final_hour: new FormControl(''),
      number_plate: new FormControl(''),
      vehicle_type: new FormControl(''),
      slot: new FormControl(''),
      document_number: new FormControl(''),
      email: new FormControl(''),
      is_cancelled: new FormControl(''),
    })
  }

  saveEdit(data) {
    Object.keys(data).forEach(key => {
      if(data[key] == null || data[key] == '') {
        delete data[key];
      }
    })
    this.dEdit = data;

    this.reservasService.modifyReservation(this.idReservation, this.dEdit).subscribe(dataE => {
      alert('modificacion exitosa');
      this.onNoClick();
    }, (error) => {
      console.log(error.status);
      alert('Debe haber al menos un campo lleno');
    })
  }

}
