import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-impressum',
    standalone: true,
    templateUrl: './impressum.component.html',
    styleUrl: './impressum.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class ImpressumComponent {

}
