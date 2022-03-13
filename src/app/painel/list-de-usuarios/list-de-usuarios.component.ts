import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../modulos/models/modulos.model";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {UsuarioService} from "../usuario.service";
import {NgxSpinnerService} from "ngx-spinner";
import {finalize} from "rxjs";

@Component({
  selector: 'app-list-de-usuarios',
  templateUrl: './list-de-usuarios.component.html',
  styleUrls: ['./list-de-usuarios.component.css']
})
export class ListDeUsuariosComponent implements OnInit {

  usuarios: Usuario[] = this.activatedRoute.snapshot.data['usuarios']

  displayedColumns: string[] = ['usuario_id', 'nome', 'email', 'deletar'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.findUser()
  }

  findUser(){
    this.spinner.show()
    this.usuarioService.find().pipe(
      finalize(() => this.spinner.hide())
    ).subscribe(response => {
      this.usuarios = response
    })
  }

  new_user(){
    this.router.navigate(['/admin/novo-usuario'])
  }

  delete(id: number, nome: string){
    Swal.fire({
      title: 'Deletar usuário',
      icon: 'question',
      text: `Você quer deletar  ${nome}?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'SIM',
      cancelButtonText: 'NÃO'
    }).then((result) => {
      if(result.isConfirmed){
        this.usuarioService.delete(id).subscribe(response => {
          this.findUser()
          this.success('Usuário deletado com sucesso', 'usuarios')
        }, error => {
          this.error('Não foi possível deletar este usuário', 'usuarios')
        })
      }
    })
  }

  success(text:string, route:string){
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: `${text}`,
      showConfirmButton: true
    }).then((result) => {
      if(result.isConfirmed){
        this.router.navigate([`/admin/${route}`])
      }
    })
  }

  error(text:string, route:string){
    Swal.fire({
      icon: 'error',
      title: 'Erro!',
      text: `${text}`,
      showConfirmButton: true
    }).then((result) => {
      if(result.isConfirmed){
        this.router.navigate([`/admin/${route}`])
      }
    })
  }

}
