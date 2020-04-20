import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  LoginForm: FormGroup;

  constructor(private _user: UserService ) { }

  email:string;
  password: string;
  

  sendForm(){
    this._user.login(this.email, this.password)
  }

  ngOnInit(): void {
  }

}
