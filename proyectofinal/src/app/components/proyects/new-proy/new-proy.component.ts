import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proy',
  templateUrl: './new-proy.component.html',
  styleUrls: ['./new-proy.component.css']
})
export class NewProyComponent implements OnInit {

  nombre: string = '';
  descripcion: string = '';
  url: string = '';

  constructor(private proyectoService: ProyectoService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proy = new Proyecto(this.nombre, this.descripcion, this.url);
    this.proyectoService.save(proy).subscribe(
      (data) => {
        console.log("Proyecto creado con exito");
        this.router.navigate(['']);
      }
    );
    window.location.reload();
  }
}

