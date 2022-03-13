import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  { path: 'modulos',
    loadChildren: () => import('./modulos/modulos.module').then(m => m.ModulosModule),
  },
  { path: 'admin',
    loadChildren: () => import('./painel/painel.module').then(m => m.PainelModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
