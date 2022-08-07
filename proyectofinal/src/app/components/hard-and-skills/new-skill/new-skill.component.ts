import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  
  img: string = '';
  skill: string = '';
  descripcion: string = '';

  constructor(private skillsService: SkillsService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skl = new Skills(this.img, this.skill, this.descripcion);
    this.skillsService.save(skl).subscribe(
      (data) => {
        console.log("Habilidad creada con exito");
        this.router.navigate(['']);
      }
    );
    window.location.reload();
  }
}