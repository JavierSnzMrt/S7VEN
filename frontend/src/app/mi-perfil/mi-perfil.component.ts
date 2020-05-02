import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  id: number;

  constructor(private _user: UserService, private _http: HttpClient, private rutaActiva: ActivatedRoute, private _router: Router) { }

  usuario: {
    name: string;
    email: string;
    password: string;
    age: number;
    city: string;
    training: string;
    experience: string;
    user_area:string;
    offer: string;
  }

  logout(){
    this._user.logout();
  }

  Eliminar(){
    this.id=this.rutaActiva.snapshot.params.id
    console.log(this.id);
    this._http.delete(`http://localhost:3000/borrarUsuario/${this.id}`, {withCredentials: true})
    .subscribe((responseAPI) => {
      console.log(responseAPI);
      this._router.navigateByUrl("/login");
    })
  }

  ngOnInit(): void {
    this.id=this.rutaActiva.snapshot.params.id
    console.log(this.id);
    this._http.get(`http://localhost:3000/verUsuario/${this.id}`, {withCredentials: true})
    .subscribe((responseAPI) => {
      console.log(responseAPI)
      this.usuario = responseAPI[0];
    })
  }

}
