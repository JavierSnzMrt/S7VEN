import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-actualizar-perfil',
  templateUrl: './actualizar-perfil.component.html',
  styleUrls: ['./actualizar-perfil.component.css']
})
export class ActualizarPerfilComponent implements OnInit {

  Act_Form: FormGroup;

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

  

  UpdateForm(){
    this._user.update(this.name, this.email, this.password, this.age, this.city, this.training, this.experience, this.user_area, this.offer)
  }

  ngOnInit(): void {
  }

}
