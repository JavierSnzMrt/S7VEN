import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TodosProyectosComponent } from './todos-proyectos/todos-proyectos.component';


const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "inicio", component: InicioComponent},
  {path:"registro", component: RegistroComponent},
  {path:"usuarios", component: UsuariosComponent},
  {path:"proyectos", component: ProyectosComponent},
  {path: "verProyectos", component: TodosProyectosComponent},
  {path:"**", component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
