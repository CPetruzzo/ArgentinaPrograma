import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educaction';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  titulo: string = '';
  lugar: string = '';
  f_inicio: number = 2022;
  f_fin: number = 2022;
  educacionLista: Educacion[] = [];

  constructor(private educacionService: EducacionService
    , private tokenService: TokenService, private router: Router) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionService.getEducacion().subscribe(data => {
      this.educacionLista = data;
    })
  }

  onCreate(): void{
    const edu = new Educacion(this.titulo, this.lugar, this.f_inicio, this.f_fin);
    this.educacionService.addEducacion(edu).subscribe(
      (data) => {
        alert("Educacion creada con exito");
      }, err => {
        alert("Error al crear la educacion");
      }
    );
    this.educacionLista.push(edu);
    
  }
}

