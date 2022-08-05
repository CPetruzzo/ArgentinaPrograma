import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AboutMe } from 'src/app/model/about-me';
import { AboutMeService } from 'src/app/service/aboutme.service';

@Component({
  selector: 'app-new-about-me',
  templateUrl: './new-about-me.component.html',
  styleUrls: ['./new-about-me.component.css']
})
export class NewAboutMeComponent implements OnInit {
  
  isLogged = false;
  aboutMe: AboutMe = new AboutMe("");

  constructor(
    private aboutMeService: AboutMeService,
    private router: Router,
    private appComp: AppComponent
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void{
    console.log(this.aboutMe);
    this.aboutMeService.update(33, this.aboutMe).subscribe(
      data => {
        alert("Modicado el about me");
        this.router.navigate(['']);
      }
    )
  this.appComp.reloadCurrentPage();
  }
}


