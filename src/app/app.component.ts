import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './shared/header/header.component';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutMeSectionComponent } from "./about-me-section/about-me-section.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { FooterComponent } from './footer/footer.component';

@AppComponent({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, LandingPageComponent, AboutMeSectionComponent, MySkillsComponent, PortfolioComponent, ContactMeComponent, FooterComponent]
})
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
export class AppComponent {
  title = 'matthias-stute-portfolio';
}

@NgModule({

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]), 
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }