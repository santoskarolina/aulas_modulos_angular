import { Component, OnInit } from '@angular/core';
import {ModulosModel} from "../../modulos/models/modulos.model";
import {ModulosService} from "../../modulos/modulos.service";
import {NgxSpinnerService} from "ngx-spinner";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {finalize} from "rxjs";

@Component({
  selector: 'app-lista-de-modulos',
  templateUrl: './lista-de-modulos.component.html',
  styleUrls: ['./lista-de-modulos.component.css']
})
export class ListaDeModulosComponent implements OnInit {

  modulos: ModulosModel[] = this.activatedRoute.snapshot.data['modulos']

  displayedColumns: string[] = ['modulo_id', 'nome', 'delete'];

  constructor(
    private moduloService: ModulosService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.findModules()
  }

  newModule(){
      this.router.navigate(['/admin/modulos/novo'])
  }

  findModules(){
    this.spinner.show()
    this.moduloService.find().pipe(
      finalize(() => this.spinner.hide())
    ).subscribe(response => {
      this.modulos = response
    })
  }

  delete(id: number, nome: string){
    Swal.fire({
      title: 'Deletar modulo',
      icon: 'question',
      text: `Você quer deletar o modulo ${nome}?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'SIM',
      cancelButtonText: 'NÃO'
    }).then((result) => {
      if(result.isConfirmed){
        this.moduloService.delete(id).subscribe(response => {
          this.ngOnInit()
            this.success('Modulo deletado com sucesso', 'modulos')
        }, error => {
          this.error('Não foi possível deletar este modulo', 'modulos')
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
