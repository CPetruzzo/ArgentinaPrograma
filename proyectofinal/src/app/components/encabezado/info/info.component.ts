import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Info } from 'src/app/model/info';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  isLogged = false;
  info: Info = new Info("","","");

  constructor(
    
    private infoService: InfoService,
    private router: Router,
    private appComp: AppComponent
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void{
    console.log(this.info);
    this.infoService.update(1, this.info).subscribe(
      data => {
        alert("Modicada la información");
        this.router.navigate(['']);
      }
    )
  this.appComp.reloadCurrentPage();
  }
}



