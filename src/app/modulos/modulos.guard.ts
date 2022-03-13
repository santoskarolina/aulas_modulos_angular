import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import {ModulosService} from "./modulos.service";
import {ModulosModel} from "./models/modulos.model";


@Injectable()
export class ModulosGuard implements Resolve<ModulosModel[]> {

  constructor(private modulosService:ModulosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.modulosService.find();

  }

}
