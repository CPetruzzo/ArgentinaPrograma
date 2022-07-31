import { Component, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/model/about-me';
import { AboutMeService } from 'src/app/service/aboutme.service';

@Component({
  selector: 'app-new-about-me',
  templateUrl: './new-about-me.component.html',
  styleUrls: ['./new-about-me.component.css']
})
export class NewAboutMeComponent implements OnInit {

  aboutMe: AboutMe =  new AboutMe("","","");
  constructor(private aboutMeService: AboutMeService) { }

  ngOnInit(): void {
  }

  save(aboutMe: AboutMe): void {
    this.aboutMeService.updateAboutMe(this.aboutMe).subscribe(data=>{
      console.log(data);
    }
    )
  }

}
