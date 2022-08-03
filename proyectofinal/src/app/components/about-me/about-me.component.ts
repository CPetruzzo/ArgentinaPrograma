import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutMe } from 'src/app/model/about-me';

import { AboutMeService } from 'src/app/service/aboutme.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutMe: AboutMe =  new AboutMe("");
  descripcion: string="";

  constructor(private aboutMeService: AboutMeService, private router: Router) { }

  ngOnInit(): void {
    this.aboutMeService.getAboutMe().subscribe(data=>{
      this.aboutMe = data;
    })
  }

  onSubmit(): void {
    this.aboutMeService.updateAboutMe(this.aboutMe).subscribe(data=>{
      this.aboutMe = data;
    }
    )
  }

}
