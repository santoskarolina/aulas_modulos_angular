import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import {UsuarioService} from "../painel/usuario.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UsuarioService
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { //condição para rota ser acessada
    const userIsAuthenticated  = this.userService.usuarioAutenticado()
    if(userIsAuthenticated){
      return true
    }else{
      this.logOut()
      return false
    }
  }


  logOut(){
    Swal.fire({
      icon:'info',
      title:'Sessão encerada.',
      text: 'Faça login para acessar sua conta.',
      showConfirmButton: true,
      cancelButtonText: 'OK'
    }).then((result) => {
      if(result.isConfirmed){
        this.router.navigate([''])
      }else{
        this.router.navigate([''])
      }
    })
  }

}
