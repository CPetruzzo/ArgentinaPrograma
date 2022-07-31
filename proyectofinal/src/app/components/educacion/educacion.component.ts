import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educaction';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionLista: Educacion[] = [];

  constructor(private educacionService: EducacionService
    //  ,private tokenService: TokenService 
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion(); 
    // if (this.tokenService.getToken()) {
    //   this.isLogged = true;
    // } else {
    //   this.isLogged = false;
    // }
  }


    cargarEducacion(): void {
      this.educacionService.getEducacion().subscribe(data => {
        this.educacionLista = data;
      })
    }
  }

