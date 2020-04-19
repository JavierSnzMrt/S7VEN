import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private _user: UserService ) { }

  email:string;
  password: string;

  sendForm(){
    this._user.login(this.email, this.password)
  }

  ngOnInit(): void {
  }

}
