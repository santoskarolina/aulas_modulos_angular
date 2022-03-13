import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import {AulasService} from "./aulas.service";
import {Aulas} from "../modulos/models/modulos.model";

@Injectable()
export class AulasGuard implements Resolve<Aulas[]> {

  constructor(private aulasService: AulasService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.aulasService.find();

  }

}
