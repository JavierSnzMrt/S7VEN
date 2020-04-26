import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  RegisterForm: FormGroup;

  constructor(private _user: UserService) { }

  name: string;
  email: string;
  password: string;
  age: number;
  city: string;
  training: string;
  experience: string;
  user_area:string;
  offer: string;

  

  submitForm(){
    this._user.register(this.name, this.email, this.password, this.age, this.city, this.training, this.experience, this.user_area, this.offer)
  }

  ngOnInit(): void {
  }

}
