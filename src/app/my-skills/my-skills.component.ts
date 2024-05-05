import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import path from 'path';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  constructor(private translate: TranslateService){ 
    translate.setDefaultLang('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }

logos = [
  {name: 'Angular', path: 'assets/img/logos/Angular.png'},
  {name: 'TypeScript', path: 'assets/img/logos/Typescript.png'},
  {name: 'JavaScript', path: 'assets/img/logos/JavaScript.png'}, 
  {name: 'HTML', path: 'assets/img/logos/html.png'},
  {name: 'Firebase', path: 'assets/img/logos/Firebase.png'},
  {name: 'GIT', path: 'assets/img/logos/Git.png'},
  {name: 'CSS', path: 'assets/img/logos/css.png'},
  {name: 'Rest-Api', path: 'assets/img/logos/Api.png'},
  {name: 'Scrum', path: 'assets/img/logos/Scrum.png'},
  {name: 'Material design', path: 'assets/img/logos/matdes.png'}
]
}
