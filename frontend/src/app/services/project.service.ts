import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http: HttpClient, private _router: Router) { }

  postNewProject(project_name:string, area:string, description:string, search:string, status:string, FK_id_user:number){
    this._http.post("http://localhost:3000/nuevoProyecto", {
      "project_name":project_name,
      "area": area,
      "description": description,
      "search": search,
      "status": status,
      "FK_id_user": FK_id_user,
    }, {withCredentials: true})
    .subscribe((responseAPI) => {
      this._router.navigateByUrl("/verProyectos")
    })
  }

}
