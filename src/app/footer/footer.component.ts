import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router) { 
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });

  } 


  
  navigateToPP(){ 
    this.router.navigate(['/privacy-policy']); 
  }

goToGitHub(){
  window.open('https://github.com/MatthiasStu', '_blank');
}
goToLinkedIn(){ 
  window.open('https://www.linkedin.com/in/matthias-stute-664147305/', '_blank');
}
scrollToSection(sectionId: string) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
}
