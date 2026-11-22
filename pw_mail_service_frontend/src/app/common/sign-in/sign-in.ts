import { Component, inject, signal, WritableSignal } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router, RouterLink } from '@angular/router';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-sign-in',
  styleUrl: './sign-in.scss',
  templateUrl: './sign-in.html',
})
export class SignIn {
  private AuthService = inject(AuthService);
  readonly emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  readonly passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s])\S{8,}$/;
  signedIn: WritableSignal<boolean> = signal<boolean>(false)

  constructor(public router: Router) {}
  signInFormGroup: FormGroup = new FormGroup({
    email: new FormControl("user_1@example.com", [Validators.pattern(this.emailPattern), Validators.required]),
    password: new FormControl("Password$1", [Validators.pattern(this.passwordPattern), Validators.required])
  })

  signIn() {
    const email = this.signInFormGroup.value.email
    const password = this.signInFormGroup.value.password

    if (email && password) {
      this.AuthService.signIn(email, password).subscribe((res) => {
            if (res) {
              this.signedIn.set(true)
              this.router.navigate(["/"])
            }
      }, (err: HttpErrorResponse) => {

      })
    }
  }
}
