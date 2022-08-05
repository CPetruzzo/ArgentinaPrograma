import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educaction';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {

  titulo: string = '';
  lugar: string = '';
  fecha_inicio: number = 0;
  fecha_fin: number = 0;
  educacion: Educacion = new Educacion("","",0,0);

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
  }

  
  onUpdateEdu(id?: number){
    console.log(this.educacion.id);
    if (this.educacion.id != undefined){
    this.educacionService.updateEducacion(this.educacion.id, this.educacion).subscribe(
      data => {
        alert("Modicada la educacion");
      }
    )
      window.location.reload();  
    }
  }
    
}
