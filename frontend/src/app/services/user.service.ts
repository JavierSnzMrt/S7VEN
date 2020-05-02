import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import * as jwt from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient, private _router: Router) { }

  isLoggedIn = false;

  login(email:string, password:string){
    this._http.post("http://localhost:3000/login", {
      "email": email,
      "password": password
    })
    .subscribe((responseAPI) => {
      if(environment.production === false){
        document["cookie"] = `sello = ${responseAPI["token"]}`
        localStorage.setItem("token",responseAPI["token"])
      }
      this.isLoggedIn=true;
      this._router.navigateByUrl("/usuarios");
    })
  }

  register(name:string, email:string, password:string, age:number, city:string, training:string, experience:string, user_area:string, offer:string ){
    this._http.post("http://localhost:3000/nuevoUsuario", {
      "name": name,
      "email": email,
      "password": password,
      "age": age,
      "city": city,
      "training": training,
      "experience": experience,
      "user_area": user_area,
      "offer": offer
    })
    .subscribe((responseAPI) => {
      this.login(email, password);
    })
  }

  getUserId(){
    const token = localStorage.getItem('token')
    const data = jwt(token)
    return data.id;
  }

  delete_cookie(name:string) {
    document["cookie"] = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';}

  logout(){
    this.isLoggedIn= false;
    this.delete_cookie('sello');
    localStorage.removeItem('token');
    this._router.navigateByUrl("/login");

  }

  update(name:string, email:string, password:string, age:number, city:string, training:string, experience:string, user_area:string, offer:string ){
    this._http.put("http://localhost:3000/actualizarUsuario", {
      "id":this.getUserId(),
      "name": name,
      "email": email,
      "password": password,
      "age": age,
      "city": city,
      "training": training,
      "experience": experience,
      "user_area": user_area,
      "offer": offer
    },{withCredentials: true})
    .subscribe((responseAPI) => {
      console.log(responseAPI)
      this._router.navigateByUrl("/usuarios")
    })
  }

}
