import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'https://web-production-90973.up.railway.app/proyecto';
  
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.URL + '/ver/proyectos');
  }

  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/new', proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/edit/${id}?id=${id}&nombre=${proyecto.nombre}&descripcion=${proyecto.descripcion}&url=${proyecto.url}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
