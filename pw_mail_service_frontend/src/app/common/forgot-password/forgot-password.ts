import { Router } from '@angular/router';
import { AuthService } from './../../services/auth-service';
import { Component, signal, WritableSignal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-forgot-password',
  styleUrl: './forgot-password.scss',
  templateUrl: './forgot-password.html',
})
export class ForgotPassword {
  readonly emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailSent: WritableSignal<boolean> = signal<boolean>(false);

  verifyMailForm: FormGroup = new FormGroup({
    email: new FormControl("lorenzo.viganego@libero.it", [Validators.pattern(this.emailPattern), Validators.required])
  });

  constructor(public auth: AuthService, public router: Router) {}

  verifyMail() {
    const email = this.verifyMailForm.value.email

    if (email) {
      this.auth.forgotPassword(email).subscribe((res) => {
        switch (res.status) {
          case 200: {
            this.emailSent.set(true)
            break;
          }
        }

      }, (res: HttpErrorResponse) => {
        switch (res.status) {
          default: {
            this.router.navigate(["/500"])
          }
        }
      })
    }
  }
}
