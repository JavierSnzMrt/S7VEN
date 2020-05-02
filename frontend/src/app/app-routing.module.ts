import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TodosProyectosComponent } from './todos-proyectos/todos-proyectos.component';
import { ErrorComponent } from './error/error.component';
import { EquipoComponent } from './equipo/equipo.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HacemosComponent } from './hacemos/hacemos.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { ActualizarPerfilComponent } from './actualizar-perfil/actualizar-perfil.component';
import { MiProyectoComponent } from './mi-proyecto/mi-proyecto.component';
import { ProyectoComponent } from './proyecto/proyecto.component';


const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "hacemos", component: HacemosComponent},
  {path: "inicio", component: InicioComponent},
  {path:"registro", component: RegistroComponent},
  {path:"usuarios", component: UsuariosComponent},
  {path: "perfil/:id", component:PerfilComponent},
  {path:"proyectos", component: ProyectosComponent},
  {path: "verProyectos", component: TodosProyectosComponent},
  {path:"error", component:ErrorComponent},
  {path:"equipo", component:EquipoComponent},
  {path:"proyecto/:id", component: ProyectoComponent},
  {path:"mi-perfil/:id", component:MiPerfilComponent},
  {path:"actualizar-perfil", component: ActualizarPerfilComponent},
  {path:"**", component: InicioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
