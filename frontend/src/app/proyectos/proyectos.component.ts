import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  NuevoProyectoForm: FormGroup;
  
  constructor(private _http: HttpClient, private _router: Router, private _user: UserService, private _project: ProjectService) { }
  
  proyectos: object;
  project_name: string;
  area: string;
  description:string;
  search: string;
  status: string;
  fk_id_user:number;

  logout(){
    this._user.logout();
  }
  

 GoProject(){
  this.fk_id_user=this._user.getUserId()
  this._project.postNewProject(this.project_name, this.area, this.description, this.search, this.status, this.fk_id_user)
}
 
  

  ngOnInit(): void {
    
  }

}
