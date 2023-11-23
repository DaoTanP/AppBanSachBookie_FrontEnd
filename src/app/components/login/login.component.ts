import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  protected waiting: boolean = false;

  protected username: FormControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);
  protected password: FormControl = new FormControl(null, [Validators.required, Validators.minLength(8)]);

  public loginForm: FormGroup = new FormGroup({
    username: this.username,
    password: this.password,
  });
  constructor()
  {
    
  }

  public login (): void
  {
    
  }
}
