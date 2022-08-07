import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-and-skills',
  templateUrl: './hard-and-skills.component.html',
  styleUrls: ['./hard-and-skills.component.css']
})
export class HardAndSkillsComponent implements OnInit {

  constructor(private skillsService: SkillsService, private tokenService: TokenService) { }

  isLogged = false;
  skillsLista: Skills[] = [];
  modalOn: boolean = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  cargarSkills(){
    this.skillsService.lista().subscribe(
      (data) => {
        this.skillsLista = data;
      }
    );
  }

  onDeleteSkill(id?: number){
    console.log(id);
    if(id != undefined){
      this.skillsService.delete(id)
      .subscribe(data => {
        this.cargarSkills();
      })
    }
    window.location.reload();
  }

  onUpdateSkill(id?: number){
    console.log(id);
    let skill = this.skillsLista.find(x => x.id == id);
    if(id != undefined && skill != undefined){
      this.skillsService.update(id, skill).subscribe(
      data => {
        alert("Modicado el skills");
      }
    )
    }
    this.cargarSkills();
    window.location.reload();  
  }

  onModal(){
    this.modalOn=true;
  }

  onModalOff(){
    this.modalOn=false;
  }



}
