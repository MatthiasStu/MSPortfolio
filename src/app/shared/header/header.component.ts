import { NgIf } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
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
