import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  id_project: number;
  id:number;

  constructor(private _user: UserService, private _http: HttpClient, private rutaActiva: ActivatedRoute, private _project: ProjectService) {}

  proyecto: {
    project_name: string;
    area:string;
    description: string;
    status: string;
    search: string;
    FK_id_user:number;
  }

  logout(){
    this._user.logout();
  }

  ngOnInit(): void {
    this.id = this._user.getUserId()
    console.log(this.id)
    this.id_project=this.rutaActiva.snapshot.params.id
    console.log(this.id_project);
    this._http.get(`http://localhost:3000/verProyecto/${this.id_project}`, {withCredentials: true})
    .subscribe((responseAPI) => {
      console.log(responseAPI)
      this.proyecto = responseAPI[0];
    })
  }

}
