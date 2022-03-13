import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {UsuarioService} from "../usuario.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy, OnInit{

  events: string[] = [];
  opened: boolean;

  mobileQuery: MediaQueryList

  private _mobileQueryListener: () => void

  constructor(
    private usuarioService: UsuarioService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener)
  }

  logOut(){
    Swal.fire({
      icon: 'question',
      title: 'Encerrar sessão',
      text: 'Você deseja encerrar esta sessão?',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'NÃO',
      confirmButtonText: 'SIM'
    }).then((restul) => {
      if(restul.isConfirmed){
        this.usuarioService.logOut()
      }
    })
  }
}
