import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SmtpService } from 'src/app/Components/home/smtp.service';
import { transition, trigger, useAnimation } from '@angular/animations';
import { SidebarOpenAnimation, SidebarCloseAnimation } from './animations';
import { Router } from '@angular/router';

const animationParams = {
  menuWidth: '250px',
  animationStyle: '500ms ease',
};

declare var $scope:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('sideMenu', [
      transition(':enter', [
        useAnimation(SidebarOpenAnimation, {
          params: {
            ...animationParams,
          },
        }),
      ]),
      transition(':leave', [
        useAnimation(SidebarCloseAnimation, {
          params: {
            ...animationParams,
          },
        }),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'clever-monks-latest';
  isOpen = false;


  myForm = this.fb.group({
    email: [
      '',
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
  });

  submitted = false;

  constructor(private fb: FormBuilder, private smtpService: SmtpService,private router: Router) {}

  ngOnInit(): void {}

  send(): void {

    if (this.myForm.valid) {
      this.smtpService.sendMail(this.myForm.value).subscribe({
        next: (data: any) => {
          // console.log('APIDS', data);
          alert("Email sent successfully.")
          this.myForm.reset();
          // this.router.navigateByUrl('/home-page');

        },

        error: (err: any) => {
          // console.log('err', err);
          console.log("Email not sent successfully.")
        },
      });
      return;
    } else {
    }
  }

}
