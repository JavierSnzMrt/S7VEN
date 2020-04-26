import { Pipe, PipeTransform } from '@angular/core';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { UserService } from '../services/user.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultUsers = [];
    for(const usuario of value){
      if (usuario.user_area.toLowerCase().indexOf(arg.toLowerCase()) > -1 || usuario.training.toLowerCase().indexOf(arg.toLowerCase()) > -1 || usuario.experience.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsers.push(usuario)

      };
    };
    return resultUsers;

  }

}
