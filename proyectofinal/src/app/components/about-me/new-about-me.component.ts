import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AboutMe } from 'src/app/model/about-me';
import { AboutMeService } from 'src/app/service/aboutme.service';

@Component({
  selector: 'app-new-about-me',
  templateUrl: './new-about-me.component.html',
  styleUrls: ['./new-about-me.component.css']
})
export class NewAboutMeComponent implements OnInit {

  @Input() aboutMe: string=("");
  @Output() onCreate: EventEmitter<AboutMe> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    console.log("clickeo save") ;
  }
  // onSubmit(descripcion: string): void {
  //   const aboutMe = new AboutMe(descripcion);
  //   console.log("AboutMe: " + aboutMe.descripcion);
  //   this.onCreate.emit(aboutMe);
  // }


}
