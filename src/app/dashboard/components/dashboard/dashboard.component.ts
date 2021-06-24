import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { PagarReservaComponent } from '../../../pagar-reserva/pagar-reserva.component';
import { CrearReservaComponent } from 'src/app/crear-reserva/crear-reserva.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  onLogout() {
    this.userService.logOut();
  }

  openEdit(){
    const editRef = this.dialog.open(PagarReservaComponent, {
      width:'500px',
      height:'600px',
    });

    editRef.afterClosed().subscribe(() => {
    })
  }

  openCreate(){
    const createRef = this.dialog.open(CrearReservaComponent, {
      width:'500px',
      height:'600px',
    })

    createRef.afterClosed().subscribe(() => {
    })
  }

}
