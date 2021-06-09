import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { debounceTime } from 'rxjs/operators';
import { EditPopUpComponent } from '../edit-pop-up/edit-pop-up.component';
import { user } from '../models/user.model';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit{

  users: user[];
  searchUser = new FormControl('');
  getDoc: string;

  getOpc: string;

  numPag: number = 1;
  tamPag: number = 10;
  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit() {
    
  }

  getAllUsers() {
    this.userService.viewUsers(this.numPag, this.tamPag).subscribe(data => {
      this.users = data['data'];
    },error => {
      console.log(error.status);
    })    
  }

  getSearch(event: Event) {
    event.preventDefault();
    this.userService.filterBy(this.getOpc, this.searchUser.value).subscribe(data => {
      this.users = data['data'];
    }, error => {
      console.log(error.status);
    })
  }

  saveChanges(event: MatSelectChange) {
    this.getOpc = event.value;
  }

  getDelUser(user:number){
    console.log(user);
    this.userService.deleteUser(user).subscribe(() => {
      alert(`el usuario ${user} ha sido eliminado`);
      this.userService.viewUsers(this.numPag, this.tamPag).subscribe(data => {
        this.users = data['data'];
      })
    }, error => {
      console.log(error.status);
    })
  }

  openEdit(data:number){
    const editRef = this.dialog.open(EditPopUpComponent, {
      width:'500px',
      height:'600px',
      data: data,
    });

    editRef.afterClosed().subscribe(() => {
      console.log('La edicion se cerró');
      this.getAllUsers();
    })
  }

}