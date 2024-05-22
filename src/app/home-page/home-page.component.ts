import { Component } from '@angular/core';
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { AboutMeSectionComponent } from "../about-me-section/about-me-section.component";
import { MySkillsComponent } from "../my-skills/my-skills.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [LandingPageComponent, AboutMeSectionComponent, MySkillsComponent, PortfolioComponent, ContactMeComponent]
})
export class HomePageComponent {
}
