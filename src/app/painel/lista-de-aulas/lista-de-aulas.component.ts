import { Component, OnInit } from '@angular/core';
import {Aulas} from "../../modulos/models/modulos.model";
import {ActivatedRoute, Route, Router} from "@angular/router";

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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  nova_aula(){
    this.router.navigate(['/admin/aulas/novo'])
  }

}
