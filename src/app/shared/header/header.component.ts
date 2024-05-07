import { NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { TranslateModule, TranslateService} from '@ngx-translate/core';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mobileMenuOpen:boolean = false;
  constructor(private translate: TranslateService){ 
    translate.setDefaultLang('en');
  }
   
  switchlanguage(x:string){ 
    this.translate.use(x);
  }

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
