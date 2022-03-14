import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Aulas, ModulosModel} from "../modulos/models/modulos.model";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AulasService {

  baseurl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  find(): Observable<Aulas[]> {
    const url = `${this.baseurl}/aulas`
    return this.http.get<Aulas[]>(url)
  }

  findOne(id: number): Observable<Aulas> {
    const url = `${this.baseurl}/aulas/${id}`
    return this.http.get<Aulas>(url)
  }

  delete(id: number): Observable<void> {
    const url = `${this.baseurl}/aulas/${id}`
    return this.http.delete<void>(url)
  }

  create(aula: Aulas): Observable<Aulas>{
    const url = `${this.baseurl}/aulas`
    return this.http.post<Aulas>(url, aula)
  }

  update(id: number, aula: Aulas): Observable<Aulas>{
    const url = `${this.baseurl}/aulas/${id}`
    return this.http.put<Aulas>(url, aula)
  }

  reports(): Observable<void>{
    const url = `${this.baseurl}/aulas/reports/reports`
    return this.http.get<void>(url)
  }
}
