import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {
  ngOnInit(): void {
  
    AOS.init();
  } 
}
