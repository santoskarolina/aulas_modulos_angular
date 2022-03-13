import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ModulosService} from "../modulos.service";
import {Aulas, ModulosModel} from "../models/modulos.model";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-listar-aulas-por-modulo',
  templateUrl: './listar-aulas-por-modulo.component.html',
  styleUrls: ['./listar-aulas-por-modulo.component.css']
})
export class ListarAulasPorModuloComponent implements OnInit {

  aulas: Aulas[] =  this.activatedRoute.snapshot.data['aulas']

  modulo: ModulosModel = new ModulosModel()

  modulo_id: number = this.activatedRoute?.snapshot?.params['id']

  constructor(
    private router: Router,
    private moduloServie: ModulosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.findOne()
  }

  findOne(){

    forkJoin({
      modulo: this.moduloServie.findOne(this.modulo_id),
      aulas:  this.moduloServie.findClass(this.modulo_id)
    }).subscribe(response => {
      this.modulo = response.modulo
      this.aulas = response.aulas
    })
  }
}
