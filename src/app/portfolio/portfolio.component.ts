import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
sections = [
  { 
    imageUrl: 'assets/img/join.png',
    header: 'Join',
    techstack: 'JavaScript | HTML | CSS | Git',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categorys',
    projectType: 'join', 
    gitUrl : 'https://github.com/MatthiasStu/Join-Task-and-Contact-Management',
    testUrl : 'https://matthias-stute.com/Join-Task-and-Contact-Management/html/login.html'
    
  },
  {
    imageUrl: 'assets/img/sharkie.png', 
    header: 'Sharkie', 
    techstack: 'Javascript | HTML | CSS', 
    description: 'A simple 2D game based on an object-oriented approach. Help sharkie to find coins and fight against the killer whale', 
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
