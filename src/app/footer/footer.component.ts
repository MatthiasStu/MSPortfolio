import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router) { } 

  navigateToImpressum(){ 
    this.router.navigate(['/impressum']); 
  }
  
goToGitHub(){
  document.location.href = 'https://github.com/MatthiasStu'
}
goToLinkedIn(){ 
  document.location.href = 'https://www.linkedin.com/in/matthias-stute-664147305/'
}
scrollToSection(sectionId: string) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
}
