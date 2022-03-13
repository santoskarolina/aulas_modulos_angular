import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {ListaDeModulosComponent} from "./lista-de-modulos/lista-de-modulos.component";
import {ListaDeAulasComponent} from "./lista-de-aulas/lista-de-aulas.component";
import {NovoModuloComponent} from "./novo-modulo/novo-modulo.component";
import {NovaAulaComponent} from "./nova-aula/nova-aula.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {PainelRoutingModule} from "./painel.routing.module";
import {UsuarioService} from "./usuario.service";
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {ModulosGuard} from "../modulos/modulos.guard";
import {AulasService} from "./aulas.service";
import {AulasGuard} from "./aulas.guard";
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {UsuariosGuard} from "./usuarios.guard";
import {ListDeUsuariosComponent} from "./list-de-usuarios/list-de-usuarios.component";
import {NovoUsuarioComponent} from "./novo-usuario/novo-usuario.component";
import {ReportsComponent} from "./reports/reports.component";

@NgModule({
  declarations: [
    NavbarComponent,
    ListaDeModulosComponent,
    ListaDeAulasComponent,
    NovoModuloComponent,
    NovaAulaComponent,
    ListDeUsuariosComponent,
    NovoUsuarioComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    PainelRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    UsuarioService,
    ModulosGuard,
    AulasService,
    AulasGuard,
    UsuariosGuard
  ]
})
export class PainelModule { }
