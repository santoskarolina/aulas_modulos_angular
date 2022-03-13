import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import {Aulas, Usuario} from "../modulos/models/modulos.model";
import {UsuarioService} from "./usuario.service";

@Injectable()
export class UsuariosGuard implements Resolve<Usuario[]> {

  constructor(private usuarioservice: UsuarioService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.usuarioservice.find();

  }

}
