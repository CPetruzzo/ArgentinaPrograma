import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  
  URL='http://localhost:8080/acercade/';
  
  constructor(private http: HttpClient) {  }

  public getAboutMe(): Observable<Persona>{
    return this.http.get<Persona>(this.URL+ 'perfil/5');
  }



}
