import { Component, OnInit } from '@angular/core';
import { Datos, pSlots } from '../models/slots.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-parking-slots',
  templateUrl: './parking-slots.component.html',
  styleUrls: ['./parking-slots.component.scss']
})
export class ParkingSlotsComponent implements OnInit {

  slots: Datos[] = [];

  numSlots: number;
  dataSlots: any[];
  viewSlots= [];
  status:boolean[] = [];
  constructor(private userService: UserService) { }


  ngOnInit(){ 
    this.userService.slotsInfo().subscribe(data => {
      this.numSlots = data['count'];
      this.dataSlots = data['data'];
      this.slots = data['data']; 
      this.status = data['data']['status'];
      console.log(this.numSlots);
      console.log(this.slots[0]['status']);
      for(let i = 0; i < this.numSlots; i++) {
        this.viewSlots.push(i);
        // if(this.slots[i]['status'] == 'Ocupado'){
        //   this.status.push(true);
        // } 
      }
      console.log('slots: ', this.numSlots);
      
    })
  }

  getSlots() {
    
    
    
  }
}
