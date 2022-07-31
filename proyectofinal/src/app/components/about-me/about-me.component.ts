import { Component, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/model/about-me';

import { AboutMeService } from 'src/app/service/aboutme.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutMe: AboutMe =  new AboutMe("","","");
  
  constructor(private aboutMeService: AboutMeService) { }

  ngOnInit(): void {
    this.aboutMeService.getAboutMe().subscribe(data=>{
      this.aboutMe = data;
    })
  }
  
  save(aboutMe: AboutMe): void {
    this.aboutMeService.updateAboutMe(this.aboutMe).subscribe(data=>{
      console.log(data);
    }
    )
  }

}
