import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService} from '@ngx-translate/core';





@Component({
  selector: 'app-landing-page',
  standalone : true, 
  imports: [TranslateModule, NgStyle],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'] // ändere styleUrl zu styleUrls
})
export class LandingPageComponent {

  constructor(private translateService: TranslateService) {}

  setFontSize(){
    if(this.translateService.currentLang === 'de'){
      return{ 'font-size' : '42px'}
    }else{ 
      return{'font-size' : '64px'}
    }
  }


  mailadress:string = 'matthiasstute@yahoo.de';
  linkedin:string = 'https://www.linkedin.com/in/matthias-stute-664147305/';
  github:string = 'https://github.com/MatthiasStu';





  redirectToExternalWebsite(x:number){
    if(x == 2){
      window.open(this.linkedin, '_blank');
    } else if(x == 1){
      window.open(this.github, '_blank');
    }
  }
}