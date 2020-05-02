import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-todos-proyectos',
  templateUrl: './todos-proyectos.component.html',
  styleUrls: ['./todos-proyectos.component.css']
})
export class TodosProyectosComponent implements OnInit {
  
  id: number;

  constructor(private _project: ProjectService, private _http: HttpClient, private _user: UserService ) { }

  logout(){
    this._user.logout();
  }

  proyectos: object;

  filterProject = ""

  ngOnInit(): void {
    this.id = this._user.getUserId()
    console.log(this.id)
    this._http.get("http://localhost:3000/verProyectos", {withCredentials: true})
    .subscribe((responseAPI) => {
      this.proyectos = responseAPI;
    })
  }

}
