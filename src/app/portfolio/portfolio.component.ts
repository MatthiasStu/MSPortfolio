import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor,NgIf,NgClass, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  ngOnInit(): void {
  
    AOS.init();
  } 
sections = [
  { 
    imageUrl: 'assets/img/join.png',
    header: 'Join',
    techstack: 'JavaScript | HTML | CSS | Git',
    projectType: 'join', 
    gitUrl : 'https://github.com/MatthiasStu/Join-Task-and-Contact-Management',
    testUrl : 'https://matthias-stute.com/Join-Task-and-Contact-Management/html/login.html'
    
  },
  {
    imageUrl: 'assets/img/sharkie.png', 
    header: 'Sharkie', 
    techstack: 'Javascript | HTML | CSS', 
    projectType: 'sharkie', 
    gitUrl : 'https://github.com/MatthiasStu/Sharkie-Game',
    testUrl: 'https://matthias-stute.com/sharkieFinish/index.html'
  }
]

goToGithub(url:string){ 
  window.open(url, '_blank');
}

liveTestProject(url:string){ 
  window.open(url, '_blank');
}
}
