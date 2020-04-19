import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient, HttpHeaders }from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private _user: UserService, private _http: HttpClient ) { }

  logout(){
    this._user.logout();
  }

  usuarios: object;

  ngOnInit(): void {
    this._http.get("http://localhost:3000/verUsuarios", {withCredentials: true})
    .subscribe((responseAPI) => {
      this.usuarios = responseAPI;
    })
  }

}
