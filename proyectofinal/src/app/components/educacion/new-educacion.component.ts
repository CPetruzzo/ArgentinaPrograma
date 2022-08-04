import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educaction';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  titulo: string = '';
  lugar: string = '';
  fecha_inicio: number = 2022;
  fecha_fin: number = 2022;

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new Educacion(this.titulo, this.lugar, this.fecha_inicio, this.fecha_fin);
    this.educacionService.addEducacion(edu).subscribe(
      (data) => {
        alert("Educacion creada con exito");
        this.router.navigate(['/educacion']);
      }, err => {
        alert("Error al crear la educacion");
        this.router.navigate(['']);
      }
    );
  }
}

