import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {ListaDeAulasComponent} from "./lista-de-aulas/lista-de-aulas.component";
import {ListaDeModulosComponent} from "./lista-de-modulos/lista-de-modulos.component";
import {NovoModuloComponent} from "./novo-modulo/novo-modulo.component";
import {NovaAulaComponent} from "./nova-aula/nova-aula.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {ModulosGuard} from "../modulos/modulos.guard";
import {AulasGuard} from "./aulas.guard";
import {ListDeUsuariosComponent} from "./list-de-usuarios/list-de-usuarios.component";
import {UsuariosGuard} from "./usuarios.guard";
import {NovoUsuarioComponent} from "./novo-usuario/novo-usuario.component";
import {ReportsComponent} from "./reports/reports.component";

const routes: Routes = [
  { path: '', component: NavbarComponent, children: [
    { path: 'modulos', component: ListaDeModulosComponent, resolve: {modulos: ModulosGuard} },
    { path: 'aulas', component: ListaDeAulasComponent, resolve: {aulas: AulasGuard} },
     { path: 'modulos/:id', component: NovoModuloComponent },
      { path: 'dashboard', component: ReportsComponent },
     { path: 'aulas/:id', component: NovaAulaComponent },
      { path: 'usuarios', component: ListDeUsuariosComponent, resolve: {usuarios: UsuariosGuard} },
      { path: 'novo-usuario', component: NovoUsuarioComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
