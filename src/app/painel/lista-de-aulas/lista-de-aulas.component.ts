import { Component, OnInit } from '@angular/core';
import {Aulas} from "../../modulos/models/modulos.model";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {AulasService} from "../aulas.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-lista-de-aulas',
  templateUrl: './lista-de-aulas.component.html',
  styleUrls: ['./lista-de-aulas.component.css']
})
export class ListaDeAulasComponent implements OnInit {

  aulas: Aulas[] = this.activatedRoute.snapshot.data['aulas']

  displayedColumns: string[] = ['aula_id', 'nome', 'modulo', 'dados'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private aulaService: AulasService
  ) { }

  ngOnInit(): void {
    this.findAulas()
  }

  findAulas(){
    this.spinner.show()
      this.aulaService.find().pipe(
        finalize(() =>  this.spinner.hide())
      ).subscribe(response => {
        this.aulas = response
      })
  }

  nova_aula(){
    this.router.navigate(['/admin/aulas/novo'])
  }

}
