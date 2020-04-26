import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UserService } from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TodosProyectosComponent } from './todos-proyectos/todos-proyectos.component';
import { ErrorComponent } from './error/error.component';
import { EquipoComponent } from './equipo/equipo.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FilterPipe } from './pipe/filter.pipe';
import { HacemosComponent } from './hacemos/hacemos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    ProyectosComponent,
    UsuariosComponent,
    TodosProyectosComponent,
    ErrorComponent,
    EquipoComponent,
    PerfilComponent,
    FilterPipe,
    HacemosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
