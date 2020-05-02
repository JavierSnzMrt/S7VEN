import { Pipe, PipeTransform } from '@angular/core';
import { ProjectService } from '../services/project.service';



@Pipe({
  name: 'filterProject'
})
export class FilterProjectPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultProjects = [];
    for(const proyecto of value){
      if (proyecto.description.toLowerCase().indexOf(arg.toLowerCase()) > -1 || proyecto.area.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultProjects.push(proyecto)

      };
    };
    return resultProjects;

  }

}
