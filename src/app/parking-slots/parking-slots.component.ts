import { Component, OnInit } from '@angular/core';
import { Datos } from '../models/slots.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-parking-slots',
  templateUrl: './parking-slots.component.html',
  styleUrls: ['./parking-slots.component.scss']
})
export class ParkingSlotsComponent implements OnInit {

  slots: Datos[] = [];

  numSlots: number;
  codeSlot:string[] = [];
  dataSlot: any[] = [];
  viewSlots = [];
  status:boolean[] = [];

  // para ver la info de c/slot
  place_code:string;
  statusSlot:string;
  constructor(private userService: UserService) { }

  // info de reservas
  estado_reserva:string;
  band_reserva:boolean;
  tipo_usuario:string;
  hora_comienzo:Date;
  hora_final:Date;
  tipo_vehiculo:string;


  // info de usuario registrado
  doc_user:string;
  name_user:string;
  email_user:string;
  gen_user:string;

  ngOnInit(){ 
    this.userService.slotsInfo().subscribe(data => {
      this.numSlots = data['count'];
      this.slots = data['data'];
      for(let i = 0; i < this.numSlots; i++) {
        this.viewSlots.push(i);
        this.codeSlot.push(this.slots[i].place_code);
        if(this.slots[i]['status'] == 'Ocupado'){
          this.status.push(true);
        }
        else{
          this.status.push(false);
        }
      }
    })
  }

  viewData(num:number){ 
    this.place_code = this.slots[num].place_code;
    this.statusSlot = this.slots[num].status;

    if(this.slots[num].reservation == null){
      this.estado_reserva = 'Disponible para reserva';
      this.band_reserva = true;
    }else {
      this.band_reserva = false;
      this.hora_comienzo = this.slots[num].reservation.initial_hour;
      this.hora_final = this.slots[num].reservation.final_hour;
      if (this.slots[num].reservation.document_number != null) {
        this.tipo_usuario = 'No registrado';
      }else {
        this.tipo_usuario = 'Registrado';
        this.doc_user = this.slots[num].reservation.user.document;
        this.name_user = this.slots[num].reservation.user.name;
        this.email_user = this.slots[num].reservation.user.email;

        if(this.slots[num].reservation.user.gender == "M"){
          this.gen_user = 'Masculino';
        }
        else if(this.slots[num].reservation.user.gender == 'F'){
          this.gen_user = 'Femenino';
        }
        else {
          this.gen_user = 'Indefinido';
        }
        
      }
      this.tipo_vehiculo = this.slots[num].reservation.vehicle_type;
    }
    
    
    
    
  }


}
