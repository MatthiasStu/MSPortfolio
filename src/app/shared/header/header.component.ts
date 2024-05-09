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
  imgPath:string = "assets/img/british.png";  
  mobileMenuOpen:boolean = false;
  isTranslated:boolean = false; 



  constructor(private translate: TranslateService){ 
    translate.setDefaultLang('en');
  }
   
  switchlanguage() { 
    this.switchImage()
    if(this.isTranslated == false){ 
    this.translate.use('en');
    }else { 
    this.translate.use('de'); 
    }
  }

  switchImage(){ 
    if(this.isTranslated == false){ 
      this.imgPath = "assets/img/german.png"
      this.isTranslated = true; 
    }else{ 
      this.imgPath = "assets/img/british.png";  
      this.isTranslated = false; 
    }
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
