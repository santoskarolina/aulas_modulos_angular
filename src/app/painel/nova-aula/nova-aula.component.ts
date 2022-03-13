import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AulasService} from "../aulas.service";
import {NgxSpinnerService} from "ngx-spinner";
import {Aulas, ModulosModel} from "../../modulos/models/modulos.model";
import Swal from "sweetalert2";
import {finalize, forkJoin} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ModulosService} from "../../modulos/modulos.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-nova-aula',
  templateUrl: './nova-aula.component.html',
  styleUrls: ['./nova-aula.component.css']
})
export class NovaAulaComponent implements OnInit {

  modulos: ModulosModel[] = []

  aula: Aulas = new Aulas()

  form: FormGroup

  id_aula: any = this.activatedRoute.snapshot.params['id']

  selected: Date | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private aulaService: AulasService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private formBuilder: FormBuilder,
    private moduleService: ModulosService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.findModules()

    if(this.id_aula != 'novo'){
      this.spinner.show()

      this.aulaService.findOne(this.id_aula).pipe(
        finalize(() => this.spinner.hide())
      ).subscribe(response => {
        this.aula = response
        this.updateForm(response)
      }, error => {
        this.error('Não foi possvel retornar os dados desta aula', 'aulas')
      })
    }
  }

  findModules(){
    this.moduleService.find().pipe(
      finalize(() => this.spinner.hide())
    ).subscribe(response => {
      this.modulos = response
    }, error => {
      this.openSnackBar('Não foi possíel retornar os modulos', 'OK')
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 8000,
      horizontalPosition: "end",
      verticalPosition: "bottom",
    });
  }

  save(){
    this.aulaService.create(this.form.value).subscribe(response => {
      this.success('Aula adicionada com sucesso!', 'aulas')
    }, error => {
      this.error('Não foi possível adicionar esta aula', 'aulas')
    })
  }

  update(){
    this.aulaService.update(this.id_aula, this.form.value).subscribe(response => {
      this.success('Aula atualizada com sucesso!', 'aulas')
    }, error => {
      this.error('Não foi possível atualizar os dados desta aula', 'aulas')
    })
  }

  updateForm(aula: Aulas){
    this.form.patchValue({
      nome: aula.nome,
      modulo: aula.modulo,
      data_aula: aula.data_aula
    })
  }

  delete(){
    Swal.fire({
      icon:'question',
      title: 'Deletar aula',
      text: `Você deseja deletar a aula ${this.aula.nome}?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'SIM',
      cancelButtonText: 'NÃO'
    }).then((result) => {
      if(result.isConfirmed){
        this.aulaService.delete(this.id_aula).subscribe(response => {
          this.success('Aula deletada com sucesso!', 'aulas')
        }, error =>{
          this.error('Não foi possível deletar esta aula', 'aulas')
        })
      }
    })
  }

  cancel(){
    this.router.navigate(['/admin/aulas'])
  }

  createForm(){
    this.form = this.formBuilder.group({
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]),
      modulo: new FormControl(null, [
        Validators.required,
      ]),
      data_aula: new FormControl(null, [
        Validators.required,
      ])
    })
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

  getErrorMessageModulo() {
    if (this.form.controls['modulo'].hasError('required')) {
      return 'Campo obrigatorio';
    }

    return this.form.controls['modulo'].hasError('nome') ? 'Campo obrigatorio' : '';
  }

  getErrorMessageData() {
    if (this.form.controls['data_aula'].hasError('required')) {
      return 'Campo obrigatorio';
    }

    return this.form.controls['data_aula'].hasError('nome') ? 'Campo obrigatorio' : '';
  }


  success(text:string, route:string){
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: `${text}`,
      showConfirmButton: true
    }).then((result) => {
      if(result.isConfirmed){
        this.router.navigate([`/admin/${route}`])
      }
    })
  }

  error(text:string, route:string){
    Swal.fire({
      icon: 'error',
      title: 'Erro!',
      text: `${text}`,
      showConfirmButton: true
    }).then((result) => {
      if(result.isConfirmed){
        this.router.navigate([`/admin/${route}`])
      }
    })
  }

}
