import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SmtpService as httpservice} from './company-smtp.service';
// import { ReCaptchaV3Service } from 'ngx-captcha';


@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss'],
})



export class CompanyPageComponent implements OnInit {

  // siteKey = "6LeuuzkiAAAAAAarQE-594JCbKWDm6BQBcK9ZZo3"
  submitted = false;
  tabNumber: any = 0;
  myForm: FormGroup;





  constructor(
    private fb: FormBuilder,
    private smtpService: httpservice,
    private acvtivateRoute: ActivatedRoute,
    // private reCaptchaV3Service: ReCaptchaV3Service
  ) {
    this.myForm = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: [
          '',
          Validators.compose([Validators.required, Validators.minLength(5)]),
        ],
        number: ['', Validators.required],
        selection: ['', Validators.required],
        documents: ['', Validators.required],
        recaptcha: ['', Validators.required],
      });

    // Tab-Routing
    this.acvtivateRoute.queryParams.subscribe((params: any) => {
      // console.log(params)
      if (params.tab) {
        this.tabNumber = params.tab;
      }
    })


  }


  ngOnInit(): void {}

  // submit-form-
  send(): void {
    this.submitted = true;

    console.log(this.myForm)
    this.smtpService.sendMailCareers(this.myForm.value).subscribe({
          next: (data: any) => {
            console.log('APIDS', data ,this.myForm);
            // alert(
            //   'Thank you!' +
            //   '' +
            //   'Your message has been successfully sent. We will contact you very soon!'
            // );
            // this.myForm.reset();
          },
          error: (err: any) => {
            // console.log('err', err);
          },
        });

    // if (this.myForm.valid) {
    //   this.smtpService.sendMailCareers(this.myForm.value).subscribe({
    //     next: (data: any) => {
    //       // console.log('APIDS', data);
    //       alert(
    //         'Thank you!' +
    //         '' +
    //         'Your message has been successfully sent. We will contact you very soon!'
    //       );
    //       this.myForm.reset();
    //     },
    //     error: (err: any) => {
    //       // console.log('err', err);
    //     },
    //   });
    //   // Captcha-code
    //   // for (const control of Object.keys(this.myForm.controls)) {
    //   //   this.myForm.controls[control].markAsTouched();
    //   // }

    //   return;
    // } else {
    //   // alert('Please fill all the required fields');
    //   // console.log('not-valid');
    // }
  }
}
