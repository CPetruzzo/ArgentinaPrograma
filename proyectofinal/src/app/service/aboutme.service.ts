import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutMe } from '../model/about-me';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  
  URL='http://localhost:8080/acercade/';
  
  constructor(private http: HttpClient) {  }

  public getAboutMe(): Observable<AboutMe>{
    return this.http.get<AboutMe>(this.URL+ 'perfil/33');
  }

  public addAboutMe(aboutMe: AboutMe): Observable<AboutMe>{
    return this.http.post<AboutMe>(this.URL+ 'new/persona', aboutMe);
  }

  public updateAboutMe(aboutMe: AboutMe): Observable<AboutMe>{
    return this.http.put<AboutMe>(this.URL+ 'modificar/33', aboutMe);
  }

  public deleteAboutMe(aboutMe: AboutMe): Observable<AboutMe>{
    return this.http.delete<AboutMe>(this.URL+ 'eliminar/'+aboutMe.id);
  }
  

}
