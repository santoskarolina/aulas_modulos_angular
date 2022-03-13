import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../usuario.service";
import Swal from "sweetalert2";
import {Route, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  form: FormGroup

  hide = true;

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createUser(){
    this.usuarioService.create(this.form.value).subscribe(response => {
      this.success()
    }, error => {
      if(error.error.error == 'email'){
        this.openSnackBar('Email já cadastrado', 'OK')
      }else{
        this.error()
      }
    })
  }

  cancel(){
    this.router.navigate(['/admin/usuarios'])
  }

  getErrorMessageNome() {
    if (this.form.controls['nome'].hasError('required')) {
      return 'Campo obrigatorio';
    }else if(this.form.controls['nome'].hasError('minlength')){
      return 'Nome deve ter entre 3 e 255 caracteres';
    }else if(this.form.controls['nome'].hasError('maxlength')){
      return 'Nome deve ter entre 3 e 255 caracteres';
    }
    return this.form.controls['nome'].hasError('nome') ? 'Campo obrigatorio' : '';
  }

  getErrorMessageEmail() {
    if (this.form.controls['email'].hasError('required')) {
      return 'Campo obrigatorio';
    }else if(this.form.controls['email'].hasError('email')){
      return 'Informe um email válido';
    }

    return this.form.controls['email'].hasError('email') ? 'Campo obrigatorio' : '';
  }

  getErrorMessageSenha() {
    if (this.form.controls['senha'].hasError('required')) {
      return 'Campo obrigatorio';
    }else if(this.form.controls['senha'].hasError('minlength')){
      return 'Nome deve ter entre 3 e 255 caracteres';
    }else if(this.form.controls['senha'].hasError('maxlength')){
      return 'Nome deve ter entre 3 e 255 caracteres';
    }
    return this.form.controls['senha'].hasError('senha') ? 'Campo obrigatorio' : '';
  }

  success(){
    Swal.fire({
      title: 'Sucesso!',
      text: 'Usuário adicionado com sucesso!',
      icon: 'success',
      showConfirmButton: true,
      confirmButtonText: 'OK'
    }).then((result) =>{
      if(result.isConfirmed){
          this.router.navigate(['/admin/usuarios'])
      }
    })
  }

  error(){
    Swal.fire({
      title: 'Erro!',
      text: 'Não foi possíivel adicionar este usuário!',
      icon: 'success',
      showConfirmButton: true,
      confirmButtonText: 'OK'
    }).then((result) =>{
      if(result.isConfirmed){
        this.router.navigate(['/admin/usuarios'])
      }
    })
  }

  createForm(){
    this.form = this.formBuilder.group({
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(255)
      ]),
      senha: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(255)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ])
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 8000,
      horizontalPosition: "end",
      verticalPosition: "bottom",
    });
  }


}
