import { Component, OnInit } from '@angular/core';
import {ModulosService} from "../modulos.service";
import {ModulosModel} from "../models/modulos.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-listar-modulos',
  templateUrl: './listar-modulos.component.html',
  styleUrls: ['./listar-modulos.component.css']
})
export class ListarModulosComponent implements OnInit {

  modulos: ModulosModel[] = this.activatedRoute.snapshot.data['modulos'];

  constructor(
    private moduloService: ModulosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  findClass(modulo_id: number){
    this.router.navigate([`modulos/${modulo_id}/aulas`])
  }

}
