import { Component, Injectable, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorIntl, MatPaginator, MatPaginatorDefaultOptions, MAT_PAGINATOR_DEFAULT_OPTIONS } from '@angular/material/paginator';
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

@Injectable()
export class ListarUsuariosComponent extends MatPaginatorIntl implements OnInit{

  users: user[];
  searchUser = new FormControl('');
  getDoc: string;

  getOpc: string;

  numPag: number = 1;
  lenght: number;
  tamPag: number = 10;

  constructor(private userService: UserService, private dialog: MatDialog) {
    super();
    this.itemsPerPageLabel = 'Items por pagina:';
    this.previousPageLabel = 'pagina anterior';
    this.nextPageLabel = 'pagina siguiente';
    this.getRangeLabel = () => `${this.numPag} - ${this.tamPag}`;
  }

  ngOnInit() {

  }

  getAllUsers() {
    this.userService.viewUsers(this.numPag, this.tamPag).subscribe(data => {
      this.users = data['data'];
      this.lenght = data['count'];
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
      this.getAllUsers();
    })
  }

}