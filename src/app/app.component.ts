import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutMeSectionComponent } from "./about-me-section/about-me-section.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { FooterComponent } from './footer/footer.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, LandingPageComponent, AboutMeSectionComponent, MySkillsComponent, PortfolioComponent, ContactMeComponent, FooterComponent]
})
export class AppComponent {
  title = 'matthias-stute-portfolio';
}

