import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
// import { SmtpService } from 'src/app/Components/home/smtp.service';
import { ContactFormService } from 'src/app/services/contact-form.service';
import { Form_module } from './form-module';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  myForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: [
      '',
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
    number: ['', Validators.required],
    company: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private formservice:ContactFormService,private router:Router) {}

  model = new Form_module();
  submitted = false;
  error = {};

  ngOnInit(): void {}

  send(): void {
    this.submitted = true;
      // return this.formservice.contactForm(this.model).subscribe((res:Form_module,error)=>{
      //   this.model = res;
      //   this.error = error;
      // })
      // return this.formservice.contactForm(this.model).subscribe(
      //   // res => console.log(this.res)
      //   // error => console.log(this.error)
      // )
      this.formservice.contactForm(this.model).subscribe(
        data =>this.model = data,
        error =>this.model = error
      )


      // this.formservice.contactForm(this.model).subscribe((response: any) => {
      //   console.log(response);
      //   console.log(response);
      // });
  }

  gotoHome() {
    this.router.navigate(['/']);
  }


}
