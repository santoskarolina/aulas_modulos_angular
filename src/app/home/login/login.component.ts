import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../../painel/usuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  emailOuSenhaIncorretos: string

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.form = this.formBuilder.group({
      email: new FormControl( null,[
        Validators.required
      ]),
      senha: new FormControl( null,[
        Validators.required
      ])
    })
  }

  login():void{
    this.usuarioService.gerarTokenUsuario(this.form.controls['email'].value, this.form.controls['senha'].value)
      .subscribe(
        response => {
          const access_token = response.access_token
          localStorage.setItem('access_token' , access_token )
          this.router.navigate(['/admin/modulos'])
        }, error => {
          this.validarSenhaEmail()
        }
      )
  }

  validarSenhaEmail(){
    this.emailOuSenhaIncorretos = 'Email e/ou senha incorretos'
    this.form.reset()
    setTimeout(() => {
      this.emailOuSenhaIncorretos = ''
    },5000);
  }

}
