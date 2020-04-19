import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private _user: UserService) { }

  name: string;
  email: string;
  password: string;
  city: string;
  age: number;
  training: string;
  experience: string;
  offer: string;

  submitForm(){
    this._user.register(this.name, this.email, this.password, this.city, this.age, this.training, this.experience, this.offer)
  }

  ngOnInit(): void {
  }

}
