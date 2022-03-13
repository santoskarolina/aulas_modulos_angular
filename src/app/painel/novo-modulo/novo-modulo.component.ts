import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ModulosService} from "../../modulos/modulos.service";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {ModulosModel} from "../../modulos/models/modulos.model";
import {finalize} from "rxjs";

@Component({
  selector: 'app-novo-modulo',
  templateUrl: './novo-modulo.component.html',
  styleUrls: ['./novo-modulo.component.css']
})
export class NovoModuloComponent implements OnInit {

  form: FormGroup
  id: any = this.activatedRoute.snapshot.params['id']

  modulo: ModulosModel = new ModulosModel()

  constructor(
    private moduloService: ModulosService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    if(this.id != 'novo'){
      this.spinner.show()
      this.moduloService.findOne(this.id).pipe(
        finalize(() => this.spinner.hide())
      ).subscribe(response => {
        this.modulo = response
        this.updateForm(response)
      })
    }

    this.createForm()
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

  cancel(){
    this.router.navigate(['/admin/modulos'])
  }

  updateModule(){
    this.spinner.show()
    this.moduloService.update(this.id, this.form.value).pipe(
        finalize(() => this.spinner.hide())
    ).subscribe(response => {
      this.success('Modulo atualizado com sucesso!', 'modulos')
    }, error => {
      this.error('Não foi possível atualizar os dados deste modulo', 'modulos')
    })
  }

  updateForm(modulo: ModulosModel){
    this.form.patchValue({
      nome: modulo.nome
    })
  }

  saveModule(){
    this.moduloService.create(this.form.value).subscribe(response => {
      this.success('Modulo adicionado com sucesso!', 'modulos')
    }, error => {
      this.error('Não foi possível adicionar este modulo', 'modulos')
    })
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

  createForm(){
    this.form = this.formBuilder.group({
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ])
    })
  }
}
