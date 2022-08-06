import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  modalOn: boolean = false;
  proyectoLista: Proyecto[] = [];
  
  constructor(private proyectoService: ProyectoService, private tokenService: TokenService) { }
    
    isLogged = false;
  
    ngOnInit(): void { 
    this.cargarProyecto();
      if(this.tokenService.getToken()){
        this.isLogged=true;
      }else{
        this.isLogged = false;
      }
    }

    cargarProyecto(){
      this.proyectoService.list().subscribe(
        (data) => {
          this.proyectoLista = data;
        }
      );
    }

    onDeleteProy(id?: number){
      console.log(id);
      if(id != undefined){
        this.proyectoService.delete(id)
        .subscribe(data => {
          this.cargarProyecto();
        })
      }
      window.location.reload();
    }
  
    onUpdateProy(id?: number){
      console.log(id);
      let exp = this.proyectoLista.find(x => x.id == id);
      if(id != undefined && exp != undefined){
        this.proyectoService.update(id, exp).subscribe(
        data => {
          alert("Modicado el proyecto");
        }
      )
      this.cargarProyecto();
        window.location.reload();  
      }
    }
  
    onModal(){
      this.modalOn=true;
    }
  
    onModalOff(){
      this.modalOn=false;
    }

}
