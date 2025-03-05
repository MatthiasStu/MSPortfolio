import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent}, 
  {path: 'impressum', component: ImpressumComponent },
  {path: 'privacy-policy', component: PrivacyPolicyComponent}
];


const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled', // Aktiviert das Scrollen zu Hash-Links
  scrollPositionRestoration: 'enabled' // Optional: Merkt sich die Scroll-Position
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)], // routerOptions hinzufügen
  exports: [RouterModule]
})
export class AppRoutingModule {}