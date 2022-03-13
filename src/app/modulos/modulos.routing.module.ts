import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {ListarModulosComponent} from "./listar-modulos/listar-modulos.component";
import {ListarAulasPorModuloComponent} from "./listar-aulas-por-modulo/listar-aulas-por-modulo.component";
import {ModulosGuard} from "./modulos.guard";
import {AulaGuard} from "./aula.guard";

const routes: Routes = [
  { path: '', component: ListarModulosComponent, resolve: { modulos: ModulosGuard }},
  { path: ':id/aulas', component: ListarAulasPorModuloComponent, resolve: {aulas: AulaGuard}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }
