import { Component, OnInit } from '@angular/core';
import {AulasService} from "../aulas.service";
import {ModulosService} from "../../modulos/modulos.service";
import {finalize, forkJoin} from "rxjs";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  total_aulas: any
  total_modulo: any

  constructor(
    private aulasService: AulasService,
    private moduloService: ModulosService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getReport()
  }

  getReport(){

    this.spinner.show()

    forkJoin({
      aulas: this.aulasService.reports(),
      modulos: this.moduloService.reports()
    }).pipe(
      finalize(() =>  this.spinner.hide())
    ).subscribe(response => {
      this.total_aulas = response.aulas
      this.total_modulo = response.modulos
    })
  }
}
