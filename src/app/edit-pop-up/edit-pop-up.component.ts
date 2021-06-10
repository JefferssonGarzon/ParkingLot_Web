import { flatten, ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dataEdit } from '../models/editData.model';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-edit-pop-up',
  templateUrl: './edit-pop-up.component.html',
  styleUrls: ['./edit-pop-up.component.scss']
})
export class EditPopUpComponent implements OnInit {

  form_Edit: FormGroup;
  dEdit: dataEdit[];
  errorD: any[] = [];

  constructor(private edit: MatDialogRef<EditPopUpComponent>, 
    @Inject(MAT_DIALOG_DATA) public idUser, 
    private userService: UserService) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  onNoClick(){
    this.edit.close();
  }

  private buildForm() {
    this.form_Edit = new FormGroup({
      document: new FormControl(''),
      name: new FormControl(''),
      cellphone: new FormControl(''),
      gender: new FormControl(''),
      number_plate: new FormControl(''),
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

    this.userService.modifyUser(this.idUser, this.dEdit).subscribe(dataE => {
      alert('modificacion exitosa');
      this.onNoClick();
    }, (error) => {
      console.log(error.status);
      alert('Debe haber al menos un campo lleno o seleccionado');
    })
  }
}
