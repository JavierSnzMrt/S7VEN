import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  NuevoProyectoForm: FormGroup;
  
  constructor(private _http: HttpClient, private _router: Router) { }

  project_name: string;
  area: string;
  description:string;
  search: string;
  status: string;

  postNewProject(){
    this._http.post("http://localhost:3000/nuevoProyecto", {
      "project_name":this.project_name,
      "area": this.area,
      "description": this.description,
      "search": this.search,
      "status": this.status,
    }, {withCredentials: true})
    .subscribe((responseAPI) => {
      this._router.navigateByUrl("/verProyectos")
    })
  }

  proyectos: object;
  
  ngOnInit(): void {
    this._http.post("http://localhost:3000/nuevoProyecto", {withCredentials: true})
    .subscribe((responseAPI) => {
      this.proyectos = responseAPI;
    })
  }

}
