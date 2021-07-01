import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { reservationSlot } from '../models/slots.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { EditReservaComponent } from '../edit-reserva/edit-reserva.component';
import { ReservasService } from '../services/reservas.service'

@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styleUrls: ['./listar-reservas.component.scss']
})
export class ListarReservasComponent implements OnInit {

  reservations: reservationSlot[];
  searchReservation = new FormControl('');
  getDoc: string;

  getOpc: string;

  numPag: number = 1;
  tamPag: number = 10;
  constructor(private reservasService: ReservasService, private dialog: MatDialog) { }

  ngOnInit() {
    this.reservasService.viewReservations(this.numPag, this.tamPag).subscribe(data => {
      this.reservations= data['data'];
      console.log(this.reservations)
    },error => {
      console.log(error.status);
    })
  }

  getAllReservations() {
    this.reservasService.viewReservations(this.numPag, this.tamPag).subscribe(data => {
      this.reservations= data['data'];
    },error => {
      console.log(error.status);
    })
  }

  getDelReservation(reservation:number){
    this.reservasService.deleteReservation(reservation).subscribe(() => {
      alert(`La reserva ${reservation} ha sido eliminada`)
      this.reservasService.viewReservations(this.numPag, this.tamPag).subscribe(data => {
        this.reservations = data['data']
      })
    }, error => {
      console.log(error.status)
      alert(`Error al eliminar la reserva: ${reservation}`)
    })
  }

  openEdit(data:number){
    const editRef = this.dialog.open(EditReservaComponent, {
      width:'500px',
      height:'600px',
      data: data,
    });

    editRef.afterClosed().subscribe(() => {
      console.log('La edicion se cerró');
      this.getAllReservations();
    })
  }
  

}
