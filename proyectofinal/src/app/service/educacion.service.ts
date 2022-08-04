import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educaction';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  URL='http://localhost:8080/educacion/';
  
  constructor(private http: HttpClient) {  }

  //para cargar todas
  public getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.URL+ 'ver/educacion');
  }

//  para ver una sola
  public getEducacionById(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.URL+ `ver/educacion/${id}`);
  }

  //para agregar una
  public addEducacion(educacion: Educacion): Observable<Educacion>{
    return this.http.post<Educacion>(this.URL+ 'new/educacion', educacion);
  }

  //para actualizar una
  public updateEducacion(id: number, educacion: Educacion): Observable<Educacion>{
    return this.http.put<Educacion>(this.URL+ `modificar/${id}`, educacion);
  }

  //para borrar una
  public deleteEducacion(id: number): Observable<Educacion>{
    return this.http.delete<Educacion>(this.URL+ `delete/${id}`);
  }





}