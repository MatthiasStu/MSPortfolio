import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';



@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  ngOnInit(): void {
  
    AOS.init();
  } 
  constructor(private translateService: TranslateService) {}

  setMarginLeft(){
    if(this.translateService.currentLang === 'de'){
      return{ 'margin-left' : '145px'}
    }else{ 
      return
    }
  }

  setMaxWidth(){
    if(this.translateService.currentLang === 'de'){
      return{ 'max-width' : '680px'}
    }else{ 
      return
    }
  }

isClicked:boolean = false; 
imgPath:string = 'assets/img/checkbuttonDefault.png'; 
http = inject(HttpClient);

contactData = { 
  name: "",
  email: "",
  message: "",  

}

privacypolicyreport:boolean = false; 
mailTest:boolean = false;

post = {
  endPoint: 'https://matthias-stute.com/sendMail.php',
  body: (payload: any) => JSON.stringify(payload),
  options: {
    headers: {
      'Content-Type': 'text/plain',
      responseType: 'text',
    },
  },
};
Send: any;

onSubmit(ngForm: NgForm) {
  if(!this.isClicked){
    const invalidElement = document.getElementById('invalid')
    if(invalidElement && !this.privacypolicyreport) { 
      this.privacypolicyreport = true; 
      invalidElement.innerHTML += 'Please agree to the privacy policy'
    }
  }else {
    const invalidElement = document.getElementById('invalid')
    if(invalidElement) { 
      invalidElement.innerHTML = ''
    }
   if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {

          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
    ngForm.resetForm();
  } 
}
}

switchImage(){
  this.isClicked = !this.isClicked; 
  if(this.isClicked === true){
    this.imgPath = 'assets/img/checkbuttonChecked.png'
  
  }else{ 
    this.imgPath = 'assets/img/checkbuttonDefault.png'
  }
}; 

isFormFilled(ngForm: NgForm): boolean {
  return ngForm.form.valid && !!this.contactData.name && !!this.contactData.email && !!this.contactData.message;
}
}



