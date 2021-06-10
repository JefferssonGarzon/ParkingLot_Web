import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // emailField = new FormControl('', [Validators.required, Validators.email]);
  // passField = new FormControl('', [Validators.required, Validators.minLength(6)]);
  form: FormGroup;
  
  constructor(private userService: UserService, private router:Router) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = new FormGroup({
      user: new FormControl('',Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', [Validators.required]),
      keep_logged_in: new FormControl(false),
    });

  }

  save(data) {
    data['type'] = 'admin';
    this.userService.checkEmail(data).subscribe(response => {
      // localStorage.setItem(
      //   'token', response['token']
        localStorage.setItem('token', response['token']);
        this.router.navigate(['/dashboard/inicio']);
    }),(error => {
      console.log(error.status);
    })
  }
}
