export class ModulosModel {
  modulo_id: number;
  nome:string;
  aulas: Aulas[]
}

export class Aulas{
  aula_id: number
  nome:string
  data_aula: Date
  modulo: ModulosModel
}

export class Usuario{
  usuaio_id: number
  nome:string
  email:string
  senha:string
}
