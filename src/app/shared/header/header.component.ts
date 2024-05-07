import { NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { LanguageService } from '../../language.service';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  

  constructor(private languageService: LanguageService) { }

  changeLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
  
  mobileMenuOpen:boolean = false; 

  openMobileMenu(){ 
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.setBodyOverflow();
  }
  private setBodyOverflow() {
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}
