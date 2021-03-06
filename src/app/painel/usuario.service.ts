import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt'
import {Router} from "@angular/router";
import {Usuario} from "../modulos/models/modulos.model";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string = environment.baseUrl

  jwtHelperService: JwtHelperService = new JwtHelperService()

  constructor(private http: HttpClient, private router: Router) { }

  gerarTokenUsuario(email: string, senha: string): Observable<any>{
    const parametros = new HttpParams()
      .set('email', email)
      .set('senha', senha)
    const url = `${this.baseUrl}/auth/login`
    return this.http.post<any>(url, parametros)
  }

  find(): Observable<Usuario[]> {
    const url = `${this.baseUrl}/usuario`
    return  this.http.get<Usuario[]>(url)
  }

  create(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/usuario`
    return  this.http.post<Usuario>(url, usuario)
  }

  delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/usuario/${id}`
    return this.http.delete<void>(url)
  }

  obterToken(){
    const token = localStorage.getItem('access_token')
    if(token){
      const tokenJSON = JSON.parse(JSON.stringify(token))
      return tokenJSON
    }
    return null //token não existe
  }

  usuarioAutenticado(): boolean {
    const token = this.obterToken()
    if(token){
      const verificarTokenExpirado = this.jwtHelperService.isTokenExpired(token)
      return !verificarTokenExpirado //vai estar autenticado quando o token não estiver expirado
    }
    return false //não está autenticado
  }

  logOut(){
    localStorage.removeItem('access_token')
    this.router.navigate([''])
  }
}
