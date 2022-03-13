import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListarModulosComponent} from "./listar-modulos/listar-modulos.component";
import {ModulosRoutingModule} from "./modulos.routing.module";
import {SharedModule} from "../shared/shared.module";
import {ModulosService} from "./modulos.service";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ListarAulasPorModuloComponent} from "./listar-aulas-por-modulo/listar-aulas-por-modulo.component";
import {ModulosGuard} from "./modulos.guard";
import {AulaGuard} from "./aula.guard";

@NgModule({
  declarations: [
    ListarModulosComponent,
    ListarAulasPorModuloComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ModulosRoutingModule,
    SharedModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    ModulosService,
    ModulosGuard,
    AulaGuard
  ]
})
export class ModulosModule { }
