import { Component } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  standalone : true, 
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'] 
})
export class LandingPageComponent {
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