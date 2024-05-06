import { Component } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  standalone : true, 
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'] // ändere styleUrl zu styleUrls
})
export class LandingPageComponent {
  mailadress:string = 'matthiasstute@yahoo.de';
  linkedin:string = 'https://www.linkedin.com/in/matthias-stute-664147305/';
  github:string = 'https://github.com/MatthiasStu';

  constructor(private translate: TranslateService){ 
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  redirectToExternalWebsite(x:number){
    if(x == 2){
      window.open(this.linkedin, '_blank');
    } else if(x == 1){
      window.open(this.github, '_blank');
    }
  }
}