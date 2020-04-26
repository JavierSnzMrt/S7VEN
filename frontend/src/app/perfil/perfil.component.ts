import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient, HttpHeaders }from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private _user: UserService, private _http: HttpClient ) {}

  usuarios: object;

  logout(){
    this._user.logout();
  }

  ngOnInit(): void {
    this._http.get(`http://localhost:3000/verUsuario/:${this.usuarios[0]}`, {withCredentials: true})
    .subscribe((responseAPI) => {
      this.usuarios = responseAPI;
    })
  }

}
