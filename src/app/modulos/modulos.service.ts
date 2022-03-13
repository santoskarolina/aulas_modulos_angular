import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Aulas, ModulosModel} from "./models/modulos.model";

@Injectable({
  providedIn: 'root'
})
export class ModulosService {

  baseurl: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  find(): Observable<ModulosModel[]> {
    const url = `${this.baseurl}/modulos`
    return this.http.get<ModulosModel[]>(url)
  }

  findOne(id: number): Observable<ModulosModel> {
    const url = `${this.baseurl}/modulos/${id}`
    return this.http.get<ModulosModel>(url)
  }

  delete(id: number): Observable<void> {
    const url = `${this.baseurl}/modulos/${id}`
    return this.http.delete<void>(url)
  }

  findClass(modulo_id: number): Observable<Aulas[]> {
    const url = `${this.baseurl}/modulos/aulas/${modulo_id}`
    return this.http.get<Aulas[]>(url)
  }

  create(modulo: ModulosModel): Observable<ModulosModel>{
    const url = `${this.baseurl}/modulos`
    return this.http.post<ModulosModel>(url, modulo)
  }

  reports(): Observable<void>{
    const url = `${this.baseurl}/modulos/reports/reports`
    return this.http.get<void>(url)
  }

  update(id: number, modulo: ModulosModel): Observable<ModulosModel>{
    const url = `${this.baseurl}/modulos/${id}`
    return this.http.put<ModulosModel>(url, modulo)
  }
}
