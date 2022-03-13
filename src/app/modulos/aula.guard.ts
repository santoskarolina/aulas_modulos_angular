import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import {ModulosService} from "./modulos.service";
import {Aulas, ModulosModel} from "./models/modulos.model";


@Injectable()
export class AulaGuard implements Resolve<Aulas[]> {

  constructor(private modulosService:ModulosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

   const modulo_id = route.params['id']
    return this.modulosService.findClass(modulo_id)

  }

}
